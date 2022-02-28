import styles from "./index.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Trending = () => {
  return (
    <div className={styles.container}>
      <p className={styles.trending}>Trending in all categories</p>
      <Splide
        className={styles.splide}
        options={{
          rewind: true,
          gap: "0.5rem",
          perPage: 3,
          perMove: 1,
          type: "loop",
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
            <div className={styles.nft}>
              <div className={styles.image}>
                <img src="https://lh3.googleusercontent.com/rLkzGqVwAhXHOTj8FPA9VlJut2ZhcxCaKf3koBH3knHPXU-IyTRKb9DHLFGnHoycIAGZiloBWZXe7jvX0FtDvKkU1NyeAFx9nsPAGA=h200" />
              </div>

              <div className={styles.info}>
                <div className={styles.pfp}>
                  <img src="https://lh3.googleusercontent.com/XHZY9623keDQqFSDHKqOdcjD99Y7N82K1egYRM2Mm1Z-Jxn5myrkKiC5NBktWKStVtTzDzwELy9dNpzTWJTIkLsdMIxUHI86jduQ=s100" />
                </div>
                <div className={styles.credit}>
                  <p className={styles.title}>tubby cats by tubby co...</p>
                  <p className={styles.by}>
                    by <span className={styles.name}>TubbyCatsDeployer</span>
                  </p>
                </div>
                <p className={styles.desc}>tubby cats by @tubbyCollective</p>
                <div className={styles.blockchain}>
                  <div className={styles.pop}>
                    <p>Blockchain: Ethereum</p>
                  </div>
                  <svg
                    fill="gray"
                    style={{ width: "12px" }}
                    viewBox="-38.39985 -104.22675 332.7987 625.3605"
                  >
                    <path d="M125.166 285.168l2.795 2.79 127.962-75.638L127.961 0l-2.795 9.5z" />
                    <path d="M127.962 287.959V0L0 212.32z" />
                    <path d="M126.386 412.306l1.575 4.6L256 236.587l-128.038 75.6-1.575 1.92z" />
                    <path d="M0 236.585l127.962 180.32v-104.72z" />
                    <path d="M127.961 154.159v133.799l127.96-75.637z" />
                    <path d="M127.96 154.159L0 212.32l127.96 75.637z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.nft}>
              <div className={styles.image}>
                <img src="https://lh3.googleusercontent.com/M2nEf60xoxSn3sRz_YSe4phhBMUdx3_YhIR-OgVMjjFiNOSi3uujRPD9txCh3zWWC3yEHL3Jo2eg9YhjTtPxXGTRpSKhQnQfQvwaAQ=h200" />
              </div>

              <div className={styles.info}>
                <div className={styles.pfp}>
                  <img src="https://lh3.googleusercontent.com/M2nEf60xoxSn3sRz_YSe4phhBMUdx3_YhIR-OgVMjjFiNOSi3uujRPD9txCh3zWWC3yEHL3Jo2eg9YhjTtPxXGTRpSKhQnQfQvwaAQ=s100" />
                </div>
                <div className={styles.credit}>
                  <p className={styles.title}>Filenza by Tyler Hobbs</p>
                  <p className={styles.by}>
                    by <span className={styles.name}>ArtBlocks_Admin</span>
                  </p>
                </div>
                <p className={styles.desc}>Fidenza by Tyle Hobbs - Art Blocks Curated</p>
                <div className={styles.blockchain}>
                  <div className={styles.pop}>
                    <p>Blockchain: Ethereum</p>
                  </div>
                  <svg
                    fill="gray"
                    style={{ width: "12px" }}
                    viewBox="-38.39985 -104.22675 332.7987 625.3605"
                  >
                    <path d="M125.166 285.168l2.795 2.79 127.962-75.638L127.961 0l-2.795 9.5z" />
                    <path d="M127.962 287.959V0L0 212.32z" />
                    <path d="M126.386 412.306l1.575 4.6L256 236.587l-128.038 75.6-1.575 1.92z" />
                    <path d="M0 236.585l127.962 180.32v-104.72z" />
                    <path d="M127.961 154.159v133.799l127.96-75.637z" />
                    <path d="M127.96 154.159L0 212.32l127.96 75.637z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.nft}>
              <div className={styles.image}>
                <img src="https://lh3.googleusercontent.com/WeRXpU6CuC5jxS0oOOrus-VRtUQrtUdw0ZvZe11VtcBBvQPI8kkJPWftYbbfLf_mfCXhq4L2f-abYtAHukza58gAKL8EkKPaveuFsQ=h200" />
              </div>

              <div className={styles.info}>
                <div className={styles.pfp}>
                  <img src="https://lh3.googleusercontent.com/XfIG1pmEVaOJDWk28suPa8bg6RgskYZDf79OoqWZ20iSUBIK8H1M6cDFfTxkdfGE9BuM57msjgWc51RYiK9SXvTfotMknd-Guq_o=s100" />
                </div>
                <div className={styles.credit}>
                  <p className={styles.title}>Freaks N&apos; Guilds - Cele...</p>
                  <p className={styles.by}>
                    by <span className={styles.name}>FreaksNGuilds</span>
                  </p>
                </div>
                <p className={styles.desc}>
                  Stake to earn $WRLD coming soon! Freaks N&apos; Guilds Celestial Keys are the
                  beainnina of your journey...
                </p>
                <div className={styles.blockchain}>
                  <div className={styles.pop}>
                    <p>Blockchain: Ethereum</p>
                  </div>
                  <svg
                    fill="gray"
                    style={{ width: "12px" }}
                    viewBox="-38.39985 -104.22675 332.7987 625.3605"
                  >
                    <path d="M125.166 285.168l2.795 2.79 127.962-75.638L127.961 0l-2.795 9.5z" />
                    <path d="M127.962 287.959V0L0 212.32z" />
                    <path d="M126.386 412.306l1.575 4.6L256 236.587l-128.038 75.6-1.575 1.92z" />
                    <path d="M0 236.585l127.962 180.32v-104.72z" />
                    <path d="M127.961 154.159v133.799l127.96-75.637z" />
                    <path d="M127.96 154.159L0 212.32l127.96 75.637z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.nft}>
              <div className={styles.image}>
                <img src="https://lh3.googleusercontent.com/hoEkfQECzheZeOBJ09dXg6ZGax3TCsCoYp34N3Xg4xztQz9nOK4eGezI3jXZ4eFK8lGmxV_o_NjkGX1YoySyBTVW3lN7U2IYjpBY=h200" />
              </div>

              <div className={styles.info}>
                <div className={styles.pfp}>
                  <img src="https://lh3.googleusercontent.com/5w8DDjrDhTKLfe-r6erP3yF1m9nfFi-d4b_WbArv17vqatPg0ZwTVrnOGiry3YhQCS00gfxzOEDSbW2Zr4soCTZ0A-u0TZ3Xjln4qA=s100" />
                </div>
                <div className={styles.credit}>
                  <p className={styles.title}>Terraforms by Mathca...</p>
                  <p className={styles.by}>
                    by <span className={styles.name}>Mathcastles_Studio</span>
                  </p>
                </div>
                <p className={styles.desc}>
                  Onchain land art from a dynamically generated, onchain 3D world.
                </p>
                <div className={styles.blockchain}>
                  <div className={styles.pop}>
                    <p>Blockchain: Ethereum</p>
                  </div>
                  <svg
                    fill="gray"
                    style={{ width: "12px" }}
                    viewBox="-38.39985 -104.22675 332.7987 625.3605"
                  >
                    <path d="M125.166 285.168l2.795 2.79 127.962-75.638L127.961 0l-2.795 9.5z" />
                    <path d="M127.962 287.959V0L0 212.32z" />
                    <path d="M126.386 412.306l1.575 4.6L256 236.587l-128.038 75.6-1.575 1.92z" />
                    <path d="M0 236.585l127.962 180.32v-104.72z" />
                    <path d="M127.961 154.159v133.799l127.96-75.637z" />
                    <path d="M127.96 154.159L0 212.32l127.96 75.637z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.nft}>
              <div className={styles.image}>
                <img src="https://lh3.googleusercontent.com/IzCRaGE8gPtV4PqtPxa2mDWh-4V25sTb9hWpg1YtHGqt2w2xPn8CZ5wFtdY12lO65rBlKiG2rEEVvL_TJR5gG-jqyMJntrySzzOZ5g=h200" />
              </div>

              <div className={styles.info}>
                <div className={styles.pfp}>
                  <img src="https://lh3.googleusercontent.com/7x44eOJS6RMc4cumPwCYIjGZFIyEv6dGe01ncoj7ypeyWM35tznzuH9fYIdTvhGRqTZLJGaPnPp1BAPsV8S3W2zBa6YAzwQ_JonTcQ=s100" />
                </div>
                <div className={styles.credit}>
                  <p className={styles.title}>Genesis Critterz</p>
                  <p className={styles.by}>
                    by <span className={styles.name}>72847C</span>
                  </p>
                </div>
                <p className={styles.desc}>92% staked! unique owners + renters. ...</p>
                <div className={styles.blockchain}>
                  <div className={styles.pop}>
                    <p>Blockchain: Ethereum</p>
                  </div>
                  <svg
                    fill="gray"
                    style={{ width: "12px" }}
                    viewBox="-38.39985 -104.22675 332.7987 625.3605"
                  >
                    <path d="M125.166 285.168l2.795 2.79 127.962-75.638L127.961 0l-2.795 9.5z" />
                    <path d="M127.962 287.959V0L0 212.32z" />
                    <path d="M126.386 412.306l1.575 4.6L256 236.587l-128.038 75.6-1.575 1.92z" />
                    <path d="M0 236.585l127.962 180.32v-104.72z" />
                    <path d="M127.961 154.159v133.799l127.96-75.637z" />
                    <path d="M127.96 154.159L0 212.32l127.96 75.637z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.nft}>
              <div className={styles.image}>
                <img src="https://lh3.googleusercontent.com/S_bdzWP5wnQTHDeOO_qqUgbXZCIJxsToh7_m6puRZirmRBua2dZmICvMLp77D8CiKA_0jkPh1IzvVIamh1DIZP_YicEi7J33rshPcQ=h200" />
              </div>

              <div className={styles.info}>
                <div className={styles.pfp}>
                  <img src="https://lh3.googleusercontent.com/OCbjDeqcaX0J1uMGe_1kFpJV_1uztEEqXtAFOp0TUHNJb4FFliZWkNv_Z7HECMZNA_Vt4p6HI2LhWd7CwKW1BjmcfNoXVr4c5JuymIU=s100" />
                </div>
                <div className={styles.credit}>
                  <p className={styles.title}>CyberFrogz</p>
                  <p className={styles.by}>
                    by <span className={styles.name}>cyberz.eth</span>
                  </p>
                </div>
                <p className={styles.desc}>
                  Cyber Frogz is a community driven project for NFT, DeFi, & Web 3 enthusiasts with
                  the absence of roa...
                </p>
                <div className={styles.blockchain}>
                  <div className={styles.pop}>
                    <p>Blockchain: Ethereum</p>
                  </div>
                  <svg
                    fill="gray"
                    style={{ width: "12px" }}
                    viewBox="-38.39985 -104.22675 332.7987 625.3605"
                  >
                    <path d="M125.166 285.168l2.795 2.79 127.962-75.638L127.961 0l-2.795 9.5z" />
                    <path d="M127.962 287.959V0L0 212.32z" />
                    <path d="M126.386 412.306l1.575 4.6L256 236.587l-128.038 75.6-1.575 1.92z" />
                    <path d="M0 236.585l127.962 180.32v-104.72z" />
                    <path d="M127.961 154.159v133.799l127.96-75.637z" />
                    <path d="M127.96 154.159L0 212.32l127.96 75.637z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.nft}>
              <div className={styles.image}>
                <img src="https://lh3.googleusercontent.com/wvqBWnsjATeAxPjIGHGjgb5FxrRWPKapA-74rzjAtkIHuE32mM3l1HahOdB_Ue0qZuy2ur0wDoBFiq3GFx9T-ldNfQXIqQG88HUBCA=h200" />
              </div>

              <div className={styles.info}>
                <div className={styles.pfp}>
                  <img src="https://lh3.googleusercontent.com/ufumJQN9NwT0U5jh_suJP5cLRIjyE38hirVdBChQLe-ghnt1RomIARfxSNmR6fdMQC0OIgjVQHhhduUfcxiRVrfHpihrXSW-SU5J=s100" />
                </div>
                <div className={styles.credit}>
                  <p className={styles.title}>The Doggies (Snoop Do...</p>
                  <p className={styles.by}>
                    by <span className={styles.name}>E19AE8</span>
                  </p>
                </div>
                <p className={styles.desc}>
                  🐶 The Doggies - Snoop Dogg Avatars 🐶 10,000 metaverse-ready Avatars...
                </p>
                <div className={styles.blockchain}>
                  <div className={styles.pop}>
                    <p>Blockchain: Ethereum</p>
                  </div>
                  <svg
                    fill="gray"
                    style={{ width: "12px" }}
                    viewBox="-38.39985 -104.22675 332.7987 625.3605"
                  >
                    <path d="M125.166 285.168l2.795 2.79 127.962-75.638L127.961 0l-2.795 9.5z" />
                    <path d="M127.962 287.959V0L0 212.32z" />
                    <path d="M126.386 412.306l1.575 4.6L256 236.587l-128.038 75.6-1.575 1.92z" />
                    <path d="M0 236.585l127.962 180.32v-104.72z" />
                    <path d="M127.961 154.159v133.799l127.96-75.637z" />
                    <path d="M127.96 154.159L0 212.32l127.96 75.637z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.nft}>
              <div className={styles.image}>
                <img src="https://lh3.googleusercontent.com/5L5FC1CVT5HddDN-OaLpwkDi5Dgkg-mq2a9c7HNYxA5UgPonP7fk9rQTusDCOKMIuU-HNk6PQ8WGeA3L2-K1WKRCjHkisF_HhT6sLw=h200" />
              </div>

              <div className={styles.info}>
                <div className={styles.pfp}>
                  <img src="https://lh3.googleusercontent.com/inok9-OGeg6e87gzHkTppng1G6U-PGBBhudji9Uvxmh-NJFlJxc9QO1BrJZWvLoxpmSM8Jpl82V_htzjkSI60hmbbHXuJw54tWxLPg=s100" />
                </div>
                <div className={styles.credit}>
                  <p className={styles.title}>Atomverse Genesis</p>
                  <p className={styles.by}>
                    by <span className={styles.name}>Nucleus_dev</span>
                  </p>
                </div>
                <p className={styles.desc}>
                  NFTs meet Chemistry. 118 atoms, 8888 NFTs, infinite possibilities...
                </p>
                <div className={styles.blockchain}>
                  <div className={styles.pop}>
                    <p>Blockchain: Ethereum</p>
                  </div>
                  <svg
                    fill="gray"
                    style={{ width: "12px" }}
                    viewBox="-38.39985 -104.22675 332.7987 625.3605"
                  >
                    <path d="M125.166 285.168l2.795 2.79 127.962-75.638L127.961 0l-2.795 9.5z" />
                    <path d="M127.962 287.959V0L0 212.32z" />
                    <path d="M126.386 412.306l1.575 4.6L256 236.587l-128.038 75.6-1.575 1.92z" />
                    <path d="M0 236.585l127.962 180.32v-104.72z" />
                    <path d="M127.961 154.159v133.799l127.96-75.637z" />
                    <path d="M127.96 154.159L0 212.32l127.96 75.637z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.nft}>
              <div className={styles.image}>
                <img src="https://lh3.googleusercontent.com/9sKo3_CZRttpI7i4ddciojTYHIDip3nz2QY9alz2SK0eeJOoFSUdgvX1f6JPSKVRIM8xgkp24by8O5J45G5GyIH5kUwYdxRTplVk6yU=h200" />
              </div>

              <div className={styles.info}>
                <div className={styles.pfp}>
                  <img src="https://lh3.googleusercontent.com/5qj0LkP_QVVzWIMt2yFKy3myxOE-C4sx-xi7qbcZaaQheEGmv91umJLtVxjvDy6rcotG7Hnh9J4Y-QqNVy3TCUmBFiK0VZo9n5_D=s100" />
                </div>
                <div className={styles.credit}>
                  <p className={styles.title}>Official Dormant Drago...</p>
                  <p className={styles.by}>
                    by <span className={styles.name}>Dormant-Dragons-Deplo...</span>
                  </p>
                </div>
                <p className={styles.desc}>
                  Dormant Dragons began with the inspiration to create a fun and rewarding P2E
                  MMORPG game. We...
                </p>
                <div className={styles.blockchain}>
                  <div className={styles.pop}>
                    <p>Blockchain: Ethereum</p>
                  </div>
                  <svg
                    fill="gray"
                    style={{ width: "12px" }}
                    viewBox="-38.39985 -104.22675 332.7987 625.3605"
                  >
                    <path d="M125.166 285.168l2.795 2.79 127.962-75.638L127.961 0l-2.795 9.5z" />
                    <path d="M127.962 287.959V0L0 212.32z" />
                    <path d="M126.386 412.306l1.575 4.6L256 236.587l-128.038 75.6-1.575 1.92z" />
                    <path d="M0 236.585l127.962 180.32v-104.72z" />
                    <path d="M127.961 154.159v133.799l127.96-75.637z" />
                    <path d="M127.96 154.159L0 212.32l127.96 75.637z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.nft}>
              <div className={styles.image}>
                <img src="https://lh3.googleusercontent.com/DO5wDrV_h64dOGY1ITFJnrr1thp3ALvsiI_x_n6h95RPBqbRiQ7p--LHzm7ynLxiTPGRhuAWhOCl6CBMFoZQtTpIWPAIZY9QCWSN=h200" />
              </div>

              <div className={styles.info}>
                <div className={styles.pfp}>
                  <img src="https://lh3.googleusercontent.com/fErcN8Texv1ATzUKTkxNiVaWiWaniL4m7Jh_7tu9gRobGebV4X51GgG-qUYVVxnNBHeNhi8GCwrky_Wgn3T1rJTXKs87B9y2tptQCLA=s100" />
                </div>
                <div className={styles.credit}>
                  <p className={styles.title}>Sneaky Vampires Syn...</p>
                  <p className={styles.by}>
                    by <span className={styles.name}>Superand</span>
                  </p>
                </div>
                <p className={styles.desc}>
                  Our Site | Discord | [Twitter] (https://twitter.com/SV...
                </p>
                <div className={styles.blockchain}>
                  <div className={styles.pop}>
                    <p>Blockchain: Ethereum</p>
                  </div>
                  <svg
                    fill="gray"
                    style={{ width: "12px" }}
                    viewBox="-38.39985 -104.22675 332.7987 625.3605"
                  >
                    <path d="M125.166 285.168l2.795 2.79 127.962-75.638L127.961 0l-2.795 9.5z" />
                    <path d="M127.962 287.959V0L0 212.32z" />
                    <path d="M126.386 412.306l1.575 4.6L256 236.587l-128.038 75.6-1.575 1.92z" />
                    <path d="M0 236.585l127.962 180.32v-104.72z" />
                    <path d="M127.961 154.159v133.799l127.96-75.637z" />
                    <path d="M127.96 154.159L0 212.32l127.96 75.637z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.nft}>
              <div className={styles.image}>
                <img src="https://lh3.googleusercontent.com/OftH01Cl9hf_bPZ5z26y17ICIvKE7f0AOsguQKRqXfrswp9q_vdo1I7BFlML2loGTxKNtamy3n079lhfk0eEESZ1pm8uLd0Me1ZyzA=h200" />
              </div>

              <div className={styles.info}>
                <div className={styles.pfp}>
                  <img src="https://lh3.googleusercontent.com/xjw-pBEeIF100xs9qx04D5VnSQuANrFuD1KMCEz60l2ldrCVSn0rR2sBB7sTrqp8wp9wJs6yhrWyltPhh7XjWmAuVlIujRwQd-2axA=s100" />
                </div>
                <div className={styles.credit}>
                  <p className={styles.title}>Official</p>
                  <p className={styles.by}>
                    by <span className={styles.name}>BoomGala</span>
                  </p>
                </div>
                <p className={styles.desc}>
                  BOOMGALA is an original project run on a community basis connected through the
                  value structure of th...
                </p>
                <div className={styles.blockchain}>
                  <div className={styles.pop}>
                    <p>Blockchain: Ethereum</p>
                  </div>
                  <svg
                    fill="gray"
                    style={{ width: "12px" }}
                    viewBox="-38.39985 -104.22675 332.7987 625.3605"
                  >
                    <path d="M125.166 285.168l2.795 2.79 127.962-75.638L127.961 0l-2.795 9.5z" />
                    <path d="M127.962 287.959V0L0 212.32z" />
                    <path d="M126.386 412.306l1.575 4.6L256 236.587l-128.038 75.6-1.575 1.92z" />
                    <path d="M0 236.585l127.962 180.32v-104.72z" />
                    <path d="M127.961 154.159v133.799l127.96-75.637z" />
                    <path d="M127.96 154.159L0 212.32l127.96 75.637z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Trending;
