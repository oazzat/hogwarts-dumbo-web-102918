import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from "./PigContainer"
import Search from "./Search"

class App extends Component {

  state = {
    hogs: hogs,
    filteredHogs: hogs
  }

  showInfo = (curHog) =>{
    let newArr = [...this.state.hogs]

    newArr.map((hog) => {

      if (hog === curHog){

        hog.disp = "block"

        return hog

      }
        else{
          // console.log(hog.disp)
          hog.disp = "none"
          return hog
        }
    })
    // console.log(newArr)
    this.setState({hogs: newArr})
  }

  updateFilter = (curText) =>{
    let newArr = [...this.state.hogs]
    newArr = newArr.filter((hog) => hog.name.includes(curText))
    this.setState({filteredHogs: newArr})
  }

  updateSort = (sorted) => {
    this.setState({filteredHogs: sorted})
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <Search hogs={this.state.hogs} updateSort={this.updateSort} updateFilter={this.updateFilter} filteredList=(this.state.filteredHogs)/>
          <PigContainer allHogs={this.state.filteredHogs} showInfo={this.showInfo}/>
      </div>
    )
  }
}

export default App;
