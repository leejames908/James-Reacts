import React from 'react'
import PropTypes from 'prop-types'
import TopBar from '../component/TopBar'
import { Outlet } from 'react-router'
import './Root.css'
import { Link } from 'react-router-dom'
import IlloGallery from '../component/IlloGallery'

function Root(props) {
  return (
    <div>
        <div className = "j-bg-img"></div>
        <TopBar/>
        <IlloGallery/>
        <Outlet/>
    </div>
    
  )
}

Root.propTypes = {}

export default Root
