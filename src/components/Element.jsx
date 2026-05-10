function Element(props) {
  if (props.typ === "search") {
    return (
      <input 
        type="text" 
        placeholder={props.placeholder} 
        style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid gray",marginLeft: "auto", marginRight: "20px" }} 
      />
    );
  }else if(props.typ==="img"){
    return (<img src={props.placeholder} style={{ height: "50px", marginRight: "30px",}} alt="Myntra Logo"/>);
  }else if(props.typ==="icon"){
    return (
      <div style={{margin: "0 15px 0px 15px",display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column",gap:"1px"}} >
        <img  src={props.placeholder} style={{ cursor:"pointer",height:"20px",width:"20px"}} alt="Profile logo"/>
        <p style={{margin:"0px"}}>{props.tex}</p>
      </div>
    );

  }

  return (
    <h4 style={{ cursor: "pointer", margin: "0 15px", fontSize: "14px", fontWeight: "bold" }}>
      {props.placeholder}
    </h4>
  );
}


export default Element;