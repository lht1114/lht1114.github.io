import{_ as f,h as o,r as l,C,i as v,c as j,j as n,k as N}from"./index-Dp1GDCg3.js";import{a as S}from"./singer-CskWGrcu.js";function $(t,e){var a=f({},t);return Array.isArray(e)&&e.forEach(function(i){delete a[i]}),a}const y=t=>{const{prefixCls:e,className:a,style:i,size:s,shape:c}=t,m=o({[`${e}-lg`]:s==="large",[`${e}-sm`]:s==="small"}),g=o({[`${e}-circle`]:c==="circle",[`${e}-square`]:c==="square",[`${e}-round`]:c==="round"}),r=l.useMemo(()=>typeof s=="number"?{width:s,height:s,lineHeight:`${s}px`}:{},[s]);return l.createElement("span",{className:o(e,m,g,a),style:Object.assign(Object.assign({},r),i)})},E=y,L=t=>{const{prefixCls:e,className:a,rootClassName:i,active:s,shape:c="circle",size:m="default"}=t,{getPrefixCls:g}=l.useContext(C),r=g("skeleton",e),[d,p,u]=v(r),x=$(t,["prefixCls","className"]),h=o(r,`${r}-element`,{[`${r}-active`]:s},a,i,p,u);return d(l.createElement("div",{className:h},l.createElement(E,Object.assign({prefixCls:`${r}-avatar`,shape:c,size:m},x))))},z=L;function b(t){const e=t.items,a=j(),i=()=>{a(`/singerDetail/${e.id}`)},s=n.jsxs("div",{onClick:()=>i(),children:[n.jsx("section",{className:"img_content",children:n.jsx(N.LazyLoadImage,{className:"img",src:(e==null?void 0:e.img1v1Url)+"?param=300y300",alt:e.name})}),n.jsx("p",{className:"name hover_line",children:e==null?void 0:e.name})]}),c=n.jsx("div",{className:"padding-100",children:n.jsx(z,{active:!0})});return n.jsx("div",{className:"singerList-container",children:e.name?s:c})}function _(){const[t,e]=l.useState([{},{},{},{},{},{},{},{},{}]),a=()=>{S().then(s=>{console.log("打印",s),e(s.artists)})};l.useEffect(()=>{a()},[]);const i=t.map((s,c)=>n.jsx(b,{items:s},c));return n.jsx("div",{className:"page-container",children:n.jsx("div",{className:"playList-content",children:i})})}export{_ as default};
