import React from 'react';
import Qo from "../qo/Qo";
import AddQuestion from "../AddQuestion/AddQuestion";
import AddingQuestion from "../AddingQuestion/AddingQuestion";
import { useState } from "react";
import { v4 as uuidv4} from 'uuid';
import axios from 'axios';
import './newquiz.scss'

const quizId = uuidv4()

function NewQuiz() {  
const publish = () => {
  qnas.forEach(qna => 
    // axios.post('https://sheet.best/api/sheets/1671e423-d4b7-4638-8ba1-09ed550c4d17', qna)
    axios.post('http://localhost:5000/', qna)
  .then(response => {
    console.log(response.data);
  }))
  axios.post('http://localhost:5000/name', {id:quizId, quizname:qname}).then(response => {
    console.log(response.data);
  })
}
const [qnas, setQnas] = useState([{id:uuidv4(), question: "question", options: ["1", "2", "3", "4"], correct:"1", quizId:quizId}, {id:uuidv4(), question: "question", options: ["1", "2", "3", "4"], correct:"1", quizId:quizId}])
console.log(qnas)
const [addingQues, setAddingQues] = useState(false)
const startAddingQues = () =>{
    setAddingQues(!addingQues)
}

const [qname, setname] = useState("untited")

const addedQues = (e) =>{
    console.log(addingQuesSt)
    setAddingQues(!addingQues)
    let options = ["Option1"]
    setQnas([...qnas, {id:uuidv4(), question: addingQuesSt, options:options, correct:options[0], quizId:quizId}])
    setAddingQuesSt("")
    
}

const [addingQuesSt, setAddingQuesSt] = useState("")

const changingAddingQuesSt = (e) => {
    setAddingQuesSt(e.target.value)
}

const delQues = (e) => {
  console.log(e.target.value)
  setQnas(qnas.filter(item => item.id !== e.currentTarget.value))
}
const [changingName, setchangingName] = useState(false)
const nameChanged = (e) => {
  setchangingName(false)
  setname(e.target.value)
}

const [namestate, setnamestate] = useState(qname)
const startedChangingName = () => {
  setchangingName(!changingName)
}
  return (
    <div className="newquiz">
      {qname}
      {changingName ? <div><input value={namestate} onChange={(e)=>setnamestate(e.target.value)}></input><button value={namestate} onClick={nameChanged}>DONE</button></div>:<button onClick={startedChangingName}>UPD</button>}
        {qnas.map(qna => {
            return(<Qo qna={qna} qnas={qnas} setQnas={setQnas} delQues={delQues}/>)
    })}
    {!addingQues
      ? <AddQuestion addingQues={addingQues} startAddingQues={startAddingQues}/>
      : <AddingQuestion addingQues={addingQues} addedQues={addedQues} addingQuesSt={addingQuesSt} changingAddingQuesSt={changingAddingQuesSt}/>}
      <button onClick={publish}>PUBLISH</button>
    </div>
  );
}

export default NewQuiz;
