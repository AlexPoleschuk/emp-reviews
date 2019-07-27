/* eslint-disable no-useless-escape */
/* eslint-disable consistent-return */

export const validateTheme = (value) => {
  if (!value) {
    return 'Required';
  }
  if (value.length < 5 || value.lenght > 80) {
    return 'Must contain from 5 to 80 characters';
  }
};

export const validatePhone = (value) => {
  if (!value) {
    return 'Required';
  }
  if (!/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(value.replace(/\s+/g, ''))) {
    return 'Please enter valid phone number';
  }
};

export const validateText = (value) => {
  if (value && value.length > 128) {
    return 'Message must not exceed 128 characters';
  }
};

export const validateForm = (values) => {
  const errors = {};
  let disable = false;
  errors.theme = validateTheme(values.theme);
  errors.phone = validatePhone(values.phone);
  errors.text = validateText(values.textarea);
  if (Object.keys(values).length !== 0) {
    disable = true;
  }
  return disable;
};
