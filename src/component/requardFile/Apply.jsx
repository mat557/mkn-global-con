import { useEffect, useState } from "react"
import Footer from "../../shared/Footer"
import './Apply.css'
import emailjs from '@emailjs/browser'
import { toast } from "react-toastify"


const Files = () => {
    let content
    const [firName,setFirName] = useState('')
    const [secName,setSecName] = useState('')
    const [email,setEmail] = useState('')
    const [number,setNumber] = useState('')
    const [subject,setSubject] = useState('')
    const [type,setType] = useState('')
    const [place,setPlace] = useState('')
    const [message,setMessage] = useState('')
    const [res,setRes] = useState('')


    const handleSubmitApplication = (e) =>{
        e.preventDefault()
        if (!firName || !secName || !email || !number || !subject || !type || !place || !message) {
            toast.error('All fields are required!');
            return;
        }
        const serviceId = 'service_97y1l3a'
        const templateId = 'template_52654vf'
        const publicKey = 'xFP5VNwIj4hXE_KVf'

        const templateParams = {
            from_name : firName,
            secName:secName,
            from_email: email,
            to_name: "kamrul islam",
            subject:subject,
            type:type,
            place:place,
            message: message,
            number: number 
        }

        emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey)
            .then((response) => {
                setRes(response)
                setFirName('')
                setSecName('')
                setEmail('')
                setNumber('')
                setSubject('')
                setType('')
                setPlace('')
                setMessage('')
            })
            .catch((err) => {
                console.log(`Error sending email: `,err)
                setRes(err)
            })
    }
    useEffect(() => {
        if(res !== ''){
            if (res.status === 200) {
                toast.success('Response received successfully!');
            }else{
                toast.error('Error sending message,try again later.')
            }
            setRes('')
        }
      }, [res]);



    content = (
        <div className="w-full bg-gray-100">
                <div className='back-img h-[20vh]'>
                    <div className="max-w-[1300px] mx-auto h-full flex items-end justify-start p-[10px]">
                        <h1 className='text-[white] text-4xl'>Apply Now</h1>
                    </div>
                </div>
            <div className="max-w-[1300px] mx-auto">
                <form className="card-body w-[90%] lg:w-[50%] mx-auto bg-gray-200 m-20">
                    <div className="w-full mx-auto flex flex-col lg:flex-row">
                        <div className="form-control w-full lg:w-[50%] lg:p-1">
                            <label className="label">
                                <span className="label-text">First name</span>
                            </label>
                            <input 
                                name="name"
                                type="text" 
                                placeholder="first name" 
                                className="input input-bordered"  
                                onChange={(e) => setFirName(e.target.value)}
                                required />
                        </div>
                        <div className="form-control w-full lg:w-[50%] lg:p-1">
                            <label className="label">
                                <span className="label-text">Last name</span>
                            </label>
                            <input 
                                name="name"
                                type="text" 
                                placeholder="last name" 
                                className="input input-bordered"  
                                onChange={(e) => setSecName(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div className="w-full mx-auto flex flex-col lg:flex-row">
                        <div className="form-control w-full lg:w-[50%] lg:p-1">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email" 
                                placeholder="email" 
                                className="input input-bordered" 
                                onChange={(e) => setEmail(e.target.value)} 
                                required />
                        </div>
                        <div className="form-control w-full lg:w-[50%] lg:p-1">
                            <label className="label">
                                <span className="label-text">Number</span>
                            </label>
                            <input 
                                name="number"
                                type="number" 
                                placeholder="your mobile number" 
                                className="input input-bordered"
                                onChange={(e) => setNumber(e.target.value)} 
                                required />
                        </div>
                        </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input 
                            name="subject"
                            type="text"
                            placeholder="subject" 
                            className="input input-bordered"
                            onChange={(e) => setSubject(e.target.value)} 
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Visa type</span>
                        </label>
                        <select className="input input-bordered" id="cars" name="cars"
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="work">Work permit</option>
                            <option value="student">Student</option>
                            <option value="visit">Visit</option>
                            <option value="other">Others</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Preferred country/continent</span>
                        </label>
                        <select className="input input-bordered" id="cars" name="cars"
                            onChange={(e) => setPlace(e.target.value)}
                        >
                            <option value="uk">Uk</option>
                            <option value="usa">Usa</option>
                            <option value="canada">Canada</option>
                            <option value="europe">Europe</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your message</span>
                        </label>
                        <textarea 
                            name="message"
                            type="text" 
                            placeholder="your message" 
                            className="input min-h-28 input-bordered"
                            onChange={(e) => setMessage(e.target.value)}
                            required />
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handleSubmitApplication} type='submit' className="btn  bg-[#476D81] border-none text-gray-50">Apply</button>
                    </div>
                </form>
            </div> 
            <Footer />
        </div>
    )

    return content
}

export default Files