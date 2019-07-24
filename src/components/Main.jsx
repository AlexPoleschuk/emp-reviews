import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import EmployeesList from './EmployeesList';

const Main = (props) => {
  const { getEmployeesList, employees } = props;

  useEffect(() => {
    getEmployeesList();
  }, [getEmployeesList]);

  return (
    <>
      <header>
        <h2>Employees Reviews</h2>
      </header>
      <div>
        <section>
          <Carousel emp={employees} />
        </section>
        <section>
          <EmployeesList emp={employees} />
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
