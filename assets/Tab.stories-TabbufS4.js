import{r as d,j as e}from"./iframe-C-Dpaqp0.js";import{I as t}from"./Icon-C2VW0K67.js";import"./preload-helper-PPVm8Dsz.js";const O=d.createContext(null),B=()=>{const l=d.useContext(O);if(!l)throw new Error("Tab components must be used within a Tabs component");return l},n=({children:l,selectedIndex:h,defaultIndex:T=0,onChange:b,size:c="md",variant:f="line",orientation:P="horizontal",disabled:x=!1,className:v="","data-testid":w})=>{const[o,u]=d.useState(T),[m,p]=d.useState(-1),N=h!==void 0,S=N?h:o,j=d.useRef(new Map),U=d.useRef(0),I=d.useCallback(g=>{if(!j.current.has(g)){const y=U.current++;return j.current.set(g,y),y}return j.current.get(g)},[]),C=d.useCallback(g=>{j.current.delete(g)},[]),A=d.useCallback(g=>{N||u(g),b?.(g)},[N,b]),W=d.useMemo(()=>({selectedIndex:S,setSelectedIndex:A,size:c,variant:f,orientation:P,disabled:x,registerTab:I,unregisterTab:C,focusedIndex:m,setFocusedIndex:p}),[S,A,c,f,P,x,I,C,m,p]),$=["tabs",`tabs--${c}`,`tabs--${f}`,`tabs--${P}`,x&&"tabs--disabled",v].filter(Boolean).join(" ");return e.jsx(O.Provider,{value:W,children:e.jsx("div",{className:$,"data-testid":w,children:l})})},s=({children:l,className:h="","aria-label":T})=>{const{orientation:b,setSelectedIndex:c,setFocusedIndex:f,focusedIndex:P}=B(),x=d.useRef(null),v=o=>{const u=x.current?.querySelectorAll('[role="tab"]:not([disabled])');if(!u||u.length===0)return;const m=P>=0?P:0;let p=m;switch(o.key){case"ArrowRight":case"ArrowDown":if(b==="horizontal"&&o.key==="ArrowDown"||b==="vertical"&&o.key==="ArrowRight")return;o.preventDefault(),p=(m+1)%u.length;break;case"ArrowLeft":case"ArrowUp":if(b==="horizontal"&&o.key==="ArrowUp"||b==="vertical"&&o.key==="ArrowLeft")return;o.preventDefault(),p=m===0?u.length-1:m-1;break;case"Home":o.preventDefault(),p=0;break;case"End":o.preventDefault(),p=u.length-1;break;case"Enter":case" ":o.preventDefault(),c(m);return;default:return}f(p),u[p].focus()},w=["tab-list",h].filter(Boolean).join(" ");return e.jsx("div",{ref:x,className:w,role:"tablist","aria-label":T,onKeyDown:v,children:l})},a=({children:l,icon:h,iconPosition:T="left",textAlign:b="center",disabled:c=!1,className:f="","data-testid":P})=>{const{selectedIndex:x,setSelectedIndex:v,registerTab:w,unregisterTab:o,disabled:u,setFocusedIndex:m,orientation:p}=B(),S=d.useRef(`tab-${Math.random().toString(36).substr(2,9)}`).current,[j,U]=d.useState(-1);d.useEffect(()=>{const y=w(S);return U(y),()=>{o(S)}},[w,o,S]);const I=j===x,C=c||u,A=()=>{C||(v(j),m(j))},W=()=>{m(j)},$=["tab",I&&"tab--selected",C&&"tab--disabled",h&&"tab--with-icon",h&&`tab--icon-${T}`,p==="vertical"&&`tab--text-${b}`,f].filter(Boolean).join(" "),g=()=>{if(!h)return l;const y=e.jsx("span",{className:"tab__icon",children:h}),L=l?e.jsx("span",{className:"tab__text",children:l}):null;switch(T){case"right":return e.jsxs(e.Fragment,{children:[L,y]});case"top":return e.jsxs("span",{className:"tab__content tab__content--vertical",children:[y,L]});case"bottom":return e.jsxs("span",{className:"tab__content tab__content--vertical",children:[L,y]});case"left":default:return e.jsxs(e.Fragment,{children:[y,L]})}};return e.jsx("button",{className:$,role:"tab","aria-selected":I?"true":"false","aria-controls":`tabpanel-${j}`,id:`tab-${j}`,tabIndex:I?0:-1,disabled:C,onClick:A,onFocus:W,"data-testid":P,children:g()})},i=({children:l,className:h=""})=>{const T=["tab-panels",h].filter(Boolean).join(" ");return e.jsx("div",{className:T,children:l})},r=({children:l,className:h="","data-testid":T})=>{const{selectedIndex:b,registerTab:c,unregisterTab:f}=B(),x=d.useRef(`panel-${Math.random().toString(36).substr(2,9)}`).current,[v,w]=d.useState(-1);d.useEffect(()=>{const m=c(x);return w(m),()=>{f(x)}},[c,f,x]);const o=v===b,u=["tab-panel",!o&&"tab-panel--hidden",h].filter(Boolean).join(" ");return e.jsx("div",{className:u,role:"tabpanel","aria-labelledby":`tab-${v}`,id:`tabpanel-${v}`,hidden:!o,"data-testid":T,children:o&&l})};n.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content of the tabs (TabList and TabPanels)"},selectedIndex:{required:!1,tsType:{name:"number"},description:"Currently selected tab index (controlled)"},defaultIndex:{required:!1,tsType:{name:"number"},description:"Default selected tab index (uncontrolled)",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Callback when tab selection changes"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'line' | 'pills' | 'segment'",elements:[{name:"literal",value:"'line'"},{name:"literal",value:"'pills'"},{name:"literal",value:"'segment'"}]},description:"Visual variant",defaultValue:{value:"'line'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Orientation of tabs",defaultValue:{value:"'horizontal'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether tabs are disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"Data test id for testing"}}};s.__docgenInfo={description:"",methods:[],displayName:"TabList",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Tab buttons"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Aria label for the tab list"}}};a.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Tab label content (optional if icon is provided)"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display alongside or instead of text"},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Position of icon relative to text",defaultValue:{value:"'left'",computed:!1}},textAlign:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Text alignment for vertical tabs",defaultValue:{value:"'center'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether this tab is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"Data test id for testing"}}};i.__docgenInfo={description:"",methods:[],displayName:"TabPanels",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"TabPanel components"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};r.__docgenInfo={description:"",methods:[],displayName:"TabPanel",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Panel content"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"Data test id for testing"}}};const Q={title:"Atoms/Tab",component:n,parameters:{layout:"centered",docs:{description:{component:"A tab component for organizing content into multiple panels with keyboard navigation and accessibility support."}}},tags:["autodocs"],argTypes:{selectedIndex:{control:"number",description:"Currently selected tab index (controlled)"},defaultIndex:{control:"number",description:"Default selected tab index (uncontrolled)"},onChange:{description:"Callback when tab selection changes",control:!1},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},variant:{control:"select",options:["line","pills","segment"],description:"Visual variant"},orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation of tabs"},disabled:{control:"boolean",description:"Whether tabs are disabled"},children:{control:!1,description:"Tab content (provided by render functions)"}}},R={args:{size:"md",variant:"line",orientation:"horizontal",defaultIndex:0,children:null},render:()=>e.jsxs(n,{defaultIndex:0,size:"md",variant:"line",orientation:"horizontal",children:[e.jsxs(s,{"aria-label":"Sample tabs",children:[e.jsx(a,{children:"Tab 1"}),e.jsx(a,{children:"Tab 2"}),e.jsx(a,{children:"Tab 3"})]}),e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx("h3",{children:"Panel 1"}),e.jsx("p",{children:"This is the content for the first tab. It contains some sample text to demonstrate the tab functionality."})]}),e.jsxs(r,{children:[e.jsx("h3",{children:"Panel 2"}),e.jsx("p",{children:"This is the content for the second tab. You can include any content here, including other components."})]}),e.jsxs(r,{children:[e.jsx("h3",{children:"Panel 3"}),e.jsx("p",{children:"This is the content for the third tab. Notice how the content changes when you switch tabs."})]})]})]})},D={args:{children:null},render:()=>e.jsxs("div",{className:"tab-story-section",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Small"}),e.jsxs(n,{size:"sm",children:[e.jsxs(s,{"aria-label":"Small tabs",children:[e.jsx(a,{children:"Tab 1"}),e.jsx(a,{children:"Tab 2"}),e.jsx(a,{children:"Tab 3"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Small tab content"}),e.jsx(r,{children:"Second small tab"}),e.jsx(r,{children:"Third small tab"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Medium (Default)"}),e.jsxs(n,{size:"md",children:[e.jsxs(s,{"aria-label":"Medium tabs",children:[e.jsx(a,{children:"Tab 1"}),e.jsx(a,{children:"Tab 2"}),e.jsx(a,{children:"Tab 3"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Medium tab content"}),e.jsx(r,{children:"Second medium tab"}),e.jsx(r,{children:"Third medium tab"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Large"}),e.jsxs(n,{size:"lg",children:[e.jsxs(s,{"aria-label":"Large tabs",children:[e.jsx(a,{children:"Tab 1"}),e.jsx(a,{children:"Tab 2"}),e.jsx(a,{children:"Tab 3"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Large tab content"}),e.jsx(r,{children:"Second large tab"}),e.jsx(r,{children:"Third large tab"})]})]})]})]}),parameters:{docs:{description:{story:"Different size variants for tabs."}}}},V={args:{children:null},render:()=>e.jsxs("div",{className:"tab-story-section",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Line (Default)"}),e.jsxs(n,{variant:"line",children:[e.jsxs(s,{"aria-label":"Line tabs",children:[e.jsx(a,{children:"Dashboard"}),e.jsx(a,{children:"Analytics"}),e.jsx(a,{children:"Settings"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Dashboard content with charts and metrics"}),e.jsx(r,{children:"Analytics data and reports"}),e.jsx(r,{children:"Application settings and preferences"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Pills"}),e.jsxs(n,{variant:"pills",children:[e.jsxs(s,{"aria-label":"Pills tabs",children:[e.jsx(a,{children:"Home"}),e.jsx(a,{children:"Products"}),e.jsx(a,{children:"About"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Welcome to our homepage"}),e.jsx(r,{children:"Browse our product catalog"}),e.jsx(r,{children:"Learn more about our company"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Segment"}),e.jsxs(n,{variant:"segment",children:[e.jsxs(s,{"aria-label":"Segment tabs",children:[e.jsx(a,{children:"Overview"}),e.jsx(a,{children:"Details"}),e.jsx(a,{children:"Reviews"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Product overview and highlights"}),e.jsx(r,{children:"Detailed specifications and features"}),e.jsx(r,{children:"Customer reviews and ratings"})]})]})]})]}),parameters:{docs:{description:{story:"Different visual variants for tabs."}}}},z={args:{children:null},render:()=>e.jsx("div",{className:"tab-story-vertical-container",children:e.jsxs(n,{orientation:"vertical",children:[e.jsxs(s,{"aria-label":"Vertical tabs",children:[e.jsx(a,{children:"Profile"}),e.jsx(a,{children:"Account"}),e.jsx(a,{children:"Security"}),e.jsx(a,{children:"Notifications"})]}),e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx("h3",{children:"Profile Settings"}),e.jsx("p",{children:"Update your personal information and profile picture."})]}),e.jsxs(r,{children:[e.jsx("h3",{children:"Account Settings"}),e.jsx("p",{children:"Manage your account preferences and billing information."})]}),e.jsxs(r,{children:[e.jsx("h3",{children:"Security Settings"}),e.jsx("p",{children:"Configure your password and two-factor authentication."})]}),e.jsxs(r,{children:[e.jsx("h3",{children:"Notification Settings"}),e.jsx("p",{children:"Choose which notifications you want to receive."})]})]})]})}),parameters:{docs:{description:{story:"Vertical orientation for tabs."}}}},H={args:{children:null},render:()=>e.jsxs(n,{children:[e.jsxs(s,{"aria-label":"Tabs with disabled options",children:[e.jsx(a,{children:"Available"}),e.jsx(a,{disabled:!0,children:"Disabled"}),e.jsx(a,{children:"Another Available"}),e.jsx(a,{disabled:!0,children:"Also Disabled"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"This tab is available and can be selected."}),e.jsx(r,{children:"This tab is disabled and cannot be selected."}),e.jsx(r,{children:"This tab is also available for selection."}),e.jsx(r,{children:"This tab is also disabled."})]})]}),parameters:{docs:{description:{story:"Tabs with some disabled options."}}}},q={args:{disabled:!0,children:null},render:l=>e.jsxs(n,{...l,children:[e.jsxs(s,{"aria-label":"Disabled tabs",children:[e.jsx(a,{children:"Tab 1"}),e.jsx(a,{children:"Tab 2"}),e.jsx(a,{children:"Tab 3"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"All tabs are disabled"}),e.jsx(r,{children:"No interaction possible"}),e.jsx(r,{children:"Completely disabled state"})]})]})},J=()=>{const[l,h]=d.useState(0),T=[{label:"Code",content:"Write and edit your code here."},{label:"Preview",content:"See how your code looks in action."},{label:"Console",content:"View output and debug information."},{label:"Settings",content:"Configure your development environment."}];return e.jsxs("div",{className:"tab-story-controlled-container",children:[e.jsxs("div",{className:"tab-story-controlled-info",children:[e.jsxs("p",{children:["Current tab: ",e.jsx("strong",{children:T[l]?.label})," (Index: ",l,")"]}),e.jsx("div",{className:"tab-story-controlled-buttons",children:T.map((b,c)=>e.jsxs("button",{className:"tab-story-button",onClick:()=>h(c),children:["Go to ",c+1]},c))})]}),e.jsxs(n,{selectedIndex:l,onChange:h,children:[e.jsx(s,{"aria-label":"Controlled tabs",children:T.map((b,c)=>e.jsx(a,{children:b.label},c))}),e.jsx(i,{children:T.map((b,c)=>e.jsxs(r,{children:[e.jsx("h3",{children:b.label}),e.jsx("p",{children:b.content})]},c))})]})]})},_={args:{children:null},render:J,parameters:{docs:{description:{story:"Controlled tabs with external state management."}}}},k={args:{children:null},render:()=>e.jsxs(n,{children:[e.jsxs(s,{"aria-label":"Many tabs",children:[e.jsx(a,{children:"Tab 1"}),e.jsx(a,{children:"Tab 2"}),e.jsx(a,{children:"Tab 3"}),e.jsx(a,{children:"Tab 4"}),e.jsx(a,{children:"Tab 5"}),e.jsx(a,{children:"Tab 6"}),e.jsx(a,{children:"Tab 7"}),e.jsx(a,{children:"Tab 8"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Content for tab 1"}),e.jsx(r,{children:"Content for tab 2"}),e.jsx(r,{children:"Content for tab 3"}),e.jsx(r,{children:"Content for tab 4"}),e.jsx(r,{children:"Content for tab 5"}),e.jsx(r,{children:"Content for tab 6"}),e.jsx(r,{children:"Content for tab 7"}),e.jsx(r,{children:"Content for tab 8"})]})]}),parameters:{docs:{description:{story:"Tabs with many options to test horizontal scrolling."}}}},M={args:{children:null},render:()=>e.jsxs("div",{className:"tab-story-section",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Icons with Text (Left Position)"}),e.jsxs(n,{defaultIndex:0,children:[e.jsxs(s,{"aria-label":"Tabs with icons",children:[e.jsx(a,{icon:e.jsx(t,{name:"home"}),children:"Home"}),e.jsx(a,{icon:e.jsx(t,{name:"search"}),children:"Search"}),e.jsx(a,{icon:e.jsx(t,{name:"user"}),children:"Profile"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Home panel content with icon on the left"}),e.jsx(r,{children:"Search panel content with icon on the left"}),e.jsx(r,{children:"Profile panel content with icon on the left"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Icons with Text (Right Position)"}),e.jsxs(n,{defaultIndex:0,children:[e.jsxs(s,{"aria-label":"Tabs with right icons",children:[e.jsx(a,{icon:e.jsx(t,{name:"home"}),iconPosition:"right",children:"Home"}),e.jsx(a,{icon:e.jsx(t,{name:"search"}),iconPosition:"right",children:"Search"}),e.jsx(a,{icon:e.jsx(t,{name:"user"}),iconPosition:"right",children:"Profile"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Home panel content with icon on the right"}),e.jsx(r,{children:"Search panel content with icon on the right"}),e.jsx(r,{children:"Profile panel content with icon on the right"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Icons with Text (Top Position)"}),e.jsxs(n,{defaultIndex:0,children:[e.jsxs(s,{"aria-label":"Tabs with top icons",children:[e.jsx(a,{icon:e.jsx(t,{name:"home"}),iconPosition:"top",children:"Home"}),e.jsx(a,{icon:e.jsx(t,{name:"search"}),iconPosition:"top",children:"Search"}),e.jsx(a,{icon:e.jsx(t,{name:"user"}),iconPosition:"top",children:"Profile"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Home panel content with icon on top"}),e.jsx(r,{children:"Search panel content with icon on top"}),e.jsx(r,{children:"Profile panel content with icon on top"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Icon Only (No Text)"}),e.jsxs(n,{defaultIndex:0,children:[e.jsxs(s,{"aria-label":"Icon-only tabs",children:[e.jsx(a,{icon:e.jsx(t,{name:"home"})}),e.jsx(a,{icon:e.jsx(t,{name:"search"})}),e.jsx(a,{icon:e.jsx(t,{name:"user"})})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Home panel - icon only tab"}),e.jsx(r,{children:"Search panel - icon only tab"}),e.jsx(r,{children:"Profile panel - icon only tab"})]})]})]})]}),parameters:{docs:{description:{story:"Tabs can include icons in various positions (left, right, top, bottom) or be icon-only."}}}},F={args:{children:null},render:()=>e.jsxs("div",{className:"tab-story-section",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Vertical Tabs - Left Aligned Text"}),e.jsxs(n,{orientation:"vertical",defaultIndex:0,children:[e.jsxs(s,{"aria-label":"Left aligned vertical tabs",children:[e.jsx(a,{textAlign:"left",icon:e.jsx(t,{name:"home"}),children:"Home Dashboard"}),e.jsx(a,{textAlign:"left",icon:e.jsx(t,{name:"search"}),children:"Search Results"}),e.jsx(a,{textAlign:"left",icon:e.jsx(t,{name:"user"}),children:"User Profile"})]}),e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx("h3",{children:"Home Dashboard"}),e.jsx("p",{children:"Content for home dashboard with left-aligned vertical tab."})]}),e.jsxs(r,{children:[e.jsx("h3",{children:"Search Results"}),e.jsx("p",{children:"Content for search results with left-aligned vertical tab."})]}),e.jsxs(r,{children:[e.jsx("h3",{children:"User Profile"}),e.jsx("p",{children:"Content for user profile with left-aligned vertical tab."})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Vertical Tabs - Center Aligned Text"}),e.jsxs(n,{orientation:"vertical",defaultIndex:0,children:[e.jsxs(s,{"aria-label":"Center aligned vertical tabs",children:[e.jsx(a,{textAlign:"center",icon:e.jsx(t,{name:"home"}),children:"Home"}),e.jsx(a,{textAlign:"center",icon:e.jsx(t,{name:"search"}),children:"Search"}),e.jsx(a,{textAlign:"center",icon:e.jsx(t,{name:"user"}),children:"Profile"})]}),e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx("h3",{children:"Home"}),e.jsx("p",{children:"Content for home with center-aligned vertical tab."})]}),e.jsxs(r,{children:[e.jsx("h3",{children:"Search"}),e.jsx("p",{children:"Content for search with center-aligned vertical tab."})]}),e.jsxs(r,{children:[e.jsx("h3",{children:"Profile"}),e.jsx("p",{children:"Content for profile with center-aligned vertical tab."})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Vertical Tabs - Right Aligned Text"}),e.jsxs(n,{orientation:"vertical",defaultIndex:0,children:[e.jsxs(s,{"aria-label":"Right aligned vertical tabs",children:[e.jsx(a,{textAlign:"right",icon:e.jsx(t,{name:"home"}),iconPosition:"right",children:"Home"}),e.jsx(a,{textAlign:"right",icon:e.jsx(t,{name:"search"}),iconPosition:"right",children:"Search"}),e.jsx(a,{textAlign:"right",icon:e.jsx(t,{name:"user"}),iconPosition:"right",children:"Profile"})]}),e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx("h3",{children:"Home"}),e.jsx("p",{children:"Content for home with right-aligned vertical tab."})]}),e.jsxs(r,{children:[e.jsx("h3",{children:"Search"}),e.jsx("p",{children:"Content for search with right-aligned vertical tab."})]}),e.jsxs(r,{children:[e.jsx("h3",{children:"Profile"}),e.jsx("p",{children:"Content for profile with right-aligned vertical tab."})]})]})]})]})]}),parameters:{docs:{description:{story:"Vertical tabs support configurable text alignment: left, center, or right."}}}},E={args:{children:null},render:()=>e.jsxs(n,{children:[e.jsxs(s,{"aria-label":"Complex content tabs",children:[e.jsx(a,{children:"Form"}),e.jsx(a,{children:"Table"}),e.jsx(a,{children:"Chart"})]}),e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx("h3",{children:"User Registration Form"}),e.jsxs("form",{className:"tab-story-form",children:[e.jsxs("div",{className:"tab-story-form-field",children:[e.jsx("label",{htmlFor:"name",children:"Name:"}),e.jsx("input",{id:"name",type:"text"})]}),e.jsxs("div",{className:"tab-story-form-field",children:[e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{id:"email",type:"email"})]}),e.jsx("button",{type:"submit",className:"tab-story-form-submit",children:"Submit"})]})]}),e.jsxs(r,{children:[e.jsx("h3",{children:"Data Table"}),e.jsxs("table",{className:"tab-story-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Role"}),e.jsx("th",{children:"Status"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"John Doe"}),e.jsx("td",{children:"Admin"}),e.jsx("td",{children:"Active"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Jane Smith"}),e.jsx("td",{children:"User"}),e.jsx("td",{children:"Inactive"})]})]})]})]}),e.jsxs(r,{children:[e.jsx("h3",{children:"Chart Placeholder"}),e.jsx("div",{className:"tab-story-chart",children:e.jsx("p",{children:"Chart would be rendered here"})})]})]})]}),parameters:{docs:{description:{story:"Tabs containing complex content like forms, tables, and charts."}}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'line',
    orientation: 'horizontal',
    defaultIndex: 0,
    children: null
  },
  render: () => {
    // Pure uncontrolled component - no Storybook args interference
    return <Tabs defaultIndex={0} size="md" variant="line" orientation="horizontal">\r
        <TabList aria-label="Sample tabs">\r
          <Tab>Tab 1</Tab>\r
          <Tab>Tab 2</Tab>\r
          <Tab>Tab 3</Tab>\r
        </TabList>\r
        <TabPanels>\r
          <TabPanel>\r
            <h3>Panel 1</h3>\r
            <p>This is the content for the first tab. It contains some sample text to demonstrate the tab functionality.</p>\r
          </TabPanel>\r
          <TabPanel>\r
            <h3>Panel 2</h3>\r
            <p>This is the content for the second tab. You can include any content here, including other components.</p>\r
          </TabPanel>\r
          <TabPanel>\r
            <h3>Panel 3</h3>\r
            <p>This is the content for the third tab. Notice how the content changes when you switch tabs.</p>\r
          </TabPanel>\r
        </TabPanels>\r
      </Tabs>;
  }
}`,...R.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="tab-story-section">\r
      <div>\r
        <h3>Small</h3>\r
        <Tabs size="sm">\r
          <TabList aria-label="Small tabs">\r
            <Tab>Tab 1</Tab>\r
            <Tab>Tab 2</Tab>\r
            <Tab>Tab 3</Tab>\r
          </TabList>\r
          <TabPanels>\r
            <TabPanel>Small tab content</TabPanel>\r
            <TabPanel>Second small tab</TabPanel>\r
            <TabPanel>Third small tab</TabPanel>\r
          </TabPanels>\r
        </Tabs>\r
      </div>\r
      \r
      <div>\r
        <h3>Medium (Default)</h3>\r
        <Tabs size="md">\r
          <TabList aria-label="Medium tabs">\r
            <Tab>Tab 1</Tab>\r
            <Tab>Tab 2</Tab>\r
            <Tab>Tab 3</Tab>\r
          </TabList>\r
          <TabPanels>\r
            <TabPanel>Medium tab content</TabPanel>\r
            <TabPanel>Second medium tab</TabPanel>\r
            <TabPanel>Third medium tab</TabPanel>\r
          </TabPanels>\r
        </Tabs>\r
      </div>\r
      \r
      <div>\r
        <h3>Large</h3>\r
        <Tabs size="lg">\r
          <TabList aria-label="Large tabs">\r
            <Tab>Tab 1</Tab>\r
            <Tab>Tab 2</Tab>\r
            <Tab>Tab 3</Tab>\r
          </TabList>\r
          <TabPanels>\r
            <TabPanel>Large tab content</TabPanel>\r
            <TabPanel>Second large tab</TabPanel>\r
            <TabPanel>Third large tab</TabPanel>\r
          </TabPanels>\r
        </Tabs>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different size variants for tabs.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="tab-story-section">\r
      <div>\r
        <h3>Line (Default)</h3>\r
        <Tabs variant="line">\r
          <TabList aria-label="Line tabs">\r
            <Tab>Dashboard</Tab>\r
            <Tab>Analytics</Tab>\r
            <Tab>Settings</Tab>\r
          </TabList>\r
          <TabPanels>\r
            <TabPanel>Dashboard content with charts and metrics</TabPanel>\r
            <TabPanel>Analytics data and reports</TabPanel>\r
            <TabPanel>Application settings and preferences</TabPanel>\r
          </TabPanels>\r
        </Tabs>\r
      </div>\r
      \r
      <div>\r
        <h3>Pills</h3>\r
        <Tabs variant="pills">\r
          <TabList aria-label="Pills tabs">\r
            <Tab>Home</Tab>\r
            <Tab>Products</Tab>\r
            <Tab>About</Tab>\r
          </TabList>\r
          <TabPanels>\r
            <TabPanel>Welcome to our homepage</TabPanel>\r
            <TabPanel>Browse our product catalog</TabPanel>\r
            <TabPanel>Learn more about our company</TabPanel>\r
          </TabPanels>\r
        </Tabs>\r
      </div>\r
      \r
      <div>\r
        <h3>Segment</h3>\r
        <Tabs variant="segment">\r
          <TabList aria-label="Segment tabs">\r
            <Tab>Overview</Tab>\r
            <Tab>Details</Tab>\r
            <Tab>Reviews</Tab>\r
          </TabList>\r
          <TabPanels>\r
            <TabPanel>Product overview and highlights</TabPanel>\r
            <TabPanel>Detailed specifications and features</TabPanel>\r
            <TabPanel>Customer reviews and ratings</TabPanel>\r
          </TabPanels>\r
        </Tabs>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants for tabs.'
      }
    }
  }
}`,...V.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="tab-story-vertical-container">\r
      <Tabs orientation="vertical">\r
        <TabList aria-label="Vertical tabs">\r
          <Tab>Profile</Tab>\r
          <Tab>Account</Tab>\r
          <Tab>Security</Tab>\r
          <Tab>Notifications</Tab>\r
        </TabList>\r
        <TabPanels>\r
          <TabPanel>\r
            <h3>Profile Settings</h3>\r
            <p>Update your personal information and profile picture.</p>\r
          </TabPanel>\r
          <TabPanel>\r
            <h3>Account Settings</h3>\r
            <p>Manage your account preferences and billing information.</p>\r
          </TabPanel>\r
          <TabPanel>\r
            <h3>Security Settings</h3>\r
            <p>Configure your password and two-factor authentication.</p>\r
          </TabPanel>\r
          <TabPanel>\r
            <h3>Notification Settings</h3>\r
            <p>Choose which notifications you want to receive.</p>\r
          </TabPanel>\r
        </TabPanels>\r
      </Tabs>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Vertical orientation for tabs.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <Tabs>\r
      <TabList aria-label="Tabs with disabled options">\r
        <Tab>Available</Tab>\r
        <Tab disabled>Disabled</Tab>\r
        <Tab>Another Available</Tab>\r
        <Tab disabled>Also Disabled</Tab>\r
      </TabList>\r
      <TabPanels>\r
        <TabPanel>This tab is available and can be selected.</TabPanel>\r
        <TabPanel>This tab is disabled and cannot be selected.</TabPanel>\r
        <TabPanel>This tab is also available for selection.</TabPanel>\r
        <TabPanel>This tab is also disabled.</TabPanel>  \r
      </TabPanels>\r
    </Tabs>,
  parameters: {
    docs: {
      description: {
        story: 'Tabs with some disabled options.'
      }
    }
  }
}`,...H.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: null // Will be provided by render function
  },
  render: args => <Tabs {...args}>\r
      <TabList aria-label="Disabled tabs">\r
        <Tab>Tab 1</Tab>\r
        <Tab>Tab 2</Tab>\r
        <Tab>Tab 3</Tab>\r
      </TabList>\r
      <TabPanels>\r
        <TabPanel>All tabs are disabled</TabPanel>\r
        <TabPanel>No interaction possible</TabPanel>\r
        <TabPanel>Completely disabled state</TabPanel>\r
      </TabPanels>\r
    </Tabs>
}`,...q.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: ControlledTabsTemplate,
  parameters: {
    docs: {
      description: {
        story: 'Controlled tabs with external state management.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <Tabs>\r
      <TabList aria-label="Many tabs">\r
        <Tab>Tab 1</Tab>\r
        <Tab>Tab 2</Tab>\r
        <Tab>Tab 3</Tab>\r
        <Tab>Tab 4</Tab>\r
        <Tab>Tab 5</Tab>\r
        <Tab>Tab 6</Tab>\r
        <Tab>Tab 7</Tab>\r
        <Tab>Tab 8</Tab>\r
      </TabList>\r
      <TabPanels>\r
        <TabPanel>Content for tab 1</TabPanel>\r
        <TabPanel>Content for tab 2</TabPanel>\r
        <TabPanel>Content for tab 3</TabPanel>\r
        <TabPanel>Content for tab 4</TabPanel>\r
        <TabPanel>Content for tab 5</TabPanel>\r
        <TabPanel>Content for tab 6</TabPanel>\r
        <TabPanel>Content for tab 7</TabPanel>\r
        <TabPanel>Content for tab 8</TabPanel>\r
      </TabPanels>\r
    </Tabs>,
  parameters: {
    docs: {
      description: {
        story: 'Tabs with many options to test horizontal scrolling.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="tab-story-section">\r
      <div>\r
        <h3>Icons with Text (Left Position)</h3>\r
        <Tabs defaultIndex={0}>\r
          <TabList aria-label="Tabs with icons">\r
            <Tab icon={<Icon name="home" />}>Home</Tab>\r
            <Tab icon={<Icon name="search" />}>Search</Tab>\r
            <Tab icon={<Icon name="user" />}>Profile</Tab>\r
          </TabList>\r
          <TabPanels>\r
            <TabPanel>Home panel content with icon on the left</TabPanel>\r
            <TabPanel>Search panel content with icon on the left</TabPanel>\r
            <TabPanel>Profile panel content with icon on the left</TabPanel>\r
          </TabPanels>\r
        </Tabs>\r
      </div>\r
      \r
      <div>\r
        <h3>Icons with Text (Right Position)</h3>\r
        <Tabs defaultIndex={0}>\r
          <TabList aria-label="Tabs with right icons">\r
            <Tab icon={<Icon name="home" />} iconPosition="right">Home</Tab>\r
            <Tab icon={<Icon name="search" />} iconPosition="right">Search</Tab>\r
            <Tab icon={<Icon name="user" />} iconPosition="right">Profile</Tab>\r
          </TabList>\r
          <TabPanels>\r
            <TabPanel>Home panel content with icon on the right</TabPanel>\r
            <TabPanel>Search panel content with icon on the right</TabPanel>\r
            <TabPanel>Profile panel content with icon on the right</TabPanel>\r
          </TabPanels>\r
        </Tabs>\r
      </div>\r
\r
      <div>\r
        <h3>Icons with Text (Top Position)</h3>\r
        <Tabs defaultIndex={0}>\r
          <TabList aria-label="Tabs with top icons">\r
            <Tab icon={<Icon name="home" />} iconPosition="top">Home</Tab>\r
            <Tab icon={<Icon name="search" />} iconPosition="top">Search</Tab>\r
            <Tab icon={<Icon name="user" />} iconPosition="top">Profile</Tab>\r
          </TabList>\r
          <TabPanels>\r
            <TabPanel>Home panel content with icon on top</TabPanel>\r
            <TabPanel>Search panel content with icon on top</TabPanel>\r
            <TabPanel>Profile panel content with icon on top</TabPanel>\r
          </TabPanels>\r
        </Tabs>\r
      </div>\r
\r
      <div>\r
        <h3>Icon Only (No Text)</h3>\r
        <Tabs defaultIndex={0}>\r
          <TabList aria-label="Icon-only tabs">\r
            <Tab icon={<Icon name="home" />} />\r
            <Tab icon={<Icon name="search" />} />\r
            <Tab icon={<Icon name="user" />} />\r
          </TabList>\r
          <TabPanels>\r
            <TabPanel>Home panel - icon only tab</TabPanel>\r
            <TabPanel>Search panel - icon only tab</TabPanel>\r
            <TabPanel>Profile panel - icon only tab</TabPanel>\r
          </TabPanels>\r
        </Tabs>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tabs can include icons in various positions (left, right, top, bottom) or be icon-only.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="tab-story-section">\r
      <div>\r
        <h3>Vertical Tabs - Left Aligned Text</h3>\r
        <Tabs orientation="vertical" defaultIndex={0}>\r
          <TabList aria-label="Left aligned vertical tabs">\r
            <Tab textAlign="left" icon={<Icon name="home" />}>Home Dashboard</Tab>\r
            <Tab textAlign="left" icon={<Icon name="search" />}>Search Results</Tab>\r
            <Tab textAlign="left" icon={<Icon name="user" />}>User Profile</Tab>\r
          </TabList>\r
          <TabPanels>\r
            <TabPanel>\r
              <h3>Home Dashboard</h3>\r
              <p>Content for home dashboard with left-aligned vertical tab.</p>\r
            </TabPanel>\r
            <TabPanel>\r
              <h3>Search Results</h3>\r
              <p>Content for search results with left-aligned vertical tab.</p>\r
            </TabPanel>\r
            <TabPanel>\r
              <h3>User Profile</h3>\r
              <p>Content for user profile with left-aligned vertical tab.</p>\r
            </TabPanel>\r
          </TabPanels>\r
        </Tabs>\r
      </div>\r
\r
      <div>\r
        <h3>Vertical Tabs - Center Aligned Text</h3>\r
        <Tabs orientation="vertical" defaultIndex={0}>\r
          <TabList aria-label="Center aligned vertical tabs">\r
            <Tab textAlign="center" icon={<Icon name="home" />}>Home</Tab>\r
            <Tab textAlign="center" icon={<Icon name="search" />}>Search</Tab>\r
            <Tab textAlign="center" icon={<Icon name="user" />}>Profile</Tab>\r
          </TabList>\r
          <TabPanels>\r
            <TabPanel>\r
              <h3>Home</h3>\r
              <p>Content for home with center-aligned vertical tab.</p>\r
            </TabPanel>\r
            <TabPanel>\r
              <h3>Search</h3>\r
              <p>Content for search with center-aligned vertical tab.</p>\r
            </TabPanel>\r
            <TabPanel>\r
              <h3>Profile</h3>\r
              <p>Content for profile with center-aligned vertical tab.</p>\r
            </TabPanel>\r
          </TabPanels>\r
        </Tabs>\r
      </div>\r
\r
      <div>\r
        <h3>Vertical Tabs - Right Aligned Text</h3>\r
        <Tabs orientation="vertical" defaultIndex={0}>\r
          <TabList aria-label="Right aligned vertical tabs">\r
            <Tab textAlign="right" icon={<Icon name="home" />} iconPosition="right">Home</Tab>\r
            <Tab textAlign="right" icon={<Icon name="search" />} iconPosition="right">Search</Tab>\r
            <Tab textAlign="right" icon={<Icon name="user" />} iconPosition="right">Profile</Tab>\r
          </TabList>\r
          <TabPanels>\r
            <TabPanel>\r
              <h3>Home</h3>\r
              <p>Content for home with right-aligned vertical tab.</p>\r
            </TabPanel>\r
            <TabPanel>\r
              <h3>Search</h3>\r
              <p>Content for search with right-aligned vertical tab.</p>\r
            </TabPanel>\r
            <TabPanel>\r
              <h3>Profile</h3>\r
              <p>Content for profile with right-aligned vertical tab.</p>\r
            </TabPanel>\r
          </TabPanels>\r
        </Tabs>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Vertical tabs support configurable text alignment: left, center, or right.'
      }
    }
  }
}`,...F.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <Tabs>\r
      <TabList aria-label="Complex content tabs">\r
        <Tab>Form</Tab>\r
        <Tab>Table</Tab>\r
        <Tab>Chart</Tab>\r
      </TabList>\r
      <TabPanels>\r
        <TabPanel>\r
          <h3>User Registration Form</h3>\r
          <form className="tab-story-form">\r
            <div className="tab-story-form-field">\r
              <label htmlFor="name">Name:</label>\r
              <input id="name" type="text" />\r
            </div>\r
            <div className="tab-story-form-field">\r
              <label htmlFor="email">Email:</label>\r
              <input id="email" type="email" />\r
            </div>\r
            <button type="submit" className="tab-story-form-submit">\r
              Submit\r
            </button>\r
          </form>\r
        </TabPanel>\r
        <TabPanel>\r
          <h3>Data Table</h3>\r
          <table className="tab-story-table">\r
            <thead>\r
              <tr>\r
                <th>Name</th>\r
                <th>Role</th>\r
                <th>Status</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr>\r
                <td>John Doe</td>\r
                <td>Admin</td>\r
                <td>Active</td>\r
              </tr>\r
              <tr>\r
                <td>Jane Smith</td>\r
                <td>User</td>\r
                <td>Inactive</td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </TabPanel>\r
        <TabPanel>\r
          <h3>Chart Placeholder</h3>\r
          <div className="tab-story-chart">\r
            <p>Chart would be rendered here</p>\r
          </div>\r
        </TabPanel>\r
      </TabPanels>\r
    </Tabs>,
  parameters: {
    docs: {
      description: {
        story: 'Tabs containing complex content like forms, tables, and charts.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}};const X=["Default","Sizes","Variants","Vertical","WithDisabledTabs","DisabledTabs","Controlled","ManyTabs","WithIcons","VerticalWithTextAlignment","ComplexContent"];export{E as ComplexContent,_ as Controlled,R as Default,q as DisabledTabs,k as ManyTabs,D as Sizes,V as Variants,z as Vertical,F as VerticalWithTextAlignment,H as WithDisabledTabs,M as WithIcons,X as __namedExportsOrder,Q as default};
