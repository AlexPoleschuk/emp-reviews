import { connect } from 'react-redux';
import { getOpenForm } from '../modules/EmployeePage';
import openCloseForm from '../modules/EmployeePage/actions';
import { getComment, getUser } from '../modules/CommentForm';
import { addComment, addUser } from '../modules/CommentForm/actions';
import CommentForm from '../components/CommentForm';

const mapStateToProps = state => ({
  openForm: getOpenForm(state),
  newComment: getComment(state),
  newUser: getUser(state),
});

const mapDispatchToProps = { openCloseForm, addComment, addUser };

const ComFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentForm);

export default ComFormContainer;
