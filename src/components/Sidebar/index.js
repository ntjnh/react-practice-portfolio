import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoN from '../../assets/images/logo-n.png'
import LogoSubtitle from '../../assets/images/logo_sub-n.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faCodepen,
  faFreeCodeCamp,
} from '@fortawesome/free-brands-svg-icons'

const linkColour = '#ffffff'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoN} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="Nate" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color={linkColour}></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color={linkColour}></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color={linkColour}></FontAwesomeIcon>
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
          <FontAwesomeIcon icon={faLinkedin} color={linkColour} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/ntjnh">
          <FontAwesomeIcon icon={faGithub} color={linkColour} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.freecodecamp.org/ntjnh"
        >
          <FontAwesomeIcon icon={faFreeCodeCamp} color={linkColour} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://codepen.io/ntjnh">
          <FontAwesomeIcon icon={faCodepen} color={linkColour} />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
