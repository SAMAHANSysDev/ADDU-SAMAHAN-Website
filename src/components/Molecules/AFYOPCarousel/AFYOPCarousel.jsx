import React from "react";
import Image from 'next/image'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { CarouselContent } from "../../ComponentIndex";
import styles from "./AFYOPCarousel.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// const settings = {
//   dots: false,
//   fade: true,
//   infinite: true,
//   arrows: false,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   speed: 5000,
//   autoplaySpeed: 2000,
// };

const AFYOPCarousel = ({ carcon }) => {
  return (
    // <div>
    //   <div className={styles["sliderContainer"]}>
    //     <Slider {...settings}>
    //       {carcon.content.map((item, index) => {
    //         return (
    //           <div key={index} className={styles["slickkk"]}>
    //             <CarouselContent imgSrc={item} />
    //           </div>
    //         );
    //       })}
    //     </Slider>
    //   </div>
    // </div>

    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{delay: 5000}}
        className={styles["mySwiper"]}
        loop={true}
      >
        {carcon.content.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Image.default src={item} layout="fill" objectFit="contain" alt="Carousel Image" />
              
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default AFYOPCarousel;
