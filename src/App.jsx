import React from 'react'
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

function App() {
  return (
    <div>
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