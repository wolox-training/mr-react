import { validEmail, validPassword, validText } from './validators';
import { REQUIRED, ERROR_EMAIL, ERROR_PASSWORD, ERROR_TEXT, EQUAL_PASSWORD } from './strings';

const loginValidation = values => {
  const errors = {};

  // validation Email
  if (!values.email) {
    errors.email = REQUIRED;
  } else if (!validEmail(values.email)) {
     errors.email = ERROR_EMAIL;
  }

  //validation Password
  if (!values.password) {
    errors.password = REQUIRED;
  } else if (!validPassword(values.password)) {
    errors.password = ERROR_PASSWORD;
  }
  return errors
};

const signUpValidation = (values) => {
  const errors = {};

  // validation email
  if (!values.email) {
    errors.email = REQUIRED;
  } else if (!validEmail(values.email)) {
     errors.email = ERROR_EMAIL;
  }

  // validation password
  if (!values.password) {
    errors.password = REQUIRED;
  } else if (!validPassword(values.password)) {
    errors.password = ERROR_PASSWORD;
  }

  // validation password confirmation
  if (!values.confirmPassword) {
    errors.confirmPassword = REQUIRED;
  } else if (!validPassword(values.confirmPassword)) {
    errors.confirmPassword = ERROR_PASSWORD;
  } else if (values.confirmPassword !== values.password ) {
    errors.confirmPassword = EQUAL_PASSWORD;
  }

  // validation first name
  if (values.firstName) {
    errors.firstName = REQUIRED;
  } else if (!validText(values.firstName)) {
    errors.firstName = ERROR_TEXT;
  }

  // validation last name
  if (values.lastName) {
    errors.lastName = REQUIRED;
  } else if (!validText(values.lastName)) {
    errors.lastName = ERROR_TEXT;
  }
  return errors;
}

export { loginValidation, signUpValidation };
