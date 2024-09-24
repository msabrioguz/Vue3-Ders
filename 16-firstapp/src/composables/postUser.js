import axios from 'axios';
import { ref } from 'vue';
import { useToast } from 'vue-toast-notification';

const postUser = (user) => {
  const $toast = useToast();
  const loading = ref(false);
  const uri = ref('http://localhost:3000/users');

  const handleSubmit = () => {
    //   user.id = Math.floor(Math.random() * 101).toString();
    try {
      loading.value = true;
      axios({
        method: 'POST',
        url: uri.value,
        data: user
      })
        .then((data) => {
          console.log(data);
          console.log('Veri eklendi.');
          $toast.success('Başarılı bir şekilde veri eklendi.');
        })
        .catch((error) => {
          console.log(error);
          $toast.error('Bir şeyler ters gitti.<br/>' + error.message);
        })
        .finally(() => {
          loading.value = false;
          console.log('Finally');
        });
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };
  return { loading, handleSubmit };
};

export default postUser;
