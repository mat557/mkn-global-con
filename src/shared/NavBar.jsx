import logo from '../assets/mkn_logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faXTwitter , faInstagram} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'



const NavBar = () => {
    let content

    content = (
        <div className=" bg-[#D08958] fixed top-0 sticky z-50">
            <div className="bg-gray-50 h-8 px-1 fixed top-0 sticky z-50">
                <div className=" flex align-center justify-between max-w-full lg:max-w-[1300px] mx-auto">
                    <div className="flex align-center justify-between">
                        <Link className='decoration-0 pt-1'><FontAwesomeIcon icon={faFacebook}  size="lg"/>                  </Link>
                        <Link className='decoration-0 pt-1'><FontAwesomeIcon className='pl-3'  icon={faXTwitter}  size="lg"/></Link>
                        <Link className='decoration-0 pt-1'><FontAwesomeIcon className='pl-3' icon={faInstagram} size="lg"/> </Link>
                    </div>
                </div>
            </div>
            <div className="max-w-full lg:max-w-[1300px] mx-auto fixed top-8 sticky z-50">
                
                <div className="navbar">
                    <div className="navbar-start ">
                        <Link to="/" className=""><img className='h-12 lg:h-16 lg:w-16' src={logo} alt="" /></Link>
                    </div>

                    <div className="navbar-end">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0">
                                    <li><Link to='/services' className="">SERVICES</Link></li>
                                    <li><Link to='/files'     className="text-gray-950">FILES</Link></li>
                                    <li>
                                        <details className='bg-base-100'>
                                            <summary>STUDENT</summary>
                                            <ul className="p-2">
                                                <li><Link to='/studentVisa/uk' className="text-gray-950">Visa in UK </Link></li>
                                                <li><Link to='/studentVisa/usa' className="text-gray-950">Visa in USA</Link></li>
                                                <li><Link to='/studentVisa/canada' className="text-gray-950">Visa in CANADA</Link></li>
                                                <li><Link to='/studentVisa/australia' className="text-gray-950">Visa in AUSTRALIA</Link></li>
                                                <li><Link to='/studentVisa/europe' className="text-gray-950">Visa in EUROPE</Link></li>
                                            </ul>
                                        </details>
                                        
                                    </li>
                                    <li>
                                        <details className='bg-base-100'>
                                            <summary>WORK</summary>
                                                <ul className="p-2">
                                                    <li><Link to='/studentVisa/uk' className="text-gray-950">Visa in UK </Link></li>
                                                    <li><Link to='/studentVisa/usa' className="text-gray-950">Visa in USA</Link></li>
                                                    <li><Link to='/studentVisa/canada' className="text-gray-950">Visa in CANADA</Link></li>
                                                    <li><Link to='/studentVisa/australia' className="text-gray-950">Visa in AUSTRALIA</Link></li>
                                                    <li><Link to='/studentVisa/europe' className="text-gray-950">Visa in EUROPE</Link></li>
                                                </ul>
                                        </details>
                                    </li>
                                    <li><Link to='/office'  className="text-gray-950">OUR OFFICES</Link></li>
                                    <li><Link to='/about'   className="text-gray-950">ABOUT</Link></li>
                                    <li><Link to='/contact' className="text-gray-950">CONTACT</Link></li>
                                </ul>
                        </div>
                    </div>

                    <div className="navbar-end hidden lg:flex min-w-[700px]">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to='/services' className="text-red-50">SERVICES</Link></li>
                            <li><Link to='/files' className="text-red-50">FILES</Link></li>
                            <li>
                                <details>
                                    <summary className="text-red-50">STUDENT</summary>
                                        <ul className="p-2 w-44 text-justify -right-8">
                                            <li><Link to='/studentVisa/uk' className="text-gray-950">Visa in UK </Link></li>
                                            <li><Link to='/studentVisa/usa' className="text-gray-950">Visa in USA</Link></li>
                                            <li><Link to='/studentVisa/canada' className="text-gray-950">Visa in CANADA</Link></li>
                                            <li><Link to='/studentVisa/australia' className="text-gray-950">Visa in AUSTRALIA</Link></li>
                                            <li><Link to='/studentVisa/europe' className="text-gray-950">Visa in EUROPE</Link></li>
                                        </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary className="text-red-50">WORK</summary>
                                    <ul className="p-2 w-44 text-justify -right-8">
                                    <li><Link to='/universities' className="text-gray-950">Visa in UK </Link></li>
                                            <li><Link to='/universities' className="text-gray-950">Visa in USA</Link></li>
                                            <li><Link to='/universities' className="text-gray-950">Visa in CANADA</Link></li>
                                            <li><Link to='/universities' className="text-gray-950">Visa in AUSTRALIA</Link></li>
                                            <li><Link to='/universities' className="text-gray-950">Visa in EUROPE</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li><Link to='/office'  className="text-red-50">OUR OFFICES</Link></li>
                            <li><Link to='/about'   className="text-red-50">ABOUT</Link></li>
                            <li><Link to='/contact' className="text-red-50">CONTACT</Link></li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )

    return content
}

export default NavBar