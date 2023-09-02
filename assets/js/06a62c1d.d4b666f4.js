"use strict";(self.webpackChunkopen_sprints=self.webpackChunkopen_sprints||[]).push([[5721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1739:(e,t,n)=>{n.d(t,{Z:()=>r});const r={Akita:{id:"akita",emoji:"\ud83d\ude0a",goal_statement:"Enabling Async Work using Github Pages and CSS Styled Templates",project_tags:["Development","Github","Docusaurus","Documentation"],headline:"Project Akita: Implement and Build Docusaurus CMS Site",description:"Join this squad to set up a contribution docs site to enable aspiring designers and devs to join open-source project workathons",level_of_difficulty:"Beginner",roles:["HTML and CSS Frontend Developer","Content Designer"]},beagle:{id:"beagle",emoji:"\ud83d\ude0e",goal_statement:"Launch a Reusable Component Library on Storybook",project_tags:["Development","Design","Github","DesignSystem","Figma"],headline:"Project Beagle: Hacking A Design System Component Library",description:"Join this squad to build a component libraries to be created on Figma and deployed on Storybook. This Design System demo site will be developed for the WeSparkle Brand.",level_of_difficulty:"Intermediate",roles:["Designer","React Developer"]}}},7422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>S,default:()=>T,frontMatter:()=>P,metadata:()=>C,toc:()=>x});var r=n(7462),o=n(7294),a=n(3905);const l="container_ZKmo",i=()=>o.createElement("div",{className:l},"Search Projects"),c="title_oAu7",s=e=>{let{children:t}=e;return o.createElement("div",{className:c},t)};var u=n(6550);const p="container_K3Py",d="banner_lcnZ",m="info_container_vOUt",f="headline_hPCs",b="join_button_sMkh",y=e=>{let{id:t,emoji:n,headline:r,description:a,level_of_difficulty:l,roles:i,color:c="#FFE0E0"}=e;const s=(0,u.k6)();return o.createElement("div",{className:p},o.createElement("div",{className:d,style:{backgroundColor:c}},n),o.createElement("div",{className:m},o.createElement("div",{className:f},r),o.createElement("div",null,a),o.createElement("div",null,"Level of Difficulty: ",l,o.createElement("br",null),o.createElement("u",null,"Role: ",i.join(", "))),o.createElement("button",{className:b,onClick:()=>s.push(t)},"Join this project")))},v="buttons_wrapper_aerA",j="projects_wrapper_JGK7";var g=n(1739);const _="button_Rekm",h=e=>{let{children:t,value:n,onClick:a,isSelected:l,type:i="button",...c}=e;return o.createElement("button",(0,r.Z)({},c,{value:n,className:_,type:i,onClick:a,style:{textDecoration:l&&"underline"}}),t)},E=new Set(["project_tags","level_of_difficulty","roles"]),k=["#FFE0E0","#FFEDCD","#DED8FF"],O=Object.values(g.Z).map(((e,t)=>({color:k[t%k.length],...e}))),D=()=>{const[e,t]=(0,o.useState)(null),n=(e=>{let{filters:t,selectedFilter:n,onClick:r}=e;const a=[];return Object.entries(t).forEach((e=>{let[t,l]=e;l.forEach((e=>{const l=`${t}__${e}`,i=n&&n.filter===t&&n.value.includes(e);a.push(o.createElement(h,{key:l,value:l,onClick:r,isSelected:i},e))}))})),a})({filters:(e=>{const t={};return Object.values(e).forEach((e=>{Object.entries(e).forEach((e=>{let[n,r]=e;E.has(n)&&(t[n]||(t[n]=new Set),Array.isArray(r)?t[n].add(...r):t[n].add(r))}))})),t})(g.Z),selectedFilter:e,onClick:e=>{const[n,r]=e.target.value.split("__");t({filter:n,value:r})}}),a=(e=>O.filter((t=>!e||t[e.filter].includes(e.value))))(e);return o.createElement("div",null,o.createElement(s,null,"Filters"),o.createElement("div",{className:v},n),o.createElement(s,null,"Projects"),o.createElement("div",{className:j},a.map(((e,t)=>o.createElement(y,(0,r.Z)({key:t},e))))))},P={id:"projects",title:"",sidebar_label:"Projects",sidebar_position:1,hide_table_of_contents:!0,pagination_next:null},S=void 0,C={unversionedId:"projects/projects",id:"projects/projects",title:"",description:"",source:"@site/docs/projects/projects.mdx",sourceDirName:"projects",slug:"/projects/",permalink:"/open-sprints/docs/projects/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"projects",title:"",sidebar_label:"Projects",sidebar_position:1,hide_table_of_contents:!0,pagination_next:null},sidebar:"projectsSideBar"},w={},x=[],F={toc:x},N="wrapper";function T(e){let{components:t,...n}=e;return(0,a.kt)(N,(0,r.Z)({},F,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i,{mdxType:"SearchProjectsBanner"}),(0,a.kt)(D,{mdxType:"ProjectsPageContent"}))}T.isMDXComponent=!0}}]);