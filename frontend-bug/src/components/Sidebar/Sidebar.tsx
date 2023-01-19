import React from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx"
import { AiOutlineProject } from "react-icons/ai"
import { IoTicketOutline } from "react-icons/io5"
export const Sidebar = () => {

    const handleSidebarChange = () => {
        const hamburger = document.querySelector(".sidebar__hamburger") as HTMLElement
        const wrapper = document.querySelector(".sidebar__wrapper") as HTMLElement
        const welcome = document.querySelector(".sidebar__welcome") as HTMLElement
        const icon = document.querySelector(".sidebar__icon") as HTMLElement
        const text = document.querySelectorAll<HTMLElement>(".sidebar__text") as NodeList
        const login = document.querySelector(".sidebar__login") as HTMLElement
        hamburger.classList.toggle("active")
        wrapper.classList.toggle("wrapper__toggle")
        welcome.classList.toggle("welcome__toggle")
        icon.classList.toggle("icon__toggle")
        text.forEach((node) => {
            const transformedNode = node as HTMLElement
            transformedNode.classList.toggle("text__toggle")
        })
        login.classList.toggle("login__toggle")
    }
    return (
        <nav className="sidebar__wrapper wrapper__toggle special__toggle">
            <div onClick={handleSidebarChange} className="sidebar__hamburger">
                <span className="sidebar__bar"></span>
                <span className="sidebar__bar"></span>
                <span className="sidebar__bar"></span>
            </div>
            <header className="sidebar__header">
                <div className="ladybug__container">
                    <img className="ladybug__image" src={require("../../images/bee.png")} />
                </div>
                <div className="sidebar__welcome welcome__toggle toggle">
                    <span>Welcome,</span>
                    <span>User!</span>
                </div>
            </header>
            <div className="sidebar__links">
                <ul className="sidebar__list">
                    <NavLink className="sidebar__link" to="/dashboard">
                        <RxDashboard className="sidebar__icon icon__toggle toggle" />
                        <span className="sidebar__text text__toggle toggle">Dashboard</span>
                    </NavLink>
                    <NavLink className="sidebar__link" to="/dashboard">
                        <AiOutlineProject className="sidebar__icon icon__toggle toggle" />
                        <span className="sidebar__text text__toggle toggle">Projects</span>
                    </NavLink>
                    <NavLink className="sidebar__link" to="/dashboard">
                        <IoTicketOutline className="sidebar__icon icon__toggle toggle" />
                        <span className="sidebar__text text__toggle toggle">Tickets</span>
                    </NavLink>
                </ul>
            </div>
            <button className="sidebar__login login__toggle toggle">
                Login
            </button>
        </nav>
    )
}
