import React from 'react';
import './style.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from "../images/1Fest.jpeg";
import image2 from "../images/cultural.jpg";
import image3 from "../images/2Fest.jpeg";
import image4 from "../images/4Fest.jpg";
import image5 from "../images/9Fest.jpg";
import image6 from "../images/10Fest.jpeg";
import image7 from "../images/12Fest.jpg";
import image8 from "../images/12Fest.jpg";
import image9 from "../images/5Fest.jpg";


const Sliderimages = () => {

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay:true,
  pauseOnHover: true,
  autoplaySpeed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const carouselItems = [
  {
    imageSrc: image1,
    title: 'Yantra 2k19',
    alt: 'Yantra 2k19',
  },
  {
    imageSrc: image2,
    title: 'Culturals',
    alt: 'Culturals Image',
  },
  {
    imageSrc: image3,
    title: 'Yantra 2k19',
    alt: 'Yantra 2k19',
  },
  {
    imageSrc: image4,
    title: 'Yantra 2k18',
    alt: 'Yantra 2k18',
  },
  {
    imageSrc: image5,
    title: 'Yantra 2k17',
    alt: 'Yantra 2k17',
  },
  {
    imageSrc: image6,
    title: 'Yantra 2k18',
    alt: 'Yantra 2k16',
  },
  {
    imageSrc: image7,
    title: 'Yantra2k18',
    alt: 'Yantra2k15',
  },
  {
    imageSrc: image8,
    title: 'Yantra2k18',
    alt: 'Yantra2k14',
  },
  {
    imageSrc: image9,
    title: 'Yantra2k18',
    alt: 'Yantra2k18',
  },
];

  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner overflow">
      <h1>Recollecting Memories</h1>
      <Slider {...settings}>
      {carouselItems.map(item => (
          <div key={item.id} className="carousel-item">
            <div className="cards-wrapper my-card-wrapper">
              <div className="card">
                <img src={item.imageSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
)
}

export default Sliderimages