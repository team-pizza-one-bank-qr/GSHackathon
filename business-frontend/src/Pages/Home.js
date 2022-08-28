import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./Home.css";

const Home = () => {
  return (
    <div class="body">
      <div class="swiper-container">
        <Swiper
          modules={[Autoplay, Pagination]}
          class="mb-5 swiper"
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 10000,
          }}
          pagination={{ clickable: true }}
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
        OneBankQR serves as an integration layer to generate dynamic QR codes for businesses to 
        onboard clients to share financial information.
        </p>
        <div class="card-holder">
          <div class="about home-card card">
            <div class="reason d-flex cardbody">
              <div class="card-content col-7">
                <h5>What?</h5>
                <div class="mb-4">
                An interface to allow communication with the integration layer within the native
                bank application as well as central access to clients’ financial information.
                </div>
                <h5>Why?</h5>
                <div class="mb-5">
                The increasingly competitive climate of the banking industry means that banks need to 
                focus on delivering the best consumer experience. Banks and leaders that are able to 
                interact effectively with their consumers tend to yield higher conversion rates.
                </div>
              </div>
              <div class="sidebanner col-4">
                <img class="sbimg" src="/SideBanner.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
