import React from 'react'
import Layout from '../../components/layout/Layout'
import Newbook from './component/newbook/Newbook'
import Azebook from './component/azebook/Azebook'
import Trbook from './component/trbook/Trbook'
import Rusbook from './component/rusbook/Rusbook'
import Usaqbook from './component/usaqbook/Usaqbook'
import Bizimferqimiz from './component/bizimferqimiz/Bizimferqimiz'
import Ingbook from './component/ingbook/Ingbook'

const Home = () => {
  return (
    <Layout>
        <Newbook/>
        <Azebook/>
        <Trbook/>
        <Rusbook/>
        <Ingbook/>
        <Usaqbook/>
        <Bizimferqimiz/>
    </Layout>
  )
}

export default Home