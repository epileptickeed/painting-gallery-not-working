import Nav from '../components/Navbar/Nav';
import styles from './Home.module.scss';
import Paintings from '../components/Paintings/Paintings';

const Home = () => {
  return (
    <div className={styles.home}>
      <Nav />
      <Paintings />
    </div>
  );
};

export default Home;
