import{s as c,r as a,j as t,P as o}from"./index-Db5lzPrR.js";function l(){return c({url:"/toplist"})}function p(){const[n,i]=a.useState([{},{},{},{},{},{},{},{}]);a.useEffect(()=>{(()=>{l().then(s=>{console.log("信息",s),i(s.list)})})()},[]);const r=n.map((e,s)=>t.jsx("div",{className:"",children:t.jsx(o,{items:e})},e.id||s));return t.jsx("div",{className:"page-container",children:t.jsx("div",{className:"playList-content",children:r})})}export{p as default};
