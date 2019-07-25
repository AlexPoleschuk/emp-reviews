import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import EmployeesList from './EmployeesList';
import styles from '../css/common.module.scss';

const Main = (props) => {
  const { getEmployeesList, employees } = props;

  useEffect(() => {
    getEmployeesList();
  }, [getEmployeesList]);

  const empArr = Object.values(employees);

  return (
    <>
      <header>
        <h2>Employees Reviews</h2>
      </header>
      <div>
        <section className={styles.carousel}>
          <Carousel emp={empArr} />
        </section>
        <section className={styles.emp_list}>
          <EmployeesList emp={empArr} />
        </section>
      </div>
      <footer>
        <h6>Alex, 2019</h6>
      </footer>
    </>
  );
};

Main.propTypes = {
  getEmployeesList: PropTypes.instanceOf(Function).isRequired,
  employees: PropTypes.instanceOf(Object).isRequired,
};

export default Main;
