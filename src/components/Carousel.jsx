import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import getIcon from '../services/gravatarHash';
import styles from '../css/common.module.scss';

const Carousel = (props) => {
  const { emp } = props;

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
  };

  return (
    <div className={styles.carousel__body}>
      <Slider {...settings}>
        {emp.map(item => (
          <button
            type="button"
            key={item.email}
            onDoubleClick={() => console.log(item.email)}
          >
            <img
              src={getIcon(item.email)}
              alt={item.name}
            />
          </button>
        ))}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  emp: PropTypes.instanceOf(Array).isRequired,
};

export default Carousel;
