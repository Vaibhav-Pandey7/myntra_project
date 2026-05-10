import ReactDOM from "react-dom/client";
import tshirtImg from "./assets/image.png";
import profileicon from "./assets/profile.svg";
import wishlisticon from "./assets/heart-outline.svg";
import bagicon from "./assets/bag.svg";
import Header  from "./components/Header";
import Body from "./components/Body";
import Footer  from "./components/Footer";

//needs
//header
//body
//footer

const items=["https://imgs.search.brave.com/npE0UkPeRXKNXMeo-1oQX_qPQhRq7xX1GrYdIktysNg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmlu/dG8tczMuZGlldHBp/eGVscy5uZXQvMjIy/Ml8xNzc0ODc1NzQz/LmpwZz9xdWFsaXR5/PTcwJmZvcm1hdD13/ZWJwJnc9MTkyMA","https://triprindia.com/cdn/shop/files/BBGRNOS-Z1401.jpg?v=1776334311&width=600","https://triprindia.com/cdn/shop/files/TBLRNOS-D2081_converted.jpg?v=1775461295&width=600"]


const array = [
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

function App() {
  return (
    <>
      <Header head={headerele}/>
      <Body arr={array} item={items}/>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
