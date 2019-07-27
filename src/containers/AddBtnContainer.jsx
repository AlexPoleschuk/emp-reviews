import { connect } from 'react-redux';
import { getOpenForm } from '../modules/EmployeePage';
import { getComment } from '../modules/CommentForm';
import AddcommentBtn from '../components/Employee/AddCommentBtn';
import openCloseForm from '../modules/EmployeePage/actions';

const mapStateToProps = state => ({
  openForm: getOpenForm(state),
  newComment: getComment(state),
});

const mapDispatchToProps = { openCloseForm };

const AddBtnContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddcommentBtn);

export default AddBtnContainer;
