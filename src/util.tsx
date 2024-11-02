import { json } from "stream/consumers";
import { Sales } from "./App";


export const calculateTotal = (data:Sales[]) =>{
    return data.reduce((acc,data) => (acc+data.price),0); 
}

export const calculateAmountinstock = (data:Sales[]) =>
{
    return data.filter(obj => obj.inStock).reduce((sum,value)=> sum+value.price,0);
}

export const calculateAmountnotinstock = (data:Sales[]) =>
{
    return data.filter(obj => !obj.inStock).reduce((sum,value)=> sum+value.price,0);
}

export const calculatehighestAmount  = (data:Sales[])=>{

    

    const highObj = data.reduce((high,item)=> item.price>high.price? item:high);

    return JSON.stringify(highObj);
}



