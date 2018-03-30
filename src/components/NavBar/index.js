/**
 * Created by vaibhav on 8/3/18
 */
import React, {Component} from 'react'
import Link from 'gatsby-link'
import './style.css';
import logo from '../../img/logo.svg'

class Navbar extends Component {
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function () {
            // Get all "navbar-burger" elements
            let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {
                // Add a click event on each of them
                $navbarBurgers.forEach(function ($el) {
                    $el.addEventListener('click', function () {
                        // Get the target from the "data-target" attribute
                        let target = $el.dataset.target;
                        let $target = document.getElementById(target);
                        // Toggle the className on both the "navbar-burger" and the "navbar-menu"
                        $el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');

                    });
                });
            }
        });
    }

    render() {
        return (
            <nav className="navbar is-fixed-top" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <figure className="image">
                            <img src={logo} alt="MakeSamai" style={{width: '109px', height: '24px'}}/>
                        </figure>
                    </Link>
                    <button className="button navbar-burger" data-target="navMenu">
                        <span/>
                        <span/>
                        <span/>
                    </button>
                </div>
                <div className="navbar-menu" id="navMenu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/pricing">
                            Pricing
                        </Link>
                        <Link className="navbar-item" to="/about">
                            About
                        </Link>
                        <Link className="navbar-item" to="/blog">
                            Blog
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a
                                        className="button is-info is-outlined"
                                        href="http://app.makesamai.com/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Get Started
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;