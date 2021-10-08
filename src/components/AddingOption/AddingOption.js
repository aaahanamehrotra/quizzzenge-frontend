import React from 'react'

const AddingOption = (props) => {
    return (
        <div>
            <input placeholder="Option" value={props.addingOptSt} onChange={props.changingAddingOptSt}></input>
            <button onClick={props.addedOpt} value={props.addingOptSt}>Done</button>
        </div>
    )
}

export default AddingOption
