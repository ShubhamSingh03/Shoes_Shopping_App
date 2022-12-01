import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="social">
          <a href="https://github.com/ShubhamSingh03/Shoes_Shopping_App">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shubham-singh-b122b7171/">
            <FaLinkedin />
          </a>
          <a href="https://youtu.be/dUnItbkVLQs">
            <FaYoutube />
          </a>
        </div>
        <h1>
          Portfolio : <a href="https://shubhambhoj.in">SHUBHAM SINGH</a>
        </h1>
      </div>
    </>
  );
};

export default Footer;
