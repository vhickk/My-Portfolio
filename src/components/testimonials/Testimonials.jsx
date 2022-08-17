import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testimonials() {
  return (
    
    <section id ='testimonials'>
      <h5>Review From Clients</h5>
      <h2>TESTIMONIALS</h2>

      <Swiper className="container testimonials__container"
      modules={[ Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <img className='client__avatar' src={AVTR2} alt="" />
          <h5 className='client__name'>Earnest Achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus omnis, perspiciatis ad laborum fuga quibusdam ipsa atque nemo odio eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet exercitationem ratione molestiae explicabo numquam quibusdam ad incidunt necessitatibus iure, veritatis maiores accusantium quae voluptas dolorum, sed excepturi voluptatum repellendus vitae?
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <img className='client__avatar' src={AVTR3} alt="" />
          <h5 className='client__name'>Earnest Achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus omnis, perspiciatis ad laborum fuga quibusdam ipsa atque nemo odio eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet exercitationem ratione molestiae explicabo numquam quibusdam ad incidunt necessitatibus iure, veritatis maiores accusantium quae voluptas dolorum, sed excepturi voluptatum repellendus vitae?
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <img className='client__avatar' src={AVTR4} alt="" />
          <h5 className='client__name'>Earnest Achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus omnis, perspiciatis ad laborum fuga quibusdam ipsa atque nemo odio eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet exercitationem ratione molestiae explicabo numquam quibusdam ad incidunt necessitatibus iure, veritatis maiores accusantium quae voluptas dolorum, sed excepturi voluptatum repellendus vitae?
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <img className='client__avatar' src={AVTR1} alt="" />
          <h5 className='client__name'>Earnest Achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus omnis, perspiciatis ad laborum fuga quibusdam ipsa atque nemo odio eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet exercitationem ratione molestiae explicabo numquam quibusdam ad incidunt necessitatibus iure, veritatis maiores accusantium quae voluptas dolorum, sed excepturi voluptatum repellendus vitae?
          </small>
        </SwiperSlide>

        
      </Swiper>
        
    </section>
  )
}

export default Testimonials;