import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import CategoryCard from '../components/CategoryCard';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard image="/images/cars.jpg" name="cars" />
        <CategoryCard image="/images/computers.jpg" name="computers" />
        <CategoryCard image="/images/cooking.jpg" name="cooking" />
      </div>
      <div className={styles.large}>
        <CategoryCard image="/images/cats.jpg" name="cats" />
        <CategoryCard image="/images/coffee.jpg" name="coffee" />
      </div>
    </main>
  );
};

export default HomePage;