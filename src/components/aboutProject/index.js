import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import Slider from "react-slick";
import "./aboutProject.css";
import Avatar from "../../assets/images/avatar.png";
import UseScreen from "../../ui/screen";

function AboutProject() {
  const ref = React.useRef(null);
  const navigate = useNavigate();
  const nextSlider = () => {
    ref.current.slickNext();
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <UseScreen className="about">
      <Slider
        {...settings}
        ref={ref}
        beforeChange={(_, newIndex) =>
          newIndex === 2 && _ === 2
            ? navigate("/main", { replace: true })
            : null
        }
        className="splash"
      >
        {[0, 1, 2].map((item, i) => {
          return (
            <div key={i}>
              <div className="about_img">
                <img src={Avatar} alt="..." />
              </div>
              <div className="about_text">
                <h3>Lorem, ipsum dolor.</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Corporis, quis atque! Facere nam porro, id adipisci possimus
                  ut, quibusdam labore blanditiis sint quasi voluptatem dolorum
                  distinctio impedit nesciunt, consequuntur dolore!
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="about_btn">
        <Button
          onClick={() => navigate("/main", { replace: true })}
          type="text"
        >
          O`tkazib yuborish
        </Button>
        <Button type="primary" onClick={nextSlider}>
          Keyingisi
        </Button>
      </div>
    </UseScreen>
  );
}

export default AboutProject;
