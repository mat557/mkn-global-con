import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import usa from '../../../assets/banner.jpg'
import bnr2 from '../../../assets/banner-uni2.jpeg'
import bnr3 from '../../../assets/banner-uni3.jpeg'
import { useNavigate } from 'react-router-dom';


const Banner = () => {
    const navigate = useNavigate()
    let content

    content = (
        <div className='w-full'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#476D81',
                    '--swiper-pagination-color': 'teal',
                }}
                modules={[Navigation, Pagination, Scrollbar , Autoplay]}
                // navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{delay:3000,pauseOnMouseEnter: true}}
            >
                <SwiperSlide className='w-full relative '>
                    <div className='overlay1'></div>
                    <img loading="lazy" 
                        className='w-full h-[50vh] lg:h-[70vh]' 
                        src={bnr2} alt="" />
                    <div className='absolute top-0 h-full w-full p-4'>
                        <div className='text-holder flex flex-col align-center jusitfy-center max-w-[1300px] mx-auto top-1/3 lg:top-[40%] relative inset-0 gradient rounded p-4 h-auto '>
                            <h1 className='leading-10 text-2xl lg:text-8xl text-[#476D81] font-bold ml-4 heading'>visa for <span className='text-white text-4xl'>uk</span></h1>
                            <p className='banner-description text-[white] ml-4 text-base lg:text-lg leading-none '>
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
                    <div className='absolute top-0 h-full w-full p-4'>
                        <div className='text-holder flex flex-col align-center jusitfy-center max-w-[1300px] mx-auto top-1/3 lg:top-[40%] relative inset-0 gradient rounded p-4 h-auto '>
                            <h1 className='leading-10 text-2xl lg:text-8xl text-[#476D81] font-bold ml-4 heading'>visa for <span className='text-white text-4xl'>usa</span></h1>
                            <p className='banner-description text-[white] ml-4 text-base lg:text-lg leading-none '>
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
                        src={bnr3} alt="" />
                    <div className='absolute top-0 h-full w-full p-4'>
                        <div className='text-holder flex flex-col align-center jusitfy-center max-w-[1300px] mx-auto top-1/3 lg:top-[40%] relative inset-0 gradient rounded p-4 h-auto '>
                            <h1 className='leading-10 text-2xl lg:text-8xl text-[#476D81] font-bold ml-4 heading'>visa for <span className='text-white text-4xl'>canada</span></h1>
                            <p className='banner-description text-[white] ml-4 text-base lg:text-lg leading-none '>
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
                        src={bnr2} alt="" />
                    <div className='absolute top-0 h-full w-full p-4'>
                        <div className='text-holder flex flex-col align-center jusitfy-center max-w-[1300px] mx-auto top-1/3 lg:top-[40%] relative inset-0 gradient rounded p-4 h-auto '>
                            <h1 className='leading-10 text-2xl lg:text-8xl text-[#476D81] font-bold ml-4 heading'>visa for <span className='text-white text-4xl'>australia</span></h1>
                            <p className='banner-description text-[white] ml-4 text-base lg:text-lg leading-none '>
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
                        src={bnr2} alt="" />
                    <div className='absolute top-0 h-full w-full p-4'>
                        <div className='text-holder flex flex-col align-center jusitfy-center max-w-[1300px] mx-auto top-1/3 lg:top-[40%] relative inset-0 gradient rounded p-4 h-auto '>
                            <h1 className='leading-10 text-2xl lg:text-8xl text-[#476D81] font-bold ml-4 heading'>visa for <span className='text-white text-4xl'>europe</span></h1>
                            <p className='banner-description text-[white] ml-4 text-base lg:text-lg leading-none '>
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