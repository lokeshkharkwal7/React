// Video Component 

import './Video.css';

function Video({title,channel="Coder Dost",views,time,validate,id}) {
  console.log(id)
  return (
      <>
      <div className='container'>
      <div className="pic">
      <img src={`https://picsum.photos/id/${900+id}/200/200`} alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">
        {views} views <span>____</span> {time}  <div>  {validate ?'✅': null} </div>

      </div>
      </div>
      </>
     

      
  );
}

export default Video;



