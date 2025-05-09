import styles from './Footer.module.scss';

function Footer () {
  return (
    <footer>
      <p className={styles.footer}>
        Created by{' '}
        <a href='https://www.linkedin.com/in/katerynaboikova/'>
          Kateryna Boikova
        </a>
      </p>
    </footer>
  );
}

export default Footer;
