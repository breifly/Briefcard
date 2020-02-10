const validate = values => {
  const errors = {};
  if (values.description && values.description.length <= 100) {
    errors.description = 'Must be 100 characters or More';
  }
  return errors;
};

export default validate;
