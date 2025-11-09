import{r as c,j as e}from"./iframe-CdBaqdCg.js";import"./preload-helper-PPVm8Dsz.js";const q=s=>{const l=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s);return l?{r:parseInt(l[1],16),g:parseInt(l[2],16),b:parseInt(l[3],16)}:{r:0,g:0,b:0}},re=(s,l,o)=>"#"+((1<<24)+(s<<16)+(l<<8)+o).toString(16).slice(1),z=(s,l,o)=>{s/=255,l/=255,o/=255;const a=Math.max(s,l,o),i=Math.min(s,l,o);let u=0,f=0,d=(a+i)/2;if(a===i)u=f=0;else{const p=a-i;switch(f=d>.5?p/(2-a-i):p/(a+i),a){case s:u=(l-o)/p+(l<o?6:0);break;case l:u=(o-s)/p+2;break;case o:u=(s-l)/p+4;break}u/=6}return{h:Math.round(u*360),s:Math.round(f*100),l:Math.round(d*100)}},te=(s,l,o)=>{s/=360,l/=100,o/=100;const a=(d,p,h)=>(h<0&&(h+=1),h>1&&(h-=1),h<1/6?d+(p-d)*6*h:h<1/2?p:h<2/3?d+(p-d)*(2/3-h)*6:d);let i,u,f;if(l===0)i=u=f=o;else{const d=o<.5?o*(1+l):o+l-o*l,p=2*o-d;i=a(p,d,s+1/3),u=a(p,d,s),f=a(p,d,s-1/3)}return{r:Math.round(i*255),g:Math.round(u*255),b:Math.round(f*255)}},P=(s,l)=>{const o=q(s);switch(l){case"rgb":return`rgb(${o.r}, ${o.g}, ${o.b})`;case"hsl":const a=z(o.r,o.g,o.b);return`hsl(${a.h}, ${a.s}%, ${a.l}%)`;default:return s}},oe=(s,l)=>{const o=s.getContext("2d");if(!o){console.warn("ColorPicker: Canvas context not available");return}const{width:a,height:i}=s;if(a===0||i===0){console.warn("ColorPicker: Canvas has no dimensions");return}o.clearRect(0,0,a,i);const u=te(l,100,50);o.fillStyle=`rgb(${u.r}, ${u.g}, ${u.b})`,o.fillRect(0,0,a,i);const f=o.createLinearGradient(0,0,a,0);f.addColorStop(0,"rgba(255, 255, 255, 1)"),f.addColorStop(1,"rgba(255, 255, 255, 0)"),o.fillStyle=f,o.fillRect(0,0,a,i);const d=o.createLinearGradient(0,0,0,i);d.addColorStop(0,"rgba(0, 0, 0, 0)"),d.addColorStop(1,"rgba(0, 0, 0, 1)"),o.fillStyle=d,o.fillRect(0,0,a,i)},m=({value:s,defaultValue:l="#1677ff",disabled:o=!1,allowClear:a=!1,showText:i=!0,size:u="default",format:f="hex",presets:d=["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#4B0082","#9400D3","#FF69B4","#FF1493","#00CED1","#00FA9A","#FFD700","#FF6347","#8A2BE2"],_disabledAlpha:p=!1,onChange:h,onFormatChange:Q,className:se})=>{const[b,F]=c.useState(s??l),[y,ae]=c.useState(f),[k,N]=c.useState(!1),Z=s??l,W=q(Z),X=z(W.r,W.g,W.b),[x,O]=c.useState(X.h),[v,U]=c.useState(X.s),[w,Y]=c.useState(X.l),[le,S]=c.useState(P(Z,f)),J=c.useRef(null),K=c.useRef(null),T=c.useRef(null);c.useEffect(()=>{if(s!==void 0){const r=q(s),t=z(r.r,r.g,r.b);O(t.h),U(t.s),Y(t.l)}},[s]),c.useEffect(()=>{S(P(b,y))},[b,y]),c.useEffect(()=>{if(s===void 0){const r=te(x,v,w),t=re(r.r,r.g,r.b);F(t)}},[x,v,w,s]),c.useEffect(()=>{const r=T.current;if(r&&k){const t=setTimeout(()=>{oe(r,x);const n=r.getContext("2d");if(n){const{width:g,height:_}=r,C=v/100*g,ee=(100-w)/100*_;n.beginPath(),n.arc(C,ee,6,0,2*Math.PI),n.strokeStyle="#ffffff",n.lineWidth=2,n.stroke(),n.beginPath(),n.arc(C,ee,6,0,2*Math.PI),n.strokeStyle="#000000",n.lineWidth=1,n.stroke()}},10);return()=>clearTimeout(t)}},[k,x,v,w]),c.useEffect(()=>{const r=T.current;if(r&&k){oe(r,x);const t=r.getContext("2d");if(t){const{width:n,height:g}=r,_=v/100*n,C=(100-w)/100*g;t.beginPath(),t.arc(_,C,6,0,2*Math.PI),t.strokeStyle="#ffffff",t.lineWidth=2,t.stroke(),t.beginPath(),t.arc(_,C,6,0,2*Math.PI),t.strokeStyle="#000000",t.lineWidth=1,t.stroke()}}},[x,v,w,k]);const j=c.useCallback(r=>{F(r);const t=q(r),n=z(t.r,t.g,t.b);O(n.h),U(n.s),Y(n.l);const g={hex:r,rgb:t,hsl:n};h?.(P(r,y),g)},[y,h]),ne=c.useCallback(r=>{j(r),N(!1)},[j]),ce=c.useCallback(r=>{const t=r.target.value;if(S(t),t.match(/^#[0-9A-F]{6}$/i))j(t);else if(t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)){const n=t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);if(n){const g=re(parseInt(n[1]),parseInt(n[2]),parseInt(n[3]));j(g)}}},[j]),ie=c.useCallback(r=>{ae(r),S(P(b,r)),Q?.(r)},[b,Q]),de=c.useCallback(()=>{F("#ffffff"),S(""),N(!1),h?.("",{hex:"",rgb:{r:0,g:0,b:0},hsl:{h:0,s:0,l:0}})},[h]);c.useEffect(()=>{const r=t=>{J.current&&!J.current.contains(t.target)&&K.current&&!K.current.contains(t.target)&&N(!1)};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[]),c.useEffect(()=>{s!==void 0&&F(s)},[s]);const ue=["color-picker",`color-picker--${u}`,k&&"color-picker--open",o&&"color-picker--disabled",se].filter(Boolean).join(" ");return e.jsxs("div",{className:ue,children:[e.jsxs("div",{ref:J,className:"color-picker__trigger",onClick:()=>!o&&N(!k),children:[e.jsx("div",{className:"color-picker__color-block","data-color":b,style:{"--current-color":b}}),i&&e.jsx("input",{type:"text",className:"color-picker__input",value:le,onChange:ce,disabled:o,placeholder:"Enter color..."}),a&&b&&!o&&e.jsx("button",{type:"button",className:"color-picker__clear",onClick:r=>{r.stopPropagation(),de()},children:"×"}),e.jsx("div",{className:"color-picker__arrow",children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",children:e.jsx("path",{d:"M6 8l4-4H2l4 4z"})})})]}),k&&e.jsx("div",{ref:K,className:"color-picker__dropdown",children:e.jsxs("div",{className:"color-picker__panel",children:[e.jsx("div",{className:"color-picker__saturation-lightness",children:e.jsx("canvas",{ref:T,width:200,height:150,className:"color-picker__canvas",onClick:r=>{const t=T.current?.getBoundingClientRect();if(t){const n=r.clientX-t.left,g=r.clientY-t.top,_=n/t.width*100,C=100-g/t.height*100;U(Math.max(0,Math.min(100,_))),Y(Math.max(0,Math.min(100,C)))}}})}),e.jsx("div",{className:"color-picker__hue-slider",children:e.jsx("input",{type:"range",min:"0",max:"360",value:x,onChange:r=>O(parseInt(r.target.value)),className:"color-picker__slider","aria-label":"Hue",title:"Adjust hue"})}),e.jsx("div",{className:"color-picker__format-selector",children:["hex","rgb","hsl"].map(r=>e.jsx("button",{className:`color-picker__format-btn ${y===r?"color-picker__format-btn--active":""}`,onClick:()=>ie(r),children:r.toUpperCase()},r))}),d.length>0&&e.jsxs("div",{className:"color-picker__presets",children:[e.jsx("div",{className:"color-picker__presets-label",children:"Presets"}),e.jsx("div",{className:"color-picker__presets-grid",children:d.map((r,t)=>e.jsx("div",{className:"color-picker__preset","data-color":r,onClick:()=>ne(r),title:r,style:{"--preset-color":r}},t))})]})]})})]})};m.__docgenInfo={description:"",methods:[],displayName:"ColorPicker",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#1677ff'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},format:{required:!1,tsType:{name:"union",raw:"'hex' | 'rgb' | 'hsl'",elements:[{name:"literal",value:"'hex'"},{name:"literal",value:"'rgb'"},{name:"literal",value:"'hsl'"}]},description:"",defaultValue:{value:"'hex'",computed:!1}},presets:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:`[\r
  '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3',\r
  '#FF69B4', '#FF1493', '#00CED1', '#00FA9A', '#FFD700', '#FF6347', '#8A2BE2'\r
]`,computed:!1}},disabledAlpha:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(color: string, colorValue: ColorValue) => void",signature:{arguments:[{type:{name:"string"},name:"color"},{type:{name:"ColorValue"},name:"colorValue"}],return:{name:"void"}}},description:""},onFormatChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(format: 'hex' | 'rgb' | 'hsl') => void",signature:{arguments:[{type:{name:"union",raw:"'hex' | 'rgb' | 'hsl'",elements:[{name:"literal",value:"'hex'"},{name:"literal",value:"'rgb'"},{name:"literal",value:"'hsl'"}]},name:"format"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},_disabledAlpha:{defaultValue:{value:"false",computed:!1},required:!1}}};const he={title:"Atoms/ColorPicker",component:m,parameters:{layout:"centered",docs:{description:{component:"A ColorPicker component for selecting colors with support for multiple formats, presets, and custom input. Features HSL color space picker and format conversion."}}},argTypes:{size:{control:"select",options:["small","default","large"],description:"Size of the color picker trigger"},format:{control:"select",options:["hex","rgb","hsl"],description:"Color format for display and output"},disabled:{control:"boolean",description:"Whether the color picker is disabled"},allowClear:{control:"boolean",description:"Show clear button to reset color"},showText:{control:"boolean",description:"Show text input alongside color block"},disabledAlpha:{control:"boolean",description:"Disable alpha/transparency channel"}}},V={args:{defaultValue:"#1677ff"}},$={args:{defaultValue:"#ff6b6b",showText:!0},parameters:{docs:{description:{story:"ColorPicker with text input to manually enter color values."}}}},B={render:()=>e.jsxs("div",{className:"color-picker-demo",children:[e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"Small"}),e.jsx(m,{size:"small",defaultValue:"#ff0000",showText:!0})]}),e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"Default"}),e.jsx(m,{size:"default",defaultValue:"#00ff00",showText:!0})]}),e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"Large"}),e.jsx(m,{size:"large",defaultValue:"#0000ff",showText:!0})]})]}),args:{},parameters:{docs:{description:{story:"Different size variants of the color picker."}}}},E={render:()=>e.jsxs("div",{className:"color-picker-demo",children:[e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"HEX Format"}),e.jsx(m,{defaultValue:"#ff6b6b",format:"hex",showText:!0})]}),e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"RGB Format"}),e.jsx(m,{defaultValue:"#4ecdc4",format:"rgb",showText:!0})]}),e.jsxs("div",{className:"color-picker-demo__section",children:[e.jsx("h4",{children:"HSL Format"}),e.jsx(m,{defaultValue:"#45b7d1",format:"hsl",showText:!0})]})]}),args:{},parameters:{docs:{description:{story:"ColorPicker with different output formats: HEX, RGB, and HSL."}}}},R={args:{defaultValue:"#ff6b6b",allowClear:!0,showText:!0},parameters:{docs:{description:{story:"ColorPicker with clear button to reset the selected color."}}}},I={args:{defaultValue:"#9ca3af",disabled:!0,showText:!0},parameters:{docs:{description:{story:"Disabled color picker that cannot be interacted with."}}}},H={args:{defaultValue:"#1677ff",showText:!0,presets:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#9e9e9e","#607d8b","#000000"]},parameters:{docs:{description:{story:"ColorPicker with custom preset colors for quick selection."}}}},L={args:{defaultValue:"#1677ff",showText:!0,presets:[]},parameters:{docs:{description:{story:"ColorPicker without preset colors, showing only the picker interface."}}}},M={render:()=>{const[s,l]=c.useState("#1677ff"),[o,a]=c.useState("hex");return e.jsxs("div",{className:"color-picker-controlled",children:[e.jsx("div",{className:"color-picker-controlled__section",children:e.jsx(m,{value:s,format:o,showText:!0,allowClear:!0,onChange:i=>l(i),onFormatChange:a})}),e.jsxs("div",{className:"color-picker-controlled__info",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Selected Color:"})," ",s||"(none)"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Format:"})," ",o.toUpperCase()]})]}),e.jsxs("div",{className:"color-picker-controlled__buttons",children:[e.jsx("button",{onClick:()=>l("#ff0000"),children:"Red"}),e.jsx("button",{onClick:()=>l("#00ff00"),children:"Green"}),e.jsx("button",{onClick:()=>l("#0000ff"),children:"Blue"}),e.jsx("button",{onClick:()=>l(""),children:"Clear"})]}),e.jsxs("div",{className:"color-picker-controlled__format-buttons",children:[e.jsx("button",{onClick:()=>a("hex"),className:o==="hex"?"active":"",children:"HEX"}),e.jsx("button",{onClick:()=>a("rgb"),className:o==="rgb"?"active":"",children:"RGB"}),e.jsx("button",{onClick:()=>a("hsl"),className:o==="hsl"?"active":"",children:"HSL"})]})]})},args:{},parameters:{docs:{description:{story:"Controlled ColorPicker with external state management and format switching."}}}},D={args:{defaultValue:"#ff6b6b",showText:!1},parameters:{docs:{description:{story:"ColorPicker showing only the color block without text input."}}}},A={args:{defaultValue:"#1677ff",showText:!0,presets:["#1890ff","#52c41a","#1677ff","#faad14","#ff4d4f","#722ed1","#eb2f96","#13c2c2","#fa8c16","#a0d911"]},parameters:{docs:{description:{story:"ColorPicker with brand-specific color presets."}}}},G={render:()=>{const[s,l]=c.useState("No color selected");return e.jsxs("div",{className:"color-picker-callback",children:[e.jsx("div",{className:"color-picker-callback__section",children:e.jsx(m,{defaultValue:"#1677ff",showText:!0,onChange:(o,a)=>{l(`
                Color: ${o}
                HEX: ${a.hex}
                RGB: rgb(${a.rgb.r}, ${a.rgb.g}, ${a.rgb.b})
                HSL: hsl(${a.hsl.h}, ${a.hsl.s}%, ${a.hsl.l}%)
              `)}})}),e.jsx("div",{className:"color-picker-callback__info",children:e.jsx("pre",{children:s})})]})},args:{},parameters:{docs:{description:{story:"ColorPicker demonstrating the onChange callback with color value details."}}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '#1677ff'
  }
}`,...V.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};const me=["Default","WithTextInput","Sizes","ColorFormats","WithClearButton","Disabled","CustomPresets","NoPresets","Controlled","OnlyColorBlock","BrandColors","WithCallback"];export{A as BrandColors,E as ColorFormats,M as Controlled,H as CustomPresets,V as Default,I as Disabled,L as NoPresets,D as OnlyColorBlock,B as Sizes,G as WithCallback,R as WithClearButton,$ as WithTextInput,me as __namedExportsOrder,he as default};
