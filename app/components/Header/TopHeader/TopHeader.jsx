import React from "react";
import "./TopHeader.css";
import Image from "next/image";

const TopHeader = () => {
  return (
    <>
      <div className="topheader">
        <div className="container">
          <div className="row text-white">
            <div className="col-4 animated-text">
              {" "}
              <Image
                src="/header.png"
                width={16}
                height={16}
                alt="American Express"
              />{" "}
              Lorem Ipsum
            </div>
            <div className="col-4 animated-text">
              {" "}
              <Image
                src="/header.png"
                width={16}
                height={16}
                alt="American Express"
              />{" "}
              Lorem Ipsum
            </div>
            <div className="col-4 animated-text">
              {" "}
              <Image
                src="/header.png"
                width={16}
                height={16}
                alt="American Express"
              />{" "}
              Lorem Ipsum
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
