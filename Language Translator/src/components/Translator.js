import React from 'react';

class Translator extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            text:"",
            ans:""
        }
    }
    validateAns=()=>{
        if(this.props.translations.has(this.state.text))
            this.setState({ans:this.props.translations.get(this.state.text)});
        else
            this.setState({ans: ""});
            
    }
    handleChange=(e)=>{
        this.setState({
            text:e.target.value,
        },()=>{this.validateAns();
        });
    }
  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>input:</span>
            <input type="text" className="text-input" value={this.state.text} data-testid="text-input" onChange={this.handleChange}/>
          </div>
          <div className="input-container">
            <span>output:</span>
            <input type="text" className="text-output" value={this.state.ans !== "" ?this.state.ans:""} data-testid="text-output" readOnly />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
