import React from 'react'
import "./LoginPage.css"
import { BsPerson } from "react-icons/bs"
import { FiLock } from "react-icons/fi"
import { AiOutlineMail } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

interface PropType {
    formType: string
}

const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
}




export const LoginPage = (props: PropType) => {
    const [email, setEmail] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        switch (type) {
            case "password": {
                setPassword(e.target.value)
                break;
            }
            case "firstName": {
                setFirstName(e.target.value)
                break;
            }
            case "lastName": {
                setLastName(e.target.value)
                break;
            }
            case "email": {
                setEmail(e.target.value)
                break;
            }
            default:
                break;
        }
    }

    return (
        <div className='login__wrapper'>
            <div className='login__box'>
                <form onSubmit={handleFormSubmit} className="login__form">
                    <div className="login__header__icon__container">
                        <BsPerson className="login__header__icon" />
                    </div>
                    <div className="login__header__text">
                        {props.formType === "login" ?
                            "Login to your account" :
                            "Signup for an account"
                        }
                    </div>
                    {props.formType !== "login" ?
                        <div className="name__fields">
                            <div className="input__box">
                                <BsPerson className='login__icon' />
                                <input
                                    value={firstName}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        handleInputChange(e, "firstName")}
                                    className="input__field"
                                    type="text"
                                    placeholder='First name'
                                    required
                                />
                            </div>
                            <div className="input__box">
                                <BsPerson className='login__icon' />
                                <input
                                    value={lastName}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        handleInputChange(e, "lastName")}
                                    className="input__field"
                                    type="text"
                                    placeholder='Last name'
                                    required
                                />
                            </div>

                        </div> : <></>
                    }
                    <div className="input__box">
                        <AiOutlineMail className='login__icon' />
                        <input
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleInputChange(e, "email")}
                            className="input__field"
                            type="text"
                            placeholder='Email'
                            required />
                    </div>
                    <div className="input__box">
                        <FiLock className='login__icon' />
                        <input
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleInputChange(e, "password")}
                            className="input__field"
                            type="password"
                            placeholder="Password"
                            required />
                    </div>
                    <button type="submit" className="login__button">
                        {props.formType === "login" ? "Login" : "Signup"}
                    </button>
                    {props.formType === "login" ?
                        <div className="signup__memo">
                            <div>Don't have an account?</div>
                            <NavLink to="/signup">
                                Signup now
                            </NavLink>
                        </div> :
                        <div className="signup__memo">
                            <div>Already have an account?</div>
                            <NavLink to="/login">
                                Login now
                            </NavLink>
                        </div>
                    }
                    {props.formType === "login" ?
                        <div className="demo__buttons">
                            <button className="demo__button">
                                Demo Admin
                            </button>
                            <button className="demo__button">
                                Demo User
                            </button>
                        </div> :
                        <></>
                    }
                </form>
            </div>
        </div>
    )
}
