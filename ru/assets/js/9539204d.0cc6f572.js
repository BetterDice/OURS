"use strict";(self.webpackChunkours=self.webpackChunkours||[]).push([[2419],{6678:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var s=i(4848),r=i(8453);const t={sidebar_position:5},a="Various things",l={id:"combat/various-shit-to-do",title:"Various things",description:"- OURS uses hexagonal map",source:"@site/docs/combat/various-shit-to-do.mdx",sourceDirName:"combat",slug:"/combat/various-shit-to-do",permalink:"/OURS/ru/docs/combat/various-shit-to-do",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Explosives",permalink:"/OURS/ru/docs/combat/explosives"},next:{title:"Vehicles and transport",permalink:"/OURS/ru/docs/category/vehicles-and-transport"}},d={},o=[{value:"Improvised weapons",id:"improvised-weapons",level:2},{value:"Damage types / Damage scaling",id:"damage-types--damage-scaling",level:2},{value:"Damage types",id:"damage-types",level:3},{value:"Evasion evasion",id:"evasion-evasion",level:2},{value:"Close quarters",id:"close-quarters",level:2},{value:"Grip",id:"grip",level:2},{value:"Table of common actions",id:"table-of-common-actions",level:2}];function c(e){const n={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"various-things",children:"Various things"}),"\n",(0,s.jsx)(n.h1,{id:"tactical-map",children:"Tactical map"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"OURS uses hexagonal map"}),"\n",(0,s.jsx)(n.li,{children:"OURS measures distance by hex distance - closest distance it takes to travel from once hexagon to another"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"size-modifier",children:"Size modifier"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Characters can vary in sizes"}),"\n",(0,s.jsx)(n.li,{children:"Size is measured in SM (size modifier)"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"race-template",children:"Race template"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Race template is trait group"}),"\n",(0,s.jsx)(n.li,{children:"Race template can cost Trait Points"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"height-difference",children:"Height difference"}),"\n",(0,s.jsx)(n.h1,{id:"lifting-and-dragging",children:"Lifting and dragging"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"At max load step is divided by 4 and -1 for all actions (tyajelo suka)"}),"\n",(0,s.jsx)(n.li,{children:"At mid step / 2"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"jumping",children:"Jumping"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"From place: Step / 2 (rounding up) + 1"}),"\n",(0,s.jsx)(n.li,{children:"+3 if running"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"fall-damage",children:"Fall damage"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For every 3 meters 1d10"}),"\n",(0,s.jsx)(n.li,{children:"Armor is ignored"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"moving-in-difficult-terrain",children:"Moving in difficult terrain"}),"\n",(0,s.jsx)(n.p,{children:"Moving can depend on terrain. One step costs 1-3 AP depending on terrain."}),"\n",(0,s.jsx)(n.p,{children:"Climbing ladder - 2 AP"}),"\n",(0,s.jsx)(n.h1,{id:"damage-system",children:"Damage system"}),"\n",(0,s.jsx)(n.p,{children:"0 - \u043e\u0442\u0440\u0443\u0431\u0430\u043d\u0438\u0435 - Wounded\n-1 - \u043a\u0440\u0438\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435, \u043f\u0440\u0438 \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0438 \u0431\u0440\u043e\u0441\u043e\u043a \u043d\u0430 \u0432\u044b\u0440\u0443\u0431\u0430\u043d\u0438\u0435 - Badly Wounded\n-2 - \u0441\u043c\u0435\u0440\u0442\u044c, \u043f\u0440\u0438 \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0438 \u0431\u0440\u043e\u0441\u043e\u043a \u043d\u0430 \u0432\u044b\u0440\u0443\u0431\u0430\u043d\u0438\u0435 - Near death\n-4 - \u0430\u043d\u043d\u0438\u0433\u0438\u043b\u044f\u0446\u0438\u044f, \u043f\u0440\u0438 \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0438 \u0432\u044b \u043f\u0440\u043e\u0447\u043d\u044b\u0439 \u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u0443\u043c\u0435\u0440\u043b\u0438 - DEAD"}),"\n",(0,s.jsx)(n.h1,{id:"fatigue",children:"Fatigue"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"At zero knock off"}),"\n",(0,s.jsx)(n.li,{children:"At -1 knock off and -1 to all actions"}),"\n",(0,s.jsx)(n.li,{children:"At -2 knock off and -2 to all actions"}),"\n",(0,s.jsx)(n.li,{children:"You can spend 1 FP to do stuff"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"weapon",children:"Weapon"}),"\n",(0,s.jsx)(n.h2,{id:"improvised-weapons",children:"Improvised weapons"}),"\n",(0,s.jsx)(n.h2,{id:"damage-types--damage-scaling",children:"Damage types / Damage scaling"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Damage of CCW scales with Strength. +1 damage per Strength"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"damage-types",children:"Damage types"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Crushing. Additional +1 damage per Strength"}),"\n",(0,s.jsx)(n.li,{children:"Piercing. Additional +1 AP per strength"}),"\n",(0,s.jsx)(n.li,{children:"Slashing. Does nothing."}),"\n",(0,s.jsx)(n.li,{children:"Other cool damage types"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"evasion-evasion",children:"Evasion evasion"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Attacker makes attack roll"}),"\n",(0,s.jsx)(n.li,{children:"Defender rolls Reaction. If reaction is successful he can Defender"}),"\n",(0,s.jsx)(n.li,{children:"Then defender maeks quick contest with attacker's first roll"}),"\n",(0,s.jsx)(n.li,{children:"Then defender gets -1 to reaction to the end of the turn"}),"\n",(0,s.jsx)(n.li,{children:"Defence action can be spent to increse reaction or defence roll"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"close-quarters",children:"Close quarters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Club"}),"\n",(0,s.jsx)(n.li,{children:"Dagger"}),"\n",(0,s.jsx)(n.li,{children:"Sword"}),"\n",(0,s.jsx)(n.li,{children:"Spear"}),"\n",(0,s.jsx)(n.li,{children:"Axe"}),"\n",(0,s.jsx)(n.li,{children:"Glave"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"grip",children:"Grip"}),"\n",(0,s.jsx)(n.p,{children:"Grip is an action witch can be taken once per turn to change grip of weapon held."}),"\n",(0,s.jsx)(n.h2,{id:"table-of-common-actions",children:"Table of common actions"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Action"}),(0,s.jsx)(n.th,{children:"Cost (AP)"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Press a button"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Write a short sentence"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Find item in a bag"}),(0,s.jsx)(n.td,{children:"5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Draw a weapon"}),(0,s.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,s.jsx)(n.h1,{id:"upgrade-system",children:"Upgrade system"}),"\n",(0,s.jsx)(n.p,{children:"Each successful end of game should end with characters making some progress\nIt is recommended to give each character some reward"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Recommended skill points per session: 5\nAt the end of each major plot point (quest ending) give an additional award:"}),"\n",(0,s.jsx)(n.li,{children:"5 additional skill points"}),"\n",(0,s.jsx)(n.li,{children:"1 trait point"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This way characters should gradually become more powerful."}),"\n",(0,s.jsx)(n.p,{children:"Also don't forget about traits. You can give them out as you wish."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var s=i(6540);const r={},t=s.createContext(r);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);