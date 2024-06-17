"use strict";(self.webpackChunkours=self.webpackChunkours||[]).push([[8548],{4993:(e,t,a)=>{a.d(t,{A:()=>n,M:()=>s});const s=["Physical","Mental","Social","Exotic","Meta","Combat"],n=[{name:"Genious",description:"Gives 5 skill points. Can only be taken once.",tags:["Meta"],cost:25},{name:"Fit",description:"Each level of fit trait gives +1 to Endurance. Normal human can only obtain 5 levels of fit.",tags:["Physical"],cost:5,costPerLevel:!0},{name:"Specialist",description:"Each level of specialist trait gives +1 when performing actions that are related to speciality. You can only get 3 levels of this trait. There are 3 variants of this trait: easy, normal and hard.",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Strengtht",description:"Each level of fit trait gives +1 to Strength",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Dexterity",description:"Each level of fit trait gives +1 to Dexterity.",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Intelligence",description:"Each level of fit trait gives +1 to Intelligence.",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Wits",description:"Each level of fit trait gives +1 to Wits.",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Charisma",description:"Each level of fit trait gives +1 to Charisma.",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Composure",description:"Each level of fit trait gives +1 to Composure.",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Endurance",description:"Each level of fit trait gives +1 to Endurance.",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Willpower",description:"Each level of fit trait gives +1 to Willpower.",tags:["Meta"],cost:5,costPerLevel:!0},{name:"Increased Lifespan",description:"Each level of fit trait multiplies your Lifespan by x2.",tags:["Meta"],cost:10,costPerLevel:!0},{name:"Decresed Lifespan",description:"Each level of fit trait multiplies your Lifespan by 1/2.",tags:["Meta"],cost:-10,costPerLevel:!0},{name:"Primal mark",description:"Other bearers of primal mark can sense it and will have better opinion of you",tags:["Meta"],cost:2,costPerLevel:!0},{name:"Heavyweight",description:"You need to drink a lot more than normal to get drunk",tags:["Meta"],cost:2,costPerLevel:!0},{name:"Healthy",description:"+1 to health",tags:["Meta"],cost:2,costPerLevel:!0},{name:"Frail",description:"-1 to Health",tags:["Meta"],cost:-2,costPerLevel:!0},{name:"Elegant",description:"+2 to all social checks",tags:["Meta"],cost:1,costPerLevel:!0},{name:"Ingenuity",description:"+2 to all social crafting chekcs",tags:["Meta"],cost:1,costPerLevel:!0}]},1626:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var s=a(6540),n=a(4848);const i=e=>{let{name:t,value:a,remaining:s,onChange:i}=e;return(0,n.jsxs)("div",{className:"points-input-line",children:[(0,n.jsx)("div",{style:{width:"35px"},children:t}),(0,n.jsx)("input",{readOnly:!0,className:`${s<0&&"error"}`,style:{width:"40px",height:"30px"},value:s}),(0,n.jsx)("input",{type:"number",style:{width:"40px",height:"30px"},value:a,onChange:e=>i(parseInt(e.target.value))})]})};var r=a(4745);const l=(0,r.vt)(((e,t)=>({portraitUrl:"",name:"Name",customInfo:[],notes:"",AP:76,SP:50,TP:30,XP:0,attributes:{Strength:8,Dexterity:8,Constitution:8,Perception:8,Intelligence:8,Creativeness:8,Willpower:8},CurrentHealth:16,CurrentStamina:16,skills:{Melee:0,Brawl:0,Ranged:0,Tactics:0,Crafting:0,Technology:0,Medicine:0,Survival:0,Science:0,Athletics:0,Driving:0,Stealth:0,Talking:0,Social:0,Lore:0,Arts:0},traits:[],inventory:[]}))),o=e=>{let{name:t,value:a,counterValue:i,onChange:r,readonly:l,both:o,title:c}=e;const[d,h]=(0,s.useState)(a),u=e=>{e.target.value?h(parseInt(e.target.value)):r(d)},m=e=>{parseInt(e.target.value)<0?r(0):r(parseInt(e.target.value))};return(0,n.jsxs)("div",{className:"stat-input-line",title:c,children:[(0,n.jsx)("div",{style:{width:"100px"},children:t}),o&&null!=i?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{type:"number",style:{width:"60px",height:"30px"},value:i,onBlur:u,onChange:m}),(0,n.jsx)("input",{readOnly:!0,style:{width:"60px",height:"30px"},value:a,title:c,onChange:()=>{}})]}):(0,n.jsx)("input",{readOnly:l,type:l?"text":"number",style:{width:"60px",height:"30px"},value:a,onBlur:u,onChange:m})]})},c=e=>{let{children:t,itemWidth:a,itemHeight:i}=e;const r=10,l=(0,s.useRef)(null),[o,c]=(0,s.useState)(0);return(0,s.useEffect)((()=>{const e=new ResizeObserver((()=>{if(l.current){const e=l.current.clientWidth,n=a+r,o=Math.floor((e+r)/n),d=Math.ceil(s.Children.count(t)/o);c(d*(i+r)-r)}}));return l.current&&e.observe(l.current),()=>{l.current&&e.unobserve(l.current),e.disconnect()}}),[t,a,i,r]),(0,n.jsx)("div",{ref:l,style:{display:"flex",flexWrap:"wrap",gap:"10px",height:`${o}px`,flexDirection:"column",alignContent:"space-between"},children:t})},d={Strength:"It reflects physical power. Affecting ability to lift, push, and carry heavy objects, deal damage in melee combat, and perform feats of brute force.",Dexterity:"Dexterity represents agility, reflexes, and coordination. It affects the character\u2019s ability to perform tasks requiring precision and speed, such as dodging attacks, aiming ranged weapons, performing acrobatics, and handling delicate objects.",Intelligence:"Intelligence measures cognitive abilities, including reasoning, memory, and problem-solving skills. It influences the character\u2019s capacity to understand complex concepts, solve puzzles, recall information, and learn new skills.",Wits:"Wits reflect the character\u2019s mental agility, quick thinking, and perceptiveness. This trait affects the ability to react swiftly to changing situations, notice details, and think on one's feet, crucial in both combat and social interactions.",Charisma:"Charisma gauges the character\u2019s charm, persuasiveness, and social influence. It affects interactions with others, ability to inspire, negotiate, deceive, and lead, making it essential for social and diplomatic scenarios.",Composure:"Composure represents emotional stability and self-control. It influences the ability to remain calm under pressure, resist intimidation or provocation, and manage stress and fear during challenging situations.",Endurance:"Endurance measures physical stamina and resilience. It affects the character\u2019s ability to sustain prolonged physical activity, resist fatigue, recover from injuries, and endure harsh conditions or pain.",Willpower:"Willpower indicates mental fortitude and determination. It affects the ability to resist mental manipulation, overcome fear, maintain focus under stress, and push through psychological barriers or exhaustion."},h=e=>{if(e<0)return e;const t=Math.floor(e/5),a=e-5*t;return 0===t?`+${a}`:0===a?`${t}d10`:`${t}d10+${a}`},u=()=>{const{attributes:e}=l(),t=Object.entries(e).map((t=>{let[a,s]=t;return(0,n.jsx)(o,{title:d[a],name:a,value:s,onChange:t=>{l.setState({attributes:{...e,[a]:t}})}},a)}));return(0,n.jsxs)("div",{className:"attribute-container",children:[(0,n.jsx)("div",{style:{flex:"1 1 50%"},children:(0,n.jsx)(c,{itemHeight:30,itemWidth:200,children:t})}),(0,n.jsx)("div",{className:"divider"}),(0,n.jsx)("div",{style:{flex:"1 1 50%"},children:(0,n.jsxs)(c,{itemHeight:30,itemWidth:200,children:[(0,n.jsx)(o,{name:"Health",value:e.Strength+e.Constitution,counterValue:l.getState().CurrentHealth,onChange:e=>{l.setState({CurrentHealth:e})},both:!0}),(0,n.jsx)(o,{name:"Fatigue",value:e.Constitution+e.Willpower,counterValue:l.getState().CurrentStamina,onChange:e=>{l.setState({CurrentStamina:e})},both:!0,readonly:!0}),(0,n.jsx)(o,{name:"Reaction",value:e.Dexterity/2+e.Perception,readonly:!0}),(0,n.jsx)(o,{name:"Step",value:Math.ceil(e.Dexterity/4),readonly:!0}),(0,n.jsx)(o,{name:"Base Lift",value:Math.round(e.Strength*e.Strength/2),readonly:!0}),(0,n.jsx)(o,{name:"Max Lift",value:Math.round(e.Strength*e.Strength),readonly:!0}),(0,n.jsx)(o,{title:"Melee weapon damage modifier",name:"Hit modifier",value:h(e.Strength-10),readonly:!0})]})})]})},m=()=>{const{skills:e}=l(),t=Object.entries(e).map((t=>{let[a,s]=t;return(0,n.jsx)(o,{name:a,value:s,onChange:t=>{l.setState({skills:{...e,[a]:t}})}},a)}));return(0,n.jsx)(c,{itemHeight:30,itemWidth:200,children:t})};var p=a(2900);const g=()=>{const e=()=>{const e=JSON.parse(localStorage.getItem("characters")||"{}");return Object.entries(e).map(((e,t)=>{let[a]=e;const s=a===l.getState().name?"dropdown_content_item selected":"dropdown_content_item";return(0,n.jsx)("button",{className:s,onClick:()=>(e=>{const t=JSON.parse(localStorage.getItem("characters")||"{}");l.setState(t[e],!0)})(a),children:a},a)}))},[t,a]=s.useState((()=>e()));return(0,s.useEffect)((()=>{window.addEventListener("beforeunload",(e=>{e.preventDefault()}))}),[]),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"5px"},children:[(0,n.jsxs)("div",{className:"dropdown",children:[(0,n.jsx)("div",{className:"dropdown-current",tabIndex:0,children:l().name}),(0,n.jsx)("div",{className:"dropdown_content",children:t})]}),(0,n.jsx)("button",{onClick:()=>{const t=JSON.parse(localStorage.getItem("characters")||"{}");t[l.getState().name]=l.getState(),localStorage.setItem("characters",JSON.stringify(t)),a((()=>e()))},className:"save-button",children:"Save"}),(0,n.jsx)("button",{onClick:()=>{const e=JSON.stringify(l.getState()),t=new Blob([e],{type:"text/plain"}),a=URL.createObjectURL(t),s=document.createElement("a");s.href=a,s.download=function(e){let t=(0,p.transliterate)(e);return t=t.replace(/\s+/g,"-"),t=t.replace(/[^a-zA-Z0-9\-]/g,""),t=t.toLowerCase(),t}(l.getState().name)+".json",s.click()},className:"export-button",children:"Export"}),(0,n.jsx)("button",{onClick:()=>{const e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=()=>{const t=e.files[0],a=new FileReader;a.onload=()=>{const e=JSON.parse(a.result);l.setState(e,!0)},a.readAsText(t)},e.click()},className:"import-button",children:"Import"}),(0,n.jsx)("button",{onClick:()=>{const t=JSON.parse(localStorage.getItem("characters")||"{}");delete t[l.getState().name],localStorage.setItem("characters",JSON.stringify(t)),a((()=>e()))},className:"delete-button",children:"Remove"})]})},x=e=>{let{index:t,trait:a}=e;return(0,n.jsxs)("div",{className:"trait-instance",children:[(0,n.jsx)("div",{style:{width:"50px"},children:`[${a.trait.cost*a.level}]`}),(0,n.jsx)("div",{style:{width:"15%",fontWeight:"bold"},children:a.trait.name}),(0,n.jsx)("div",{style:{whiteSpace:"pre-wrap",wordWrap:"break-word",width:"55%",textAlign:"left"},children:a.trait.description}),(0,n.jsxs)("div",{children:["Level: ",(0,n.jsx)("input",{type:"number",value:a.level,onChange:e=>{let s=parseInt(e.target.value);s<0&&(s=0),(e=>{l.setState({traits:[...l.getState().traits.slice(0,t),e,...l.getState().traits.slice(t+1)]})})({...a,level:s})}})]}),(0,n.jsxs)("div",{children:[a.trait.tags.map((e=>(0,n.jsx)("span",{children:e},e))),(0,n.jsx)("button",{className:"remove-button",onClick:()=>l.setState({traits:[...l.getState().traits.slice(0,t),...l.getState().traits.slice(t+1)]}),children:"X"})]})]})},v=()=>{const{traits:e}=l(),t=(0,s.useRef)(),[a,i]=(0,s.useState)({name:"",description:"",cost:0,tags:""});return(0,n.jsxs)("div",{children:[(0,n.jsx)("dialog",{ref:t,children:(0,n.jsxs)("form",{method:"dialog",className:"trait-add",children:["New trait",(0,n.jsx)("div",{className:"trait-name",children:(0,n.jsx)("input",{value:a.name,placeholder:"Name",onChange:e=>i({...a,name:e.target.value})})}),(0,n.jsx)("div",{className:"trait-description",children:(0,n.jsx)("textarea",{rows:5,value:a.description,onChange:e=>i({...a,description:e.target.value}),placeholder:"Description"})}),(0,n.jsxs)("div",{className:"trait-add-row",children:[(0,n.jsx)("input",{placeholder:"Cost",value:a.cost,type:"number",onChange:e=>i({...a,cost:parseInt(e.target.value)})}),(0,n.jsx)("input",{placeholder:"Tags",value:a.tags,onChange:e=>i({...a,tags:e.target.value})})]}),(0,n.jsx)("button",{onClick:()=>{l.setState({traits:[...l.getState().traits,{trait:{...a,tags:a.tags.split(",")},level:1}]})},children:"Add"})]})}),(0,n.jsx)("button",{onClick:()=>{t.current?.showModal(),i({name:"",description:"",cost:0,tags:""})},children:"Add  trait"}),(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap"},children:e.map(((e,t)=>(0,n.jsx)(x,{index:t,trait:e},t)))})]})},j=e=>{const t={background:"rgba(120, 120, 120, 0.22)",padding:"5px"},a={borderTop:"1px solid rgba(110, 110, 110, 0.33)",display:"flex",flexDirection:"row",gap:"5px",paddingTop:"10px",marginTop:"5px",fontSize:"0.8em"};return(0,n.jsxs)("div",{children:[e.description,e.armor&&(0,n.jsxs)("div",{style:a,children:[e.armor.wholeBody&&(0,n.jsxs)("div",{style:t,children:["Whole Body: ",e.armor.wholeBody]}),e.armor.head&&(0,n.jsxs)("div",{style:t,children:["Head: ",e.armor.head]}),e.armor.torso&&(0,n.jsxs)("div",{style:t,children:["Torso: ",e.armor.torso]}),e.armor.legs&&(0,n.jsxs)("div",{style:t,children:["Legs: ",e.armor.legs]}),e.armor.arms&&(0,n.jsxs)("div",{style:t,children:["Arms: ",e.armor.arms]})]}),e.weapon&&(0,n.jsxs)("div",{style:a,children:[(0,n.jsxs)("div",{style:t,children:["DMG: ",`${e.weapon.damage} ${e.weapon.type} (${e.weapon.AP})`]}),(0,n.jsxs)("div",{style:t,children:["RNG: ",e.weapon.range,"m"]})]})]})},f=e=>{let{index:t,item:a}=e;return(0,n.jsxs)("div",{className:"trait-instance",children:[(0,n.jsx)("div",{style:{width:"100px",fontWeight:"bold"},children:a.item.name}),(0,n.jsx)("div",{style:{width:"50%"},children:j(a.item)}),(0,n.jsxs)("div",{children:["Amount: ",(0,n.jsx)("input",{type:"number",value:a.amount,onChange:e=>{let s=parseInt(e.target.value);s<0&&(s=0),(e=>{l.setState({inventory:[...l.getState().inventory.slice(0,t),e,...l.getState().inventory.slice(t+1)]})})({...a,amount:s})}})]}),(0,n.jsxs)("div",{style:{width:"100px"},children:[(a.item.cost*a.amount).toFixed(2)," \xa4"]}),(0,n.jsxs)("div",{style:{width:"100px"},children:[(a.item.weight*a.amount).toFixed(2)," kg ",(0,n.jsx)("button",{className:"remove-button",onClick:()=>l.setState({inventory:[...l.getState().inventory.slice(0,t),...l.getState().inventory.slice(t+1)]}),children:"X"})]})]})},y=()=>{const{inventory:e}=l(),t=(0,s.useRef)(),[a,i]=(0,s.useState)({name:"",description:"",cost:0,tags:[],weight:0}),[r,o]=(0,s.useState)(!1),[c,d]=(0,s.useState)(!1);return(0,n.jsxs)("div",{children:[(0,n.jsx)("dialog",{ref:t,children:(0,n.jsxs)("form",{method:"dialog",className:"trait-add",children:["New item",(0,n.jsx)("div",{className:"trait-name",children:(0,n.jsx)("input",{value:a.name,placeholder:"Name",onChange:e=>i({...a,name:e.target.value})})}),(0,n.jsx)("div",{className:"trait-description",children:(0,n.jsx)("textarea",{rows:5,value:a.description,onChange:e=>i({...a,description:e.target.value}),placeholder:"Description"})}),(0,n.jsxs)("div",{className:"trait-add-row",children:["Cost ",(0,n.jsx)("input",{placeholder:"Cost",value:a.cost,type:"number",onChange:e=>i({...a,cost:parseInt(e.target.value)})}),"Weight ",(0,n.jsx)("input",{placeholder:"Weight",value:a.weight,type:"number",onChange:e=>i({...a,weight:parseInt(e.target.value)})}),(0,n.jsx)("input",{placeholder:"Tags",onChange:e=>i({...a,tags:e.target.value.split(",")})})]}),(0,n.jsxs)("div",{className:"trait-add-row",children:["Armor ",(0,n.jsx)("input",{type:"checkbox",checked:r,onChange:()=>o(!r)})]}),r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"trait-add-row",children:["Whole body ",(0,n.jsx)("input",{value:a.armor?.wholeBody,type:"number",onChange:e=>i({...a,armor:{...a.armor,wholeBody:parseInt(e.target.value)}})})]}),(0,n.jsxs)("div",{className:"trait-add-row",children:["Head ",(0,n.jsx)("input",{value:a.armor?.head,type:"number",onChange:e=>i({...a,armor:{...a.armor,head:parseInt(e.target.value)}})})]}),(0,n.jsxs)("div",{className:"trait-add-row",children:["Arms ",(0,n.jsx)("input",{value:a.armor?.arms,type:"number",onChange:e=>i({...a,armor:{...a.armor,arms:parseInt(e.target.value)}})})]}),(0,n.jsxs)("div",{className:"trait-add-row",children:["Torso ",(0,n.jsx)("input",{value:a.armor?.torso,type:"number",onChange:e=>i({...a,armor:{...a.armor,torso:parseInt(e.target.value)}})})]}),(0,n.jsxs)("div",{className:"trait-add-row",children:["Legs ",(0,n.jsx)("input",{value:a.armor?.legs,type:"number",onChange:e=>i({...a,armor:{...a.armor,legs:parseInt(e.target.value)}})})]})]}),(0,n.jsxs)("div",{className:"trait-add-row",children:["Weapon ",(0,n.jsx)("input",{type:"checkbox",checked:c,onChange:()=>d(!c)})]}),c&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"trait-add-row",children:["Damage ",(0,n.jsx)("input",{value:a.weapon?.damage,onChange:e=>i({...a,weapon:{...a.weapon,damage:e.target.value}})})]}),(0,n.jsxs)("div",{className:"trait-add-row",children:["Damage Type ",(0,n.jsx)("input",{placeholder:"Damage Type",value:a.weapon?.type,onChange:e=>i({...a,weapon:{...a.weapon,type:e.target.value}})})]}),(0,n.jsxs)("div",{className:"trait-add-row",children:["Range ",(0,n.jsx)("input",{value:a.weapon?.range,type:"number",onChange:e=>i({...a,weapon:{...a.weapon,range:parseInt(e.target.value)}})})]}),(0,n.jsxs)("div",{className:"trait-add-row",children:["Armor Penetration ",(0,n.jsx)("input",{value:a.weapon?.AP,type:"number",onChange:e=>i({...a,weapon:{...a.weapon,AP:parseInt(e.target.value)}})})]}),(0,n.jsxs)("div",{className:"trait-add-row",children:["Force Based ",(0,n.jsx)("input",{type:"checkbox",checked:a.weapon?.forceBased,onChange:e=>i({...a,weapon:{...a.weapon,forceBased:e.target.checked}})})]})]}),(0,n.jsx)("button",{onClick:()=>{l.setState({inventory:[...l.getState().inventory,{item:a,amount:1}]})},children:"Add"})]})}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"15px"},children:[(0,n.jsx)("button",{style:{marginRight:"auto"},onClick:()=>{t.current?.showModal(),i({name:"",description:"",cost:0,tags:[],weight:0})},children:"Add item"}),(0,n.jsxs)("div",{className:"table-label",children:[(0,n.jsx)("p",{children:"Value"}),(0,n.jsx)("span",{children:e.reduce(((e,t)=>e+t.amount*t.item.cost),0).toFixed(2)})]}),(0,n.jsxs)("div",{className:"table-label",children:[(0,n.jsx)("p",{children:"Weight"}),(0,n.jsx)("span",{children:e.reduce(((e,t)=>e+t.amount*t.item.weight),0).toPrecision(2)})]})]}),(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap"},children:e.map(((e,t)=>(0,n.jsx)(f,{index:t,item:e},e.item.name)))})]})},w=e=>{let{index:t}=e;const a=l((e=>e.customInfo)),i=l((e=>e.customInfo[t])),[r,o]=(0,s.useState)(!1),[c,d]=(0,s.useState)(i.label),h=(0,s.useRef)(null);return(0,n.jsxs)("div",{className:"input-wrapper",children:[(0,n.jsx)("input",{readOnly:!r,size:0,ref:h,role:"textbox",className:"input-label",style:{width:`${c.length+2}ch`},value:c,onChange:e=>{d(e.target.value)},onKeyDown:async e=>{"Enter"===e.key&&o(!1),"Escape"===e.key&&o(!1)},onBlur:()=>{o(!1),l.setState({customInfo:[...a.slice(0,t),{label:c,value:i.value},...a.slice(t+1)]})}}),(0,n.jsx)("input",{className:"dynamic-input",type:"text",style:{width:`${i.value.length+2}ch`},value:i.value,onChange:e=>{l.setState({customInfo:[...a.slice(0,t),{label:i.label,value:e.target.value},...a.slice(t+1)]})}}),(0,n.jsxs)("div",{className:"input-buttons",children:[(0,n.jsx)("button",{onClick:()=>{r&&l.setState({customInfo:[...a.slice(0,t),{label:c,value:i.value},...a.slice(t+1)]}),o(!r),h.current.focus(),h.current.select()},children:"E"}),(0,n.jsx)("button",{onClick:()=>l.setState({customInfo:[...a.slice(0,t),...a.slice(t+1)]}),children:"X"})]})]})};var b=a(7907),S=a(4586),C=a(5530),N=a(8478),k=a(4993);const I=[{name:"Kibble",cost:1,weight:.1,description:"Cheapest meal for one person.",tags:["Food"]},{name:"Lite Vest",cost:3e3,description:"Light bullet-proof vest.",tags:["Armor"],weight:5,armor:{torso:16}},{name:"Pistol",cost:1500,weight:.6,description:"Standard issue weapon. 15\xa4 for magazine",tags:["Weapon"],weapon:{damage:"2d10",type:"pi",AP:2,range:250}}],P=(0,r.vt)((e=>({showDrawer:!0,tab:"traits"}))),M=()=>{const{showDrawer:e,tab:t}=P(),[a,i]=(0,s.useState)(""),r=e=>{let{trait:t}=e;return(0,n.jsxs)("div",{className:"trait-card",children:[(0,n.jsxs)("div",{className:"trait-info",children:[(0,n.jsx)("div",{className:"trait-name",children:t.name}),(0,n.jsx)("div",{className:"trait-description",dangerouslySetInnerHTML:{__html:t.description.substring(0,100)}}),(0,n.jsxs)("div",{className:"trait-cost",children:["Cost: ",t.cost]})]}),(0,n.jsx)("button",{onClick:()=>(e=>{l.setState({traits:[...l.getState().traits,{trait:e,level:1}]})})(t),children:"\u2190"})]})},o=()=>k.A.filter((e=>e.name.toLowerCase().includes(a.toLowerCase()))).map(((e,t)=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r,{trait:e},t)}))),c=e=>{let{item:t}=e;return(0,n.jsxs)("div",{className:"trait-card",children:[(0,n.jsxs)("div",{className:"trait-info",children:[(0,n.jsx)("div",{className:"trait-name",children:t.name}),(0,n.jsx)("div",{className:"trait-description",dangerouslySetInnerHTML:{__html:t.description.substring(0,100)}}),(0,n.jsxs)("div",{className:"trait-cost",children:["Cost: ",t.cost," \xa4"]})]}),(0,n.jsx)("button",{onClick:()=>(e=>{l.setState({inventory:[...l.getState().inventory,{item:e,amount:1}]})})(t),children:"\u2190"})]})},d=()=>I.filter((e=>e.name.toLowerCase().includes(a.toLowerCase()))).map(((e,t)=>(0,n.jsx)(c,{item:e},t))),h=()=>"traits"===t?(0,n.jsx)(o,{}):"items"===t?(0,n.jsx)(d,{}):void 0;return e?(0,n.jsxs)("div",{className:"character-sheet-drawer",children:[(0,n.jsxs)("div",{className:"search-bar",children:[(0,n.jsxs)("div",{className:"tabs",children:[(0,n.jsx)("button",{className:"traits"===t?"selected":"",onClick:()=>P.setState({tab:"traits"}),children:"Traits"}),(0,n.jsx)("button",{className:"items"===t?"selected":"",onClick:()=>P.setState({tab:"items"}),children:"Items"}),(0,n.jsx)("button",{onClick:()=>P.setState({showDrawer:!1}),children:"Close"})]}),(0,n.jsx)("input",{type:"text",placeholder:"Search",value:a,onChange:e=>i(e.target.value)})]}),(0,n.jsx)("div",{className:"content",children:(0,n.jsx)(h,{})})]}):(0,n.jsx)("button",{onClick:()=>P.setState({showDrawer:!0}),style:{position:"sticky",aspectRatio:"1/1",borderBottomLeftRadius:"16px",right:"5px",top:"5px",height:"50px",border:"unset",outline:"unset",cursor:"pointer"},children:(0,n.jsx)("svg",{width:"30",height:"30",viewBox:"0 0 30 30","aria-hidden":"true",children:(0,n.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"2",d:"M4 7h22M4 15h22M4 23h22"})})})},L=e=>{let t=e.XP;const a=D(e,!1),s=A(e,!1),n=W(e,!1);return a<0&&(t-=1e3*-a),s<0&&(t-=100*-s),n<0&&(t-=300*-n),t},D=function(e,t){void 0===t&&(t=!0);const a=e.AP-Object.values(e.attributes).reduce(((e,t)=>e+t),0);return t&&a<=0?0:a},A=function(e,t){void 0===t&&(t=!0);const a=e.SP-Object.values(e.skills).reduce(((e,t)=>e+t),0);return t&&a<=0?0:a},W=function(e,t){void 0===t&&(t=!0);let a=e.TP;return e.traits.forEach((e=>{a-=e.level*e.trait.cost})),t&&a<=0?0:a},E=()=>{const{siteConfig:e}=(0,S.A)(),{AP:t,SP:a,TP:r,portraitUrl:c,customInfo:d}=l(),h=l(),p=(0,s.useRef)(),x=s.useMemo((()=>d.map(((e,t)=>(0,n.jsx)(w,{index:t},e.label)))),[d]);return(0,n.jsx)(N.A,{children:()=>(0,n.jsx)(b.A,{title:"Character Sheet",description:"",children:(0,n.jsxs)("main",{style:{display:"flex"},children:[(0,n.jsx)("section",{className:C.A.features,style:{alignItems:"start"},children:(0,n.jsx)("div",{className:"container",style:{maxWidth:"980px"},children:(0,n.jsxs)("div",{className:"character-sheet",children:[(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"15px",marginBottom:"15px"},children:[(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"15px"},children:[(0,n.jsx)(i,{name:"AP",remaining:D(h),value:t,onChange:e=>{l.setState({AP:e})}}),(0,n.jsx)(i,{name:"SP",remaining:A(h),value:a,onChange:e=>{l.setState({SP:e})}}),(0,n.jsx)(i,{name:"TP",remaining:W(h),value:r,onChange:e=>{l.setState({TP:e})}})]}),(0,n.jsx)(g,{})]}),(0,n.jsx)("dialog",{ref:p,onMouseDown:e=>e.target==p.current&&p.current.close(),children:(0,n.jsxs)("form",{method:"dialog",children:[(0,n.jsx)("input",{type:"text",value:c,onChange:e=>{l.setState({portraitUrl:e.target.value})}}),(0,n.jsx)("button",{children:"Close"})]})}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"15px"},children:[(0,n.jsx)("div",{className:"img-container",onClick:()=>{p.current.showModal()},children:c&&(0,n.jsx)("img",{src:c})}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"15px",width:"100%"},children:[(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"20px 10px",flexWrap:"wrap"},children:[(0,n.jsxs)("div",{className:"input-wrapper",children:[(0,n.jsx)("input",{size:0,role:"textbox",className:"input-label",style:{width:"6ch"},defaultValue:"Name"}),(0,n.jsx)("input",{className:"dynamic-input",type:"text",style:{width:`${h.name.length+4}ch`},value:h.name,onChange:e=>{l.setState({name:e.target.value})}})]}),x,(0,n.jsx)("button",{onClick:()=>l.setState({customInfo:[...d,{label:"label",value:"value"}]}),children:"+"})]}),(0,n.jsx)("textarea",{rows:5,placeholder:"Notes",style:{width:"100%",height:"100px",resize:"none"},value:h.notes,onChange:e=>{l.setState({notes:e.target.value})}})]})]}),(0,n.jsxs)("div",{className:"xp-container",children:[(0,n.jsx)(o,{name:"XP",value:h.XP,counterValue:L(h),onChange:e=>l.setState({XP:e}),both:!0}),(0,n.jsx)("meter",{className:"bar",min:0,max:h.XP,value:L(h)})]}),(0,n.jsx)("hr",{}),(0,n.jsx)(u,{}),(0,n.jsx)("hr",{}),(0,n.jsx)(m,{}),(0,n.jsx)(v,{}),(0,n.jsx)(y,{})]})})}),(0,n.jsx)(M,{})]})})})}},5530:(e,t,a)=>{a.d(t,{A:()=>s});const s={features:"features_t9lD",featureSvg:"featureSvg_GfXr"}}}]);