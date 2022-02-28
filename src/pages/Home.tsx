import Categories from "../components/Categories";
import Collection from "../components/Collections";
import Create from "../components/Create";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Meet from "../components/Meet";
import Header from "../components/Navigation";
import Notable from "../components/Notable";
import Resources from "../components/Resources";
import Trending from "../components/Trending";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main>
          <Hero />
          <Notable />
          <Collection />
          <Trending />
          <Create />
          <Resources />
          <Categories />
          <Meet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
