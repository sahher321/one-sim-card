import React, { useEffect } from 'react'
import Header from './Components/Common/Header/Header'
import Banner from './Components/Banner/Banner'
import IoTSimSection from './Section/IoTSimSection/IoTSimSection'
import SimManagment from './Section/SimManagment/SimManagment'
import SecurityLevel from './Section/SecurityLevel/SecurityLevel'
import ConnectivitySection from './Section/ConnectivitySection/ConnectivitySection'
import CompatableDevice from './Section/CompatableDevice/CompatableDevice'
import Footer from './Components/Common/Footer/Footer'
import FaqSection from './Section/FaqSection/FaqSection'
import PricingByApplication from './Section/PricingByApplication/PricingByApplication'
import BlogSection from './Section/BlogSection/BlogSection'
import AOS from "aos";
import "aos/dist/aos.css";

 



function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className='overflow-x-hidden'>
      <Header/>
      <Banner/>
      <IoTSimSection/>
        <SecurityLevel/>
      <SimManagment/>
      <ConnectivitySection/>
      <CompatableDevice/>
      <BlogSection/>
      <FaqSection/>
      <PricingByApplication/>
    <Footer/>
    </div>
  )
}

export default App