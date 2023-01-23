import React from 'react'
import "./LoginPage.css"
import { BsPerson } from "react-icons/bs"
import { FiLock } from "react-icons/fi"
import { AiOutlineMail } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { registerUser, loginUser } from '../../services/userAuthentication'
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { UserInfoType } from '../../interfaces/interfaces'
import { setLoginStatus } from '../../slices/loginStatusSlice'
import { useAppDispatch } from '../../app/hooks'
import { setCurrentUser } from '../../slices/userSlice'
import { useNavigate } from 'react-router-dom'

interface PropType {
    formType: string
}

interface UserLoginType {
    email: string,
    name?: string,
    password: string
}

interface errorType {
    error: boolean,
    message: string
}




export const LoginPage = (props: PropType) => {
    const [email, setEmail] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const userInfo: UserLoginType = { email: email, password: password }

        let response: errorType | UserInfoType;

        setLoading(true)
        if (props.formType === "signup") {
            userInfo.name = firstName + " " + lastName
            response = await registerUser(userInfo)
        } else {
            response = await loginUser(userInfo)
        }

        setLoading(false)
        if ("error" in response) {
            setError(response.message)
        } else {
            setError("")
            dispatch(setLoginStatus({ isUserLoggedIn: true }))
            dispatch(setCurrentUser(response))
            navigate("/home")
        }
    }

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

    const handleDemoClick = async (e: React.MouseEvent<HTMLButtonElement>, demoType: string) => {
        let response: errorType | UserInfoType;
        setLoading(true)
        if (demoType === "admin") {
            response = await loginUser({ email: "testadmin@gmail.com", password: "password" })
        } else {
            response = await loginUser({ email: "testuser@gmail.com", password: "password" })
        }
        setLoading(false)
        if ("error" in response) {
            setError(response.message)
        } else {
            setError("")
            dispatch(setLoginStatus({ isUserLoggedIn: true }))
            dispatch(setCurrentUser(response))
            navigate("/home")
        }
    }


    return (
        <div className='login__wrapper'>
            <div className='login__box'>
                <form onSubmit={handleFormSubmit} className="login__form">
                    {error !== "" ?
                        <ErrorMessage message={error} /> :
                        <></>
                    }
                    <div className="login__header__icon__container">
                        <BsPerson className="login__header__icon" />
                    </div>
                    <div className="login__header__text">
                        {props.formType === "login" ?
                            "Login to your account" :
                            "Signup for an account"
                        }
                    </div>

                    {loading === true ? <LoadingSpinner /> : <></>}
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
                            aria-label="email"
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
                    <button aria-label="loginbutton" type="submit" className="login__button">
                        {props.formType === "login" ? "Login" : "Signup"}
                    </button>
                    {props.formType === "login" ?
                        <div className="signup__memo">
                            <div>Don't have an account?</div>
                            <NavLink onClick={() => setError("")} to="/signup">
                                Signup now
                            </NavLink>
                        </div> :
                        <div className="signup__memo">
                            <div>Already have an account?</div>
                            <NavLink onClick={() => setError("")} to="/login">
                                Login now
                            </NavLink>
                        </div>
                    }
                    {props.formType === "login" ?
                        <div className="demo__buttons">
                            <button type="button" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleDemoClick(e, "admin")}
                                className="demo__button">
                                Demo Admin
                            </button>
                            <button type="button" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleDemoClick(e, "user")}
                                className="demo__button">
                                Demo User
                            </button>
                        </div> :
                        <></>
                    }
                </form>
            </div >
        </div >
    )
}
