import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/core/Footer";
import Navbar from "../components/core/Navbar";
import config from "../config";
import evernfthero from "../res/images/nfts-hero.png";
import dapp from "../res/images/dapp.png";
import dappradar from "../res/images/dappradar.png";
import producthunt from "../res/images/producthunt.png";
import whyevernft from "../res/images/why-evernft.png";
import feature1 from "../res/images/feature1.png";
import feature2 from "../res/images/feature2.png";
import feature3 from "../res/images/feature3.png";
import createnft from "../res/images/create-nft.png";
import uploadnft from "../res/images/upload-nft.png";
import earnbnb from "../res/images/earn-bnb-on-nft.png";

export default function LandingPage() {
  return (
    <div className=" landing-page-bg" data-new-gr-c-s-check-loaded="14.1014.0" data-gr-ext-installed>
      <Navbar activeRoute={config.routes.root} />

      <div id="Header" className="header">
        <div className="container-flex">
          <div className="hero-content">
            <h1
              //   style={{
              //     transform:
              //       "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              //     opacity: 1,
              //     transformStyle: "preserve-3d",
              //   }}
              className="hero-h1"
            >
              NFT&nbsp;Marketplace built on Binance Smart Chain
              <span className="brand-span" />
            </h1>
            <ul
              //   style={{
              //     transform:
              //       "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              //     opacity: 1,
              //     transformStyle: "preserve-3d",
              //   }}
              className="hero-paragraph w-list-unstyled"
            >
              <li
                // style={{
                //   transform:
                //     "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                //   opacity: 1,
                //   transformStyle: "preserve-3d",
                // }}
                className="hero-paragraph"
              >
                🌈 Create, Buy and Sell NFTs
              </li>
              <li
                // style={{
                //   transform:
                //     "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                //   opacity: 1,
                //   transformStyle: "preserve-3d",
                // }}
                className="hero-paragraph"
              >
                ⚡️ Faster and cheaper fees under $1
              </li>
              <li
                // style={{
                //   transform:
                //     "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                //   opacity: 1,
                //   transformStyle: "preserve-3d",
                // }}
                className="hero-paragraph"
              >
                💰 Earn BNB and EVERT for each NFT&nbsp;sale
              </li>
            </ul>
            <div className="button-wrapper">
              <Link
                to={"#"}
                className="btn-grad"
                style={{ marginTop: "10px",marginRight: "10px", borderRadius: 5 }}
              >
                White Paper
              </Link>

              <Link
                to={config.routes.app}
                className="btn-grad"
                style={{ marginTop: "10px", borderRadius: 5 }}
              >
                Launch App
              </Link>
              
            </div>
            
          </div>
          <div className="hero-image-wrap">
            <img
              src={evernfthero}
              //   style={{
              //     opacity: 1,
              //     transform:
              //       "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              //     transformStyle: "preserve-3d",
              //   }}
              height
              width={120}
              alt="hero"
              className="hero-image"
            />
            
          </div>
        </div>
      </div>
      <div className="section-5">
        <div className="w-container">
          <div className="columns-4 w-row">
            <div className="column-9 w-col w-col-3">
              <h4 className="heading-9">Loved by the community</h4>
            </div>
            <div className="column-10 w-col w-col-3">
              <a href={window.location.href} className="w-inline-block">
                <img
                  src={dapp}
                  loading="lazy"
                  sizes="(max-width: 479px) 79vw, (max-width: 767px) 28vw, 146.203125px"
                  height={48}
                  alt="evernft on dapp.com"
                  className="image-9"
                />
              </a>
            </div>
            <div className="column-11 w-col w-col-3">
              <a href={window.location.href} className="w-inline-block">
                <img
                  src={producthunt}
                  loading="lazy"
                  height={44}
                  sizes="(max-width: 479px) 79vw, (max-width: 767px) 29vw, (max-width: 991px) 167px, 186.5px"
                  alt="evernft on product hunt"
                />
              </a>
            </div>
            <div className="column-12 w-col w-col-3">
              <a href={window.location.href} className="w-inline-block">
                <img
                  src={dappradar}
                  loading="lazy"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 100vw, (max-width: 991px) 167px, 220px"
                  height={40}
                  alt="evernft on dappradar"
                  className="image-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <section id="cards-section" className="cards-section">
        <div className="centered-container w-container">
          <h2>Why EverNFTs?</h2>
          <p className="paragraph-11">
            Easy user experience, low fees, one-click minting, EverNFTs was
            built for artists by artists
          </p>
          <img
            src={whyevernft}
            loading="lazy"
            sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 626.078125px, 808.390625px"
            alt="Difference between evernft, superrare, rarible, opensea and foundation
"
            className="image-11"
          />
        </div>
      </section>
      <section id="cards-section" className="cards-section">
        <div className="centered-container w-container">
          <h2>
            On the mission to bring <br />
            NFTs to the mainstream
          </h2>
          <p className="paragraph-11">
            EverNFTs is the NFT marketplace built on Binance Smart Chain
            focusing <br />
            highly on user experience and ease of use to Create, Buy, Sell and
            use NFTs.
          </p>
          <div className="cards-grid-container">
            <div id="w-node-_0b335df7-45b9-f51a-8c52-1eb49468b51f-552507fe">
              <div className="cards-image-mask">
                <img
                  src={feature1}
                  height={150}
                  className="cards-image"
                  alt="feature1"
                />
              </div>
              <h5>Create NFT with ease</h5>
              <p>
                One click and your NFT is created. Set a price and start
                earning, NFT&nbsp;auction will come next.
              </p>
            </div>
            <div id="w-node-_0b335df7-45b9-f51a-8c52-1eb49468b526-552507fe">
              <div className="cards-image-mask">
                <img
                  src={feature2}
                  height={30}
                  width={30}
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 229.328125px, 286.65625px"
                  srcSet="https://uploads-ssl.webflow.com/60098c5b239e4890fa5ee1aa/6065d0b5a449b481f7d12f95_feature-2-p-500.png 500w, https://uploads-ssl.webflow.com/60098c5b239e4890fa5ee1aa/6065d0b5a449b481f7d12f95_feature-2-p-800.png 800w, https://uploads-ssl.webflow.com/60098c5b239e4890fa5ee1aa/6065d0b5a449b481f7d12f95_feature-2.png 1200w"
                  alt="feature-1"
                  className="cards-image"
                />
              </div>
              <h5 id="w-node-_0b335df7-45b9-f51a-8c52-1eb49468b529-552507fe">
                EVERT&nbsp;Farming &amp; Royalties
              </h5>
              <p id="w-node-_0b335df7-45b9-f51a-8c52-1eb49468b52b-552507fe">
                You can earn EVERT&nbsp;Token for selling and buying NFTs. Use
                royalties for secondary sales.
              </p>
            </div>
            <div id="w-node-_0b335df7-45b9-f51a-8c52-1eb49468b52d-552507fe">
              <div className="cards-image-mask">
                <img
                  src={feature3}
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 229.328125px, 286.65625px"
                  srcSet="https://uploads-ssl.webflow.com/60098c5b239e4890fa5ee1aa/6065d0b5052f1393bed4ca54_feature-3-p-500.png 500w, https://uploads-ssl.webflow.com/60098c5b239e4890fa5ee1aa/6065d0b5052f1393bed4ca54_feature-3.png 1200w"
                  alt="feature-3"
                  className="cards-image"
                />
              </div>
              <h5 id="w-node-_0b335df7-45b9-f51a-8c52-1eb49468b530-552507fe">
                NFT&nbsp;Launchpad
              </h5>
              <p id="w-node-_0b335df7-45b9-f51a-8c52-1eb49468b532-552507fe">
                For those artists that don't have big following there will be
                launchpad to give exposure.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="content-section">
        <div className="container">
          <div className="title-wrap-centre">
            <h2 className="heading-2">How to create an NFT on BSC</h2>
          </div>
          <div className="w-layout-grid works-grid">
            <div className="content-card">
              <img src={createnft} alt="create-nft" className="step-image" />
              <div className="content-wrapper">
                <h5 className="heading-3">1. Connect your wallet</h5>
                <p>Use Trust Wallet or Metamask to connect to the app</p>
              </div>
            </div>
            <div className="line-column">
              <div className="line" />
            </div>
            <div className="content-card">
              <img src={uploadnft} alt="upload-nft" className="step-image" />
              <div className="content-wrapper">
                <h5 className="heading-3">2. Create your NFT</h5>
                <p>
                  Upload your NFTs and
                  <br />
                  set the price
                </p>
              </div>
            </div>
            <div className="line-column">
              <div className="line" />
            </div>
            <div className="content-card">
              <img src={earnbnb} alt="earn-bnb-on-nft" className="step-image" />
              <div className="content-wrapper">
                <h5 className="heading-3">3. Start earning BNB</h5>
                <p>
                  Earn BNB and EVERT&nbsp;for all your NFTs that you sell
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container-2 w-container">
          <div className="columns w-row">
            <div className="column-2 w-col w-col-6 w-col-small-small-stack">
              <h2 className="heading-2-white">
                The EVERT <br />
                Token
                <span className="brand-span" />
              </h2>
            </div>
            <div className="column w-col w-col-6 w-col-small-small-stack">
              <div className="paragraph-2">
                Token economy is built around the EVERT Token, a unit of value on
                the platform that enables token holders to use applications on
                this platform, participate in network governance, and earn
                additional token rewards by using this project.
              </div>
              <div className="div-block-6">
                <Link to={config.routes.buy} className="btn-grad">
                  Earn EVERT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
