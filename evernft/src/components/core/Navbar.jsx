import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../../config";
import logo from "../../res/images/app_logo.png";

export default function Navbar({ activeRoute }) {
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
            to={config.routes.root}
            aria-current="page"
            className="brand w-nav-brand w--current"
            aria-label="home"
          >
            <img src={logo} width={48} alt="Evernfts" className="image-7" />
          </Link>
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
              className={` nav-link w-nav-link ${activeRoute === config.routes.root && 'w--current'}`}

            >
              Home
            </Link>
            <Link
              to={config.routes.staking}
              aria-current="page"
              className={`nav-link w-nav-link ${activeRoute === config.routes.staking && 'w--current'}`}
            >
              Staking
            </Link>
            <div className="nav-link-icon">
              {/* <a href="/blog" className="nav-link w-nav-link">
                NFT&nbsp;Blog
              </a> */}
              <Link
                to={config.routes.app}
                className="btn-grad cta w-button"
                style={{ marginTop: "10px", borderRadius: 5 }}
              >
                Launch App Now
              </Link>
            </div>
          </nav>
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
          <Link
              to={config.routes.root}
              aria-current="page"
              className={`nav-link w-nav-link ${activeRoute === config.routes.root && 'w--current'}`}

            >
              Home
            </Link>
            <Link
              to={config.routes.staking}
              aria-current="page"
              className={`nav-link w-nav-link ${activeRoute === config.routes.staking && 'w--current'}`}
            >
              Staking
            </Link>
            <div className="nav-link-icon">
              {/* <a href="/blog" className="nav-link w-nav-link">
                NFT&nbsp;Blog
              </a> */}
              <Link
                to={config.routes.app}
                className=" cta w-button"
                style={{ marginTop: "10px", borderRadius: 5 }}
              >
                Launch App Now
              </Link>
            </div>
        </nav>
      </div>
    </div >
  );
}
