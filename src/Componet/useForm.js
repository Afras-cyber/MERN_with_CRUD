import React,{ useState }from 'react'

 const useForm=(inital)=>{
    const [values,setValue]=useState(inital);

    return[
        values,
        (e)=>{ setValue({
            ...values,
            [e.target.name]:e.target.value
        })}
]
}
export default useForm;
