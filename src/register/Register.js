import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputForm from '../inputForm/input-form.js';
import Check from '../inputForm/checkInput.js';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function RegisterFormCompnent() {
  const history = useHistory();

  const [info, setInfo] = useState({
    email: "",
    password: "",
    userName: "",
    confirmPassword: "",
    name: ""
  });

  const [errors, setErrors] = useState({
    errEmail: "",
    errPassword: "",
    errName: "",
    errConfirmPassword: "",
    errUserName: ""
  });

  function validateInput(event) {
    const { id, value } = event.target;

    if (id === "NameControllerID") {
      setInfo({ ...info, name: value });
      setErrors({
        ...errors,
        errName: value.trim() === "" && "Name is required"
      });
    }

    if (id === "userNameControllerID") {
      setInfo({ ...info, userName: value });
      setErrors({
        ...errors,
        errUserName: /\s/.test(value) && "Username must not contain spaces"
      });
    }

    if (id === "EmailControllerID") {
      setInfo({ ...info, email: value });
      setErrors({
        ...errors,
        errEmail:
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) &&
          "Email is not valid"
      });
    }

    if (id === "PasswordControllerID") {
      setInfo({ ...info, password: value });
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
      setErrors({
        ...errors,
        errPassword: !passwordRegex.test(value) &&
          "Password must be at least 8 chars, with uppercase, lowercase, digit & special char"
      });
    }

    if (id === "ConFirmPasswordControllerID") {
      setInfo({ ...info, confirmPassword: value });
      setErrors({
        ...errors,
        errConfirmPassword: value !== info.password && "Passwords do not match"
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !errors.errEmail &&
      !errors.errPassword &&
      !errors.errName &&
      !errors.errUserName &&
      !errors.errConfirmPassword &&
      info.email &&
      info.password &&
      info.name &&
      info.userName &&
      info.confirmPassword
    ) {
      alert("Registration Successful ✅");
      history.push("/home");
    } else {
      alert("Please fix validation errors ❌");
    }
  }

  return (
    <Container className="my-3">
      <Form onChange={validateInput}>
        <InputForm
          Label="Name"
          type="text"
          placeholder="Enter Your Name"
          controlId="NameControllerID"
          message={errors.errName}
        />
        <InputForm
          Label="Username"
          type="text"
          placeholder="Enter Your Username"
          controlId="userNameControllerID"
          message={errors.errUserName}
        />
        <InputForm
          Label="Email"
          type="email"
          placeholder="Enter Your Email"
          controlId="EmailControllerID"
          message={errors.errEmail}
        />
        <InputForm
          Label="Password"
          type="password"
          placeholder="Password"
          controlId="PasswordControllerID"
          message={errors.errPassword}
        />
        <InputForm
          Label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          controlId="ConFirmPasswordControllerID"
          message={errors.errConfirmPassword}
        />
        <Check
          label="Check me out"
          type="checkbox"
          controlId="checkControllerID"
        />
        <Button variant="success" type="button" onClick={handleSubmit}>
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default RegisterFormCompnent;
