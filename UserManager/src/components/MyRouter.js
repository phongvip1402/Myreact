import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './Index'
import UserCreate from './UserCreate'
import UserEdit from './UserEdit'

const MyRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/user' element={<Index />}></Route>
                <Route path='/user/add' element={<UserCreate />}></Route>
                <Route path='/user/edit' element={<UserEdit />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRouter