import './LatestNews.css'
import img1 from '../../../assets/home-physics.webp'
import img2 from '../../../assets/home-class.jpeg'
import img3 from '../../../assets/home-working.webp'
import img4 from '../../../assets/home-travel.jpeg'


const LatestNews = () => {
    let content 

    content = (
        <div className="h-auto max-w-[1300px] mx-auto  pb-8">
            <div className='w-full h-28 mb-4'>
                <p className='pt-4 text-4xl text-center text-[#476D81] pl-4'>Stay updated with us!</p>
                <p className='text-center'>Check what we are offering now</p>
            </div>

            <div  className="div-des">
            
                <div  className="div-part">
                    <img src={img1} alt="pic" />
                    <div  className="overlay"></div>
                    <div  className="description">
                        <h4>Higher study in UK</h4>
                        <p>
                            Admissions for UK universities are now open for the March intake. Hurry, time is running out!
                        </p>
                    </div>
                    <div className='text-[black] flex items-center justify-center text-[20px]'>details</div>
                </div>

                <div  className="div-part">
                    <img src={img2} alt="pic" />
                    <div  className="overlay"></div>
                    <div  className="description">
                        <h4>Enhance English proficiency</h4>
                        <p>
                            Join our new batch starting within a week to enhance your English skills.
                        </p>
                    </div>
                    <div className='text-[black] flex items-center justify-center text-[20px]'>details</div>
                </div>

                <div  className="div-part">
                    <img src={img3} alt="pic" />
                    <div  className="overlay"></div>
                    <div  className="description">
                        <h4>Secure your future in ITALY/UK!</h4>
                        <p>
                            We are currently accepting applications for work permit visas. 
                            Don't miss out on this opportunity to embark on a new adventure
                        </p>
                    </div>
                    <div className='text-[black] flex items-center justify-center text-[20px]'>details</div>
                </div>

                <div  className="div-part">
                    <img src={img4} alt="pic" />
                    <div  className="overlay"></div>
                    <div  className="description">
                        <h4>Experience the beauty of the world.</h4>
                        <p>
                            Embark on a journey to discover the wonders of our world, where every moment is a breathtaking experience. 
                            Let us guide you through the beauty that awaits.
                        </p>
                    </div>
                    <div className='text-[black] flex items-center justify-center text-[20px]'>details</div>
                </div>

            </div>

        </div>
      )
      


    return content
}

export default LatestNews