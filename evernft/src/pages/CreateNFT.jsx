import React, { useState } from "react";
import fileSlectionIcon from "../res/images/file_selection_icon.png";
import TopMenuBar from "../components/core/MarketPlaceMenuBar";
import  EverNft from "../contracts/EverNfts.json"
import axios from 'axios';
const { create } = require('ipfs-http-client')
const ipfs = create({ 
host: "ipfs.infura.io",
port: "5001",
protocol: "https",})

let web3;
let nft;
let uploadFile = null;

export default function CreateNFT() {
  const [selectedFile, setSelectedFile] = useState()

  const setWeb3 = (Web3) => {
    console.log("web3 loaded: "+Web3)
    web3=Web3;
    nft = new web3.eth.Contract(
      EverNft.abi, EverNft.contractAddress);

  }

const mintNft = async (nftsURI,image,price,name,des) => {
      let account = await web3.eth.getAccounts();
      let supply = await nft.methods.totalSupply().call();
      const transData = await nft.methods.mint(nftsURI+(supply+1),account[0],""+parseInt(""+price)*1e18).send({from:account[0]});
      
      console.log("nftID: " + JSON.stringify(transData));
      saveNftDB(name,price,des,image,transData.events.Minted)
}


async function addedToIpfs() {
  const added = await ipfs.add(uploadFile, {
    progress: (prog) => console.log(`received: ${prog}`),
  });
  let v1CID = added.cid.toV1()
  return v1CID.toBaseEncodedString('base32');
}

async function upload(){

  let formD = document.forms["formElement"];
  let data = new FormData(formD);
  let price = formD.elements["nftPrice"].value;
  let name = formD.elements["nftName"].value;
  let des = formD.elements["nftDescription"].value;
  console.warn(uploadFile);
  let v1CID = await addedToIpfs();

  data.append("ipfsHash",v1CID);
  let link = "http://localhost:9000/upload";
try{
  axios({
    method: "POST",
    url: link,
    data: data,
    headers: {
        "Content-Type": "multipart/form-data"
    }
    ,
    timeout: 3000,
})
    .then(response => {
            if (response.status === 200) {
                console.log("Success, firm added")
                console.log(JSON.stringify(response.data))
                let nftsURI = response.data.server;
                let nftImage = response.data.nftImage;
                mintNft(nftsURI,nftImage,price,name,des);
                console.log("NFTS URI: "+nftsURI)
            } else {
                console.log("Error occurred")
            }
        }
    ).catch(e => {
    console.log(e)
})

}catch(e){
  console.log(e)
}
}

const saveNftDB = (name,price,des,img,transData) =>{
  let data = {
    title: name,
    subTitle: price+'BNB',
    description: des,
    image:img,
    owners: [
      {
        role: 'CREATOR',
        name: 'Frio_Art',
      },
      {
        role: 'Minter',
        name: transData.minter,
      },
    ],
    history: [
      {
        action: 'The NFT was minted',
        date: Date.now(),
      },
    ],
    info: [
      {
        nftID: transData.returnValues.nftID,
        mintTransaction: transData.transactionHash,
        contractAddress: transData.address
      },
    ],
  }

  let link = "http://localhost:9000/nfts/save";
try{
  axios({
    method: "POST",
    url: link,
    data: data,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
    ,
    timeout: 3000,
})
    .then(response => {
            if (response.status === 200) {
                console.log("Success, firm added")
                console.log(JSON.stringify(response.data))
            } else {
                console.log("Error occurred")
            }
        }
    ).catch(e => {
    console.log(e)
})

}catch(e){
  console.log(e)
}
}

  const handleInput = async (e) => {
    e.preventDefault()
    const inputFile = e?.target?.files[0];
    if (inputFile) {
      const base64 = await toBase64(inputFile)
      uploadFile = inputFile;
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
  return (
    <div id="__next">
      <div className="layout-container">
        <div />
        <TopMenuBar setWeb3 = {setWeb3} />
        < div className="create-page-content" >
          <div>
            <div>
              <div className="nft-create-card">
                <form className="ant-form ant-form-horizontal" id="formElement" encType="multipart/form-data">
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
                                      name="nft_file"
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
                                  autoComplete="true"
                                  placeholder="NFT Name"
                                  className="ant-input ant-input-lg create-nft-input"
                                  maxLength={30}
                                  type="text"
                                  id="nftName"
                                  name="nftName"
                                  defaultValue=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          className="ant-row ant-form-item form-item"
                          style={{ rowGap: 0 }}
                        >
                          <div className="ant-col ant-form-item-control">
                            <div className="ant-form-item-control-input">
                              <div className="ant-form-item-control-input-content">
                                <span className="ant-input-affix-wrapper ant-input-affix-wrapper-textarea-with-clear-btn">
                                  <textarea
                                    placeholder="NFT Description (max: 300 characters)"
                                    rows={7}
                                    id="nftDescription"
                                    name="nftDescription"
                                    className="ant-input create-nft-input-description"
                                  />
                                  <span
                                    role="button"
                                    aria-label="close-circle"
                                    tabIndex={-1}
                                    className="anticon anticon-close-circle ant-input-clear-icon-hidden ant-input-clear-icon"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      data-icon="close-circle"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          className="ant-row ant-form-item form-item"
                          style={{ marginBottom: 0, rowGap: 0 }}
                        >
                          <div className="ant-col ant-col-24 ant-form-item-control">
                            <div className="ant-form-item-control-input">
                              <div className="ant-form-item-control-input-content">
                                <span className="ant-input-affix-wrapper ant-input-affix-wrapper-lg create-nft-input">
                                  <input
                                    autoComplete="false"
                                    placeholder="NFT Price"
                                    className="ant-input ant-input-lg"
                                    type="number"
                                    inputMode="decimal"
                                    step="0.0001"
                                    min="0.0001"
                                    max={10000000}
                                    id="nftPrice"
                                    name="nftPrice"
                                  />
                                  <span className="ant-input-suffix">BNB</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="ant-row ant-row-space-between create-bottom-row"
                        style={{ rowGap: 0 }}
                      >
                        <div>Service Fee</div>
                        <div>2.5%</div>
                      </div>
                      <div
                        className="ant-row ant-row-space-between create-bottom-row"
                        style={{ rowGap: 0 }}
                      >
                        <div>You will receive</div>
                        <div />
                      </div>
                    </div>
                    <div />
                    <div style={{ height: 8 }} />
                    <button
                      type="button"
                      onClick={upload}
                      className="ant-btn ant-btn-primary ant-btn-block nft-card-buy-button"
                    >
                      <span className="nft-card-buy-button-text">Approve</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div >
      </div >
    </div >
  );
}
