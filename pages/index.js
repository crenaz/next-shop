import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CategoryCard from '../components/CategoryCard';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard image="/images/cars.jpg" name="Cars" />
        <CategoryCard image="/images/computers.jpg" name="Computers" />
        <CategoryCard image="/images/cooking.jpg" name="Cooking" />
      </div>
      <div className={styles.large}>
        <CategoryCard image="/images/cats.jpg" name="Cats" />
        <CategoryCard image="/images/coffee.jpg" name="Coffee" />
      </div>
    </main>
  );
};

export default HomePage;