import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown, faHome, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const NavBar = ({isOPen , setIsOpen , sidemenu ,  dropMenu1 ,dropMenu2}) => {
    let content
    const navigate = useNavigate()
    const { pathname } = useLocation()


    content = (
        <div ref={sidemenu} className='nav-holder'>

            <div className='nav-tag'>
                <div className="social-link">
                        <Link className='m-1 mt-2'><FontAwesomeIcon icon={faFacebook}   className='text-[20px] hover:text-[#194962]'/></Link>
                        <Link className='m-1 mt-2'><FontAwesomeIcon icon={faInstagram}  className='text-[20px] hover:text-[#194962]'/></Link>
                        <Link className='m-1 mt-2'><FontAwesomeIcon  icon={faTiktok}    className='text-[20px] hover:text-[#194962]' /> </Link>
                </div>
            </div>

            <div className="nav-ele">

                <div className="nav-content">
                    <img src={logo} onClick={()=>navigate('/')} className='' alt="" />
                    <div className='nav-text'>
                        <p>MKN Global Consultant</p>
                        <p>Inspiring Higher Education</p>
                    </div>
                </div>

                <div className='nav-links'>
                    <FontAwesomeIcon onClick={() => setIsOpen(!isOPen)} className='link-icon' icon={isOPen ? faXmark : faBars} />
                    <ul className={isOPen? 'ul-links active' :'ul-links'}>
                        <Link to='/' className='link'><FontAwesomeIcon className='' icon={faHome}/></Link>
                        <Link to='/apply' className={pathname.includes('apply')?'link current':'link'}>Apply</Link>
                        <Link to='/services' className={pathname.includes('services')?'link current':'link'}>Services</Link>
                        <div ref={dropMenu1} className={pathname.includes('studentVisa')?'link drop-holder current':'link drop-holder'}>Student<FontAwesomeIcon className='side-icon' icon={faCaretDown}/>
                            <div className='drop-links student'>
                                <Link to='/studentVisa/uk'  className='drop-link'>Visa in Uk</Link>
                                <Link to='/studentVisa/usa'  className='drop-link'>Visa in Usa</Link>
                                <Link to='/studentVisa/canada'  className='drop-link'>Visa in Canada</Link>
                                <Link to='/studentVisa/europe'  className='drop-link'>Visa in Europe</Link>
                                <Link to='/studentVisa/australia'  className='drop-link'>Visa in Australia</Link>
                            </div>
                        </div>
                        <div ref={dropMenu2} className={pathname.includes('workVisa')?'link drop-holder current':'link drop-holder'}>Work<FontAwesomeIcon className='side-icon' icon={faCaretDown}/>
                            <div className='drop-links work'>
                                <Link to='/workVisa/uk' className='drop-link'>Visa in Uk</Link>
                                <Link to='/workVisa/usa' className='drop-link'>Visa in Usa</Link>
                                <Link to='/workVisa/canada' className='drop-link'>Visa in Canada</Link>
                                <Link to='/workVisa/europe' className='drop-link'>Visa in Europe</Link>
                                <Link to='/workVisa/australia' className='drop-link'>Visa in Australia</Link>
                            </div>
                        </div>
                        <Link to='/office' className={pathname.includes('office')?'link current':'link'}>Offices</Link>
                        <Link to='/about' className={pathname.includes('about')?'link current':'link'}>About</Link>
                    </ul>
                </div>

            </div>
        </div>
    )

    return content
}

export default NavBar