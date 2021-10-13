import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Quizbox = (props) => {
    const [quizName, setquizName] = useState("")
    useEffect(() => {
        console.log(`http://localhost:5000/qname/${props.x}`)
        axios.get(`http://localhost:5000/qname/${props.x}`).then(res => setquizName(res.data[0]["quizname"]))
    }, [])
    return (
        <div>
            <h1>{quizName}</h1>
            <button value={props.x} onClick={props.onAttQ}>open</button>
        </div>
    )
}

export default Quizbox
