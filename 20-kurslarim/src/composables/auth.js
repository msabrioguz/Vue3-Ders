import { ref } from 'vue';
import { auth } from '@/utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useUserStore } from '@/stores/user';

export const firstLoad = () => {
  const userStore = useUserStore();
  const loading = ref(true);

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      await userStore.autosignin(user.uid);
    }
    loading.value = false;
  });

  return { loading };
};
