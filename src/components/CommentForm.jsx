import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import {
  validateTheme,
  validatePhone,
  validateText,
  validateForm,
} from '../services/validation';
import styles from '../css/common.module.scss';

const CommentForm = ({ openCloseForm, addComment }) => {
  let initial = false;

  const onSubmit = (values) => {
    addComment(values);
    openCloseForm(false);
  };
  const onClose = () => {
    openCloseForm(false);
  };

  const formFields = [{
    name: 'title',
    component: 'input',
    validate: validateTheme,
  },
  {
    name: 'phone',
    component: 'input',
    validate: validatePhone,
  },
  {
    name: 'text',
    component: 'textarea',
    validate: validateText,
  }];

  return (
    <div className={styles.comment_form}>
      <Form
        onSubmit={onSubmit}
        validate={validateForm}
        render={({
          handleSubmit, invalid,
        }) => (
          <form
            className={styles.form_items}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
              initial = true;
            }}
          >
            {
            formFields.map(item => (
              <Field
                key={item.name}
                name={item.name}
                component={item.component}
                validate={item.validate}
              >
                {({ input, meta }) => (
                  <div className={styles.form_field}>
                    {item.component !== 'textarea'
                      ? (
                        <input
                          {...input}
                          type="text"
                          placeholder={item.name}
                        />
                      )
                      : (
                        <textarea
                          {...input}
                          type="text"
                          placeholder={item.name}
                        />
                      )
                    }
                    {meta.error && meta.touched
                      ? (
                        <span className={styles.form_field_error}>
                          {meta.error}
                        </span>
                      )
                      : <span className={styles.spin} />
                    }
                  </div>
                )}
              </Field>
            ))
          }
            <div className={styles.form_btns}>
              <button
                type="submit"
                className={styles.submit_form_btn}
                disabled={initial && invalid}
              >
                Submit
              </button>
              <button
                type="submit"
                className={styles.submit_form_btn}
                onClick={onClose}
              >
              Close
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

CommentForm.propTypes = {
  openCloseForm: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
};

export default CommentForm;
