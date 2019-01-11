import React, {Component} from "react"

import PigCard from "./PigCard"

export default class PigContainer extends Component {

  // const weightKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

  displayHogs = () =>{
    let newArr = this.props.allHogs.map((hog,ind) => {
      // hog.disp = "none"
      return <PigCard key={ind} hog={hog} showInfo={this.props.showInfo} />
    })
    return newArr
  }

  render(){
    return(
      <div>
        {this.displayHogs()}
      </div>
    )
  }

}


// name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog[]}
