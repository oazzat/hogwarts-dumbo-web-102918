import React, {Component} from "react"

export default class Search extends Component{

  state = {
    currentText: "",
    filteredList: this.props.filteredList
  }

  updateText = (e) =>{
    this.setState({currentText: e.target.value},()=>this.transform)

  }

  sortList = (e) =>{

    let newArr = this.props.filteredList.sort((first,second)=>{
      return first.name > second.name ? 1 : -1
    })
    this.props.updateSort(newArr)
  }

  transform = (e) =>{
    if (e.target.type === "text"){
      this.setState({currentText: e.target.value},()=>this.props.updateFilter(this.state.currentText))
    }
    else{
      this.sortList()
    }
  }

  render(){
    // this.filterArray(this.state.currentText)
    return(
      <div>
        <form>
          <input onChange={this.transform} type="text"  name="" placeholder="Search all Pigs..."/>
          <br></br>
          Sort By
          <select onChange={this.transform}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </form>
      </div>
    )
  }
}
