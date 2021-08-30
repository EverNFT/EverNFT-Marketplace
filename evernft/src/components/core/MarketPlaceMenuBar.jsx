import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../../config";
import logo from "../../res/images/app_logo.png";

export default function MarketPlaceMenuBar({ activeRoute }) {
  const [isOpenNavbar, setOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setOpenNavbar(!isOpenNavbar);
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 992) {
        setOpenNavbar(false);
      }
    });
  }, []);
  return (
    <div>
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration={400}
        id="Navigation"
        data-w-id="33c883c6-4afc-cc73-3bca-d2857a9d4bc2"
        role="banner"
        className="navbar w-nav"
      >
        <div className="navigation-container">
          <div className="navigation-left">
            <Link
              to={config.routes.app}
              aria-current="page"
              className="brand w-nav-brand w--current"
              aria-label="home"
            >
              <img src={logo} width={48} alt="Airnfts" className="image-7" />
            </Link>
          </div>
          <div style={{ width: "30%", marginTop: "10px" }}>
            <span className="ant-input-group-wrapper ant-input-group-wrapper-lg ant-input-search ant-input-search-large search-menu-large-screens">
              <span className="ant-input-wrapper ant-input-group">
                <span className="ant-input-affix-wrapper ant-input-affix-wrapper-lg">
                  <input
                    type="search"
                    placeholder="Search by art name, creator or collection"
                    className="ant-input ant-input-lg"
                    defaultValue
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
                <span
                  className="ant-input-group-addon"
                  style={{ borderRadius: 20 }}
                >
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
          <div className="navigation-right">
            <div
              className="menu-button w-nav-button"
              style={{ WebkitUserSelect: "text" }}
              aria-label="menu"
              role="button"
              tabIndex={0}
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="false"
              onClick={toggleNavbar}
            >
              <div className="icon w-icon-nav-menu" />
            </div>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <Link
                to={config.routes.root}
                aria-current="page"
                className={`nav-link w-nav-link ${
                  activeRoute === config.routes.root && "w--current"
                }`}
              >
                Explore
              </Link>
              <Link
                to={config.routes.staking}
                aria-current="page"
                className={`nav-link w-nav-link ${
                  activeRoute === config.routes.staking && "w--current"
                }`}
              >
                Staking
              </Link>
              <div className="nav-link-icon">
                <Link
                  to={config.routes.create}
                  className="nav-link cta w-nav-link"
                >
                  Create
                </Link>
                {/* <a href="/blog" className="nav-link w-nav-link">
                NFT&nbsp;Blog
              </a> */}
                {/* <Link
                  to={config.routes.app}
                  className=" cta w-button"
                  style={{ marginTop: "10px", borderRadius: 5, color: "white" }}
                >
                  <b>Launch App Now</b>
                </Link> */}
              </div>
            </nav>
            {/* <div className="columns-2 nav-link w-row">
            <div className="column-3 w-col w-col-3">
              <a
                href="https://twitter.com/airnfts"
                target="_blank"
                className="link-block w-inline-block"
                without
                rel="noreferrer"
              >
                <img
                  src="https://uploads-ssl.webflow.com/60098c5b239e4890fa5ee1aa/60591e9871de89777bd43fc6_Twitter.png"
                  loading="lazy"
                  width={24}
                  alt="airnfts twitter"
                  className="image-3 social-icon"
                />
              </a>
            </div>
            <div className="column-4 w-col w-col-3">
              <a
                href="https://www.instagram.com/airnfts"
                target="_blank"
                className="w-inline-block"
                without
                rel="noreferrer"
              >
                <img
                  src="https://uploads-ssl.webflow.com/60098c5b239e4890fa5ee1aa/60591e94a3f9e45c80571e62_Instagram.png"
                  loading="lazy"
                  width={24}
                  alt="airnfts instagram"
                  className="image-4 social-icon"
                />
              </a>
            </div>
            <div className="column-5 w-col w-col-3">
              <a
                href="https://t.me/joinchat/HKsQnSvxhfjjKGJe"
                target="_blank"
                className="w-inline-block"
                without
                rel="noreferrer"
              >
                <img
                  src="https://uploads-ssl.webflow.com/60098c5b239e4890fa5ee1aa/6058eb242a65115161639b5b_telegram.png"
                  loading="lazy"
                  alt="airnft telegram"
                  className="image-2 social-icon"
                />
              </a>
            </div>
            <div className="w-col w-col-3">
              <a
                href="https://discord.gg/TXjQUVWXx7"
                target="_blank"
                className="w-inline-block"
                without
                rel="noreferrer"
              >
                <img
                  src="https://uploads-ssl.webflow.com/60098c5b239e4890fa5ee1aa/6092e97f89e9b9783b8cb522_discord.png"
                  loading="lazy"
                  alt="airnfts discord"
                  className="image-2 social-icon"
                />
              </a>
            </div>
          </div> */}
          </div>
        </div>
        <div
          className="w-nav-overlay"
          data-wf-ignore
          id="w-nav-overlay-0"
          style={{
            height: "8849.66px",
            display: isOpenNavbar ? "block" : "none",
            transition: "opacity 1000ms, display 1000ms",
          }}
        >
          <nav
            role="navigation"
            className="nav-menu w-nav-menu"
            data-nav-menu-open
            style={{
              transform: "translateY(0px)",
              transition: "transform 400ms ease 0s",
            }}
          >
            <a
              href="/"
              aria-current="page"
              className="nav-link w-nav-link w--current w--nav-link-open"
            >
              Home
            </a>
          </nav>
        </div>
        <div className="ant-space-item">
          <div role="button" tabIndex={-12} className="connect-menu-item-div">
            <Link to={config.routes.dashboard}>
              <div className="connect-menu-avatar-bg">
                <img
                  src="https://i.pravatar.cc/300"
                  className="identicon"
                  alt="identicon"
                  width={40}
                  height={40}
                  style={{ width: 40, height: 40, borderRadius: 50 }}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
