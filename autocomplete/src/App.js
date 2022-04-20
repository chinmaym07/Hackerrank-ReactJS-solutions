import React, { useState, useEffect} from "react";
import './App.css';

function App() {
    const [inputString, setInputString] = useState('')
    const [parsedString, setParsedString] = useState('');
    let corrections = {
      'realy': 'really',
      'wierd': 'weird',
      "abc": "bc"
    }
    const handleChange = (e) => {
      let str = e.target.value;
      let strArr = str.split(' ');
      console.log(strArr);
      if(strArr.length <= 2)
      {
        setInputString(e.target.value);
        setParsedString(e.target.value);
      } else {
        let lastWord = strArr[strArr.length-2];
        let parsedWord = parse(lastWord);
        strArr[strArr.length - 2]= parsedWord;
        setParsedString(strArr.join(" "))
      }            
      
    }
    const parse = (word) => {
      if(corrections.hasOwnProperty(word))
        return corrections[word];
      else
        return word;
    }
    
  return (
    <div className="App">
      <textarea rows={20} cols={40} name="input-box" onChange={handleChange} value={parsedString}/>
    </div>
  );
}

export default App;
