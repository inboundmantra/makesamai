import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({children}) => (
    <div>
        <Helmet title="MakeSamai, Get Superpowered Marketing"/>
        <Navbar/>
        <div>{children()}</div>
        <Footer/>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper
