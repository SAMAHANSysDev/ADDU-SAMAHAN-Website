import React from "react";
import styles from "./CarouselContent.module.scss";
import Image from "next/image";
const CarouselContent = ({ imgSrc }) => {
  return (
    <div>
      <div className={styles["imgContatiner"]}>
        <Image.default
          src={imgSrc}
          alt="Image"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          draggable={false}
          width="100%"
          height="100%"
          priority
        />
      </div>
    </div>
  );
};

export default CarouselContent;
