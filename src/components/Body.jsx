import Card from "./Card";

function Body(props) {
    return(
<div style={{ 
      display: "flex", 
      justifyContent: "center", 
      flexWrap: "wrap", 
      gap: "20px", 
      padding: "100px 100px 50px 100px",
      width: "100%",
      minHeight: "100vh" ,
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
        (props.arr).map((value,index)=>{
            return <Card key={index} itempic={props.item[Math.floor(Math.random()*3)]} discount={value.offer} />
        })
      }
    </div>
  );

}

export default Body;