import React from 'react'
import Layout from '../containers/component/Layout'
import PokiMonList from '../containers/PokiMonList'
import Counter from "../containers/component/Counter"

const Home = () => {
    return (
        <Layout>
         <div>homepage</div>
           <Counter />
         <PokiMonList />

        </Layout>
    )
}

export default Home
