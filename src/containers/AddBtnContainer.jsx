import { connect } from 'react-redux';
import { getOpenForm } from '../modules/EmployeePage';
import { getComment, getUser } from '../modules/CommentForm';
import AddcommentBtn from '../components/Employee/AddCommentBtn';
import openCloseForm from '../modules/EmployeePage/actions';
import { clearCommentData, clearUser } from '../modules/CommentForm/actions';

const mapStateToProps = state => ({
  openForm: getOpenForm(state),
  newComment: getComment(state),
  newUser: getUser(state),
});

const mapDispatchToProps = {
  openCloseForm,
  clearCommentData,
  clearUser,
};

const AddBtnContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddcommentBtn);

export default AddBtnContainer;
