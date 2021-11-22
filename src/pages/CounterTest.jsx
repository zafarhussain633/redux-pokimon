



import React from 'react'
import Layout from '../containers/component/Layout'
import { useSelector } from 'react-redux'
// import CounterAction from "../redux/actions/counter"


const CounterTest = () => {
    const couterResult = useSelector(state => state.CounterReducer.count)

    return (
        <Layout>
            " CounterTest page"
            <h1>testing counter result <b style={{ color: "crimson" }}>{couterResult}</b></h1>
        </Layout>
    )
}

export default CounterTest
