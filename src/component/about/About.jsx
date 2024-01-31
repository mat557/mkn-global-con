import Footer from '../../shared/Footer'
import './About.css'
import about from '../../assets/about.jpeg'
import imran from '../../assets/countr-manager.jpg'
import ceo from '../../assets/ceo.jpg'
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

                <div className='flex justify-center align-center mt-6 text-4xl text-[#D08958] mt-[10vh]'>
                    <p className='text-[#476D81]'>Meet Our Team</p>
                </div>

                <div className='mt-[40px] w-full lg:w-[1200px] gap-8 mx-auto flex flex-wrap align-center justify-center'>
                    <div className='p-3 w-[95%] lg:w-[350px] h-auto bg-[white] border-8 border-[#D1DBE0] rounded bg-gray-100 flex flex-col items-start justify-end'>
                        <img className='w-[100%] mx-auto  rounded' src={ceo} alt="img" />
                        <p className='mt-2 font-bold text-lg'>Kamrul Islam</p>
                        <p className='text-sm text-[#476D81]'>CEO</p>
                        <p className='text-sm text-[#476D81]'>MKN Global Consultant</p>
                    </div>
                    <div className='flex flex-wrap justify-center align-center gap-4'>
                        <div className='p-3 w-[95%] lg:w-[350px] h-auto bg-[white] border-8 border-[#D1DBE0] rounded bg-gray-100 flex flex-col items-start justify-end'>
                            <img className='w-[100%] mx-auto  rounded' src={imran} alt="img" />
                            <p className='mt-2 font-bold text-lg'>Md Imran Hossain</p>
                            <p className='text-sm text-[#476D81]'>Country Manager</p>
                            <p className='text-sm text-[#476D81]'>Bangladesh</p>
                        </div>
                        <div className='p-3 w-[95%] lg:w-[350px] h-auto bg-[white] border-8 border-[#D1DBE0] rounded bg-gray-100 flex flex-col items-start justify-end'>
                            <img className='w-[100%] mx-auto  rounded' src={saiful} alt="img" />
                            <p className='mt-2 font-bold text-lg'>Saiful Islam Chowdhury</p>
                            <p className='text-sm text-[#476D81]'>Branch Manager</p>
                            <p className='text-sm text-[#476D81]'>Sylhet</p>
                        </div>
                        <div className='p-3 w-[95%] lg:w-[350px] h-auto bg-[white] border-8 border-[#D1DBE0] rounded bg-gray-100 flex flex-col items-start justify-end'>
                            <img className='w-[100%] mx-auto  rounded' src={mahfuz} alt="" />
                            <p className='mt-2 font-bold text-lg'>Md Mahfuz Anam</p>
                            <p className='text-sm text-[#476D81]'>IT Support</p>
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