import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/Sign Up/SignUp'

const Router = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<Login />}>
                </Route>
                <Route
                    path="/signup"
                    element={<SignUp />}>
                </Route>
            </Routes>
        </div>
    )
}

export default Router