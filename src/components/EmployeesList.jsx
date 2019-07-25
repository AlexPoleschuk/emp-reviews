import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/common.module.scss';
import getIcon from '../services/gravatarHash';

const EmployeesList = ({ emp, onClickEmp }) => (
  <ul>
    {emp.map(item => (
      <button
        key={item.email}
        type="button"
        className={styles.list_item_btn}
        onClick={() => onClickEmp(item.email)}
      >
        <li>
          <img src={getIcon(item.email)} alt={item.name} />
          <span>{item.name}</span>
          <span>{item.surname}</span>
          <span>{item.position}</span>
        </li>
      </button>
    ))}
  </ul>
);

EmployeesList.propTypes = {
  emp: PropTypes.instanceOf(Array).isRequired,
  onClickEmp: PropTypes.func.isRequired,
};

export default EmployeesList;
