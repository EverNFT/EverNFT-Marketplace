import React from "react";
// import { Link } from "react-router-dom";

export default function ItemCard({ title, subTitle, image }) {
  return (
    <div className="ant-list-item" >
    <div className="nft-card" role="presentation">
      <div className="nft-img-div">
        <div className="ant-image" style={{ width: "100%" }}>
          <img
            alt="Nft Bear vs Bull "
            className="ant-image-img nft-img"
            src={image}
          />
        </div>
      </div>
      <div className="nft-card-bottom">
        <div className="nft-card-name">{title}</div>
        <div className="card-bottom-price-likes">
          <div className="nft-card-price">
            <div>
              {subTitle}
              <span className="fiat-price" />
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  </div>
    //   </div>
    // </div>
  );
}
