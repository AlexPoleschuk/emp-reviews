import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/common.module.scss';
import getIcon from '../../services/gravatarHash';

const Card = ({ selected }) => {
  const {
    name, surname, position, email,
  } = selected;
  return (
    <div className={styles.emp_page__card}>
      <img src={getIcon(email)} alt={name} />
      <span>{name}</span>
      <span>{surname}</span>
      <span>{position}</span>
      <span>{email}</span>
    </div>
  );
};

Card.propTypes = {
  selected: PropTypes.instanceOf(Object).isRequired,
};

export default Card;
