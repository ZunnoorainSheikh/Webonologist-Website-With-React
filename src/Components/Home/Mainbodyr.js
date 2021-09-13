import React from 'react'

function Mainbodyr(props) {
  return (
    <>
      <div className="container" id="main-body-reverse">
        <div className="row">
          <div className="col">
              <img src={props.imgsrc} alt="img-2" />
          </div>
          <div className="col">
            <div className="jumbotron">
              <h1 className="display-4 text-secondary ">{props.heading}</h1>
              <p className="lead text-justify">
                {props.description}
              </p>
              <hr className="my-4" />
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="/" role="button">
                  See More...
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mainbodyr
