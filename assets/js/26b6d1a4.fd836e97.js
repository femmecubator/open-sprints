"use strict";(self.webpackChunkopen_sprints=self.webpackChunkopen_sprints||[]).push([[6261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1739:(e,t,n)=>{n.d(t,{Z:()=>a});const a={Akita:{id:"akita",emoji:"\ud83d\ude0a",goal_statement:"Enabling Async Work using Github Pages and CSS Styled Templates",project_tags:["Development","Github","Docusaurus","Documentation"],headline:"Project Akita: Implement and Build Docusaurus CMS Site",description:"Join this squad to set up a contribution docs site to enable aspiring designers and devs to join open-source project workathons",level_of_difficulty:"Beginner",roles:["Frontend Developer","Content Designer"]},beagle:{id:"beagle",emoji:"\ud83d\ude0e",goal_statement:"Launch a Reusable Component Library on Storybook",project_tags:["Development","Design","Github","DesignSystem","Figma"],headline:"Project Beagle: Hacking A Design System Component Library",description:"Join this squad to build component libraries with elements published Figma. Devs joining this porject will learn to deploy components on Storybook. This Design System demo site will be developed for the WeSparkle Brand.",level_of_difficulty:"Intermediate",roles:["Designer","React Developer","Developer"]},corgi:{id:"corgi",emoji:"\ud83e\udd17",goal_statement:"Mapping User Journey for Project Aggregator Landing Page",project_tags:["Research","UX Design","Figma"],headline:"Project Corgi: Mapping User Journey for Project Aggregator Landing Page",description:"Refine and future proof the site\u2019s features driven by UX research methods like User Journey, JBTD and Empathy Maps",level_of_difficulty:"Intermediate",roles:["UX Designer","UX Researcher"]},dachshund:{id:"dachshund",emoji:"\ud83d\ude07",goal_statement:"Content Design for Design Systems",project_tags:["Content Design","Design System","Figma"],headline:"Project Dachshund: Intro to Content Design System Workshop",description:"This intro workshop is an audit work on Content Design Systems. Learn to content strategy for designs systems in an Enterprise scale.",level_of_difficulty:"Intermediate",roles:["Content Designer","UI Designer","Researcher"]},eurasier:{id:"eurasier",emoji:"\ud83e\udd7a",goal_statement:"Accessibility Annotation Tools for Designers",project_tags:["UX Design","Accessibility","Figma"],headline:"Project Eurasier: Practical Accessibility Tools for Designers",description:"In this workshop, designers will learn the basics of how to annotate their work for accessbility",level_of_difficulty:"Beginner",roles:["UX designer","Accessibility Specialist","Developer"]}}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=g({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var b=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},2656:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294);const r="container_hhg0",o="tagList_Fwf8",i=e=>{let{goalStatement:t,projectTags:n}=e;const i=n.map((e=>a.createElement("li",{key:e},"#",e)));return a.createElement("div",{className:r},t,a.createElement("ul",{className:o},i))}},8278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>j,frontMatter:()=>h,metadata:()=>f,toc:()=>v});var a=n(7462),r=(n(7294),n(3905)),o=n(2656),i=n(4866),l=n(5162),s=n(1739);const u={toc:[{value:"Summary",id:"summary",level:2},{value:"Project Name Trivia",id:"project-name-trivia",level:2},{value:"Work Plan Overview",id:"work-plan-overview",level:2},{value:"Deliverable",id:"deliverable",level:3},{value:"Current State",id:"current-state",level:3},{value:"Team Goal",id:"team-goal",level:3},{value:"Proposal",id:"proposal",level:2},{value:"Constraints and Challenges",id:"constraints-and-challenges",level:2}]},c="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("br",null),(0,r.kt)("h3",null,o.headline),(0,r.kt)("p",null,o.description),(0,r.kt)("p",null,(0,r.kt)("u",null,"Level of Difficulty: ",(0,r.kt)("span",null,o.level),(0,r.kt)("br",null),"Role: ",(0,r.kt)("span",null,o.roles.join(", ")))),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Akita the dog",src:n(6316).Z,width:"600",height:"400"}))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"project-name-trivia"},"Project Name Trivia"),(0,r.kt)("p",null,"This feature is named after the Akita dog."),(0,r.kt)("p",null,"The Akita is a muscular, double-coated dog of ancient Japanese lineage famous for\ntheir dignity, courage, and loyalty. In their native land, they're venerated as family\nprotectors and symbols of good health, happiness, and long life."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"work-plan-overview"},"Work Plan Overview"),(0,r.kt)("h3",{id:"deliverable"},"Deliverable"),(0,r.kt)("p",null,"Develop a documentation site for Open Sprints, a collaborative workspace for digital content editors, hackathon participants (aspiring designers and developers) and experienced mentors."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"current-state"},"Current State"),(0,r.kt)("p",null,"The landing page is in pre-launch phase. It contains an event launch messaging that enables participation from volunteers (quick definition, roadmap, get involved). Outside of the landing page, Open Sprints is a community hackathon event that has not launched yet."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"team-goal"},"Team Goal"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Open Sprints mission is to teach early-career techies gain confidence in building within an agile-driven environment.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"proposal"},"Proposal"),(0,r.kt)("p",null,"Open Sprints landing page may have gaps in the experience. Ensure that the experience has a way for volunteer and mentors to sign up and so that partners also understand the overall mission and vision of both the community event and the long term goals of the org."),(0,r.kt)("br",null),(0,r.kt)("p",null,"Ultimately, our call to action is to align the messaging to different set of target audience:"),(0,r.kt)("p",null,"1) enable application process for project mentors "),(0,r.kt)("p",null,"2) attract volunteers who will be maintainers of the site (Markdown content editors, PR Reviews, General Maintenance)"),(0,r.kt)("p",null,"3) provide a way for participants to join projects and in-person workathon."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"constraints-and-challenges"},"Constraints and Challenges"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dynamic data or Third-party API embedding. The system should be able to string the Airtable Form into the landing page"),(0,r.kt)("li",{parentName:"ul"},"Think ahead for sustainable solutions and downstream maintenance. For example, the contributor page may have to be built manually now, but can be refined later to use Airtable gallery view embedding on a page"),(0,r.kt)("li",{parentName:"ul"},"Tech team should be able to plan the maturity path and phase what's MVP and what's beyond scope for these experiences.")))}p.isMDXComponent=!0;const d={toc:[{value:"Akita Squad",id:"akita-squad",level:3}]},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"akita-squad"},"Akita Squad"),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Anh Vuong"),(0,r.kt)("td",{parentName:"tr",align:null},"Lead Engineer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.linkedin.com/in/vuonganht/"},"LinkedIn"))))),(0,r.kt)("br",null))}g.isMDXComponent=!0;const h={id:"projects-akita",title:"",sidebar_label:"Akita",sidebar_position:1,hide_table_of_contents:!0},b=void 0,f={unversionedId:"projects/akita/projects-akita",id:"projects/akita/projects-akita",title:"",description:"<Banner",source:"@site/docs/projects/akita/akita.mdx",sourceDirName:"projects/akita",slug:"/projects/akita/",permalink:"/open-sprints/docs/projects/akita/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"projects-akita",title:"",sidebar_label:"Akita",sidebar_position:1,hide_table_of_contents:!0},sidebar:"projectsSideBar",previous:{title:"Projects",permalink:"/open-sprints/docs/projects/"},next:{title:"Beagle",permalink:"/open-sprints/docs/projects/beagle/"}},k={},v=[],y={toc:v},w="wrapper";function j(e){let{components:t,...n}=e;return(0,r.kt)(w,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{goalStatement:s.Z.Akita.goal_statement,projectTags:s.Z.Akita.project_tags,mdxType:"Banner"}),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"summary",label:"Summary",default:!0,mdxType:"TabItem"},(0,r.kt)(p,{headline:s.Z.Akita.headline,description:s.Z.Akita.description,level:s.Z.Akita.level_of_difficulty,roles:s.Z.Akita.roles,mdxType:"Summary"})),(0,r.kt)(l.Z,{value:"project-assets",label:"Project Assets",default:!0,mdxType:"TabItem"},"Coming soon!\xa0"),(0,r.kt)(l.Z,{value:"contributors",label:"Contributors",mdxType:"TabItem"},(0,r.kt)(g,{mdxType:"Contributors"}))))}j.isMDXComponent=!0},6316:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/akita-6d3201bf81cf506b768d96d30d62d03d.jpeg"}}]);