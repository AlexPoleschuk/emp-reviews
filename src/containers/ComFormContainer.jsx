import { connect } from 'react-redux';
import { getOpenForm } from '../modules/EmployeePage';
import openCloseForm from '../modules/EmployeePage/actions';
import { getComment } from '../modules/CommentForm';
import { addComment } from '../modules/CommentForm/actions';
import CommentForm from '../components/CommentForm';

const mapStateToProps = state => ({
  openForm: getOpenForm(state),
  newComment: getComment(state),
});

const mapDispatchToProps = { openCloseForm, addComment };

const ComFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentForm);

export default ComFormContainer;
