import { useState } from 'react'
import Footer from '../../shared/Footer'
import './Contact.css'

const Contact = () => {
    let content
    const [formData,setFormData] = useState({
        name: '',
        email:'',
        number:'',
        subject:'',
        message:''
    })

    const handleInputChange = (event) =>{
        const { name ,value} = event.target
        setFormData({...formData,
            [name] : value,
        })
    }

    const handleFile = (e) =>{
        e.preventDefault()
        console.log(formData)
    }


    content = (
        <div className='w-full bg-gray-100'>
            <div className="back-img">
                <h1 className='text-[white] text-6xl pt-[9vh] ml-8'>Contact</h1>
            </div>
            <div className="max-w-[1300px] mx-auto">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-left lg:pl-12">
                            <h1 className="text-5xl font-bold text-gray-900">Get Appointment Now!</h1>
                            <p className="py-2">
                                1. Secure your future with hassle-free visa processing.
                            </p>
                            <p className="py-2">
                                2. Get expert guidance for your study or work visa application.
                            </p>
                            <p className="py-2">
                                3. Unlock opportunities to study and work abroad effortlessly.
                            </p>
                            <p className="py-2">
                                4. Ensure a smooth and efficient visa application process.
                            </p>
                            <p className="py-2">
                                5. Experience personalized assistance tailored to your needs.
                            </p>
                            <p className="py-2">
                                Don't miss out on your chance – book your appointment now!
                            </p>

                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onClick={handleFile} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your name</span>
                                    </label>
                                    <input 
                                        onChange={handleInputChange}
                                        name="name"
                                        type="text" 
                                        placeholder="name" 
                                        className="input input-bordered" 
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input 
                                        onChange={handleInputChange}
                                        name="email"
                                        type="email" 
                                        placeholder="email" 
                                        className="input input-bordered" 
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Number</span>
                                    </label>
                                    <input 
                                        onChange={handleInputChange}
                                        name="number"
                                        type="number" 
                                        placeholder="your mobile number" 
                                        className="input input-bordered" 
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input 
                                        onChange={handleInputChange}
                                        name="subject"
                                        type="text"
                                        placeholder="subject" 
                                        className="input input-bordered" 
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your message</span>
                                    </label>
                                    <textarea 
                                        onChange={handleInputChange}
                                        name="message"
                                        type="text" 
                                        placeholder="your message" 
                                        className="input min-h-28 input-bordered" 
                                        required />
                                </div>

                                <div className="form-control mt-6">
                                    <button type='submit' className="btn  bg-[#476D81] border-none text-gray-50">Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
    return content
}

export default Contact