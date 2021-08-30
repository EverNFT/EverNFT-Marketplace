import React from "react";
import logo from "../../res/images/app_logo.png";
import twitter from "../../res/images/twitter.png";
import discord from "../../res/images/discord.png";
import telegram from "../../res/images/telegram.png";
import instagram from "../../res/images/Instagram.png";
import config from "../../config";

export default function MinimalFooter() {
  return (
    <div className="footer" style={{marginTop:30}}>
      <div className="container">
        <div className="w-layout-grid footer-grid">
          <div
            id="w-node-_67f7db32-28d2-9f37-8b84-a159dcc6da5a-dcc6da57"
            className="footer-column"
          >
            <div className="section-4">
              <div className="columns-2 w-row">
                <div className="column-3 w-col w-col-3">
                  <a
                    rel="noreferrer"
                    href={"https://discord.gg/2F3w2FXp9E"}
                    target="_blank"
                    className="w-inline-block"
                  >
                    <img
                      src={discord}
                      loading="lazy"
                      alt="evernft discord"
                      className="image-2 social-icon"
                    />
                  </a>
                </div>
                <div className="column-4 w-col w-col-3">
                  <a
                    rel="noreferrer"
                    href={"https://t.me/joinchat/dtHxpgpFeQNjYzFk"}
                    target="_blank"
                    className="w-inline-block"
                  >
                    <img
                      src={telegram}
                      loading="lazy"
                      alt="airnft telegram"
                      className="image-2 social-icon"
                    />
                  </a>
                </div>
                <div className="column-5 w-col w-col-3">
                  <a
                    rel="noreferrer"
                    href={"https://www.instagram.com/ever.nft/"}
                    target="_blank"
                    className="w-inline-block"
                  >
                    <img
                      src={instagram}
                      loading="lazy"
                      alt="evernft instagram"
                      className="image-2 social-icon"
                    />
                  </a>
                </div>
                <div className="column-6 w-col w-col-3">
                  <a
                    rel="noreferrer"
                    href={"https://twitter.com/EverNft"}
                    target="_blank"
                    className="w-inline-block"
                  >
                    <img
                      src={twitter}
                      loading="lazy"
                      alt="evernft twitter"
                      className="image-2 social-icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop:15 ,display:'flex',width:'max-content'}}>
            <div
              id="w-node-_0dd3c33e-8ae8-23c4-b465-50f8633343e7-dcc6da57"
              className="footer-column"
            >
              <div className="title">
                {" "}
                <a
                  rel="noreferrer"
                  href={window.location.href}
                  className="footer-link"
                >
                  Terms of service
                </a>
              </div>
                      </div>
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      &nbsp;
            <div
              id="w-node-a1b07d31-75d9-1099-e70d-26b3ae231947-dcc6da57"
              className="footer-column"
            >
              <div className="title">
                <a
                  rel="noreferrer"
                  href={window.location.href}
                  className="footer-link"
                >
                  <a
                    rel="noreferrer"
                    href={window.location.href}
                    className="footer-link"
                  >
                    Privacy and policy
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
