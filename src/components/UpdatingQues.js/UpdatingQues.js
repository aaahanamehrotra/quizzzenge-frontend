import React from 'react'

const UpdatingQues = (props) => {
    return (
        <div>
            <input placeholder="Question" value={props.updatingQuesSt} onChange={props.changingUpdatingQuesSt}></input>
            <button onClick={props.updatedQues} value={props.updatingQuesSt}>Done</button>
        </div>
    )
}

export default UpdatingQues
