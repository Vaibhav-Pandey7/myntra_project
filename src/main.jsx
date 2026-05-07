import ReactDOM from "react-dom/client";
import tshirtImg from "./assets/image.png";
//needs
//header
//body
//footer
const item=["https://imgs.search.brave.com/npE0UkPeRXKNXMeo-1oQX_qPQhRq7xX1GrYdIktysNg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmlu/dG8tczMuZGlldHBp/eGVscy5uZXQvMjIy/Ml8xNzc0ODc1NzQz/LmpwZz9xdWFsaXR5/PTcwJmZvcm1hdD13/ZWJwJnc9MTkyMA","https://triprindia.com/cdn/shop/files/BBGRNOS-Z1401.jpg?v=1776334311&width=600","https://triprindia.com/cdn/shop/files/TBLRNOS-D2081_converted.jpg?v=1775461295&width=600"]
function Card(props) {
  return (
      <div
        style={{ height: "200px", width: "90px", backgroundColor: "green",padding:"7px"}}
      >
        <img src={props.itempic} alt="tshirt image" style={{ height: "50%", width: "100%" }} />
            <div style={{ display: "flex", flexDirection: "column", textAlign: "center", marginTop: "10px", color: "white" }}>

                <h3 style={{ margin: "5px 0", cursor: "pointer" }}>T-Shirts</h3>
                <h2 style={{ margin: "5px 0", color: "yellow", cursor: "pointer" }}>{props.firstdis}-{props.seconddis}% Off</h2>
                <h4 style={{ margin: "10px 0 0 0", cursor: "pointer" }}>Shop now</h4>
            
            </div>
      </div>
  );
}

function Body() {
    return(
<div style={{ 
      display: "flex", 
      justifyContent: "center", 
      flexWrap: "wrap", 
      gap: "20px", 
      padding: "100px 300px 50px 300px",
      width: "100vw",
      minHeight: "100vh" ,
      boxSizing: "border-box"
    }}>
      <Card itempic={item[0]} firstdis="40" seconddis="50" />
      <Card itempic={item[1]} firstdis="20" seconddis="80" />
      <Card itempic={item[0]} firstdis="50" seconddis="60" />
      <Card itempic={item[2]} firstdis="50" seconddis="80" />
      <Card itempic={item[1]} firstdis="50" seconddis="60" />
      <Card itempic={item[1]} firstdis="50" seconddis="80" />
      <Card itempic={item[1]} firstdis="20" seconddis="60" />
      <Card itempic={item[2]} firstdis="20" seconddis="80" />
      <Card itempic={item[0]} firstdis="20" seconddis="80" />
      <Card itempic={item[2]} firstdis="50" seconddis="60" />
      <Card itempic={item[1]} firstdis="50" seconddis="80" />
      <Card itempic={item[1]} firstdis="50" seconddis="80" />
      <Card itempic={item[2]} firstdis="50" seconddis="80" />
    </div>
  );

}

function Header() {return null;}
function Footer() {return null;}

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
