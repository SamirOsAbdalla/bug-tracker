import React from 'react'
import "./LoginPage.css"
import { BsPerson } from "react-icons/bs"
import { FiLock } from "react-icons/fi"
import { AiOutlineMail } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
export const LoginPage = () => {
    return (
        <div className='login__wrapper'>
            <div className='login__box'>
                <form className="login__form">
                    <div className="login__header__icon__container">
                        <BsPerson className="login__header__icon" />
                    </div>
                    <div className="login__header__text">Login to your account</div>
                    <div className="input__box">
                        <AiOutlineMail className='login__icon' />
                        <input className="input__field" type="text" placeholder='Email' required />
                    </div>
                    <div className="input__box">
                        <FiLock className='login__icon' />
                        <input className="input__field" type="password" placeholder="Password" required />
                    </div>
                    <button className="login__button">
                        Login
                    </button>
                    <div className="signup__memo">
                        <div>Don't have an account?</div>
                        <NavLink to="/signup">
                            Signup now
                        </NavLink>
                    </div>
                    <div className="demo__buttons">
                        <button className="demo__button">
                            Demo Admin
                        </button>
                        <button className="demo__button">
                            Demo User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
