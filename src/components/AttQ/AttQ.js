import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const AttQ = (props) => {
    const [qo, setQo] = useState([])
    const location = useLocation()
    const x = async(link) => {
        const data = await axios.get(link)
        setQo(data.data)
    }
    useEffect(() => {
        x(`http://localhost:5000/${location.search.slice(1)}`)
    }, [])
    const [currentQuestion, setcurrentQuestion] = useState(0)
    const [showScore, setshowScore] = useState(false)
    const [disabled, setdisabled] = useState(false)
    const [score, setscore] = useState(0)
    const [styles, setstyles] = useState({})
    const handleSubmit = (e) => {
        console.log(e.target.id)
        qo[currentQuestion].correct === e.target.value ? setscore(score + 1) : setscore(score)
        qo[currentQuestion].correct === e.target.value ? setstyles({backgroundColor: "green"}) : setstyles({backgroundColor: "red"})
        setdisabled(true)
        console.log(e)
    }
    const onnext = () => {
        setstyles({})
        if(currentQuestion < qo.length - 1 ){
            setcurrentQuestion(currentQuestion + 1)
            setdisabled(false)}
        else{
            setshowScore(true)}
    }
    return (
        <>
        {qo.length > 0 && !showScore ?
        <div>
            {score}/{qo.length}
            {console.log("object")}
            <h1>{qo[currentQuestion].question}</h1>
            {qo[currentQuestion].options.map(x => (<button value={x} disabled={disabled} onClick={handleSubmit} id={x}>{x}</button>))}
            <button onClick={onnext}>Next</button>
            <button style={styles} disabled={true}></button>
        </div>
    : 
    <div>
        {score}/{qo.length}
        <Link to="/all">
            Browse all Quizes
        </Link>
    </div>} 
    </>)
}

export default AttQ
