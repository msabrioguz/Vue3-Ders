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
  startAfter
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
      router.push({ name: 'courses' });
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
      console.log(this.adminCourses);
    }
  }
});
