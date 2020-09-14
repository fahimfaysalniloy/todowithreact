import React from 'react';

class WorkList extends React.Component {
  state = {  }

  render() {
    return (

        <ul id='render' >
           <li >
                    <p id='name'>Name</p>
                    <p id='desc'>Des</p>
                    <p id='date'>Date</p>
           </li>


          {this.props.dateList.map((obj)=>{
            if(obj.name) {
              const random = Math.random()*1000000000000000000;
              return(

                  <li key={random} imp={obj.important?'true':'false'} >
                    <p id='name'>{obj.name.toUpperCase()}</p>
                    <p id='desc'>{obj.desc.replace('  ','').toUpperCase()}</p>
                    <p id='date'>{String(obj.date).replace('2020 00:00:00 GMT+0600 (Bangladesh Standard Time)','')}</p>
                  </li>



              )
            }
            return (
              <p></p>
            )
          })}

        </ul>
    )







  }
}


export default WorkList;