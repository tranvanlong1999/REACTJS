import React from 'react';
import './style.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function Header(props) {
    return (
        <div className="container">
            <div className="header">
                <a href="https://themified.com/friend-finder/index-register.html" >
                    <img src="https://themified.com/friend-finder/images/logo.png" alt="logo">
                    </img>
                </a>
                <form className="formsearch">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Search friends, photos, videos">

                    </input>
                </form>
                <ul className="menu">
                    <li>
                        <a href="#">
                            Home
                            <span>
                                <img src="https://themified.com/friend-finder/images/down-arrow.png"></img>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Newsfeed
                            <span>
                                <img src="https://themified.com/friend-finder/images/down-arrow.png"></img>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Timeline
                            <span>
                                <img src="https://themified.com/friend-finder/images/down-arrow.png"></img>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            All Pages
                            <span>
                                <img src="https://themified.com/friend-finder/images/down-arrow.png"></img>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Contact
                            <span>
                                <img src="https://themified.com/friend-finder/images/down-arrow.png"></img>
                            </span>
                        </a>
                    </li>
                </ul>

            </div >
        </div>
    );
}

export default Header;