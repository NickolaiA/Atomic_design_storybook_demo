import{r as d,j as e}from"./iframe-C-Dpaqp0.js";import"./preload-helper-PPVm8Dsz.js";const ye=(r,c,m="24h")=>{if(m==="12h"){const a=r>=12?"PM":"AM";return`${(r===0?12:r>12?r-12:r).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")} ${a}`}return`${r.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},I=r=>{if(!r)return null;const c=r.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);if(c){let a=parseInt(c[1],10);const p=parseInt(c[2],10),n=c[3].toUpperCase();return n==="PM"&&a!==12&&(a+=12),n==="AM"&&a===12&&(a=0),{hours:a,minutes:p}}const m=r.match(/^(\d{1,2}):(\d{2})$/);if(m){const a=parseInt(m[1],10),p=parseInt(m[2],10);if(a>=0&&a<=23&&p>=0&&p<=59)return{hours:a,minutes:p}}return null},re=(r,c,m,a)=>{const p=r*60+c;if(m){const n=I(m);if(n){const f=n.hours*60+n.minutes;if(p<f)return!1}}if(a){const n=I(a);if(n){const f=n.hours*60+n.minutes;if(p>f)return!1}}return!0},s=d.forwardRef(({value:r,defaultValue:c,onChange:m,onTimeChange:a,placeholder:p="Select time...",disabled:n=!1,required:f=!1,size:k="md",variant:g="default",format:u="24h",minTime:S,maxTime:T,minuteStep:U=1,showSeconds:y=!1,closeOnSelect:O=!0,className:ie="","aria-label":se,"aria-describedby":ae,id:B,name:oe,...ce},ne)=>{const[W]=d.useState(r!==void 0),[le,K]=d.useState(c||""),[h,_]=d.useState(!1),[o,E]=d.useState(0),[b,J]=d.useState(0),[x,Q]=d.useState(0),L=d.useRef(null),de=d.useRef(null),X=d.useRef(null),Y=d.useRef(null),Z=d.useRef(null),G=W?r||"":le;d.useEffect(()=>{const t=I(G);t&&(E(t.hours),J(t.minutes),Q(0))},[G]);const me=Array.from({length:u==="12h"?12:24},(t,i)=>u==="12h"&&i===0?12:i),pe=Array.from({length:Math.floor(60/U)},(t,i)=>i*U),ue=Array.from({length:60},(t,i)=>i),he=t=>{const i=t.target.value;W||K(i);const l=I(i);l&&(m?.(i),a?.(l.hours,l.minutes))},N=(t,i,l=0)=>{const v=y?`${t.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}`:ye(t,i,u);W||K(v),m?.(v),a?.(t,i)},fe=t=>{let i=t;if(u==="12h"){const l=o>=12;t===12?i=l?12:0:i=l?t+12:t}E(i),N(i,b,x),O&&!y&&setTimeout(()=>_(!1),100)},ke=t=>{J(t),N(o,t,x),O&&!y&&setTimeout(()=>_(!1),100)},_e=t=>{Q(t),N(o,b,t),O&&setTimeout(()=>_(!1),100)},ee=()=>{const t=o>=12?o-12:o+12;E(t),N(t,b,x)},ve=()=>{n||_(!h)};d.useEffect(()=>{const t=i=>{L.current&&!L.current.contains(i.target)&&_(!1)};if(h)return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[h]),d.useEffect(()=>{if(h){const t=i=>{const l=i.current;if(l){const v=l.querySelector(".timepicker-dropdown__item--selected");v&&v.scrollIntoView({block:"center",behavior:"smooth"})}};setTimeout(()=>{t(X),t(Y),y&&t(Z)},50)}},[h,o,b,x,y]);const ge=t=>{switch(t.key){case"Escape":_(!1);break;case"Enter":case"ArrowDown":h||(t.preventDefault(),_(!0));break;case"Tab":h&&_(!1);break}},te=`timepicker-dropdown-${B||"default"}`,Se=`
    timepicker
    timepicker--${k}
    timepicker--${g}
    ${n?"timepicker--disabled":""}
    ${h?"timepicker--open":""}
    ${ie}
  `.trim(),Te=G||"";return e.jsxs("div",{ref:L,className:Se,children:[e.jsxs("div",{className:"timepicker__input-wrapper",children:[e.jsx("input",{ref:ne||de,type:"text",value:Te,onChange:he,onKeyDown:ge,placeholder:p,disabled:n,required:f,className:"timepicker__input","aria-label":se||"Time picker","aria-describedby":ae,"aria-expanded":h?"true":"false","aria-haspopup":"listbox","aria-controls":h?te:void 0,role:"combobox",id:B,name:oe,...ce}),e.jsx("button",{type:"button",className:"timepicker__toggle",onClick:ve,disabled:n,"aria-label":h?"Close time picker":"Open time picker",tabIndex:-1,children:"🕐"})]}),h&&e.jsx("div",{className:"timepicker__dropdown",id:te,role:"listbox","aria-label":"Time options",children:e.jsxs("div",{className:"timepicker-dropdown__columns",children:[e.jsxs("div",{className:"timepicker-dropdown__column",children:[e.jsx("div",{className:"timepicker-dropdown__header",children:"Hours"}),e.jsx("div",{ref:X,className:"timepicker-dropdown__list",children:me.map(t=>{const i=t,l=u==="12h"?o===0&&t===12||o>0&&o<=12&&o===t||o>12&&o-12===t:o===t,v=!re(i,b,S,T);return e.jsx("button",{type:"button",className:`
                        timepicker-dropdown__item
                        ${l?"timepicker-dropdown__item--selected":""}
                        ${v?"timepicker-dropdown__item--disabled":""}
                      `,onClick:()=>fe(t),disabled:v,role:"option","aria-selected":l?"true":"false",children:t.toString().padStart(2,"0")},t)})})]}),e.jsxs("div",{className:"timepicker-dropdown__column",children:[e.jsx("div",{className:"timepicker-dropdown__header",children:"Minutes"}),e.jsx("div",{ref:Y,className:"timepicker-dropdown__list",children:pe.map(t=>{const i=b===t,l=!re(o,t,S,T);return e.jsx("button",{type:"button",className:`
                        timepicker-dropdown__item
                        ${i?"timepicker-dropdown__item--selected":""}
                        ${l?"timepicker-dropdown__item--disabled":""}
                      `,onClick:()=>ke(t),disabled:l,role:"option","aria-selected":i?"true":"false",children:t.toString().padStart(2,"0")},t)})})]}),y&&e.jsxs("div",{className:"timepicker-dropdown__column",children:[e.jsx("div",{className:"timepicker-dropdown__header",children:"Seconds"}),e.jsx("div",{ref:Z,className:"timepicker-dropdown__list",children:ue.map(t=>{const i=x===t;return e.jsx("button",{type:"button",className:`
                          timepicker-dropdown__item
                          ${i?"timepicker-dropdown__item--selected":""}
                        `,onClick:()=>_e(t),role:"option","aria-selected":i?"true":"false",children:t.toString().padStart(2,"0")},t)})})]}),u==="12h"&&e.jsxs("div",{className:"timepicker-dropdown__column timepicker-dropdown__column--period",children:[e.jsx("div",{className:"timepicker-dropdown__header",children:"Period"}),e.jsxs("div",{className:"timepicker-dropdown__list",children:[e.jsx("button",{type:"button",className:`
                      timepicker-dropdown__item
                      ${o<12?"timepicker-dropdown__item--selected":""}
                    `,onClick:ee,role:"option","aria-selected":o<12?"true":"false",children:"AM"}),e.jsx("button",{type:"button",className:`
                      timepicker-dropdown__item
                      ${o>=12?"timepicker-dropdown__item--selected":""}
                    `,onClick:ee,role:"option","aria-selected":o>=12?"true":"false",children:"PM"})]})]})]})})]})});s.displayName="TimePicker";s.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onTimeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(hours: number, minutes: number) => void",signature:{arguments:[{type:{name:"number"},name:"hours"},{type:{name:"number"},name:"minutes"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select time...'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'filled' | 'ghost'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},format:{required:!1,tsType:{name:"union",raw:"'12h' | '24h'",elements:[{name:"literal",value:"'12h'"},{name:"literal",value:"'24h'"}]},description:"",defaultValue:{value:"'24h'",computed:!1}},minTime:{required:!1,tsType:{name:"string"},description:""},maxTime:{required:!1,tsType:{name:"string"},description:""},minuteStep:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},showSeconds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""}}};const Ne={title:"Atoms/TimePicker",component:s,parameters:{layout:"centered",docs:{description:{component:"A time picker component with dropdown interface, supporting multiple time formats and validation."}}},argTypes:{value:{control:"text",description:"Currently selected time value (controlled)"},defaultValue:{control:"text",description:"Default time value (uncontrolled)"},placeholder:{control:"text",description:"Placeholder text for the input"},disabled:{control:"boolean",description:"Disable the time picker"},required:{control:"boolean",description:"Mark as required field"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},variant:{control:"select",options:["default","filled","ghost"],description:"Style variant"},format:{control:"select",options:["12h","24h"],description:"Time format (12-hour or 24-hour)"},minTime:{control:"text",description:"Minimum allowed time"},maxTime:{control:"text",description:"Maximum allowed time"},minuteStep:{control:"select",options:[1,5,10,15,30],description:"Step for minute selection"},showSeconds:{control:"boolean",description:"Show seconds selection"},closeOnSelect:{control:"boolean",description:"Close dropdown after selection"}}},w={render:r=>e.jsx("div",{className:"timepicker-story-container",children:e.jsx(s,{...r,placeholder:"Select time..."})})},j={render:r=>e.jsx("div",{className:"timepicker-story-container",children:e.jsx(s,{...r,defaultValue:"14:30",placeholder:"Select time..."})}),parameters:{docs:{description:{story:"TimePicker with a pre-selected default time."}}}},P={render:r=>e.jsx("div",{className:"timepicker-story-container",children:e.jsx(s,{...r,format:"12h",defaultValue:"02:30 PM",placeholder:"Select time..."})}),parameters:{docs:{description:{story:"TimePicker using 12-hour format with AM/PM."}}}},M={render:r=>e.jsx("div",{className:"timepicker-story-container",children:e.jsx(s,{...r,placeholder:"Business hours only...",minTime:"09:00",maxTime:"17:00",defaultValue:"12:00"})}),parameters:{docs:{description:{story:"TimePicker with minimum and maximum time restrictions (9 AM to 5 PM)."}}}},V={render:r=>e.jsx("div",{className:"timepicker-story-container",children:e.jsx(s,{...r,placeholder:"Select time in 15-minute intervals...",minuteStep:15,defaultValue:"14:15"})}),parameters:{docs:{description:{story:"TimePicker with 15-minute step intervals."}}}},C={render:r=>e.jsx("div",{className:"timepicker-story-container",children:e.jsx(s,{...r,placeholder:"Select precise time...",showSeconds:!0,defaultValue:"14:30:45"})}),parameters:{docs:{description:{story:"TimePicker with seconds selection enabled."}}}},$={args:{name:"sizes-group",placeholder:"Select time..."},render:()=>e.jsxs("div",{className:"timepicker-demo",children:[e.jsxs("div",{className:"timepicker-demo__section",children:[e.jsx("h4",{className:"timepicker-demo__title",children:"Small"}),e.jsx(s,{size:"sm",placeholder:"Small time picker",defaultValue:"09:00"})]}),e.jsxs("div",{className:"timepicker-demo__section",children:[e.jsx("h4",{className:"timepicker-demo__title",children:"Medium (Default)"}),e.jsx(s,{size:"md",placeholder:"Medium time picker",defaultValue:"12:00"})]}),e.jsxs("div",{className:"timepicker-demo__section",children:[e.jsx("h4",{className:"timepicker-demo__title",children:"Large"}),e.jsx(s,{size:"lg",placeholder:"Large time picker",defaultValue:"18:00"})]})]}),parameters:{docs:{description:{story:"Different size variants of the time picker."}}}},q={args:{name:"variants-group",placeholder:"Select time..."},render:()=>e.jsxs("div",{className:"timepicker-demo timepicker-demo--horizontal",children:[e.jsxs("div",{className:"timepicker-demo__section",children:[e.jsx("h4",{className:"timepicker-demo__title",children:"Default"}),e.jsx(s,{variant:"default",placeholder:"Default variant",defaultValue:"09:00"})]}),e.jsxs("div",{className:"timepicker-demo__section",children:[e.jsx("h4",{className:"timepicker-demo__title",children:"Filled"}),e.jsx(s,{variant:"filled",placeholder:"Filled variant",defaultValue:"12:00"})]}),e.jsxs("div",{className:"timepicker-demo__section",children:[e.jsx("h4",{className:"timepicker-demo__title",children:"Ghost"}),e.jsx(s,{variant:"ghost",placeholder:"Ghost variant",defaultValue:"18:00"})]})]}),parameters:{docs:{description:{story:"Different visual variants of the time picker."}}}},D={render:r=>e.jsx("div",{className:"timepicker-story-container",children:e.jsx(s,{...r,placeholder:"Disabled time picker...",disabled:!0,defaultValue:"14:30"})}),parameters:{docs:{description:{story:"Disabled time picker state."}}}},H={render:r=>e.jsx("div",{className:"timepicker-story-container",children:e.jsx(s,{...r,placeholder:"Required time selection...",required:!0})}),parameters:{docs:{description:{story:"Required time picker field."}}}},A={args:{name:"controlled-group",placeholder:"Select time..."},render:()=>{const[r,c]=d.useState("14:30"),[m,a]=d.useState("24h"),p=f=>{c(f)},n=f=>{if(a(f),r){if(f==="12h"&&!r.includes(" ")){const[k,g]=r.split(":").map(Number),u=k>=12?"PM":"AM",S=k===0?12:k>12?k-12:k;c(`${S.toString().padStart(2,"0")}:${g.toString().padStart(2,"0")} ${u}`)}else if(f==="24h"&&r.includes(" ")){const[k,g]=r.split(" "),[u,S]=k.split(":").map(Number);let T=u;g==="PM"&&u!==12&&(T+=12),g==="AM"&&u===12&&(T=0),c(`${T.toString().padStart(2,"0")}:${S.toString().padStart(2,"0")}`)}}};return e.jsxs("div",{className:"timepicker-controlled",children:[e.jsx("div",{className:"timepicker-controlled__section",children:e.jsx(s,{value:r,onChange:p,format:m,placeholder:`Select time (${m.toUpperCase()})...`})}),e.jsxs("div",{className:"timepicker-controlled__info",children:["Selected time: ",e.jsx("strong",{children:r||"None"})]}),e.jsxs("div",{className:"timepicker-controlled__format",children:[e.jsx("span",{className:"timepicker-controlled__format-label",children:"Format:"}),e.jsxs("div",{className:"timepicker-controlled__format-buttons",children:[e.jsx("button",{onClick:()=>n("24h"),className:`timepicker-controlled__format-button ${m==="24h"?"timepicker-controlled__format-button--active":""}`,children:"24H"}),e.jsx("button",{onClick:()=>n("12h"),className:`timepicker-controlled__format-button ${m==="12h"?"timepicker-controlled__format-button--active":""}`,children:"12H"})]})]}),e.jsxs("div",{className:"timepicker-controlled__buttons",children:[e.jsx("button",{onClick:()=>c("09:00"),className:"timepicker-controlled__button timepicker-controlled__button--primary",children:"Set 9:00 AM"}),e.jsx("button",{onClick:()=>c("12:00"),className:"timepicker-controlled__button timepicker-controlled__button--primary",children:"Set Noon"}),e.jsx("button",{onClick:()=>c(""),className:"timepicker-controlled__button timepicker-controlled__button--secondary",children:"Clear"})]})]})},parameters:{docs:{description:{story:"Controlled time picker with external state management and format switching."}}}},R={render:r=>e.jsx("div",{className:"timepicker-story-container",children:e.jsx(s,{...r,placeholder:"Working hours (9 AM - 6 PM)...",format:"12h",minTime:"09:00 AM",maxTime:"06:00 PM",minuteStep:30})}),parameters:{docs:{description:{story:"TimePicker configured for typical working hours with 30-minute intervals."}}}},z={render:r=>e.jsx("div",{className:"timepicker-story-container",children:e.jsx(s,{...r,placeholder:"Schedule meeting time...",minuteStep:15,minTime:"08:00",maxTime:"20:00",closeOnSelect:!1})}),parameters:{docs:{description:{story:"TimePicker optimized for meeting scheduling with 15-minute steps."}}}},F={render:r=>e.jsx("div",{className:"timepicker-story-container",children:e.jsx(s,{...r,placeholder:"Precise time with seconds...",showSeconds:!0,closeOnSelect:!1,defaultValue:"14:30:00"})}),parameters:{docs:{description:{story:"TimePicker for precise time selection including seconds."}}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div className="timepicker-story-container">\r
      <TimePicker {...args} placeholder="Select time..." />\r
    </div>
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <div className="timepicker-story-container">\r
      <TimePicker {...args} defaultValue="14:30" placeholder="Select time..." />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'TimePicker with a pre-selected default time.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <div className="timepicker-story-container">\r
      <TimePicker {...args} format="12h" defaultValue="02:30 PM" placeholder="Select time..." />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'TimePicker using 12-hour format with AM/PM.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <div className="timepicker-story-container">\r
      <TimePicker {...args} placeholder="Business hours only..." minTime="09:00" maxTime="17:00" defaultValue="12:00" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'TimePicker with minimum and maximum time restrictions (9 AM to 5 PM).'
      }
    }
  }
}`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <div className="timepicker-story-container">\r
      <TimePicker {...args} placeholder="Select time in 15-minute intervals..." minuteStep={15} defaultValue="14:15" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'TimePicker with 15-minute step intervals.'
      }
    }
  }
}`,...V.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div className="timepicker-story-container">\r
      <TimePicker {...args} placeholder="Select precise time..." showSeconds={true} defaultValue="14:30:45" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'TimePicker with seconds selection enabled.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'sizes-group',
    placeholder: 'Select time...'
  },
  render: () => <div className="timepicker-demo">\r
      <div className="timepicker-demo__section">\r
        <h4 className="timepicker-demo__title">Small</h4>\r
        <TimePicker size="sm" placeholder="Small time picker" defaultValue="09:00" />\r
      </div>\r
      \r
      <div className="timepicker-demo__section">\r
        <h4 className="timepicker-demo__title">Medium (Default)</h4>\r
        <TimePicker size="md" placeholder="Medium time picker" defaultValue="12:00" />\r
      </div>\r
      \r
      <div className="timepicker-demo__section">\r
        <h4 className="timepicker-demo__title">Large</h4>\r
        <TimePicker size="lg" placeholder="Large time picker" defaultValue="18:00" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the time picker.'
      }
    }
  }
}`,...$.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'variants-group',
    placeholder: 'Select time...'
  },
  render: () => <div className="timepicker-demo timepicker-demo--horizontal">\r
      <div className="timepicker-demo__section">\r
        <h4 className="timepicker-demo__title">Default</h4>\r
        <TimePicker variant="default" placeholder="Default variant" defaultValue="09:00" />\r
      </div>\r
      \r
      <div className="timepicker-demo__section">\r
        <h4 className="timepicker-demo__title">Filled</h4>\r
        <TimePicker variant="filled" placeholder="Filled variant" defaultValue="12:00" />\r
      </div>\r
      \r
      <div className="timepicker-demo__section">\r
        <h4 className="timepicker-demo__title">Ghost</h4>\r
        <TimePicker variant="ghost" placeholder="Ghost variant" defaultValue="18:00" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the time picker.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <div className="timepicker-story-container">\r
      <TimePicker {...args} placeholder="Disabled time picker..." disabled={true} defaultValue="14:30" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Disabled time picker state.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <div className="timepicker-story-container">\r
      <TimePicker {...args} placeholder="Required time selection..." required={true} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Required time picker field.'
      }
    }
  }
}`,...H.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'controlled-group',
    placeholder: 'Select time...'
  },
  render: () => {
    const [selectedTime, setSelectedTime] = useState('14:30');
    const [format, setFormat] = useState<'12h' | '24h'>('24h');
    const handleTimeChange = (time: string) => {
      setSelectedTime(time);
    };
    const handleFormatChange = (newFormat: '12h' | '24h') => {
      setFormat(newFormat);
      // Convert time format when switching
      if (selectedTime) {
        if (newFormat === '12h' && !selectedTime.includes(' ')) {
          // Convert from 24h to 12h
          const [hours, minutes] = selectedTime.split(':').map(Number);
          const period = hours >= 12 ? 'PM' : 'AM';
          const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
          setSelectedTime(\`\${displayHours.toString().padStart(2, '0')}:\${minutes.toString().padStart(2, '0')} \${period}\`);
        } else if (newFormat === '24h' && selectedTime.includes(' ')) {
          // Convert from 12h to 24h
          const [time, period] = selectedTime.split(' ');
          const [hours, minutes] = time.split(':').map(Number);
          let convertedHours = hours;
          if (period === 'PM' && hours !== 12) convertedHours += 12;
          if (period === 'AM' && hours === 12) convertedHours = 0;
          setSelectedTime(\`\${convertedHours.toString().padStart(2, '0')}:\${minutes.toString().padStart(2, '0')}\`);
        }
      }
    };
    return <div className="timepicker-controlled">\r
        <div className="timepicker-controlled__section">\r
          <TimePicker value={selectedTime} onChange={handleTimeChange} format={format} placeholder={\`Select time (\${format.toUpperCase()})...\`} />\r
        </div>\r
        \r
        <div className="timepicker-controlled__info">\r
          Selected time: <strong>{selectedTime || 'None'}</strong>\r
        </div>\r
        \r
        <div className="timepicker-controlled__format">\r
          <span className="timepicker-controlled__format-label">Format:</span>\r
          <div className="timepicker-controlled__format-buttons">\r
            <button onClick={() => handleFormatChange('24h')} className={\`timepicker-controlled__format-button \${format === '24h' ? 'timepicker-controlled__format-button--active' : ''}\`}>\r
              24H\r
            </button>\r
            <button onClick={() => handleFormatChange('12h')} className={\`timepicker-controlled__format-button \${format === '12h' ? 'timepicker-controlled__format-button--active' : ''}\`}>\r
              12H\r
            </button>\r
          </div>\r
        </div>\r
        \r
        <div className="timepicker-controlled__buttons">\r
          <button onClick={() => setSelectedTime('09:00')} className="timepicker-controlled__button timepicker-controlled__button--primary">\r
            Set 9:00 AM\r
          </button>\r
          <button onClick={() => setSelectedTime('12:00')} className="timepicker-controlled__button timepicker-controlled__button--primary">\r
            Set Noon\r
          </button>\r
          <button onClick={() => setSelectedTime('')} className="timepicker-controlled__button timepicker-controlled__button--secondary">\r
            Clear\r
          </button>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled time picker with external state management and format switching.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => <div className="timepicker-story-container">\r
      <TimePicker {...args} placeholder="Working hours (9 AM - 6 PM)..." format="12h" minTime="09:00 AM" maxTime="06:00 PM" minuteStep={30} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'TimePicker configured for typical working hours with 30-minute intervals.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <div className="timepicker-story-container">\r
      <TimePicker {...args} placeholder="Schedule meeting time..." minuteStep={15} minTime="08:00" maxTime="20:00" closeOnSelect={false} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'TimePicker optimized for meeting scheduling with 15-minute steps.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <div className="timepicker-story-container">\r
      <TimePicker {...args} placeholder="Precise time with seconds..." showSeconds={true} closeOnSelect={false} defaultValue="14:30:00" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'TimePicker for precise time selection including seconds.'
      }
    }
  }
}`,...F.parameters?.docs?.source}}};const we=["Default","WithDefaultValue","TwelveHourFormat","WithTimeRestrictions","WithMinuteSteps","WithSeconds","Sizes","Variants","Disabled","Required","Controlled","WorkingHours","MeetingScheduler","PreciseTimePicker"];export{A as Controlled,w as Default,D as Disabled,z as MeetingScheduler,F as PreciseTimePicker,H as Required,$ as Sizes,P as TwelveHourFormat,q as Variants,j as WithDefaultValue,V as WithMinuteSteps,C as WithSeconds,M as WithTimeRestrictions,R as WorkingHours,we as __namedExportsOrder,Ne as default};
