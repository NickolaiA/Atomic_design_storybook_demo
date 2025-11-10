import{r as b,j as a,R as ve}from"./iframe-C-Dpaqp0.js";import"./preload-helper-PPVm8Dsz.js";const F=({columns:t,data:n=[],groups:g=[],size:h="md",striped:$=!1,hoverable:p=!0,bordered:V=!1,responsive:z=!0,loading:D=!1,emptyMessage:Z="No data available",selectable:c=!1,selectedRows:W=[],onRowSelect:ee,sortBy:f,sortDirection:y,onSort:G,onGroupToggle:ae,onRowClick:te,className:U="",style:se,"aria-label":re,...ne})=>{const[le,oe]=b.useState([]),[ie,ce]=b.useState(g),o=W.length>0?W:le,_=ee||oe,d=g.length>0?g:ie,de=b.useCallback((e,r)=>{ce(l=>l.map(s=>s.id===e?{...s,expanded:r}:s))},[]),H=ae||de,me=b.useCallback(e=>{if(!c)return;const r=o.includes(e)?o.filter(l=>l!==e):[...o,e];_(r)},[c,o,_]),ue=b.useCallback(()=>{if(!c)return;const e=d.length>0?d.flatMap(s=>s.records.map(I=>I.id)):n.map(s=>s.id),l=e.every(s=>o.includes(s))?[]:e;_(l)},[c,d,n,o,_]),pe=b.useCallback(e=>{if(!G)return;G(e,f===e&&y==="asc"?"desc":"asc")},[f,y,G]),be=b.useCallback(e=>{const r=d.find(l=>l.id===e);r&&H(e,!r.expanded)},[d,H]),ge=b.useMemo(()=>{const e=["table",`table--${h}`];return $&&e.push("table--striped"),p&&e.push("table--hoverable"),V&&e.push("table--bordered"),z&&e.push("table--responsive"),D&&e.push("table--loading"),U&&e.push(U),e.join(" ")},[h,$,p,V,z,D,U]),q=b.useMemo(()=>d.length>0?d.filter(e=>e.expanded!==!1).flatMap(e=>e.records.map(r=>r.id)):n.map(e=>e.id),[d,n]),B=q.length>0&&q.every(e=>o.includes(e)),he=q.some(e=>o.includes(e)),_e=()=>a.jsx("thead",{className:"table__header",children:a.jsxs("tr",{className:"table__header-row",children:[c&&a.jsx("th",{className:"table__header-cell table__header-cell--checkbox",children:a.jsx("input",{type:"checkbox",className:"table__checkbox",checked:B,ref:e=>{e&&(e.indeterminate=he&&!B)},onChange:ue,"aria-label":"Select all rows"})}),t.map(e=>a.jsx("th",{className:`table__header-cell ${e.className||""} ${e.align?`table__header-cell--${e.align}`:""}`,...e.width&&{"data-width":e.width},children:a.jsxs("div",{className:"table__header-content",children:[a.jsx("span",{className:"table__header-title",children:e.title}),e.sortable&&a.jsx("button",{className:`table__sort-button ${f===e.key?`table__sort-button--${y}`:""}`,onClick:()=>pe(e.key),"aria-label":`Sort by ${e.title}`,children:a.jsx("span",{className:"table__sort-icon",children:f===e.key?y==="asc"?"↑":"↓":"↕"})})]})},e.key))]})}),J=(e,r=!1)=>{const l=o.includes(e.id);return a.jsxs("tr",{className:`table__row ${l?"table__row--selected":""} ${r?"table__row--grouped":""}`,onClick:()=>te?.(e),children:[c&&a.jsx("td",{className:"table__cell table__cell--checkbox",children:a.jsx("input",{type:"checkbox",className:"table__checkbox",checked:l,onChange:()=>me(e.id),"aria-label":`Select row ${e.id}`})}),t.map(s=>a.jsx("td",{className:`table__cell ${s.className||""} ${s.align?`table__cell--${s.align}`:""}`,children:s.render?s.render(e[s.key],e):e[s.key]},s.key))]},e.id)},fe=e=>{const r=e.records.map(m=>m.id),l=r.every(m=>o.includes(m)),s=r.some(m=>o.includes(m)),I=()=>{if(!c)return;const m=l?o.filter(xe=>!r.includes(xe)):[...new Set([...o,...r])];_(m)};return a.jsx("tr",{className:`table__group-header ${e.color?`table__group-header--${e.color}`:""}`,children:a.jsx("td",{colSpan:t.length+(c?1:0),className:"table__group-cell",children:a.jsxs("div",{className:"table__group-content",children:[a.jsx("button",{className:"table__group-toggle",onClick:()=>be(e.id),"aria-expanded":e.expanded!==!1?"true":"false","aria-label":`${e.expanded!==!1?"Collapse":"Expand"} group ${e.title}`,children:a.jsx("span",{className:"table__group-icon",children:e.expanded!==!1?"−":"+"})}),c&&a.jsx("input",{type:"checkbox",className:"table__checkbox table__group-checkbox",checked:l,ref:m=>{m&&(m.indeterminate=s&&!l)},onChange:I,"aria-label":`Select all in group ${e.title}`}),a.jsx("div",{className:"table__group-title",children:e.customHeaderRender?e.customHeaderRender():a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"table__group-name",children:e.title}),a.jsxs("span",{className:"table__group-count",children:["(",e.records.length,")"]})]})})]})})},`group-${e.id}`)},ye=()=>D?a.jsx("tbody",{className:"table__body",children:a.jsx("tr",{className:"table__row table__row--loading",children:a.jsx("td",{colSpan:t.length+(c?1:0),className:"table__cell table__cell--loading",children:a.jsxs("div",{className:"table__loading",children:[a.jsx("div",{className:"table__spinner"}),a.jsx("span",{children:"Loading..."})]})})})}):d.length>0?a.jsx("tbody",{className:"table__body",children:d.map(e=>a.jsxs(ve.Fragment,{children:[fe(e),e.expanded!==!1&&e.records.map(r=>J(r,!0))]},e.id))}):n.length===0?a.jsx("tbody",{className:"table__body",children:a.jsx("tr",{className:"table__row table__row--empty",children:a.jsx("td",{colSpan:t.length+(c?1:0),className:"table__cell table__cell--empty",children:a.jsxs("div",{className:"table__empty",children:[a.jsx("span",{className:"table__empty-icon",children:"📋"}),a.jsx("span",{className:"table__empty-message",children:Z})]})})})}):a.jsx("tbody",{className:"table__body",children:n.map(e=>J(e))}),P=a.jsxs("table",{className:ge,...se&&{"data-custom-style":"true"},"aria-label":re,role:"table",...ne,children:[_e(),ye()]});return z?a.jsx("div",{className:"table-container",children:P}):P};F.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:"Table columns configuration"},data:{required:!1,tsType:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]"},description:"Table data - can be flat records or grouped data",defaultValue:{value:"[]",computed:!1}},groups:{required:!1,tsType:{name:"Array",elements:[{name:"TableGroup"}],raw:"TableGroup[]"},description:"Grouped data structure",defaultValue:{value:"[]",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Table size variant",defaultValue:{value:"'md'",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"Enable striped rows",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Enable row hover effects",defaultValue:{value:"true",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Enable borders",defaultValue:{value:"false",computed:!1}},responsive:{required:!1,tsType:{name:"boolean"},description:"Make table responsive with horizontal scroll",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message",defaultValue:{value:"'No data available'",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"Enable row selection",defaultValue:{value:"false",computed:!1}},selectedRows:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"Selected row IDs",defaultValue:{value:"[]",computed:!1}},onRowSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIds: (string | number)[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},name:"selectedIds"}],return:{name:"void"}}},description:"Row selection callback"},sortBy:{required:!1,tsType:{name:"string"},description:"Sort configuration"},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}]},description:"Sort direction"},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(column: string, direction: 'asc' | 'desc') => void",signature:{arguments:[{type:{name:"string"},name:"column"},{type:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}]},name:"direction"}],return:{name:"void"}}},description:"Sort callback"},onGroupToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(groupId: string | number, expanded: boolean) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"groupId"},{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:"Group expand/collapse callback"},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(record: TableRecord) => void",signature:{arguments:[{type:{name:"TableRecord"},name:"record"}],return:{name:"void"}}},description:"Row click callback"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label"}}};const Ne={title:"Atoms/Table",component:F,parameters:{layout:"padded",docs:{description:{component:"A powerful, accessible data table component with support for grouping, sorting, selection, and custom rendering."}}},argTypes:{data:{description:"Array of data records to display",control:!1},columns:{description:"Array of column definitions",control:!1},groups:{description:"Optional grouping configuration",control:!1},size:{description:"Size variant of the table",control:"select",options:["sm","md","lg"]},striped:{description:"Enable striped rows",control:"boolean"},bordered:{description:"Enable borders",control:"boolean"},selectable:{description:"Enable row selection",control:"boolean"},hoverable:{description:"Enable hover effects on rows",control:"boolean"},responsive:{description:"Enable responsive behavior",control:"boolean"},loading:{description:"Show loading state",control:"boolean"},emptyMessage:{description:"Custom empty state message",control:"text"},onRowSelect:{description:"Callback when selection changes",action:"selection-changed"},onSort:{description:"Callback when sorting changes",action:"sort-changed"},onRowClick:{description:"Callback when row is clicked",action:"row-clicked"}}},O=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",lastLogin:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"active",lastLogin:"2024-01-14"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"User",status:"inactive",lastLogin:"2024-01-10"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"active",lastLogin:"2024-01-13"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"Admin",status:"pending",lastLogin:"2024-01-12"}],K=[{key:"name",title:"Name",sortable:!0},{key:"email",title:"Email",sortable:!0},{key:"role",title:"Role",align:"center"},{key:"status",title:"Status",align:"center"},{key:"lastLogin",title:"Last Login",align:"right",sortable:!0}],u={args:{data:O,columns:K,size:"md",hoverable:!0,responsive:!0,"aria-label":"User management table"}},x={args:{...u.args,selectable:!0}},v={args:{...u.args,striped:!0}},S={args:{...u.args,bordered:!0}},w={args:{...u.args,size:"sm"}},k={args:{...u.args,size:"lg"}},j={args:{...u.args,loading:!0}},N={args:{data:[],columns:K,emptyMessage:"No users found",size:"md"}},Se=[{key:"name",title:"Name",sortable:!0},{key:"email",title:"Email",sortable:!0},{key:"role",title:"Role",align:"center",render:t=>a.jsxs("span",{className:`table__status table__status--${t==="Admin"?"error":t==="Editor"?"warning":"active"}`,children:[a.jsx("span",{className:"table__status-dot"}),t]})},{key:"status",title:"Status",align:"center",render:t=>a.jsxs("span",{className:`table__status table__status--${t}`,children:[a.jsx("span",{className:"table__status-dot"}),t.toUpperCase()]})},{key:"actions",title:"Actions",align:"center",render:(t,n)=>a.jsxs("div",{children:[a.jsx("button",{className:"table__action-button table__action-button--primary",children:"Edit"}),a.jsx("button",{className:"table__action-button table__action-button--error",children:"Delete"})]})}],C={args:{data:O,columns:Se,size:"md",hoverable:!0,responsive:!0,selectable:!0}},i=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",lastLogin:"2024-01-15",department:"IT"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"Admin",status:"pending",lastLogin:"2024-01-12",department:"IT"},{id:8,name:"Sarah Davis",email:"sarah@example.com",role:"Admin",status:"active",lastLogin:"2024-01-16",department:"HR"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"active",lastLogin:"2024-01-13",department:"Marketing"},{id:7,name:"Mike Chen",email:"mike@example.com",role:"Editor",status:"active",lastLogin:"2024-01-14",department:"Marketing"},{id:9,name:"Emma Garcia",email:"emma@example.com",role:"Editor",status:"inactive",lastLogin:"2024-01-11",department:"Content"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"active",lastLogin:"2024-01-14",department:"Sales"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"User",status:"inactive",lastLogin:"2024-01-10",department:"Sales"},{id:6,name:"Lisa Wang",email:"lisa@example.com",role:"User",status:"active",lastLogin:"2024-01-15",department:"Support"},{id:10,name:"Tom Rodriguez",email:"tom@example.com",role:"User",status:"pending",lastLogin:"2024-01-09",department:"Support"}],Q=[{key:"name",title:"Name",sortable:!0},{key:"email",title:"Email",sortable:!0},{key:"department",title:"Department",align:"center"},{key:"status",title:"Status",align:"center",render:t=>a.jsxs("span",{className:`table__status table__status--${t}`,children:[a.jsx("span",{className:"table__status-dot"}),t.toUpperCase()]})},{key:"lastLogin",title:"Last Login",align:"right",sortable:!0},{key:"actions",title:"Actions",align:"center",render:(t,n)=>a.jsxs("div",{children:[a.jsx("button",{className:"table__action-button table__action-button--primary",children:"Edit"}),a.jsx("button",{className:"table__action-button table__action-button--secondary",children:"View"})]})}],X=[{id:"Admin",title:"Administrators",color:"error",expanded:!0,records:i.filter(t=>t.role==="Admin")},{id:"Editor",title:"Content Editors",color:"warning",expanded:!0,records:i.filter(t=>t.role==="Editor")},{id:"User",title:"Regular Users",color:"success",expanded:!1,records:i.filter(t=>t.role==="User")}],T={args:{data:i,columns:Q,groups:X,size:"md",hoverable:!0,responsive:!0,selectable:!0}},Y=[{id:"IT",title:"Information Technology",color:"primary",expanded:!0,records:i.filter(t=>t.department==="IT")},{id:"Marketing",title:"Marketing Department",color:"warning",expanded:!0,records:i.filter(t=>t.department==="Marketing")},{id:"Sales",title:"Sales Team",color:"success",expanded:!1,records:i.filter(t=>t.department==="Sales")},{id:"HR",title:"Human Resources",color:"info",expanded:!0,records:i.filter(t=>t.department==="HR")},{id:"Support",title:"Customer Support",color:"secondary",expanded:!1,records:i.filter(t=>t.department==="Support")},{id:"Content",title:"Content Team",color:"error",expanded:!0,records:i.filter(t=>t.department==="Content")}],R={args:{data:i,columns:Q,groups:Y,size:"md",striped:!0,hoverable:!0,responsive:!0,selectable:!0}},M=[{key:"name",title:"Full Name",sortable:!0,width:"200px"},{key:"email",title:"Email Address",sortable:!0,render:t=>a.jsx("a",{href:`mailto:${t}`,className:"table__email-link",children:t})},{key:"role",title:"Role",align:"center",sortable:!0,render:t=>a.jsxs("span",{className:`table__status table__status--${t==="Admin"?"error":t==="Editor"?"warning":"active"}`,children:[a.jsx("span",{className:"table__status-dot"}),t]})},{key:"department",title:"Department",align:"center",sortable:!0},{key:"status",title:"Status",align:"center",sortable:!0,render:t=>a.jsxs("span",{className:`table__status table__status--${t}`,children:[a.jsx("span",{className:"table__status-dot"}),t.toUpperCase()]})},{key:"lastLogin",title:"Last Login",align:"right",sortable:!0,render:t=>new Date(t).toLocaleDateString()},{key:"actions",title:"Actions",align:"center",width:"180px",render:(t,n)=>a.jsxs("div",{children:[a.jsx("button",{className:"table__action-button table__action-button--primary",title:`Edit ${n.name}`,children:"Edit"}),a.jsx("button",{className:"table__action-button table__action-button--secondary",title:`View ${n.name} profile`,children:"View"}),a.jsx("button",{className:"table__action-button table__action-button--error",title:`Delete ${n.name}`,children:"Delete"})]})}],E={args:{data:i,columns:M,groups:Y,size:"md",bordered:!0,hoverable:!0,responsive:!0,selectable:!0,"aria-label":"Company employee directory with department grouping and management actions"}},L={args:{data:i,columns:M,groups:X,size:"md",striped:!0,hoverable:!0,responsive:!0,selectable:!0},play:async({canvasElement:t})=>{console.log("Interactive table loaded:",t)}},we=t=>{const n=["Admin","Editor","User"],g=["active","inactive","pending"],h=["IT","Marketing","Sales","HR","Support","Content"];return Array.from({length:t},($,p)=>({id:p+1,name:`User ${p+1}`,email:`user${p+1}@example.com`,role:n[p%n.length],status:g[p%g.length],department:h[p%h.length],lastLogin:new Date(2024,0,Math.floor(Math.random()*30)+1).toISOString().split("T")[0]}))},A={args:{data:we(100),columns:M,size:"sm",striped:!0,hoverable:!0,responsive:!0,selectable:!0,"aria-label":"Performance test with 100 records"}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: basicColumns,
    size: 'md',
    hoverable: true,
    responsive: true,
    'aria-label': 'User management table'
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectable: true
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    striped: true
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    bordered: true
  }
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'sm'
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'lg'
  }
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: basicColumns,
    emptyMessage: 'No users found',
    size: 'md'
  }
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: columnsWithCustomRender,
    size: 'md',
    hoverable: true,
    responsive: true,
    selectable: true
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: groupedUsers,
    columns: groupedColumns,
    groups: userGroups,
    size: 'md',
    hoverable: true,
    responsive: true,
    selectable: true
  }
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};const Ce=["Default","WithSelection","Striped","Bordered","SmallSize","LargeSize","Loading","Empty","WithCustomRendering","WithGrouping","GroupedByDepartment","ComplexTable","InteractiveTable","LargeDataset"];export{S as Bordered,E as ComplexTable,u as Default,N as Empty,R as GroupedByDepartment,L as InteractiveTable,A as LargeDataset,k as LargeSize,j as Loading,w as SmallSize,v as Striped,C as WithCustomRendering,T as WithGrouping,x as WithSelection,Ce as __namedExportsOrder,Ne as default};
