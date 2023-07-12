import React, { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
export default function ProductSlider({ media }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
    <div className="product-slider  w-1/2">
    <div className="container">
    <Swiper
        style={{
          "--swiper-navigation-color": "#00000",
          "--swiper-pagination-color": "#00000",
        }}
        spaceBetween={10}
        navigation={true}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {media.map((image, index) => {
          const mainImageData = getImage(image.preview.image.gatsbyImageData);
          return (
            <SwiperSlide key={index}>
              <GatsbyImage image={mainImageData}  alt="product image"/>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {media.map((image, index) => {
          const thumbImage = getImage(image.preview.image.gatsbyImageData);
          return (
            <SwiperSlide key={index}>
              <GatsbyImage image={thumbImage}  alt="product image"/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    </div>
    </>
  );
}
