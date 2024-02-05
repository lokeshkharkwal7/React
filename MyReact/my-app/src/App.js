// Main App

import "./App.css";
import { Navbar } from "./components/Form.jsx";

// import Video from "./components/Video";

import data from "./components/data/data.jsx";
// import CustomButton from "./Button";

console.log(data)
// const validate = true

function App() {
  // let obj = {
  //   id:1,
  //   title: "React JS tutorial",
  //   views: "999K",
  //   time: "1 year ago",
  //   channel: "Coder Dost",
  //   validate:true
  // };
  // return (
  //   <div className="App">

  //     <div>.</div>
  //     <h1 style={{color:'white'}}>Course Content</h1>
  //     <Video {...obj}></Video>
  //     <Video title="Node JS tutorial" views="100K" time="1 month ago" validate={true} id={2}></Video>
      
  //     <Video
  //       id={3}
  //       title="Mongo DB tutorial"
  //       views="1M"
  //       time="1 month ago"
  //       channel="Coder Dost"
  //       validate= {false}
  //     ></Video>
     
  //      {data.map(video => 
  //       <Video
  //       key = {video.id}
  //       id = {video.id}
  //       title= {video.title}
  //       views= {video.views}
  //       time={video.time}
  //       channel={video.channel}
  //       validate={video.validate}
  //       > </Video>
  //      )
  //     }

  
  //   <CustomButton type='primary' onClick = {()=>console.log('Button is clicked') }>Play</CustomButton>
      
  //   </div>
  // );

  return (
    <>
    Navbar
    </>

  )
}

export default App;
