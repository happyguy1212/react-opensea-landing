import styles from "./index.module.scss";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Notable = () => {
  return (
    <div className={styles.container}>
      <p className={styles.notable}>Notable Drops</p>
      <Splide
        className={styles.splide}
        options={{
          rewind: true,
          gap: "0.5rem",
          perPage: 3,
          perMove: 1,
          type: "slide",
          breakpoints: {
            1200: {
              perPage: 2,
            },
            815: {
              gap: 0,
              perPage: 1,
              arrows: false,
            },
          },
          classes: {
            pagination: `splide__pagination ${styles.pagination}`,
          },
        }}
      >
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.shadow}>
              <img src="https://storage.opensea.io/static/promocards/cameo-promocard.jpeg" />
              <div
                className={styles.info}
                style={{ background: "rgb(87, 94, 149)" }}
              >
                <p>Cameo Pass</p>
                <p>Art.Community.Events.</p>
                <p className={styles.live}>Live</p>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.shadow}>
              <img src="https://storage.opensea.io/static/promocards/watermagic-promocard.jpeg" />
              <div
                className={styles.info}
                style={{ background: "rgb(225, 180, 151)" }}
              >
                <p>water magic</p>
                <p>follow the feathers to uncover old ghosts</p>
                <p className={styles.live}>Live</p>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.shadow}>
              <img src="https://storage.opensea.io/static/promocards/metascapes-promocard.jpeg" />
              <div
                className={styles.info}
                style={{ background: "rgb(0, 51, 74)" }}
              >
                <p>The Metascapes</p>
                <p>Cath Simard x Ryan Newburn x lurie Belegurschi x Al</p>
                <p className={styles.live}>Live</p>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.shadow}>
              <img src="https://storage.opensea.io/static/promocards/thekiss-promocard3.jpeg" />
              <div
                className={styles.info}
                style={{ background: "rgb(216, 143, 138)" }}
              >
                <p>The Kiss</p>
                <p>
                  An art collection generated entirely by the smart contract
                  code
                </p>
                <p className={styles.live}>Live</p>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Notable;
