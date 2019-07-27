import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/common.module.scss';

const AddCommentBtn = ({
  newUser,
  openCloseForm,
  clearUser,
  clearCommentData,
}) => {
  const handleAddComment = () => {
    clearCommentData({});
    openCloseForm(true);
    if (newUser) {
      clearUser();
    }
  };

  return (
    <button
      type="button"
      className={styles.add_comment_btn}
      onClick={handleAddComment}
    >
    New Comment
    </button>
  );
};

AddCommentBtn.propTypes = {
  newUser: PropTypes.func.isRequired,
  openCloseForm: PropTypes.func.isRequired,
  clearUser: PropTypes.func.isRequired,
  clearCommentData: PropTypes.func.isRequired,
};

export default AddCommentBtn;
