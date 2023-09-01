import React from 'react';
import './style.css';
import carouselItems from './dummy';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sliderimages = () => {

     const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  const Carousel1 = () => {
    return(
        <div className="carousel-item">
        <div className="cards-wrapper my-card-wrapper ">
        <div className="card">
          <img src={require("../../images/1Fest.jpeg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Yantra 2k19</h5>

          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src={require("../../images/cultural.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Culturals</h5>

          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src={require("../../images/2Fest.jpeg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Yantra 2k19</h5>

          </div>
        </div>
      </div>
      </div>
    )
  }

  const Carousel2 = ()=> {
    return(
            <div className="carousel-item">
        <div className="cards-wrapper my-card-wrapper ">
        <div className="card">
          <img src={require("../../images/3Fest.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Yantra 2k19</h5>

          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src={require("../../images/4Fest.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Yantra 2k18</h5>

          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src={require("../../images/5Fest.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Yantra 2k18</h5>

          </div>
        </div>
      </div>
      </div>
    )
  }

  const Carousel3 = ()=> {
    return(
        <div className="carousel-item">
        <div className="cards-wrapper my-card-wrapper ">
        <div className="card">
          <img src={require("../../images/6Fest.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Yantra 2k18</h5>

          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src={require("../../images/7Fest.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Yantra 2k17</h5>

          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src={require("../../images/8Fest.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Yantra 2k17</h5>

          </div>
        </div>
      </div>
      </div>
    )
  }

  const Carousel4 = ()=> {
      return(
      <div className="carousel-item">
        <div className="cards-wrapper my-card-wrapper ">
        <div className="card">
          <img src={require("../../images/9Fest.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Yantra 2k17</h5>

          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src={require("../../images/10Fest.jpeg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Yantra 2k16</h5>

          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src={require("../../images/11Fest.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Yantra 2k16</h5>

          </div>
        </div>
      </div>
      </div>
      )
  }

  const Carousel5 = ()=> {
    return(
       <div className="carousel-item">
        <div className="cards-wrapper my-card-wrapper ">
          <div className="card">
            <img src={require("../../images/12Fest.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Yantra 2k18</h5>

            </div>
          </div>
          <div className="card d-none d-md-block">
            <img src={require("../../images/13Fest.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Yantra 2k19</h5>

            </div>
          </div>
          <div className="card d-none d-md-block">
            <img src={require("../../images/14Fest.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Yantra 2k18</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner overflow">
      <h1>Recollecting Memories</h1>
      <Slider {...settings}>
      <Carousel1 />
      <Carousel2 />
      <Carousel3 />
      <Carousel4 />
      <Carousel5 />
      </Slider>
    </div>
  </div>
)
}

export default Sliderimages