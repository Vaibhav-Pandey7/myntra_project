import Element from "./Element";

function Header(props) {
  return (
    <div style={{ 
      position: "sticky", 
      top: "0px", 
      backgroundColor: "white", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      padding: "20px",
      boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
    }}>
      {(props.head).map((item, index) => {
        return <Element key={index} typ={item.typ} placeholder={item.placeholder} tex={item.text}/>
      })}
    </div>
  )
}   

export default Header;