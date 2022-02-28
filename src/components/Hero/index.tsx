import styles from "./index.module.scss";
import { AiFillPlayCircle } from "react-icons/ai";
import { GrCircleInformation } from "react-icons/gr";

const Hero = () => {
  return (
    <div className={styles.main}>
      <div className={styles.intro}>
        <div className={styles.background}></div>
        <div className={styles.content}>
          <div className={styles.discover}>
            <h1>Discover, collect, and sell extraordinary NFTs</h1>
            <p>OpenSea is the world&apos;s first and largest NFT marketplace</p>
            <div className={styles.buttons}>
              <button className={styles.explore}>Explore</button>
              <button className={styles.create}>Create</button>
            </div>
            <a className={styles.learn} href="#vid">
              <AiFillPlayCircle />
              Learn More about OpenSea
            </a>
          </div>
          <div className={styles.image}>
            <img src="https://lh3.googleusercontent.com/aoZYvjIAhmxVNfUr7-pwhCZBYzYiEoMI23DtLwpoaq_OmMLqiSdQ_gAuwJtmesuDqCdnlbeUPBtYyTdzAt_T0F0nT3pldHxgNzjp-ec=s550" />
            <div className={styles.info}>
              <div className={styles.credit}>
                <img src="https://lh3.googleusercontent.com/qaIpimX6EFuyx-29k7H1YvXOPqyvgM9kVhMQAK_lp2RaVejBSLspLd3GIuuqPMKGbYRqugL-wI8NLwLprcWFJ19z6E6Q7Q2QcgUgYzs=s80" />
                <div className={styles.name}>
                  <p>Kimono</p>
                  <p>Lisaodt</p>
                </div>
              </div>
              <GrCircleInformation />
            </div>
          </div>
        </div>
        <a className={styles.learn} href="#vid">
          <AiFillPlayCircle />
          Learn More about OpenSea
        </a>
      </div>
    </div>
  );
};

export default Hero;
