import{n as i,m,r as o,j as a}from"./index-DTkg-yWw.js";function u(){const c=i(),[s,e]=m();o.useState(""),console.log("location",c),console.log("params",s);const n=t=>{e({q:s.get("q"),t})};o.useEffect(()=>{let t=s.get("t")||"综合";e({q:s.get("q"),t})},[s]);const r=["综合","歌手","单曲","专辑","MV","歌单","用户"].map((t,l)=>a.jsx("div",{className:s.get("t")===t?"isActive list":"list",onClick:()=>n(t),children:t},l));return a.jsxs("div",{className:"page-container",children:[a.jsx("div",{className:"flex topTab",children:r}),"搜索",s.get("q")]})}export{u as default};
