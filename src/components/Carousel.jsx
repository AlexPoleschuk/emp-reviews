import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import getIcon from '../services/gravatarHash';
import styles from '../css/common.module.scss';

const Carousel = ({ emp, onClickEmp, openCloseForm }) => {
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

  const onClickCarItem = (email) => {
    onClickEmp(email);
    openCloseForm(false);
  };

  return (
    <div className={styles.carousel__body}>
      <Slider {...settings}>
        {emp.map(item => (
          <button
            type="button"
            key={item.email}
            onDoubleClick={() => onClickCarItem(item.email)}
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
  onClickEmp: PropTypes.func.isRequired,
  openCloseForm: PropTypes.func.isRequired,
};

export default Carousel;
