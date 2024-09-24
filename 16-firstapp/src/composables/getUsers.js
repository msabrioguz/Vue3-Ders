import { ref, reactive } from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toast-notification';
// import 'vue-toast-notification/dist/theme-sugar.css';

const getUsers = () => {
  const $toast = useToast();
  const uri = ref('http://localhost:3000/users');

  const data = reactive({
    users: [],
    loading: true
  });

  const loadUsers = async () => {
    try {
      const response = await axios.get(uri.value);
      console.log(response);
      data.users = response.data;
      data.loading = false;
    } catch (error) {
      console.log(error);
      data.loading = false;
      $toast.error('Bir şeyler ters gitti. <br/>' + error.message);
    }
  };

  return { data, loadUsers };
};

export default getUsers;
