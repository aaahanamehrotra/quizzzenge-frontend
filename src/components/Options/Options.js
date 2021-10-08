import React from 'react'
import { useState } from 'react'
import Option from '../Option/Option'
const Options = (props) => {



    return (
        <div>
            {props.qna.options.map(option => {
            return(<Option option={option} deleteOpt={props.deleteOpt} qna={props.qna} setAsCorr={props.setAsCorr} qnas={props.qnas} setQnas={props.setQnas}/>)
    })}
        </div>
    )
}

export default Options
