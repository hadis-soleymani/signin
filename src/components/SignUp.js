import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "./validate";
import { notify } from "./toast";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "sign up"));
    console.log(errors);
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
    console.log(data);
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      console.log(data);
      notify("signed in successfully", "success");
    } else {
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
      notify("invalid data", "error");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>SignUp</h2>
        <div className={styles.formField}>
          <label>Name</label>
          <input
            className={
              touched.name && errors.name
                ? styles.uncompeleted
                : styles.formInput
            }
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {touched.name && errors.name && <span>{errors.name}</span>}
        </div>
        <div className={styles.formField}>
          <label>Email</label>
          <input
            className={
              touched.email && errors.email
                ? styles.uncompeleted
                : styles.formInput
            }
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {touched.email && errors.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <label>Password</label>
          <input
            className={
              touched.password && errors.password
                ? styles.uncompeleted
                : styles.formInput
            }
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {touched.password && errors.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={styles.formField}>
          <label>ConfirmPassword</label>
          <input
            className={
              touched.confirmPassword && errors.confirmPassword
                ? styles.uncompeleted
                : styles.formInput
            }
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formField}>
          <div className={styles.checkBoxContainer}>
            <label>I accept terms of privacy policy</label>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
          {touched.isAccepted && errors.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link to="/login">login</Link>
          <button type="submit">SignUp</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
