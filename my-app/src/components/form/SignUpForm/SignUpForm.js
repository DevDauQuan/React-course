import React from 'react';
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styled from "styled-components";


const Container = styled.div`
    padding: 40px;
    width: 100%;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    .row {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 8px;
    }
    .flex {
        display: flex;
        align-items: center;
    }
    .mt-4 {
        margin-top: 16px;
    }
    .input-form {
        padding: 16px;
        border: 1px solid #ccc;
        border-radius: 8px;
    }
    button {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: wheat;
        font-weight: 600;
        font-size: 18px;
    }
    .text-err {
        color:red;
        font-size: 16px;
    }
    .option {
        margin: 8px;
        font-size: 18px;
    }
    p{
        font-size: 18px;
    }
    .input-checkbox{
        width: 25px;
height: 25px;
    }
`;



const SignUpForm = () => {
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                intro: "",
                job: "",
                terms: false,
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required"),
                lastName: Yup.string()
                    .max(10, "Must be 10 characters or less")
                    .required("Required"),
                email: Yup.string()
                    .email()
                    .required("Required"),
                intro: Yup.string().required("Required"),
                job: Yup.string().required("Required"),
                terms: Yup.boolean().oneOf(
                    [true],
                    "Please check the terms and conditions"
                ),
            })}
            onSubmit={(values, actions) => {
                console.log(values);
                setTimeout(() => {
                    actions.resetForm({
                        firstName: "",
                        lastName: "",
                        email: "",
                        intro: "",
                        job: "",
                        terms: false,
                    });
                    actions.setSubmitting(false);
                }, 5000);
            }}
        >
            {(formik) => {
                return (
                    <Container>
                        <Form>
                            <InputForm label="First Name" name="firstName" id="firstName" placeholder="Enter your First Name"></InputForm>
                            <InputForm label="Last Name" name="lastName" id="firstName" placeholder="Enter your Last Name"></InputForm>
                            <InputForm label="Email" name="email" placeholder="Enter your Email" type='email' id='email'></InputForm>
                            <TextAreaForm label="Introduce" type="text" id='intro' name='intro' placeholder='Introduce yourself' className='input-form'></TextAreaForm>
                            <SelectForm label="Your Job" type="text" id='job' name='job' placeholder='Select your job'
                                className='input-form'>
                                <option value="fe" className='option'>Frontend DEV</option>
                                <option value="be" className='option'>Backend DEV</option>
                                <option value="de" className='option'>Data Engeneer DEV</option>
                            </SelectForm>
                            <CheckBoxForm type="checkbox" id='terms' name='terms' className='input-checkbox' text={"I accept the terms and conditions"}></CheckBoxForm>
                            <div className='row mt-4'>
                                <button type="submit" disabled={formik.isSubmitting} >
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </Container>
                )

            }}
        </Formik>
    );
};

const InputForm = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='row'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input type="text" className='input-form' {...props} {...field} />
            {meta.touched && meta.error ? (
                <div className="text-err">{meta.error}</div>
            ) : null}
        </div>

    )
}

const TextAreaForm = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='row'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input type="text" className='input-form' {...props} {...field} />
            {meta.touched && meta.error ? (
                <div className="text-err">{meta.error}</div>
            ) : null}
        </div>
    )
}

const SelectForm = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='row'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select type="text" className='input-form' {...props} {...field} />
            {meta.touched && meta.error ? (
                <div className="text-err">{meta.error}</div>
            ) : null}
        </div>
    )
}

const CheckBoxForm = ({ text, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='row'>
            <div className='flex'>
                <input type="text" className='input-form' {...props} {...field} />
                <p>{text}</p>
            </div>
            {meta.touched && meta.error ? (
                <div className="text-err">{meta.error}</div>
            ) : null}
        </div>
    )
}

export default SignUpForm;