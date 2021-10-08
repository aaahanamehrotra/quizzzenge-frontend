import React from 'react'

const Quizbox = (props) => {
    return (
        <div>
            <h1>quiz name</h1>
            <button value={props.x} onClick={props.onAttQ}>open</button>
        </div>
    )
}

export default Quizbox
