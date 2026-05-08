import ReactDOM from "react-dom/client";
import tshirtImg from "./assets/image.png";
import profileicon from "./assets/profile.svg";
import wishlisticon from "./assets/heart-outline.svg";
import bagicon from "./assets/bag.svg";
//needs
//header
//body
//footer
const item=["https://imgs.search.brave.com/npE0UkPeRXKNXMeo-1oQX_qPQhRq7xX1GrYdIktysNg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmlu/dG8tczMuZGlldHBp/eGVscy5uZXQvMjIy/Ml8xNzc0ODc1NzQz/LmpwZz9xdWFsaXR5/PTcwJmZvcm1hdD13/ZWJwJnc9MTkyMA","https://triprindia.com/cdn/shop/files/BBGRNOS-Z1401.jpg?v=1776334311&width=600","https://triprindia.com/cdn/shop/files/TBLRNOS-D2081_converted.jpg?v=1775461295&width=600"]

function Card(props) {
  return (
      <div
        style={{ height: "280px", width: "150px", backgroundColor: "green",padding:"7px"}}
      >
        <img src={props.itempic} alt="tshirt image" style={{ height: "50%", width: "100%" }} />
            <div style={{ display: "flex", flexDirection: "column", textAlign: "center", marginTop: "10px", color: "white" }}>

                <h3 style={{ margin: "5px 0", cursor: "pointer" }}>T-Shirts</h3>
                <h2 style={{ margin: "5px 0", color: "yellow", cursor: "pointer" }}>{props.discount}</h2>
                <h4 style={{ margin: "10px 0 0 0", cursor: "pointer" }}>Shop now</h4>
            
            </div>
      </div>
  );
}

const arr = [
  { cloth: "T-Shirt", offer: "40-80% Off" },
  { cloth: "T-Shirt", offer: "40-80% Off" },
  { cloth: "T-Shirt", offer: "40-50% Off" },
  { cloth: "T-Shirt", offer: "70-90% Off" },
  { cloth: "T-Shirt", offer: "40-50% Off" },
  { cloth: "T-Shirt", offer: "40-80% Off" },
  { cloth: "T-Shirt", offer: "10-20% Off" },
  { cloth: "T-Shirt", offer: "40-50% Off" },
  { cloth: "T-Shirt", offer: "10-20% Off" },
  { cloth: "T-Shirt", offer: "10-20% Off" },
  { cloth: "T-Shirt", offer: "70-90% Off" },
  { cloth: "T-Shirt", offer: "70-90% Off" },
  { cloth: "T-Shirt", offer: "70-90% Off" },
  { cloth: "T-Shirt", offer: "70-90% Off" },
  { cloth: "T-Shirt", offer: "10-20% Off" },
  { cloth: "T-Shirt", offer: "10-20% Off" }
];

function Body() {
    return(
<div style={{ 
      display: "flex", 
      justifyContent: "center", 
      flexWrap: "wrap", 
      gap: "20px", 
      padding: "100px 100px 50px 100px",
      width: "100vw",
      minHeight: "100vh" ,
      boxSizing: "border-box"
    }}>
      {/* <Card itempic={item[0]} firstdis="40" seconddis="50" />
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
      <Card itempic={item[2]} firstdis="50" seconddis="80" /> */}

      {
        arr.map((value,index)=>{
            return <Card key={index} itempic={item[Math.floor(Math.random()*3)]} discount={value.offer} />
        })
      }
    </div>
  );

}

const headerele = [
  { placeholder: "https://imgs.search.brave.com/vftizba2S3j3bFoltnBftFkXPEf_ggr-tqamog4d33k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhkLzQ2/LzBiLzhkNDYwYmFh/MzhlZTg4Y2IyNmI3/YjRhZTlhZGY2NzNl/LmpwZw", typ: "img" }, 
  { placeholder: "MEN", typ: "link" }, 
  { placeholder: "WOMEN", typ: "link" },
  { placeholder: "KIDS", typ: "link" },
  { placeholder: "HOME & LIVING", typ: "link" },
  { placeholder: "BEAUTY", typ: "link" },
  { placeholder: "STUDIO", typ: "link" },
  { placeholder: "Search for products, brands and more", typ: "search" },
  { placeholder: profileicon, typ: "icon",text:"Profile" },
  { placeholder: wishlisticon, typ: "icon",text:"Wishlist" },
  { placeholder: bagicon, typ: "icon",text:"Bag" }
];

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
    return (<img src={props.placeholder} style={{ height: "50px", marginRight: "30px", cursor: "pointer" }} alt="Myntra Logo"/>);
  }else if(props.typ==="icon"){
    return (
      <div style={{margin: "0 15px 0px 15px",display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column",gap:"1px"}} >
        <img cursor="pointer" src={props.placeholder} style={{height:"20px",width:"20px"}} alt="Profile logo"/>
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

function Header() {
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
      {headerele.map((item, index) => {
        return <Element key={index} typ={item.typ} placeholder={item.placeholder} tex={item.text}/>
      })}
    </div>
  )
}
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
