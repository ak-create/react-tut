
import React from "react"

class Student extends React.Component{
 
    componentWillUnmount(){
        console.warn("Dom se bhar fek diya")
    }

    render(){
   
    return(
        <div>
            <h1>Student  </h1>
            <h2>Email</h2>
        </div>
    )
    }
}

export default Student