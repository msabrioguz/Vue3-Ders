import * as yup from 'yup';

const CourseSchema = {
  category: yup.string().required('Kategori zorunludur.'),
  title: yup.string().required('Başlık zorunludur.'),
  summary: yup
    .string()
    .required('Özet zorunludur.')
    .min(10, 'Minimum 10 karakter girmelisiniz.')
    .max(250, 'Maksimum 250 karakter girebilirsiniz.'),
  rating: yup.string().required('Kurs puanı zorunludur.'),
  img: yup.string().required('Kurs resmi zorunludur.').url('Lütfen geçerli bir url giriniz.'),
  description: yup.string().required('Kurs açıklaması zorunludur.')
};

export default CourseSchema;
