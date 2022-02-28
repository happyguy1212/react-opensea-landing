import styles from "./index.module.scss";

const Meet = () => {
  return (
    <div className={styles.container} id="vid">
      <div className={styles.header}>
        <p className={styles.meet}>Meet the OpenSea</p>
        <p className={styles.desc}>The NFT marketplace with everything for everyone</p>
      </div>
      <div className={styles.vid}>
        <div className={styles.size}>
          <iframe src="https://www.youtube.com/embed/gfGuPd1CELo?playlist=gfGuPd1CELo&autoplay=0&controls=1&loop=1&modestbranding=1&rel=0"></iframe>
        </div>
        <p className={styles.coming}>Flat on-ramp and profile customization is coming soon.</p>
      </div>
      <button>
        <a>Explore the marketplace</a>
      </button>
    </div>
  );
};

export default Meet;
