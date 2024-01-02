import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock ,  faHandHoldingHeart , faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import './Services.css'

const Services = () => {
    let content

    content = (
        <div className='my-24'>
            <div className='max-w-full lg:max-w-[1300px] mx-auto flex flex-wrap align-center justify-center gap-4 px-1'>

                
                <div className="mt-8  lg:mt-0 w-96 h-[200px] border-[#DCDDDE] border-1 bg-[#eceef9] shadow-xl relative group">
                    <div className='w-20 h-20 rounded-full flex align-center justify-center border-4 border-[white] bg-[#D08958] absolute -mt-8 mLeft  transition-transform transform-gpu  group-hover:border-[#D08958] group-hover:bg-[white]'>
                        <FontAwesomeIcon className='absolute top-3 text-[white] transition-transform transform-gpu group-hover:border-red-500 group-hover:text-[#D08958] group-hover:bg-red-50' icon={faHandHoldingHeart} size="3x"/>
                    </div>
                    <div className="card-body items-center text-center mt-8">
                        <h2 className="card-title text-[#a37f41]">Trustworthy!</h2>
                        <p>Your trusted partner for visa solutions. Choose simplicity, choose MKN Global Consultancy.</p>
            
                    </div>
                </div>


                <div className="mt-8  lg:mt-0 w-96 h-[200px] border-[#DCDDDE] border-1 bg-[#eceef9] shadow-xl relative group">
                    <div className='w-20 h-20 rounded-full flex align-center justify-center border-4 border-[white] bg-[#D08958] absolute -mt-8 mLeft  transition-transform transform-gpu  group-hover:border-[#D08958] group-hover:bg-[white]'>
                        <FontAwesomeIcon className='absolute top-3 text-[white] transition-transform transform-gpu group-hover:border-red-500 group-hover:text-[#D08958] group-hover:bg-red-50' icon={faClock} size="3x"/>
                    </div>
                    <div className="card-body items-center text-center mt-8">
                        <h2 className="card-title  text-[#a37f41]">24/7</h2>
                        <p>Our commitment to service is as constant as the ticking clock. Available for you 24/7.</p>
            
                    </div>
                </div>

                <div className="mt-8  lg:mt-0 w-96 h-[200px] border-[#DCDDDE] border-1 bg-[#eceef9] shadow-xl relative group">
                    <div className='w-20 h-20 rounded-full flex align-center justify-center border-4 border-[white] bg-[#D08958] absolute -mt-8 mLeft  transition-transform transform-gpu group-hover:border-[#D08958] group-hover:bg-[white]'>
                        <FontAwesomeIcon className='absolute top-3 text-[white] transition-transform transform-gpu group-hover:border-red-500 group-hover:text-[#D08958] group-hover:bg-red-50' icon={faStarOfLife} size="3x"/>
                    </div>
                    <div className="card-body items-center text-center mt-8">
                        <h2 className="card-title  text-[#a37f41]">Experience</h2>
                        <p>Years of expertise to guide you through a seamless visa application process.</p>
                        
                    </div>
                </div>


                {/* <div className="mt-8 w-96 h-[200px] border-[#DCDDDE] border-1 bg-[#eceef9] shadow-xl relative group">
                    <div className='w-20 h-20 rounded-full flex align-center justify-center border-4 border-[white] bg-[#D08958] absolute -mt-8 mLeft  transition-transform transform-gpu group-hover:border-[#D08958] group-hover:bg-[white]'>
                        <FontAwesomeIcon className='absolute top-3 text-[white]   transition-transform transform-gpu group-hover:border-red-500 group-hover:text-[#D08958] group-hover:bg-red-50' icon={faInstagram} size="3x"/>
                    </div>
                    <div className="card-body items-center text-center mt-8">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>

                <div className="mt-8 w-96 h-[200px] border-[#DCDDDE] border-1 bg-[#eceef9] shadow-xl relative group">
                    <div className='w-20 h-20 rounded-full flex align-center justify-center border-4 border-[white] bg-[#D08958] absolute -mt-8 mLeft  transition-transform transform-gpu group-hover:border-[#D08958] group-hover:bg-[white]'>
                        <FontAwesomeIcon className='absolute top-3 text-[white]   transition-transform transform-gpu group-hover:border-red-500 group-hover:text-[#D08958] group-hover:bg-red-50' icon={faInstagram} size="3x"/>
                    </div>
                    <div className="card-body items-center text-center mt-8">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>

                <div className="mt-8 w-96 h-[200px] border-[#DCDDDE] border-1 bg-[#eceef9] shadow-xl relative group">
                    <div className='w-20 h-20 rounded-full flex align-center justify-center border-4 border-[white] bg-[#D08958] absolute -mt-8 mLeft  transition-transform transform-gpu group-hover:border-[#D08958] group-hover:bg-[white]'>
                        <FontAwesomeIcon className='absolute top-3 text-[white]   transition-transform transform-gpu group-hover:border-red-500 group-hover:text-[#D08958] group-hover:bg-red-50' icon={faInstagram} size="3x"/>
                    </div>
                    <div className="card-body items-center text-center mt-8">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div> */}

            </div>
        </div>
    )
    return content
}

export default Services