import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../img/favicon.ico'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import './all.sass'
import config from '../../data/config';

const TemplateWrapper = ({children}) => (
    <div>
        <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="shortcut icon" href={favicon}/>
        </Helmet>
        <Navbar/>
        <div>{children()}</div>
        <Footer/>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper
