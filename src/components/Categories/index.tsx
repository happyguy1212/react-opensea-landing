import styles from "./index.module.scss";

const Categories = () => {
  return (
    <div className={styles.container}>
      <p className={styles.categories}>Browse by category</p>
      <div className={styles.content}>
        <div className={styles.category}>
          <img src="https://opensea.io/static/images/categories/art.png" />
          <div className={styles.word}>
            <p>Art</p>
          </div>
        </div>
        <div className={styles.category}>
          <img src="https://opensea.io/static/images/categories/collectibles.png" />
          <div className={styles.word}>
            <p>Collectibles</p>
          </div>
        </div>
        <div className={styles.category}>
          <img src="https://opensea.io/static/images/categories/domain-names.png" />
          <div className={styles.word}>
            <p>Domain Names</p>
          </div>
        </div>
        <div className={styles.category}>
          <img src="https://opensea.io/static/images/categories/music.png" />
          <div className={styles.word}>
            <p>Music</p>
          </div>
        </div>
        <div className={styles.category}>
          <img src="https://opensea.io/static/images/categories/photography-category.png" />
          <div className={styles.word}>
            <p>Photography</p>
          </div>
        </div>
        <div className={styles.category}>
          <img src="https://opensea.io/static/images/categories/sports.png" />
          <div className={styles.word}>
            <p>Sports</p>
          </div>
        </div>
        <div className={styles.category}>
          <img src="https://opensea.io/static/images/categories/trading-cards.png" />
          <div className={styles.word}>
            <p>Trading Cards</p>
          </div>
        </div>
        <div className={styles.category}>
          <img src="https://opensea.io/static/images/categories/utility.png" />
          <div className={styles.word}>
            <p>Utility</p>
          </div>
        </div>
        <div className={styles.category}>
          <img src="https://opensea.io/static/images/categories/virtual-worlds.png" />
          <div className={styles.word}>
            <p>Virtual Worlds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
