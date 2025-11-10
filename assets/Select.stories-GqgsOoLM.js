import{r as u,R as A,j as e}from"./iframe-CY-Mz7KS.js";import{L as t}from"./Label-6SlLcU2t.js";import"./preload-helper-PPVm8Dsz.js";const l=u.forwardRef(({size:o="md",disabled:p=!1,readOnly:h=!1,required:v=!1,error:i=!1,errorMessage:O,helperText:T,label:se,placeholder:D="Select an option...",loading:g=!1,name:pe,id:me,className:he="","aria-label":le,"aria-describedby":te,"aria-labelledby":ve,options:F=[],value:n,defaultValue:re,onChange:N,onFocus:be,onBlur:fe,searchable:W=!1,searchPlaceholder:ae="Search options...",multiple:b=!1,maxSelections:ce,...ye},L)=>{const[d,x]=u.useState(!1),[oe,M]=u.useState(""),[G,S]=u.useState(-1),xe=A.useId(),j=me||`select-${xe}`,J=`${j}-error`,Y=`${j}-helper`,[ie,Se]=u.useState(n||re||""),[m,ne]=u.useState(b?n?Array.isArray(n)?n:n.split(",").filter(Boolean):[]:[]),Q=n!==void 0,de=Q?n:ie,w=u.useRef(null);u.useEffect(()=>{if(b&&n!==void 0){const s=Array.isArray(n)?n:n.split(",").filter(Boolean);ne(s)}},[n,b]);const X=u.useRef(null),Z=u.useRef(null),je=A.useCallback(s=>{w.current=s,typeof L=="function"?L(s):L&&(L.current=s)},[L]),C=F.filter(s=>s.label.toLowerCase().includes(oe.toLowerCase())),a="select",ge=`${a}--${o}`,Ne=p?`${a}--disabled`:"",Le=d?`${a}--open`:"",we=i?`${a}--error`:"",Ce=g?`${a}--loading`:"",Ae=h?`${a}--readonly`:"",Oe=[a,ge,Ne,Le,we,Ce,Ae,he].filter(Boolean).join(" "),Te=s=>{if(!p)switch(s.key){case"ArrowDown":s.preventDefault(),d?S(r=>r<C.length-1?r+1:0):x(!0);break;case"ArrowUp":s.preventDefault(),d&&S(r=>r>0?r-1:C.length-1);break;case"Enter":if(s.preventDefault(),!d)x(!0);else if(G>=0){const r=C[G];r&&!r.disabled&&ue(r.value)}break;case"Escape":s.preventDefault(),x(!1),M(""),S(-1);break;case"Tab":x(!1);break}},ue=s=>{if(b){const r=m.includes(s)?m.filter(f=>f!==s):ce&&m.length>=ce?m:[...m,s];if(ne(r),N&&w.current){const f={target:{...w.current,value:r.join(",")}};N(f)}}else if(Q||Se(s),x(!1),M(""),S(-1),N&&w.current){const r={target:{...w.current,value:s}};N(r)}};u.useEffect(()=>{const s=r=>{X.current&&!X.current.contains(r.target)&&(x(!1),M(""),S(-1))};if(d)return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[d]),u.useEffect(()=>{d&&W&&Z.current&&Z.current.focus()},[d,W]);const De=()=>{if(b){if(m.length===0)return D;if(m.length===1){const r=F.find(f=>f.value===m[0]);return r?r.label:m[0]}return`${m.length} selected`}const s=F.find(r=>r.value===de);return s?s.label:D};return e.jsxs("div",{className:"select-form-control",children:[se&&e.jsxs("label",{htmlFor:j,className:"select-label",children:[se,v&&e.jsx("span",{className:"select-required",children:"*"})]}),e.jsxs("div",{className:"select-wrapper",children:[e.jsxs("div",{className:`${a}-container`,ref:X,children:[e.jsxs("select",{ref:je,className:`${a}-hidden`,id:j,name:pe,value:b?void 0:Q?n:ie,defaultValue:re,disabled:p||g||h,required:v,multiple:b,"aria-label":le,"aria-describedby":[i&&O?J:"",T&&!i?Y:"",te].filter(Boolean).join(" ")||void 0,"aria-labelledby":ve,"aria-invalid":i?"true":void 0,onChange:N,onFocus:be,onBlur:fe,...ye,children:[D&&e.jsx("option",{value:"",children:D}),F.map(s=>e.jsx("option",{value:s.value,disabled:s.disabled,children:s.label},s.value))]}),e.jsxs("div",{className:Oe,onClick:()=>!p&&!g&&!h&&x(!d),onKeyDown:Te,tabIndex:p||g||h?-1:0,role:"combobox","aria-expanded":d?"true":"false","aria-haspopup":"listbox","aria-controls":`${j}-listbox`,"aria-describedby":[i&&O?J:"",T&&!i?Y:"",te].filter(Boolean).join(" ")||void 0,"aria-label":le||"Select option",children:[e.jsx("span",{className:`${a}-value`,children:De()}),e.jsx("span",{className:`${a}-arrow`,"aria-hidden":"true",children:d?"▲":"▼"})]}),d&&e.jsxs("div",{className:`${a}-dropdown`,children:[W&&e.jsx("div",{className:`${a}-search`,children:e.jsx("input",{ref:Z,type:"text",className:`${a}-search-input`,placeholder:ae,value:oe,onChange:s=>M(s.target.value),onClick:s=>s.stopPropagation(),"aria-label":ae||"Search options"})}),e.jsx("div",{className:`${a}-options`,role:"listbox",id:`${j}-listbox`,"aria-multiselectable":b?"true":void 0,children:C.length===0?e.jsx("div",{className:`${a}-no-options`,children:"No options found"}):C.map((s,r)=>{const f=b?m.includes(s.value):de===s.value,Fe=r===G;return e.jsxs("div",{className:`${a}-option ${f?`${a}-option--selected`:""} ${Fe?`${a}-option--focused`:""} ${s.disabled?`${a}-option--disabled`:""}`,role:"option","aria-selected":f?"true":"false",onClick:()=>!s.disabled&&ue(s.value),onMouseEnter:()=>S(r),children:[b&&e.jsx("span",{className:`${a}-option-checkbox`,children:f?"☑":"☐"}),e.jsx("span",{className:`${a}-option-label`,children:s.label})]},s.value)})})]})]}),g&&e.jsx("span",{className:"select-loader",children:e.jsx("span",{className:"select-spinner"})})]}),i&&O&&e.jsx("div",{id:J,className:"select-error-message",role:"alert",children:O}),!i&&T&&e.jsx("div",{id:Y,className:"select-helper-text",children:T})]})});l.displayName="Select";l.__docgenInfo={description:`Select component for choosing from a list of options.\r
\r
Features:\r
- Three size variants (sm, md, lg)\r
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
\`\`\``,methods:[],displayName:"Select",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"Options for the select",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Selected value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default selected value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:"Blur handler"},searchable:{required:!1,tsType:{name:"boolean"},description:"Whether to show search functionality",defaultValue:{value:"false",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"Search placeholder text",defaultValue:{value:"'Search options...'",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether to allow multiple selections",defaultValue:{value:"false",computed:!1}},maxSelections:{required:!1,tsType:{name:"number"},description:"Maximum number of selections (for multiple)"},size:{defaultValue:{value:"'md'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},placeholder:{defaultValue:{value:"'Select an option...'",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const{fn:ee}=__STORYBOOK_MODULE_TEST__,c=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],y=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"uk",label:"United Kingdom"},{value:"fr",label:"France"},{value:"de",label:"Germany"},{value:"jp",label:"Japan"},{value:"au",label:"Australia"},{value:"br",label:"Brazil"},{value:"in",label:"India"},{value:"cn",label:"China"}],_=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"},{value:"pending",label:"Pending"},{value:"suspended",label:"Suspended",disabled:!0},{value:"archived",label:"Archived"}],ke={title:"Atoms/Select",component:l,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size variant"},options:{control:"object",description:"Array of options"},value:{control:"text",description:"Selected value"},disabled:{control:"boolean",description:"Disabled state"},required:{control:"boolean",description:"Required field validation"},placeholder:{control:"text",description:"Placeholder text"},searchable:{control:"boolean",description:"Enable search functionality"},multiple:{control:"boolean",description:"Allow multiple selections"},maxSelections:{control:"number",description:"Maximum selections (for multiple)"},onChange:{action:"changed"},onFocus:{action:"focused"},onBlur:{action:"blurred"}},args:{onChange:ee(),onFocus:ee(),onBlur:ee(),options:c}},E={args:{placeholder:"Select a fruit..."},parameters:{docs:{description:{story:"Default select dropdown with basic options."}}}},z={render:()=>e.jsxs("div",{className:"select-story-section",children:[e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Small Select"}),e.jsx(l,{size:"sm",options:c,placeholder:"Small select..."})]})}),e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Medium Select (Default)"}),e.jsx(l,{size:"md",options:c,placeholder:"Medium select..."})]})}),e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Large Select"}),e.jsx(l,{size:"lg",options:c,placeholder:"Large select..."})]})})]}),parameters:{docs:{description:{story:"Different size variants for various UI contexts."}}}},R={render:()=>e.jsxs("div",{className:"select-story-form",children:[e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"fruit-select",children:"Choose your favorite fruit"}),e.jsx(l,{id:"fruit-select",options:c,placeholder:"Select a fruit..."})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"country-select",children:"Select your country"}),e.jsx(l,{id:"country-select",options:y,placeholder:"Choose country...",value:"us"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"status-select",required:!0,children:"Account Status"}),e.jsx(l,{id:"status-select",options:_,placeholder:"Select status...",required:!0})]})]}),parameters:{docs:{description:{story:"Select components properly associated with labels using htmlFor."}}}},I={render:()=>e.jsx("div",{className:"select-story-section",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"searchable-select",children:"Searchable Country Select"}),e.jsx(l,{id:"searchable-select",options:y,placeholder:"Search and select country...",searchable:!0,searchPlaceholder:"Type to search countries..."})]})}),parameters:{docs:{description:{story:"Select with search functionality to filter through options."}}}},Me=()=>{const[o,p]=A.useState(["apple","cherry"]),h=v=>{const i=v.target.value.split(",").filter(Boolean);p(i)};return e.jsx("div",{className:"select-story-section",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"multiple-select",children:"Select Multiple Fruits"}),e.jsx(l,{id:"multiple-select",options:c,placeholder:"Select fruits...",multiple:!0,value:o.join(","),onChange:h}),e.jsxs("div",{className:"select-story-selected-values",children:[e.jsx("strong",{children:"Selected:"})," ",o.length>0?o.join(", "):"None"]})]})})},q={render:()=>e.jsx(Me,{}),parameters:{docs:{description:{story:"Select component with multiple selection support. Shows checkboxes and selected count."}}}},Ee=()=>{const[o,p]=A.useState(["us","ca","uk"]),h=v=>{const i=v.target.value.split(",").filter(Boolean);p(i)};return e.jsx("div",{className:"select-story-section",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"searchable-multiple",children:"Select Countries (Max 5)"}),e.jsx(l,{id:"searchable-multiple",options:y,placeholder:"Search and select countries...",multiple:!0,searchable:!0,maxSelections:5,value:o.join(","),onChange:h,searchPlaceholder:"Type to search countries..."}),e.jsxs("div",{className:"select-story-selected-values",children:[e.jsxs("strong",{children:["Selected (",o.length,"/5):"]})," ",o.length>0?o.map(v=>y.find(i=>i.value===v)?.label).join(", "):"None"]})]})})},k={render:()=>e.jsx(Ee,{}),parameters:{docs:{description:{story:"Advanced select with both search and multiple selection features, including selection limit."}}}},$={render:()=>e.jsxs("div",{className:"select-story-section",children:[e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Disabled Select"}),e.jsx(l,{options:c,placeholder:"Disabled select...",disabled:!0})]})}),e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Select with Disabled Options"}),e.jsx(l,{options:_,placeholder:"Some options disabled..."})]})}),e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Disabled with Value"}),e.jsx(l,{options:c,value:"banana",disabled:!0})]})})]}),parameters:{docs:{description:{story:"Select components in disabled states, both component-level and option-level."}}}},V={render:()=>e.jsx("form",{className:"select-story-form-demo",children:e.jsxs("fieldset",{className:"select-story-fieldset",children:[e.jsx("legend",{children:"User Preferences"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"language-select",required:!0,children:"Preferred Language"}),e.jsx(l,{id:"language-select",name:"language",options:[{value:"en",label:"English"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"de",label:"German"},{value:"zh",label:"Chinese"}],placeholder:"Select language...",required:!0,value:"en"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"timezone-select",children:"Timezone"}),e.jsx(l,{id:"timezone-select",name:"timezone",options:[{value:"utc",label:"UTC"},{value:"est",label:"Eastern Time"},{value:"cst",label:"Central Time"},{value:"mst",label:"Mountain Time"},{value:"pst",label:"Pacific Time"}],placeholder:"Select timezone...",searchable:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"interests-select",children:"Interests (Multiple)"}),e.jsx(l,{id:"interests-select",name:"interests",options:[{value:"tech",label:"Technology"},{value:"design",label:"Design"},{value:"business",label:"Business"},{value:"science",label:"Science"},{value:"sports",label:"Sports"},{value:"music",label:"Music"},{value:"art",label:"Art"}],placeholder:"Select interests...",multiple:!0,searchable:!0,maxSelections:3})]})]})}),parameters:{docs:{description:{story:"Select components in a complete form context with fieldsets, legends, and proper form submission attributes."}}}},B={render:()=>e.jsxs("div",{className:"select-story-accessibility",children:[e.jsxs("div",{className:"select-story-section",children:[e.jsx("h4",{children:"ARIA Labels and Descriptions"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{id:"aria-select",options:c,placeholder:"Select with ARIA support...","aria-label":"Fruit selection with ARIA support","aria-describedby":"fruit-help"}),e.jsx("div",{id:"fruit-help",className:"select-story-help-text",children:"This select includes comprehensive ARIA labeling for screen readers."})]})]}),e.jsxs("div",{className:"select-story-section",children:[e.jsx("h4",{children:"Keyboard Navigation"}),e.jsx("p",{className:"select-story-instructions",children:"Use Tab to focus, Arrow Keys to navigate, Enter to select, Escape to close."}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"keyboard-demo",children:"Keyboard Navigation Demo"}),e.jsx(l,{id:"keyboard-demo",options:y,placeholder:"Use keyboard to navigate...",searchable:!0})]})]}),e.jsxs("div",{className:"select-story-section",children:[e.jsx("h4",{children:"Screen Reader Announcements"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"screen-reader-demo",children:"Screen Reader Optimized"}),e.jsx(l,{id:"screen-reader-demo",options:_,placeholder:"Optimized for screen readers...","aria-describedby":"screen-reader-help"}),e.jsx("div",{id:"screen-reader-help",className:"select-story-help-text",children:"This select announces selection changes and state updates to screen readers."})]})]})]}),parameters:{docs:{description:{story:"Accessibility features including ARIA labels, descriptions, and keyboard navigation."}}}},U={render:()=>e.jsxs("div",{className:"select-story-theme-demo",children:[e.jsxs("div",{className:"select-story-theme-section",children:[e.jsx("h3",{children:"Theme Adaptive Select Components"}),e.jsxs("div",{className:"select-story-theme-row",children:[e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Small Size"}),e.jsx(l,{size:"sm",options:c,placeholder:"Small select...",value:"apple"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Medium Size"}),e.jsx(l,{options:c,placeholder:"Medium select...",value:"banana"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Large Size"}),e.jsx(l,{size:"lg",options:c,placeholder:"Large select...",value:"cherry"})]})]}),e.jsxs("div",{className:"select-story-theme-row",children:[e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Searchable"}),e.jsx(l,{options:y,placeholder:"Search countries...",searchable:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Multiple Selection"}),e.jsx(l,{options:c,placeholder:"Multiple fruits...",multiple:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Disabled State"}),e.jsx(l,{options:c,value:"date",disabled:!0})]})]})]}),e.jsxs("div",{className:"select-story-theme-info",children:[e.jsx("h4",{children:"Theme Variables Used:"}),e.jsxs("div",{className:"select-story-theme-vars",children:[e.jsx("code",{children:"--color-accent"}),": Border focus and selection background",e.jsx("br",{}),e.jsx("code",{children:"--color-accent-hover"}),": Hover state colors",e.jsx("br",{}),e.jsx("code",{children:"--color-border"}),": Default border color",e.jsx("br",{}),e.jsx("code",{children:"--color-bg"}),": Background color",e.jsx("br",{}),e.jsx("code",{children:"--color-panel"}),": Hover background",e.jsx("br",{}),e.jsx("code",{children:"--color-text"}),": Main text color",e.jsx("br",{}),e.jsx("code",{children:"--color-text-secondary"}),": Arrow and secondary text",e.jsx("br",{}),e.jsx("code",{children:"--color-text-muted"}),": Placeholder and disabled text"]})]})]}),parameters:{docs:{description:{story:"Select components that adapt to different themes. Use the theme switcher in the toolbar to see color changes."}}}},P={render:()=>e.jsx("div",{className:"select-story-comprehensive",children:e.jsxs("div",{className:"select-story-grid",children:[e.jsxs("div",{className:"select-story-grid-section",children:[e.jsx("h4",{children:"Basic Selects"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Simple Select"}),e.jsx(l,{options:c,placeholder:"Choose..."})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"With Value"}),e.jsx(l,{options:c,value:"banana"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Required"}),e.jsx(l,{options:c,placeholder:"Required...",required:!0})]})]}),e.jsxs("div",{className:"select-story-grid-section",children:[e.jsx("h4",{children:"Advanced Features"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Searchable"}),e.jsx(l,{options:y,placeholder:"Search...",searchable:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Multiple"}),e.jsx(l,{options:c,placeholder:"Multiple...",multiple:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Search + Multiple"}),e.jsx(l,{options:y,placeholder:"Both...",searchable:!0,multiple:!0})]})]}),e.jsxs("div",{className:"select-story-grid-section",children:[e.jsx("h4",{children:"States"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Disabled"}),e.jsx(l,{options:c,placeholder:"Disabled...",disabled:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"With Disabled Options"}),e.jsx(l,{options:_,placeholder:"Some disabled..."})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{children:"Max Selections"}),e.jsx(l,{options:c,placeholder:"Max 2...",multiple:!0,maxSelections:2})]})]})]})}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of all select features and variations."}}}},ze=()=>{const[o,p]=A.useState(""),h=v=>{p(v.target.value)};return e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"controlled-select",children:"Controlled Select"}),e.jsx(l,{id:"controlled-select",options:c,value:o,onChange:h,placeholder:"Select a fruit..."}),e.jsxs("div",{className:"select-story-selected-values",children:[e.jsx("strong",{children:"Current Value:"})," ",o||"None"]})]})},H={render:()=>e.jsx(ze,{}),parameters:{docs:{description:{story:"Controlled select component with external state management."}}}},K={args:{size:"md",options:c,placeholder:"Interactive select...",disabled:!1,required:!1,searchable:!1,multiple:!1},render:o=>e.jsxs("div",{className:"select-story-field",children:[e.jsx(t,{htmlFor:"interactive-select",children:"Interactive Select"}),e.jsx(l,{...o,id:"interactive-select"})]}),parameters:{docs:{description:{story:"Interactive story where you can modify all select properties using the controls panel. Note: This is uncontrolled, so selections will work properly."}}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="select-story-section">\r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Small Select</Label>\r
          <Select size="sm" options={basicOptions} placeholder="Small select..." />\r
        </div>\r
      </div>\r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Medium Select (Default)</Label>\r
          <Select size="md" options={basicOptions} placeholder="Medium select..." />\r
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
}`,...z.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <MultipleSelectDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Select component with multiple selection support. Shows checkboxes and selected count.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <SearchableMultipleDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Advanced select with both search and multiple selection features, including selection limit.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
            <Label>Medium Size</Label>\r
            <Select options={basicOptions} placeholder="Medium select..." value="banana" />\r
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
          <code>--color-text</code>: Main text color<br />\r
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
}`,...U.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledSelectDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Controlled select component with external state management.'
      }
    }
  }
}`,...H.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
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
}`,...K.parameters?.docs?.source}}};const $e=["Default","SizeVariants","WithLabels","SearchableSelect","MultipleSelection","SearchableMultiple","DisabledStates","FormIntegration","AccessibilityDemo","ThemeShowcase","AllFeatures","Controlled","Interactive"];export{B as AccessibilityDemo,P as AllFeatures,H as Controlled,E as Default,$ as DisabledStates,V as FormIntegration,K as Interactive,q as MultipleSelection,k as SearchableMultiple,I as SearchableSelect,z as SizeVariants,U as ThemeShowcase,R as WithLabels,$e as __namedExportsOrder,ke as default};
