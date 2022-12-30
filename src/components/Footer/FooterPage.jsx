import React from 'react';
import { Link } from 'react-router-dom';
import "./FooterPage.css";
import {  BsLinkedin,BsFacebook} from "react-icons/bs";

import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../../images/logo.svg"

const FooterPage = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={logo} alt="logo-img" />
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint illum
            quibusdam saepe autem.
          </p>
          <div className="footer__socials">
            <a href="https://linkedin.com" target="__blank" rel="noreferrer noopener"><BsLinkedin/></a>
            <a href="https://facebook.com" target="__blank" rel="noreferrer noopener"><BsFacebook/></a>
            <a href="https://instagram.com" target="__blank" rel="noreferrer noopener"><AiFillInstagram/></a>
            <a href="https://twitter.com" target="__blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
          </div>
        </article>
        <article>
            <h4>Permalinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Cart</Link>
            <Link to="/account">Account</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </article>
        <article>
            <h4>Insights</h4>
            <Link to="/s">Blog</Link>
            <Link to="/s">Case Studies</Link>
            <Link to="/s">Events</Link>
            <Link to="/s">Communities</Link>
            <Link to="/s">FAQ's</Link>
        </article>
        <article>
            <h4>Get In Touch</h4>
            <Link to="/s">Support</Link>
            <Link to="/contact">Contact US</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>  &copy; 2022 All rights reserved by <i>Launder Land</i></small>
      </div>
    </footer>
  )
}

export default FooterPage