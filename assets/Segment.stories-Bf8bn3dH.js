import{r as d,j as a}from"./iframe-CdBaqdCg.js";import"./preload-helper-PPVm8Dsz.js";const M=({options:u,value:l,defaultValue:n,multiple:o=!1,onChange:j,className:L="",size:$="medium",variant:B="default",disabled:m=!1,block:E=!1,equalWidth:F=!1,direction:P="horizontal",renderOption:H,"aria-label":_,"aria-labelledby":K})=>{const U=d.useCallback(()=>l!==void 0?Array.isArray(l)?l:[l]:n!==void 0?Array.isArray(n)?n:[n]:[],[l,n]),[I,G]=d.useState(U),i=d.useMemo(()=>l!==void 0?Array.isArray(l)?l:[l]:I,[l,I]),N=d.useCallback((e,s)=>{if(m||s)return;let t;if(o?i.includes(e)?t=i.filter(r=>r!==e):t=[...i,e]:t=i.includes(e)?[]:[e],l===void 0&&G(t),j){const r=o?t:t.length>0?t[0]:void 0;j(r)}},[m,o,i,l,j]),J=d.useCallback((e,s,t)=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),N(s,t))},[N]);return a.jsx("div",{className:`
        segment
        segment--${$}
        segment--${B}
        segment--${P}
        ${E?"segment--block":""}
        ${F?"segment--equal-width":""}
        ${m?"segment--disabled":""}
        ${L}
      `,role:o?"group":"radiogroup","aria-label":_,"aria-labelledby":K,children:u.map(e=>{const s=i.includes(e.value),t=m||e.disabled,r=s&&i.indexOf(e.value)===0;return a.jsx("div",{className:`
              segment-option
              ${s?"segment-option--selected":""}
              ${t?"segment-option--disabled":""}
              ${r&&o?"segment-option--primary":""}
              ${e.className||""}
            `,role:o?"checkbox":"radio",tabIndex:t?-1:0,"aria-checked":s,"aria-disabled":t?!0:void 0,onClick:()=>N(e.value,e.disabled),onKeyDown:Q=>J(Q,e.value,e.disabled),children:H?H(e,s,!!t):a.jsxs("div",{className:"segment-option-content",children:[e.icon&&a.jsx("span",{className:"segment-option-icon",children:e.icon}),a.jsx("span",{className:"segment-option-label",children:e.label})]})},String(e.value))})})};M.displayName="Segment";M.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SegmentOption",elements:[{name:"T"}],raw:"SegmentOption<T>"}],raw:"SegmentOption<T>[]"},description:"Array of segment options"},value:{required:!1,tsType:{name:"union",raw:"T | T[]",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"}]},description:"Currently selected value(s)"},defaultValue:{required:!1,tsType:{name:"union",raw:"T | T[]",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"}]},description:"Default selected value(s) (uncontrolled)"},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether to allow multiple selections",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T | T[]) => void",signature:{arguments:[{type:{name:"union",raw:"T | T[]",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"}]},name:"value"}],return:{name:"void"}}},description:"Callback when selection changes"},className:{required:!1,tsType:{name:"string"},description:"Custom className for the segment container",defaultValue:{value:"''",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'filled' | 'outlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"Visual variant",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the entire segment is disabled",defaultValue:{value:"false",computed:!1}},block:{required:!1,tsType:{name:"boolean"},description:"Whether to use block display (full width)",defaultValue:{value:"false",computed:!1}},equalWidth:{required:!1,tsType:{name:"boolean"},description:"Whether to show equal width segments",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Direction of the segment",defaultValue:{value:"'horizontal'",computed:!1}},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: SegmentOption<T>, isSelected: boolean, isDisabled: boolean) => ReactNode",signature:{arguments:[{type:{name:"SegmentOption",elements:[{name:"T"}],raw:"SegmentOption<T>"},name:"option"},{type:{name:"boolean"},name:"isSelected"},{type:{name:"boolean"},name:"isDisabled"}],return:{name:"ReactNode"}}},description:"Custom render function for segment options"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelledby for accessibility"}}};const le={title:"Atoms/Segment",component:M,parameters:{layout:"padded",docs:{description:{component:"A segmented control component that allows users to select from multiple options with customizable appearance, support for icons, and both single and multiple selection modes."}}},argTypes:{options:{description:"Array of segment options to display",control:!1},value:{description:"Currently selected value(s) (controlled)",control:!1},defaultValue:{description:"Default selected value(s) (uncontrolled)",control:!1},multiple:{description:"Whether to allow multiple selections",control:"boolean"},onChange:{description:"Callback when selection changes",action:"changed"},className:{description:"Custom CSS class",control:"text"},size:{description:"Size variant",control:"select",options:["small","medium","large"]},variant:{description:"Visual variant",control:"select",options:["default","filled","outlined"]},disabled:{description:"Whether the entire segment is disabled",control:"boolean"},block:{description:"Whether to use block display (full width)",control:"boolean"},equalWidth:{description:"Whether to show equal width segments",control:"boolean"},direction:{description:"Direction of the segment",control:"select",options:["horizontal","vertical"]},renderOption:{description:"Custom render function for segment options",control:!1}}},D=[{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"}],c=[{value:"overview",label:"Overview"},{value:"analytics",label:"Analytics"},{value:"reports",label:"Reports"},{value:"settings",label:"Settings"}],R=[{value:"list",label:"List",icon:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:a.jsx("path",{d:"M2 3h12v2H2V3zm0 4h12v2H2V7zm0 4h12v2H2v-2z"})})},{value:"grid",label:"Grid",icon:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:a.jsx("path",{d:"M1 1h6v6H1V1zm8 0h6v6H9V1zM1 9h6v6H1V9zm8 0h6v6H9V9z"})})},{value:"card",label:"Card",icon:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:a.jsx("path",{d:"M2 2h12a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1zm1 2v8h10V4H3z"})})}],X=[{value:"active",label:"Active",className:"status-active"},{value:"pending",label:"Pending",className:"status-pending"},{value:"inactive",label:"Inactive",className:"status-inactive"}],Y=[{value:"all-customers",label:"All Customers"},{value:"premium-customers",label:"Premium Customers"},{value:"trial-customers",label:"Trial Customers"},{value:"inactive-customers",label:"Inactive Customers"}],Z=[{value:"enabled",label:"Enabled"},{value:"disabled",label:"Disabled",disabled:!0},{value:"pending",label:"Pending"}],p={args:{options:D,defaultValue:"daily",size:"medium",variant:"default",multiple:!1,disabled:!1,block:!1,equalWidth:!1,direction:"horizontal"}},f={args:{options:c,multiple:!0,defaultValue:["overview","analytics"],size:"medium",variant:"default",disabled:!1,block:!1,equalWidth:!1,direction:"horizontal"},parameters:{docs:{description:{story:"Segment with multiple selection enabled. Multiple options can be selected simultaneously."}}}},h={args:{options:D,defaultValue:"weekly",size:"small",variant:"default",multiple:!1,disabled:!1,block:!1,equalWidth:!1,direction:"horizontal"}},b={args:{options:D,defaultValue:"monthly",size:"large",variant:"default",multiple:!1,disabled:!1,block:!1,equalWidth:!1,direction:"horizontal"}},v={args:{options:c,defaultValue:"analytics",size:"medium",variant:"filled",multiple:!1,disabled:!1,block:!1,equalWidth:!1,direction:"horizontal"}},g={args:{options:c,defaultValue:"reports",size:"medium",variant:"outlined",multiple:!1,disabled:!1,block:!1,equalWidth:!1,direction:"horizontal"}},y={args:{options:R,defaultValue:"grid",size:"medium",variant:"default",multiple:!1,disabled:!1,block:!1,equalWidth:!1,direction:"horizontal"},parameters:{docs:{description:{story:"Segment options with icons for better visual identification."}}}},z={args:{options:[{value:"bold",label:"",icon:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:a.jsx("path",{d:"M4 2h4.5A2.5 2.5 0 019 7a2.5 2.5 0 01.5 5H4V2zm2 2v2h2.5a.5.5 0 100-1H8V4h.5zm0 4v2h2.5a.5.5 0 100-1H8V8h.5z"})})},{value:"italic",label:"",icon:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:a.jsx("path",{d:"M7.991 11.674L9.53 4.455c0.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.807l-.11.52h3.774l.11-.52c-1.06-.096-1.127-.212-1.005-.807z"})})},{value:"underline",label:"",icon:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:a.jsx("path",{d:"M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM2.5 15h11v-1h-11v1z"})})}],defaultValue:"bold",size:"medium",variant:"default",multiple:!0,disabled:!1,block:!1,equalWidth:!0,direction:"horizontal"},parameters:{docs:{description:{story:"Segment with only icons, no text labels. Useful for toolbar-style controls."}}}},w={args:{options:Y,defaultValue:"premium-customers",size:"medium",variant:"default",multiple:!1,disabled:!1,block:!0,equalWidth:!1,direction:"horizontal"},parameters:{docs:{description:{story:"Full-width segment that takes up the entire container width."}}}},V={args:{options:c,defaultValue:"settings",size:"medium",variant:"default",multiple:!1,disabled:!1,block:!1,equalWidth:!0,direction:"horizontal"},parameters:{docs:{description:{story:"All segment options have equal width regardless of content length."}}}},S={args:{options:c,defaultValue:"analytics",size:"medium",variant:"default",multiple:!1,disabled:!1,block:!1,equalWidth:!1,direction:"vertical"},parameters:{docs:{description:{story:"Vertical layout for when horizontal space is limited."}}}},k={args:{options:D,defaultValue:"weekly",size:"medium",variant:"default",multiple:!1,disabled:!0,block:!1,equalWidth:!1,direction:"horizontal"},parameters:{docs:{description:{story:"Entire segment disabled - no interactions allowed."}}}},q={args:{options:Z,defaultValue:"enabled",size:"medium",variant:"default",multiple:!1,disabled:!1,block:!1,equalWidth:!1,direction:"horizontal"},parameters:{docs:{description:{story:"Some individual options are disabled while others remain interactive."}}}},W={args:{options:X,defaultValue:"active",size:"medium",variant:"outlined",multiple:!1,disabled:!1,block:!1,equalWidth:!0,direction:"horizontal"},parameters:{docs:{description:{story:"Options with custom CSS classes for status-specific styling."}}}},x={args:{options:[{value:"beginner",label:"Beginner",icon:"🌱"},{value:"intermediate",label:"Intermediate",icon:"🌿"},{value:"advanced",label:"Advanced",icon:"🌳"},{value:"expert",label:"Expert",icon:"🦋"}],defaultValue:"intermediate",size:"medium",variant:"default",multiple:!1,disabled:!1,block:!1,equalWidth:!0,direction:"horizontal",renderOption:(u,l,n)=>a.jsxs("div",{className:`custom-option ${l?"selected":""} ${n?"disabled":""}`,children:[a.jsx("span",{className:"custom-icon",children:u.icon}),a.jsx("span",{className:"custom-label",children:u.label}),l&&a.jsx("span",{className:"custom-check",children:"✓"})]})},parameters:{docs:{description:{story:"Custom render function for complete control over option appearance."}}}},T={args:{options:[{value:"7d",label:"Last 7 days"},{value:"30d",label:"Last 30 days"},{value:"90d",label:"Last 90 days"},{value:"custom",label:"Custom Range"}],defaultValue:"30d",size:"medium",variant:"default",multiple:!1,disabled:!1,block:!1,equalWidth:!1,direction:"horizontal"},parameters:{docs:{description:{story:"Date range selector commonly used in analytics dashboards."}}}},O={args:{options:R,defaultValue:"list",size:"medium",variant:"outlined",multiple:!1,disabled:!1,block:!1,equalWidth:!0,direction:"horizontal"},parameters:{docs:{description:{story:"View mode selector for switching between different display modes."}}}},C={args:{options:[{value:"all",label:"All Items"},{value:"active",label:"Active"},{value:"completed",label:"Completed"},{value:"archived",label:"Archived"}],defaultValue:"all",size:"small",variant:"filled",multiple:!1,disabled:!1,block:!0,equalWidth:!0,direction:"horizontal"},parameters:{docs:{description:{story:"Filter segment for content filtering, commonly used in lists and tables."}}}},A={args:{options:[{value:"dashboard",label:"Dashboard",icon:"📊"},{value:"projects",label:"Projects",icon:"📁"},{value:"team",label:"Team",icon:"👥"},{value:"settings",label:"Settings",icon:"⚙️"},{value:"help",label:"Help",icon:"❓"}],defaultValue:"dashboard",size:"medium",variant:"default",multiple:!1,disabled:!1,block:!0,equalWidth:!0,direction:"horizontal"},parameters:{docs:{description:{story:"Responsive segment that adapts to smaller screens. Try resizing the viewport."}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: 'daily',
    size: 'medium',
    variant: 'default',
    multiple: false,
    disabled: false,
    block: false,
    equalWidth: false,
    direction: 'horizontal'
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    options: detailedOptions,
    multiple: true,
    defaultValue: ['overview', 'analytics'],
    size: 'medium',
    variant: 'default',
    disabled: false,
    block: false,
    equalWidth: false,
    direction: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Segment with multiple selection enabled. Multiple options can be selected simultaneously.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: 'weekly',
    size: 'small',
    variant: 'default',
    multiple: false,
    disabled: false,
    block: false,
    equalWidth: false,
    direction: 'horizontal'
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: 'monthly',
    size: 'large',
    variant: 'default',
    multiple: false,
    disabled: false,
    block: false,
    equalWidth: false,
    direction: 'horizontal'
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    options: detailedOptions,
    defaultValue: 'analytics',
    size: 'medium',
    variant: 'filled',
    multiple: false,
    disabled: false,
    block: false,
    equalWidth: false,
    direction: 'horizontal'
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    options: detailedOptions,
    defaultValue: 'reports',
    size: 'medium',
    variant: 'outlined',
    multiple: false,
    disabled: false,
    block: false,
    equalWidth: false,
    direction: 'horizontal'
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    options: iconOptions,
    defaultValue: 'grid',
    size: 'medium',
    variant: 'default',
    multiple: false,
    disabled: false,
    block: false,
    equalWidth: false,
    direction: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Segment options with icons for better visual identification.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'bold',
      label: '',
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M4 2h4.5A2.5 2.5 0 019 7a2.5 2.5 0 01.5 5H4V2zm2 2v2h2.5a.5.5 0 100-1H8V4h.5zm0 4v2h2.5a.5.5 0 100-1H8V8h.5z" /></svg>
    }, {
      value: 'italic',
      label: '',
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M7.991 11.674L9.53 4.455c0.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.807l-.11.52h3.774l.11-.52c-1.06-.096-1.127-.212-1.005-.807z" /></svg>
    }, {
      value: 'underline',
      label: '',
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM2.5 15h11v-1h-11v1z" /></svg>
    }],
    defaultValue: 'bold',
    size: 'medium',
    variant: 'default',
    multiple: true,
    disabled: false,
    block: false,
    equalWidth: true,
    direction: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Segment with only icons, no text labels. Useful for toolbar-style controls.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    options: longOptions,
    defaultValue: 'premium-customers',
    size: 'medium',
    variant: 'default',
    multiple: false,
    disabled: false,
    block: true,
    equalWidth: false,
    direction: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-width segment that takes up the entire container width.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    options: detailedOptions,
    defaultValue: 'settings',
    size: 'medium',
    variant: 'default',
    multiple: false,
    disabled: false,
    block: false,
    equalWidth: true,
    direction: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'All segment options have equal width regardless of content length.'
      }
    }
  }
}`,...V.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    options: detailedOptions,
    defaultValue: 'analytics',
    size: 'medium',
    variant: 'default',
    multiple: false,
    disabled: false,
    block: false,
    equalWidth: false,
    direction: 'vertical'
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical layout for when horizontal space is limited.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: 'weekly',
    size: 'medium',
    variant: 'default',
    multiple: false,
    disabled: true,
    block: false,
    equalWidth: false,
    direction: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Entire segment disabled - no interactions allowed.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    options: mixedOptions,
    defaultValue: 'enabled',
    size: 'medium',
    variant: 'default',
    multiple: false,
    disabled: false,
    block: false,
    equalWidth: false,
    direction: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Some individual options are disabled while others remain interactive.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    options: statusOptions,
    defaultValue: 'active',
    size: 'medium',
    variant: 'outlined',
    multiple: false,
    disabled: false,
    block: false,
    equalWidth: true,
    direction: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Options with custom CSS classes for status-specific styling.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'beginner',
      label: 'Beginner',
      icon: '🌱'
    }, {
      value: 'intermediate',
      label: 'Intermediate',
      icon: '🌿'
    }, {
      value: 'advanced',
      label: 'Advanced',
      icon: '🌳'
    }, {
      value: 'expert',
      label: 'Expert',
      icon: '🦋'
    }],
    defaultValue: 'intermediate',
    size: 'medium',
    variant: 'default',
    multiple: false,
    disabled: false,
    block: false,
    equalWidth: true,
    direction: 'horizontal',
    renderOption: (option, isSelected, isDisabled) => <div className={\`custom-option \${isSelected ? 'selected' : ''} \${isDisabled ? 'disabled' : ''}\`}>\r
        <span className="custom-icon">{option.icon}</span>\r
        <span className="custom-label">{option.label}</span>\r
        {isSelected && <span className="custom-check">✓</span>}\r
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom render function for complete control over option appearance.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: '7d',
      label: 'Last 7 days'
    }, {
      value: '30d',
      label: 'Last 30 days'
    }, {
      value: '90d',
      label: 'Last 90 days'
    }, {
      value: 'custom',
      label: 'Custom Range'
    }],
    defaultValue: '30d',
    size: 'medium',
    variant: 'default',
    multiple: false,
    disabled: false,
    block: false,
    equalWidth: false,
    direction: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Date range selector commonly used in analytics dashboards.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    options: iconOptions,
    defaultValue: 'list',
    size: 'medium',
    variant: 'outlined',
    multiple: false,
    disabled: false,
    block: false,
    equalWidth: true,
    direction: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'View mode selector for switching between different display modes.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'all',
      label: 'All Items'
    }, {
      value: 'active',
      label: 'Active'
    }, {
      value: 'completed',
      label: 'Completed'
    }, {
      value: 'archived',
      label: 'Archived'
    }],
    defaultValue: 'all',
    size: 'small',
    variant: 'filled',
    multiple: false,
    disabled: false,
    block: true,
    equalWidth: true,
    direction: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Filter segment for content filtering, commonly used in lists and tables.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'dashboard',
      label: 'Dashboard',
      icon: '📊'
    }, {
      value: 'projects',
      label: 'Projects',
      icon: '📁'
    }, {
      value: 'team',
      label: 'Team',
      icon: '👥'
    }, {
      value: 'settings',
      label: 'Settings',
      icon: '⚙️'
    }, {
      value: 'help',
      label: 'Help',
      icon: '❓'
    }],
    defaultValue: 'dashboard',
    size: 'medium',
    variant: 'default',
    multiple: false,
    disabled: false,
    block: true,
    equalWidth: true,
    direction: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive segment that adapts to smaller screens. Try resizing the viewport.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}};const te=["Default","MultipleSelection","SmallSize","LargeSize","FilledVariant","OutlinedVariant","WithIcons","IconsOnly","BlockLayout","EqualWidth","VerticalDirection","DisabledSegment","MixedDisabledOptions","CustomStyling","CustomRender","DateRangePicker","ViewModeSelector","FilterSegment","ResponsiveExample"];export{w as BlockLayout,x as CustomRender,W as CustomStyling,T as DateRangePicker,p as Default,k as DisabledSegment,V as EqualWidth,v as FilledVariant,C as FilterSegment,z as IconsOnly,b as LargeSize,q as MixedDisabledOptions,f as MultipleSelection,g as OutlinedVariant,A as ResponsiveExample,h as SmallSize,S as VerticalDirection,O as ViewModeSelector,y as WithIcons,te as __namedExportsOrder,le as default};
