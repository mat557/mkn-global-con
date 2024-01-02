import Footer from '../../shared/Footer'
import './About.css'
import about from '../../assets/about.jpeg'

const About = () => {
    let content
    
    content = (
        <div className='w-full bg-gray-100'>
            <div className='max-w-[1300px] mx-auto pb-96'>

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
                        <a class="explore">
                            View Services
                        </a>
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