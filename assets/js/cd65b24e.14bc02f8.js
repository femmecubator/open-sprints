"use strict";(self.webpackChunkopen_sprints=self.webpackChunkopen_sprints||[]).push([[5536],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1739:(e,t,r)=>{r.d(t,{Z:()=>n});const n={Akita:{id:"akita",emoji:"\ud83d\ude0a",goal_statement:"Enabling Async Work using Github Pages and CSS Styled Templates",project_tags:["Development","Github","Docusaurus","Documentation"],headline:"Project Akita: Implement and Build Docusaurus CMS Site",description:"Join this squad to set up a contribution docs site to enable aspiring designers and devs to join open-source project workathons",level_of_difficulty:"Beginner",roles:["HTML and CSS Frontend Developer","Content Designer"]},beagle:{id:"beagle",emoji:"\ud83d\ude0e",goal_statement:"Launch a Reusable Component Library on Storybook",project_tags:["Development","Design","Github","DesignSystem","Figma"],headline:"Project Beagle: Hacking A Design System Component Library",description:"Join this squad to build a component libraries to be created on Figma and deployed on Storybook. This Design System demo site will be developed for the WeSparkle Brand.",level_of_difficulty:"Intermediate",roles:["Designer","React Developer"]},corgi:{id:"corgi",emoji:"\ud83e\udd17",goal_statement:"Mapping User Journey for Project Aggregator Landing Page",project_tags:["Research","Product Development"],headline:"Project Corgi: Mapping User Journey for Project Aggregator Landing Page",description:"Refine and future proof the site\u2019s features driven by UX research methods like User Journey, JBTD and Empathy Maps",level_of_difficulty:"Intermediate",roles:["UX Designer","UX Researcher"]},dachshund:{id:"dachshund",emoji:"\ud83d\ude07",goal_statement:"Creating Themeable Design Tokens using Figma Variables",project_tags:["UI Design","DesignSystem","Figma"],headline:"Project Dachshund: Intro to Design Tokens for Designers",description:"Some description",level_of_difficulty:"Intermediate",roles:["Visual Designer","UI Designer"]},eurasier:{id:"eurasier",emoji:"\ud83e\udd7a",goal_statement:"Accessibility Testing for Designers",project_tags:["Development"],headline:"Project Eurasier: Practical Accessibility Tools for Designers",description:"Some description",level_of_difficulty:"Beginner",roles:["UI Designer","UX Designer"]}}},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),o=r(6010),i=r(2466),l=r(6550),s=r(1980),u=r(7392),c=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=g({queryString:r,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var b=r(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},2656:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);const a="container_hhg0",o="tagList_Fwf8",i=e=>{let{goalStatement:t,projectTags:r}=e;const i=r.map((e=>n.createElement("li",{key:e},"#",e)));return n.createElement("div",{className:a},t,n.createElement("ul",{className:o},i))}},1167:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>g,toc:()=>b});var n=r(7462),a=(r(7294),r(3905)),o=r(2656),i=r(4866),l=r(5162),s=r(1739);const u={toc:[{value:"Summary",id:"summary",level:2},{value:"Project Name Trivia",id:"project-name-trivia",level:2},{value:"Work Plan Overview",id:"work-plan-overview",level:2},{value:"Deliverable",id:"deliverable",level:3},{value:"Current State",id:"current-state",level:3},{value:"POV Statement and High-level Product Vision",id:"pov-statement-and-high-level-product-vision",level:3},{value:"Team Goal",id:"team-goal",level:3},{value:"Proposal",id:"proposal",level:2},{value:"Jobs to be done",id:"jobs-to-be-done",level:3},{value:"Scope",id:"scope",level:3},{value:"Constraints and Challenges",id:"constraints-and-challenges",level:2}]},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("br",null),(0,a.kt)("h3",null,o.headline),(0,a.kt)("p",null,o.description),(0,a.kt)("p",null,(0,a.kt)("u",null,"Level of Difficulty: ",(0,a.kt)("span",null,o.level),(0,a.kt)("br",null),"Role: ",(0,a.kt)("span",null,o.roles.join(", ")))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"project-name-trivia"},"Project Name Trivia"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A Pembroke Welsh Corgi",src:r(3771).Z,width:"729",height:"486"})),(0,a.kt)("p",null,"Pembroke Welsh Corgi is a strong, athletic, and lively little herder, the world's most popular herding breeds. At 10 to12 inches at the shoulder and 27 to 30 pounds, a well-built male Pembroke presents a big dog in a small package. They can be red, sable, fawn, and black and tan, with or without white markings. The Pembroke is a bright, sensitive dog who enjoys play with his human family and responds well to training."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"work-plan-overview"},"Work Plan Overview"),(0,a.kt)("h3",{id:"deliverable"},"Deliverable"),(0,a.kt)("p",null,"In this research, the team will: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"define critical phases to define in the Journey Map: ie. Onboarding, Editing, Deployment of Content on Github Pages"),(0,a.kt)("li",{parentName:"ul"},"synthesize and connect research-driven data, must be able to validate why certain features are needed to enable team sign ups (mentor volunteers + users)"),(0,a.kt)("li",{parentName:"ul"},"create alternate artifacts ie: a clear documentation to guide new users to join or post their own project")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"current-state"},"Current State"),(0,a.kt)("p",null,"The landing page today has very minimal information to introduce Open Sprints A.) as a project aggregator; and B.) a workathon event that enables new grads to work on projects within a team structure through seasonal fellowship work."),(0,a.kt)("h3",{id:"pov-statement-and-high-level-product-vision"},"POV Statement and High-level Product Vision"),(0,a.kt)("p",null,"Phase 1: Open Sprints is a workathon event and a digital workspace, that enables new grads to work on projects within a team structure. "),(0,a.kt)("p",null,"Phase 2: In the future, we want this space to be a resource site that grads can co-build together. Much like wikipedia - it becomes a user-generated content submission site. "),(0,a.kt)("p",null,"Moodboard and Inspiration - other user generated sites ",(0,a.kt)("a",{parentName:"p",href:"https://dev.to/"},"https://dev.to/")," and Course Hero."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"team-goal"},"Team Goal"),(0,a.kt)("p",null,"Refine and future proof the site\u2019s features driven by UX research methods."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"proposal"},"Proposal"),(0,a.kt)("p",null,"Before jumping on the journey map, team should get a clear understanding of who the users are, and what their motivation is for joining."),(0,a.kt)("h3",{id:"jobs-to-be-done"},"Jobs to be done"),(0,a.kt)("p",null,"What outcomes do grad fellows, contributors expect? Example questions. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"As a fellow, I apply to get accepted as for the annual workathon cohort"),(0,a.kt)("li",{parentName:"ul"},"As a code contributor, how do I get onboarded, edit / fork the Github repo and publish contribution"),(0,a.kt)("li",{parentName:"ul"},"As a workathon participant, is there an application process? Am I eligible?")),(0,a.kt)("h3",{id:"scope"},"Scope"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Focus will be on main users of Open Sprints: fellows and code contributors. Partners and Sponsors are out of scope."),(0,a.kt)("li",{parentName:"ul"},"Open Sprints work in a B2B model. We partner with training schools for coding and design, ie. Flatiron School NYC.")),(0,a.kt)("h2",{id:"constraints-and-challenges"},"Constraints and Challenges"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Content Gaps. Possible gaps in content on application journey, and contributing code. Currently, these information are hosted on Notion or read me docs. "),(0,a.kt)("li",{parentName:"ul"},"Platform limitation. the page is hosted on a docs site called Docusaurus for easy updates. Docusaurus does enable CSS customization but it\u2019s not a full CMS site. "),(0,a.kt)("li",{parentName:"ul"},"Architecture re-wiring is out of scope. Due to limitations of the platform, we can't tweak the IA of the site, unless re-design is backed up by key usability findings, and will be impactful for users."),(0,a.kt)("li",{parentName:"ul"},"Consider downstream maintenance. Content should be evergreen as updates might not be down frequently.")))}d.isMDXComponent=!0;const p={id:"projects-corgi",title:"",sidebar_label:"Corgi",sidebar_position:3,hide_table_of_contents:!0},m=void 0,g={unversionedId:"projects/corgi/projects-corgi",id:"projects/corgi/projects-corgi",title:"",description:"<Banner",source:"@site/docs/projects/corgi/corgi.mdx",sourceDirName:"projects/corgi",slug:"/projects/corgi/",permalink:"/open-sprints/docs/projects/corgi/",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"projects-corgi",title:"",sidebar_label:"Corgi",sidebar_position:3,hide_table_of_contents:!0},sidebar:"projectsSideBar",previous:{title:"Beagle",permalink:"/open-sprints/docs/projects/beagle/"},next:{title:"Dachshund",permalink:"/open-sprints/docs/projects/dachshund/"}},h={},b=[],f={toc:b},v="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(v,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{goalStatement:s.Z.corgi.goal_statement,projectTags:s.Z.corgi.project_tags,mdxType:"Banner"}),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"summary",label:"Summary",default:!0,mdxType:"TabItem"},(0,a.kt)(d,{headline:s.Z.corgi.headline,description:s.Z.corgi.description,level:s.Z.corgi.level_of_difficulty,roles:s.Z.corgi.roles,mdxType:"Summary"})),(0,a.kt)(l.Z,{value:"project-assets",label:"Project Assets",default:!0,mdxType:"TabItem"},"Coming soon!"),(0,a.kt)(l.Z,{value:"contributors",label:"Contributors",mdxType:"TabItem"},"Coming soon!")))}k.isMDXComponent=!0},3771:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/corgi-05978321acf34599a1e033066f6f7a6e.png"}}]);