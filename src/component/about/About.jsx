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

                <div className='w-11/12 gap-8 mx-auto flex flex-wrap align-center justify-center'>
                    <div className='py-3 px-2 w-[300px] h-auto bg-[white] rounded bg-gray-100'>
                        <img className='w-[340px] mx-auto h-[340px] mt-8 rounded' src={ceo} alt="img" />
                        <p className='mt-2 font-bold text-lg'>Kamrul Islam</p>
                        <p className='text-sm text-[#476D81]'>CEO</p>
                    </div>
                    <div className='flex flex-wrap justify-center align-center'>
                        <div className='py-3 px-2 w-[300px] h-auto bg-[white] rounded bg-gray-100'>
                            <img className='w-[340px] mx-auto h-[340px] mt-8 rounded' src="/" alt="img" />
                            <p className='mt-2 font-bold text-lg'>Md Imran Hossain</p>
                            <p className='text-sm text-[#476D81]'>Country Manager</p>
                        </div>
                        <div className='py-3 px-2 w-[300px] h-auto bg-[white] rounded bg-gray-100'>
                            <img className='w-[340px] mx-auto h-[340px] mt-8 rounded' src={saiful} alt="img" />
                            <p className='mt-2 font-bold text-lg'>Md Saiful Islam</p>
                            <p className='text-sm text-[#476D81]'>Branch Manager</p>
                        </div>
                        <div className='py-3 px-2 w-[300px] h-auto bg-[white] rounded bg-gray-100'>
                            <img className='w-[340px] mx-auto h-[340px] mt-8 rounded' src={mahfuz} alt="" />
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