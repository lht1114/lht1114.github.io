import{s as o,r as e,j as t,P as l}from"./index-DTkg-yWw.js";function m(){return o({url:"/toplist"})}function u(){const[a,n]=e.useState([{},{},{},{},{},{},{},{}]),i=()=>{m().then(s=>{n(s.list)})};e.useEffect(()=>{i()},[]);const r=a.map((s,c)=>t.jsx("div",{className:"",children:t.jsx(l,{items:s})},s.id||c));return t.jsx("div",{className:"page-container",children:t.jsx("div",{className:"playList-content",children:r})})}export{u as default};
