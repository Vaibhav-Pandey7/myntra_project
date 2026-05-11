function Card(props) {
  return (
      <div
        style={{ height: "auto", width: "150px", backgroundColor: "green",padding:"7px"}}
      >
        <img src={props.itempic} alt="tshirt image" style={{ height: "50%", width: "100%" }} />
            <div style={{ display: "flex", flexDirection: "column", textAlign: "center", marginTop: "10px", color: "white" }}>

                <h3 style={{ margin: "5px 0", cursor: "pointer" }}>T-Shirts</h3>
                <h2 style={{ margin: "5px 0", color: "yellow", cursor: "pointer" }}>{props.discount}</h2>
                <h4 style={{ margin: "10px 0 0 0", cursor: "pointer" }}>Shop now</h4>
                <h4 style={{ margin: "10px 0 0 0", cursor: "pointer" }}>Price:-{props.price}</h4>
            
            </div>
      </div>
  );
}


export default Card;