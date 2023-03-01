import React from "react";
import "./SortingViz.css";
// import logo from './logo.png';

export default class SortingViz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [], //main array
    };
  }
//loading first component -method allows us to execute the React code when the component is already placed in the DOM (Document Object Model)
  componentDidMount() {  
    this.resetArray();
  }

  // taking array elements and allowing duplicates to make sorting realistic
  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(randomIntFromInterval(25, 500));
    }
    this.setState({array});
  }
  // placed key to avoid render warning in console
  render() {
    const {array} = this.state;

    return (
      <div className="body">
      <div className="header">
      <div className="Logo">
        {/* <img src="/jsort/src/assets/images/logo.png" alt="Logo" /> */}
        {/* <img src="{logo}" alt="Logo" /> */}
        <h1>JSort</h1>
      </div>
        <div className="Op-Buttons">   
        <button onClick={() => this.resetArray()}> Reset Array </button>  
        </div>

      </div>


     <div className="content">
      <div className="Sort-Buttons">   
      <button onClick={() => this.resetArray()}> Merge Sort </button>  
      <button onClick={() => this.resetArray()}> Selection Sort </button>  
      <button onClick={() => this.resetArray()}> Bubble Sort </button>  
      <button onClick={() => this.resetArray()}> Heap Sort </button>  
      <button onClick={() => this.resetArray()}> Quick Sort  </button>  
      <button onClick={() => this.resetArray()}> Insertion Sort </button>  
      <button onClick={() => this.resetArray()}> Counting Sort </button>  
      <button onClick={() => this.resetArray()}> Radix Sort </button>  
      {/* <button onClick={() => this.resetArray()}> Merge Sort </button>  
      <button onClick={() => this.resetArray()}> Merge Sort </button>   */}
      </div>
      <div className="container">
        {array.map((value, idx) => (
         <div className="array-bars" key={idx} style={{ height: `${value}px` }}></div>
          //   {value}   
          // </div>
         ))}
    </div>
    </div>
    </div>
    );
  }
}
// how to randomize a number in java script from stack overflow
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}
