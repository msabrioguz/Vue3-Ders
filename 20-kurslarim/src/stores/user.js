import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { db, auth } from '@/utils/firebase';
import { getDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import router from '@/router';
import { useToast } from 'vue-toast-notification';

const $toast = useToast();

const default_user = {
  uid: null,
  email: null,
  firstname: null,
  lastname: null,
  isAdmin: null
};

export const useUserStore = defineStore('user', {
  state: () => ({
    loading: false,
    user: default_user,
    auth: false
  }),
  getters: {
    getUserData(state) {
      return state.user;
    },
    getUserID(state) {
      return state.user.uid;
    }
  },
  actions: {
    setUser(user) {
      this.user = { ...this.user, ...user };
      this.auth = true;
    },
    async getUserProfile(uid) {
      try {
        const userRef = await getDoc(doc(db, 'users', uid));
        // console.log(userRef.data());
        return userRef.data();
      } catch (error) {
        console.log(error.message);
      }
    },
    async autosignin(uid) {
      try {
        const userData = await this.getUserProfile(uid);
        this.setUser(userData);
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async register(formData) {
      try {
        this.loading = true;
        const response = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        // console.log(response);

        const newUser = {
          uid: response.user.uid,
          email: response.user.email,
          isAdmin: false
        };

        await setDoc(doc(db, 'users', response.user.uid), newUser);

        this.setUser(newUser);

        router.push('/dashboard');
        $toast.success('Hoşgeldiniz!');
      } catch (error) {
        console.log(error.message);
        $toast.error(error.message);
      } finally {
        this.loading = false;
      }
    },
    async login(formData) {
      try {
        this.loading = true;
        const response = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        // console.log(response);

        const userData = await this.getUserProfile(response.user.uid);
        this.setUser(userData);

        router.push('/dashboard');
        $toast.success('Hoşgeldiniz!');
      } catch (error) {
        console.log(error.message);
        $toast.error(error.message);
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      await signOut(auth);
      this.user = default_user;
      this.auth = false;
      router.push('/');
    },
    async updateProfile(formData) {
      try {
        await updateDoc(doc(db, 'users', this.getUserID), { ...formData });
        this.setUser(formData);
        $toast.success('Profiliniz güncellendi.');
      } catch (error) {
        console.log(error.message);
        $toast.error(error.message);
      }
    }
  }
});
