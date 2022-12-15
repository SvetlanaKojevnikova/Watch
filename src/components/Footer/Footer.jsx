import { CgFacebook } from "react-icons/cg";
import { ImTwitter } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__nav">
          <div className="footer__left">
            <h4 className="footer__title">Follow Us.</h4>
            <p className="footer__info">
              We are always looking for new <br /> projects and collaborations.<br/> Feel
              free to contact us.
            </p>
            <ul className="footer__list">
              <li className="footer-icon">
                <CgFacebook />
              </li>
              <li className="footer-icon">
                <ImTwitter />
              </li>
              <li className="footer-icon">
                <RiInstagramFill />
              </li>
            </ul>
          </div>
          <ul className="footer__list2">
            <li className="footer__title">Contact Us.</li>
            <li className="footer__info">
              One Apple Park Way <br /> Cupertino, CA 95014
            </li>
            <li className="footer__info">(408) 996-1010</li>
            <li className="footer__item">support@apple.com</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
