import Footer from '../../shared/Footer'
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock ,  faHandHoldingHeart , faStarOfLife , faEye ,
  faMagnifyingGlass , faPen , faBook, faCapsules, faStapler, faBusinessTime, faPeopleArrows, faPeopleRoof, faUmbrellaBeach ,
} from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    let content
    content = (
        <div className='bg-gray-100 w-full'>
            
            <div className='top-0 relative service-header'>
              <div className='max-w-[1300px] mx-auto '>
                <p className='text-[white] text-4xl  pt-28'>Our Services</p>
              </div>
            </div>
          <div className='max-w-[1300px] mx-auto bg-[white] py-12'>
            <div className='w-full px-2 lg:px-0 lg:w-3/4 mx-auto gap-8 flex flex-wrap align-center justify-center'>
              <div className="service shadow-xl flex flex-col align-left h-auto w-full lg:w-[250px] border-b-[10px]   border-r-[10px] rounded p-4 border-[#476D81] border-solid ">
                <FontAwesomeIcon className='w-16 h-16 text-[#476D81]' icon={faStarOfLife} />
                <h3 className='text-2xl pt-4 text-[#476D81]'>Visa Consultation</h3>
                <p className='text-[15px]'>Provide expert advice and guidance on visa requirements, eligibility criteria, and the application process for various types of visas, including tourist visas, student visas, work visas, and immigration visas.</p>
              </div>
            
              <div className="service shadow-xl flex flex-col align-left h-auto w-full lg:w-[250px] border-b-[10px]   border-r-[10px] rounded p-4 border-[#476D81] border-solid">
                <FontAwesomeIcon className='w-16 h-16 text-[#476D81]' icon={faMagnifyingGlass} />
                <h3 className='text-2xl pt-4 text-[#476D81]'>Document Verification and Preparation</h3>
                <p className='text-[15px]'>Assist clients in collecting and preparing the required documents for visa applications.</p>
              </div>
            
              <div className="service shadow-xl flex flex-col align-left h-auto w-full lg:w-[250px] border-b-[10px]   border-r-[10px] rounded p-4 border-[#476D81] border-solid">
                <FontAwesomeIcon className='w-16 h-16 text-[#476D81]' icon={faPen} />
                <h3 className='text-2xl pt-4 text-[#476D81]'>Application Submission</h3>
                <p className='text-[15px]'>Submit visa applications on behalf of clients to the relevant immigration or consular authorities</p>
              </div>
            
              <div className="service shadow-xl flex flex-col align-left h-auto w-full lg:w-[250px] border-b-[10px]   border-r-[10px] rounded p-4 border-[#476D81] border-solid">
                <FontAwesomeIcon className='w-16 h-16 text-[#476D81]' icon={faBook} />
                <h3 className='text-2xl pt-4 text-[#476D81]'>Case Assessment</h3>
                <p className='text-[15px]'>Conduct a thorough assessment of the client's situation to determine the most suitable visa category.</p>
              </div>
            
              <div className="service shadow-xl flex flex-col align-left h-auto w-full lg:w-[250px] border-b-[10px]   border-r-[10px] rounded p-4 border-[#476D81] border-solid">
                <FontAwesomeIcon className='w-16 h-16 text-[#476D81]' icon={faEye} />
                <h3 className='text-2xl pt-4 text-[#476D81]'>Immigration Law and Policy Updates</h3>
                <p className='text-[15px]'>Stay informed about changes in immigration laws, policies, and procedures both in the client's home country and the destination country.</p>
              </div>
            
              <div className="service shadow-xl flex flex-col align-left h-auto w-full lg:w-[250px] border-b-[10px]   border-r-[10px] rounded p-4 border-[#476D81] border-solid">
                <FontAwesomeIcon className='w-16 h-16 text-[#476D81]' icon={faCapsules} />
                <h3 className='text-2xl pt-4 text-[#476D81]'>Interview Preparation</h3>
                <p className='text-[15px]'>Offer guidance and preparation for visa interviews, if required. Provide tips on common interview questions and help clients build confidence for a successful visa interview.</p>
              </div>
            
              <div className="service shadow-xl flex flex-col align-left h-auto w-full lg:w-[250px] border-b-[10px]   border-r-[10px] rounded p-4 border-[#476D81] border-solid">
                <FontAwesomeIcon className='w-16 h-16 text-[#476D81]' icon={faStapler} />
                <h3 className='text-2xl pt-4 text-[#476D81]'>Appeals and Grievances</h3>
                <p className='text-[15px]'>Assist clients in the appeals process if a visa application is rejected. Provide support 
                in addressing grievances, responding to queries from immigration authorities, and appealing decisions.</p>
              </div>
            
              <div className="service shadow-xl flex flex-col align-left h-auto w-full lg:w-[250px] border-b-[10px]   border-r-[10px] rounded p-4 border-[#476D81] border-solid">
                <FontAwesomeIcon className='w-16 h-16 text-[#476D81]' icon={faBusinessTime} />
                <h3 className='text-2xl pt-4 text-[#476D81]'>Corporate Immigration Services</h3>
                <p className='text-[15px]'>Provide services to businesses seeking to relocate employees internationally. Assist with work permits, business visas, and other immigration processes for employees on international assignments.</p>
              </div>
            
              <div className="service shadow-xl flex flex-col align-left h-auto w-full lg:w-[250px] border-b-[10px]   border-r-[10px] rounded p-4 border-[#476D81] border-solid">
                <FontAwesomeIcon className='w-16 h-16 text-[#476D81]' icon={faPeopleRoof} />
                <h3 className='text-2xl pt-4 text-[#476D81]'>Family Immigration Services</h3>
                <p className='text-[15px]'>Assist with family reunification processes, including spousal visas, dependent visas, and family sponsorship programs.</p>
              </div>
            
              <div className="service shadow-xl flex flex-col align-left h-auto w-full lg:w-[250px] border-b-[10px]   border-r-[10px] rounded p-4 border-[#476D81] border-solid">
                <FontAwesomeIcon className='w-16 h-16 text-[#476D81]' icon={faClock} />
                <h3 className='text-2xl pt-4 text-[#476D81]'>Student Visa Services</h3>
                <p className='text-[15px]'>Help students navigate the process of obtaining study visas, 
                  including guidance on selecting educational institutions, course selection, and meeting visa requirements.</p>
              </div>
            
              <div className="service shadow-xl flex flex-col align-left h-auto w-full lg:w-[250px] border-b-[10px]   border-r-[10px] rounded p-4 border-[#476D81] border-solid">
                <FontAwesomeIcon className='w-16 h-16 text-[#476D81]' icon={faUmbrellaBeach} />
                <h3 className='text-2xl pt-4 text-[#476D81]'>Travel Insurance Assistance</h3>
                <p className='text-[15px]'>Offer assistance in obtaining travel insurance, 
                which may be a requirement for certain visa categories. Provide information on coverage and benefits.</p>
              </div>
            
              <div className="service shadow-xl flex flex-col align-left h-auto w-full lg:w-[250px] border-b-[10px]   border-r-[10px] rounded p-4 border-[#476D81] border-solid">
                <FontAwesomeIcon className='w-16 h-16 text-[#476D81]' icon={faPeopleArrows} />
                <h3 className='text-2xl pt-4 text-[#476D81]'>Legal Compliance and Due Diligence</h3>
                <p className='text-[15px]'>Ensure that all visa applications are in compliance with local and international laws. 
                Conduct due diligence to verify the authenticity of documents and information provided by clients.</p>
              </div>
            
              <div className="service shadow-xl flex flex-col align-left h-auto w-full lg:w-[250px] border-b-[10px]   border-r-[10px] rounded p-4 border-[#476D81] border-solid">
                <FontAwesomeIcon className='w-16 h-16 text-[#476D81]' icon={faHandHoldingHeart} />
                <h3 className='text-2xl pt-4 text-[#476D81]'>Counseling Services</h3>
                <p className='text-[15px]'>Provide counseling and support to clients throughout the visa application process, 
                addressing concerns and providing information on the legal aspects of immigration.</p>
              </div>

            </div>
          </div>
          <Footer />
        </div>
      )

    return content
}

export default Services