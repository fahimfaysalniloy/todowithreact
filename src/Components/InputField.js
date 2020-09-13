import React, { Component } from 'react';

class InputField extends Component {





  handleCancel = (e) => {
    e.preventDefault();

    document.querySelector('.hidden').classList.add('true');
    this.props.removeLastDate();
    e.target.parentElement.reset();


  }
  handleSubmit = (e) => {
    e.preventDefault();

    const name =e.target.parentElement.name.value ;
    const desc = e.target.parentElement.description.value;
    const important = e.target.parentElement.important.checked;

    this.props.createWork(name,desc,important);



    document.querySelector('.hidden').classList.add('true');
    e.target.parentElement.reset();






  }
  render()

  {


    return (
      <div className='hidden true '>
        <h2>Add a Work!</h2>
        <form action="">
          <label htmlFor="name">Name:
            <input name='name' type="text" id='name' required/>
          </label>
          <label htmlFor="desc"> Description:
            <input name='description' type="text" id='desc' required/>
          </label>
          <label htmlFor="important"> Important?
            <input name='important' type="checkbox" id='important' />

          </label>
          <button onClick={this.handleSubmit} >ADD</button>
          <button id="cancel" onClick={this.handleCancel} >Cancel</button>

        </form>
      </div>
     );
  }
}

export default InputField;