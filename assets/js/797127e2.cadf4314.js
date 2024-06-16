"use strict";(self.webpackChunkours=self.webpackChunkours||[]).push([[9371],{2254:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var s=a(4848),i=a(8453),r=a(2931);const n={sidebar_position:7},o="Trait list",c={id:"character-building/trait list",title:"Trait list",description:"",source:"@site/docs/character-building/trait list.mdx",sourceDirName:"character-building",slug:"/character-building/trait list",permalink:"/OURS/docs/character-building/trait list",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Traits",permalink:"/OURS/docs/character-building/traits"},next:{title:"Combat",permalink:"/OURS/docs/category/combat"}},l={},d=[];function h(e){const t={h1:"h1",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"trait-list",children:"Trait list"}),"\n",(0,s.jsx)(r.H,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2931:(e,t,a)=>{a.d(t,{H:()=>o});var s=a(6540),i=a(4993),r=a(4848);const n=e=>{let{traitName:t,enabled:a,setEnabled:s}=e;return(0,r.jsx)("div",{className:a?"breadcrumbs__item breadcrumbs__item__no-arrow breadcrumbs__item--active":"breadcrumbs__item breadcrumbs__item__no-arrow",onClick:()=>s(!a),children:(0,r.jsx)("a",{className:"breadcrumbs__link",children:t})})},o=()=>{const[e,t]=(0,s.useState)(""),[a,o]=(0,s.useState)([]),c=i.A.filter((t=>t.name.toLowerCase().includes(e.toLowerCase())||t.description.toLowerCase().includes(e.toLowerCase()))).filter((e=>0==a.length||e.tags.some((e=>a.includes(e))))).map((e=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.name}),(0,r.jsx)("td",{dangerouslySetInnerHTML:{__html:e.description}}),(0,r.jsx)("td",{children:e.cost}),(0,r.jsx)("td",{children:e.tags.map((e=>(0,r.jsx)("span",{children:e},e)))})]},e.name))),l=(0,r.jsxs)("table",{style:{minWidth:"100%",tableLayout:"fixed",display:"inline-table",textAlign:"center"},children:[(0,r.jsxs)("tr",{style:{width:"100%"},children:[(0,r.jsx)("th",{style:{width:"15%"},children:"Name"}),(0,r.jsx)("th",{style:{width:"60%"},children:"Description"}),(0,r.jsx)("th",{style:{width:"10%"},children:"Cost"}),(0,r.jsx)("th",{style:{width:"10%"},children:"Tags"})]}),c]}),d=(0,r.jsx)("div",{className:"navbar__search",children:(0,r.jsx)("input",{className:"navbar__search-input search-bar",type:"text",placeholder:"Search",value:e,onChange:e=>t(e.target.value)})}),h=i.M.map((e=>(0,r.jsx)(n,{traitName:e,enabled:a.includes(e),setEnabled:t=>o(t?[...a,e]:a.filter((t=>t!==e)))},e)));return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"8px",padding:"10px 0",justifyContent:"space-between"},children:[d,(0,r.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"8px",justifyContent:"space-between"},children:h})]}),l]})}},4993:(e,t,a)=>{a.d(t,{A:()=>i,M:()=>s});const s=["Physical","Mental","Social","Exotic","Meta","Combat"],i=[{name:"Genious",description:"Gives 5 skill points. Can only be taken once.",tags:["Meta"],cost:25},{name:"Fit",description:"Each level of fit trait gives +1 to Endurance.<br/> Normal human can only obtain 5 levels of fit.",tags:["Physical"],cost:5,costPerLevel:!0},{name:"Specialist",description:"Each level of specialist trait gives +1 when performing actions that are related to speciality.<br/>\n\t\tYou can only get 3 levels of this trait. There are 3 variants of this trait: easy, normal and hard.",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Strengtht",description:"Each level of fit trait gives +1 to Strengtht.<br/>",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Dexterity",description:"Each level of fit trait gives +1 to Dexterity.<br/>",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Intelligence",description:"Each level of fit trait gives +1 to Intelligence.<br/>",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Wits",description:"Each level of fit trait gives +1 to Wits.<br/>",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Charisma",description:"Each level of fit trait gives +1 to Charisma.<br/>",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Composure",description:"Each level of fit trait gives +1 to Composure.<br/>",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Endurance",description:"Each level of fit trait gives +1 to Endurance.<br/>",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Willpower",description:"Each level of fit trait gives +1 to Willpower.<br/>",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Lifespan",description:"Each level of fit trait multiplies your Lifespan by x2.<br/>",tags:["Meta"],cost:10,costPerLevel:!0},{name:"Decresed Lifespan",description:"Each level of fit trait multiplies your Lifespan by 1/2.<br/>",tags:["Meta"],cost:-10,costPerLevel:!0},{name:"Primal mark",description:"Other bearers of primal mark can sense it and will have better opinion of you<br/>",tags:["Meta"],cost:2,costPerLevel:!0},{name:"Heavyweight",description:"You need to drink a lot more than normal to get drunk<br/>",tags:["Meta"],cost:2,costPerLevel:!0},{name:"Healthy",description:"+1 to health<br/>",tags:["Meta"],cost:2,costPerLevel:!0},{name:"Frail",description:"-1 to Health<br/>",tags:["Meta"],cost:-2,costPerLevel:!0},{name:"Elegant",description:"+2 to all social checks<br/>",tags:["Meta"],cost:1,costPerLevel:!0},{name:"Ingenuity",description:"+2 to all social crafting chekcs<br/>",tags:["Meta"],cost:1,costPerLevel:!0}]},8453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>o});var s=a(6540);const i={},r=s.createContext(i);function n(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);