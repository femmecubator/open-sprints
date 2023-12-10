"use strict";(self.webpackChunkopen_sprints=self.webpackChunkopen_sprints||[]).push([[6261],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1739:(e,t,a)=>{a.d(t,{Z:()=>n});const n={Akita:{id:"akita",emoji:"\ud83d\ude0a",goal_statement:"Enabling Async Work using Github Pages and CSS Styled Templates",project_tags:["Development","Github","Docusaurus","Documentation"],headline:"Project Akita: Implement and Build Docusaurus CMS Site",description:"Join this squad to set up a contribution docs site to enable aspiring designers and devs to join open-source project workathons",level_of_difficulty:"Beginner",roles:["Developer","Content Designer"]},beagle:{id:"beagle",emoji:"\ud83d\ude0e",goal_statement:"Launch a Reusable Component Library on Storybook",project_tags:["Development","Design","Github","DesignSystem","Figma"],headline:"Project Beagle: Hacking A Design System Component Library",description:"Join this squad to build the Equity UI component library. Developers joining this project will learn to deploy components on Storybook and a sneak peak of the DS process. By the end of the project, a set of 5 components will be built under the WeSparkle Brand Theme.",level_of_difficulty:"Intermediate",roles:["Designer","React Developer","Developer"]},corgi:{id:"corgi",emoji:"\ud83e\udd17",goal_statement:"Mapping User Journey for Project Aggregator Landing Page",project_tags:["Research","UX Design","Figma"],headline:"Project Corgi: Mapping User Journey for Project Aggregator Landing Page",description:"Refine and future proof the site\u2019s features driven by UX research methods like User Journey, JBTD and Empathy Maps",level_of_difficulty:"Intermediate",roles:["UX Designer","UX Researcher"]},dachshund:{id:"dachshund",emoji:"\ud83d\ude07",goal_statement:"Content Design for Design Systems",project_tags:["Content Design","Design System","Figma"],headline:"Project Dachshund: Intro to Content Design System Workshop",description:"This intro workshop is an audit work on Content Design Systems. Learn to content strategy for designs systems in an Enterprise scale.",level_of_difficulty:"Intermediate",roles:["Content Designer","UI Designer","Researcher"]},eurasier:{id:"eurasier",emoji:"\ud83e\udd7a",goal_statement:"Accessibility Annotation Tools for Designers",project_tags:["UX Design","Accessibility","Figma"],headline:"Project Eurasier: Practical Accessibility Tools for Designers",description:"In this workshop, designers will learn the basics of how to annotate their work for accessbility",level_of_difficulty:"Beginner",roles:["UX designer","Accessibility Specialist","Developer"]}}},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6550),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=k({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var h=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},2656:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294);const r="container_hhg0",l="tagList_Fwf8",o=e=>{let{goalStatement:t,projectTags:a}=e;const o=a.map((e=>n.createElement("li",{key:e},"#",e)));return n.createElement("div",{className:r},t,n.createElement("ul",{className:l},o))}},3757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>w,contentTitle:()=>v,default:()=>T,frontMatter:()=>f,metadata:()=>y,toc:()=>N});var n=a(7462),r=(a(7294),a(3905)),l=a(2656),o=a(4866),i=a(5162),s=a(1739);const u={toc:[{value:"Summary",id:"summary",level:2},{value:"Project Name Trivia",id:"project-name-trivia",level:2},{value:"Work Plan Overview",id:"work-plan-overview",level:2},{value:"Deliverable",id:"deliverable",level:3},{value:"Current State",id:"current-state",level:3},{value:"Team Goal",id:"team-goal",level:3},{value:"Proposal",id:"proposal",level:2},{value:"Constraints and Challenges",id:"constraints-and-challenges",level:2}]},c="wrapper";function p(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("br",null),(0,r.kt)("h3",null,l.headline),(0,r.kt)("p",null,l.description),(0,r.kt)("p",null,(0,r.kt)("u",null,"Level of Difficulty: ",(0,r.kt)("span",null,l.level),(0,r.kt)("br",null),"Role: ",(0,r.kt)("span",null,l.roles.join(", ")))),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Akita the dog",src:a(6316).Z,width:"600",height:"400"}))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"project-name-trivia"},"Project Name Trivia"),(0,r.kt)("p",null,"This feature is named after the Akita dog."),(0,r.kt)("p",null,"The Akita is a muscular, double-coated dog of ancient Japanese lineage famous for\ntheir dignity, courage, and loyalty. In their native land, they're venerated as family\nprotectors and symbols of good health, happiness, and long life."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"work-plan-overview"},"Work Plan Overview"),(0,r.kt)("h3",{id:"deliverable"},"Deliverable"),(0,r.kt)("p",null,"Develop a documentation site for Open Sprints, a collaborative workspace for digital content editors, hackathon participants (aspiring designers and developers) and experienced mentors."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"current-state"},"Current State"),(0,r.kt)("p",null,"The landing page is in pre-launch phase. It contains an event launch messaging that enables participation from volunteers (quick definition, roadmap, get involved). Outside of the landing page, Open Sprints is a community hackathon event that has not launched yet."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"team-goal"},"Team Goal"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Open Sprints mission is to teach early-career techies gain confidence in building within an agile-driven environment.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"proposal"},"Proposal"),(0,r.kt)("p",null,"Open Sprints landing page may have gaps in the experience. Ensure that the experience has a way for volunteer and mentors to sign up and so that partners also understand the overall mission and vision of both the community event and the long term goals of the org."),(0,r.kt)("br",null),(0,r.kt)("p",null,"Ultimately, our call to action is to align the messaging to different set of target audience:"),(0,r.kt)("p",null,"1) enable application process for project mentors "),(0,r.kt)("p",null,"2) attract volunteers who will be maintainers of the site (Markdown content editors, PR Reviews, General Maintenance)"),(0,r.kt)("p",null,"3) provide a way for participants to join projects and in-person workathon."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"constraints-and-challenges"},"Constraints and Challenges"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dynamic data or Third-party API embedding. The system should be able to string the Airtable Form into the landing page"),(0,r.kt)("li",{parentName:"ul"},"Think ahead for sustainable solutions and downstream maintenance. For example, the contributor page may have to be built manually now, but can be refined later to use Airtable gallery view embedding on a page"),(0,r.kt)("li",{parentName:"ul"},"Tech team should be able to plan the maturity path and phase what's MVP and what's beyond scope for these experiences.")))}p.isMDXComponent=!0;const d={toc:[{value:"Project Akita Squad",id:"project-akita-squad",level:2},{value:"Web Development",id:"web-development",level:3},{value:"Design",id:"design",level:3},{value:"Project Management",id:"project-management",level:3}]},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"project-akita-squad"},"Project Akita Squad"),(0,r.kt)("br",null),(0,r.kt)("p",null,"Interested in this project? Read up on how to get started as a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/15IP7U6HckzK95E3_31ZSC3cMahMy4oIv75tNoeEFNK4/edit#heading=h.suycrpi97scl"},"contributor.")," "),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"web-development"},"Web Development"),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Carlo Fernando"),(0,r.kt)("td",{parentName:"tr",align:null},"Mentor / Engineer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.linkedin.com/in/carlofernando/"},"LinkedIn"))))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"design"},"Design"),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Krizia Fernando"),(0,r.kt)("td",{parentName:"tr",align:null},"Mentor / UX Designer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.linkedin.com/in/kriziaf/"},"LinkedIn"))))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"project-management"},"Project Management"),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sherouk Omara"),(0,r.kt)("td",{parentName:"tr",align:null},"Mentor / Project Manager"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.linkedin.com/in/sheroukomara/"},"LinkedIn"))))),(0,r.kt)("br",null))}k.isMDXComponent=!0;const g={toc:[{value:"Project Akita Assets",id:"project-akita-assets",level:3}]},h="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"project-akita-assets"},"Project Akita Assets"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Asset"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Link"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tasks and Stories"),(0,r.kt)("td",{parentName:"tr",align:null},"Scrum-ban Board"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://trello.com/invite/b/BQkIVxo5/ATTIe980ec5e505f26a5abc60326d66095fdE3E6F4CF/open-sprints-project-akita"},"Trello"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Working File"),(0,r.kt)("td",{parentName:"tr",align:null},"Figma File"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.figma.com/files/project/93230623/Open-Sprints---Project-Akita?fuid=1094041426804931731"},"Figma"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Roadmap"),(0,r.kt)("td",{parentName:"tr",align:null},"Figjam Board"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.figma.com/file/tPKGz1YkNENDrEM0Tlgx1V/Roadmap-for-Akita?type=whiteboard&node-id=0%3A1&t=SKIDqLYlYgMEMsSv-1"},"Figma"))))),(0,r.kt)("br",null))}b.isMDXComponent=!0;const f={id:"projects-akita",title:"",sidebar_label:"Akita",sidebar_position:1,hide_table_of_contents:!0},v=void 0,y={unversionedId:"projects/akita/projects-akita",id:"projects/akita/projects-akita",title:"",description:"<Banner",source:"@site/docs/projects/akita/akita.mdx",sourceDirName:"projects/akita",slug:"/projects/akita/",permalink:"/docs/projects/akita/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"projects-akita",title:"",sidebar_label:"Akita",sidebar_position:1,hide_table_of_contents:!0},sidebar:"projectsSideBar",previous:{title:"Projects",permalink:"/docs/projects/"},next:{title:"Beagle",permalink:"/docs/projects/beagle/"}},w={},N=[],j={toc:N},D="wrapper";function T(e){let{components:t,...a}=e;return(0,r.kt)(D,(0,n.Z)({},j,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{goalStatement:s.Z.Akita.goal_statement,projectTags:s.Z.Akita.project_tags,mdxType:"Banner"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"summary",label:"Summary",default:!0,mdxType:"TabItem"},(0,r.kt)(p,{headline:s.Z.Akita.headline,description:s.Z.Akita.description,level:s.Z.Akita.level_of_difficulty,roles:s.Z.Akita.roles,mdxType:"Summary"})),(0,r.kt)(i.Z,{value:"updates",label:"Updates",default:!0,mdxType:"TabItem"},(0,r.kt)(b,{mdxType:"Updates"})),(0,r.kt)(i.Z,{value:"contributors",label:"Contributors",mdxType:"TabItem"},(0,r.kt)(k,{mdxType:"Contributors"}))))}T.isMDXComponent=!0},6316:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/akita-6d3201bf81cf506b768d96d30d62d03d.jpeg"}}]);