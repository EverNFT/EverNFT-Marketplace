import fileSlectionIcon from "../res/images/file_selection_icon.png";
import React, { useEffect,useState } from 'react'
import TopMenuBar from '../components/core/MarketPlaceMenuBar'
import ItemCard from '../components/core/ItemCard'
import { Modal, Button } from 'antd';
import { Link } from "react-router-dom";
import colorImg from '../res/images/color.png'
import MinimalFooter from '../components/core/MinimalFooter'
import config from '../config'
import axios from 'axios';

let account,userNfts = [];
export default function Dashboard() {
  document.body.style.backgroundColor = "white"
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userAccount, setUserAccount] = useState("connect meta mask");
  const[data,setData] = useState([]);
  let link = "/nfts";
  const [selectedFile, setSelectedFile] = useState()

  const setWeb3 = async (Web3) => {
    console.log("web3 loaded: "+Web3)
    account = await Web3.eth.getAccounts();
    let acc = account[0].substring(0,6)+"......"+account[0].substring(36,42)
    setUserAccount(acc)
  
  }

  useEffect(() => {
    loadDB();
      
  }, [data]);

  const loadDB = async function(){
      try{
        let res = await axios.get(link);
        if(res.status === 200){
          res.data.forEach((item)=>{
            if(item.owners[0].name === account[0]){
              userNfts.push(item)
              console.log("NFTs loaded: "+JSON.stringify(item))
            }
          })
         setData(userNfts);
        }
      }catch(e){
        console.log(e)
      }
    }
  const handleInput = async (e) => {
    e.preventDefault()
    const inputFile = e?.target?.files[0];
    if (inputFile) {
      const base64 = await toBase64(inputFile)
      setSelectedFile(base64)
    }
  
    // document.getElementById('inputfile').click()
  }
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{width:'90%',margin:"0 auto"}}>
      <TopMenuBar setWeb3={setWeb3} />


      <div className="dashboard-page-layout">

        <div className="dashboard-nft-list">
          <div className="dashboard-blue-card">
            <div className="dashboard-">
              <div className="dashboard-card-avatar-container">
                <div className="dashboard-card-avatar">
                  <img src={colorImg} alt="color" />
                </div>
              </div>
              <div className="dashboard-card-text-container">
                <div className="dashboard-card-text">
                  {userAccount}
                </div>
              </div>
            </div>
            <div className="dashboard-card-body">
              <div className="dashboard-card-body-row">
                <div>TOTAL STACKED</div>
                <div>0</div>
              </div>
              <div className="dashboard-card-body-row">
                <div>Rank Name</div>
                <div>0</div>
              </div>
              <div className="dashboard-card-body-row border-bottom">
                <div>Rank Badge</div>
                <div>0</div>
              </div>
              <div className="dashboard-card-navlinks" onClick={showModal}>
                {/* <a href="#a">My NFTs</a>
                <a href="#a">My Ranks</a> */}
                <a href="#a">Edit Profile</a>
              </div>
            </div>
          </div>
        
        </div>
        <div className="dashboard-nft-list">
          
          {data.map((el,i) => {
            return <div className="dashboard-nft-list-item">
              <Link to={`/nft/${i}`}>
                                <ItemCard
                                  title={el.title}
                                  subTitle={el.subTitle}
                                  image={el.image}
                                />
                              </Link>
            </div>
          })}
        </div>
      </div>
      <Modal title="Edit Profile" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={false}>
      <div className="nft-create-card">
                <form className="ant-form ant-form-horizontal">
                  <div className="nft-img-upload-cover">
                    {selectedFile && <img src={selectedFile} alt="me" className="nft-img-uploaded" />}
                    <div />
                    <div
                      className="ant-col"
                      style={{
                        alignItems: "center",
                        textAlign: "center",
                        position: "absolute",
                        zIndex: 10,
                      }}
                    >
                      <div className="ant-spin-nested-loading">
                        <div className="ant-spin-container">
                          <div
                            className="upload-notice"
                            style={{
                              alignItems: "center",
                              display: "flex",
                              justifyContent: "center",
                              marginBottom: 10,
                            }}
                          >
                            {!selectedFile && <div style={{ flex: "0 0 200px" }}>
                              PNG, GIF, JPG, MP4 (max 8Mb)
                            </div>}
                          </div>
                          <span className="upload-comp-div"
                          // onClick={handleInput}

                          >
                            <div className="ant-upload ant-upload-select ant-upload-select-picture" >
                              <span
                                tabIndex={0}
                                className="ant-upload"
                                role="button"

                              >

                                <div
                                  style={{
                                    alignItems: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <div className={"create-nft-choose-file"} style={selectedFile && { backgroundColor: '#000', opacity: 0.24 }}>
                                    <input
                                      id="inputfile"
                                      type="file"
                                      accept="image/png,image/jpeg,image/gif,image/webp,image/avif,video/mp4,video/x-m4v,video/quicktime,video/*"
                                      style={{
                                        opacity: 0,
                                        width: '100%',
                                        left: 0,
                                        position: 'absolute',
                                      }}
                                      onChange={handleInput}
                                    />
                                    <div
                                      className="ant-row"
                                      style={{ display: "flex", rowGap: 0 }}
                                    >
                                      <div
                                        style={{
                                          fontFamily: '"IBM Plex Sans"',
                                          color: "rgb(255, 255, 255)",
                                          fontWeight: "bold",
                                          marginRight: 4,
                                        }}
                                      >
                                        {selectedFile ? "Change" : "Choose File"}
                                      </div>
                                      <div>
                                        <img
                                          src={fileSlectionIcon}
                                          alt="file selection"
                                          style={{ width: 16, height: 14 }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </span>
                            </div>

                            <div className="ant-upload-list ant-upload-list-picture" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nft-create-card-bottom">
                    <div className="ant-col">
                      <div />
                      <div>
                        <div
                          className="ant-row ant-form-item form-item"
                          style={{ rowGap: 0 }}
                        >
                          <div className="ant-col ant-form-item-control">
                            <div className="ant-form-item-control-input">
                              <div className="ant-form-item-control-input-content">
                                <input
                                  autoComplete
                                  placeholder="NFT Name"
                                  className="ant-input ant-input-lg create-nft-input"
                                  maxLength={30}
                                  type="text"
                                  id="nftName"
                                  defaultValue=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <div />
                    <div style={{ height: 8 }} />
                    <button
                      type="submit"
                      className="ant-btn ant-btn-primary ant-btn-block nft-card-buy-button"
                    >
                      <span className="nft-card-buy-button-text">Save Changes</span>
                    </button>
                  </div>
                </form>
              </div>
      </Modal>
      <MinimalFooter/>
    </div>
  )
}
