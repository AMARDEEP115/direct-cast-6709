import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProductAdmin } from '../../REDUX/AdminRedux/action'
import AdminNav from './AdminNav/AdminNav'
import "./AdminPanel.scss"
import AdminSlider from './AdminSlider/AdminSlider'
import Dashboard from './Dashboard/Dashboard'

const AdminPanel = () => {
    const [theme, setTheme] = useState(false)
    const dispatch = useDispatch()
    const [togalDash, setTogalDash] = useState("")

    useEffect(() => {
        dispatch(getProductAdmin("Dashboard")).then(()=>{
            setTogalDash("dash")
        })

    }, [dispatch])


    return (
        <div className={!theme ? "home" : "homeDark"}>
            <AdminNav theme={theme} setTheme={setTheme} setTogalDash={setTogalDash} />

            <div className="homeContainer">
            <AdminSlider theme={theme} setTheme={setTheme} setTogalDash={setTogalDash} />


                <Dashboard theme={theme} togalDash={togalDash} setTogalDash={setTogalDash} />

            </div>
        </div>
    )
}

export default AdminPanel