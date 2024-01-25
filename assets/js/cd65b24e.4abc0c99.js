"use strict";(self.webpackChunkopen_sprints=self.webpackChunkopen_sprints||[]).push([[5536],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1739:(e,t,n)=>{n.d(t,{Z:()=>a});const a={Akita:{id:"akita",emoji:"\ud83d\ude0a",goal_statement:"Enabling Async Work using Github Pages and CSS Styled Templates",project_tags:["Development","Github","Docusaurus","Documentation"],headline:"Project Akita: Implement and Build Docusaurus CMS Site",description:"Join this squad to set up a contribution docs site to enable aspiring designers and devs to join open-source project workathons",level_of_difficulty:"Beginner",roles:["Developer","Content Designer"]},beagle:{id:"beagle",emoji:"\ud83d\ude0e",goal_statement:"Launch a Reusable Component Library on Storybook",project_tags:["Development","Design","Github","DesignSystem","Figma"],headline:"Project Beagle: Hacking A Design System Component Library",description:"Join this squad to build the Equity UI component library. Developers joining this project will learn to deploy components on Storybook and a sneak peak of the DS process. By the end of the project, a set of 5 components will be built under the WeSparkle Brand Theme.",level_of_difficulty:"Intermediate",roles:["Designer","React Developer","Developer"]},corgi:{id:"corgi",emoji:"\ud83e\udd17",goal_statement:"Mapping User Journey for Project Aggregator Landing Page",project_tags:["Research","UX Design","Figma"],headline:"Project Corgi: Mapping User Journey for Project Aggregator Landing Page",description:"Refine and future proof the site\u2019s features driven by UX research methods like User Journey, JBTD and Empathy Maps",level_of_difficulty:"Intermediate",roles:["UX Designer","UX Researcher"]},dachshund:{id:"dachshund",emoji:"\ud83d\ude07",goal_statement:"Content Design for Design Systems",project_tags:["Content Design","Design System","Figma"],headline:"Project Dachshund: Intro to Content Design System Workshop",description:"This intro workshop is an audit work on Content Design Systems. Learn to content strategy for designs systems in an Enterprise scale.",level_of_difficulty:"Intermediate",roles:["Content Designer","UI Designer","Researcher"]},eurasier:{id:"eurasier",emoji:"\ud83e\udd7a",goal_statement:"Decentralized Web Tools for Designers and Devs",project_tags:["UX Design","Development","D.Web"],headline:"Project Eurasier: Intro to Decentralized Web",description:"In this workshop, participants will learn about Decentralized Web, its scope and principles",level_of_difficulty:"Beginner",roles:["UX designer","Strategist","Developer"]}}},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var b=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},2656:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const r="container_hhg0",o="tagList_Fwf8",l=e=>{let{goalStatement:t,projectTags:n}=e;const l=n.map((e=>a.createElement("li",{key:e},"#",e)));return a.createElement("div",{className:r},t,a.createElement("ul",{className:o},l))}},6730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>v,default:()=>S,frontMatter:()=>f,metadata:()=>y,toc:()=>N});var a=n(7462),r=(n(7294),n(3905)),o=n(2656),l=n(4866),i=n(5162),s=n(1739);const u={toc:[{value:"Summary",id:"summary",level:2},{value:"Project Name Trivia",id:"project-name-trivia",level:2},{value:"Work Plan Overview",id:"work-plan-overview",level:2},{value:"Deliverable",id:"deliverable",level:3},{value:"Current State",id:"current-state",level:3},{value:"POV Statement and High-level Product Vision",id:"pov-statement-and-high-level-product-vision",level:3},{value:"Team Goal",id:"team-goal",level:3},{value:"Proposal",id:"proposal",level:2},{value:"Jobs to be done",id:"jobs-to-be-done",level:3},{value:"Scope",id:"scope",level:3},{value:"Constraints and Challenges",id:"constraints-and-challenges",level:2}]},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("br",null),(0,r.kt)("h3",null,o.headline),(0,r.kt)("p",null,o.description),(0,r.kt)("p",null,(0,r.kt)("u",null,"Level of Difficulty: ",(0,r.kt)("span",null,o.level),(0,r.kt)("br",null),"Role: ",(0,r.kt)("span",null,o.roles.join(", ")))),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A Pembroke Welsh Corgi",src:n(3308).Z,width:"729",height:"486"}))),(0,r.kt)("h2",{id:"project-name-trivia"},"Project Name Trivia"),(0,r.kt)("p",null,"Pembroke Welsh Corgi is a strong, athletic, and lively little herder, the world's most popular herding breeds. At 10 to12 inches at the shoulder and 27 to 30 pounds, a well-built male Pembroke presents a big dog in a small package. They can be red, sable, fawn, and black and tan, with or without white markings. The Pembroke is a bright, sensitive dog who enjoys play with his human family and responds well to training."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"work-plan-overview"},"Work Plan Overview"),(0,r.kt)("h3",{id:"deliverable"},"Deliverable"),(0,r.kt)("p",null,"In this research, the team will: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"define critical phases to define in the Journey Map: ie. Onboarding, Editing, Deployment of Content on Github Pages"),(0,r.kt)("li",{parentName:"ul"},"synthesize and connect research-driven data, must be able to validate why certain features are needed to enable team sign ups (mentor volunteers + users)"),(0,r.kt)("li",{parentName:"ul"},"create alternate artifacts ie: a clear documentation to guide new users to join or post their own project")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"current-state"},"Current State"),(0,r.kt)("p",null,"The landing page today has very minimal information to introduce Open Sprints A.) as a project aggregator; and B.) a workathon event for cohort fellows where they tackle projects in a 4-week sprint timeline."),(0,r.kt)("h3",{id:"pov-statement-and-high-level-product-vision"},"POV Statement and High-level Product Vision"),(0,r.kt)("p",null,"Phase 1: Open Sprints is a workathon event and a digital workspace, that enables new grads to work on projects within a team structure. "),(0,r.kt)("p",null,"Phase 2: In the future, we want this space to be a resource site that grads can co-build together. Much like wikipedia - it becomes a user-generated content submission site. "),(0,r.kt)("p",null,"Moodboard and Inspiration - other user generated sites ",(0,r.kt)("a",{parentName:"p",href:"https://dev.to/"},"https://dev.to/")," and Course Hero."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"team-goal"},"Team Goal"),(0,r.kt)("p",null,"Refine and future proof the site\u2019s features driven by UX research methods."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"proposal"},"Proposal"),(0,r.kt)("p",null,"Before jumping on the journey map, team should get a clear understanding of who the users are, and what their motivation is for joining."),(0,r.kt)("h3",{id:"jobs-to-be-done"},"Jobs to be done"),(0,r.kt)("p",null,"What outcomes do grad fellows, contributors expect? Example questions. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As a fellow, I apply to get accepted as for the annual workathon cohort"),(0,r.kt)("li",{parentName:"ul"},"As a code contributor, how do I get onboarded, edit / fork the Github repo and publish contribution"),(0,r.kt)("li",{parentName:"ul"},"As a workathon participant, is there an application process? Am I eligible?")),(0,r.kt)("h3",{id:"scope"},"Scope"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Focus will be on main users of Open Sprints: fellows and code contributors. Partners and Sponsors are out of scope."),(0,r.kt)("li",{parentName:"ul"},"Open Sprints work in a B2B model. We partner with training schools for coding and design, ie. Flatiron School NYC.")),(0,r.kt)("h2",{id:"constraints-and-challenges"},"Constraints and Challenges"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Content Gaps. Possible gaps in content on application journey, and contributing code. Currently, these information are hosted on Notion or read me docs. "),(0,r.kt)("li",{parentName:"ul"},"Platform limitation. the page is hosted on a docs site called Docusaurus for easy updates. Docusaurus does enable CSS customization but it\u2019s not a full CMS site. "),(0,r.kt)("li",{parentName:"ul"},"Architecture re-wiring is out of scope. Due to limitations of the platform, we can't tweak the IA of the site, unless re-design is backed up by key usability findings, and will be impactful for users."),(0,r.kt)("li",{parentName:"ul"},"Consider downstream maintenance. Content should be evergreen as updates might not be down frequently.")))}d.isMDXComponent=!0;const p={toc:[{value:"Design and Research",id:"design-and-research",level:3},{value:"Builders and Contributors",id:"builders-and-contributors",level:3},{value:"Planning Team",id:"planning-team",level:3}]},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"design-and-research"},"Design and Research"),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Amy Shim"),(0,r.kt)("td",{parentName:"tr",align:null},"Mentor / UX Researcher"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.linkedin.com/in/shim-amy/"},"LinkedIn"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Eriol Fox"),(0,r.kt)("td",{parentName:"tr",align:null},"Mentor / UX Researcher"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.linkedin.com/in/eriolfox/"},"LinkedIn"))))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"builders-and-contributors"},"Builders and Contributors"),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Devina Ramroop"),(0,r.kt)("td",{parentName:"tr",align:null},"UX Designer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.linkedin.com"},"LinkedIn"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Val Elefante"),(0,r.kt)("td",{parentName:"tr",align:null},"Open Source Contributor"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.linkedin.com"},"LinkedIn"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Johann Serrano"),(0,r.kt)("td",{parentName:"tr",align:null},"UX Designer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.linkedin.com"},"LinkedIn"))))),(0,r.kt)("h3",{id:"planning-team"},"Planning Team"),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Abi Castillo"),(0,r.kt)("td",{parentName:"tr",align:null},"Project Coordinator"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.linkedin.com/in/abigail-castillo-7aa5b7255/"},"LinkedIn"))))))}h.isMDXComponent=!0;const g={toc:[{value:"Project Updates",id:"project-updates",level:2},{value:"Getting Started",id:"getting-started",level:3}]},b="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"project-updates"},"Project Updates"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Welcome Mentors and Builders!"),(0,r.kt)("p",null,"We are so excited to work with you. This project's focus will be on product design and research.\u2028\nOver the next few weeks, you\u2019ll have the opportunity to gain real-world experience in how to run UX workshops, while collaborating on a team of talented peers, product designers, and experienced mentors.\u2028"),(0,r.kt)("p",null,"This guide should give you an overview of what is to come!"),(0,r.kt)("p",null,"Get a full scope of the work on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1LizjNghBFJa1JYE-DbRWWAAOdFtABH4K9ls6aK0Sslk/edit?usp=sharing"},"Project Corgi Team Guide")),(0,r.kt)("br",null))}k.isMDXComponent=!0;const f={id:"projects-corgi",title:"",sidebar_label:"Corgi",sidebar_position:3,hide_table_of_contents:!0},v=void 0,y={unversionedId:"projects/corgi/projects-corgi",id:"projects/corgi/projects-corgi",title:"",description:"<Banner",source:"@site/docs/projects/corgi/corgi.mdx",sourceDirName:"projects/corgi",slug:"/projects/corgi/",permalink:"/docs/projects/corgi/",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"projects-corgi",title:"",sidebar_label:"Corgi",sidebar_position:3,hide_table_of_contents:!0},sidebar:"projectsSideBar",previous:{title:"Beagle",permalink:"/docs/projects/beagle/"},next:{title:"Dachshund",permalink:"/docs/projects/dachshund/"}},w={},N=[],j={toc:N},D="wrapper";function S(e){let{components:t,...n}=e;return(0,r.kt)(D,(0,a.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{goalStatement:s.Z.corgi.goal_statement,projectTags:s.Z.corgi.project_tags,mdxType:"Banner"}),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"summary",label:"Summary",default:!0,mdxType:"TabItem"},(0,r.kt)(d,{headline:s.Z.corgi.headline,description:s.Z.corgi.description,level:s.Z.corgi.level_of_difficulty,roles:s.Z.corgi.roles,mdxType:"Summary"})),(0,r.kt)(i.Z,{value:"updates",label:"Updates",default:!0,mdxType:"TabItem"},(0,r.kt)(k,{mdxType:"Updates"})),(0,r.kt)(i.Z,{value:"contributors",label:"Contributors",mdxType:"TabItem"},(0,r.kt)(h,{mdxType:"Contributors"}))))}S.isMDXComponent=!0},3308:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/corgi-fall-6abab254aaf6d6d2a05dc7477d8bacee.jpg"}}]);