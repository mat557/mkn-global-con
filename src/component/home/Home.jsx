import Footer from '../../shared/Footer'
import Banner from './Banner/Banner'
import CallForAction from './callToAction/CallForAction'
import Divider from './divider/Divider'
import LatestNews from './latest/LatestNews'
import Services from './services/Services'
import VisaType from './visatype/VisaType'
import WhyCU from './whychooseus/WhyCU'


const Home = () => {
    let content


    content = (
        <>
            <Banner />
            <Services />
            <LatestNews />
            <VisaType />
            <WhyCU />
            <Divider />
            <CallForAction />
            <Footer />
        </>
    )

    return content
}

export default Home