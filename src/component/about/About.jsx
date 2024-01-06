import Footer from '../../shared/Footer'
import './About.css'
import about from '../../assets/about.jpeg'
import imran from '../../assets/countr-manager.jpg'
import kamrul from '../../assets/1704564233723.jpg'
import saiful from '../../assets/saifulislam.jpg'
import mahfuz from '../../assets/22730.jpg'
import { Link } from 'react-router-dom'

const About = () => {
    let content
    
    content = (
        <div className='w-full bg-gray-100'>
            <div className='max-w-[1300px] mx-auto pb-12'>

            <div class="responsive-container-block bigContainer">
                <div class="responsive-container-block Container bottomContainer">
                    <div class="ultimateImg">
                        <img class="mainImg" src={about} />
                        <div class="purpleBox">
                            <p class="purpleText">
                            With three years of proven expertise, we're your trusted partner for seamless visa processing
                            </p>
                        </div>
                    </div>
                    <div class="allText bottomText">
                        <p class="text-blk headingText">
                            About Us
                        </p>
                        <p class="text-blk subHeadingText">
                            Welcome to  Your Trusted Partner in Visa Solutions!
                        </p>
                        <p class="text-blk des">
                            At MKN Global Consultancy, we stand out as your 
                            go-to destination for seamless visa solutions. With a dedicated team of experts and a customer-centric approach, 
                            we take pride in making your visa application journey a breeze
                        </p>
                        <Link to="/services" class="explore">
                            View Services
                        </Link>
                    </div>
                </div>
            </div>

                <div className='flex justify-center align-center my-6 text-4xl text-[#D08958]'>
                    <p>Our Team</p>
                </div>

                <div className='w-11/12 gap-8 mx-auto flex flex-wrap align-center justify-center'>
                    <div className='py-3 px-2 w-[300px] h-auto bg-[white] rounded bg-gray-100'>
                        <p className='mt-2 font-bold text-lg'>Kamrul Islam</p>
                        <p className='text-sm text-[#D08958]'>CEO</p>
                        <img className='w-[280px] mx-auto h-[340px] mt-8 rounded' src={kamrul} alt="" />
                    </div>
                    <div className='flex flex-wrap justify-center align-center'>
                        <div className='py-3 px-2 w-[300px] h-auto bg-[white] rounded bg-gray-100'>
                            <p className='mt-2 font-bold text-lg'>Md Imran Hossain</p>
                            <p className='text-sm text-[#D08958]'>Country Manager</p>
                            <img className='w-[280px] mx-auto h-[340px] mt-8 rounded' src={imran} alt="" />
                        </div>
                        <div className='py-3 px-2 w-[300px] h-auto bg-[white] rounded bg-gray-100'>
                            <p className='mt-2 font-bold text-lg'>Md Saiful Islam</p>
                            <p className='text-sm text-[#D08958]'>Branch Manager</p>
                            <img className='w-[280px] mx-auto h-[340px] mt-8 rounded' src={saiful} alt="yet not added" />
                        </div>
                        <div className='py-3 px-2 w-[300px] h-auto bg-[white] rounded bg-gray-100'>
                            <p className='mt-2 font-bold text-lg'>Md Mahfuz Anam</p>
                            <p className='text-sm text-[#D08958]'>IT Support</p>
                            <img className='w-[280px] mx-auto h-[340px] mt-8 rounded' src={mahfuz} alt="" />
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
    return content
}

export default About