import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import './HomeContact.css'
import { toast } from 'react-toastify'

const Divider = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const [number,setNumber] = useState('')
  const [subject,setSubject] = useState('')
  const [res,setRes] = useState(null)

  
  const handleMail = (e) =>{
      e.preventDefault()
      if (!name || !email || !number || !subject || !message){
          toast.error('All fields are required!');
          return;
      }

      const serviceId = 'service_97y1l3a'
      const templateId = 'template_hfumv1e'
      const publicKey = 'xFP5VNwIj4hXE_KVf'

      const templateParams = {
          from_name : name,
          from_email: email,
          to_name: "kamrul islam",
          email: email,
          subject:subject,
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
              setName('')
              setEmail('')
              setMessage('')
              setNumber('')
              setSubject('')
          })
          .catch((err) => {
              setRes(err)
          })
    }
  useEffect(() => {
    if(res !== null){
        if (res.status === 200) {
            toast.success('Response received successfully!');
        }else{
            toast.error('Error sending message,try again later.')
        }
        setRes(null)
    }
  }, [res]);

  return (
    <div className='latest pb-4'>
      <div className='latest-container'>
      <div  className="overlay"></div>
        <div  className="content">
            <h2 className='text-[white] text-center text-4xl my-4'>Contact Us</h2>
            <form action="#" method="post" className='w-[100%] lg:w-[80%] mx-auto custom-bg'>
              <div className='flex flex-col lg:flex-row justify-center items-center w-full gap-4'>
                  <div  className="form-group w-full lg:w-1/2">
                      <label htmlFor="name">Name:</label>
                      <input type="text" id="name" name="name"  onChange={(e) => setName(e.target.value)} required/>
                  </div>
                  <div  className="form-group w-full lg:w-1/2">
                      <label htmlFor="name">Mobile:</label>
                      <input type="number" id="mobile" name="mobile" onChange={(e) => setNumber(e.target.value)} required/>
                  </div>
                </div>
              <div className='flex flex-col lg:flex-row  justify-center items-center w-full gap-4'>
                  <div  className="form-group w-full lg:w-1/2">
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div  className="form-group w-full lg:w-1/2">
                      <label htmlFor="email">Subject:</label>
                      <input type="text" id="subject" name="email" required onChange={(e) => setSubject(e.target.value)} />
                  </div>
                  </div>
                <div  className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>
                <button onClick={handleMail}  className='bttn' type="submit">Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Divider