import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../components/core/ItemCard";
import MinimalFooter from "../components/core/MinimalFooter";
import TopMenuBar from "../components/core/MarketPlaceMenuBar";
import config from "../config"
import axios from 'axios';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";


export default function MainApp() {
  const [data, setData] = useState([]);
  let link = "/nfts";

  const setWeb3 = (Web3) => {
    console.log("web3 loaded: " + Web3)
  }

  useEffect(() => {
    loadDB();

  }, [link]);

  const loadDB = async function () {
    try {
      let res = await axios.get(link);
      if (res.status === 200) {
        console.log("NFTs loaded: " + JSON.stringify(res.data))
        setData(res.data);
        console.log("Data loaded:" + JSON.stringify(res.data[0].info[0].nftID))
      }

    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div id="__next">
      <div className="layout-container">
        <div />
        <div>

          <div />
          <TopMenuBar setWeb3={setWeb3} />
          <div className="small-devices-search-div">
            <div />
          </div>
        </div>
        <div>
          <div className="home-content">
            <div className="nft-list">
              <div className="explore-title">Live Auction ⚡️</div>
               <div className="horzonal-list">
              {data.map((el, i) => {
                  return (
                    <div
                      style={{ width: "20%", maxWidth: "20%" }}
                    >
                      <div
                        className="ant-col"
                        style={{
                          paddingLeft: 11,
                          paddingRight: 11,
                          flex: "1 1 auto",
                        }}
                      >
                        <Link to={`/nft/${i}`}>
                          <ItemCard
                            title={el.title}
                            subTitle={el.subTitle}
                            image={el.image}
                          />
                        </Link>
                      </div>
                    </div>
                  );
                })}
                </div>
            </div>
          </div>
        </div>
        <div>
          <div className="home-content">
            <div className="nft-list">
              <div className="explore-title">Explore ⚡️</div>
              <div className="nfts-filter-row">
                <ul>
                  <li
                    className="nft-category nft-category-selected"
                    role="presentation"
                    tabIndex={0}
                  >
                    <div className="nft-category-text">🎨 All</div>
                  </li>
                  <li className="nft-category" role="presentation" tabIndex={1}>
                    <div className="nft-category-text">👾 Games</div>
                  </li>
                  <li className="nft-category" role="presentation" tabIndex={2}>
                    <div className="nft-category-text">🌈 Art</div>
                  </li>
                  <li className="nft-category" role="presentation" tabIndex={3}>
                    <div className="nft-category-text">📸 Photo</div>
                  </li>
                  <li className="nft-category" role="presentation" tabIndex={4}>
                    <div className="nft-category-text">🤘 Punks</div>
                  </li>
                  <li className="nft-category" role="presentation" tabIndex={5}>
                    <div className="nft-category-text">🎵 Music</div>
                  </li>
                  <li className="nft-category" role="presentation" tabIndex={6}>
                    <div className="nft-category-text">🤡 Memes</div>
                  </li>
                  <li className="nft-category" role="presentation" tabIndex={7}>
                    <div className="nft-category-text">🌌 Meta</div>
                  </li>
                </ul>
              </div>
              <div className="ant-list ant-list-split ant-list-grid ant-list-something-after-last-item">
                <div className="ant-spin-nested-loading">
                  <div className="ant-spin-container">
                    <div
                      className="ant-row"
                      style={{
                        marginLeft: "-11px",
                        marginRight: "-11px",
                        rowGap: 0,
                      }}
                    >
                      {data.map((el, i) => {
                        return (
                          <div
                            style={{ width: "20%", maxWidth: "20%" }}
                          >
                            <div
                              className="ant-col"
                              style={{
                                paddingLeft: 11,
                                paddingRight: 11,
                                flex: "1 1 auto",
                              }}
                            >
                              <Link to={`/nft/${el.info[0].nftID}`}>
                                <ItemCard
                                  title={el.title}
                                  subTitle={el.subTitle}
                                  image={el.image}
                                />
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                      <div style={{ textAlign: 'center', padding: "10px 0", margin: '0 auto' }}>
                        <div role="button" tabindex="-12" className="connect-menu-item-div"><div className="create-menu-item"><div className="create-menu-item-text">Load more</div></div></div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MinimalFooter />
    </div>
  );
}
