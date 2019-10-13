import React from 'react';
// stateless component! 

// if you use export default: u can only use Loading component..
// props component... u can use this 
 //const Loading=(props)=> <h2>{props.message} Loading...</h2>;

 // or this  message come to App.js in Loading component...
 const Loading=({message})=> <h2>{message} message come to App.js in Loading component...Loading....</h2>;

 export default Loading;

// many export component. dont use export default and use {Loading} from './Loading.js in App.js

// export const Loading=()=> <h2>Loading....</h2>;
// export const Loading=()=> <h2>Loading....</h2>;
// export const Loading=()=> <h2>Loading....</h2>;
// export const Loading=()=> <h2>Loading....</h2>;
// export const Loading=()=> <h2>Loading....</h2>;