import React from 'react';

class TextEditor extends React.Component {
  constructor()
  {
    super();
    this.state={
      text:"",
      last:[],
      message:""
    }
  }
  handleChange = (e) =>
  {
    document.getElementById("btn-1").disabled = false; 
    this.setState({text:e.target.value});
    e.preventDefault();
  }
  handleAppend = (e)=>
  {
    
    if(this.state.text !== "")
    {
      this.setState({message:this.state.message + " " + this.state.text ,last:[...this.state.last , this.state.text] ,text:""});
      document.getElementById("btn-2").disabled = false; 
    }
    e.preventDefault();
  }
  handleUndo = (e) =>
  {
    if(this.state.message !== "")
    {
      this.setState({
        message:this.state.message.replace((" "+this.state.last[this.state.last.length-1]), ""),
        last:this.state.last.filter(e => e !== this.state.last[this.state.last.length-1])
      });
    }
    e.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <input className="word-input" type="text" value={this.state.text} onChange={this.handleChange} data-testid="word-input" />
          <button id="btn-1" data-testid="append-button" disabled ={this.state.text !== ""?false:true} onClick={this.handleAppend}>Append</button>
          <button id="btn-2"  data-testid="undo-button" disabled ={this.state.last.length !== 0?false:true} onClick={this.handleUndo}>Undo</button>
        </div>
        <div className="text-field" data-testid="text-field">{this.state.message}</div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
