import React from 'react';
import PropTypes from 'prop-types';
import getIcon from '../services/gravatarHash';

const EmployeesList = (props) => {
  const { emp } = props;

  return (
    <ul>
      {emp.map(item => (
        <li key={item.email}>
          <img src={getIcon(item.email)} alt={item.name} />
          <span>{item.name}</span>
          <span>{item.surname}</span>
          <span>{item.position}</span>
        </li>
      ))}
    </ul>
  );
};

EmployeesList.propTypes = {
  emp: PropTypes.instanceOf(Array).isRequired,
};

export default EmployeesList;
