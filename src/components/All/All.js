import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AttQ from '../AttQ/AttQ'
import Quizbox from '../Quizbox/Quizbox'
import { useHistory } from 'react-router'

const All = () => {
    const history = useHistory()
    const [test, settest] = useState({})
    const x = {...test}
    useEffect(() => {
        axios.get('http://localhost:5000/').then((res) => {
        res.data.forEach(q => {
            const z = x.hasOwnProperty(q.quizId)
            {z ? x[q.quizId].push(q): x[q.quizId]=[q]}
        })
        return x
        }
        ).then(x => settest(x))
    }, [])

    const onAttQ = (e) => {
        console.log(e.target.value)
        console.log(x[e.target.value])
        console.log(`/${e.target.value}`)
        // axios.get(`http://localhost:5000/${e.target.value}`).then(res => console.log(res))
        history.push({pathname:'/quiz', search:e.target.value})
    }

    return (<>
    {
        Object.keys(test).map(key => {
            console.log(key)
            return (<Quizbox x={key} onAttQ={onAttQ} arrQ={test[key]}/>)
        })
    }
    {console.log(test)}
    </>
    )
}

export default All
