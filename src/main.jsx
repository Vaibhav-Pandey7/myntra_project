import ReactDOM from "react-dom/client";
import tshirtImg from "./assets/image.png";
//needs
//header
//body
//footer

function Card() {
  return (
      <div
        style={{ height: "200px", width: "90px", backgroundColor: "green",padding:"7px"}}
      >
        <img src={tshirtImg} alt="tshirt image" style={{ height: "50%", width: "100%" }} />
            <div style={{ display: "flex", flexDirection: "column", textAlign: "center", marginTop: "10px", color: "white" }}>

                <h3 style={{ margin: "5px 0", cursor: "pointer" }}>T-Shirts</h3>
                <h2 style={{ margin: "5px 0", color: "yellow", cursor: "pointer" }}>40-80% Off</h2>
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
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
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
