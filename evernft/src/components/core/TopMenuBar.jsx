import React ,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import config from "../../config";
import logo from "../../res/images/app_logo.png";
import profile from "../../res/images/profile.png";
import getWallet from "../../nfts/connectWallet"

export default function TopMenuBar({setWeb3, ...rest}) {
  const [connectBtn, setConnectBtn] = useState("Connect");
  const { ethereum } = window;
  let web3;


  useEffect(() => {
    localStorage.setItem("userName", "CREATOR")
    if(isMetaMaskInstalled){
      connectToMetaMask();
    }
    else console.log("Please install metamask!!");
  });
  if(window.ethereum)
  window.ethereum.on('accountsChanged', async function (accounts) {
    connectToMetaMask()
  })
  
  const isMetaMaskInstalled = () => {
    return Boolean(ethereum && ethereum.isMetaMask);
  }
  
  const connectToMetaMask = async () => {
    if(isMetaMaskInstalled)
    try {
      //Will Start the MetaMask Extension
      web3 = await getWallet();
      console.log("Web3 :"+web3);
      setWeb3(web3);
      setConnectBtn("Create")
    
    } catch (error) {
      console.error(error);
    }else console.log("Please install metamask!!");
  }
  
  return (
    <div>
      <div className="top-menu-bar">
        <div className="ant-row" style={{ rowGap: 0 }}>
          <div className="ant-col ant-col-2">
            <Link to={config.routes.root}>
              <div className="branding-icon">
                <img src={logo} alt="Project Icon" width={38} height={38} />
              </div>
            </Link>
          </div>
          <div className="ant-col ant-col-12 ant-col-xs-0 ant-col-sm-0 ant-col-md-12 ant-col-lg-12 ant-col-xl-12 ant-col-xxl-12">
            <div>
              <span className="ant-input-group-wrapper ant-input-group-wrapper-lg ant-input-search ant-input-search-large search-menu-large-screens">
                <span className="ant-input-wrapper ant-input-group">
                  <span className="ant-input-affix-wrapper ant-input-affix-wrapper-lg">
                    <input
                      type="search"
                      placeholder="Search by art name, creator or collection"
                      className="ant-input ant-input-lg"
                      
                    />
                    <span className="ant-input-suffix">
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
                  </span>
                  <span className="ant-input-group-addon">
                    <button
                      type="button"
                      className="ant-btn ant-btn-lg ant-btn-icon-only ant-input-search-button"
                    >
                      <span
                        role="img"
                        aria-label="search"
                        className="anticon anticon-search"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="search"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
                        </svg>
                      </span>
                    </button>
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div className="ant-col ant-col-4" />
          <div className="ant-col ant-col-12 ant-col-xs-12 ant-col-sm-12 ant-col-md-0 ant-col-lg-0 ant-col-xl-0 ant-col-xxl-0" />
          <div
            style={{ display: "flex", justifyContent: "flex-end" }}
            className="ant-col ant-col-6"
          >
            <div className="ant-space ant-space-horizontal ant-space-align-center">
              <div className="ant-space-item d-flex" style={{ marginRight: 25 }}>

                <div
                  className="nfts-menu-item"
                  role="presentation"
                  tabIndex={-22}
                >
                  <Link to={config.routes.app}>
                  <div className="nfts-menu-text">NFTs</div>
                  </Link>
                </div>
              </div>
              <div className="ant-space-item" style={{ marginRight: 25 }}>
                <div />
              </div>
              <div className="ant-space-item" style={{ marginRight: 25 }}>
                <div className="search-menu-item-small-screens">
                  <div className="ant-col search-icon-col ant-col-xs-1 ant-col-sm-1 ant-col-md-0 ant-col-lg-0 ant-col-xl-0 ant-col-xxl-0">
                    {/* <img
                      src="/static/resources/search_icon.svg"
                      alt="Search Icon"
                    /> */}
                  </div>
                </div>
              </div>

              <div className="ant-space-item">
                <div
                  role="button"
                  onClick={connectToMetaMask}
                  tabIndex={-12}
                  className="connect-menu-item-div"
                >
                  <div className="create-menu-item">
                  <Link to={connectBtn=="Create"?config.routes.create:""}>
                    <div className="create-menu-item-text">{connectBtn}</div>
                  </Link>
                  </div>
                </div>
              </div>
              <div className="ant-space-item" style={{ marginRight: 25 }}>
                <div className="search-menu-item-small-screens">
                  <div className="ant-col search-icon-col ant-col-xs-1 ant-col-sm-1 ant-col-md-0 ant-col-lg-0 ant-col-xl-0 ant-col-xxl-0" />
                </div>
              </div>

              <Link to={config.routes.dashboard}>
                <div className="ant-space-item">
                  <div role="button" tabIndex={-12} className="connect-menu-item-div">
                    <div className="connect-menu-avatar-bg">

                      <img src={profile} className="identicon"
                        alt="identicon"
                        width={40}
                        height={40}
                        style={{ width: 40, height: 40 }}
                      />
                    </div>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
      <div className="small-devices-search-div">
        <div />
      </div>
    </div>
  );
}
