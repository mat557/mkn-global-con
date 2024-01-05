import React from 'react'
import { Link } from 'react-router-dom'

const CallForAction = () => {
    let content

    content = (
        <div className='bg-gray-100 h-auto  w-full'>
            <div className='max-w-[1300px] mx-auto py-4'>
                
                <h1 className='text-4xl text-[#D08958] ml-2'>Get a Free Consultation</h1>

                <div className='adress mt-20 lg:mt-4'>
                        <div className='adress-card'>
                            <h1 className='heading'>London office</h1>
                            <p className='h-text'>101 Whitechapel high street</p>
                            <p className='h-text'>(4th floor)post: E1 7RA</p>
                            <p className='h-text'>London, UK</p>
                            <p className='h-text'>Mobile: +4407710615979</p>
                            <p className='h-text'>Land: 02033554453</p>
                        </div>
                        <div className='adress-card'>
                            <h1 className='heading'>Sylhet office</h1>
                            <p className='h-text'>Millennium Market, 9th floor</p>
                            <p className='h-text'>Zindabazar</p>
                            <p className='h-text'>Sylhet</p>
                            <p className='h-text'>Bangladesh</p>
                        </div>
                        <div className='adress-card'>
                            <h1 className='heading'>Dhaka office</h1>
                            <p className='h-text'>House 430, 1st floor</p>
                            <p className='h-text'>Road no 30</p>
                            <p className='h-text'>Mohakhali DOHS</p>
                            <p className='h-text'>Mohakhali, Dhaka, Bangladesh</p>
                        </div>
                </div>
                <p className='ml-3'>Or you can contact us directly through email.</p>
                <Link to="/contact" className='btn bg-[#D08958] text-[white] ml-3'>Contact</Link>
            </div>
        </div>
    )

    return content
}

export default CallForAction