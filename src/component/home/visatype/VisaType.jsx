import { useNavigate } from 'react-router-dom'
import './VIsaType.css'

const VisaType = () => {
    let content
    const navigate = useNavigate()

    content = (
        <div className='bg-gray-100 pb-6  border-t-[15px] mt-12 border-[#476D81]'>
            <div className='max-w-[1300px] mx-auto'>
                <div className='px-6 pt-6 pb-8 lg:pt-16'>
                    <h1 className='text-4xl text-center mb-[60px] text-[#476D81]'>Diverse Visa Solutions</h1>
                    <div className='flex flex-wrap align-center justify-center gap-4 mt-4'>

                        <div className="bg-gray-300 rounded w-96 image-full">
                           
                            <div className="card-body">
                                <h2 className="card-title text-[#476D81]">Work permit visa</h2>
                                <p>We are offering work permit visas in various countries around the world. Reliable and fast processing is our guarantee.</p>
                                <div className="card-actions justify-end">
                                <button onClick={() => navigate('/info/work')} className="btn btn-sm">details</button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-300 rounded w-96 image-full">
                           
                            <div className="card-body">
                                <h2 className="card-title text-[#476D81]">Student visa</h2>
                                <p>One-stop solution for student visas, covering world-famous universities. Check out to know more in detail.</p>
                                <div className="card-actions justify-end">
                                <button onClick={() => navigate('/info/student')} className="btn btn-sm">details</button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-300 rounded  w-96 image-full">
                            
                            <div className="card-body">
                                <h2 className="card-title text-[#476D81]">Visit visa</h2>
                                <p>Enjoy the beauty of the world. Make the process flawless and cost-effective. Check out for a more hassle-free experience...</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => navigate('/info/visit')} className="btn btn-sm">details</button>
                                </div>
                            </div>
                            
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )

    return content
}

export default VisaType