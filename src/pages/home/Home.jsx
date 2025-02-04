import React from 'react'
import Layout from '../../components/layout/Layout'
import Newbook from './component/newbook/Newbook'
import Azebook from './component/azebook/Azebook'

const Home = () => {
  return (
    <Layout>
        <Newbook/>
        <Azebook/>
    </Layout>
  )
}

export default Home