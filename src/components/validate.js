export const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    // this is rejecs
    errors.email = "email address is invalid";
  } else {
    delete errors.email;
  }
  if (!data.password) {
    errors.password = "password is required";
  } else if (data.password.length < 6) {
    errors.password = "password need to be 6 charactor or more";
  } else {
    delete errors.password;
  }

  if (type === "sign up") {
    if (!data.name.trim()) {
      // trim delete spaces
      errors.name = "name is required";
    } else {
      delete errors.name;
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "confirm the password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "password do not match";
    } else {
      delete errors.confirmPassword;
    }
    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "accept our regulations";
    }
  }
  return errors;
};
