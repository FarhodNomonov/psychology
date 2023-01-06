import React from "react";
import { Button } from "antd";
import Slider from "react-slick";
import "./aboutProject.css";
import Avatar from "../../assets/images/avatar.png";

function AboutProject() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="about">
      <Slider {...settings}>
        {[0, 1, 2].map(() => {
          return (
            <div>
              <div className="about_img">
                <img src={Avatar} alt="..." />
              </div>
              <div className="about_text">
                <h3>Lorem, ipsum dolor.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis iste nihil placeat delectus tempore eum laboriosam
                  pariatur recusandae ratione qui.
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="about_btn">
        <h3>Otkazib yuboring</h3>
        <Button type="primary">Keyingisi</Button>
      </div>
    </div>
  );
}

export default AboutProject;
