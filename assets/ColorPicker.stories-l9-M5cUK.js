import{r as c,j as e}from"./iframe-BMIDd8Dz.js";import"./preload-helper-PPVm8Dsz.js";const S=r=>{const s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return s?{r:parseInt(s[1],16),g:parseInt(s[2],16),b:parseInt(s[3],16)}:{r:0,g:0,b:0}},ue=(r,s,o)=>"#"+((1<<24)+(r<<16)+(s<<8)+o).toString(16).slice(1),P=(r,s,o)=>{r/=255,s/=255,o/=255;const n=Math.max(r,s,o),i=Math.min(r,s,o);let h=0,f=0,d=(n+i)/2;if(n===i)h=f=0;else{const p=n-i;switch(f=d>.5?p/(2-n-i):p/(n+i),n){case r:h=(s-o)/p+(s<o?6:0);break;case s:h=(o-r)/p+2;break;case o:h=(r-s)/p+4;break}h/=6}return{h:Math.round(h*360),s:Math.round(f*100),l:Math.round(d*100)}},fe=(r,s,o)=>{r/=360,s/=100,o/=100;const n=(d,p,g)=>(g<0&&(g+=1),g>1&&(g-=1),g<1/6?d+(p-d)*6*g:g<1/2?p:g<2/3?d+(p-d)*(2/3-g)*6:d);let i,h,f;if(s===0)i=h=f=o;else{const d=o<.5?o*(1+s):o+s-o*s,p=2*o-d;i=n(p,d,r+1/3),h=n(p,d,r),f=n(p,d,r-1/3)}return{r:Math.round(i*255),g:Math.round(h*255),b:Math.round(f*255)}},$=(r,s)=>{const o=S(r);switch(s){case"rgb":return`rgb(${o.r}, ${o.g}, ${o.b})`;case"hsl":const n=P(o.r,o.g,o.b);return`hsl(${n.h}, ${n.s}%, ${n.l}%)`;default:return r}},pe=(r,s)=>{const o=r.getContext("2d");if(!o){console.warn("ColorPicker: Canvas context not available");return}const{width:n,height:i}=r;if(n===0||i===0){console.warn("ColorPicker: Canvas has no dimensions");return}o.clearRect(0,0,n,i);const h=fe(s,100,50);o.fillStyle=`rgb(${h.r}, ${h.g}, ${h.b})`,o.fillRect(0,0,n,i);const f=o.createLinearGradient(0,0,n,0);f.addColorStop(0,"rgba(255, 255, 255, 1)"),f.addColorStop(1,"rgba(255, 255, 255, 0)"),o.fillStyle=f,o.fillRect(0,0,n,i);const d=o.createLinearGradient(0,0,0,i);d.addColorStop(0,"rgba(0, 0, 0, 0)"),d.addColorStop(1,"rgba(0, 0, 0, 1)"),o.fillStyle=d,o.fillRect(0,0,n,i)},he=(r,s,o,n)=>{!r||!("beginPath"in r)||(n==="circle"?(r.beginPath(),r.arc(s,o,6,0,2*Math.PI),r.strokeStyle="#ffffff",r.lineWidth=2,r.stroke(),r.beginPath(),r.arc(s,o,6,0,2*Math.PI),r.strokeStyle="#000000",r.lineWidth=1,r.stroke()):(r.strokeStyle="#ffffff",r.lineWidth=3,r.beginPath(),r.moveTo(s-8,o),r.lineTo(s+8,o),r.moveTo(s,o-8),r.lineTo(s,o+8),r.stroke(),r.strokeStyle="#000000",r.lineWidth=1,r.beginPath(),r.moveTo(s-8,o),r.lineTo(s+8,o),r.moveTo(s,o-8),r.lineTo(s,o+8),r.stroke()))},m=({value:r,defaultValue:s="#1677ff",disabled:o=!1,allowClear:n=!1,showText:i=!0,size:h="default",format:f="hex",presets:d=["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#4B0082","#9400D3","#FF69B4","#FF1493","#00CED1","#00FA9A","#FFD700","#FF6347","#8A2BE2"],indicatorType:p="circle",showHexInput:g=!1,onChange:V,onFormatChange:ne,className:me})=>{const[C,I]=c.useState(r??s),[T,ge]=c.useState(f),[x,B]=c.useState(!1),[ce,le]=c.useState(!1),ee=r??s,re=S(ee),oe=P(re.r,re.g,re.b),[v,H]=c.useState(oe.h),[_,F]=c.useState(oe.s),[y,j]=c.useState(oe.l),[be,E]=c.useState($(ee,f)),[Ce,ie]=c.useState(ee),te=c.useRef(null),se=c.useRef(null),N=c.useRef(null);c.useEffect(()=>{if(r!==void 0){const t=S(r),a=P(t.r,t.g,t.b);H(a.h),F(a.s),j(a.l)}},[r]),c.useEffect(()=>{E($(C,T)),ie(C)},[C,T]),c.useEffect(()=>{if(r===void 0){const t=fe(v,_,y),a=ue(t.r,t.g,t.b);I(a)}},[v,_,y,r]),c.useEffect(()=>{const t=N.current;if(t&&x){const a=setTimeout(()=>{pe(t,v);const l=t.getContext("2d");if(l){const{width:u,height:k}=t,b=_/100*u,ae=(100-y)/100*k;he(l,b,ae,p)}},10);return()=>clearTimeout(a)}},[x,v,_,y,p]),c.useEffect(()=>{const t=N.current;if(t&&x){pe(t,v);const a=t.getContext("2d");if(a){const{width:l,height:u}=t,k=_/100*l,b=(100-y)/100*u;he(a,k,b,p)}}},[v,_,y,x,p]);const w=c.useCallback(t=>{I(t);const a=S(t),l=P(a.r,a.g,a.b);H(l.h),F(l.s),j(l.l);const u={hex:t,rgb:a,hsl:l};V?.($(t,T),u)},[T,V]),de=c.useCallback(t=>{const a=N.current?.getBoundingClientRect();if(a){const l=Math.max(0,Math.min(t.clientX-a.left,a.width)),u=Math.max(0,Math.min(t.clientY-a.top,a.height)),k=l/a.width*100,b=100-u/a.height*100;F(Math.max(0,Math.min(100,k))),j(Math.max(0,Math.min(100,b)))}},[]),ke=c.useCallback(t=>{w(t),B(!1)},[w]),xe=c.useCallback(t=>{const a=t.target.value;if(E(a),a.match(/^#[0-9A-F]{6}$/i))w(a);else if(a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)){const l=a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);if(l){const u=ue(parseInt(l[1]),parseInt(l[2]),parseInt(l[3]));w(u)}}},[w]),ve=c.useCallback(t=>{ge(t),E($(C,t)),ne?.(t)},[C,ne]),we=c.useCallback(t=>{const a=t.target.value;ie(a);const l=/^#?([0-9A-F]{6})$/i,u=a.match(l);if(u){const b=`#${u[1].toUpperCase()}`;w(b)}},[w]),_e=c.useCallback(()=>{const t="#ffffff";I(t),E("");const a=S(t),l=P(a.r,a.g,a.b);H(l.h),F(l.s),j(l.l),B(!1),V?.("",{hex:"",rgb:{r:0,g:0,b:0},hsl:{h:0,s:0,l:0}})},[V]);c.useEffect(()=>{if(!ce)return;const t=l=>{const u=N.current?.getBoundingClientRect();if(u){const k=Math.max(0,Math.min(l.clientX-u.left,u.width)),b=Math.max(0,Math.min(l.clientY-u.top,u.height)),ae=k/u.width*100,Te=100-b/u.height*100;F(Math.max(0,Math.min(100,ae))),j(Math.max(0,Math.min(100,Te)))}},a=()=>{le(!1)};return document.addEventListener("mousemove",t),document.addEventListener("mouseup",a),()=>{document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",a)}},[ce]),c.useEffect(()=>{const t=a=>{te.current&&!te.current.contains(a.target)&&se.current&&!se.current.contains(a.target)&&B(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]),c.useEffect(()=>{r!==void 0&&I(r)},[r]);const ye=["color-picker",`color-picker--${h}`,x&&"color-picker--open",o&&"color-picker--disabled",me].filter(Boolean).join(" ");return e.jsxs("div",{className:ye,children:[e.jsxs("div",{ref:te,className:"color-picker__trigger",onClick:()=>!o&&B(!x),children:[e.jsx("div",{className:"color-picker__color-block","data-color":C,style:{"--current-color":C}}),i&&e.jsx("input",{type:"text",className:"color-picker__input",value:be,onChange:xe,disabled:o,placeholder:"Enter color..."}),n&&C&&!o&&e.jsx("button",{type:"button",className:"color-picker__clear",onClick:t=>{t.stopPropagation(),_e()},children:"×"}),e.jsx("div",{className:"color-picker__arrow",children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",children:e.jsx("path",{d:"M6 8l4-4H2l4 4z"})})})]}),x&&e.jsx("div",{ref:se,className:"color-picker__dropdown",children:e.jsxs("div",{className:"color-picker__panel",children:[e.jsx("div",{className:"color-picker__saturation-lightness",children:e.jsx("canvas",{ref:N,width:200,height:150,className:"color-picker__canvas",onMouseDown:t=>{le(!0),de(t)},onClick:de})}),e.jsx("div",{className:"color-picker__hue-slider",children:e.jsx("input",{type:"range",min:"0",max:"360",value:v,onChange:t=>H(parseInt(t.target.value)),className:"color-picker__slider","aria-label":"Hue",title:"Adjust hue"})}),g&&e.jsxs("div",{className:"color-picker__hex-input-wrapper",children:[e.jsx("label",{htmlFor:"hex-input",className:"color-picker__hex-label",children:"Hex:"}),e.jsx("input",{id:"hex-input",type:"text",className:"color-picker__hex-input",value:Ce,onChange:we,placeholder:"#RRGGBB",maxLength:7,"aria-label":"Hex color code"})]}),e.jsx("div",{className:"color-picker__format-selector",children:["hex","rgb","hsl"].map(t=>e.jsx("button",{className:`color-picker__format-btn ${T===t?"color-picker__format-btn--active":""}`,onClick:()=>ve(t),children:t.toUpperCase()},t))}),d.length>0&&e.jsxs("div",{className:"color-picker__presets",children:[e.jsx("div",{className:"color-picker__presets-label",children:"Presets"}),e.jsx("div",{className:"color-picker__presets-grid",children:d.map((t,a)=>e.jsx("div",{className:"color-picker__preset","data-color":t,onClick:()=>ke(t),title:t,style:{"--preset-color":t}},a))})]})]})})]})};m.__docgenInfo={description:"",methods:[],displayName:"ColorPicker",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#1677ff'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},format:{required:!1,tsType:{name:"union",raw:"'hex' | 'rgb' | 'hsl'",elements:[{name:"literal",value:"'hex'"},{name:"literal",value:"'rgb'"},{name:"literal",value:"'hsl'"}]},description:"",defaultValue:{value:"'hex'",computed:!1}},presets:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:`[\r
  '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3',\r
  '#FF69B4', '#FF1493', '#00CED1', '#00FA9A', '#FFD700', '#FF6347', '#8A2BE2'\r
]`,computed:!1}},disabledAlpha:{required:!1,tsType:{name:"boolean"},description:""},indicatorType:{required:!1,tsType:{name:"union",raw:"'circle' | 'cross'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'cross'"}]},description:"Type of indicator for selected color on canvas",defaultValue:{value:"'circle'",computed:!1}},showHexInput:{required:!1,tsType:{name:"boolean"},description:"Show hex color input field in popup",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(color: string, colorValue: ColorValue) => void",signature:{arguments:[{type:{name:"string"},name:"color"},{type:{name:"ColorValue"},name:"colorValue"}],return:{name:"void"}}},description:""},onFormatChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(format: 'hex' | 'rgb' | 'hsl') => void",signature:{arguments:[{type:{name:"union",raw:"'hex' | 'rgb' | 'hsl'",elements:[{name:"literal",value:"'hex'"},{name:"literal",value:"'rgb'"},{name:"literal",value:"'hsl'"}]},name:"format"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Ne={title:"Atoms/ColorPicker",component:m,parameters:{layout:"centered",docs:{description:{component:"A ColorPicker component for selecting colors with support for multiple formats, presets, and custom input. Features HSL color space picker and format conversion."}}},argTypes:{size:{control:"select",options:["small","default","large"],description:"Size of the color picker trigger"},format:{control:"select",options:["hex","rgb","hsl"],description:"Color format for display and output"},disabled:{control:"boolean",description:"Whether the color picker is disabled"},allowClear:{control:"boolean",description:"Show clear button to reset color"},showText:{control:"boolean",description:"Show text input alongside color block"},disabledAlpha:{control:"boolean",description:"Disable alpha/transparency channel"},indicatorType:{control:"select",options:["circle","cross"],description:"Type of indicator for selected color on canvas"}}},M={args:{defaultValue:"#1677ff"}},R={args:{defaultValue:"#ff6b6b",showText:!0},parameters:{docs:{description:{story:"ColorPicker with text input to manually enter color values."}}}},L={render:()=>e.jsxs("div",{className:"color-picker-demo",children:[e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"Small"}),e.jsx(m,{size:"small",defaultValue:"#ff0000",showText:!0})]}),e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"Default"}),e.jsx(m,{size:"default",defaultValue:"#00ff00",showText:!0})]}),e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"Large"}),e.jsx(m,{size:"large",defaultValue:"#0000ff",showText:!0})]})]}),args:{},parameters:{docs:{description:{story:"Different size variants of the color picker."}}}},z={render:()=>e.jsxs("div",{className:"color-picker-demo",children:[e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"HEX Format"}),e.jsx(m,{defaultValue:"#ff6b6b",format:"hex",showText:!0})]}),e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"RGB Format"}),e.jsx(m,{defaultValue:"#4ecdc4",format:"rgb",showText:!0})]}),e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"HSL Format"}),e.jsx(m,{defaultValue:"#45b7d1",format:"hsl",showText:!0})]})]}),args:{},parameters:{docs:{description:{story:"ColorPicker with different output formats: HEX, RGB, and HSL."}}}},D={args:{defaultValue:"#ff6b6b",allowClear:!0,showText:!0},parameters:{docs:{description:{story:"ColorPicker with clear button to reset the selected color."}}}},G={args:{defaultValue:"#9ca3af",disabled:!0,showText:!0},parameters:{docs:{description:{story:"Disabled color picker that cannot be interacted with."}}}},A={args:{defaultValue:"#1677ff",showText:!0,presets:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#9e9e9e","#607d8b","#000000"]},parameters:{docs:{description:{story:"ColorPicker with custom preset colors for quick selection."}}}},q={args:{defaultValue:"#1677ff",showText:!0,presets:[]},parameters:{docs:{description:{story:"ColorPicker without preset colors, showing only the picker interface."}}}},W={render:()=>{const[r,s]=c.useState("#1677ff"),[o,n]=c.useState("hex");return e.jsxs("div",{className:"color-picker-controlled",children:[e.jsx("div",{className:"color-picker-controlled__section",children:e.jsx(m,{value:r,format:o,showText:!0,allowClear:!0,onChange:i=>s(i),onFormatChange:n})}),e.jsxs("div",{className:"color-picker-controlled__info",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Selected Color:"})," ",r||"(none)"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Format:"})," ",o.toUpperCase()]})]}),e.jsxs("div",{className:"color-picker-controlled__buttons",children:[e.jsx("button",{onClick:()=>s("#ff0000"),children:"Red"}),e.jsx("button",{onClick:()=>s("#00ff00"),children:"Green"}),e.jsx("button",{onClick:()=>s("#0000ff"),children:"Blue"}),e.jsx("button",{onClick:()=>s(""),children:"Clear"})]}),e.jsxs("div",{className:"color-picker-controlled__format-buttons",children:[e.jsx("button",{onClick:()=>n("hex"),className:o==="hex"?"active":"",children:"HEX"}),e.jsx("button",{onClick:()=>n("rgb"),className:o==="rgb"?"active":"",children:"RGB"}),e.jsx("button",{onClick:()=>n("hsl"),className:o==="hsl"?"active":"",children:"HSL"})]})]})},args:{},parameters:{docs:{description:{story:"Controlled ColorPicker with external state management and format switching."}}}},O={args:{defaultValue:"#ff6b6b",showText:!1},parameters:{docs:{description:{story:"ColorPicker showing only the color block without text input."}}}},X={args:{defaultValue:"#1677ff",showText:!0,presets:["#1890ff","#52c41a","#1677ff","#faad14","#ff4d4f","#722ed1","#eb2f96","#13c2c2","#fa8c16","#a0d911"]},parameters:{docs:{description:{story:"ColorPicker with brand-specific color presets."}}}},U={render:()=>{const[r,s]=c.useState("No color selected");return e.jsxs("div",{className:"color-picker-callback",children:[e.jsx("div",{className:"color-picker-callback__section",children:e.jsx(m,{defaultValue:"#1677ff",showText:!0,onChange:(o,n)=>{s(`
                Color: ${o}
                HEX: ${n.hex}
                RGB: rgb(${n.rgb.r}, ${n.rgb.g}, ${n.rgb.b})
                HSL: hsl(${n.hsl.h}, ${n.hsl.s}%, ${n.hsl.l}%)
              `)}})}),e.jsx("div",{className:"color-picker-callback__info",children:e.jsx("pre",{children:r})})]})},args:{},parameters:{docs:{description:{story:"ColorPicker demonstrating the onChange callback with color value details."}}}},Y={render:()=>e.jsxs("div",{className:"color-picker-demo",children:[e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"Circle Indicator"}),e.jsx(m,{defaultValue:"#ff6b6b",showText:!0,indicatorType:"circle"})]}),e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"Cross Indicator"}),e.jsx(m,{defaultValue:"#4ecdc4",showText:!0,indicatorType:"cross"})]})]}),args:{},parameters:{docs:{description:{story:"ColorPicker with different indicator types for showing the selected color position on the canvas. Circle provides a classic look while cross offers better precision."}}}},J={args:{defaultValue:"#1677ff",showText:!0,indicatorType:"circle"},parameters:{docs:{description:{story:"ColorPicker with circle indicator (default). The circle indicator provides a classic, friendly appearance."}}}},K={args:{defaultValue:"#1677ff",showText:!0,indicatorType:"cross"},parameters:{docs:{description:{story:"ColorPicker with cross indicator. The cross indicator offers better precision for selecting exact color positions."}}}},Q={args:{defaultValue:"#1677ff",showText:!0,showHexInput:!0},parameters:{docs:{description:{story:"ColorPicker with hex input field in the dropdown panel. Users can type hex color codes directly (e.g., #FF0000 or FF0000) and the color updates automatically as they type."}}}},Z={render:()=>{const[r,s]=c.useState("#ff6b6b");return e.jsxs("div",{className:"color-picker-controlled",children:[e.jsx("div",{className:"color-picker-controlled__section",children:e.jsx(m,{value:r,showText:!0,showHexInput:!0,allowClear:!0,onChange:o=>s(o)})}),e.jsxs("div",{className:"color-picker-controlled__info",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Selected Color:"})," ",r||"(none)"]}),e.jsx("div",{className:"color-preview",style:{background:r},children:"Color Preview"})]}),e.jsxs("div",{className:"color-picker-controlled__buttons",children:[e.jsx("button",{onClick:()=>s("#E74C3C"),children:"Red"}),e.jsx("button",{onClick:()=>s("#2ECC71"),children:"Green"}),e.jsx("button",{onClick:()=>s("#3498DB"),children:"Blue"}),e.jsx("button",{onClick:()=>s("#F39C12"),children:"Orange"}),e.jsx("button",{onClick:()=>s("#9B59B6"),children:"Purple"})]}),e.jsx("div",{className:"color-picker-hint",children:e.jsx("p",{children:"💡 Try typing hex codes in the dropdown: FF0000, 00FF00, 0000FF, FFA500, etc."})})]})},args:{},parameters:{docs:{description:{story:"Interactive demonstration of hex input feature. Type hex color codes (with or without #) directly into the input field in the dropdown to see real-time color updates."}}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '#1677ff'
  }
}`,...M.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '#ff6b6b',
    showText: true
  },
  parameters: {
    docs: {
      description: {
        story: 'ColorPicker with text input to manually enter color values.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="color-picker-demo">\r
      <div className="color-picker-demo__section">\r
        <h4>Small</h4>\r
        <ColorPicker size="small" defaultValue="#ff0000" showText />\r
      </div>\r
      \r
      <div className="color-picker-demo__section">\r
        <h4>Default</h4>\r
        <ColorPicker size="default" defaultValue="#00ff00" showText />\r
      </div>\r
      \r
      <div className="color-picker-demo__section">\r
        <h4>Large</h4>\r
        <ColorPicker size="large" defaultValue="#0000ff" showText />\r
      </div>\r
    </div>,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the color picker.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="color-picker-demo">\r
      <div className="color-picker-demo__section">\r
        <h4>HEX Format</h4>\r
        <ColorPicker defaultValue="#ff6b6b" format="hex" showText />\r
      </div>\r
      \r
      <div className="color-picker-demo__section">\r
        <h4>RGB Format</h4>\r
        <ColorPicker defaultValue="#4ecdc4" format="rgb" showText />\r
      </div>\r
      \r
      <div className="color-picker-demo__section">\r
        <h4>HSL Format</h4>\r
        <ColorPicker defaultValue="#45b7d1" format="hsl" showText />\r
      </div>\r
    </div>,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'ColorPicker with different output formats: HEX, RGB, and HSL.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '#ff6b6b',
    allowClear: true,
    showText: true
  },
  parameters: {
    docs: {
      description: {
        story: 'ColorPicker with clear button to reset the selected color.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '#9ca3af',
    disabled: true,
    showText: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled color picker that cannot be interacted with.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '#1677ff',
    showText: true,
    presets: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b', '#000000']
  },
  parameters: {
    docs: {
      description: {
        story: 'ColorPicker with custom preset colors for quick selection.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '#1677ff',
    showText: true,
    presets: []
  },
  parameters: {
    docs: {
      description: {
        story: 'ColorPicker without preset colors, showing only the picker interface.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#1677ff');
    const [format, setFormat] = useState<'hex' | 'rgb' | 'hsl'>('hex');
    return <div className="color-picker-controlled">\r
        <div className="color-picker-controlled__section">\r
          <ColorPicker value={color} format={format} showText allowClear onChange={newColor => setColor(newColor)} onFormatChange={setFormat} />\r
        </div>\r
        \r
        <div className="color-picker-controlled__info">\r
          <div><strong>Selected Color:</strong> {color || '(none)'}</div>\r
          <div><strong>Format:</strong> {format.toUpperCase()}</div>\r
        </div>\r
        \r
        <div className="color-picker-controlled__buttons">\r
          <button onClick={() => setColor('#ff0000')}>\r
            Red\r
          </button>\r
          <button onClick={() => setColor('#00ff00')}>\r
            Green\r
          </button>\r
          <button onClick={() => setColor('#0000ff')}>\r
            Blue\r
          </button>\r
          <button onClick={() => setColor('')}>\r
            Clear\r
          </button>\r
        </div>\r
        \r
        <div className="color-picker-controlled__format-buttons">\r
          <button onClick={() => setFormat('hex')} className={format === 'hex' ? 'active' : ''}>\r
            HEX\r
          </button>\r
          <button onClick={() => setFormat('rgb')} className={format === 'rgb' ? 'active' : ''}>\r
            RGB\r
          </button>\r
          <button onClick={() => setFormat('hsl')} className={format === 'hsl' ? 'active' : ''}>\r
            HSL\r
          </button>\r
        </div>\r
      </div>;
  },
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Controlled ColorPicker with external state management and format switching.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '#ff6b6b',
    showText: false
  },
  parameters: {
    docs: {
      description: {
        story: 'ColorPicker showing only the color block without text input.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '#1677ff',
    showText: true,
    presets: ['#1890ff',
    // Primary Blue
    '#52c41a',
    // Success Green
    '#1677ff',
    // Info Blue
    '#faad14',
    // Warning Orange
    '#ff4d4f',
    // Error Red
    '#722ed1',
    // Purple
    '#eb2f96',
    // Magenta
    '#13c2c2',
    // Cyan
    '#fa8c16',
    // Orange
    '#a0d911' // Lime
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'ColorPicker with brand-specific color presets.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [colorInfo, setColorInfo] = useState<string>('No color selected');
    return <div className="color-picker-callback">\r
        <div className="color-picker-callback__section">\r
          <ColorPicker defaultValue="#1677ff" showText onChange={(color, colorValue) => {
          setColorInfo(\`
                Color: \${color}
                HEX: \${colorValue.hex}
                RGB: rgb(\${colorValue.rgb.r}, \${colorValue.rgb.g}, \${colorValue.rgb.b})
                HSL: hsl(\${colorValue.hsl.h}, \${colorValue.hsl.s}%, \${colorValue.hsl.l}%)
              \`);
        }} />\r
        </div>\r
        \r
        <div className="color-picker-callback__info">\r
          <pre>{colorInfo}</pre>\r
        </div>\r
      </div>;
  },
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'ColorPicker demonstrating the onChange callback with color value details.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="color-picker-demo">\r
      <div className="color-picker-demo__section">\r
        <h4>Circle Indicator</h4>\r
        <ColorPicker defaultValue="#ff6b6b" showText indicatorType="circle" />\r
      </div>\r
      \r
      <div className="color-picker-demo__section">\r
        <h4>Cross Indicator</h4>\r
        <ColorPicker defaultValue="#4ecdc4" showText indicatorType="cross" />\r
      </div>\r
    </div>,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'ColorPicker with different indicator types for showing the selected color position on the canvas. Circle provides a classic look while cross offers better precision.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '#1677ff',
    showText: true,
    indicatorType: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'ColorPicker with circle indicator (default). The circle indicator provides a classic, friendly appearance.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '#1677ff',
    showText: true,
    indicatorType: 'cross'
  },
  parameters: {
    docs: {
      description: {
        story: 'ColorPicker with cross indicator. The cross indicator offers better precision for selecting exact color positions.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '#1677ff',
    showText: true,
    showHexInput: true
  },
  parameters: {
    docs: {
      description: {
        story: 'ColorPicker with hex input field in the dropdown panel. Users can type hex color codes directly (e.g., #FF0000 or FF0000) and the color updates automatically as they type.'
      }
    }
  }
}`,...Q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#ff6b6b');
    return <div className="color-picker-controlled">\r
        <div className="color-picker-controlled__section">\r
          <ColorPicker value={color} showText showHexInput={true} allowClear onChange={newColor => setColor(newColor)} />\r
        </div>\r
        \r
        <div className="color-picker-controlled__info">\r
          <div><strong>Selected Color:</strong> {color || '(none)'}</div>\r
          <div className="color-preview" style={{
          background: color
        }}>\r
            Color Preview\r
          </div>\r
        </div>\r
        \r
        <div className="color-picker-controlled__buttons">\r
          <button onClick={() => setColor('#E74C3C')}>\r
            Red\r
          </button>\r
          <button onClick={() => setColor('#2ECC71')}>\r
            Green\r
          </button>\r
          <button onClick={() => setColor('#3498DB')}>\r
            Blue\r
          </button>\r
          <button onClick={() => setColor('#F39C12')}>\r
            Orange\r
          </button>\r
          <button onClick={() => setColor('#9B59B6')}>\r
            Purple\r
          </button>\r
        </div>\r
        \r
        <div className="color-picker-hint">\r
          <p>\r
            💡 Try typing hex codes in the dropdown: FF0000, 00FF00, 0000FF, FFA500, etc.\r
          </p>\r
        </div>\r
      </div>;
  },
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration of hex input feature. Type hex color codes (with or without #) directly into the input field in the dropdown to see real-time color updates.'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}};const Se=["Default","WithTextInput","Sizes","ColorFormats","WithClearButton","Disabled","CustomPresets","NoPresets","Controlled","OnlyColorBlock","BrandColors","WithCallback","IndicatorTypes","CircleIndicator","CrossIndicator","WithHexInput","HexInputCustomColors"];export{X as BrandColors,J as CircleIndicator,z as ColorFormats,W as Controlled,K as CrossIndicator,A as CustomPresets,M as Default,G as Disabled,Z as HexInputCustomColors,Y as IndicatorTypes,q as NoPresets,O as OnlyColorBlock,L as Sizes,U as WithCallback,D as WithClearButton,Q as WithHexInput,R as WithTextInput,Se as __namedExportsOrder,Ne as default};
