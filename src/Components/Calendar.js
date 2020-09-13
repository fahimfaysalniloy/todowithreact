import React, { Component}from "react";
import SimpleReactCalendar from "simple-react-calendar";



class Calendar extends Component {
  state = { dateArray: [] }


  render() {
    const handleClick = (e)=> {

      const inputPopup = document.querySelector('.true');
      if(inputPopup){
       inputPopup.classList.remove('true');
       this.props.updateDateList(e);

      }



    }
    return (
      <SimpleReactCalendar onSelect= {handleClick} />

     );
  }
}

export default Calendar;
