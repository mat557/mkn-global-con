import React from 'react'
import { Link } from 'react-router-dom'

const CallForAction = () => {
    let content

    content = (
        <div className='bg-gray-100 h-auto lg:h-[40vh] w-full'>
            <div className='max-w-[1300px] mx-auto py-4'>
                
                <h1 className='text-4xl text-[#D08958] ml-2'>Get a Free Consultation</h1>

                <div className="flex flex-col lg:flex-row align-center justify-center w-full mt-8 p-4">
                    <div className="grid h-20 flex-grow card  rounded-box place-items-center">
                        <div className="flex flex-col w-full">
                            <div className="grid h-20 card  rounded-box place-items-center">
                                <p className='text-[#D08958]'>London office</p>
                                <p>whatsapp: +4444444</p>
                                <p>email: lond@info.com</p>
                            </div> 
                            <div className="divider"></div> 
                            <div className="grid h-20 card  rounded-box place-items-center">
                                <p className='text-[#D08958]'>Bangladesh office</p>
                                <p>whatsapp: +4444444</p>
                                <p>email: lond@info.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="ml-40 md:ml-[50%] lg:ml-4 mt-32 lg:mt-20"></div>

                    <div className="border-2 border-gray-900 grid h-28 py-4 flex-grow card bg-base-300 rounded-box place-items-center top-4 lg:top-12">
                        <p>For more</p>
                        <div className='h-1 w-32 rounded-lg bg-gray-900'></div>
                        <p>Get appointment ,contact us</p>
                        <Link to="/contact" className='btn btn-sm bg-[#D08958] text-[white]'>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )

    return content
}

export default CallForAction