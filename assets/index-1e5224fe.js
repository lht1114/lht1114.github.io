import{_ as b,v as B,u as L,m as N,a as o,H as q,o as R,b as V,c as a,d as n,e as c,t as j,f as s,F as h,h as y,Q as k,g as w,w as F,W as P,X as T,j as D,T as E,i as H,p as J,k as O}from"./index-f21bb9dc.js";import{A as Q}from"./ArtistListItem-a5e9d28a.js";const x=i=>(J("data-v-9e0343c8"),i=i(),O(),i),W={class:"search_container"},X={key:0,class:"artist-content"},z=x(()=>c("p",{class:"title mt20 mb20"},"相关歌手",-1)),G={class:"artist grid grid-column-10"},K={class:"song_container"},U=x(()=>c("p",{class:"title mt20 mb20"},"相关歌曲",-1)),Y={key:0,class:"more_content flex align-center justify-center"},Z={__name:"index",setup(i){const S=B();L();const r=N(),l=o([]),t=o([]),p=o(50),d=o(0),_=o(!1),m=o(!1);function f(){P({keywords:r.query.name,limit:p.value,offset:d.value}).then(e=>{console.log("搜索结果  歌曲",e),t.value=[...t.value,...e.result.songs],_.value=t.value.length<e.result.songCount,m.value=!1})}function I(){window.localStorage.setItem("awaitList",JSON.stringify(t.value)),S.awaitPlayList=t.value}function g(){T({keywords:r.query.name}).then(e=>{l.value=e.result})}function A(){d.value=0,_.value=!1,l.value=[],t.value=[]}function C(){m.value=!0,d.value+=p.value,f()}return q(()=>r.query.name,e=>{e&&(A(),f(),g())},{deep:!0}),R(()=>{f(),g()}),(e,$)=>{const M=V("a-button");return a(),n("div",W,[c("h3",null,"根据 "+j(s(r).query.name)+" 搜索",1),s(l).artist&&s(l).artist.length>0?(a(),n("section",X,[z,c("div",G,[(a(!0),n(h,null,y(s(l).artist,(v,u)=>(a(),D(Q,{key:u,"artist-data":v},null,8,["artist-data"]))),128))])])):k("",!0),c("section",K,[U,(a(!0),n(h,null,y(s(t),(v,u)=>(a(),n("div",{key:u},[w(E,{"item-data":v,index:u,onChangeAwait:I},null,8,["item-data","index"])]))),128)),s(_)?(a(),n("div",Y,[w(M,{loading:s(m),onClick:C},{default:F(()=>[H("获取更多")]),_:1},8,["loading"])])):k("",!0)])])}}},ae=b(Z,[["__scopeId","data-v-9e0343c8"]]);export{ae as default};
