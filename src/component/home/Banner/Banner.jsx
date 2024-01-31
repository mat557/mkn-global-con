import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import uk from '../../../assets/uk.jpg'
import usa from '../../../assets/usa.jpg'
import canada from '../../../assets/canada.jpg'
import aus from '../../../assets/australia.jpg'
import eur from '../../../assets/eur.jpg'
import { useNavigate } from 'react-router-dom'



// 5944,2500
const Banner = () => {
    const navigate = useNavigate()
    let content

    content = (
        <div className='w-full h-[50vh] lg:h-[70vh]'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                modules={[Navigation, Pagination, Scrollbar , Autoplay]}
                // navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{delay:3000,pauseOnMouseEnter: true}}
            >
                <SwiperSlide className='w-full relative'>
                    <div className='overlay1'></div>
                    <img loading="lazy" 
                        className='w-full h-[50vh] lg:h-[70vh]' 
                        src={uk} alt="" />
                    <div className='absolute bottom-0 w-full mx-auto flex align-center jusitfy-end h-auto '>
                        <div className='text-holder pb-4 flex flex-col align-center jusitfy-center max-w-[1300px] mx-auto relative h-auto '>
                            <h1 className='leading-10 text-2xl lg:text-8xl text-[#476D81] font-bold ml-4 heading'>visa for <span className='text-white text-4xl'>UK</span></h1>
                            <p className='banner-description text-[white] ml-4 lg:text-lg leading-none '>
                                Explore the beauty of Europe with ease. Our visa services ensure a seamless application process, 
                                so you can focus on planning your journey and creating unforgettable memories.
                            </p>
                            <button onClick={() => navigate('/studentVisa/uk')} className='butun'>more</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='w-full relative '>
                    <div className='overlay1'></div>
                    <img loading="lazy" 
                        className='w-full h-[50vh] lg:h-[70vh]' 
                        src={usa} alt="" />
                    <div className='absolute bottom-0 w-full mx-auto flex align-center jusitfy-end h-auto '>
                        <div className='text-holder pb-4 flex flex-col align-center jusitfy-center max-w-[1300px] mx-auto relative  h-auto '>
                            <h1 className='leading-10 text-2xl lg:text-8xl text-[#476D81] font-bold ml-4 heading'>visa for <span className='text-white text-4xl'>USA</span></h1>
                            <p className='banner-description text-[white] ml-4 lg:text-lg leading-none '>
                                Explore the beauty of Europe with ease. Our visa services ensure a seamless application process, 
                                so you can focus on planning your journey and creating unforgettable memories.
                            </p>
                            <button onClick={() => navigate('/studentVisa/usa')}  className='butun'>more</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full relative '>
                    <div className='overlay1'></div>
                    <img loading="lazy" 
                        className='w-full h-[50vh] lg:h-[70vh]' 
                        src={canada} alt="" />
                    <div className='absolute bottom-0 w-full mx-auto flex align-center jusitfy-end h-auto '>
                        <div className='text-holder pb-4 flex flex-col align-center jusitfy-center max-w-[1300px] mx-auto relative h-auto '>
                            <h1 className='leading-10 text-2xl lg:text-8xl text-[#476D81] font-bold ml-4 heading'>visa for <span className='text-white text-4xl'>Canada</span></h1>
                            <p className='banner-description text-[white] ml-4 lg:text-lg leading-none '>
                                Explore the beauty of Europe with ease. Our visa services ensure a seamless application process, 
                                so you can focus on planning your journey and creating unforgettable memories.
                            </p>
                            <button onClick={() => navigate('/studentVisa/canada')} className='butun'>more</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full relative '>
                    <div className='overlay1'></div>
                    <img loading="lazy" 
                        className='w-full h-[50vh] lg:h-[70vh]' 
                        src={aus} alt="" />
                    <div className='absolute bottom-0 w-full mx-auto flex align-center jusitfy-end h-auto '>
                        <div className='text-holder pb-4 flex flex-col align-center jusitfy-center max-w-[1300px] mx-auto relative h-auto '>
                            <h1 className='leading-10 text-2xl lg:text-8xl text-[#476D81] font-bold ml-4 heading'>visa for <span className='text-white text-4xl'>Australia</span></h1>
                            <p className='banner-description text-[white] ml-4 lg:text-lg leading-none '>
                                Explore the beauty of Europe with ease. Our visa services ensure a seamless application process, 
                                so you can focus on planning your journey and creating unforgettable memories.
                            </p>
                            <button  onClick={() => navigate('/studentVisa/australia')} className='butun'>more</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full relative '>
                    <div className='overlay1'></div>
                    <img loading="lazy" 
                        className='w-full h-[50vh] lg:h-[70vh]' 
                        src={eur} alt="" />
                    <div className='absolute bottom-0 w-full mx-auto flex align-center jusitfy-end h-auto '>
                        <div className='text-holder flex flex-col align-center jusitfy-center max-w-[1300px] mx-auto relative h-auto '>
                            <h1 className='leading-10 text-2xl lg:text-8xl text-[#476D81] font-bold ml-4 heading'>visa for <span className='text-white text-4xl'>Europe</span></h1>
                            <p className='banner-description text-[white] ml-4 lg:text-lg leading-none '>
                                Explore the beauty of Europe with ease. Our visa services ensure a seamless application process, 
                                so you can focus on planning your journey and creating unforgettable memories.
                            </p>
                            <button onClick={() => navigate('/studentVisa/europe')}  className='butun'>more</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
      )
  
    return content
}

export default Banner