import React from 'react'

const AddOption = (props) => {
    return (
        <div>
            {/* {console.log(props)} */}
            <button onClick={props.startAddingOpt}>Add Option</button>
        </div>
    )
}

export default AddOption
