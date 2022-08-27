import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Home.css";

const Home = () => {
  return (
    <div class="body">
      <div class="swiper-container">
        <Swiper
          class="mb-5 swiper"
          slidesPerView={1}
          loop={true}
          navigation={true}
        >
          <SwiperSlide>
            <img
              class="banner col-md-12"
              src="https://www.techguide.com.au/wp-content/uploads/2020/11/QRCode1-750x400.jpeg"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              class="banner col-md-12"
              src="https://www.aseanbriefing.com/news/wp-content/uploads/2018/10/ASEAN-Briefing-Indonesia-to-Standardize-QR-Code-Payment-System-002.jpg"
            ></img>
          </SwiperSlide>
        </Swiper>
        <h2 class="text-center mt-5">ABOUT ONEBANKQR</h2>
        <p class="text-center m-5">
          Recently, there has been a consistent rise in competition within the
          banking industry. Banks and leaders that are able to interact
          effectively with their consumers regardless of the consumers
          preference to shop or interact with their financial institutions tend
          to yield better KPIs.
        </p>
        <div class="about card">
          <div class="cardbody">
            <h5>Scan with your bank's app</h5>
            <div class="mb-3">to register</div>
            <div class="text-center">Use Password to log in instead</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
