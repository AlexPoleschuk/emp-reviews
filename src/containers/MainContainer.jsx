import { connect } from 'react-redux';
import { getEmployees, getSelectedEmp } from '../modules/Main';
import { getComment, getUser } from '../modules/CommentForm';
import { getOpenForm } from '../modules/EmployeePage';
import { getEmployeesList, getSelectedEmployee } from '../modules/Main/actions';
import { clearCommentData, addUser } from '../modules/CommentForm/actions';
import Main from '../components/Main';

const mapStateToProps = state => ({
  employees: getEmployees(state),
  selectedEmp: getSelectedEmp(state),
  openForm: getOpenForm(state),
  newComment: getComment(state),
  newUser: getUser(state),
});

const mapDispatchToProps = {
  getEmployeesList,
  getSelectedEmployee,
  clearCommentData,
  addUser,
};

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

export default MainContainer;
