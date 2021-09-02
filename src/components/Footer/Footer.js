import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css"

function Footer(props) {
    return (
        <>
            <div className="footer">
                <div className="logoicon">
                    <a href="#">
                        <img src="https://themified.com/friend-finder/images/logo-black.png"></img>
                    </a>
                    <ul className="listcontact" >
                        <li>
                            <a href="#">
                                <i class="bi bi-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="bi bi-alarm"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="bi bi-alarm"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="bi bi-alarm"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="bi bi-search"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="linkcommon">
                    <span>For individuals</span>
                    <ul>
                        <li>
                            <a href="#">Signup</a>
                        </li>
                        <li>
                            <a href="#">login</a>

                        </li>
                        <li>
                            <a href="#">Explore</a>

                        </li>
                        <li>
                            <a href="#">Features</a>

                        </li>
                        <li>
                            <a href="#">Language settings</a>

                        </li>
                    </ul>
                </div>
                <div className="linkcommon">
                    <span>For individuals</span>
                    <ul>
                        <li>
                            <a href="#">Signup</a>

                        </li>
                        <li>
                            <a href="#">login</a>

                        </li>
                        <li>
                            <a href="#">Explore</a>

                        </li>
                        <li>
                            <a href="#">Features</a>

                        </li>
                        <li>
                            <a href="#">Language settings</a>

                        </li>
                    </ul>
                </div>
                <div className="linkcommon">
                    <span>For individuals</span>
                    <ul>
                        <li>
                            <a href="#">Signup</a>

                        </li>
                        <li>
                            <a href="#">login</a>

                        </li>
                        <li>
                            <a href="#">Explore</a>

                        </li>
                        <li>
                            <a href="#">Features</a>

                        </li>
                        <li>
                            <a href="#">Language settings</a>

                        </li>
                    </ul>
                </div>
                <div className="linkcontackphone">
                    <span>Contact Us</span>
                    <ul>
                        <li>
                            <i className="bi bi-search"></i>
                            +1 (234) 222 0754
                        </li>
                        <li>
                            <i className="bi bi-search"></i>
                            +1 (234) 222 0754
                        </li>
                        <li>
                            <i className="bi bi-search"></i>
                            +1 (234) 222 0754
                        </li>
                    </ul>
                </div>


            </div>
            <div className="copyright">
                <p>
                    copyright @thunder-team 2016. All rights reserved
                </p>
            </div>
        </>
    );
}

export default Footer;