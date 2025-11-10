import{r as u,j as e}from"./iframe-CY-Mz7KS.js";import"./preload-helper-PPVm8Dsz.js";const b=({value:n,defaultValue:t=0,min:a=0,max:i=100,step:V=1,range:d=!1,orientation:m="horizontal",size:B="medium",disabled:h=!1,showLabels:O=!1,showTicks:U=!1,onChange:y,className:G="","aria-label":H,"aria-labelledby":P})=>{const g=n!==void 0,[J,D]=u.useState(()=>d&&Array.isArray(t)?t:d&&!Array.isArray(t)?[a,typeof t=="number"?t:a]:Array.isArray(t)?t[0]:t),c=g?n:J,E=u.useRef(null),[w,$]=u.useState(null),f=u.useCallback(r=>Math.min(i,Math.max(a,Math.round(r/V)*V)),[a,i,V]),v=u.useCallback(r=>(r-a)/(i-a)*100,[a,i]),S=u.useCallback(r=>{if(!E.current)return a;const s=E.current.getBoundingClientRect(),l=m==="horizontal"?s.width:s.height,o=m==="horizontal"?r-s.left:s.bottom-r,p=Math.max(0,Math.min(100,o/l*100));return f(a+p/100*(i-a))},[a,i,f,m]),X=u.useCallback((r,s)=>{if(h)return;r.preventDefault();const l=S(m==="horizontal"?r.clientX:r.clientY);if(d&&Array.isArray(c)){const[o,p]=c;let ee=s??(Math.abs(l-o)<Math.abs(l-p)?0:1);$(ee)}else{$(0);const o=f(l);g||D(o),y?.(o)}},[h,S,m,c,d,f,g,y]),I=u.useCallback(r=>{if(w===null||h)return;const s=S(m==="horizontal"?r.clientX:r.clientY);if(d&&Array.isArray(c)){const[l,o]=c,p=w===0?[Math.min(s,o),o]:[l,Math.max(s,l)];g||D(p),y?.(p)}else{const l=f(s);g||D(l),y?.(l)}},[w,h,S,m,c,d,f,g,y]),W=u.useCallback(()=>{$(null)},[]);u.useEffect(()=>{if(w!==null)return document.addEventListener("mousemove",I),document.addEventListener("mouseup",W),()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",W)}},[w,I,W]);const K=["slider",`slider--${m}`,`slider--${B}`,h&&"slider--disabled",G].filter(Boolean).join(" "),F=(r,s=0)=>{const l={"--thumb-position":`${v(r)}%`},o={key:s,className:"slider__thumb",style:l,onMouseDown:p=>X(p,s),role:"slider",tabIndex:h?-1:0,"aria-valuemin":a,"aria-valuemax":i,"aria-valuenow":r,"aria-label":H||`Slider thumb ${s+1}`,...P&&{"aria-labelledby":P}};return e.jsx("div",{...o})},Q=()=>{if(!U)return null;const r=[];for(let s=a;s<=i;s+=V){const o={"--tick-position":`${v(s)}%`};r.push(e.jsx("div",{className:"slider__tick",style:o},s))}return r},Z=()=>O?e.jsxs("div",{className:"slider__labels",children:[e.jsx("span",{className:"slider__label slider__label--min",children:a}),e.jsx("span",{className:"slider__label slider__label--max",children:i})]}):null,Y=typeof c=="number"?c:0,x=Array.isArray(c)?c:[a,i];return e.jsxs("div",{className:K,children:[O&&Z(),e.jsxs("div",{ref:E,className:"slider__track",onMouseDown:X,children:[e.jsx("div",{className:"slider__rail"}),d?e.jsx("div",{className:"slider__range",style:{"--range-start":`${v(x[0])}%`,"--range-size":`${v(x[1])-v(x[0])}%`}}):e.jsx("div",{className:"slider__range",style:{"--range-start":"0%","--range-size":`${v(Y)}%`}}),Q(),d?e.jsxs(e.Fragment,{children:[F(x[0],0),F(x[1],1)]}):F(Y)]})]})};b.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},description:"Current value(s) - single number for single slider, array for range"},defaultValue:{required:!1,tsType:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},description:"Default value(s) for uncontrolled component",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"Minimum value",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"Maximum value",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Step increment",defaultValue:{value:"1",computed:!1}},range:{required:!1,tsType:{name:"boolean"},description:"Whether this is a range slider",defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Orientation of the slider",defaultValue:{value:"'horizontal'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the slider is disabled",defaultValue:{value:"false",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"Show value labels",defaultValue:{value:"false",computed:!1}},showTicks:{required:!1,tsType:{name:"boolean"},description:"Show tick marks",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | [number, number]) => void",signature:{arguments:[{type:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},name:"value"}],return:{name:"void"}}},description:"Change handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name",defaultValue:{value:"''",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelledby"}}};const se={title:"Atoms/Slider",component:b,parameters:{layout:"centered",docs:{description:{component:"Slider allows users to select a value or range of values by sliding a handle along a track."},story:{inline:!0}}},decorators:[(n,t)=>{const i=t.args?.orientation==="vertical"?"slider-vertical-container":"slider-horizontal-container";return e.jsx("div",{className:i,children:e.jsx(n,{})})}],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},size:{control:{type:"select"},options:["small","medium","large"]},range:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},showLabels:{control:{type:"boolean"}},showTicks:{control:{type:"boolean"}},min:{control:{type:"number"}},max:{control:{type:"number"}},step:{control:{type:"number"}}}},j={args:{defaultValue:30,min:0,max:100,step:1}},L={args:{defaultValue:50,min:0,max:100,step:10,showLabels:!0}},z={args:{defaultValue:40,min:0,max:100,step:20,showTicks:!0,showLabels:!0}},T={args:{range:!0,defaultValue:[20,80],min:0,max:100,step:5,showLabels:!0}},_={args:{orientation:"vertical",defaultValue:60,min:0,max:100,step:10,showLabels:!0},decorators:[n=>e.jsx("div",{className:"slider-vertical-container",children:e.jsx(n,{})})]},k={args:{orientation:"vertical",range:!0,defaultValue:[30,70],min:0,max:100,step:10,showLabels:!0},decorators:[n=>e.jsx("div",{className:"slider-vertical-container",children:e.jsx(n,{})})]},C={render:()=>e.jsxs("div",{className:"slider-sizes-demo",children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Small"}),e.jsx(b,{size:"small",defaultValue:25,showLabels:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Medium"}),e.jsx(b,{size:"medium",defaultValue:50,showLabels:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Large"}),e.jsx(b,{size:"large",defaultValue:75,showLabels:!0})]})]})},M={args:{disabled:!0,defaultValue:60,min:0,max:100,showLabels:!0}},N={args:{disabled:!0,range:!0,defaultValue:[25,75],min:0,max:100,showLabels:!0}},A={args:{defaultValue:2.5,min:0,max:10,step:.5,showTicks:!0,showLabels:!0}},R={render:()=>{const[n,t]=u.useState(42);return e.jsxs("div",{children:[e.jsxs("p",{children:["Current value: ",n]}),e.jsx(b,{value:n,onChange:a=>t(a),min:0,max:100,step:1,showLabels:!0})]})}},q={render:()=>{const[n,t]=u.useState([20,70]);return e.jsxs("div",{children:[e.jsxs("p",{children:["Current range: [",n[0],", ",n[1],"]"]}),e.jsx(b,{range:!0,value:n,onChange:a=>t(a),min:0,max:100,step:5,showLabels:!0})]})}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 30,
    min: 0,
    max: 100,
    step: 1
  }
}`,...j.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 10,
    showLabels: true
  }
}`,...L.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 40,
    min: 0,
    max: 100,
    step: 20,
    showTicks: true,
    showLabels: true
  }
}`,...z.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    range: true,
    defaultValue: [20, 80],
    min: 0,
    max: 100,
    step: 5,
    showLabels: true
  }
}`,...T.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    defaultValue: 60,
    min: 0,
    max: 100,
    step: 10,
    showLabels: true
  },
  decorators: [Story => <div className="slider-vertical-container">\r
        <Story />\r
      </div>]
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    range: true,
    defaultValue: [30, 70],
    min: 0,
    max: 100,
    step: 10,
    showLabels: true
  },
  decorators: [Story => <div className="slider-vertical-container">\r
        <Story />\r
      </div>]
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="slider-sizes-demo">\r
      <div>\r
        <h4>Small</h4>\r
        <Slider size="small" defaultValue={25} showLabels />\r
      </div>\r
      <div>\r
        <h4>Medium</h4>\r
        <Slider size="medium" defaultValue={50} showLabels />\r
      </div>\r
      <div>\r
        <h4>Large</h4>\r
        <Slider size="large" defaultValue={75} showLabels />\r
      </div>\r
    </div>
}`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 60,
    min: 0,
    max: 100,
    showLabels: true
  }
}`,...M.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    range: true,
    defaultValue: [25, 75],
    min: 0,
    max: 100,
    showLabels: true
  }
}`,...N.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 2.5,
    min: 0,
    max: 10,
    step: 0.5,
    showTicks: true,
    showLabels: true
  }
}`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(42);
    return <div>\r
        <p>Current value: {value}</p>\r
        <Slider value={value} onChange={newValue => setValue(newValue as number)} min={0} max={100} step={1} showLabels />\r
      </div>;
  }
}`,...R.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = useState<[number, number]>([20, 70]);
    return <div>\r
        <p>Current range: [{range[0]}, {range[1]}]</p>\r
        <Slider range value={range} onChange={newValue => setRange(newValue as [number, number])} min={0} max={100} step={5} showLabels />\r
      </div>;
  }
}`,...q.parameters?.docs?.source}}};const ne=["Default","WithLabels","WithTicks","Range","Vertical","VerticalRange","Sizes","Disabled","DisabledRange","CustomStep","Controlled","ControlledRange"];export{R as Controlled,q as ControlledRange,A as CustomStep,j as Default,M as Disabled,N as DisabledRange,T as Range,C as Sizes,_ as Vertical,k as VerticalRange,L as WithLabels,z as WithTicks,ne as __namedExportsOrder,se as default};
