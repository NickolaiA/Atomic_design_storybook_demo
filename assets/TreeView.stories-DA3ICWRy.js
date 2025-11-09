import{r as v,j as e}from"./iframe-CdBaqdCg.js";import"./preload-helper-PPVm8Dsz.js";const be=(n,s)=>{const t=[],i=(r,b,w)=>{r.forEach(f=>{t.push({node:f,level:b,parentId:w}),f.children&&f.children.length>0&&i(f.children,b+1,f.id)})};return i(n,0,s),t},fe=n=>{const s=[],t=i=>{i.forEach(r=>{s.push(r.id),r.children&&t(r.children)})};return t(n),s},A=(n,s)=>{const t=i=>{for(const r of i){if(r.id===s)return r;if(r.children){const b=t(r.children);if(b)return b}}return null};return t(n)},de=n=>{const s=[],t=i=>{i.forEach(r=>{s.push(r.id),r.children&&t(r.children)})};return n.children&&t(n.children),s},ce=({node:n,level:s,isExpanded:t,isSelected:i,isFocused:r,disabled:b,expanded:w,selected:f,focusedNodeId:D,config:p,onToggle:O,onSelect:M,onFocus:T,onKeyDown:I})=>{const j=n.children&&n.children.length>0,k=b||n.disabled,V=u=>{u.stopPropagation(),!k&&n.selectable!==!1&&(M(n.id,u),T(n.id))},L=u=>{u.stopPropagation(),!k&&j&&O(n.id)},Z=u=>{I(u,n.id)},ee=["tree-node",`tree-node--level-${s}`,i&&"tree-node--selected",r&&"tree-node--focused",k&&"tree-node--disabled",j&&"tree-node--has-children",j&&t&&"tree-node--expanded"].filter(Boolean).join(" "),ne=["tree-node__content",p.selectionMode!=="none"&&"tree-node__content--selectable"].filter(Boolean).join(" "),_=p.renderNode?.(n,i,t);return e.jsxs("div",{className:ee,children:[e.jsxs("div",{className:ne,role:p.selectionMode!=="none"?"treeitem":void 0,tabIndex:r?0:-1,"aria-expanded":j?t?"true":"false":void 0,"aria-selected":p.selectionMode!=="none"?i?"true":"false":void 0,"aria-disabled":k?"true":"false","aria-level":s+1,onClick:V,onKeyDown:Z,"data-level":s,children:[p.showIcons&&j&&e.jsx("button",{className:"tree-node__toggle",onClick:L,disabled:k,"aria-label":t?"Collapse":"Expand",tabIndex:-1,children:t?"−":"+"}),p.showIcons&&!j&&e.jsx("span",{className:"tree-node__spacer"}),p.showIcons&&n.icon&&e.jsx("span",{className:"tree-node__icon","aria-hidden":"true",children:n.icon}),e.jsx("span",{className:"tree-node__label",children:_||n.label}),p.showSelectionIndicator&&n.selectable!==!1&&p.selectionMode!=="none"&&e.jsx("span",{className:"tree-node__selection-indicator","aria-hidden":"true",children:p.selectionIndicator}),p.showLines&&s>0&&e.jsx("div",{className:"tree-node__line","aria-hidden":"true"})]}),j&&t&&e.jsx("div",{className:"tree-node__children",role:"group",children:n.children.map(u=>e.jsx(ce,{node:u,level:s+1,isExpanded:w.includes(u.id),isSelected:f.includes(u.id),isFocused:D===u.id,disabled:b,expanded:w,selected:f,focusedNodeId:D,config:p,onToggle:O,onSelect:M,onFocus:T,onKeyDown:I},u.id))})]})},h=({data:n,size:s="md",variant:t="default",selectionMode:i="single",defaultExpanded:r=[],expanded:b,onExpandedChange:w,defaultSelected:f=[],selected:D,onSelectionChange:p,onNodeClick:O,disabled:M=!1,showLines:T=!1,showIcons:I=!0,autoExpandChildren:j=!1,showSelectionIndicator:k=!1,selectionIndicator:V=">",renderNode:L,className:Z="","data-testid":ee})=>{const[ne,_]=v.useState(r),u=b!==void 0,S=u?b:ne,[pe,ue]=v.useState(f),ae=D!==void 0,C=ae?D:pe,[re,oe]=v.useState(null),g=v.useMemo(()=>be(n),[n]);v.useMemo(()=>fe(n),[n]);const q=v.useCallback(l=>{const x=S.includes(l);let m;if(x){const o=A(n,l),c=o?de(o):[];m=S.filter(y=>y!==l&&!c.includes(y))}else if(m=[...S,l],j){const o=A(n,l);if(o){const c=de(o);m=[...m,...c]}}u||_(m),w?.(m)},[n,S,j,u,w]),te=v.useCallback((l,x)=>{if(i==="none")return;const m=A(n,l);if(!m)return;let o;if(i==="single")o=C.includes(l)?[]:[l];else if(x.ctrlKey||x.metaKey)o=C.includes(l)?C.filter(c=>c!==l):[...C,l];else if(x.shiftKey&&C.length>0){const c=g.findIndex(({node:E})=>E.id===C[C.length-1]),y=g.findIndex(({node:E})=>E.id===l);if(c!==-1&&y!==-1){const E=Math.min(c,y),le=Math.max(c,y),R=g.slice(E,le+1).map(({node:N})=>N.id);o=[...new Set([...C,...R])]}else o=[...C,l]}else o=[l];ae||ue(o),p?.(o),O?.(m,x)},[n,i,C,g,ae,p,O]),me=v.useCallback(l=>{oe(l)},[]),he=v.useCallback((l,x)=>{const m=g.findIndex(({node:y})=>y.id===x);if(m===-1)return;let o=m,c=!1;switch(l.key){case"ArrowDown":l.preventDefault(),o=Math.min(m+1,g.length-1),c=!0;break;case"ArrowUp":l.preventDefault(),o=Math.max(m-1,0),c=!0;break;case"ArrowRight":l.preventDefault(),A(n,x)?.children?.length&&(S.includes(x)?o=Math.min(m+1,g.length-1):q(x)),c=!0;break;case"ArrowLeft":if(l.preventDefault(),S.includes(x))q(x);else{const N=g[m];if(N.parentId){const se=g.findIndex(({node:xe})=>xe.id===N.parentId);se!==-1&&(o=se)}}c=!0;break;case"Home":l.preventDefault(),o=0,c=!0;break;case"End":l.preventDefault(),o=g.length-1,c=!0;break;case"Enter":case" ":l.preventDefault(),te(x,l),c=!0;break;case"*":l.preventDefault();const E=g[m].level,le=g.filter(({level:N})=>N===E).map(({node:N})=>N.id).filter(N=>A(n,N)?.children?.length),R=[...new Set([...S,...le])];u||_(R),w?.(R),c=!0;break}if(c&&o!==m){const y=g[o].node.id;oe(y),setTimeout(()=>{document.querySelector(`[role="treeitem"][aria-level="${g[o].level+1}"]`)?.focus()},0)}},[n,S,g,te,q,u,w]),ve=v.useMemo(()=>({size:s,variant:t,selectionMode:i,showLines:T,showIcons:I,showSelectionIndicator:k,selectionIndicator:V,renderNode:L}),[s,t,i,T,I,k,V,L]),ge=["tree-view",`tree-view--${s}`,`tree-view--${t}`,`tree-view--selection-${i}`,T&&"tree-view--with-lines",M&&"tree-view--disabled",Z].filter(Boolean).join(" ");return e.jsx("div",{className:ge,role:i!=="none"?"tree":void 0,"data-testid":ee,"aria-multiselectable":i==="multiple"?"true":"false","aria-disabled":M?"true":"false",children:n.map(l=>e.jsx(ce,{node:l,level:0,isExpanded:S.includes(l.id),isSelected:C.includes(l.id),isFocused:re===l.id,disabled:M,expanded:S,selected:C,focusedNodeId:re,config:ve,onToggle:q,onSelect:te,onFocus:me,onKeyDown:he},l.id))})};h.__docgenInfo={description:"",methods:[],displayName:"TreeView",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TreeNodeData"}],raw:"TreeNodeData[]"},description:"Tree data structure"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'subtle' | 'lines'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subtle'"},{name:"literal",value:"'lines'"}]},description:"Visual variant",defaultValue:{value:"'default'",computed:!1}},selectionMode:{required:!1,tsType:{name:"union",raw:"'none' | 'single' | 'multiple'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'single'"},{name:"literal",value:"'multiple'"}]},description:"Selection mode",defaultValue:{value:"'single'",computed:!1}},defaultExpanded:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Initially expanded node IDs",defaultValue:{value:"[]",computed:!1}},expanded:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Controlled expanded node IDs"},onExpandedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"expanded"}],return:{name:"void"}}},description:"Callback when expansion state changes"},defaultSelected:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Initially selected node IDs",defaultValue:{value:"[]",computed:!1}},selected:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Controlled selected node IDs"},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selected: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selected"}],return:{name:"void"}}},description:"Callback when selection changes"},onNodeClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: TreeNodeData, event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"TreeNodeData"},name:"node"},{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:"Callback when a node is clicked"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the tree is disabled",defaultValue:{value:"false",computed:!1}},showLines:{required:!1,tsType:{name:"boolean"},description:"Show connecting lines",defaultValue:{value:"false",computed:!1}},showIcons:{required:!1,tsType:{name:"boolean"},description:"Show expand/collapse icons",defaultValue:{value:"true",computed:!1}},autoExpandChildren:{required:!1,tsType:{name:"boolean"},description:"Automatically expand all children when a parent is expanded",defaultValue:{value:"false",computed:!1}},showSelectionIndicator:{required:!1,tsType:{name:"boolean"},description:"Show selection indicator for selectable nodes",defaultValue:{value:"false",computed:!1}},selectionIndicator:{required:!1,tsType:{name:"string"},description:'Custom selection indicator (default: ">")',defaultValue:{value:"'>'",computed:!1}},renderNode:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: TreeNodeData, isSelected: boolean, isExpanded: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"TreeNodeData"},name:"node"},{type:{name:"boolean"},name:"isSelected"},{type:{name:"boolean"},name:"isExpanded"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"Custom render function for node content"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"Data test id for testing"}}};const a=()=>{},d=[{id:"1",label:"Documents",icon:"📁",children:[{id:"1-1",label:"Projects",icon:"📁",children:[{id:"1-1-1",label:"Project A.docx",icon:"📄"},{id:"1-1-2",label:"Project B.pdf",icon:"📄"}]},{id:"1-2",label:"Reports",icon:"📁",children:[{id:"1-2-1",label:"Annual Report.xlsx",icon:"📊"},{id:"1-2-2",label:"Monthly Summary.docx",icon:"📄"}]}]},{id:"2",label:"Images",icon:"📁",children:[{id:"2-1",label:"vacation.jpg",icon:"🖼️"},{id:"2-2",label:"profile.png",icon:"🖼️"},{id:"2-3",label:"screenshot.png",icon:"🖼️"}]},{id:"3",label:"Videos",icon:"📁",children:[{id:"3-1",label:"tutorial.mp4",icon:"🎬"},{id:"3-2",label:"presentation.mov",icon:"🎬"}]},{id:"4",label:"readme.txt",icon:"📄"}],Ce=[{id:"ceo",label:"CEO - John Smith",icon:"👨‍💼",children:[{id:"cto",label:"CTO - Sarah Johnson",icon:"👩‍💻",children:[{id:"dev-team",label:"Development Team",icon:"👥",children:[{id:"dev-1",label:"Alice Wilson - Senior Developer",icon:"👩‍💻"},{id:"dev-2",label:"Bob Brown - Frontend Developer",icon:"👨‍💻"},{id:"dev-3",label:"Carol Davis - Backend Developer",icon:"👩‍💻"}]},{id:"design-team",label:"Design Team",icon:"👥",children:[{id:"design-1",label:"David Miller - UI Designer",icon:"🎨"},{id:"design-2",label:"Emma Garcia - UX Designer",icon:"🎨"}]}]},{id:"cfo",label:"CFO - Michael Taylor",icon:"👨‍💼",children:[{id:"finance-team",label:"Finance Team",icon:"👥",children:[{id:"finance-1",label:"Lisa Anderson - Accountant",icon:"💼"},{id:"finance-2",label:"James Wilson - Financial Analyst",icon:"💼"}]}]}]}],ie=[{id:"system",label:"System Folders",icon:"⚙️",selectable:!1,children:[{id:"bin",label:"bin",icon:"📁",selectable:!0},{id:"usr",label:"usr",icon:"📁",selectable:!0},{id:"var",label:"var",icon:"📁",selectable:!0}]},{id:"user-docs",label:"User Documents",icon:"👤",selectable:!1,children:[{id:"my-projects",label:"My Projects",icon:"📁",selectable:!1,children:[{id:"project-a",label:"Project A.docx",icon:"📄",selectable:!0},{id:"project-b",label:"Project B.pdf",icon:"📄",selectable:!0}]},{id:"report-1",label:"Annual Report.xlsx",icon:"📊",selectable:!0},{id:"report-2",label:"Monthly Summary.docx",icon:"📄",selectable:!0}]},{id:"media-files",label:"Media Files",icon:"🎬",selectable:!1,children:[{id:"photo-1",label:"vacation.jpg",icon:"🖼️",selectable:!0},{id:"photo-2",label:"profile.png",icon:"🖼️",selectable:!0},{id:"video-1",label:"tutorial.mp4",icon:"🎬",selectable:!0}]},{id:"readme-file",label:"readme.txt",icon:"📄",selectable:!0}],Ee={title:"Atoms/TreeView",component:h,parameters:{layout:"centered",docs:{description:{component:"A tree view component for displaying hierarchical data with expand/collapse functionality and keyboard navigation."}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Tree data structure"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},variant:{control:"select",options:["default","subtle","lines"],description:"Visual variant"},selectionMode:{control:"select",options:["none","single","multiple"],description:"Selection mode"},disabled:{control:"boolean",description:"Whether the tree is disabled"},showLines:{control:"boolean",description:"Show connecting lines"},showIcons:{control:"boolean",description:"Show expand/collapse icons"},autoExpandChildren:{control:"boolean",description:"Automatically expand all children when a parent is expanded"},showSelectionIndicator:{control:"boolean",description:"Show selection indicator for selectable nodes"},selectionIndicator:{control:"text",description:'Custom selection indicator (default: ">")'},onExpandedChange:{action:"expanded-changed",description:"Callback when expansion state changes"},onSelectionChange:{action:"selection-changed",description:"Callback when selection changes"},onNodeClick:{action:"node-clicked",description:"Callback when a node is clicked"}}},z={args:{data:d,size:"md",variant:"default",selectionMode:"single",showIcons:!0,showLines:!1,onExpandedChange:a,onSelectionChange:a,onNodeClick:a}},W={args:{data:d,defaultExpanded:["1","2"],selectionMode:"single",onExpandedChange:a,onSelectionChange:a,onNodeClick:a}},B={args:{data:d,autoExpandChildren:!0,selectionMode:"single",onExpandedChange:a,onSelectionChange:a,onNodeClick:a},parameters:{docs:{description:{story:"When autoExpandChildren is enabled, expanding a parent node automatically expands all its children."}}}},F={render:()=>e.jsxs("div",{className:"treeview-story-section",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Default Behavior (Manual Expansion)"}),e.jsx("div",{className:"treeview-story-container",children:e.jsx(h,{data:d,autoExpandChildren:!1,selectionMode:"single",variant:"subtle"})}),e.jsx("p",{children:e.jsx("em",{children:"Each node must be expanded individually"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Auto-Expand Children"}),e.jsx("div",{className:"treeview-story-container",children:e.jsx(h,{data:d,autoExpandChildren:!0,selectionMode:"single",variant:"subtle"})}),e.jsx("p",{children:e.jsx("em",{children:"Expanding a parent automatically expands all children"})})]})]}),args:{data:d,onExpandedChange:a,onSelectionChange:a,onNodeClick:a},parameters:{docs:{description:{story:"Comparison between default expansion behavior and auto-expand children behavior."}}}},we=()=>{const[n,s]=v.useState([]);return e.jsxs("div",{className:"treeview-story-section",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"With Selection Indicators"}),e.jsx("div",{className:"treeview-story-container",children:e.jsx(h,{data:ie,selectionMode:"multiple",defaultExpanded:["system","user-docs","my-projects","media-files"],selected:n,onSelectionChange:s,showSelectionIndicator:!0,selectionIndicator:">",variant:"subtle"})}),e.jsx("p",{children:e.jsxs("em",{children:["Only nodes with ",">"," indicator can be selected. Category headers and some folders are not selectable.",e.jsx("br",{}),"Selected: ",n.length>0?n.join(", "):"None"]})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Custom Indicator"}),e.jsx("div",{className:"treeview-story-container",children:e.jsx(h,{data:ie,selectionMode:"single",defaultExpanded:["system","user-docs","my-projects","media-files"],showSelectionIndicator:!0,selectionIndicator:"✓",variant:"default"})}),e.jsx("p",{children:e.jsx("em",{children:'Using custom "✓" indicator for selectable nodes'})})]})]})},P={render:we,args:{data:ie,onExpandedChange:a,onSelectionChange:a,onNodeClick:a},parameters:{docs:{description:{story:"TreeView with mixed selectable/non-selectable nodes and visual selection indicators."}}}},U={render:()=>e.jsxs("div",{className:"treeview-story-section",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Small"}),e.jsx("div",{className:"treeview-story-container",children:e.jsx(h,{data:d,size:"sm",defaultExpanded:["1"],selectionMode:"single"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Medium (Default)"}),e.jsx("div",{className:"treeview-story-container",children:e.jsx(h,{data:d,size:"md",defaultExpanded:["1"],selectionMode:"single"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Large"}),e.jsx("div",{className:"treeview-story-container",children:e.jsx(h,{data:d,size:"lg",defaultExpanded:["1"],selectionMode:"single"})})]})]}),args:{data:d,onExpandedChange:a,onSelectionChange:a,onNodeClick:a},parameters:{docs:{description:{story:"Different size variants for tree view."}}}},K={render:()=>e.jsxs("div",{className:"treeview-story-section",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Default"}),e.jsx("div",{className:"treeview-story-container",children:e.jsx(h,{data:d,variant:"default",defaultExpanded:["1","2"],selectionMode:"single"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Subtle"}),e.jsx("div",{className:"treeview-story-container",children:e.jsx(h,{data:d,variant:"subtle",defaultExpanded:["1","2"],selectionMode:"single"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"With Lines"}),e.jsx("div",{className:"treeview-story-container",children:e.jsx(h,{data:d,variant:"lines",defaultExpanded:["1","2"],selectionMode:"single",showLines:!0})})]})]}),args:{data:d,onExpandedChange:a,onSelectionChange:a,onNodeClick:a},parameters:{docs:{description:{story:"Different visual variants for tree view."}}}},ye=()=>{const[n,s]=v.useState(["1-1-1"]),[t,i]=v.useState(["1-1-1","2-1","2-2"]);return e.jsxs("div",{className:"treeview-story-section",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"No Selection"}),e.jsx("div",{className:"treeview-story-container",children:e.jsx(h,{data:d,selectionMode:"none",defaultExpanded:["1"]})}),e.jsx("p",{children:e.jsx("em",{children:"No selection allowed - clicking nodes won't select them"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Single Selection"}),e.jsx("div",{className:"treeview-story-container",children:e.jsx(h,{data:d,selectionMode:"single",defaultExpanded:["1"],selected:n,onSelectionChange:s})}),e.jsx("p",{children:e.jsxs("em",{children:["Click to select one item. Selected: ",n.length>0?n.join(", "):"None"]})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Multiple Selection"}),e.jsx("div",{className:"treeview-story-container",children:e.jsx(h,{data:d,selectionMode:"multiple",defaultExpanded:["1","2"],selected:t,onSelectionChange:i})}),e.jsx("p",{children:e.jsxs("em",{children:["Click to select multiple items. Ctrl+Click to toggle. Selected: ",t.length>0?t.join(", "):"None"]})})]})]})},$={render:ye,args:{data:d,onExpandedChange:a,onSelectionChange:a,onNodeClick:a},parameters:{docs:{description:{story:"Different selection modes for tree view."}}}},H={args:{data:d,showIcons:!1,defaultExpanded:["1","2"],selectionMode:"single",onExpandedChange:a,onSelectionChange:a,onNodeClick:a}},J={args:{data:d,disabled:!0,defaultExpanded:["1","2"],selectionMode:"single",onExpandedChange:a,onSelectionChange:a,onNodeClick:a}},G={args:{data:Ce,variant:"subtle",defaultExpanded:["ceo","cto","cfo"],selectionMode:"single",onExpandedChange:a,onSelectionChange:a,onNodeClick:a},parameters:{docs:{description:{story:"Tree view displaying an organization chart structure."}}}},je=()=>{const[n,s]=v.useState(["1"]),[t,i]=v.useState([]),[r,b]=v.useState("single"),w=()=>{s(["1","1-1","1-2","2","3"])},f=()=>{s([])},D=()=>{i([])};return e.jsxs("div",{className:"treeview-story-controlled",children:[e.jsxs("div",{className:"treeview-story-controls",children:[e.jsxs("div",{className:"treeview-story-control-group",children:[e.jsx("label",{htmlFor:"selection-mode-select",children:"Selection Mode:"}),e.jsxs("select",{id:"selection-mode-select",value:r,onChange:p=>b(p.target.value),className:"treeview-story-select",children:[e.jsx("option",{value:"none",children:"None"}),e.jsx("option",{value:"single",children:"Single"}),e.jsx("option",{value:"multiple",children:"Multiple"})]})]}),e.jsxs("div",{className:"treeview-story-control-group",children:[e.jsx("button",{onClick:w,className:"treeview-story-button",children:"Expand All"}),e.jsx("button",{onClick:f,className:"treeview-story-button",children:"Collapse All"}),e.jsx("button",{onClick:D,className:"treeview-story-button",children:"Clear Selection"})]})]}),e.jsxs("div",{className:"treeview-story-info",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Expanded:"})," ",n.length>0?n.join(", "):"None"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Selected:"})," ",t.length>0?t.join(", "):"None"]})]}),e.jsx("div",{className:"treeview-story-container",children:e.jsx(h,{data:d,expanded:n,onExpandedChange:s,selected:t,onSelectionChange:i,selectionMode:r,variant:"subtle"})})]})},X={render:je,args:{data:d,onExpandedChange:a,onSelectionChange:a,onNodeClick:a},parameters:{docs:{description:{story:"Controlled tree view with external state management."}}}},Se=()=>{const n=(t,i,r)=>e.jsxs("div",{className:"treeview-story-custom-node",children:[e.jsx("span",{className:"treeview-story-custom-label",children:t.label}),t.metadata?.badge&&e.jsx("span",{className:"treeview-story-custom-badge",children:t.metadata.badge}),i&&e.jsx("span",{className:"treeview-story-custom-check",children:"✓"})]}),s=[{id:"projects",label:"Projects",metadata:{badge:"12"},children:[{id:"active",label:"Active Projects",metadata:{badge:"8"},children:[{id:"proj-1",label:"Website Redesign",metadata:{badge:"HIGH"}},{id:"proj-2",label:"Mobile App",metadata:{badge:"MED"}}]},{id:"completed",label:"Completed Projects",metadata:{badge:"4"},children:[{id:"proj-3",label:"Brand Identity",metadata:{badge:"DONE"}},{id:"proj-4",label:"Marketing Campaign",metadata:{badge:"DONE"}}]}]}];return e.jsx("div",{className:"treeview-story-container",children:e.jsx(h,{data:s,renderNode:n,defaultExpanded:["projects","active"],selectionMode:"single",variant:"subtle"})})},Q={render:Se,args:{data:d,onExpandedChange:a,onSelectionChange:a,onNodeClick:a},parameters:{docs:{description:{story:"Tree view with custom node rendering."}}}},Y={args:{data:[{id:"root",label:"Root",children:[{id:"level-1",label:"Level 1",children:[{id:"level-2",label:"Level 2",children:[{id:"level-3",label:"Level 3",children:[{id:"level-4",label:"Level 4",children:[{id:"level-5",label:"Level 5 (Deep!)"}]}]}]}]}]}],defaultExpanded:["root","level-1","level-2","level-3","level-4"],selectionMode:"single",variant:"lines",showLines:!0,onExpandedChange:a,onSelectionChange:a,onNodeClick:a},parameters:{docs:{description:{story:"Tree view with deep nesting levels."}}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    size: 'md',
    variant: 'default',
    selectionMode: 'single',
    showIcons: true,
    showLines: false,
    onExpandedChange: noOpCallback,
    onSelectionChange: noOpCallback,
    onNodeClick: noOpCallback
  }
}`,...z.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    defaultExpanded: ['1', '2'],
    selectionMode: 'single',
    onExpandedChange: noOpCallback,
    onSelectionChange: noOpCallback,
    onNodeClick: noOpCallback
  }
}`,...W.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    autoExpandChildren: true,
    selectionMode: 'single',
    onExpandedChange: noOpCallback,
    onSelectionChange: noOpCallback,
    onNodeClick: noOpCallback
  },
  parameters: {
    docs: {
      description: {
        story: 'When autoExpandChildren is enabled, expanding a parent node automatically expands all its children.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div className="treeview-story-section">\r
      <div>\r
        <h3>Default Behavior (Manual Expansion)</h3>\r
        <div className="treeview-story-container">\r
          <TreeView data={sampleData} autoExpandChildren={false} selectionMode="single" variant="subtle" />\r
        </div>\r
        <p><em>Each node must be expanded individually</em></p>\r
      </div>\r
      \r
      <div>\r
        <h3>Auto-Expand Children</h3>\r
        <div className="treeview-story-container">\r
          <TreeView data={sampleData} autoExpandChildren={true} selectionMode="single" variant="subtle" />\r
        </div>\r
        <p><em>Expanding a parent automatically expands all children</em></p>\r
      </div>\r
    </div>,
  args: {
    data: sampleData,
    onExpandedChange: noOpCallback,
    onSelectionChange: noOpCallback,
    onNodeClick: noOpCallback
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison between default expansion behavior and auto-expand children behavior.'
      }
    }
  }
}`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: SelectabilityTemplate,
  args: {
    data: selectabilityData,
    onExpandedChange: noOpCallback,
    onSelectionChange: noOpCallback,
    onNodeClick: noOpCallback
  },
  parameters: {
    docs: {
      description: {
        story: 'TreeView with mixed selectable/non-selectable nodes and visual selection indicators.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div className="treeview-story-section">\r
      <div>\r
        <h3>Small</h3>\r
        <div className="treeview-story-container">\r
          <TreeView data={sampleData} size="sm" defaultExpanded={['1']} selectionMode="single" />\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <h3>Medium (Default)</h3>\r
        <div className="treeview-story-container">\r
          <TreeView data={sampleData} size="md" defaultExpanded={['1']} selectionMode="single" />\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <h3>Large</h3>\r
        <div className="treeview-story-container">\r
          <TreeView data={sampleData} size="lg" defaultExpanded={['1']} selectionMode="single" />\r
        </div>\r
      </div>\r
    </div>,
  args: {
    data: sampleData,
    onExpandedChange: noOpCallback,
    onSelectionChange: noOpCallback,
    onNodeClick: noOpCallback
  },
  parameters: {
    docs: {
      description: {
        story: 'Different size variants for tree view.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div className="treeview-story-section">\r
      <div>\r
        <h3>Default</h3>\r
        <div className="treeview-story-container">\r
          <TreeView data={sampleData} variant="default" defaultExpanded={['1', '2']} selectionMode="single" />\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <h3>Subtle</h3>\r
        <div className="treeview-story-container">\r
          <TreeView data={sampleData} variant="subtle" defaultExpanded={['1', '2']} selectionMode="single" />\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <h3>With Lines</h3>\r
        <div className="treeview-story-container">\r
          <TreeView data={sampleData} variant="lines" defaultExpanded={['1', '2']} selectionMode="single" showLines={true} />\r
        </div>\r
      </div>\r
    </div>,
  args: {
    data: sampleData,
    onExpandedChange: noOpCallback,
    onSelectionChange: noOpCallback,
    onNodeClick: noOpCallback
  },
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants for tree view.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: SelectionModesTemplate,
  args: {
    data: sampleData,
    onExpandedChange: noOpCallback,
    onSelectionChange: noOpCallback,
    onNodeClick: noOpCallback
  },
  parameters: {
    docs: {
      description: {
        story: 'Different selection modes for tree view.'
      }
    }
  }
}`,...$.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    showIcons: false,
    defaultExpanded: ['1', '2'],
    selectionMode: 'single',
    onExpandedChange: noOpCallback,
    onSelectionChange: noOpCallback,
    onNodeClick: noOpCallback
  }
}`,...H.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    disabled: true,
    defaultExpanded: ['1', '2'],
    selectionMode: 'single',
    onExpandedChange: noOpCallback,
    onSelectionChange: noOpCallback,
    onNodeClick: noOpCallback
  }
}`,...J.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    data: organizationData,
    variant: 'subtle',
    defaultExpanded: ['ceo', 'cto', 'cfo'],
    selectionMode: 'single',
    onExpandedChange: noOpCallback,
    onSelectionChange: noOpCallback,
    onNodeClick: noOpCallback
  },
  parameters: {
    docs: {
      description: {
        story: 'Tree view displaying an organization chart structure.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: ControlledTreeViewTemplate,
  args: {
    data: sampleData,
    onExpandedChange: noOpCallback,
    onSelectionChange: noOpCallback,
    onNodeClick: noOpCallback
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled tree view with external state management.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: CustomRenderTemplate,
  args: {
    data: sampleData,
    onExpandedChange: noOpCallback,
    onSelectionChange: noOpCallback,
    onNodeClick: noOpCallback
  },
  parameters: {
    docs: {
      description: {
        story: 'Tree view with custom node rendering.'
      }
    }
  }
}`,...Q.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      id: 'root',
      label: 'Root',
      children: [{
        id: 'level-1',
        label: 'Level 1',
        children: [{
          id: 'level-2',
          label: 'Level 2',
          children: [{
            id: 'level-3',
            label: 'Level 3',
            children: [{
              id: 'level-4',
              label: 'Level 4',
              children: [{
                id: 'level-5',
                label: 'Level 5 (Deep!)'
              }]
            }]
          }]
        }]
      }]
    }],
    defaultExpanded: ['root', 'level-1', 'level-2', 'level-3', 'level-4'],
    selectionMode: 'single',
    variant: 'lines',
    showLines: true,
    onExpandedChange: noOpCallback,
    onSelectionChange: noOpCallback,
    onNodeClick: noOpCallback
  },
  parameters: {
    docs: {
      description: {
        story: 'Tree view with deep nesting levels.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}};const De=["Default","WithExpandedNodes","AutoExpandChildren","ExpandBehaviorComparison","SelectabilityWithIndicators","Sizes","Variants","SelectionModes","WithoutIcons","Disabled","OrganizationChart","Controlled","CustomRender","DeepNesting"];export{B as AutoExpandChildren,X as Controlled,Q as CustomRender,Y as DeepNesting,z as Default,J as Disabled,F as ExpandBehaviorComparison,G as OrganizationChart,P as SelectabilityWithIndicators,$ as SelectionModes,U as Sizes,K as Variants,W as WithExpandedNodes,H as WithoutIcons,De as __namedExportsOrder,Ee as default};
