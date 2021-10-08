import React from 'react'
import { Link, Router } from 'react-router-dom'
import "./header.scss"
import { useAuth } from '../../contexts/AuthContext'

const Header = () => {
    const { currentUser } = useAuth()
    return (
        <div className="header">
            <div className="left">
            <Link to="/">
            <h1>Quizzzenge</h1>
            </Link>
            </div>
            <div className="right">
            <Link to="/about">
            <li>About</li>
            </Link>
            <Link to="/all">
            <li>Browse all Quizes</li>
            </Link>
            {(!currentUser) ? (<>
            <Link to="/signup">
            <li>Sign up</li>
            </Link>
            <Link to="/login">
            <li>Login</li>
            </Link></>): (<>
            <Link to="/profile">
            <li>Profile</li>
            </Link></>)}
            <Link to="/newquiz">
            <li>Create Quiz</li>
            </Link>
            </div>
        </div>
    )
}



export default Header
