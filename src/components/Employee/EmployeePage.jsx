import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/common.module.scss';
import Card from './Card';
import Comments from './Comments';
import AddBtnContainer from '../../containers/AddBtnContainer';

const EmployeePage = ({ selected }) => {
  const visible = Object.prototype.hasOwnProperty.call(selected, 'email');

  return (
    visible
      ? (
        <div className={styles.emp_page}>
          <div className={styles.card_btn}>
            <Card selected={selected} />
            <AddBtnContainer selected={selected} />
          </div>
          <Comments comments={selected.comments.slice(-5).reverse()} />
        </div>
      ) : null
  );
};

EmployeePage.propTypes = {
  selected: PropTypes.instanceOf(Object).isRequired,
};

export default EmployeePage;
