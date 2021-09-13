import React from "react";

const styleEmp = {
  style:"width: 18rem;"
}
function CompanyEmp(props) {
  return (
    <>

<div className="container">
  <div className="row">
    <div className="col-sm">
    <div className="card" style={{styleEmp}}>
          <img src={`${props.empImg}`} className="card-img-top" alt="img-company" />
          <div className="card-body">
            <h5 className="card-title text-center">{props.empName}</h5>
            <p className="card-text text-center">
              {props.empStatus}
            </p>
            
          </div>
        </div>
    </div>
  </div>
</div>
    </>
  );
}

export default CompanyEmp;
