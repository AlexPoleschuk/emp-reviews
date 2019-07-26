import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import EmployeesList from './EmployeesList';
import EmployeePage from './Employee/EmployeePage';
import ComFormContainer from '../containers/ComFormContainer';
import CarouselContainer from '../containers/CarouselContainer';
import styles from '../css/common.module.scss';

const Main = (props) => {
  const {
    getEmployeesList,
    getSelectedEmployee,
    clearCommentData,
    employees,
    selectedEmp,
    openForm,
    newComment,
  } = props;

  const onClickEmp = (email) => {
    clearCommentData({});
    getSelectedEmployee(email);
  };

  const empArr = Object.values(employees);
  const empCurrent = empArr.reduce((searched, item) => (
    item.email === selectedEmp
      ? item
      : searched
  ), {});


  const addNewCommentToCurrent = () => {
    if (empCurrent
      && Object.prototype.hasOwnProperty.call(newComment, 'phone')) {
      empCurrent.comments.push(newComment);
    }
  };

  useEffect(() => {
    getEmployeesList();
  }, [getEmployeesList]);

  addNewCommentToCurrent();

  return (
    <>
      <header>
        <h2>Employees Reviews</h2>
      </header>
      <div className={styles.main}>
        <section className={styles.carousel}>
          <CarouselContainer emp={empArr} onClickEmp={onClickEmp} />
        </section>
        <section className={styles.list_page}>
          {
          !openForm
            ? <EmployeesList emp={empArr} onClickEmp={onClickEmp} />
            : <ComFormContainer />
          }
          {
          selectedEmp
            ? <EmployeePage selected={empCurrent} />
            : null
          }
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
  clearCommentData: PropTypes.func.isRequired,
  employees: PropTypes.instanceOf(Object).isRequired,
  selectedEmp: PropTypes.string.isRequired,
  openForm: PropTypes.bool.isRequired,
  newComment: PropTypes.instanceOf(Object).isRequired,
};

export default Main;
