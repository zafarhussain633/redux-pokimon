import React, { useState, useEffect } from 'react'
import Layout from '../containers/component/Layout'
import { reactLocalStorage } from 'reactjs-localstorage';

const UsingLocalStorage = () => {

    const [name, setName] = useState(null);
    const [showName, setShowName] = useState(null);

    function handleLoacalStorage() {
        if (name !== null) {
            setShowName(name);
            reactLocalStorage.set("myname", name)
        }
    }

    function removeLocalStorageValue() {
        setShowName("");
        reactLocalStorage.clear();
    }


    useEffect(() => {
        let a = reactLocalStorage.get("myname");
        setShowName(a);
    }, [showName])


    return (
        <Layout>
            <h2>
                local storage code will come her
            </h2>

            <h3>
                your name : <b style={{ color: "green" }}> {showName}  </b>
            </h3>

            <input type="text" onChange={(e) => setName(e.target.value)} />  <br />
            <button onClick={handleLoacalStorage} style={{ padding: "1.5rem", fontSize: "1.5rem", margin: "20px" }}>set name </button>
            <button onClick={removeLocalStorageValue} style={{ padding: "1.5rem", fontSize: "1.5rem", margin: "20px" }}>remove name</button>
        </Layout>

    )
}

export default UsingLocalStorage
