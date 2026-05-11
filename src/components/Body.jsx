import Card from "./Card";
import { useState } from "react";

function Body(props) {
  const [A, setA] = useState(props.arr);
  const [menuVal, setmenuVal] = useState("default");


  const handleSort = (event) => {
    const val = event.target.value;
    let newArray = [...A]; //this is coz array and all are stored by refernce and if the memory/address of the variable is not changed react will now manipulate the dom in case of number it works as they are stoed by value
    
    setmenuVal(val);
    if (val === 'a') {
      newArray.sort((a, b) => a.price - b.price);
      setA(newArray);
    } else if (val === 'd') {
      newArray.sort((a, b) => b.price - a.price);
      setA(newArray);
    } else if (val === 'reset') {
      setA(props.arr);
      setmenuVal("default");
    }
  };

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
  return (

    <div>
      <div style={{ height: "20px", padding: "60px 0px 0px 180px" }}>
        
        {/* 4. The onChange goes on the select! */}
        <select value={menuVal} onChange={handleSort}>
          <option value="default" disabled>
            Sort By:-
          </option>
          <option value="a">Price: low to high</option>
          <option value="d">Price: high to low</option>
          <option value="reset">Reset</option>
        </select>

      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          padding: "50px 100px 50px 100px",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        {A.map((value, index) => {
          return (
            <Card
              key={index}
              itempic={props.item[Math.floor(Math.random() * 3)]}
              discount={value.offer}
              price={value.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Body;

