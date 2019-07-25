import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/common.module.scss';

const AddCommentBtn = () => {
  const g = 1;
  return (
    <button
      type="button"
      className={styles.add_comment_btn}
    >
    Add new Comment
    </button>
  );
};

export default AddCommentBtn;
