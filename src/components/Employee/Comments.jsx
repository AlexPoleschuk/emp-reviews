import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/common.module.scss';
import phoneImage from '../../css/svg/phone.svg';

const Comments = ({ comments }) => (
  <div className={styles.emp_page__comments}>
    {comments.map(item => (
      <div
        key={item.title + item.phone}
        className={styles.emp_page__comments__item}
      >
        <h4>{item.title}</h4>
        <span className={styles.phone}>
          <img src={phoneImage} alt="" />
          &nbsp;
          {item.phone}
        </span>
        <span>{item.text}</span>
      </div>
    ))}
  </div>
);

Comments.propTypes = {
  comments: PropTypes.instanceOf(Array).isRequired,
};

export default Comments;
