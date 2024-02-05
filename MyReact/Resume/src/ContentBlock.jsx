// Assuming that you have already installed bootstrap 

function ResumePlatter({heading,content}){
    return (
        <>

<div className="card" style={{ width: "100%" }}>
  {/* <img src="..." className="card-img-top" alt="..." /> */}
  <div className="card-body">
    <h5 className="card-title">{heading}</h5>
    <p className="card-text">
      {content}
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>


        </>
    )
}

export default ResumePlatter