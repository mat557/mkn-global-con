import { useNavigate } from "react-router-dom"

const Footer = () => {
    let content
    const navigate = useNavigate() 


    content = (
        <div className=' bg-[#194962] flex flex-col items-center justify-center'>
            <footer className="footer pl-10 lg:pl-20 pb-10 pr-10 pt-10 max-w-full lg:max-w-[1300px] mx-auto text-base-content">
                <nav>
                    <header className="footer-title  text-red-50">London office</header> 
                    <p className="text-[white]">Mobile:+4407710615979</p>
                    <p className="text-[white]">Mail:admin@mknglobal.co.uk</p>
                </nav> 
                
                <nav>
                    <header className="footer-title  text-red-50">Dhaka office</header> 
                    <p className="text-[white]">Mobile:+880 1316-039034</p>
                    <p className="text-[white]">Mail:info@mknglobal.co.uk</p>
                </nav> 
                <nav>
                    <header className="footer-title  text-red-50">Sylhet office</header> 
                    <p className="text-[white]">Mobile:+4401720973011</p>
                    <p className="text-[white]">Mail:info@mknglobal.co.uk</p>
                </nav> 

                <form>
                    <header className="footer-title  text-red-50">Apply</header> 
                    <fieldset className="form-control lg:w-80">
                    <div className="join flex flex-col lg:flex-row w-full">
                        <button onClick={()=>navigate('/apply')} className="lg:btn btn w-full bg-gray-900 text-gray-50">Apply</button>
                    </div>
                    </fieldset>
                </form>
            </footer>
            <div className="w-full bg-[#476D81] h-[auto] flex lg:flex-col flex-col gap-[10%] items-center justify-center p-1">
                <p className="text-white text-[15px] text-center lg:text-justify">© Copyright 2024 MKN Global Consultant. All rights reserved.</p>
                <p className="text-white text-[15px] text-center lg:text-justify">Developed by- Md Mahfuz Anam Tasnim (mahfuz.ta26@gmail.com)</p>
            </div>
        </div>
    )

    return content
}

export default Footer