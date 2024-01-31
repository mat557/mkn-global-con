import Footer from '../../shared/Footer'
import Banner from './Banner/Banner'
import HomeContact from './Contact/HomeContact'
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
            <HomeContact />
            <Footer />
        </>
    )

    return content
}

export default Home