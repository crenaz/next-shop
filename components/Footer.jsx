import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright <span className={styles.brand}>Crenaz's C-Store</span>{' '}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer