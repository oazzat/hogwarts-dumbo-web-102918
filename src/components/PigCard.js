import React from "react"

const weightKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
const medal = 'highest medal achieved'
const PigCard = (props) =>{

this.setDisp = () =>{
if(props.hog.disp === "block"){

  return "block"
}
else{
  return "none"
}
}

  return (
    <div >
      <h3>{props.hog.name} </h3>
      <img onClick={() => props.showInfo(props.hog)} src={require (`../hog-imgs/${props.hog.name.replace(/ /g,"_").toLowerCase()}.jpg`)}/>
      <div className="hog-info" style={{display: this.setDisp()}}>
      <p>{props.hog.specialty}</p>
      <p>{props.hog.greased?"Greased!":"Not Greased!"}</p>
      <p>Weight: {props.hog[weightKey]}</p>
      <p>Highest Medal: {props.hog[medal]}</p>
      </div>
      <br></br>
      <p>-----------------------------------------------------</p>
    </div>)
}

export default PigCard

// <img src={require (`../hog-imgs/${imgName}.jpg`)}/>
