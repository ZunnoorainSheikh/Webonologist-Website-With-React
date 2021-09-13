import React from 'react'
import CompanyEmp from './CompanyEmp'
import "../../Components/style.css";
// import emp1 from "./img1.jpeg";
// import emp2 from "https://images.pexels.com/photos/3919865/pexels-photo-3919865.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
function OurTeam() {
    return (
        <>
            <h1 className="text-center text-secondary our-team">Our Team</h1>

            <div className="container my-3 flex-card-body">
            <CompanyEmp 
            empImg={`https://images.pexels.com/photos/3919865/pexels-photo-3919865.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`} 
            empName={"Waleed Ahmed"} 
            empStatus={"Senior Developer"}/>

            <CompanyEmp 
            empImg={`https://images.pexels.com/photos/3933415/pexels-photo-3933415.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`} 
            empName={"Hassan Ahmed"} 
            empStatus={"WordPress Developer"}/>

            <CompanyEmp 
            empImg={`https://images.pexels.com/photos/2863787/pexels-photo-2863787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`} 
            empName={"Bilal Sarwar"} 
            empStatus={"Game Developer"}/>
            
            </div>
        </>
    )
}

export default OurTeam
