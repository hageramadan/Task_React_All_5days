import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputForm from '../inputForm/input-form.js';
// import checkInputForm from "../inputForm/checkInput"
// import Check from '../inputForm/checkInput.js';
import { useState } from 'react';

import { useHistory } from "react-router-dom";




function EmailFormCompnent() {



    const [info, setInfo] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        errEmail: "",
        errPassword: ""
    })
    
    
    function validateInput(event) {
        // console.log()
        if (event.target.id === "EmailControllerID") {
            setInfo({
                ...info,
                email : event.target.value
            })

            setErrors({
                ...errors,
                errEmail: !(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(event.target.value) && "Email is not valid"

            })
        }
        else if (event.target.id === "PasswordControllerID") {
            setInfo({
                ...info,
                password : event.target.value
            })

            setErrors({
                ...errors,
                errPassword: event.target.value.length < 8 && "password must be at least 8 characters"
            })
        }
    }


       const history = useHistory();

            function handleSubmit(e) {
            e.preventDefault();
            if (!errors.errEmail && !errors.errPassword && info.email && info.password) {
                history.push("/home");   
            } else {
                alert("Please fix errors before submitting");
            }
            }



    return (

        <>
            <Container className='my-3'>
                <Form onChange={(e) => {
                    validateInput(e)
                }
                }>
                    <InputForm Label="Email" type="text" placeholder="Enter Your Email" controlId="EmailControllerID" message={errors.errEmail}>  </InputForm>
                    <InputForm Label="Password" type="password" placeholder="Password" controlId="PasswordControllerID" message={errors.errPassword}></InputForm>
                
                  <Button variant="primary" type="button" onClick={handleSubmit}>
                    Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default EmailFormCompnent;