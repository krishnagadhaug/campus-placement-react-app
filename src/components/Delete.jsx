import React from 'react'
import NavBar from './NavBar'

const Delete = () => {
  return (
    <div>
<NavBar/>
<div className="container">
    <h1><center><b>Delete student</b></center></h1>
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Registration Number</label>
<input type="text" className="form-control" />

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                    <button className="btn btn-danger mt-4">Delete</button>
                </div>
            </div>
        </div>
    </div>
</div>
    
    </div>
  )
}

export default Delete