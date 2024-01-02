
const Footer = () => {
    let content


    content = (
        <div className=' bg-[#D08958]'>
            <footer className="footer p-10 max-w-full lg:max-w-[1300px] mx-auto text-base-content">
                <nav>
                    <header className="footer-title text-red-50">Services</header> 
                    <a className="link link-hover text-red-50">Branding</a>
                    <a className="link link-hover text-red-50">Design</a>
                    <a className="link link-hover text-red-50">Marketing</a>
                    <a className="link link-hover text-red-50">Advertisement</a>
                </nav> 

                <nav>
                    <header className="footer-title  text-red-50">Company</header> 
                    <a className="link link-hover  text-red-50">About us</a>
                    <a className="link link-hover  text-red-50">Contact</a>
                    <a className="link link-hover  text-red-50">Jobs</a>
                    <a className="link link-hover  text-red-50">Press kit</a>
                </nav> 

                {/* <nav>
                    <header className="footer-title  text-red-50">Legal</header> 
                    <a className="link link-hover  text-red-50">Terms of use</a>
                    <a className="link link-hover  text-red-50">Privacy policy</a>
                    <a className="link link-hover  text-red-50">Cookie policy</a>
                </nav>  */}

                <form>
                    <header className="footer-title  text-red-50">Your Reviews</header> 
                    <fieldset className="form-control lg:w-80">
                    <label className="label">
                        <span className="label-text  text-red-50">Enter your comment</span>
                    </label> 
                    <div className="join flex flex-col lg:flex-row">
                        <input type="text" placeholder="your comment" className="input input-bordered join-item" /> 
                        <button className="lg:btn btn-sm bg-gray-900 text-gray-50 join-item">Comment</button>
                    </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    )

    return content
}

export default Footer