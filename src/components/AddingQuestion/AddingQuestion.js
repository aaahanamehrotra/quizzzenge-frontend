import React from 'react'

const AddingQuestion = (props) => {
    return (
        <div>
            <input placeholder="Question" value={props.addingQuesSt} onChange={props.changingAddingQuesSt}></input>
            <button onClick={props.addedQues} value={props.addingQuesSt}>Done</button>
        </div>
    )
}

export default AddingQuestion
