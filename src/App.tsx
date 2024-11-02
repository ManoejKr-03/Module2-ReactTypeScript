import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { calculateAmountinstock, calculateAmountnotinstock, calculatehighestAmount, calculateTotal } from './util';

 export interface Sales
 {
   name:string,
   price:number,
   inStock:boolean
 }

 function App()
 {
   const[data,setData] = useState<Sales[]>([]);

   
   useEffect(()=>
   {
      (
        async ()=>{

   //       const result   = await axios.get<Sales[]>('./Sales.json');
     //fetch resullt.header
          // setData(result.data);

          const result   = await fetch('./Sales.json'); 
          const data: Sales[] = await result.json();
        setData(data);
        }
      )();


   },[]);


   return (
     <div className="App">
       <h1>Total transaction </h1> {calculateTotal(data)}
       <h1>Total ammount with instock</h1> {calculateAmountinstock(data)}
       <h1>Total ammount with instock</h1> {calculateAmountnotinstock(data)}
       <h1>Highest amount</h1> {calculatehighestAmount(data)}
       </div>
   )
 }

export default App;
 

