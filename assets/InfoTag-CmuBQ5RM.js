import{j as c,b as n}from"./index-Bo5bMp5x.js";const f=e=>{const t={января:"01",февраля:"02",марта:"03",апреля:"04",мая:"05",июня:"06",июля:"07",августа:"08",сентября:"09",октября:"10",ноября:"11",декабря:"12"},[a,s,r]=e.split(" ");return`${a.padStart(2,"0")}.${t[s.toLowerCase()]}.${r}`},h=e=>e.replace("(","").replace(")",""),x=(e,t)=>{const a=new URLSearchParams;return e.forEach(s=>{const r=s.categories.filter(o=>o.state).map(o=>o.queryValue);r.length>0&&a.set(s.queryKey,r.join(","))}),t!=null&&t.length&&a.set("Name",t),a.toString().replace(/\+/g,"%20")},i=(e,t,a)=>{const s=e.trimStart().replace("  "," ").replace(/[^`~!@#$%^&*()\-_=+{}\\|;:'",.<>/?\w\sА-Яа-яёЁ_,.();:?<>={}№%^"/-]/g,"");s.length<=t&&a(s)},l="_tag_avu14_1",g={tag:l},p=({children:e,onClick:t=()=>{},className:a=""})=>c.jsx(c.Fragment,{children:c.jsx("div",{className:n(g.tag,a),onClick:t,children:e})});export{p as I,x as a,h as b,f as c,i as f};
