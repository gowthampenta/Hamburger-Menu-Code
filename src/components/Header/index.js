import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import './index.css'

const Header = () => (
  <div className="navbar-card">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          className="btn"
          data-testid="hamburgerIconButton"
          aria-label="Menu"
        >
          <GiHamburgerMenu className="hamburger-icon" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <div className="close-card">
            <button
              type="button"
              onClick={close}
              className="pop-close-btn"
              data-testid="closeButton"
              aria-label="Close"
            >
              <IoMdClose className="pop-icon" />
            </button>
          </div>
          <ul className="abt-hm-pop-card">
            <li>
              <Link to="/" className="nav-link">
                <AiFillHome className="pop-icon" />
                <span className="pop-text">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                <BsInfoCircleFill className="pop-icon" />
                <span className="pop-text">About</span>
              </Link>
            </li>
          </ul>
        </>
      )}
    </Popup>
  </div>
)

export default Header
