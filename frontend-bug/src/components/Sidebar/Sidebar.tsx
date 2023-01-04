import React from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md"
import { AiOutlineProject } from "react-icons/ai"
import { IoTicketOutline } from "react-icons/io5"
export const Sidebar = () => {
    return (
        <nav className="sidebar__wrapper">
            <header className="sidebar__header">
                <div className="ladybug__container">
                    <img className="ladybug__image" src={require("../../images/bee.png")} />
                </div>
                <div className="sidebar__welcome">
                    <span>Welcome,</span>
                    <span>User!</span>
                </div>
            </header>
            <div className="sidebar__links">
                <ul className="sidebar__list">
                    <NavLink className="sidebar__link" to="/dashboard">
                        <MdOutlineDashboard />
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink className="sidebar__link" to="/dashboard">
                        <AiOutlineProject />
                        <span>Projects</span>
                    </NavLink>
                    <NavLink className="sidebar__link" to="/dashboard">
                        <IoTicketOutline />
                        <span>Tickets</span>
                    </NavLink>
                </ul>
            </div>
            <button className="sidebar__login">
                Login
            </button>
        </nav>
    )
}
