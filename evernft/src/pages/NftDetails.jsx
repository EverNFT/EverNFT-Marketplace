/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs, Image } from "antd";
import React, { useEffect, useState } from "react";
import TopMenuBar from "../components/core/TopMenuBar";
import hearticon from "../res/images/heart.png";
import axios from 'axios';
import  EverNft from "../contracts/EverNfts.json"

let web3;
let evert;
const { TabPane } = Tabs;
export default function NftDetails({ match }) {
  const [nft, setNft] = useState({});
  const [owner,setOwner] = useState({});
  const [info,setInfo] = useState({});
  const nftId = match.params.id;
  let link = "/nfts/"+nftId;

  const setWeb3 = (Web3) => {
    console.log("web3 loaded: "+Web3)
    web3=Web3;
    evert = new web3.eth.Contract(
      EverNft.abi, EverNft.contractAddress);
  }

  function callback(key) {
    console.log(key);
  }
  window.onload = (event) => {
    loadDB();
  };

  useEffect(() => {
    loadDB();
      
  }, [nftId]);

  const loadDB = async function(){
    try{
      let res = await axios.get(link);
      if(res.status === 200){
        console.log("userId: " + JSON.stringify(res.data));
       setNft(res.data)
       setOwner(res.data.owners[0])
       setInfo(res.data.info[0])
       console.log("NFTs: "+ JSON.stringify(nft))
      }
    
    }catch(e){
      console.log(e)
    }
  }

  const buyNft=async ()=>{
    let account = await web3.eth.getAccounts();
    let price = ""+parseFloat(nft.subTitle)*1e18;
    const transData = await evert.methods.buy(nftId).send({from:account[0],value:price});
      console.log("nftID: " + JSON.stringify(transData));
  }
  return (
    <div id="__next">
      <div className="layout-container">
        <div />
        <div>
          <div />

          <TopMenuBar setWeb3={setWeb3} />
        </div>
        <div className="nft-container">
          <div>
            <div />
            <div className="nft-detail-container">
              <div className="ant-row" style={{ rowGap: 0 }}>
                <div className="ant-col ant-col-12 ant-col-xs-24 ant-col-md-24 ant-col-lg-24 ant-col-xl-14 ant-col-xxl-14">
                  <div className="ant-spin-nested-loading">
                    <div className="ant-spin-container">
                      <div className="nft-detail-img-div">
                        <div className="ant-image" style={{ width: "100%" }}>
                          <Image
                            alt="Nft Atlantic Ocean 1492"
                            className="ant-image-img nft-detail-img"
                            src={nft.image}
                          />
                          {/* */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ant-col ant-col-12 ant-col-xs-24 ant-col-md-24 ant-col-lg-24 ant-col-xl-6 ant-col-xxl-6">
                  <div>
                    <div className="nft-card-detail-bottom">
                      <div className="nft-card-name-container">
                        <div
                          className="ant-row ant-row-space-between"
                          style={{ rowGap: 0 }}
                        >
                          <div className="nft-card-name-detail">
                            {/* */}
                            {nft.title}
                          </div>

                          <div
                            className="likes-div clickable-icon-love"
                            role="presentation"
                          >
                            <div className="like-count">0</div>
                            <div className="like-icon-div">
                              <img
                                src={hearticon}
                                alt="Like Icon"
                                className="like-icon"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="nft-card-price-detail">
                        <div className="not-open-for-sale-text">
                          {nft.subTitle}
                        </div>
                      </div>
                      <div className="nft-card-detail-description">
                        {nft.description}
                      </div>
                      <div />
                      <div />
                      <button
                        type="button"
                        onClick={buyNft}
                        className="ant-btn ant-btn-primary ant-btn-block nft-detail-card-buy-button"
                      >
                        <span className="nft-card-buy-button-text">Buy</span>
                      </button>
                      <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="OWNER" key="1">
                          <div className="owner-creator-div">
                            <div
                              className="owner-container"
                              role="presentation"
                              tabIndex={-40}
                            >
                              <div className="ant-row" style={{ rowGap: 0 }}>
                                <div className="nft-owner-img">
                                  <div className="user-profile-badge-container">
                                    <div className="nft-owner-img-bg">
                                      <canvas
                                        className="identicon"
                                        width={30}
                                        height={30}
                                        style={{ width: 30, height: 30 }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="ant-col"
                                  style={{
                                    paddingTop: 8,
                                    paddingBottom: 8,
                                    marginLeft: 6,
                                  }}
                                >
                                  <div className="owner-label">OWNER</div>
                                  <div className="owner-username">
                                    {owner.name}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="creator-container"
                              role="presentation"
                              tabIndex={-50}
                            >
                              <div className="ant-row" style={{ rowGap: 0 }}>
                                <div className="nft-owner-img">
                                  <div className="user-profile-badge-container">
                                    <div className="nft-owner-img-bg">
                                      <div>
                                        <img
                                          src="https://airnfts.s3.amazonaws.com/profile-images/20210514/0x0B277ca0af41C795a4cd480D186c4ef17DE9324a_1621027418651.png"
                                          alt="User profile avatar"
                                          height={55}
                                          width={55}
                                        />
                                        <span>
                                          <img
                                            src="/static/resources/verified_icon.png"
                                            alt="VerifiedIcon"
                                            height={16}
                                            width={16}
                                            className="verified-icon-profile-small"
                                          />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="ant-col"
                                  style={{
                                    paddingTop: 8,
                                    paddingBottom: 8,
                                    marginLeft: 6,
                                  }}
                                >
                                  <div className="owner-label">CREATOR</div>
                                  <div className="owner-username">
                                    NFTprinter
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tab="HISTORY" key="2">
                          <div className="owner-creator-div">
                            <div
                              className="owner-container"
                              role="presentation"
                              tabIndex={-40}
                            >
                              <div className="ant-row" style={{ rowGap: 0 }}>
                                <div className="nft-owner-img">
                                  <div className="user-profile-badge-container">
                                    <div className="nft-owner-img-bg">
                                      <canvas
                                        className="identicon"
                                        width={30}
                                        height={30}
                                        style={{ width: 30, height: 30 }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="ant-col"
                                  style={{
                                    paddingTop: 4,
                                    paddingBottom: 4,
                                    marginLeft: 6,
                                  }}
                                >
                                  <div className="sale-event-user">
                                    0x9...74A
                                  </div>
                                  <div className="sale-event-text">
                                    {" "}
                                    Bought at 0.06 BNB{" "}
                                  </div>
                                  <div className="time-ago-event-div">
                                    2 days ago
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owner-container"
                              role="presentation"
                              tabIndex={-40}
                            >
                              <div className="ant-row" style={{ rowGap: 0 }}>
                                <div className="nft-owner-img">
                                  <div className="user-profile-badge-container">
                                    <div className="nft-owner-img-bg">
                                      <img
                                        src="https://airnfts.s3.amazonaws.com/profile-images/20210514/0x0B277ca0af41C795a4cd480D186c4ef17DE9324a_1621027418651.png"
                                        alt="User profile avatar"
                                        height={55}
                                        width={55}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="ant-col"
                                  style={{
                                    paddingTop: 4,
                                    paddingBottom: 4,
                                    marginLeft: 6,
                                  }}
                                >
                                  <div className="sale-event-user">
                                    0x9...74A
                                  </div>
                                  <div className="sale-event-text">
                                    {" "}
                                    Bought at 0.06 BNB{" "}
                                  </div>
                                  <div className="time-ago-event-div">
                                    2 days ago
                                  </div>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </TabPane>
                        <TabPane tab="INFO" key="3">
                          <div>
                            <div className="info-tab-element">
                              <div className="info-tab-label">NFT ID</div>
                              <div className="info-tab-value">
                                <a
                                  href={"https://testnet.bscscan.com/token/0x37f55289a90e28fb43be8db8885654247914bee6?a="+info.nftID}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {info.nftID}
                                </a>
                              </div>
                            </div>
                            <div className="info-tab-element">
                              <div className="info-tab-label">
                                Mint Transaction
                              </div>
                              <div
                                className="info-tab-value"
                                data-id={info.mintTransaction}
                              >
                                <a
                                  href={"https://testnet.bscscan.com/tx/"+info.mintTransaction}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                 {info.mintTransaction}
                                </a>
                              </div>
                            </div>
                            <div className="info-tab-element">
                              <div
                                className="info-tab-label"
                                style={{ cursor: "pointer" }}
                              >
                                Contract Address
                              </div>
                              <div
                                className="info-tab-value"
                                data-id={info.contractAddress}
                              >
                                <a
                                  href={"https://testnet.bscscan.com/token/"+info.contractAddress}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {info.contractAddress}
                                </a>
                              </div>
                            </div>
                          </div>
                        </TabPane>
                      </Tabs>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
