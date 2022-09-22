import React from 'react';
import { useState } from 'react';
import styled from "styled-components";
import useHandleChange from '../../hook/useHandleChange';

const Container = styled.div`
    padding: 20px;
    .input {
        width: 100%;
        max-width: 300px;
        padding: 20px;
        border: 1px solid gray;
        border-radius: 0.5rem;
    }
    form {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    button {
        padding: 12px 20px;
        background-color: aqua;
        font-weight: 600;
        border: none;
        border-radius: 0.5rem;
        margin-top: 20px;
    }
    .errMessgae{
        color: red;
        font-size: 16px;
        font-weight: 600;
        margin-top: 16px;
    }
    .col-30 {
        width: 33%;
    }
`;


const Input = () => {
    // const [values, setValues] = useState({
    //     fullname: "",
    //     email: "",
    //     hobby: false,
    // });



    // const handleInputChange = (e) => {
    //     const type = e.target.type;
    //     setValues({
    //         ...values,
    //         [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    //     });
    // }

    const { values, handleChange } = useHandleChange({
        fullname: "",
        email: "",
        hobby: false,
    })

    const [nameErr, setNameErr] = useState("");
    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (values.fullname === "") {
            setNameErr("Please Enter Your Name");
        }
    }
    return (

        <Container>
            <form onSubmit={handleSubmitForm}>
                <div className='col-30'>
                    <input type="text" name='fullname' className='input' placeholder='Enter your name' onChange={handleChange} />
                    <p className='errMessgae'>{nameErr}</p>
                </div>
                <div className='col-30'>
                    <input type="email" name='email' className='input' placeholder='Enter your name' onChange={handleChange} />
                    <p className='errMessgae'>{nameErr}</p>
                </div>
                <input type="checkbox" name="hobby" onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>

        </Container>
    );
};

export default Input;