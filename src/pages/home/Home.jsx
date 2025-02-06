import React from 'react'
import Layout from '../../components/layout/Layout'
import Newbook from './component/newbook/Newbook'
import Azebook from './component/azebook/Azebook'
import Trbook from './component/trbook/Trbook'
import Rusbook from './component/rusbook/Rusbook'

const Home = () => {
  return (
    <Layout>
        <Newbook/>
        <Azebook/>
        <Trbook/>
        <Rusbook/>
    </Layout>
  )
}

export default Home