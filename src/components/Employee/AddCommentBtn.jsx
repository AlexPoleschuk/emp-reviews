import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/common.module.scss';

const AddCommentBtn = ({ openCloseForm }) => {
  const handleAddComment = () => {
    openCloseForm(true);
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
  openCloseForm: PropTypes.func.isRequired,
};

export default AddCommentBtn;
