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


const Banner = () => {
    let content

    content = (
        <div className='w-full'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': 'teal',
                }}
                modules={[Navigation, Pagination, Scrollbar , Autoplay]}
                // navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{delay:3000,pauseOnMouseEnter: true}}
            >
                <SwiperSlide className='w-full relative'>
                    
                    <img loading="lazy" 
                        className='w-full h-[50vh] lg:h-[70vh]' 
                        src={bnr2} alt="" />
                    <div className='absolute top-0 h-full w-full p-4'>
                        <div className=' flex flex-col align-center jusitfy-center max-w-[1300px] mx-auto top-1/3 lg:top-1/3 relative inset-0 gradient rounded p-4 h-auto border-l-[20px] border-[white] '>
                            <h1 className='leading-10 text-2xl lg:text-4xl text-[#D08958] font-bold ml-4 heading'>visa for <span className='text-[white]  text-4xl lg:text-8xl '>EUROPE</span></h1>
                            <p className='banner-description text-[white] ml-4 text-base lg:text-2xl leading-none '>
                                Explore the beauty of Europe with ease. Our visa services ensure a seamless application process, 
                                so you can focus on planning your journey and creating unforgettable memories.
                            </p>
                            <button className='btn btn-sm bg-[#D08958] text-[white] hover:text-[#D08958] hover:bg-[white] border-0 font-bold w-24 ml-4 mt-4'>more</button>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide className='w-full relative'>
                    
                    <img loading="lazy" 
                        className='w-full h-[50vh] lg:h-[70vh]' 
                        src={usa} alt="" />
                    <div className='absolute top-0 h-full w-full p-4'>
                        <div className=' flex flex-col align-center jusitfy-center max-w-[1300px] mx-auto top-1/3 lg:top-1/3 relative inset-0 gradient rounded p-4 h-auto border-l-[20px] border-[white] '>
                            <h1 className='leading-10 text-2xl lg:text-4xl text-[#D08958] font-bold ml-4 heading'>visa for <span className='text-[white]  text-4xl lg:text-8xl '>USA</span></h1>
                            <p className='banner-description text-[white] ml-4 text-base lg:text-2xl leading-none'>
                                Explore the opportunities for a memorable journey to the United States. Discover the diverse landscapes,
                                vibrant culture, and endless possibilities that await you.
                            </p>
                            <button className='btn btn-sm bg-[#D08958] text-[white] hover:text-[#D08958] hover:bg-[white] border-0 font-bold w-24 ml-4 mt-4'>more</button>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide className='w-full relative'>

                    <img loading="lazy" 
                        className='w-full h-[50vh] lg:h-[70vh]' 
                        src={bnr3} alt="" />
                    <div className='absolute top-0 h-full w-full p-4'>
                        <div className=' flex flex-col align-center jusitfy-center max-w-[1300px] mx-auto top-1/3 lg:top-1/3 relative inset-0 gradient rounded p-4  h-auto   border-l-[20px] border-[white] '>
                            <h1 className='leading-10 text-2xl lg:text-4xl text-[#D08958] font-bold ml-4 heading'>visa for <span className='text-[white]  text-4xl lg:text-8xl '>CANADA</span></h1>
                            <p className='banner-description text-[white] ml-4 text-base lg:text-2xl leading-none'>
                            Explore the beauty of Canada with ease as we assist you in obtaining your visa. Our reliable and efficient services make the process simple and stress-free.
                            </p>
                            <button className='btn btn-sm bg-[#D08958] text-[white] hover:text-[#D08958] hover:bg-[white] border-0 font-bold w-24 ml-4 mt-4'>more</button>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
      )
  
    return content
}

export default Banner