import Head from 'next/head';
import Header from '../components/Header';
import NewsSection from '../components/NewsSection';
import FacultySection from '../components/FacultySection';
import ContactForm from '../components/ContactForm';
import StudentRepresentative from '../components/StudentRepresentative';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Curso de ADS</title>
      </Head>
      <Header />
      <NewsSection />
      <FacultySection />
      <ContactForm />
      <ClassInfo />
      <StudentsWorking />
      <StudentRepresentative name="Joana Silva" email="joana.silva@example.com" />
    </div>
  );
};

export default Home;
