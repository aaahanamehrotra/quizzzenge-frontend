import React from 'react';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Question = (props) => {
    return (
        <div>
            <h2>{props.qna.question}</h2>
            <button onClick={props.delQues} value={props.qna.id}>DELETE</button>
            <button onClick={props.startupdatingQues} value={props.qna.id}>UPD</button>
        </div>
    )
}

export default Question
