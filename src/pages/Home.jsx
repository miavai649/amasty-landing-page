import React from 'react'
import Achivements from '../components/Achivements'
import Banner from '../components/Banner'
import Brands from '../components/Brands'
import ContactUs from '../components/ContactUs'
import ExtraServices from '../components/ExtraServices'
import Services from '../components/Services'
import Subcription from '../components/Subcription'
import WorkFlow from '../components/WorkFlow'

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <Services></Services>
      <WorkFlow/>
      <ExtraServices/>
      <Achivements />
      <ContactUs></ContactUs>
      <Subcription/>
    </div>
  )
}
