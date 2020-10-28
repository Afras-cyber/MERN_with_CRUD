import React,{useState} from 'react'
const useBtn =(inti)=>{
    const [value,setValue]=useState(inti);

    return [
        value,
        ()=>{setValue(!value)}
    ]
}
export default useBtn;