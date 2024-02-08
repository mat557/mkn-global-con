import { useNavigate, useParams } from 'react-router-dom'
import './StudentVisa.css'
import Footer from '../../shared/Footer'
import { useEffect, useState } from 'react'


const StudentVisa = () => {
    let content
    const {region} = useParams()
    const [data,setData] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        fetch('/info/universitiesInfo.json')
        .then(res => {
            if (!res.ok) {
                throw new Error(`Network response was not ok: ${res.status}`);
            }
            return res.json();
        })
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));

    },[])
    let c = region
    let info = data.find(value => (value.country == region.toUpperCase()))

    content = (
        <div className='w-full bg-gray-100'>
            <div className='st-header h-[20vh]'>
                <div className='max-w-[1300px] mx-auto flex justify-start items-end h-full'>
                    <p className='text-[white] pb-2 text-lg lg:text-4xl'>Student visa in <span className='uppercase'>{c.toLowerCase()}</span></p>
                </div>
            </div>
            
            <div className='max-w-[1300px] mx-auto py-12 px-1 lg:px-8 bg-[white]'>
                {/* <div className='pb-4'>
                    <p className='text-2xl font-bold pb-4 text-[#476D81]'>{info?.applicationInfo?.title}</p>
                    {info?.applicationInfo?.universities?.map((a,index) => <p key={index} className='pl-4 text-lg'>{a}</p>)}
                </div> */}
                <button className='py-2 px-5 rounded bg-[#476D81] text-white' onClick={() => navigate(`/workVisa/${region}`)}>Check work visa in {region}</button>

                <div className='pb-4 mt-12 w-[90%] lg:w-1/2 mx-auto text-center'>
                    <p className='text-2xl font-bold pb-0 text-[#476D81]'>{info?.processingDuration?.title}</p>
                    <p className='text-[15px] pt-4'>{info?.processingDuration?.note}</p>
                </div>

                <div className='pb-4 mt-16 w-[90%] lg:w-[250px] mx-auto text-center flex flex-col justify-center'>
                    <p className='text-2xl font-bold pb-0 text-[#476D81]'>{info?.requiredDocuments?.title}</p>
                    {info?.requiredDocuments?.documents.map((p,index) => <p className='pt-[4px] text-left text-lg pl-[70px] lg:pl-[40px]' key={index}>{p}</p>)}
                </div>

                <div className='pb-4 mt-24 w-[90%] mx-auto text-center'>
                    <p className='text-2xl font-bold pb-0 text-[#476D81]'>{info?.applicationProcessOverview?.title}</p>
                    <div className='text-justify p-4'>
                        {info?.applicationProcessOverview?.content}
                    </div>
                </div>

            </div>
            
            <Footer />
        </div>
    )

    return content
}

export default StudentVisa