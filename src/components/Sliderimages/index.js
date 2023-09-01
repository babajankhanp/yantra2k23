import React from 'react';
import './style.css';

const Sliderimages = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <h1>Recollecting Memories</h1>
      <div className="carousel-item active">
        <div className="cards-wrapper">
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
      <div className="carousel-item">
        <div className="cards-wrapper">
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
      <div className="carousel-item">
        <div className="cards-wrapper">
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
      <div className="carousel-item">
        <div className="cards-wrapper">
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
      <div className="carousel-item">
        <div className="cards-wrapper">
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
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
)
}

export default Sliderimages