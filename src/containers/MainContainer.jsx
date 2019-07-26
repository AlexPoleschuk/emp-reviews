import { connect } from 'react-redux';
import { getEmployees, getSelectedEmp } from '../modules/Main';
import { getComment } from '../modules/CommentForm';
import { getOpenForm } from '../modules/EmployeePage';
import { getEmployeesList, getSelectedEmployee } from '../modules/Main/actions';
import { clearCommentData } from '../modules/CommentForm/actions';
import Main from '../components/Main';

const mapStateToProps = state => ({
  employees: getEmployees(state),
  selectedEmp: getSelectedEmp(state),
  openForm: getOpenForm(state),
  newComment: getComment(state),
});

const mapDispatchToProps = {
  getEmployeesList,
  getSelectedEmployee,
  clearCommentData,
};

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

export default MainContainer;
