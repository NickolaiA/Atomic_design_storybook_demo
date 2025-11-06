import{j as a}from"./jsx-runtime-CDt2p4po.js";import{r as b,R as ia}from"./index-GiUgBvb1.js";const Ge=({columns:t,data:n=[],groups:g=[],size:h="md",striped:$=!1,hoverable:p=!0,bordered:W=!1,responsive:z=!0,loading:D=!1,emptyMessage:We="No data available",selectable:c=!1,selectedRows:H=[],onRowSelect:He,sortBy:f,sortDirection:y,onSort:G,onGroupToggle:Be,onRowClick:U,className:q="",style:Je,"aria-label":Pe,...Fe})=>{const[Oe,Ke]=b.useState([]),[Qe,Xe]=b.useState(g),o=H.length>0?H:Oe,_=He||Ke,d=g.length>0?g:Qe,B=Be||((e,r)=>{Xe(l=>l.map(s=>s.id===e?{...s,expanded:r}:s))}),Ye=b.useCallback(e=>{if(!c)return;const r=o.includes(e)?o.filter(l=>l!==e):[...o,e];_(r)},[c,o,_]),Ze=b.useCallback(()=>{if(!c)return;const e=d.length>0?d.flatMap(s=>s.records.map(M=>M.id)):n.map(s=>s.id),l=e.every(s=>o.includes(s))?[]:e;_(l)},[c,d,n,o,_]),ea=b.useCallback(e=>{if(!G)return;G(e,f===e&&y==="asc"?"desc":"asc")},[f,y,G]),aa=b.useCallback(e=>{const r=d.find(l=>l.id===e);r&&B(e,!r.expanded)},[d,B]),ta=b.useMemo(()=>{const e=["table",`table--${h}`];return $&&e.push("table--striped"),p&&e.push("table--hoverable"),W&&e.push("table--bordered"),z&&e.push("table--responsive"),D&&e.push("table--loading"),q&&e.push(q),e.join(" ")},[h,$,p,W,z,D,q]),I=b.useMemo(()=>d.length>0?d.filter(e=>e.expanded!==!1).flatMap(e=>e.records.map(r=>r.id)):n.map(e=>e.id),[d,n]),J=I.length>0&&I.every(e=>o.includes(e)),sa=I.some(e=>o.includes(e)),ra=()=>a.jsx("thead",{className:"table__header",children:a.jsxs("tr",{className:"table__header-row",children:[c&&a.jsx("th",{className:"table__header-cell table__header-cell--checkbox",children:a.jsx("input",{type:"checkbox",className:"table__checkbox",checked:J,ref:e=>{e&&(e.indeterminate=sa&&!J)},onChange:Ze,"aria-label":"Select all rows"})}),t.map(e=>a.jsx("th",{className:`table__header-cell ${e.className||""} ${e.align?`table__header-cell--${e.align}`:""}`,...e.width&&{"data-width":e.width},children:a.jsxs("div",{className:"table__header-content",children:[a.jsx("span",{className:"table__header-title",children:e.title}),e.sortable&&a.jsx("button",{className:`table__sort-button ${f===e.key?`table__sort-button--${y}`:""}`,onClick:()=>ea(e.key),"aria-label":`Sort by ${e.title}`,children:a.jsx("span",{className:"table__sort-icon",children:f===e.key?y==="asc"?"↑":"↓":"↕"})})]})},e.key))]})}),P=(e,r=!1)=>{const l=o.includes(e.id);return a.jsxs("tr",{className:`table__row ${l?"table__row--selected":""} ${r?"table__row--grouped":""}`,onClick:()=>U==null?void 0:U(e),children:[c&&a.jsx("td",{className:"table__cell table__cell--checkbox",children:a.jsx("input",{type:"checkbox",className:"table__checkbox",checked:l,onChange:()=>Ye(e.id),"aria-label":`Select row ${e.id}`})}),t.map(s=>a.jsx("td",{className:`table__cell ${s.className||""} ${s.align?`table__cell--${s.align}`:""}`,children:s.render?s.render(e[s.key],e):e[s.key]},s.key))]},e.id)},na=e=>{const r=e.records.map(m=>m.id),l=r.every(m=>o.includes(m)),s=r.some(m=>o.includes(m)),M=()=>{if(!c)return;const m=l?o.filter(oa=>!r.includes(oa)):[...new Set([...o,...r])];_(m)};return a.jsx("tr",{className:`table__group-header ${e.color?`table__group-header--${e.color}`:""}`,children:a.jsx("td",{colSpan:t.length+(c?1:0),className:"table__group-cell",children:a.jsxs("div",{className:"table__group-content",children:[a.jsx("button",{className:"table__group-toggle",onClick:()=>aa(e.id),"aria-expanded":e.expanded!==!1?"true":"false","aria-label":`${e.expanded!==!1?"Collapse":"Expand"} group ${e.title}`,children:a.jsx("span",{className:"table__group-icon",children:e.expanded!==!1?"−":"+"})}),c&&a.jsx("input",{type:"checkbox",className:"table__checkbox table__group-checkbox",checked:l,ref:m=>{m&&(m.indeterminate=s&&!l)},onChange:M,"aria-label":`Select all in group ${e.title}`}),a.jsx("div",{className:"table__group-title",children:e.customHeaderRender?e.customHeaderRender():a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"table__group-name",children:e.title}),a.jsxs("span",{className:"table__group-count",children:["(",e.records.length,")"]})]})})]})})},`group-${e.id}`)},la=()=>D?a.jsx("tbody",{className:"table__body",children:a.jsx("tr",{className:"table__row table__row--loading",children:a.jsx("td",{colSpan:t.length+(c?1:0),className:"table__cell table__cell--loading",children:a.jsxs("div",{className:"table__loading",children:[a.jsx("div",{className:"table__spinner"}),a.jsx("span",{children:"Loading..."})]})})})}):d.length>0?a.jsx("tbody",{className:"table__body",children:d.map(e=>a.jsxs(ia.Fragment,{children:[na(e),e.expanded!==!1&&e.records.map(r=>P(r,!0))]},e.id))}):n.length===0?a.jsx("tbody",{className:"table__body",children:a.jsx("tr",{className:"table__row table__row--empty",children:a.jsx("td",{colSpan:t.length+(c?1:0),className:"table__cell table__cell--empty",children:a.jsxs("div",{className:"table__empty",children:[a.jsx("span",{className:"table__empty-icon",children:"📋"}),a.jsx("span",{className:"table__empty-message",children:We})]})})})}):a.jsx("tbody",{className:"table__body",children:n.map(e=>P(e))}),F=a.jsxs("table",{className:ta,...Je&&{"data-custom-style":"true"},"aria-label":Pe,role:"table",...Fe,children:[ra(),la()]});return z?a.jsx("div",{className:"table-container",children:F}):F};Ge.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:"Table columns configuration"},data:{required:!1,tsType:{name:"Array",elements:[{name:"TableRecord"}],raw:"TableRecord[]"},description:"Table data - can be flat records or grouped data",defaultValue:{value:"[]",computed:!1}},groups:{required:!1,tsType:{name:"Array",elements:[{name:"TableGroup"}],raw:"TableGroup[]"},description:"Grouped data structure",defaultValue:{value:"[]",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Table size variant",defaultValue:{value:"'md'",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"Enable striped rows",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Enable row hover effects",defaultValue:{value:"true",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Enable borders",defaultValue:{value:"false",computed:!1}},responsive:{required:!1,tsType:{name:"boolean"},description:"Make table responsive with horizontal scroll",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message",defaultValue:{value:"'No data available'",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"Enable row selection",defaultValue:{value:"false",computed:!1}},selectedRows:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"Selected row IDs",defaultValue:{value:"[]",computed:!1}},onRowSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIds: (string | number)[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},name:"selectedIds"}],return:{name:"void"}}},description:"Row selection callback"},sortBy:{required:!1,tsType:{name:"string"},description:"Sort configuration"},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}]},description:"Sort direction"},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(column: string, direction: 'asc' | 'desc') => void",signature:{arguments:[{type:{name:"string"},name:"column"},{type:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}]},name:"direction"}],return:{name:"void"}}},description:"Sort callback"},onGroupToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(groupId: string | number, expanded: boolean) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"groupId"},{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:"Group expand/collapse callback"},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(record: TableRecord) => void",signature:{arguments:[{type:{name:"TableRecord"},name:"record"}],return:{name:"void"}}},description:"Row click callback"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label"}}};const pa={title:"Atoms/Table",component:Ge,parameters:{layout:"padded",docs:{description:{component:"A powerful, accessible data table component with support for grouping, sorting, selection, and custom rendering."}}},argTypes:{data:{description:"Array of data records to display",control:!1},columns:{description:"Array of column definitions",control:!1},groups:{description:"Optional grouping configuration",control:!1},size:{description:"Size variant of the table",control:"select",options:["sm","md","lg"]},striped:{description:"Enable striped rows",control:"boolean"},bordered:{description:"Enable borders",control:"boolean"},selectable:{description:"Enable row selection",control:"boolean"},hoverable:{description:"Enable hover effects on rows",control:"boolean"},responsive:{description:"Enable responsive behavior",control:"boolean"},loading:{description:"Show loading state",control:"boolean"},emptyMessage:{description:"Custom empty state message",control:"text"},onRowSelect:{description:"Callback when selection changes",action:"selection-changed"},onSort:{description:"Callback when sorting changes",action:"sort-changed"},onRowClick:{description:"Callback when row is clicked",action:"row-clicked"}}},Ue=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",lastLogin:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"active",lastLogin:"2024-01-14"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"User",status:"inactive",lastLogin:"2024-01-10"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"active",lastLogin:"2024-01-13"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"Admin",status:"pending",lastLogin:"2024-01-12"}],qe=[{key:"name",title:"Name",sortable:!0},{key:"email",title:"Email",sortable:!0},{key:"role",title:"Role",align:"center"},{key:"status",title:"Status",align:"center"},{key:"lastLogin",title:"Last Login",align:"right",sortable:!0}],u={args:{data:Ue,columns:qe,size:"md",hoverable:!0,responsive:!0,"aria-label":"User management table"}},x={args:{...u.args,selectable:!0}},v={args:{...u.args,striped:!0}},S={args:{...u.args,bordered:!0}},w={args:{...u.args,size:"sm"}},k={args:{...u.args,size:"lg"}},j={args:{...u.args,loading:!0}},N={args:{data:[],columns:qe,emptyMessage:"No users found",size:"md"}},ca=[{key:"name",title:"Name",sortable:!0},{key:"email",title:"Email",sortable:!0},{key:"role",title:"Role",align:"center",render:t=>a.jsxs("span",{className:`table__status table__status--${t==="Admin"?"error":t==="Editor"?"warning":"active"}`,children:[a.jsx("span",{className:"table__status-dot"}),t]})},{key:"status",title:"Status",align:"center",render:t=>a.jsxs("span",{className:`table__status table__status--${t}`,children:[a.jsx("span",{className:"table__status-dot"}),t.toUpperCase()]})},{key:"actions",title:"Actions",align:"center",render:(t,n)=>a.jsxs("div",{children:[a.jsx("button",{className:"table__action-button table__action-button--primary",children:"Edit"}),a.jsx("button",{className:"table__action-button table__action-button--error",children:"Delete"})]})}],T={args:{data:Ue,columns:ca,size:"md",hoverable:!0,responsive:!0,selectable:!0}},i=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",lastLogin:"2024-01-15",department:"IT"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"Admin",status:"pending",lastLogin:"2024-01-12",department:"IT"},{id:8,name:"Sarah Davis",email:"sarah@example.com",role:"Admin",status:"active",lastLogin:"2024-01-16",department:"HR"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"active",lastLogin:"2024-01-13",department:"Marketing"},{id:7,name:"Mike Chen",email:"mike@example.com",role:"Editor",status:"active",lastLogin:"2024-01-14",department:"Marketing"},{id:9,name:"Emma Garcia",email:"emma@example.com",role:"Editor",status:"inactive",lastLogin:"2024-01-11",department:"Content"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"active",lastLogin:"2024-01-14",department:"Sales"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"User",status:"inactive",lastLogin:"2024-01-10",department:"Sales"},{id:6,name:"Lisa Wang",email:"lisa@example.com",role:"User",status:"active",lastLogin:"2024-01-15",department:"Support"},{id:10,name:"Tom Rodriguez",email:"tom@example.com",role:"User",status:"pending",lastLogin:"2024-01-09",department:"Support"}],Ie=[{key:"name",title:"Name",sortable:!0},{key:"email",title:"Email",sortable:!0},{key:"department",title:"Department",align:"center"},{key:"status",title:"Status",align:"center",render:t=>a.jsxs("span",{className:`table__status table__status--${t}`,children:[a.jsx("span",{className:"table__status-dot"}),t.toUpperCase()]})},{key:"lastLogin",title:"Last Login",align:"right",sortable:!0},{key:"actions",title:"Actions",align:"center",render:(t,n)=>a.jsxs("div",{children:[a.jsx("button",{className:"table__action-button table__action-button--primary",children:"Edit"}),a.jsx("button",{className:"table__action-button table__action-button--secondary",children:"View"})]})}],Me=[{id:"Admin",title:"Administrators",color:"error",expanded:!0,records:i.filter(t=>t.role==="Admin")},{id:"Editor",title:"Content Editors",color:"warning",expanded:!0,records:i.filter(t=>t.role==="Editor")},{id:"User",title:"Regular Users",color:"success",expanded:!1,records:i.filter(t=>t.role==="User")}],C={args:{data:i,columns:Ie,groups:Me,size:"md",hoverable:!0,responsive:!0,selectable:!0}},Ve=[{id:"IT",title:"Information Technology",color:"primary",expanded:!0,records:i.filter(t=>t.department==="IT")},{id:"Marketing",title:"Marketing Department",color:"warning",expanded:!0,records:i.filter(t=>t.department==="Marketing")},{id:"Sales",title:"Sales Team",color:"success",expanded:!1,records:i.filter(t=>t.department==="Sales")},{id:"HR",title:"Human Resources",color:"info",expanded:!0,records:i.filter(t=>t.department==="HR")},{id:"Support",title:"Customer Support",color:"secondary",expanded:!1,records:i.filter(t=>t.department==="Support")},{id:"Content",title:"Content Team",color:"error",expanded:!0,records:i.filter(t=>t.department==="Content")}],E={args:{data:i,columns:Ie,groups:Ve,size:"md",striped:!0,hoverable:!0,responsive:!0,selectable:!0}},V=[{key:"name",title:"Full Name",sortable:!0,width:"200px"},{key:"email",title:"Email Address",sortable:!0,render:t=>a.jsx("a",{href:`mailto:${t}`,className:"table__email-link",children:t})},{key:"role",title:"Role",align:"center",sortable:!0,render:t=>a.jsxs("span",{className:`table__status table__status--${t==="Admin"?"error":t==="Editor"?"warning":"active"}`,children:[a.jsx("span",{className:"table__status-dot"}),t]})},{key:"department",title:"Department",align:"center",sortable:!0},{key:"status",title:"Status",align:"center",sortable:!0,render:t=>a.jsxs("span",{className:`table__status table__status--${t}`,children:[a.jsx("span",{className:"table__status-dot"}),t.toUpperCase()]})},{key:"lastLogin",title:"Last Login",align:"right",sortable:!0,render:t=>new Date(t).toLocaleDateString()},{key:"actions",title:"Actions",align:"center",width:"180px",render:(t,n)=>a.jsxs("div",{children:[a.jsx("button",{className:"table__action-button table__action-button--primary",title:`Edit ${n.name}`,children:"Edit"}),a.jsx("button",{className:"table__action-button table__action-button--secondary",title:`View ${n.name} profile`,children:"View"}),a.jsx("button",{className:"table__action-button table__action-button--error",title:`Delete ${n.name}`,children:"Delete"})]})}],L={args:{data:i,columns:V,groups:Ve,size:"md",bordered:!0,hoverable:!0,responsive:!0,selectable:!0,"aria-label":"Company employee directory with department grouping and management actions"}},R={args:{data:i,columns:V,groups:Me,size:"md",striped:!0,hoverable:!0,responsive:!0,selectable:!0},play:async({canvasElement:t})=>{console.log("Interactive table loaded:",t)}},da=t=>{const n=["Admin","Editor","User"],g=["active","inactive","pending"],h=["IT","Marketing","Sales","HR","Support","Content"];return Array.from({length:t},($,p)=>({id:p+1,name:`User ${p+1}`,email:`user${p+1}@example.com`,role:n[p%n.length],status:g[p%g.length],department:h[p%h.length],lastLogin:new Date(2024,0,Math.floor(Math.random()*30)+1).toISOString().split("T")[0]}))},A={args:{data:da(100),columns:V,size:"sm",striped:!0,hoverable:!0,responsive:!0,selectable:!0,"aria-label":"Performance test with 100 records"}};var O,K,Q;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: basicColumns,
    size: 'md',
    hoverable: true,
    responsive: true,
    'aria-label': 'User management table'
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectable: true
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    striped: true
  }
}`,...(te=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,re,ne;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    bordered: true
  }
}`,...(ne=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var le,oe,ie;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'sm'
  }
}`,...(ie=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,de,me;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'lg'
  }
}`,...(me=(de=k.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,pe,be;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...(be=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ge,he,_e;N.parameters={...N.parameters,docs:{...(ge=N.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: basicColumns,
    emptyMessage: 'No users found',
    size: 'md'
  }
}`,...(_e=(he=N.parameters)==null?void 0:he.docs)==null?void 0:_e.source}}};var fe,ye,xe;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: columnsWithCustomRender,
    size: 'md',
    hoverable: true,
    responsive: true,
    selectable: true
  }
}`,...(xe=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var ve,Se,we;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    data: groupedUsers,
    columns: groupedColumns,
    groups: userGroups,
    size: 'md',
    hoverable: true,
    responsive: true,
    selectable: true
  }
}`,...(we=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var ke,je,Ne;E.parameters={...E.parameters,docs:{...(ke=E.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ne=(je=E.parameters)==null?void 0:je.docs)==null?void 0:Ne.source}}};var Te,Ce,Ee;L.parameters={...L.parameters,docs:{...(Te=L.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ee=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var Le,Re,Ae;R.parameters={...R.parameters,docs:{...(Le=R.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ae=(Re=R.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source}}};var $e,ze,De;A.parameters={...A.parameters,docs:{...($e=A.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(De=(ze=A.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};const ba=["Default","WithSelection","Striped","Bordered","SmallSize","LargeSize","Loading","Empty","WithCustomRendering","WithGrouping","GroupedByDepartment","ComplexTable","InteractiveTable","LargeDataset"];export{S as Bordered,L as ComplexTable,u as Default,N as Empty,E as GroupedByDepartment,R as InteractiveTable,A as LargeDataset,k as LargeSize,j as Loading,w as SmallSize,v as Striped,T as WithCustomRendering,C as WithGrouping,x as WithSelection,ba as __namedExportsOrder,pa as default};
