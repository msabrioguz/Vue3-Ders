import { defineStore } from 'pinia';
import router from '@/router';
import { db } from '@/utils/firebase';
import {
  collection,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  query,
  orderBy,
  getDocs,
  limit,
  startAfter,
  deleteDoc
} from 'firebase/firestore';
import { useUserStore } from '@/stores/user';

let coursesCol = collection(db, 'courses');

export const useCourseStore = defineStore('course', {
  state: () => ({
    homeCourses: '',
    adminCourses: '',
    adminLastVisible: ''
  }),
  getters: {},
  actions: {
    async addCourse(formData) {
      const userStore = useUserStore();
      const user = userStore.getUserData;

      const newCourse = doc(coursesCol);
      await setDoc(newCourse, {
        timestamp: serverTimestamp(),
        owner: {
          uid: user.uid,
          firstname: user.firstname,
          lastname: user.lastname
        },
        ...formData
      });
      router.push({ name: 'courses', query: { reload: true } });
    },
    async adminGetCourses(docLimit) {
      const q = query(coursesCol, orderBy('timestamp', 'desc'), limit(docLimit));
      const querySnapShot = await getDocs(q);

      const lastVisible = querySnapShot.docs[querySnapShot.docs.length - 1];

      const courses = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      this.adminCourses = courses;
      this.adminLastVisible = lastVisible;
      // Todo: console.log(this.adminCourses);
      // test
      // * test
    },
    async adminGetMoreCourses(docLimit) {
      let oldCourses = this.adminCourses;

      const q = query(
        coursesCol,
        orderBy('timestamp', 'desc'),
        startAfter(this.adminLastVisible),
        limit(docLimit)
      );
      const querySnapShot = await getDocs(q);
      const lastVisible = querySnapShot.docs[querySnapShot.docs.length - 1];

      const newCourses = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      this.adminCourses = [...oldCourses, ...newCourses];
      this.adminLastVisible = lastVisible;
    },
    async removeById(courseID) {
      await deleteDoc(doc(db, 'courses', courseID));
      const newList = this.adminCourses.filter((course) => {
        return course.id != courseID;
      });

      this.adminCourses = newList;
    },
    async getCourseById(courseID) {
      try {
        const docRef = await getDoc(doc(db, 'courses', courseID));
        // console.log(docRef.data());
        return docRef.data();
      } catch (error) {
        console.log(error.message);
        return error;
      }
    },
    async updateCourse(courseID, formData) {
      const docRef = doc(db, 'courses', courseID);
      await updateDoc(docRef, { ...formData });
    }
  }
});
