import React from "react";
import "./SortingViz.css";
// import logo from './logo.png';
import * as SortedAlgo from "../SortingAlgo/SortingAlgo" ;
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
 
  mergesort() {
    const jssortedarray = this.state.array.slice().sort((a,b)=> a-b);
    const sortedarray = SortedAlgo.MergeSort(this.state.array);
    console.log(sortedarray)
    console.log(arraysequal(jssortedarray, sortedarray));
  }
  insertionsort() {}
  selectionsort() {}
  bubblesort() {}
  heapsort() {}
  quicksort() {}
  countingsort() {}
  radixsort() {}  
  testAlgo(){
    for (let i =0; i<1000;i++) {
      const array = [];
      const len= randomIntFromInterval(1,1000);
      for (let i = 0; i < len; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
        // this.resetArray();
      }
      const jssortedarray = this.state.array.slice().sort((a,b)=> a-b);
    const sortedarray = SortedAlgo.MergeSort(this.state.array);
    // console.log(sortedarray)
    console.log(arraysequal(jssortedarray, sortedarray));
      }
    }
  
 
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
        <button onClick={() => this.resetArray()} className="button"> Reset Array </button>  
        <button onClick={() => this.resetArray()} className="button"> Start Array </button>  
        <button onClick={() => this.resetArray()} className="button"> Stop Array </button>  
        </div>

      </div>
        
     <div className="content">
      <div className="Sort-Buttons">   
      <button onClick={() => this.mergesort()} className="button"> Merge Sort </button>  
      <button onClick={() => this.resetArray()} className="button"> Selection Sort </button>  
      <button onClick={() => this.resetArray()} className="button"> Bubble Sort </button>  
      <button onClick={() => this.resetArray()} className="button"> Heap Sort </button>  
      <button onClick={() => this.resetArray()} className="button"> Quick Sort  </button>  
      <button onClick={() => this.resetArray()} className="button"> Insertion Sort </button>  
      <button onClick={() => this.resetArray()} className="button"> Counting Sort </button>  
      <button onClick={() => this.resetArray()} className="button"> Radix Sort </button>  
      <button onClick={() => this.testAlgo()} className="button"> Test </button>  
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
    <div className="footer"> Build with  love❤️</div>
    </div>
    );
  }
}
// how to randomize a number in java script from stack overflow
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}

function arraysequal(arrayone, arraytwo)
{
  if(arrayone.length !== arraytwo.length) return false;
  for(let i=0; i<arrayone.length; i++)
  {
    if(arrayone[i] !==arraytwo[i]) return false;

  }
  return true;
}