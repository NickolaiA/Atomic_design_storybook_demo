import{r as n,j as e}from"./iframe-CY-Mz7KS.js";import"./preload-helper-PPVm8Dsz.js";const S=r=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:{r:0,g:0,b:0}},ne=(r,t,o)=>"#"+((1<<24)+(r<<16)+(t<<8)+o).toString(16).slice(1),P=(r,t,o)=>{r/=255,t/=255,o/=255;const c=Math.max(r,t,o),i=Math.min(r,t,o);let p=0,m=0,d=(c+i)/2;if(c===i)p=m=0;else{const u=c-i;switch(m=d>.5?u/(2-c-i):u/(c+i),c){case r:p=(t-o)/u+(t<o?6:0);break;case t:p=(o-r)/u+2;break;case o:p=(r-t)/u+4;break}p/=6}return{h:Math.round(p*360),s:Math.round(m*100),l:Math.round(d*100)}},de=(r,t,o)=>{r/=360,t/=100,o/=100;const c=(d,u,h)=>(h<0&&(h+=1),h>1&&(h-=1),h<1/6?d+(u-d)*6*h:h<1/2?u:h<2/3?d+(u-d)*(2/3-h)*6:d);let i,p,m;if(t===0)i=p=m=o;else{const d=o<.5?o*(1+t):o+t-o*t,u=2*o-d;i=c(u,d,r+1/3),p=c(u,d,r),m=c(u,d,r-1/3)}return{r:Math.round(i*255),g:Math.round(p*255),b:Math.round(m*255)}},$=(r,t)=>{const o=S(r);switch(t){case"rgb":return`rgb(${o.r}, ${o.g}, ${o.b})`;case"hsl":const c=P(o.r,o.g,o.b);return`hsl(${c.h}, ${c.s}%, ${c.l}%)`;default:return r}},le=(r,t)=>{const o=r.getContext("2d");if(!o){console.warn("ColorPicker: Canvas context not available");return}const{width:c,height:i}=r;if(c===0||i===0){console.warn("ColorPicker: Canvas has no dimensions");return}o.clearRect(0,0,c,i);const p=de(t,100,50);o.fillStyle=`rgb(${p.r}, ${p.g}, ${p.b})`,o.fillRect(0,0,c,i);const m=o.createLinearGradient(0,0,c,0);m.addColorStop(0,"rgba(255, 255, 255, 1)"),m.addColorStop(1,"rgba(255, 255, 255, 0)"),o.fillStyle=m,o.fillRect(0,0,c,i);const d=o.createLinearGradient(0,0,0,i);d.addColorStop(0,"rgba(0, 0, 0, 0)"),d.addColorStop(1,"rgba(0, 0, 0, 1)"),o.fillStyle=d,o.fillRect(0,0,c,i)},ie=(r,t,o,c)=>{!r||!("beginPath"in r)||(c==="circle"?(r.beginPath(),r.arc(t,o,6,0,2*Math.PI),r.strokeStyle="#ffffff",r.lineWidth=2,r.stroke(),r.beginPath(),r.arc(t,o,6,0,2*Math.PI),r.strokeStyle="#000000",r.lineWidth=1,r.stroke()):(r.strokeStyle="#ffffff",r.lineWidth=3,r.beginPath(),r.moveTo(t-8,o),r.lineTo(t+8,o),r.moveTo(t,o-8),r.lineTo(t,o+8),r.stroke(),r.strokeStyle="#000000",r.lineWidth=1,r.beginPath(),r.moveTo(t-8,o),r.lineTo(t+8,o),r.moveTo(t,o-8),r.lineTo(t,o+8),r.stroke()))},g=({value:r,defaultValue:t="#1677ff",disabled:o=!1,allowClear:c=!1,showText:i=!0,size:p="default",format:m="hex",presets:d=["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#4B0082","#9400D3","#FF69B4","#FF1493","#00CED1","#00FA9A","#FFD700","#FF6347","#8A2BE2"],indicatorType:u="circle",onChange:h,onFormatChange:oe,className:ue})=>{const[b,V]=n.useState(r??t),[T,fe]=n.useState(m),[k,I]=n.useState(!1),[se,te]=n.useState(!1),ae=r??t,K=S(ae),Q=P(K.r,K.g,K.b),[C,M]=n.useState(Q.h),[w,y]=n.useState(Q.s),[_,j]=n.useState(Q.l),[pe,E]=n.useState($(ae,m)),Z=n.useRef(null),ee=n.useRef(null),N=n.useRef(null);n.useEffect(()=>{if(r!==void 0){const s=S(r),a=P(s.r,s.g,s.b);M(a.h),y(a.s),j(a.l)}},[r]),n.useEffect(()=>{E($(b,T))},[b,T]),n.useEffect(()=>{if(r===void 0){const s=de(C,w,_),a=ne(s.r,s.g,s.b);V(a)}},[C,w,_,r]),n.useEffect(()=>{const s=N.current;if(s&&k){const a=setTimeout(()=>{le(s,C);const l=s.getContext("2d");if(l){const{width:f,height:v}=s,x=w/100*f,re=(100-_)/100*v;ie(l,x,re,u)}},10);return()=>clearTimeout(a)}},[k,C,w,_,u]),n.useEffect(()=>{const s=N.current;if(s&&k){le(s,C);const a=s.getContext("2d");if(a){const{width:l,height:f}=s,v=w/100*l,x=(100-_)/100*f;ie(a,v,x,u)}}},[C,w,_,k,u]);const F=n.useCallback(s=>{V(s);const a=S(s),l=P(a.r,a.g,a.b);M(l.h),y(l.s),j(l.l);const f={hex:s,rgb:a,hsl:l};h?.($(s,T),f)},[T,h]),ce=n.useCallback(s=>{const a=N.current?.getBoundingClientRect();if(a){const l=Math.max(0,Math.min(s.clientX-a.left,a.width)),f=Math.max(0,Math.min(s.clientY-a.top,a.height)),v=l/a.width*100,x=100-f/a.height*100;y(Math.max(0,Math.min(100,v))),j(Math.max(0,Math.min(100,x)))}},[]),me=n.useCallback(s=>{F(s),I(!1)},[F]),he=n.useCallback(s=>{const a=s.target.value;if(E(a),a.match(/^#[0-9A-F]{6}$/i))F(a);else if(a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)){const l=a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);if(l){const f=ne(parseInt(l[1]),parseInt(l[2]),parseInt(l[3]));F(f)}}},[F]),ge=n.useCallback(s=>{fe(s),E($(b,s)),oe?.(s)},[b,oe]),be=n.useCallback(()=>{const s="#ffffff";V(s),E("");const a=S(s),l=P(a.r,a.g,a.b);M(l.h),y(l.s),j(l.l),I(!1),h?.("",{hex:"",rgb:{r:0,g:0,b:0},hsl:{h:0,s:0,l:0}})},[h]);n.useEffect(()=>{if(!se)return;const s=l=>{const f=N.current?.getBoundingClientRect();if(f){const v=Math.max(0,Math.min(l.clientX-f.left,f.width)),x=Math.max(0,Math.min(l.clientY-f.top,f.height)),re=v/f.width*100,Ce=100-x/f.height*100;y(Math.max(0,Math.min(100,re))),j(Math.max(0,Math.min(100,Ce)))}},a=()=>{te(!1)};return document.addEventListener("mousemove",s),document.addEventListener("mouseup",a),()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",a)}},[se]),n.useEffect(()=>{const s=a=>{Z.current&&!Z.current.contains(a.target)&&ee.current&&!ee.current.contains(a.target)&&I(!1)};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[]),n.useEffect(()=>{r!==void 0&&V(r)},[r]);const ke=["color-picker",`color-picker--${p}`,k&&"color-picker--open",o&&"color-picker--disabled",ue].filter(Boolean).join(" ");return e.jsxs("div",{className:ke,children:[e.jsxs("div",{ref:Z,className:"color-picker__trigger",onClick:()=>!o&&I(!k),children:[e.jsx("div",{className:"color-picker__color-block","data-color":b,style:{"--current-color":b}}),i&&e.jsx("input",{type:"text",className:"color-picker__input",value:pe,onChange:he,disabled:o,placeholder:"Enter color..."}),c&&b&&!o&&e.jsx("button",{type:"button",className:"color-picker__clear",onClick:s=>{s.stopPropagation(),be()},children:"×"}),e.jsx("div",{className:"color-picker__arrow",children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",children:e.jsx("path",{d:"M6 8l4-4H2l4 4z"})})})]}),k&&e.jsx("div",{ref:ee,className:"color-picker__dropdown",children:e.jsxs("div",{className:"color-picker__panel",children:[e.jsx("div",{className:"color-picker__saturation-lightness",children:e.jsx("canvas",{ref:N,width:200,height:150,className:"color-picker__canvas",onMouseDown:s=>{te(!0),ce(s)},onClick:ce})}),e.jsx("div",{className:"color-picker__hue-slider",children:e.jsx("input",{type:"range",min:"0",max:"360",value:C,onChange:s=>M(parseInt(s.target.value)),className:"color-picker__slider","aria-label":"Hue",title:"Adjust hue"})}),e.jsx("div",{className:"color-picker__format-selector",children:["hex","rgb","hsl"].map(s=>e.jsx("button",{className:`color-picker__format-btn ${T===s?"color-picker__format-btn--active":""}`,onClick:()=>ge(s),children:s.toUpperCase()},s))}),d.length>0&&e.jsxs("div",{className:"color-picker__presets",children:[e.jsx("div",{className:"color-picker__presets-label",children:"Presets"}),e.jsx("div",{className:"color-picker__presets-grid",children:d.map((s,a)=>e.jsx("div",{className:"color-picker__preset","data-color":s,onClick:()=>me(s),title:s,style:{"--preset-color":s}},a))})]})]})})]})};g.__docgenInfo={description:"",methods:[],displayName:"ColorPicker",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#1677ff'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},format:{required:!1,tsType:{name:"union",raw:"'hex' | 'rgb' | 'hsl'",elements:[{name:"literal",value:"'hex'"},{name:"literal",value:"'rgb'"},{name:"literal",value:"'hsl'"}]},description:"",defaultValue:{value:"'hex'",computed:!1}},presets:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:`[\r
  '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3',\r
  '#FF69B4', '#FF1493', '#00CED1', '#00FA9A', '#FFD700', '#FF6347', '#8A2BE2'\r
]`,computed:!1}},disabledAlpha:{required:!1,tsType:{name:"boolean"},description:""},indicatorType:{required:!1,tsType:{name:"union",raw:"'circle' | 'cross'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'cross'"}]},description:"Type of indicator for selected color on canvas",defaultValue:{value:"'circle'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(color: string, colorValue: ColorValue) => void",signature:{arguments:[{type:{name:"string"},name:"color"},{type:{name:"ColorValue"},name:"colorValue"}],return:{name:"void"}}},description:""},onFormatChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(format: 'hex' | 'rgb' | 'hsl') => void",signature:{arguments:[{type:{name:"union",raw:"'hex' | 'rgb' | 'hsl'",elements:[{name:"literal",value:"'hex'"},{name:"literal",value:"'rgb'"},{name:"literal",value:"'hsl'"}]},name:"format"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const we={title:"Atoms/ColorPicker",component:g,parameters:{layout:"centered",docs:{description:{component:"A ColorPicker component for selecting colors with support for multiple formats, presets, and custom input. Features HSL color space picker and format conversion."}}},argTypes:{size:{control:"select",options:["small","default","large"],description:"Size of the color picker trigger"},format:{control:"select",options:["hex","rgb","hsl"],description:"Color format for display and output"},disabled:{control:"boolean",description:"Whether the color picker is disabled"},allowClear:{control:"boolean",description:"Show clear button to reset color"},showText:{control:"boolean",description:"Show text input alongside color block"},disabledAlpha:{control:"boolean",description:"Disable alpha/transparency channel"},indicatorType:{control:"select",options:["circle","cross"],description:"Type of indicator for selected color on canvas"}}},B={args:{defaultValue:"#1677ff"}},R={args:{defaultValue:"#ff6b6b",showText:!0},parameters:{docs:{description:{story:"ColorPicker with text input to manually enter color values."}}}},L={render:()=>e.jsxs("div",{className:"color-picker-demo",children:[e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"Small"}),e.jsx(g,{size:"small",defaultValue:"#ff0000",showText:!0})]}),e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"Default"}),e.jsx(g,{size:"default",defaultValue:"#00ff00",showText:!0})]}),e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"Large"}),e.jsx(g,{size:"large",defaultValue:"#0000ff",showText:!0})]})]}),args:{},parameters:{docs:{description:{story:"Different size variants of the color picker."}}}},z={render:()=>e.jsxs("div",{className:"color-picker-demo",children:[e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"HEX Format"}),e.jsx(g,{defaultValue:"#ff6b6b",format:"hex",showText:!0})]}),e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"RGB Format"}),e.jsx(g,{defaultValue:"#4ecdc4",format:"rgb",showText:!0})]}),e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"HSL Format"}),e.jsx(g,{defaultValue:"#45b7d1",format:"hsl",showText:!0})]})]}),args:{},parameters:{docs:{description:{story:"ColorPicker with different output formats: HEX, RGB, and HSL."}}}},H={args:{defaultValue:"#ff6b6b",allowClear:!0,showText:!0},parameters:{docs:{description:{story:"ColorPicker with clear button to reset the selected color."}}}},D={args:{defaultValue:"#9ca3af",disabled:!0,showText:!0},parameters:{docs:{description:{story:"Disabled color picker that cannot be interacted with."}}}},G={args:{defaultValue:"#1677ff",showText:!0,presets:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#9e9e9e","#607d8b","#000000"]},parameters:{docs:{description:{story:"ColorPicker with custom preset colors for quick selection."}}}},q={args:{defaultValue:"#1677ff",showText:!0,presets:[]},parameters:{docs:{description:{story:"ColorPicker without preset colors, showing only the picker interface."}}}},A={render:()=>{const[r,t]=n.useState("#1677ff"),[o,c]=n.useState("hex");return e.jsxs("div",{className:"color-picker-controlled",children:[e.jsx("div",{className:"color-picker-controlled__section",children:e.jsx(g,{value:r,format:o,showText:!0,allowClear:!0,onChange:i=>t(i),onFormatChange:c})}),e.jsxs("div",{className:"color-picker-controlled__info",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Selected Color:"})," ",r||"(none)"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Format:"})," ",o.toUpperCase()]})]}),e.jsxs("div",{className:"color-picker-controlled__buttons",children:[e.jsx("button",{onClick:()=>t("#ff0000"),children:"Red"}),e.jsx("button",{onClick:()=>t("#00ff00"),children:"Green"}),e.jsx("button",{onClick:()=>t("#0000ff"),children:"Blue"}),e.jsx("button",{onClick:()=>t(""),children:"Clear"})]}),e.jsxs("div",{className:"color-picker-controlled__format-buttons",children:[e.jsx("button",{onClick:()=>c("hex"),className:o==="hex"?"active":"",children:"HEX"}),e.jsx("button",{onClick:()=>c("rgb"),className:o==="rgb"?"active":"",children:"RGB"}),e.jsx("button",{onClick:()=>c("hsl"),className:o==="hsl"?"active":"",children:"HSL"})]})]})},args:{},parameters:{docs:{description:{story:"Controlled ColorPicker with external state management and format switching."}}}},W={args:{defaultValue:"#ff6b6b",showText:!1},parameters:{docs:{description:{story:"ColorPicker showing only the color block without text input."}}}},X={args:{defaultValue:"#1677ff",showText:!0,presets:["#1890ff","#52c41a","#1677ff","#faad14","#ff4d4f","#722ed1","#eb2f96","#13c2c2","#fa8c16","#a0d911"]},parameters:{docs:{description:{story:"ColorPicker with brand-specific color presets."}}}},O={render:()=>{const[r,t]=n.useState("No color selected");return e.jsxs("div",{className:"color-picker-callback",children:[e.jsx("div",{className:"color-picker-callback__section",children:e.jsx(g,{defaultValue:"#1677ff",showText:!0,onChange:(o,c)=>{t(`
                Color: ${o}
                HEX: ${c.hex}
                RGB: rgb(${c.rgb.r}, ${c.rgb.g}, ${c.rgb.b})
                HSL: hsl(${c.hsl.h}, ${c.hsl.s}%, ${c.hsl.l}%)
              `)}})}),e.jsx("div",{className:"color-picker-callback__info",children:e.jsx("pre",{children:r})})]})},args:{},parameters:{docs:{description:{story:"ColorPicker demonstrating the onChange callback with color value details."}}}},U={render:()=>e.jsxs("div",{className:"color-picker-demo",children:[e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"Circle Indicator"}),e.jsx(g,{defaultValue:"#ff6b6b",showText:!0,indicatorType:"circle"})]}),e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"Cross Indicator"}),e.jsx(g,{defaultValue:"#4ecdc4",showText:!0,indicatorType:"cross"})]})]}),args:{},parameters:{docs:{description:{story:"ColorPicker with different indicator types for showing the selected color position on the canvas. Circle provides a classic look while cross offers better precision."}}}},Y={args:{defaultValue:"#1677ff",showText:!0,indicatorType:"circle"},parameters:{docs:{description:{story:"ColorPicker with circle indicator (default). The circle indicator provides a classic, friendly appearance."}}}},J={args:{defaultValue:"#1677ff",showText:!0,indicatorType:"cross"},parameters:{docs:{description:{story:"ColorPicker with cross indicator. The cross indicator offers better precision for selecting exact color positions."}}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '#1677ff'
  }
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};const _e=["Default","WithTextInput","Sizes","ColorFormats","WithClearButton","Disabled","CustomPresets","NoPresets","Controlled","OnlyColorBlock","BrandColors","WithCallback","IndicatorTypes","CircleIndicator","CrossIndicator"];export{X as BrandColors,Y as CircleIndicator,z as ColorFormats,A as Controlled,J as CrossIndicator,G as CustomPresets,B as Default,D as Disabled,U as IndicatorTypes,q as NoPresets,W as OnlyColorBlock,L as Sizes,O as WithCallback,H as WithClearButton,R as WithTextInput,_e as __namedExportsOrder,we as default};
