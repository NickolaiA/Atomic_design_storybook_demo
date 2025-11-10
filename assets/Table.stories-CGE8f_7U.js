import{r as i,R as ae,j as e}from"./iframe-BMIDd8Dz.js";import{T as X}from"./Thumbnail-BCGe8roW.js";import"./preload-helper-PPVm8Dsz.js";const N=({columns:s,data:d=[],groups:u=[],size:g="md",striped:h=!1,hoverable:m=!0,bordered:v=!1,responsive:x=!0,resizable:r=!1,loading:w=!1,emptyMessage:a="No data available",selectable:l=!1,selectedRows:n=[],onRowSelect:_,sortBy:f,sortDirection:A,onSort:F,onGroupToggle:he,onRowClick:xe,onColumnResize:ne,className:Q="",style:fe,"aria-label":_e,...ve})=>{const[ye,we]=i.useState([]),[Se,ke]=i.useState(u),[L,Re]=i.useState({}),[S,re]=i.useState(null),[oe,je]=i.useState(0),[ie,Ne]=i.useState(0),Ce=ae.useRef(null),y=n.length>0?n:ye,C=_||we,k=u.length>0?u:Se,ze=i.useCallback((t,o)=>{ke(p=>p.map(c=>c.id===t?{...c,expanded:o}:c))},[]),le=he||ze,Te=i.useCallback(t=>{if(!l)return;const o=y.includes(t)?y.filter(p=>p!==t):[...y,t];C(o)},[l,y,C]),Ee=i.useCallback(()=>{if(!l)return;const t=k.length>0?k.flatMap(c=>c.records.map(te=>te.id)):d.map(c=>c.id),p=t.every(c=>y.includes(c))?[]:t;C(p)},[l,k,d,y,C]),$e=i.useCallback(t=>{if(!F)return;F(t,f===t&&A==="asc"?"desc":"asc")},[f,A,F]),De=i.useCallback((t,o)=>{if(!r)return;t.preventDefault(),t.stopPropagation();const p=t.target.closest("th");p&&(re(o),je(t.clientX),Ne(p.offsetWidth))},[r]),Y=i.useCallback(t=>{if(!S)return;const o=t.clientX-oe,p=Math.max(50,ie+o);Re(c=>({...c,[S]:p}))},[S,oe,ie]),Z=i.useCallback(()=>{S&&L[S]&&ne?.(S,L[S]),re(null)},[S,L,ne]);ae.useEffect(()=>{if(S)return document.addEventListener("mousemove",Y),document.addEventListener("mouseup",Z),document.body.style.cursor="col-resize",document.body.style.userSelect="none",()=>{document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",Z),document.body.style.cursor="",document.body.style.userSelect=""}},[S,Y,Z]);const Ae=i.useCallback(t=>{const o=k.find(p=>p.id===t);o&&le(t,!o.expanded)},[k,le]),Le=i.useMemo(()=>{const t=["table",`table--${g}`];return h&&t.push("table--striped"),m&&t.push("table--hoverable"),v&&t.push("table--bordered"),x&&t.push("table--responsive"),r&&t.push("table--resizable"),w&&t.push("table--loading"),Q&&t.push(Q),t.join(" ")},[g,h,m,v,x,r,w,Q]),ee=i.useMemo(()=>k.length>0?k.filter(t=>t.expanded!==!1).flatMap(t=>t.records.map(o=>o.id)):d.map(t=>t.id),[k,d]),de=ee.length>0&&ee.every(t=>y.includes(t)),Ie=ee.some(t=>y.includes(t)),Ue=()=>e.jsx("thead",{className:"table__header",children:e.jsxs("tr",{className:"table__header-row",children:[l&&e.jsx("th",{className:"table__header-cell table__header-cell--checkbox",children:e.jsx("input",{type:"checkbox",className:"table__checkbox",checked:de,ref:t=>{t&&(t.indeterminate=Ie&&!de)},onChange:Ee,"aria-label":"Select all rows"})}),s.map(t=>{const o=L[t.key]||t.width,p=r&&t.resizable!==!1;return e.jsx("th",{className:`table__header-cell ${t.className||""} ${t.align?`table__header-cell--${t.align}`:""} ${p?"table__header-cell--resizable":""}`,style:o?{width:typeof o=="number"?`${o}px`:o}:void 0,children:e.jsxs("div",{className:"table__header-content",children:[e.jsx("span",{className:"table__header-title",children:t.title}),t.sortable&&e.jsx("button",{className:`table__sort-button ${f===t.key?`table__sort-button--${A}`:""}`,onClick:()=>$e(t.key),"aria-label":`Sort by ${t.title}`,children:e.jsx("span",{className:"table__sort-icon",children:f===t.key?A==="asc"?"↑":"↓":"↕"})}),p&&e.jsx("div",{className:"table__resize-handle",onMouseDown:c=>De(c,t.key),role:"separator","aria-label":`Resize ${t.title} column`,"aria-orientation":"vertical"})]})},t.key)})]})}),ce=(t,o=!1)=>{const p=y.includes(t.id);return e.jsxs("tr",{className:`table__row ${p?"table__row--selected":""} ${o?"table__row--grouped":""}`,onClick:()=>xe?.(t),children:[l&&e.jsx("td",{className:"table__cell table__cell--checkbox",children:e.jsx("input",{type:"checkbox",className:"table__checkbox",checked:p,onChange:()=>Te(t.id),"aria-label":`Select row ${t.id}`})}),s.map(c=>e.jsx("td",{className:`table__cell ${c.className||""} ${c.align?`table__cell--${c.align}`:""}`,children:c.render?c.render(t[c.key],t):t[c.key]},c.key))]},t.id)},Ge=t=>{const o=t.records.map(R=>R.id),p=o.every(R=>y.includes(R)),c=o.some(R=>y.includes(R)),te=()=>{if(!l)return;const R=p?y.filter(We=>!o.includes(We)):[...new Set([...y,...o])];C(R)};return e.jsx("tr",{className:`table__group-header ${t.color?`table__group-header--${t.color}`:""}`,children:e.jsx("td",{colSpan:s.length+(l?1:0),className:"table__group-cell",children:e.jsxs("div",{className:"table__group-content",children:[e.jsx("button",{className:"table__group-toggle",onClick:()=>Ae(t.id),"aria-expanded":t.expanded!==!1?"true":"false","aria-label":`${t.expanded!==!1?"Collapse":"Expand"} group ${t.title}`,children:e.jsx("span",{className:"table__group-icon",children:t.expanded!==!1?"−":"+"})}),l&&e.jsx("input",{type:"checkbox",className:"table__checkbox table__group-checkbox",checked:p,ref:R=>{R&&(R.indeterminate=c&&!p)},onChange:te,"aria-label":`Select all in group ${t.title}`}),e.jsx("div",{className:"table__group-title",children:t.customHeaderRender?t.customHeaderRender():e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"table__group-name",children:t.title}),e.jsxs("span",{className:"table__group-count",children:["(",t.records.length,")"]})]})})]})})},`group-${t.id}`)},Me=()=>w?e.jsx("tbody",{className:"table__body",children:e.jsx("tr",{className:"table__row table__row--loading",children:e.jsx("td",{colSpan:s.length+(l?1:0),className:"table__cell table__cell--loading",children:e.jsxs("div",{className:"table__loading",children:[e.jsx("div",{className:"table__spinner"}),e.jsx("span",{children:"Loading..."})]})})})}):k.length>0?e.jsx("tbody",{className:"table__body",children:k.map(t=>e.jsxs(ae.Fragment,{children:[Ge(t),t.expanded!==!1&&t.records.map(o=>ce(o,!0))]},t.id))}):d.length===0?e.jsx("tbody",{className:"table__body",children:e.jsx("tr",{className:"table__row table__row--empty",children:e.jsx("td",{colSpan:s.length+(l?1:0),className:"table__cell table__cell--empty",children:e.jsxs("div",{className:"table__empty",children:[e.jsx("span",{className:"table__empty-icon",children:"📋"}),e.jsx("span",{className:"table__empty-message",children:a})]})})})}):e.jsx("tbody",{className:"table__body",children:d.map(t=>ce(t))}),pe=e.jsxs("table",{ref:Ce,className:Le,...fe&&{"data-custom-style":"true"},"aria-label":_e,role:"table",...ve,children:[Ue(),Me()]});return x?e.jsx("div",{className:"table-container",children:pe}):pe};N.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:"Table columns configuration"},data:{required:!1,tsType:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]"},description:"Table data - can be flat records or grouped data",defaultValue:{value:"[]",computed:!1}},groups:{required:!1,tsType:{name:"Array",elements:[{name:"TableGroup"}],raw:"TableGroup[]"},description:"Grouped data structure",defaultValue:{value:"[]",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Table size variant",defaultValue:{value:"'md'",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"Enable striped rows",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Enable row hover effects",defaultValue:{value:"true",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Enable borders",defaultValue:{value:"false",computed:!1}},responsive:{required:!1,tsType:{name:"boolean"},description:"Make table responsive with horizontal scroll",defaultValue:{value:"true",computed:!1}},resizable:{required:!1,tsType:{name:"boolean"},description:"Enable column resizing",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message",defaultValue:{value:"'No data available'",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"Enable row selection",defaultValue:{value:"false",computed:!1}},selectedRows:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"Selected row IDs",defaultValue:{value:"[]",computed:!1}},onRowSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIds: (string | number)[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},name:"selectedIds"}],return:{name:"void"}}},description:"Row selection callback"},sortBy:{required:!1,tsType:{name:"string"},description:"Sort configuration"},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}]},description:"Sort direction"},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(column: string, direction: 'asc' | 'desc') => void",signature:{arguments:[{type:{name:"string"},name:"column"},{type:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}]},name:"direction"}],return:{name:"void"}}},description:"Sort callback"},onGroupToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(groupId: string | number, expanded: boolean) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"groupId"},{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:"Group expand/collapse callback"},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(record: TableRecord) => void",signature:{arguments:[{type:{name:"TableRecord"},name:"record"}],return:{name:"void"}}},description:"Row click callback"},onColumnResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(columnKey: string, width: number) => void",signature:{arguments:[{type:{name:"string"},name:"columnKey"},{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:"Column resize callback"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label"}}};const Oe={title:"Atoms/Table",component:N,parameters:{layout:"padded",docs:{description:{component:"A powerful, accessible data table component with support for grouping, sorting, selection, and custom rendering."}}},argTypes:{data:{description:"Array of data records to display",control:!1},columns:{description:"Array of column definitions",control:!1},groups:{description:"Optional grouping configuration",control:!1},size:{description:"Size variant of the table",control:"select",options:["sm","md","lg"]},striped:{description:"Enable striped rows",control:"boolean"},bordered:{description:"Enable borders",control:"boolean"},selectable:{description:"Enable row selection",control:"boolean"},hoverable:{description:"Enable hover effects on rows",control:"boolean"},responsive:{description:"Enable responsive behavior",control:"boolean"},loading:{description:"Show loading state",control:"boolean"},emptyMessage:{description:"Custom empty state message",control:"text"},onRowSelect:{description:"Callback when selection changes",action:"selection-changed"},onSort:{description:"Callback when sorting changes",action:"sort-changed"},onRowClick:{description:"Callback when row is clicked",action:"row-clicked"}}},D=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",lastLogin:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"active",lastLogin:"2024-01-14"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"User",status:"inactive",lastLogin:"2024-01-10"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"active",lastLogin:"2024-01-13"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"Admin",status:"pending",lastLogin:"2024-01-12"}],ue=[{key:"name",title:"Name",sortable:!0},{key:"email",title:"Email",sortable:!0},{key:"role",title:"Role",align:"center"},{key:"status",title:"Status",align:"center"},{key:"lastLogin",title:"Last Login",align:"right",sortable:!0}],j={args:{data:D,columns:ue,size:"md",hoverable:!0,responsive:!0,"aria-label":"User management table"}},I={args:{...j.args,selectable:!0}},U={args:{...j.args,striped:!0}},G={args:{...j.args,bordered:!0}},M={args:{...j.args,size:"sm"}},W={args:{...j.args,size:"lg"}},P={args:{...j.args,loading:!0}},H={args:{data:[],columns:ue,emptyMessage:"No users found",size:"md"}},Pe=[{key:"name",title:"Name",sortable:!0},{key:"email",title:"Email",sortable:!0},{key:"role",title:"Role",align:"center",render:s=>e.jsxs("span",{className:`table__status table__status--${s==="Admin"?"error":s==="Editor"?"warning":"active"}`,children:[e.jsx("span",{className:"table__status-dot"}),s]})},{key:"status",title:"Status",align:"center",render:s=>e.jsxs("span",{className:`table__status table__status--${s}`,children:[e.jsx("span",{className:"table__status-dot"}),s.toUpperCase()]})},{key:"actions",title:"Actions",align:"center",render:(s,d)=>e.jsxs("div",{children:[e.jsx("button",{className:"table__action-button table__action-button--primary",children:"Edit"}),e.jsx("button",{className:"table__action-button table__action-button--error",children:"Delete"})]})}],q={args:{data:D,columns:Pe,size:"md",hoverable:!0,responsive:!0,selectable:!0}},b=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",lastLogin:"2024-01-15",department:"IT"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"Admin",status:"pending",lastLogin:"2024-01-12",department:"IT"},{id:8,name:"Sarah Davis",email:"sarah@example.com",role:"Admin",status:"active",lastLogin:"2024-01-16",department:"HR"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"active",lastLogin:"2024-01-13",department:"Marketing"},{id:7,name:"Mike Chen",email:"mike@example.com",role:"Editor",status:"active",lastLogin:"2024-01-14",department:"Marketing"},{id:9,name:"Emma Garcia",email:"emma@example.com",role:"Editor",status:"inactive",lastLogin:"2024-01-11",department:"Content"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"active",lastLogin:"2024-01-14",department:"Sales"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"User",status:"inactive",lastLogin:"2024-01-10",department:"Sales"},{id:6,name:"Lisa Wang",email:"lisa@example.com",role:"User",status:"active",lastLogin:"2024-01-15",department:"Support"},{id:10,name:"Tom Rodriguez",email:"tom@example.com",role:"User",status:"pending",lastLogin:"2024-01-09",department:"Support"}],me=[{key:"name",title:"Name",sortable:!0},{key:"email",title:"Email",sortable:!0},{key:"department",title:"Department",align:"center"},{key:"status",title:"Status",align:"center",render:s=>e.jsxs("span",{className:`table__status table__status--${s}`,children:[e.jsx("span",{className:"table__status-dot"}),s.toUpperCase()]})},{key:"lastLogin",title:"Last Login",align:"right",sortable:!0},{key:"actions",title:"Actions",align:"center",render:(s,d)=>e.jsxs("div",{children:[e.jsx("button",{className:"table__action-button table__action-button--primary",children:"Edit"}),e.jsx("button",{className:"table__action-button table__action-button--secondary",children:"View"})]})}],be=[{id:"Admin",title:"Administrators",color:"error",expanded:!0,records:b.filter(s=>s.role==="Admin")},{id:"Editor",title:"Content Editors",color:"warning",expanded:!0,records:b.filter(s=>s.role==="Editor")},{id:"User",title:"Regular Users",color:"success",expanded:!1,records:b.filter(s=>s.role==="User")}],B={args:{data:b,columns:me,groups:be,size:"md",hoverable:!0,responsive:!0,selectable:!0}},ge=[{id:"IT",title:"Information Technology",color:"primary",expanded:!0,records:b.filter(s=>s.department==="IT")},{id:"Marketing",title:"Marketing Department",color:"warning",expanded:!0,records:b.filter(s=>s.department==="Marketing")},{id:"Sales",title:"Sales Team",color:"success",expanded:!1,records:b.filter(s=>s.department==="Sales")},{id:"HR",title:"Human Resources",color:"info",expanded:!0,records:b.filter(s=>s.department==="HR")},{id:"Support",title:"Customer Support",color:"secondary",expanded:!1,records:b.filter(s=>s.department==="Support")},{id:"Content",title:"Content Team",color:"error",expanded:!0,records:b.filter(s=>s.department==="Content")}],V={args:{data:b,columns:me,groups:ge,size:"md",striped:!0,hoverable:!0,responsive:!0,selectable:!0}},se=[{key:"name",title:"Full Name",sortable:!0,width:"200px"},{key:"email",title:"Email Address",sortable:!0,render:s=>e.jsx("a",{href:`mailto:${s}`,className:"table__email-link",children:s})},{key:"role",title:"Role",align:"center",sortable:!0,render:s=>e.jsxs("span",{className:`table__status table__status--${s==="Admin"?"error":s==="Editor"?"warning":"active"}`,children:[e.jsx("span",{className:"table__status-dot"}),s]})},{key:"department",title:"Department",align:"center",sortable:!0},{key:"status",title:"Status",align:"center",sortable:!0,render:s=>e.jsxs("span",{className:`table__status table__status--${s}`,children:[e.jsx("span",{className:"table__status-dot"}),s.toUpperCase()]})},{key:"lastLogin",title:"Last Login",align:"right",sortable:!0,render:s=>new Date(s).toLocaleDateString()},{key:"actions",title:"Actions",align:"center",width:"180px",render:(s,d)=>e.jsxs("div",{children:[e.jsx("button",{className:"table__action-button table__action-button--primary",title:`Edit ${d.name}`,children:"Edit"}),e.jsx("button",{className:"table__action-button table__action-button--secondary",title:`View ${d.name} profile`,children:"View"}),e.jsx("button",{className:"table__action-button table__action-button--error",title:`Delete ${d.name}`,children:"Delete"})]})}],O={args:{data:b,columns:se,groups:ge,size:"md",bordered:!0,hoverable:!0,responsive:!0,selectable:!0,"aria-label":"Company employee directory with department grouping and management actions"}},J={args:{data:b,columns:se,groups:be,size:"md",striped:!0,hoverable:!0,responsive:!0,selectable:!0},play:async({canvasElement:s})=>{console.log("Interactive table loaded:",s)}},He=s=>{const d=["Admin","Editor","User"],u=["active","inactive","pending"],g=["IT","Marketing","Sales","HR","Support","Content"];return Array.from({length:s},(h,m)=>({id:m+1,name:`User ${m+1}`,email:`user${m+1}@example.com`,role:d[m%d.length],status:u[m%u.length],department:g[m%g.length],lastLogin:new Date(2024,0,Math.floor(Math.random()*30)+1).toISOString().split("T")[0]}))},K={args:{data:He(100),columns:se,size:"sm",striped:!0,hoverable:!0,responsive:!0,selectable:!0,"aria-label":"Performance test with 100 records"}},z=()=>{const[s,d]=i.useState([]),[u,g]=i.useState(D),[h,m]=i.useState(""),v=u.map(n=>({...n,thumbnail:`https://picsum.photos/seed/${n.id}/80/80`})),x=n=>{m(n),setTimeout(()=>m(""),3e3)},r=n=>{x(`Editing: ${n.name}`),console.log("Edit clicked:",n)},w=n=>{g(_=>_.filter(f=>f.id!==n.id)),x(`Deleted: ${n.name}`)},a=n=>{g(_=>_.map(f=>f.id===n.id?{...f,status:f.status==="active"?"inactive":"active"}:f)),x(`Status toggled for: ${n.name}`)},l=[{key:"thumbnail",title:"",align:"center",width:"80px",render:n=>e.jsx(X,{src:n,alt:"Product thumbnail",size:"md",shape:"rounded",bordered:!0,showPopupOnHover:!0,popupMaxWidth:"320px",popupMaxHeight:"320px",popupDelay:200})},{key:"name",title:"Name",sortable:!0},{key:"email",title:"Email",sortable:!0},{key:"role",title:"Role",align:"center",render:n=>e.jsxs("span",{className:`table__status table__status--${n==="Admin"?"error":n==="Editor"?"warning":"info"}`,children:[e.jsx("span",{className:"table__status-dot"}),n]})},{key:"status",title:"Status",align:"center",render:(n,_)=>e.jsxs("label",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:n==="active",onChange:()=>a(_),style:{cursor:"pointer"}}),e.jsxs("span",{className:`table__status table__status--${n}`,children:[e.jsx("span",{className:"table__status-dot"}),n.toUpperCase()]})]})},{key:"lastLogin",title:"Last Login",align:"right",sortable:!0},{key:"actions",title:"Actions",align:"center",render:(n,_)=>e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center"},children:[e.jsx("button",{className:"table__action-button table__action-button--primary",onClick:f=>{f.stopPropagation(),r(_)},children:"Edit"}),e.jsx("button",{className:"table__action-button table__action-button--error",onClick:f=>{f.stopPropagation(),w(_)},children:"Delete"})]})}];return e.jsxs("div",{children:[h&&e.jsx("div",{style:{position:"fixed",top:"20px",right:"20px",background:"#4caf50",color:"white",padding:"12px 24px",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0,0,0,0.2)",zIndex:1e3},children:h}),e.jsxs("div",{style:{marginBottom:"16px",padding:"12px",background:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Selected Rows:"})," ",s.length>0?s.join(", "):"None",s.length>0&&e.jsx("button",{style:{marginLeft:"16px",padding:"4px 12px",cursor:"pointer"},onClick:()=>{d([]),x("Selection cleared")},children:"Clear Selection"})]}),e.jsx(N,{data:v,columns:l,size:"md",hoverable:!0,responsive:!0,selectable:!0,striped:!0,selectedRows:s,onRowSelect:d,onRowClick:n=>x(`Row clicked: ${n.name}`),"aria-label":"Interactive table with actions"})]})},T=()=>{const[s,d]=i.useState([{id:"Admin",title:"Administrators (2)",color:"error",expanded:!0,records:b.filter(a=>a.role==="Admin").map(a=>({...a,thumbnail:`https://picsum.photos/seed/${a.id}/80/80`}))},{id:"Editor",title:"Content Editors (3)",color:"warning",expanded:!1,records:b.filter(a=>a.role==="Editor").map(a=>({...a,thumbnail:`https://picsum.photos/seed/${a.id}/80/80`}))},{id:"User",title:"Regular Users (4)",color:"success",expanded:!1,records:b.filter(a=>a.role==="User").map(a=>({...a,thumbnail:`https://picsum.photos/seed/${a.id}/80/80`}))}]),[u,g]=i.useState([]),[h,m]=i.useState(""),v=a=>{m(a),setTimeout(()=>m(""),3e3)},x=(a,l)=>{d(n=>n.map(_=>_.id===a?{..._,expanded:l}:_)),v(`Group ${a} ${l?"expanded":"collapsed"}`)},r=(a,l)=>{v(`${a} action for: ${l.name}`)},w=[{key:"thumbnail",title:"",align:"center",width:"80px",render:a=>e.jsx(X,{src:a,alt:"Product thumbnail",size:"md",shape:"rounded",bordered:!0,showPopupOnHover:!0,popupMaxWidth:"320px",popupMaxHeight:"320px",popupDelay:200})},{key:"name",title:"Name",sortable:!0},{key:"email",title:"Email",sortable:!0},{key:"department",title:"Department",align:"center"},{key:"status",title:"Status",align:"center",render:a=>e.jsxs("span",{className:`table__status table__status--${a}`,children:[e.jsx("span",{className:"table__status-dot"}),a.toUpperCase()]})},{key:"lastLogin",title:"Last Login",align:"right"},{key:"actions",title:"Actions",align:"center",render:(a,l)=>e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center"},children:[e.jsx("button",{className:"table__action-button table__action-button--primary",onClick:n=>{n.stopPropagation(),r("Edit",l)},children:"Edit"}),e.jsx("button",{className:"table__action-button table__action-button--secondary",onClick:n=>{n.stopPropagation(),r("View",l)},children:"View"})]})}];return e.jsxs("div",{children:[h&&e.jsx("div",{style:{position:"fixed",top:"20px",right:"20px",background:"#2196f3",color:"white",padding:"12px 24px",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0,0,0,0.2)",zIndex:1e3},children:h}),e.jsxs("div",{style:{marginBottom:"16px",padding:"12px",background:"#f5f5f5",borderRadius:"4px"},children:[e.jsxs("div",{style:{marginBottom:"8px"},children:[e.jsx("strong",{children:"Selected Rows:"})," ",u.length>0?u.join(", "):"None"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Expanded Groups:"})," ",s.filter(a=>a.expanded).map(a=>a.id).join(", ")||"None"]})]}),e.jsx(N,{data:b,columns:w,groups:s,size:"md",hoverable:!0,responsive:!0,selectable:!0,selectedRows:u,onRowSelect:g,onGroupToggle:x,onRowClick:a=>v(`Row clicked: ${a.name}`),"aria-label":"Interactive table with expandable groups"})]})},E=()=>{const[s,d]=i.useState([]),[u,g]=i.useState(new Set),[h,m]=i.useState(""),v=a=>{m(a),setTimeout(()=>m(""),3e3)},x=a=>{g(l=>{const n=new Set(l);return n.has(a)?(n.delete(a),v(`Collapsed details for row ${a}`)):(n.add(a),v(`Expanded details for row ${a}`)),n})},r=[{key:"expand",title:"",align:"center",width:"50px",render:(a,l)=>e.jsx("button",{onClick:n=>{n.stopPropagation(),x(l.id)},style:{background:"none",border:"none",cursor:"pointer",fontSize:"18px",padding:"4px 8px"},children:u.has(l.id)?"▼":"▶"})},{key:"thumbnail",title:"",align:"center",width:"80px",render:a=>e.jsx(X,{src:a,alt:"Product thumbnail",size:"md",shape:"rounded",bordered:!0,showPopupOnHover:!0,popupMaxWidth:"320px",popupMaxHeight:"320px",popupDelay:200})},{key:"name",title:"Name",sortable:!0},{key:"email",title:"Email",sortable:!0},{key:"role",title:"Role",align:"center",render:a=>e.jsxs("span",{className:`table__status table__status--${a==="Admin"?"error":a==="Editor"?"warning":"info"}`,children:[e.jsx("span",{className:"table__status-dot"}),a]})},{key:"status",title:"Status",align:"center",render:a=>e.jsxs("span",{className:`table__status table__status--${a}`,children:[e.jsx("span",{className:"table__status-dot"}),a.toUpperCase()]})}],w=D.map(a=>({...a,thumbnail:`https://picsum.photos/seed/${a.id}/80/80`,details:{phone:"+1 (555) 123-4567",address:"123 Main St, City, State 12345",joinDate:"2023-06-15",lastActivity:"2024-01-15 10:30 AM",notes:"User account in good standing."}}));return e.jsxs("div",{children:[h&&e.jsx("div",{style:{position:"fixed",top:"20px",right:"20px",background:"#9c27b0",color:"white",padding:"12px 24px",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0,0,0,0.2)",zIndex:1e3},children:h}),e.jsxs("div",{style:{marginBottom:"16px",padding:"12px",background:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Selected Rows:"})," ",s.length>0?s.join(", "):"None",e.jsxs("span",{style:{marginLeft:"20px"},children:[e.jsx("strong",{children:"Expanded Rows:"})," ",u.size>0?Array.from(u).join(", "):"None"]})]}),e.jsx("div",{children:w.map(a=>e.jsxs("div",{style:{marginBottom:"2px"},children:[e.jsx(N,{data:[a],columns:r,size:"md",hoverable:!0,selectable:!0,selectedRows:s,onRowSelect:d,"aria-label":"Table row for user"}),u.has(a.id)&&e.jsxs("div",{style:{padding:"16px",background:"#f9f9f9",border:"1px solid #e0e0e0",borderTop:"none",marginBottom:"8px"},children:[e.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Additional Details"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"12px"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Phone:"})," ",a.details.phone]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Join Date:"})," ",a.details.joinDate]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Address:"})," ",a.details.address]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Last Activity:"})," ",a.details.lastActivity]}),e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsx("strong",{children:"Notes:"})," ",a.details.notes]})]})]})]},a.id))})]})},$=()=>{const[s,d]=i.useState([]),[u,g]=i.useState(""),h=r=>{g(r),setTimeout(()=>g(""),3e3)},m=(r,w)=>{h(`${r} column resized to ${w}px`),console.log(`Column ${r} resized to ${w}px`)},v=D.map(r=>({...r,thumbnail:`https://picsum.photos/seed/${r.id}/80/80`})),x=[{key:"thumbnail",title:"",align:"center",width:"80px",resizable:!1,render:r=>e.jsx(X,{src:r,alt:"Product thumbnail",size:"md",shape:"rounded",bordered:!0,showPopupOnHover:!0,popupMaxWidth:"320px",popupMaxHeight:"320px",popupDelay:200})},{key:"name",title:"Name",sortable:!0,resizable:!0,width:"200px"},{key:"email",title:"Email",sortable:!0,resizable:!0,width:"250px"},{key:"role",title:"Role",align:"center",resizable:!0,width:"150px",render:r=>e.jsxs("span",{className:`table__status table__status--${r==="Admin"?"error":r==="Editor"?"warning":"info"}`,children:[e.jsx("span",{className:"table__status-dot"}),r]})},{key:"status",title:"Status",align:"center",resizable:!0,width:"120px",render:r=>e.jsxs("span",{className:`table__status table__status--${r}`,children:[e.jsx("span",{className:"table__status-dot"}),r.toUpperCase()]})},{key:"lastLogin",title:"Last Login",align:"right",sortable:!0,resizable:!0,width:"180px"}];return e.jsxs("div",{style:{padding:"20px"},children:[u&&e.jsx("div",{style:{position:"fixed",top:"20px",right:"20px",padding:"12px 20px",background:"#4caf50",color:"white",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0,0,0,0.2)",zIndex:1e3},children:u}),e.jsxs("div",{style:{marginBottom:"16px",padding:"12px",background:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"💡 Resizable Columns Demo:"})," Hover over the column headers and drag the resize handles (vertical lines) to adjust column widths.",e.jsxs("div",{style:{marginTop:"8px",fontSize:"14px",color:"#666"},children:["• Drag the resize handle on the right edge of each column header",e.jsx("br",{}),"• The thumbnail column cannot be resized",e.jsx("br",{}),"• All other columns are resizable"]})]}),e.jsx(N,{data:v,columns:x,size:"md",hoverable:!0,responsive:!0,selectable:!0,striped:!0,bordered:!0,resizable:!0,selectedRows:s,onRowSelect:d,onColumnResize:m,onRowClick:r=>h(`Row clicked: ${r.name}`),"aria-label":"Resizable table"})]})};z.__docgenInfo={description:"",methods:[],displayName:"InteractiveWithActions"};T.__docgenInfo={description:"",methods:[],displayName:"InteractiveExpandableGroups"};E.__docgenInfo={description:"",methods:[],displayName:"InteractiveWithRowDetails"};$.__docgenInfo={description:"",methods:[],displayName:"InteractiveResizableColumns"};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: basicColumns,
    size: 'md',
    hoverable: true,
    responsive: true,
    'aria-label': 'User management table'
  }
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectable: true
  }
}`,...I.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    striped: true
  }
}`,...U.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    bordered: true
  }
}`,...G.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'sm'
  }
}`,...M.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'lg'
  }
}`,...W.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...P.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: basicColumns,
    emptyMessage: 'No users found',
    size: 'md'
  }
}`,...H.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: columnsWithCustomRender,
    size: 'md',
    hoverable: true,
    responsive: true,
    selectable: true
  }
}`,...q.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    data: groupedUsers,
    columns: groupedColumns,
    groups: userGroups,
    size: 'md',
    hoverable: true,
    responsive: true,
    selectable: true
  }
}`,...B.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    data: groupedUsers,
    columns: groupedColumns,
    groups: departmentGroups,
    size: 'md',
    striped: true,
    hoverable: true,
    responsive: true,
    selectable: true
  }
}`,...V.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    data: groupedUsers,
    columns: complexColumns,
    groups: departmentGroups,
    size: 'md',
    bordered: true,
    hoverable: true,
    responsive: true,
    selectable: true,
    'aria-label': 'Company employee directory with department grouping and management actions'
  }
}`,...O.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    data: groupedUsers,
    columns: complexColumns,
    groups: userGroups,
    size: 'md',
    striped: true,
    hoverable: true,
    responsive: true,
    selectable: true
  },
  play: async ({
    canvasElement
  }) => {
    // This would be used for interaction testing in Storybook
    console.log('Interactive table loaded:', canvasElement);
  }
}`,...J.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateLargeDataset(100),
    columns: complexColumns,
    size: 'sm',
    striped: true,
    hoverable: true,
    responsive: true,
    selectable: true,
    'aria-label': 'Performance test with 100 records'
  }
}`,...K.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [data, setData] = useState(sampleUsers);
  const [notification, setNotification] = useState('');

  // Add random product images to users
  const usersWithImages = data.map(user => ({
    ...user,
    thumbnail: \`https://picsum.photos/seed/\${user.id}/80/80\`
  }));
  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };
  const handleEdit = (record: TableRecord) => {
    showNotification(\`Editing: \${record.name}\`);
    console.log('Edit clicked:', record);
  };
  const handleDelete = (record: TableRecord) => {
    setData(prevData => prevData.filter(item => item.id !== record.id));
    showNotification(\`Deleted: \${record.name}\`);
  };
  const handleToggleStatus = (record: TableRecord) => {
    setData(prevData => prevData.map(item => item.id === record.id ? {
      ...item,
      status: item.status === 'active' ? 'inactive' : 'active'
    } : item));
    showNotification(\`Status toggled for: \${record.name}\`);
  };
  const interactiveColumns: TableColumn[] = [{
    key: 'thumbnail',
    title: '',
    align: 'center',
    width: '80px',
    render: value => <Thumbnail src={value} alt="Product thumbnail" size="md" shape="rounded" bordered showPopupOnHover popupMaxWidth="320px" popupMaxHeight="320px" popupDelay={200} />
  }, {
    key: 'name',
    title: 'Name',
    sortable: true
  }, {
    key: 'email',
    title: 'Email',
    sortable: true
  }, {
    key: 'role',
    title: 'Role',
    align: 'center',
    render: value => <span className={\`table__status table__status--\${value === 'Admin' ? 'error' : value === 'Editor' ? 'warning' : 'info'}\`}>\r
          <span className="table__status-dot"></span>\r
          {value}\r
        </span>
  }, {
    key: 'status',
    title: 'Status',
    align: 'center',
    render: (value, record) => <label style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      cursor: 'pointer'
    }}>\r
          <input type="checkbox" checked={value === 'active'} onChange={() => handleToggleStatus(record)} style={{
        cursor: 'pointer'
      }} />\r
          <span className={\`table__status table__status--\${value}\`}>\r
            <span className="table__status-dot"></span>\r
            {value.toUpperCase()}\r
          </span>\r
        </label>
  }, {
    key: 'lastLogin',
    title: 'Last Login',
    align: 'right',
    sortable: true
  }, {
    key: 'actions',
    title: 'Actions',
    align: 'center',
    render: (_value, record) => <div style={{
      display: 'flex',
      gap: '8px',
      justifyContent: 'center'
    }}>\r
          <button className="table__action-button table__action-button--primary" onClick={e => {
        e.stopPropagation();
        handleEdit(record);
      }}>\r
            Edit\r
          </button>\r
          <button className="table__action-button table__action-button--error" onClick={e => {
        e.stopPropagation();
        handleDelete(record);
      }}>\r
            Delete\r
          </button>\r
        </div>
  }];
  return <div>\r
      {notification && <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: '#4caf50',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '4px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      zIndex: 1000
    }}>\r
          {notification}\r
        </div>}\r
      <div style={{
      marginBottom: '16px',
      padding: '12px',
      background: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Selected Rows:</strong> {selectedRows.length > 0 ? selectedRows.join(', ') : 'None'}\r
        {selectedRows.length > 0 && <button style={{
        marginLeft: '16px',
        padding: '4px 12px',
        cursor: 'pointer'
      }} onClick={() => {
        setSelectedRows([]);
        showNotification('Selection cleared');
      }}>\r
            Clear Selection\r
          </button>}\r
      </div>\r
      <Table data={usersWithImages} columns={interactiveColumns} size="md" hoverable responsive selectable striped selectedRows={selectedRows} onRowSelect={setSelectedRows} onRowClick={record => showNotification(\`Row clicked: \${record.name}\`)} aria-label="Interactive table with actions" />\r
    </div>;
}`,...z.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [groups, setGroups] = useState<TableGroup[]>([{
    id: 'Admin',
    title: 'Administrators (2)',
    color: 'error',
    expanded: true,
    records: groupedUsers.filter(user => user.role === 'Admin').map(user => ({
      ...user,
      thumbnail: \`https://picsum.photos/seed/\${user.id}/80/80\`
    }))
  }, {
    id: 'Editor',
    title: 'Content Editors (3)',
    color: 'warning',
    expanded: false,
    records: groupedUsers.filter(user => user.role === 'Editor').map(user => ({
      ...user,
      thumbnail: \`https://picsum.photos/seed/\${user.id}/80/80\`
    }))
  }, {
    id: 'User',
    title: 'Regular Users (4)',
    color: 'success',
    expanded: false,
    records: groupedUsers.filter(user => user.role === 'User').map(user => ({
      ...user,
      thumbnail: \`https://picsum.photos/seed/\${user.id}/80/80\`
    }))
  }]);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [notification, setNotification] = useState('');
  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };
  const handleGroupToggle = (groupId: string | number, expanded: boolean) => {
    setGroups(prevGroups => prevGroups.map(group => group.id === groupId ? {
      ...group,
      expanded
    } : group));
    showNotification(\`Group \${groupId} \${expanded ? 'expanded' : 'collapsed'}\`);
  };
  const handleAction = (action: string, record: TableRecord) => {
    showNotification(\`\${action} action for: \${record.name}\`);
  };
  const interactiveColumns: TableColumn[] = [{
    key: 'thumbnail',
    title: '',
    align: 'center',
    width: '80px',
    render: value => <Thumbnail src={value} alt="Product thumbnail" size="md" shape="rounded" bordered showPopupOnHover popupMaxWidth="320px" popupMaxHeight="320px" popupDelay={200} />
  }, {
    key: 'name',
    title: 'Name',
    sortable: true
  }, {
    key: 'email',
    title: 'Email',
    sortable: true
  }, {
    key: 'department',
    title: 'Department',
    align: 'center'
  }, {
    key: 'status',
    title: 'Status',
    align: 'center',
    render: value => <span className={\`table__status table__status--\${value}\`}>\r
          <span className="table__status-dot"></span>\r
          {value.toUpperCase()}\r
        </span>
  }, {
    key: 'lastLogin',
    title: 'Last Login',
    align: 'right'
  }, {
    key: 'actions',
    title: 'Actions',
    align: 'center',
    render: (_value, record) => <div style={{
      display: 'flex',
      gap: '8px',
      justifyContent: 'center'
    }}>\r
          <button className="table__action-button table__action-button--primary" onClick={e => {
        e.stopPropagation();
        handleAction('Edit', record);
      }}>\r
            Edit\r
          </button>\r
          <button className="table__action-button table__action-button--secondary" onClick={e => {
        e.stopPropagation();
        handleAction('View', record);
      }}>\r
            View\r
          </button>\r
        </div>
  }];
  return <div>\r
      {notification && <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: '#2196f3',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '4px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      zIndex: 1000
    }}>\r
          {notification}\r
        </div>}\r
      <div style={{
      marginBottom: '16px',
      padding: '12px',
      background: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <div style={{
        marginBottom: '8px'
      }}>\r
          <strong>Selected Rows:</strong> {selectedRows.length > 0 ? selectedRows.join(', ') : 'None'}\r
        </div>\r
        <div>\r
          <strong>Expanded Groups:</strong> {groups.filter(g => g.expanded).map(g => g.id).join(', ') || 'None'}\r
        </div>\r
      </div>\r
      <Table data={groupedUsers} columns={interactiveColumns} groups={groups} size="md" hoverable responsive selectable selectedRows={selectedRows} onRowSelect={setSelectedRows} onGroupToggle={handleGroupToggle} onRowClick={record => showNotification(\`Row clicked: \${record.name}\`)} aria-label="Interactive table with expandable groups" />\r
    </div>;
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [expandedRows, setExpandedRows] = useState<Set<string | number>>(new Set());
  const [notification, setNotification] = useState('');
  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };
  const toggleRowExpansion = (id: string | number) => {
    setExpandedRows(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        showNotification(\`Collapsed details for row \${id}\`);
      } else {
        next.add(id);
        showNotification(\`Expanded details for row \${id}\`);
      }
      return next;
    });
  };
  const detailedColumns: TableColumn[] = [{
    key: 'expand',
    title: '',
    align: 'center',
    width: '50px',
    render: (_value, record) => <button onClick={e => {
      e.stopPropagation();
      toggleRowExpansion(record.id);
    }} style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '18px',
      padding: '4px 8px'
    }}>\r
          {expandedRows.has(record.id) ? '▼' : '▶'}\r
        </button>
  }, {
    key: 'thumbnail',
    title: '',
    align: 'center',
    width: '80px',
    render: value => <Thumbnail src={value} alt="Product thumbnail" size="md" shape="rounded" bordered showPopupOnHover popupMaxWidth="320px" popupMaxHeight="320px" popupDelay={200} />
  }, {
    key: 'name',
    title: 'Name',
    sortable: true
  }, {
    key: 'email',
    title: 'Email',
    sortable: true
  }, {
    key: 'role',
    title: 'Role',
    align: 'center',
    render: value => <span className={\`table__status table__status--\${value === 'Admin' ? 'error' : value === 'Editor' ? 'warning' : 'info'}\`}>\r
          <span className="table__status-dot"></span>\r
          {value}\r
        </span>
  }, {
    key: 'status',
    title: 'Status',
    align: 'center',
    render: value => <span className={\`table__status table__status--\${value}\`}>\r
          <span className="table__status-dot"></span>\r
          {value.toUpperCase()}\r
        </span>
  }];

  // Create enhanced data with details
  const dataWithDetails = sampleUsers.map(user => ({
    ...user,
    thumbnail: \`https://picsum.photos/seed/\${user.id}/80/80\`,
    details: {
      phone: '+1 (555) 123-4567',
      address: '123 Main St, City, State 12345',
      joinDate: '2023-06-15',
      lastActivity: '2024-01-15 10:30 AM',
      notes: 'User account in good standing.'
    }
  }));
  return <div>\r
      {notification && <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: '#9c27b0',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '4px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      zIndex: 1000
    }}>\r
          {notification}\r
        </div>}\r
      <div style={{
      marginBottom: '16px',
      padding: '12px',
      background: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Selected Rows:</strong> {selectedRows.length > 0 ? selectedRows.join(', ') : 'None'}\r
        <span style={{
        marginLeft: '20px'
      }}>\r
          <strong>Expanded Rows:</strong> {expandedRows.size > 0 ? Array.from(expandedRows).join(', ') : 'None'}\r
        </span>\r
      </div>\r
      <div>\r
        {dataWithDetails.map(record => <div key={record.id} style={{
        marginBottom: '2px'
      }}>\r
            <Table data={[record]} columns={detailedColumns} size="md" hoverable selectable selectedRows={selectedRows} onRowSelect={setSelectedRows} aria-label="Table row for user" />\r
            {expandedRows.has(record.id) && <div style={{
          padding: '16px',
          background: '#f9f9f9',
          border: '1px solid #e0e0e0',
          borderTop: 'none',
          marginBottom: '8px'
        }}>\r
                <h4 style={{
            margin: '0 0 12px 0'
          }}>Additional Details</h4>\r
                <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px'
          }}>\r
                  <div>\r
                    <strong>Phone:</strong> {record.details.phone}\r
                  </div>\r
                  <div>\r
                    <strong>Join Date:</strong> {record.details.joinDate}\r
                  </div>\r
                  <div>\r
                    <strong>Address:</strong> {record.details.address}\r
                  </div>\r
                  <div>\r
                    <strong>Last Activity:</strong> {record.details.lastActivity}\r
                  </div>\r
                  <div style={{
              gridColumn: '1 / -1'
            }}>\r
                    <strong>Notes:</strong> {record.details.notes}\r
                  </div>\r
                </div>\r
              </div>}\r
          </div>)}\r
      </div>\r
    </div>;
}`,...E.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [notification, setNotification] = useState('');
  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };
  const handleColumnResize = (columnKey: string, width: number) => {
    showNotification(\`\${columnKey} column resized to \${width}px\`);
    console.log(\`Column \${columnKey} resized to \${width}px\`);
  };
  const usersWithImages = sampleUsers.map(user => ({
    ...user,
    thumbnail: \`https://picsum.photos/seed/\${user.id}/80/80\`
  }));
  const resizableColumns: TableColumn[] = [{
    key: 'thumbnail',
    title: '',
    align: 'center',
    width: '80px',
    resizable: false,
    // Don't allow resizing thumbnail column
    render: value => <Thumbnail src={value} alt="Product thumbnail" size="md" shape="rounded" bordered showPopupOnHover popupMaxWidth="320px" popupMaxHeight="320px" popupDelay={200} />
  }, {
    key: 'name',
    title: 'Name',
    sortable: true,
    resizable: true,
    width: '200px'
  }, {
    key: 'email',
    title: 'Email',
    sortable: true,
    resizable: true,
    width: '250px'
  }, {
    key: 'role',
    title: 'Role',
    align: 'center',
    resizable: true,
    width: '150px',
    render: value => <span className={\`table__status table__status--\${value === 'Admin' ? 'error' : value === 'Editor' ? 'warning' : 'info'}\`}>\r
          <span className="table__status-dot"></span>\r
          {value}\r
        </span>
  }, {
    key: 'status',
    title: 'Status',
    align: 'center',
    resizable: true,
    width: '120px',
    render: value => <span className={\`table__status table__status--\${value}\`}>\r
          <span className="table__status-dot"></span>\r
          {value.toUpperCase()}\r
        </span>
  }, {
    key: 'lastLogin',
    title: 'Last Login',
    align: 'right',
    sortable: true,
    resizable: true,
    width: '180px'
  }];
  return <div style={{
    padding: '20px'
  }}>\r
      {notification && <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '12px 20px',
      background: '#4caf50',
      color: 'white',
      borderRadius: '4px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      zIndex: 1000
    }}>\r
          {notification}\r
        </div>}\r
      \r
      <div style={{
      marginBottom: '16px',
      padding: '12px',
      background: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>💡 Resizable Columns Demo:</strong> Hover over the column headers and drag the resize handles (vertical lines) to adjust column widths.\r
        <div style={{
        marginTop: '8px',
        fontSize: '14px',
        color: '#666'
      }}>\r
          • Drag the resize handle on the right edge of each column header<br />\r
          • The thumbnail column cannot be resized<br />\r
          • All other columns are resizable\r
        </div>\r
      </div>\r
\r
      <Table data={usersWithImages} columns={resizableColumns} size="md" hoverable responsive selectable striped bordered resizable selectedRows={selectedRows} onRowSelect={setSelectedRows} onColumnResize={handleColumnResize} onRowClick={record => showNotification(\`Row clicked: \${record.name}\`)} aria-label="Resizable table" />\r
    </div>;
}`,...$.parameters?.docs?.source}}};const Je=["Default","WithSelection","Striped","Bordered","SmallSize","LargeSize","Loading","Empty","WithCustomRendering","WithGrouping","GroupedByDepartment","ComplexTable","InteractiveTable","LargeDataset","InteractiveWithActions","InteractiveExpandableGroups","InteractiveWithRowDetails","InteractiveResizableColumns"];export{G as Bordered,O as ComplexTable,j as Default,H as Empty,V as GroupedByDepartment,T as InteractiveExpandableGroups,$ as InteractiveResizableColumns,J as InteractiveTable,z as InteractiveWithActions,E as InteractiveWithRowDetails,K as LargeDataset,W as LargeSize,P as Loading,M as SmallSize,U as Striped,q as WithCustomRendering,B as WithGrouping,I as WithSelection,Je as __namedExportsOrder,Oe as default};
