import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode} >
  <div className={`container-fluid bg-${props.mode} border border-rounded`}>
    <Link className="navbar-brand" to="/" style={{color : props.mode==='dark' ? 'white' : 'black'}}><b>{props.title}</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{color : props.mode==='dark' ? 'white' : 'black'}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"to="/" style={{color : props.mode==='dark' ? 'white' : 'black'}}><b>{props.home}</b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={{color : props.mode==='dark' ? 'white' : 'black'}}><em><b>{props.link}</b></em></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact" style={{color : props.mode==='dark' ? 'white' : 'black'}}><em><b>{props.contact}</b></em></Link>
        </li>
      </ul>
    <div className="my-3 mx-3" styles={props.mode}>
      <h5 className='mx-2' style={{display : 'inline'}}> <strong>Themes</strong> </h5>
    <div className="mx-1 btn btn-light" style={{height : '30px',width : '30px',border : '2px solid black'}} onClick={()=>{props.toggleMode('light')}}></div>
    <div className="mx-1 btn btn-dark" style={{height : '30px',width : '30px',border : '2px solid white'}} onClick={()=>{props.toggleMode('dark')}}></div>
    <div className="mx-1 btn btn-primary" style={{height : '30px',width : '30px',border : '2px solid black'}} onClick={()=>{props.toggleMode('primary')}}></div>
    <div className="mx-1 btn btn-secondary" style={{height : '30px',width : '30px',border : '2px solid black'}} onClick={()=>{props.toggleMode('secondary')}}></div>
    <div className="mx-1 btn btn-info" style={{height : '30px',width : '30px',border : '2px solid black'}} onClick={()=>{props.toggleMode('info')}}></div>
    <div className="mx-1 btn btn-warning" style={{height : '30px',width : '30px',border : '2px solid black'}} onClick={()=>{props.toggleMode('warning')}}></div>
    <div className="mx-1 btn btn-danger" style={{height : '30px',width : '30px',border : '2px solid black'}} onClick={()=>{props.toggleMode('danger')}}></div>
    <div className="mx-1 btn btn-success" style={{height : '30px',width : '30px',border : '2px solid black'}} onClick={()=>{props.toggleMode('success')}}></div>
</div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className={`btn btn-outline-success`} style={{color : props.mode==='dark' ? 'white' : 'black'}}type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

