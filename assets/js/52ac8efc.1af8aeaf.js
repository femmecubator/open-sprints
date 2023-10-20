"use strict";(self.webpackChunkopen_sprints=self.webpackChunkopen_sprints||[]).push([[7108],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1739:(e,t,n)=>{n.d(t,{Z:()=>r});const r={Akita:{id:"akita",emoji:"\ud83d\ude0a",goal_statement:"Enabling Async Work using Github Pages and CSS Styled Templates",project_tags:["Development","Github","Docusaurus","Documentation"],headline:"Project Akita: Implement and Build Docusaurus CMS Site",description:"Join this squad to set up a contribution docs site to enable aspiring designers and devs to join open-source project workathons",level_of_difficulty:"Beginner",roles:["Frontend Developer","Content Designer"]},beagle:{id:"beagle",emoji:"\ud83d\ude0e",goal_statement:"Launch a Reusable Component Library on Storybook",project_tags:["Development","Design","Github","DesignSystem","Figma"],headline:"Project Beagle: Hacking A Design System Component Library",description:"Join this squad to build component libraries with elements published Figma. Devs joining this porject will learn to deploy components on Storybook. This Design System demo site will be developed for the WeSparkle Brand.",level_of_difficulty:"Intermediate",roles:["Designer","React Developer","Developer"]},corgi:{id:"corgi",emoji:"\ud83e\udd17",goal_statement:"Mapping User Journey for Project Aggregator Landing Page",project_tags:["Research","UX Design","Figma"],headline:"Project Corgi: Mapping User Journey for Project Aggregator Landing Page",description:"Refine and future proof the site\u2019s features driven by UX research methods like User Journey, JBTD and Empathy Maps",level_of_difficulty:"Intermediate",roles:["UX Designer","UX Researcher"]},dachshund:{id:"dachshund",emoji:"\ud83d\ude07",goal_statement:"Content Design for Design Systems",project_tags:["Content Design","Design System","Figma"],headline:"Project Dachshund: Intro to Content Design System Workshop",description:"This intro workshop is an audit work on Content Design Systems. Learn to content strategy for designs systems in an Enterprise scale.",level_of_difficulty:"Intermediate",roles:["Content Designer","UI Designer","Researcher"]},eurasier:{id:"eurasier",emoji:"\ud83e\udd7a",goal_statement:"Accessibility Annotation Tools for Designers",project_tags:["UX Design","Accessibility","Figma"],headline:"Project Eurasier: Practical Accessibility Tools for Designers",description:"In this workshop, designers will learn the basics of how to annotate their work for accessbility",level_of_difficulty:"Beginner",roles:["UX designer","Accessibility Specialist","Developer"]}}},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=b({queryString:n,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(d(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},2656:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294);const a="container_hhg0",o="tagList_Fwf8",l=e=>{let{goalStatement:t,projectTags:n}=e;const l=n.map((e=>r.createElement("li",{key:e},"#",e)));return r.createElement("div",{className:a},t,r.createElement("ul",{className:o},l))}},7546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>y,frontMatter:()=>p,metadata:()=>b,toc:()=>f});var r=n(7462),a=(n(7294),n(3905)),o=n(2656),l=n(4866),i=n(5162);const s={toc:[{value:"Summary",id:"summary",level:2},{value:"Project Name Trivia",id:"project-name-trivia",level:2},{value:"Work Plan Overview\u200b",id:"work-plan-overview",level:2},{value:"Deliverable\u200b",id:"deliverable",level:3},{value:"Current State\u200b",id:"current-state",level:3},{value:"Team Goal\u200b",id:"team-goal",level:3},{value:"Proposal\u200b",id:"proposal",level:2},{value:"Constraints\u200b",id:"constraints",level:2},{value:"Audience",id:"audience",level:2}]},u="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("br",null),(0,a.kt)("h3",null,o.headline),(0,a.kt)("p",null,o.description),(0,a.kt)("p",null,(0,a.kt)("u",null,"Level of Difficulty: ",(0,a.kt)("span",null,o.level),(0,a.kt)("br",null),"Role: ",(0,a.kt)("span",null,o.roles.join(", ")))),(0,a.kt)("br",null),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A beagle",src:n(9308).Z,width:"729",height:"486"}))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"project-name-trivia"},"Project Name Trivia"),(0,a.kt)("p",null,"This feature is named after the Beagle."),(0,a.kt)("p",null,"Beagle, a small hound dog breed popular as both a pet and a hunter. It looks like a small foxhound and has large brown eyes, hanging ears, and a short coat, usually a combination of black, tan, and white. The Beagle is a solidly built dog, heavy for its height. It generally excels as a rabbit hunter and is typically an alert, affectionate dog."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"work-plan-overview"},"Work Plan Overview\u200b"),(0,a.kt)("h3",{id:"deliverable"},"Deliverable\u200b"),(0,a.kt)("p",null,"Create a demo Component Library that is deployed on Storybook for WeSparkle.\nMVP build requires an estimated number 5 components, where a developer owns one component from build, test, document and publish."),(0,a.kt)("h3",{id:"current-state"},"Current State\u200b"),(0,a.kt)("p",null,"There's initial work on a Figma document that stores a collection of design data with global colors and typography that will serve as the stylesheet of the components. In the DS world, this is called a \u201cfoundations document\u201d. This document should be finalized in Figma exported as json code and published on a Design Token repo."),(0,a.kt)("h3",{id:"team-goal"},"Team Goal\u200b"),(0,a.kt)("p",null,"Expand frontend development and design skills by learning the Design System process"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"proposal"},"Proposal\u200b"),(0,a.kt)("p",null,"The brand we are using for this round is WeSparkle, a startup geared towards women entrepreneurs. "),(0,a.kt)("p",null,"Ultimately, our call to action is to build a WeSparkle Theme and share this to future clients needing to build a simple component library."),(0,a.kt)("p",null,"The deliverable is a working Storybook that can be used for future Design System projects."),(0,a.kt)("h2",{id:"constraints"},"Constraints\u200b"),(0,a.kt)("p",null," 1) Pre-work is needed for design to export the design tokens for color and type styles. Estimated ~1 month time is needed for pre-work. "),(0,a.kt)("p",null," 2) Provide swimlanes for the limited amount of time for component health. What is the actual time that it takes to ensure that the build is stable? "),(0,a.kt)("h2",{id:"audience"},"Audience"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React and Frontend Developers - with interest in frontend development and have React.JS knowledge"),(0,a.kt)("li",{parentName:"ul"},"UI Designers - with visual design skills, knows how to use Figma and flex their UI skills")))}c.isMDXComponent=!0;var d=n(1739);const p={id:"projects-beagle",title:"",sidebar_label:"Beagle",sidebar_position:2,hide_table_of_contents:!0},m=void 0,b={unversionedId:"projects/beagle/projects-beagle",id:"projects/beagle/projects-beagle",title:"",description:"<Banner",source:"@site/docs/projects/beagle/beagle.mdx",sourceDirName:"projects/beagle",slug:"/projects/beagle/",permalink:"/open-sprints/docs/projects/beagle/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"projects-beagle",title:"",sidebar_label:"Beagle",sidebar_position:2,hide_table_of_contents:!0},sidebar:"projectsSideBar",previous:{title:"Akita",permalink:"/open-sprints/docs/projects/akita/"},next:{title:"Corgi",permalink:"/open-sprints/docs/projects/corgi/"}},g={},f=[],h={toc:f},v="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(v,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{goalStatement:d.Z.beagle.goal_statement,projectTags:d.Z.beagle.project_tags,mdxType:"Banner"}),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"summary",label:"Summary",default:!0,mdxType:"TabItem"},(0,a.kt)(c,{headline:d.Z.beagle.headline,description:d.Z.beagle.description,level:d.Z.beagle.level_of_difficulty,roles:d.Z.beagle.roles,mdxType:"Summary"})),(0,a.kt)(i.Z,{value:"project-assets",label:"Project Assets",default:!0,mdxType:"TabItem"},"Coming soon!"),(0,a.kt)(i.Z,{value:"contributors",label:"Contributors",mdxType:"TabItem"},"Coming soon!")))}y.isMDXComponent=!0},9308:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/beagle-winter-b6176e363531590823386bfc763840e3.jpg"}}]);