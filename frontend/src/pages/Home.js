import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      
      <CategoryList/>

      <BannerProduct/>
      <HorizontalCardProduct category={"roundmirrors"}   heading={"Rounded Mirror "}/>


      <HorizontalCardProduct category={"aluminiummirror"}   heading={"Top Aluminium Mirror "}/>

      <HorizontalCardProduct category={"bedroommirrors"}   heading={"Bed Room Mirror Designs"}/>


      <HorizontalCardProduct category={"concavemirror"}   heading={"Concave Mirror"}/>

      <HorizontalCardProduct category={"decorativemirror"}   heading={"Decorative Mirror"}/>

      <HorizontalCardProduct category={"concavemirror"}   heading={"Concave Mirror"}/>

      <HorizontalCardProduct category={"coloredmirror"}   heading={"Colored Mirror"}/>


         {/**Vertical Card Product */}

    <VerticalCardProduct category={"frostedglass"}   heading={"Frosted glass"}/>

    </div>
  )
}

export default Home