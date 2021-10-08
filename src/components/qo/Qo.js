import React from 'react'
import { useState } from 'react'
import Question from '../Question/Question'
import AddOption from '../AddOption/AddOption'
import AddingOption from '../AddingOption/AddingOption'
import Option from '../Option/Option'
import UpdatingQues from '../UpdatingQues.js/UpdatingQues'
import Options from '../Options/Options'

const Qo = (props) => {
  // options
  const [addingOpt, setAddingOpt] = useState(false)
  const startAddingOpt = () =>{
    setAddingOpt(!addingOpt)
  }
  const addedOpt = () =>{
    console.log("working")
    console.log([...props.qna.options, addingOptSt])
    setAddingOpt(!addingOpt)
    let objTemp = {...props.qna, options:[...props.qna.options, addingOptSt]}
    let arrFin = [...props.qnas]
    arrFin = arrFin.map(function(item) { return item === props.qna ? objTemp : item; });
    console.log(arrFin)
    setAddingOptSt("")
    props.setQnas(arrFin)
}

const [addingOptSt, setAddingOptSt] = useState("")

const changingAddingOptSt = (e) => {
    setAddingOptSt(e.target.value)
}

const deleteOpt = (e) =>{
  let optToDel = e.currentTarget.value
  console.log([...props.qna.options, addingOptSt])
  let objTemp = {...props.qna, options:[...props.qna.options.filter(option => option !== optToDel) ]}
  let arrFin = [...props.qnas]
  arrFin = arrFin.map(function(item) { return item === props.qna ? objTemp : item; });
  console.log(arrFin)
  props.setQnas(arrFin)
}

const setAsCorr = (e) =>{
  console.log("setting")
  console.log(e.currentTarget.value)
  let objTemp = {...props.qna, correct:e.currentTarget.value}
  let arrFin = [...props.qnas]
  arrFin = arrFin.map(function(item) { return item === props.qna ? objTemp : item; });
  props.setQnas(arrFin)
}

// Upd Ques
const [updatingQues, setupdatingQues] = useState(false)
const startupdatingQues = () =>{
    setupdatingQues(!updatingQues)
  }
const [updatingQuesSt, setupdatingQuesSt] = useState(props.qna.question)
const updatedQues = (e) => {
  setupdatingQues(!updatingQues)
  let newQues = e.currentTarget.value
  let objTemp = {...props.qna, question: newQues}
  let arrFin = [...props.qnas]
  arrFin = arrFin.map(function(item) { return item === props.qna ? objTemp : item; });
  console.log(arrFin)
  props.setQnas(arrFin)
}
const changingUpdatingQuesSt = (e) => {
    setupdatingQuesSt(e.target.value)
  }
  

  return (
    <div>
      {!updatingQues 
      ? <Question qna={props.qna} delQues={props.delQues} startupdatingQues={startupdatingQues}/>
      : <UpdatingQues updatingQuesSt={updatingQuesSt} updatedQues={updatedQues} changingUpdatingQuesSt={changingUpdatingQuesSt}/>}
      {/* {props.qna.options.map(option => {
            return(<Option option={option} deleteOpt={deleteOpt} qna={props.qna} setAsCorr={setAsCorr}/>)
    })} */}
    <Options deleteOpt={deleteOpt} qna={props.qna} setAsCorr={setAsCorr} qnas={props.qnas} setQnas={props.setQnas}/>
      {!addingOpt 
      ? <AddOption startAddingOpt={startAddingOpt}/> 
      : <AddingOption addedOpt={addedOpt} changingAddingOptSt={changingAddingOptSt}/>}
      <hr></hr>
    </div>
  )
}

export default Qo
