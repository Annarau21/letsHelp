import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Footer (props) {
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row row-content">             
                    <div className="col-4 col-sm-4 offset-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-5 text-center">
                        <h5>Social</h5>
                        <a href="http://instagram.com/" className="btn btn-social-icon btn-instagram"><i class="fa fa-instagram"></i></a>
                        <a href="http://facebook.com/" className="btn btn-social-icon btn-facebook"><i class="fa fa-facebook"></i></a>
                        <a href="http://twitter.com/" className="btn btn-social-icon btn-twitter"><i class="fa fa-twitter"></i></a>
                        <a href="http://youtube.com/" className="btn btn-social-icon btn-google" ><i className="fa fa-youtube" /></a> 
                    </div>             
               </div>
            </div>
        </footer>
    ); 
        
}

export default Footer;