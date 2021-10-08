import React from 'react'
import { useState } from 'react'
import UpdatingQues from '../UpdatingQues.js/UpdatingQues'

const Option = (props) => {

    const [updatingOpt, setupdatingOpt] = useState(false)
const startupdatingOpt = () =>{
    setupdatingOpt(!updatingOpt)
  }
const [updatingOptSt, setupdatingOptSt] = useState(props.option)
const updatedOpt = (e) => {
  setupdatingOpt(!updatingOpt)
  let newOpt = e.currentTarget.value
  console.log([...props.qna.options.map(option => option === props.option ? newOpt : option)])
  let newCorrect = props.option === props.qna.correct ? newOpt : props.qna.correct
  let objTemp = {...props.qna, options: [...props.qna.options.map(option => option === props.option ? newOpt : option)], correct:newCorrect}
  let arrFin = [...props.qnas]
  arrFin = arrFin.map(function(item) { return item === props.qna ? objTemp : item; });
  console.log(arrFin)
  props.setQnas(arrFin)
}
const changingUpdatingOptSt = (e) => {
    setupdatingOptSt(e.target.value)
  }
    return (
        <div>
        {!updatingOpt ? <div>
            <h5 style={props.option===props.qna.correct ? {color:"green"} : {}}>{props.option}</h5>
            <div>
            <button disabled={!(props.option !== props.qna.correct)} onClick={props.setAsCorr} value={props.option}>Tick</button>
            <button disabled={!(props.option !== props.qna.correct)} onClick={props.deleteOpt} value={props.option}>Delete</button>
            <button onClick={startupdatingOpt} value={props.option}>Update</button>
            </div>
        </div>
        :
        <div>
            <input placeholder="Question" value={updatingOptSt} onChange={changingUpdatingOptSt}></input>
            <button onClick={updatedOpt} value={updatingOptSt}>Done</button>
        </div>
    }
    </div>
    )
}

export default Option
