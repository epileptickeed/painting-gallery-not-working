import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <img src="/logo.png" alt="logo" />
      <button>
        <img className={styles.light_icon} src="/icons/light_icon.png" alt="" />
      </button>
    </nav>
  );
};

export default Nav;
