import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import EmployeesList from './EmployeesList';
import EmployeePage from './Employee/EmployeePage';
import styles from '../css/common.module.scss';

const Main = (props) => {
  const {
    getEmployeesList,
    getSelectedEmployee,
    employees,
    selectedEmp,
  } = props;
  console.log(props);

  const [selected, onClickEmp] = useState('');

  useEffect(() => {
    getEmployeesList();
  }, [getEmployeesList]);

  getSelectedEmployee(selected);

  const empArr = Object.values(employees);

  const empCurrent = empArr.reduce((searched, item) => (
    item.email === selectedEmp
      ? item
      : searched
  ), {});

  return (
    <>
      <header>
        <h2>Employees Reviews</h2>
      </header>
      <div>
        <section className={styles.carousel}>
          <Carousel emp={empArr} onClickEmp={onClickEmp} />
        </section>
        <section className={styles.list_page}>
          <EmployeesList emp={empArr} onClickEmp={onClickEmp} />
          <EmployeePage selected={empCurrent} />
        </section>
      </div>
      <footer>
        <h6>Alex, 2019</h6>
      </footer>
    </>
  );
};

Main.propTypes = {
  getEmployeesList: PropTypes.func.isRequired,
  getSelectedEmployee: PropTypes.func.isRequired,
  employees: PropTypes.instanceOf(Object).isRequired,
  selectedEmp: PropTypes.string.isRequired,
};

export default Main;
