
import React, { useState } from 'react';

import "./App.css";
import Calendar from "./Components/Calendar";
import InputField from './Components/InputField';
import WorkList from './Components/WorkList';

class App extends React.Component {
  state = {
    dateList : [],
  }


  render() {

    const updateDateList = (date) => {
      const dateList =[...this.state.dateList];
      if(date){
        dateList.push({date});
        this.setState({dateList});
      }
    }
    const removeLastDate = ()=> {
      const dateList = [...this.state.dateList];
      dateList.pop();
      this.setState({dateList});

    }
    const createWork =(name,desc,important) => {
        const dateList = [...this.state.dateList];

        let lastWork = dateList[dateList.length-1] ;
        lastWork = {
          ...lastWork,
          name,
          desc,
          important
        }
        dateList.pop();
        dateList.push(lastWork);
        this.setState({dateList});
    }
    return (
      <div className="App">
        <Calendar updateDateList={updateDateList} />
        <InputField createWork={createWork} removeLastDate={removeLastDate}  />
        <WorkList dateList = {this.state.dateList} ></WorkList>
      </div>
    )
  }
}









export default App;
