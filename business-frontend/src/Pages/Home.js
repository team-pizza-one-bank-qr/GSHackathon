import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const Home = () => {
    return (
      <div>
        <Swiper slidesPerView={1} loop={true} navigation={true}>
          <SwiperSlide>
            <img class="col-md-12" src="https://www.techguide.com.au/wp-content/uploads/2020/11/QRCode1-750x400.jpeg"></img>
          </SwiperSlide>
        </Swiper>
      </div>
    );
}

export default Home;
