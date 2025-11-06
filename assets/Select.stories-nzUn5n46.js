import{j as e}from"./jsx-runtime-CDt2p4po.js";import{f as G}from"./index-BxLnRenJ.js";import{r as u,R as B}from"./index-GiUgBvb1.js";import{L as t}from"./Label-ozbwUjrV.js";const l=u.forwardRef(({size:o="base",options:m=[],value:c,defaultValue:h,disabled:n=!1,required:$=!1,placeholder:L="Select an option...",onChange:S,onFocus:Pe,onBlur:He,className:Ke="",id:U,name:We,"aria-label":J,"aria-describedby":Q,"aria-labelledby":_e,searchable:P=!1,searchPlaceholder:X="Search options...",multiple:v=!1,maxSelections:Y,...Ge},j)=>{const[d,y]=u.useState(!1),[Z,w]=u.useState(""),[H,x]=u.useState(-1),[ee,Je]=u.useState(c||h||""),[p,se]=u.useState(v?c?Array.isArray(c)?c:c.split(",").filter(Boolean):[]:[]),K=c!==void 0,le=K?c:ee,g=u.useRef(null);u.useEffect(()=>{if(v&&c!==void 0){const s=Array.isArray(c)?c:c.split(",").filter(Boolean);se(s)}},[c,v]);const W=u.useRef(null),_=u.useRef(null),Qe=B.useCallback(s=>{g.current=s,typeof j=="function"?j(s):j&&(j.current=s)},[j]),N=m.filter(s=>s.label.toLowerCase().includes(Z.toLowerCase())),i="select",Xe=`${i}--${o}`,Ye=n?`${i}--disabled`:"",Ze=d?`${i}--open`:"",es=[i,Xe,Ye,Ze,Ke].filter(Boolean).join(" "),ss=s=>{if(!n)switch(s.key){case"ArrowDown":s.preventDefault(),d?x(r=>r<N.length-1?r+1:0):y(!0);break;case"ArrowUp":s.preventDefault(),d&&x(r=>r>0?r-1:N.length-1);break;case"Enter":if(s.preventDefault(),!d)y(!0);else if(H>=0){const r=N[H];r&&!r.disabled&&te(r.value)}break;case"Escape":s.preventDefault(),y(!1),w(""),x(-1);break;case"Tab":y(!1);break}},te=s=>{if(v){const r=p.includes(s)?p.filter(b=>b!==s):Y&&p.length>=Y?p:[...p,s];if(se(r),S&&g.current){const b={target:{...g.current,value:r.join(",")}};S(b)}}else if(K||Je(s),y(!1),w(""),x(-1),S&&g.current){const r={target:{...g.current,value:s}};S(r)}};u.useEffect(()=>{const s=r=>{W.current&&!W.current.contains(r.target)&&(y(!1),w(""),x(-1))};if(d)return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[d]),u.useEffect(()=>{d&&P&&_.current&&_.current.focus()},[d,P]);const ls=()=>{if(v){if(p.length===0)return L;if(p.length===1){const r=m.find(b=>b.value===p[0]);return r?r.label:p[0]}return`${p.length} selected`}const s=m.find(r=>r.value===le);return s?s.label:L};return e.jsxs("div",{className:`${i}-container`,ref:W,children:[e.jsxs("select",{ref:Qe,className:`${i}-hidden`,id:U,name:We,value:v?void 0:K?c:ee,defaultValue:h,disabled:n,required:$,multiple:v,"aria-label":J,"aria-describedby":Q,"aria-labelledby":_e,onChange:S,onFocus:Pe,onBlur:He,...Ge,children:[L&&e.jsx("option",{value:"",children:L}),m.map(s=>e.jsx("option",{value:s.value,disabled:s.disabled,children:s.label},s.value))]}),e.jsxs("div",{className:es,onClick:()=>!n&&y(!d),onKeyDown:ss,tabIndex:n?-1:0,role:"combobox","aria-expanded":d?"true":"false","aria-haspopup":"listbox","aria-controls":`${U}-listbox`,"aria-describedby":Q,"aria-label":J||"Select option",children:[e.jsx("span",{className:`${i}-value`,children:ls()}),e.jsx("span",{className:`${i}-arrow`,"aria-hidden":"true",children:d?"▲":"▼"})]}),d&&e.jsxs("div",{className:`${i}-dropdown`,children:[P&&e.jsx("div",{className:`${i}-search`,children:e.jsx("input",{ref:_,type:"text",className:`${i}-search-input`,placeholder:X,value:Z,onChange:s=>w(s.target.value),onClick:s=>s.stopPropagation(),"aria-label":X||"Search options"})}),e.jsx("div",{className:`${i}-options`,role:"listbox",id:`${U}-listbox`,"aria-multiselectable":v?"true":"false",children:N.length===0?e.jsx("div",{className:`${i}-no-options`,children:"No options found"}):N.map((s,r)=>{const b=v?p.includes(s.value):le===s.value,ts=r===H;return e.jsxs("div",{className:`${i}-option ${b?`${i}-option--selected`:""} ${ts?`${i}-option--focused`:""} ${s.disabled?`${i}-option--disabled`:""}`,role:"option","aria-selected":b,onClick:()=>!s.disabled&&te(s.value),onMouseEnter:()=>x(r),children:[v&&e.jsx("span",{className:`${i}-option-checkbox`,children:b?"☑":"☐"}),e.jsx("span",{className:`${i}-option-label`,children:s.label})]},s.value)})})]})]})});l.displayName="Select";l.__docgenInfo={description:`Select component for choosing from a list of options.\r
\r
Features:\r
- Three size variants (sm, base, lg)\r
- Single and multiple selection modes\r
- Optional search functionality\r
- Keyboard navigation (Arrow keys, Enter, Escape)\r
- Disabled state and option-level disabled states\r
- Comprehensive accessibility features\r
- Theme integration\r
- Form validation support\r
\r
Usage:\r
\`\`\`tsx\r
<Select \r
  options={[{value: 'a', label: 'Option A'}]} \r
  value="a" \r
  onChange={handleChange} \r
/>\r
\`\`\``,methods:[],displayName:"Select",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'base' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'base'",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"Options for the select",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Selected value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default selected value"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the select is disabled",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Whether the select is required",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Select an option...'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:"Blur handler"},className:{required:!1,tsType:{name:"string"},description:"CSS class name",defaultValue:{value:"''",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Unique identifier"},name:{required:!1,tsType:{name:"string"},description:"Name attribute for form submission"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by for additional context"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelled by for association with other elements"},searchable:{required:!1,tsType:{name:"boolean"},description:"Whether to show search functionality",defaultValue:{value:"false",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"Search placeholder text",defaultValue:{value:"'Search options...'",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether to allow multiple selections",defaultValue:{value:"false",computed:!1}},maxSelections:{required:!1,tsType:{name:"number"},description:"Maximum number of selections (for multiple)"}},composes:["Omit"]};const a=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],f=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"uk",label:"United Kingdom"},{value:"fr",label:"France"},{value:"de",label:"Germany"},{value:"jp",label:"Japan"},{value:"au",label:"Australia"},{value:"br",label:"Brazil"},{value:"in",label:"India"},{value:"cn",label:"China"}],V=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"},{value:"pending",label:"Pending"},{value:"suspended",label:"Suspended",disabled:!0},{value:"archived",label:"Archived"}],us={title:"Atoms/Select",component:l,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","base","lg"],description:"Size variant"},options:{control:"object",description:"Array of options"},value:{control:"text",description:"Selected value"},disabled:{control:"boolean",description:"Disabled state"},required:{control:"boolean",description:"Required field validation"},placeholder:{control:"text",description:"Placeholder text"},searchable:{control:"boolean",description:"Enable search functionality"},multiple:{control:"boolean",description:"Allow multiple selections"},maxSelections:{control:"number",description:"Maximum selections (for multiple)"},onChange:{action:"changed"},onFocus:{action:"focused"},onBlur:{action:"blurred"}},args:{onChange:G(),onFocus:G(),onBlur:G(),options:a}},T={args:{placeholder:"Select a fruit..."},parameters:{docs:{description:{story:"Default select dropdown with basic options."}}}},A={render:()=>e.jsxs("div",{className:"select-story-section",children:[e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Small Select"}),e.jsx(l,{size:"sm",options:a,placeholder:"Small select..."})]})}),e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Base Select (Default)"}),e.jsx(l,{size:"base",options:a,placeholder:"Base select..."})]})}),e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Large Select"}),e.jsx(l,{size:"lg",options:a,placeholder:"Large select..."})]})})]}),parameters:{docs:{description:{story:"Different size variants for various UI contexts."}}}},C={render:()=>e.jsxs("div",{className:"select-story-form",children:[e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"fruit-select",children:"Choose your favorite fruit"}),e.jsx(l,{id:"fruit-select",options:a,placeholder:"Select a fruit..."})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"country-select",children:"Select your country"}),e.jsx(l,{id:"country-select",options:f,placeholder:"Choose country...",value:"us"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"status-select",required:!0,children:"Account Status"}),e.jsx(l,{id:"status-select",options:V,placeholder:"Select status...",required:!0})]})]}),parameters:{docs:{description:{story:"Select components properly associated with labels using htmlFor."}}}},D={render:()=>e.jsx("div",{className:"select-story-section",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"searchable-select",children:"Searchable Country Select"}),e.jsx(l,{id:"searchable-select",options:f,placeholder:"Search and select country...",searchable:!0,searchPlaceholder:"Type to search countries..."})]})}),parameters:{docs:{description:{story:"Select with search functionality to filter through options."}}}},rs=()=>{const[o,m]=B.useState(["apple","cherry"]),c=h=>{const n=h.target.value.split(",").filter(Boolean);m(n)};return e.jsx("div",{className:"select-story-section",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"multiple-select",children:"Select Multiple Fruits"}),e.jsx(l,{id:"multiple-select",options:a,placeholder:"Select fruits...",multiple:!0,value:o.join(","),onChange:c}),e.jsxs("div",{className:"select-story-selected-values",children:[e.jsx("strong",{children:"Selected:"})," ",o.length>0?o.join(", "):"None"]})]})})},O={render:()=>e.jsx(rs,{}),parameters:{docs:{description:{story:"Select component with multiple selection support. Shows checkboxes and selected count."}}}},as=()=>{const[o,m]=B.useState(["us","ca","uk"]),c=h=>{const n=h.target.value.split(",").filter(Boolean);m(n)};return e.jsx("div",{className:"select-story-section",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"searchable-multiple",children:"Select Countries (Max 5)"}),e.jsx(l,{id:"searchable-multiple",options:f,placeholder:"Search and select countries...",multiple:!0,searchable:!0,maxSelections:5,value:o.join(","),onChange:c,searchPlaceholder:"Type to search countries..."}),e.jsxs("div",{className:"select-story-selected-values",children:[e.jsxs("strong",{children:["Selected (",o.length,"/5):"]})," ",o.length>0?o.map(h=>{var n;return(n=f.find($=>$.value===h))==null?void 0:n.label}).join(", "):"None"]})]})})},F={render:()=>e.jsx(as,{}),parameters:{docs:{description:{story:"Advanced select with both search and multiple selection features, including selection limit."}}}},z={render:()=>e.jsxs("div",{className:"select-story-section",children:[e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Disabled Select"}),e.jsx(l,{options:a,placeholder:"Disabled select...",disabled:!0})]})}),e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Select with Disabled Options"}),e.jsx(l,{options:V,placeholder:"Some options disabled..."})]})}),e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Disabled with Value"}),e.jsx(l,{options:a,value:"banana",disabled:!0})]})})]}),parameters:{docs:{description:{story:"Select components in disabled states, both component-level and option-level."}}}},M={render:()=>e.jsx("form",{className:"select-story-form-demo",children:e.jsxs("fieldset",{className:"select-story-fieldset",children:[e.jsx("legend",{children:"User Preferences"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"language-select",required:!0,children:"Preferred Language"}),e.jsx(l,{id:"language-select",name:"language",options:[{value:"en",label:"English"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"de",label:"German"},{value:"zh",label:"Chinese"}],placeholder:"Select language...",required:!0,value:"en"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"timezone-select",children:"Timezone"}),e.jsx(l,{id:"timezone-select",name:"timezone",options:[{value:"utc",label:"UTC"},{value:"est",label:"Eastern Time"},{value:"cst",label:"Central Time"},{value:"mst",label:"Mountain Time"},{value:"pst",label:"Pacific Time"}],placeholder:"Select timezone...",searchable:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"interests-select",children:"Interests (Multiple)"}),e.jsx(l,{id:"interests-select",name:"interests",options:[{value:"tech",label:"Technology"},{value:"design",label:"Design"},{value:"business",label:"Business"},{value:"science",label:"Science"},{value:"sports",label:"Sports"},{value:"music",label:"Music"},{value:"art",label:"Art"}],placeholder:"Select interests...",multiple:!0,searchable:!0,maxSelections:3})]})]})}),parameters:{docs:{description:{story:"Select components in a complete form context with fieldsets, legends, and proper form submission attributes."}}}},E={render:()=>e.jsxs("div",{className:"select-story-accessibility",children:[e.jsxs("div",{className:"select-story-section",children:[e.jsx("h4",{children:"ARIA Labels and Descriptions"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{id:"aria-select",options:a,placeholder:"Select with ARIA support...","aria-label":"Fruit selection with ARIA support","aria-describedby":"fruit-help"}),e.jsx("div",{id:"fruit-help",className:"select-story-help-text",children:"This select includes comprehensive ARIA labeling for screen readers."})]})]}),e.jsxs("div",{className:"select-story-section",children:[e.jsx("h4",{children:"Keyboard Navigation"}),e.jsx("p",{className:"select-story-instructions",children:"Use Tab to focus, Arrow Keys to navigate, Enter to select, Escape to close."}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"keyboard-demo",children:"Keyboard Navigation Demo"}),e.jsx(l,{id:"keyboard-demo",options:f,placeholder:"Use keyboard to navigate...",searchable:!0})]})]}),e.jsxs("div",{className:"select-story-section",children:[e.jsx("h4",{children:"Screen Reader Announcements"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"screen-reader-demo",children:"Screen Reader Optimized"}),e.jsx(l,{id:"screen-reader-demo",options:V,placeholder:"Optimized for screen readers...","aria-describedby":"screen-reader-help"}),e.jsx("div",{id:"screen-reader-help",className:"select-story-help-text",children:"This select announces selection changes and state updates to screen readers."})]})]})]}),parameters:{docs:{description:{story:"Accessibility features including ARIA labels, descriptions, and keyboard navigation."}}}},R={render:()=>e.jsxs("div",{className:"select-story-theme-demo",children:[e.jsxs("div",{className:"select-story-theme-section",children:[e.jsx("h3",{children:"Theme Adaptive Select Components"}),e.jsxs("div",{className:"select-story-theme-row",children:[e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Small Size"}),e.jsx(l,{size:"sm",options:a,placeholder:"Small select...",value:"apple"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Base Size"}),e.jsx(l,{options:a,placeholder:"Base select...",value:"banana"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Large Size"}),e.jsx(l,{size:"lg",options:a,placeholder:"Large select...",value:"cherry"})]})]}),e.jsxs("div",{className:"select-story-theme-row",children:[e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Searchable"}),e.jsx(l,{options:f,placeholder:"Search countries...",searchable:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Multiple Selection"}),e.jsx(l,{options:a,placeholder:"Multiple fruits...",multiple:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Disabled State"}),e.jsx(l,{options:a,value:"date",disabled:!0})]})]})]}),e.jsxs("div",{className:"select-story-theme-info",children:[e.jsx("h4",{children:"Theme Variables Used:"}),e.jsxs("div",{className:"select-story-theme-vars",children:[e.jsx("code",{children:"--color-accent"}),": Border focus and selection background",e.jsx("br",{}),e.jsx("code",{children:"--color-accent-hover"}),": Hover state colors",e.jsx("br",{}),e.jsx("code",{children:"--color-border"}),": Default border color",e.jsx("br",{}),e.jsx("code",{children:"--color-bg"}),": Background color",e.jsx("br",{}),e.jsx("code",{children:"--color-panel"}),": Hover background",e.jsx("br",{}),e.jsx("code",{children:"--color-text-primary"}),": Main text color",e.jsx("br",{}),e.jsx("code",{children:"--color-text-secondary"}),": Arrow and secondary text",e.jsx("br",{}),e.jsx("code",{children:"--color-text-muted"}),": Placeholder and disabled text"]})]})]}),parameters:{docs:{description:{story:"Select components that adapt to different themes. Use the theme switcher in the toolbar to see color changes."}}}},q={render:()=>e.jsx("div",{className:"select-story-comprehensive",children:e.jsxs("div",{className:"select-story-grid",children:[e.jsxs("div",{className:"select-story-grid-section",children:[e.jsx("h4",{children:"Basic Selects"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Simple Select"}),e.jsx(l,{options:a,placeholder:"Choose..."})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"With Value"}),e.jsx(l,{options:a,value:"banana"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Required"}),e.jsx(l,{options:a,placeholder:"Required...",required:!0})]})]}),e.jsxs("div",{className:"select-story-grid-section",children:[e.jsx("h4",{children:"Advanced Features"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Searchable"}),e.jsx(l,{options:f,placeholder:"Search...",searchable:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Multiple"}),e.jsx(l,{options:a,placeholder:"Multiple...",multiple:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Search + Multiple"}),e.jsx(l,{options:f,placeholder:"Both...",searchable:!0,multiple:!0})]})]}),e.jsxs("div",{className:"select-story-grid-section",children:[e.jsx("h4",{children:"States"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Disabled"}),e.jsx(l,{options:a,placeholder:"Disabled...",disabled:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"With Disabled Options"}),e.jsx(l,{options:V,placeholder:"Some disabled..."})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Max Selections"}),e.jsx(l,{options:a,placeholder:"Max 2...",multiple:!0,maxSelections:2})]})]})]})}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of all select features and variations."}}}},cs=()=>{const[o,m]=B.useState(""),c=h=>{m(h.target.value)};return e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"controlled-select",children:"Controlled Select"}),e.jsx(l,{id:"controlled-select",options:a,value:o,onChange:c,placeholder:"Select a fruit..."}),e.jsxs("div",{className:"select-story-selected-values",children:[e.jsx("strong",{children:"Current Value:"})," ",o||"None"]})]})},I={render:()=>e.jsx(cs,{}),parameters:{docs:{description:{story:"Controlled select component with external state management."}}}},k={args:{size:"base",options:a,placeholder:"Interactive select...",disabled:!1,required:!1,searchable:!1,multiple:!1},render:o=>e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"interactive-select",children:"Interactive Select"}),e.jsx(l,{...o,id:"interactive-select"})]}),parameters:{docs:{description:{story:"Interactive story where you can modify all select properties using the controls panel. Note: This is uncontrolled, so selections will work properly."}}}};var re,ae,ce;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a fruit...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default select dropdown with basic options.'
      }
    }
  }
}`,...(ce=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var ie,oe,ne;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="select-story-section">\r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Small Select</Label>\r
          <Select size="sm" options={basicOptions} placeholder="Small select..." />\r
        </div>\r
      </div>\r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Base Select (Default)</Label>\r
          <Select size="base" options={basicOptions} placeholder="Base select..." />\r
        </div>\r
      </div>\r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Large Select</Label>\r
          <Select size="lg" options={basicOptions} placeholder="Large select..." />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different size variants for various UI contexts.'
      }
    }
  }
}`,...(ne=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var de,ue,pe;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="select-story-form">\r
      <div className="select-story-field">\r
        <Label htmlFor="fruit-select">Choose your favorite fruit</Label>\r
        <Select id="fruit-select" options={basicOptions} placeholder="Select a fruit..." />\r
      </div>\r
      \r
      <div className="select-story-field">\r
        <Label htmlFor="country-select">Select your country</Label>\r
        <Select id="country-select" options={countryOptions} placeholder="Choose country..." value="us" />\r
      </div>\r
      \r
      <div className="select-story-field">\r
        <Label htmlFor="status-select" required>Account Status</Label>\r
        <Select id="status-select" options={statusOptions} placeholder="Select status..." required />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Select components properly associated with labels using htmlFor.'
      }
    }
  }
}`,...(pe=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,he,ve;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div className="select-story-section">\r
      <div className="select-story-field">\r
        <Label htmlFor="searchable-select">Searchable Country Select</Label>\r
        <Select id="searchable-select" options={countryOptions} placeholder="Search and select country..." searchable searchPlaceholder="Type to search countries..." />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Select with search functionality to filter through options.'
      }
    }
  }
}`,...(ve=(he=D.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var be,fe,ye;O.parameters={...O.parameters,docs:{...(be=O.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <MultipleSelectDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Select component with multiple selection support. Shows checkboxes and selected count.'
      }
    }
  }
}`,...(ye=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var xe,Se,je;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <SearchableMultipleDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Advanced select with both search and multiple selection features, including selection limit.'
      }
    }
  }
}`,...(je=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var ge,Ne,Le;z.parameters={...z.parameters,docs:{...(ge=z.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div className="select-story-section">\r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Disabled Select</Label>\r
          <Select options={basicOptions} placeholder="Disabled select..." disabled />\r
        </div>\r
      </div>\r
      \r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Select with Disabled Options</Label>\r
          <Select options={statusOptions} placeholder="Some options disabled..." />\r
        </div>\r
      </div>\r
      \r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Disabled with Value</Label>\r
          <Select options={basicOptions} value="banana" disabled />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Select components in disabled states, both component-level and option-level.'
      }
    }
  }
}`,...(Le=(Ne=z.parameters)==null?void 0:Ne.docs)==null?void 0:Le.source}}};var we,Te,Ae;M.parameters={...M.parameters,docs:{...(we=M.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <form className="select-story-form-demo">\r
      <fieldset className="select-story-fieldset">\r
        <legend>User Preferences</legend>\r
        \r
        <div className="select-story-field">\r
          <Label htmlFor="language-select" required>Preferred Language</Label>\r
          <Select id="language-select" name="language" options={[{
          value: 'en',
          label: 'English'
        }, {
          value: 'es',
          label: 'Spanish'
        }, {
          value: 'fr',
          label: 'French'
        }, {
          value: 'de',
          label: 'German'
        }, {
          value: 'zh',
          label: 'Chinese'
        }]} placeholder="Select language..." required value="en" />\r
        </div>\r
        \r
        <div className="select-story-field">\r
          <Label htmlFor="timezone-select">Timezone</Label>\r
          <Select id="timezone-select" name="timezone" options={[{
          value: 'utc',
          label: 'UTC'
        }, {
          value: 'est',
          label: 'Eastern Time'
        }, {
          value: 'cst',
          label: 'Central Time'
        }, {
          value: 'mst',
          label: 'Mountain Time'
        }, {
          value: 'pst',
          label: 'Pacific Time'
        }]} placeholder="Select timezone..." searchable />\r
        </div>\r
        \r
        <div className="select-story-field">\r
          <Label htmlFor="interests-select">Interests (Multiple)</Label>\r
          <Select id="interests-select" name="interests" options={[{
          value: 'tech',
          label: 'Technology'
        }, {
          value: 'design',
          label: 'Design'
        }, {
          value: 'business',
          label: 'Business'
        }, {
          value: 'science',
          label: 'Science'
        }, {
          value: 'sports',
          label: 'Sports'
        }, {
          value: 'music',
          label: 'Music'
        }, {
          value: 'art',
          label: 'Art'
        }]} placeholder="Select interests..." multiple searchable maxSelections={3} />\r
        </div>\r
      </fieldset>\r
    </form>,
  parameters: {
    docs: {
      description: {
        story: 'Select components in a complete form context with fieldsets, legends, and proper form submission attributes.'
      }
    }
  }
}`,...(Ae=(Te=M.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var Ce,De,Oe;E.parameters={...E.parameters,docs:{...(Ce=E.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div className="select-story-accessibility">\r
      <div className="select-story-section">\r
        <h4>ARIA Labels and Descriptions</h4>\r
        <div className="select-story-field">\r
          <Select id="aria-select" options={basicOptions} placeholder="Select with ARIA support..." aria-label="Fruit selection with ARIA support" aria-describedby="fruit-help" />\r
          <div id="fruit-help" className="select-story-help-text">\r
            This select includes comprehensive ARIA labeling for screen readers.\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="select-story-section">\r
        <h4>Keyboard Navigation</h4>\r
        <p className="select-story-instructions">\r
          Use Tab to focus, Arrow Keys to navigate, Enter to select, Escape to close.\r
        </p>\r
        <div className="select-story-field">\r
          <Label htmlFor="keyboard-demo">Keyboard Navigation Demo</Label>\r
          <Select id="keyboard-demo" options={countryOptions} placeholder="Use keyboard to navigate..." searchable />\r
        </div>\r
      </div>\r
      \r
      <div className="select-story-section">\r
        <h4>Screen Reader Announcements</h4>\r
        <div className="select-story-field">\r
          <Label htmlFor="screen-reader-demo">Screen Reader Optimized</Label>\r
          <Select id="screen-reader-demo" options={statusOptions} placeholder="Optimized for screen readers..." aria-describedby="screen-reader-help" />\r
          <div id="screen-reader-help" className="select-story-help-text">\r
            This select announces selection changes and state updates to screen readers.\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including ARIA labels, descriptions, and keyboard navigation.'
      }
    }
  }
}`,...(Oe=(De=E.parameters)==null?void 0:De.docs)==null?void 0:Oe.source}}};var Fe,ze,Me;R.parameters={...R.parameters,docs:{...(Fe=R.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => <div className="select-story-theme-demo">\r
      <div className="select-story-theme-section">\r
        <h3>Theme Adaptive Select Components</h3>\r
        \r
        <div className="select-story-theme-row">\r
          <div className="select-story-field">\r
            <Label>Small Size</Label>\r
            <Select size="sm" options={basicOptions} placeholder="Small select..." value="apple" />\r
          </div>\r
          \r
          <div className="select-story-field">\r
            <Label>Base Size</Label>\r
            <Select options={basicOptions} placeholder="Base select..." value="banana" />\r
          </div>\r
          \r
          <div className="select-story-field">\r
            <Label>Large Size</Label>\r
            <Select size="lg" options={basicOptions} placeholder="Large select..." value="cherry" />\r
          </div>\r
        </div>\r
        \r
        <div className="select-story-theme-row">\r
          <div className="select-story-field">\r
            <Label>Searchable</Label>\r
            <Select options={countryOptions} placeholder="Search countries..." searchable />\r
          </div>\r
          \r
          <div className="select-story-field">\r
            <Label>Multiple Selection</Label>\r
            <Select options={basicOptions} placeholder="Multiple fruits..." multiple />\r
          </div>\r
          \r
          <div className="select-story-field">\r
            <Label>Disabled State</Label>\r
            <Select options={basicOptions} value="date" disabled />\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="select-story-theme-info">\r
        <h4>Theme Variables Used:</h4>\r
        <div className="select-story-theme-vars">\r
          <code>--color-accent</code>: Border focus and selection background<br />\r
          <code>--color-accent-hover</code>: Hover state colors<br />\r
          <code>--color-border</code>: Default border color<br />\r
          <code>--color-bg</code>: Background color<br />\r
          <code>--color-panel</code>: Hover background<br />\r
          <code>--color-text-primary</code>: Main text color<br />\r
          <code>--color-text-secondary</code>: Arrow and secondary text<br />\r
          <code>--color-text-muted</code>: Placeholder and disabled text\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Select components that adapt to different themes. Use the theme switcher in the toolbar to see color changes.'
      }
    }
  }
}`,...(Me=(ze=R.parameters)==null?void 0:ze.docs)==null?void 0:Me.source}}};var Ee,Re,qe;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <div className="select-story-comprehensive">\r
      <div className="select-story-grid">\r
        <div className="select-story-grid-section">\r
          <h4>Basic Selects</h4>\r
          <div className="select-story-field">\r
            <Label>Simple Select</Label>\r
            <Select options={basicOptions} placeholder="Choose..." />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>With Value</Label>\r
            <Select options={basicOptions} value="banana" />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>Required</Label>\r
            <Select options={basicOptions} placeholder="Required..." required />\r
          </div>\r
        </div>\r
        \r
        <div className="select-story-grid-section">\r
          <h4>Advanced Features</h4>\r
          <div className="select-story-field">\r
            <Label>Searchable</Label>\r
            <Select options={countryOptions} placeholder="Search..." searchable />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>Multiple</Label>\r
            <Select options={basicOptions} placeholder="Multiple..." multiple />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>Search + Multiple</Label>\r
            <Select options={countryOptions} placeholder="Both..." searchable multiple />\r
          </div>\r
        </div>\r
        \r
        <div className="select-story-grid-section">\r
          <h4>States</h4>\r
          <div className="select-story-field">\r
            <Label>Disabled</Label>\r
            <Select options={basicOptions} placeholder="Disabled..." disabled />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>With Disabled Options</Label>\r
            <Select options={statusOptions} placeholder="Some disabled..." />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>Max Selections</Label>\r
            <Select options={basicOptions} placeholder="Max 2..." multiple maxSelections={2} />\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of all select features and variations.'
      }
    }
  }
}`,...(qe=(Re=q.parameters)==null?void 0:Re.docs)==null?void 0:qe.source}}};var Ie,ke,Be;I.parameters={...I.parameters,docs:{...(Ie=I.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <ControlledSelectDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Controlled select component with external state management.'
      }
    }
  }
}`,...(Be=(ke=I.parameters)==null?void 0:ke.docs)==null?void 0:Be.source}}};var Ve,$e,Ue;k.parameters={...k.parameters,docs:{...(Ve=k.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    size: 'base',
    options: basicOptions,
    placeholder: 'Interactive select...',
    disabled: false,
    required: false,
    searchable: false,
    multiple: false
  },
  render: args => <div className="select-story-field">\r
      <Label htmlFor="interactive-select">Interactive Select</Label>\r
      <Select {...args} id="interactive-select" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive story where you can modify all select properties using the controls panel. Note: This is uncontrolled, so selections will work properly.'
      }
    }
  }
}`,...(Ue=($e=k.parameters)==null?void 0:$e.docs)==null?void 0:Ue.source}}};const ps=["Default","SizeVariants","WithLabels","SearchableSelect","MultipleSelection","SearchableMultiple","DisabledStates","FormIntegration","AccessibilityDemo","ThemeShowcase","AllFeatures","Controlled","Interactive"];export{E as AccessibilityDemo,q as AllFeatures,I as Controlled,T as Default,z as DisabledStates,M as FormIntegration,k as Interactive,O as MultipleSelection,F as SearchableMultiple,D as SearchableSelect,A as SizeVariants,R as ThemeShowcase,C as WithLabels,ps as __namedExportsOrder,us as default};
