import './OurOffice.css'
import Footer from '../../shared/Footer'
import { Link } from 'react-router-dom'


const OurOffices = () => {
    let content
 
    content = (
        <div className='office-details bg-gray-50'>
            <div className='office-banner'>
                <div className='max-w-[1300px] relative mx-auto h-full flex items-end justify-start p-[10px]'>
                    <p className='text-gray-50 text-4xl'>Our Offices</p>
                </div>
            </div>

            <div className='max-w-[1300px] mx-auto mb-24 pt-20'>
                <div className='adress'>
                        <div className='adress-card'>
                            <h1 className='heading'>London office</h1>
                            <p className='h-text'>101 Whitechapel high street</p>
                            <p className='h-text'>(4th floor)post: E1 7RA</p>
                            <p className='h-text'>London, UK</p>
                            <p className='h-text'>Mobile: +4407710615979</p>
                            <p className='h-text'>Land: 02033554453</p>
                            <p className='h-text'>Email: admin@mknglobal.co.uk</p>
                        </div>
                        <div className='adress-card'>
                            <h1 className='heading'>Sylhet office</h1>
                            <p className='h-text'>Millennium Market, 9th floor</p>
                            <p className='h-text'>Zindabazar</p>
                            <p className='h-text'>Sylhet, Bangladesh</p>
                            <p className='h-text'>Mobile: +8801720973011</p>
                            <p className='h-text'>Email: info@mknglobal.co.uk</p>
                        </div>
                        <div className='adress-card'>
                            <h1 className='heading'>Dhaka office</h1>
                            <p className='h-text'>House 430, 1st floor</p>
                            <p className='h-text'>Road no 30</p>
                            <p className='h-text'>Mohakhali DOHS</p>
                            <p className='h-text'>Mohakhali, Dhaka, Bangladesh</p>
                            <p className='h-text'>Mobile: </p>
                            <p className='h-text'>Email: info@mknglobal.co.uk</p>
                        </div>
                </div>
                
            </div>
                <div className='max-w-[1300px] mx-auto pb-[40px]'>
                    <Link to="/about" className='ml-4 px-8 py-3 rounded bg-[#476D81] text-white hover:text-black hover:bg-[#A3B6C0]'>About Us</Link>
                </div>

            <Footer />
        </div>
    )

    return content
}

export default OurOffices
