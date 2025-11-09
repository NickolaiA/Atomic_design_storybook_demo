import{j as e}from"./iframe-CdBaqdCg.js";import"./preload-helper-PPVm8Dsz.js";const s=({value:M,max:m=100,variant:B="linear",size:V="md",color:q="primary",customColor:o,showProgress:i=!1,progressText:D,textPosition:r="outside",animated:R=!1,animationSpeed:I="normal",label:c,hideLabel:k=!1,indeterminate:p=!1,steps:z=5,showStepNumbers:$=!1,width:u="100%",className:W="","aria-label":U,"aria-describedby":F,...G})=>{const C=Math.min(Math.max(M||0,0),m),a=m>0?C/m*100:0,A=B==="stepped"?Math.ceil(a/100*z):0,l=o&&o.trim()!=="",O=["progress-bar",`progress-bar--${B}`,`progress-bar--${V}`,l?"progress-bar--custom-color":`progress-bar--${q}`,R&&"progress-bar--animated",I&&`progress-bar--${I}`,p&&"progress-bar--indeterminate",r&&`progress-bar--text-${r}`,W].filter(Boolean).join(" "),E=U||(c?`Progress: ${c}`:"Progress"),t=D||`${Math.round(a)}%`,X=()=>e.jsxs("div",{className:"progress-bar__track",children:[e.jsx("div",{className:"progress-bar__fill","data-progress":Math.round(a),"data-custom-color":l?o:void 0}),i&&r==="inside"&&e.jsx("div",{className:"progress-bar__text progress-bar__text--inside",children:t}),i&&r==="overlay"&&e.jsx("div",{className:"progress-bar__text progress-bar__text--overlay",children:t})]}),H=()=>{const d=2*Math.PI*45,n=p?0:d-a/100*d;return e.jsxs("div",{className:"progress-bar__circular",children:[e.jsxs("svg",{className:"progress-bar__circular-svg",viewBox:"0 0 100 100",children:[e.jsx("circle",{className:"progress-bar__circular-bg",cx:"50",cy:"50",r:45,fill:"none",strokeWidth:"8"}),e.jsx("circle",{className:"progress-bar__circular-progress",cx:"50",cy:"50",r:45,fill:"none",strokeWidth:"8",strokeLinecap:"round",strokeDasharray:d,strokeDashoffset:n,"data-custom-color":l?o:void 0})]}),i&&e.jsx("div",{className:"progress-bar__circular-text",children:t})]})},J=()=>e.jsx("div",{className:"progress-bar__steps",children:Array.from({length:z},(Z,d)=>{const n=d+1,L=n<=A,T=n<A||a===100&&n===A;return e.jsxs("div",{className:"progress-bar__step-container",children:[e.jsx("div",{className:`progress-bar__step ${T?"progress-bar__step--completed":L?"progress-bar__step--active":"progress-bar__step--inactive"}`,"data-custom-color":l&&L?o:void 0,children:$&&n}),d<z-1&&e.jsx("div",{className:`progress-bar__step-connector ${T?"progress-bar__step-connector--completed":""}`,"data-custom-color":l&&T?o:void 0})]},d)})}),Y=()=>e.jsxs("div",{className:"progress-bar__track",children:[e.jsx("div",{className:"progress-bar__fill progress-bar__fill--gradient","data-progress":Math.round(a),"data-custom-color":l?o:void 0}),i&&r==="inside"&&e.jsx("div",{className:"progress-bar__text progress-bar__text--inside",children:t}),i&&r==="overlay"&&e.jsx("div",{className:"progress-bar__text progress-bar__text--overlay",children:t})]}),K=()=>e.jsxs("div",{className:"progress-bar__track",children:[e.jsx("div",{className:"progress-bar__fill progress-bar__fill--striped","data-progress":Math.round(a),"data-custom-color":l?o:void 0}),i&&r==="inside"&&e.jsx("div",{className:"progress-bar__text progress-bar__text--inside",children:t}),i&&r==="overlay"&&e.jsx("div",{className:"progress-bar__text progress-bar__text--overlay",children:t})]}),Q=()=>{switch(B){case"circular":return H();case"stepped":return J();case"gradient":return Y();case"striped":return K();case"linear":default:return X()}};return e.jsxs("div",{className:O,...G,children:[c&&e.jsx("div",{className:`progress-bar__label ${k?"progress-bar__label--hidden":""}`,children:c}),e.jsx("div",{className:"progress-bar__container",style:{width:typeof u=="number"?`${u}px`:u,minWidth:u==="100%"?"200px":void 0},role:"progressbar","aria-label":E,...!p&&{"aria-valuenow":C,"aria-valuemin":0,"aria-valuemax":m},"aria-describedby":F,"data-value":C,"data-percentage":Math.round(a),children:Q()}),i&&r==="outside"&&e.jsx("div",{className:"progress-bar__text progress-bar__text--outside",children:t}),e.jsx("div",{className:"progress-bar__sr-only",children:p?"Loading in progress":`${Math.round(a)}% complete${c?` - ${c}`:""}`})]})};s.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{value:{required:!0,tsType:{name:"number"},description:"Progress value (0-100)"},max:{required:!1,tsType:{name:"number"},description:"Maximum value (defaults to 100)",defaultValue:{value:"100",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'linear' | 'circular' | 'stepped' | 'gradient' | 'striped'",elements:[{name:"literal",value:"'linear'"},{name:"literal",value:"'circular'"},{name:"literal",value:"'stepped'"},{name:"literal",value:"'gradient'"},{name:"literal",value:"'striped'"}]},description:"Progress bar variant",defaultValue:{value:"'linear'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"},{name:"literal",value:"'xxxl'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'neutral'"}]},description:"Color/semantic variant",defaultValue:{value:"'primary'",computed:!1}},customColor:{required:!1,tsType:{name:"string"},description:"Custom color (overrides color variant)"},showProgress:{required:!1,tsType:{name:"boolean"},description:"Show progress text/percentage",defaultValue:{value:"false",computed:!1}},progressText:{required:!1,tsType:{name:"string"},description:"Custom progress text"},textPosition:{required:!1,tsType:{name:"union",raw:"'inside' | 'outside' | 'overlay'",elements:[{name:"literal",value:"'inside'"},{name:"literal",value:"'outside'"},{name:"literal",value:"'overlay'"}]},description:"Progress text position",defaultValue:{value:"'outside'",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"Animated progress",defaultValue:{value:"false",computed:!1}},animationSpeed:{required:!1,tsType:{name:"union",raw:"'slow' | 'normal' | 'fast'",elements:[{name:"literal",value:"'slow'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'fast'"}]},description:"Animation speed",defaultValue:{value:"'normal'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Progress label"},hideLabel:{required:!1,tsType:{name:"boolean"},description:"Hide label visually but keep for screen readers",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"Indeterminate progress (loading state)",defaultValue:{value:"false",computed:!1}},steps:{required:!1,tsType:{name:"number"},description:"Number of steps for stepped variant",defaultValue:{value:"5",computed:!1}},showStepNumbers:{required:!1,tsType:{name:"boolean"},description:"Show step numbers",defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Width of the progress bar (defaults to '100%' with min-width: 200px)",defaultValue:{value:"'100%'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className",defaultValue:{value:"''",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for screen readers"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"Description for screen readers"}}};const re={title:"Atoms/ProgressBar",component:s,parameters:{layout:"centered",docs:{description:{component:"A comprehensive progress indicator component with 5 distinct variants (linear, circular, stepped, gradient, striped), multiple sizes, colors, and advanced features like animations and accessibility support."}}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value (0-100)"},max:{control:"number",description:"Maximum value (defaults to 100)"},variant:{control:"select",options:["linear","circular","stepped","gradient","striped"],description:"Progress bar variant"},size:{control:"select",options:["xs","sm","md","lg","xl","xxl","xxxl"],description:"Size of the progress bar"},color:{control:"select",options:["primary","secondary","success","warning","error","info","neutral"],description:"Color variant of the progress bar"},customColor:{control:"color",description:"Custom color (overrides color variant)"},showProgress:{control:"boolean",description:"Show progress text/percentage"},progressText:{control:"text",description:"Custom progress text"},textPosition:{control:"select",options:["inside","outside","overlay"],description:"Progress text position"},animated:{control:"boolean",description:"Animated progress"},animationSpeed:{control:"select",options:["slow","normal","fast"],description:"Animation speed"},label:{control:"text",description:"Progress label"},hideLabel:{control:"boolean",description:"Hide label visually but keep for screen readers"},indeterminate:{control:"boolean",description:"Indeterminate progress (loading state)"},steps:{control:{type:"range",min:2,max:10,step:1},description:"Number of steps for stepped variant",if:{arg:"variant",eq:"stepped"}},showStepNumbers:{control:"boolean",description:"Show step numbers",if:{arg:"variant",eq:"stepped"}},width:{control:"text",description:'Width of the progress bar (e.g., "100%", "300px", 400)'}}},v={args:{value:65,variant:"linear",size:"md",color:"primary"}},g={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Linear"}),e.jsx(s,{value:75,variant:"linear",label:"Linear Progress"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Circular"}),e.jsx(s,{value:60,variant:"circular",showProgress:!0})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Stepped"}),e.jsx(s,{value:50,variant:"stepped",steps:5,showStepNumbers:!0})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Gradient"}),e.jsx(s,{value:80,variant:"gradient",color:"success"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Striped"}),e.jsx(s,{value:45,variant:"striped",color:"warning",animated:!0})]})]}),parameters:{docs:{description:{story:"All 5 progress bar variants: linear, circular, stepped, gradient, and striped."}}}},h={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(s,{value:25,size:"xs",label:"XS Size",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(s,{value:40,size:"sm",label:"SM Size",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(s,{value:60,size:"md",label:"MD Size",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(s,{value:75,size:"lg",label:"LG Size",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(s,{value:90,size:"xl",label:"XL Size",showProgress:!0})})]}),parameters:{docs:{description:{story:"Available size variants from extra small to extra large."}}}},y={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(s,{value:70,color:"primary",label:"Primary",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(s,{value:65,color:"secondary",label:"Secondary",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(s,{value:85,color:"success",label:"Success",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(s,{value:45,color:"warning",label:"Warning",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(s,{value:30,color:"error",label:"Error",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(s,{value:55,color:"info",label:"Info",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(s,{value:40,color:"neutral",label:"Neutral",showProgress:!0})})]}),parameters:{docs:{description:{story:"Available color variants for different semantic contexts."}}}},x={render:()=>e.jsxs("div",{className:"story-demo-row",children:[e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{value:25,variant:"circular",size:"sm",showProgress:!0}),e.jsx("p",{className:"story-demo-label",children:"25%"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{value:50,variant:"circular",size:"md",showProgress:!0,color:"success"}),e.jsx("p",{className:"story-demo-label",children:"50%"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{value:75,variant:"circular",size:"lg",showProgress:!0,color:"warning"}),e.jsx("p",{className:"story-demo-label",children:"75%"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{value:100,variant:"circular",size:"xl",showProgress:!0,color:"success"}),e.jsx("p",{className:"story-demo-label",children:"Complete"})]})]}),parameters:{docs:{description:{story:"Circular progress indicators in different sizes and completion states."}}}},b={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"With Numbers"}),e.jsx(s,{value:60,variant:"stepped",steps:5,showStepNumbers:!0,label:"Account Setup"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Without Numbers"}),e.jsx(s,{value:75,variant:"stepped",steps:4,color:"success",label:"Order Processing"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"More Steps"}),e.jsx(s,{value:30,variant:"stepped",steps:8,size:"sm",color:"info",label:"Project Progress"})]})]}),parameters:{docs:{description:{story:"Stepped progress bars for multi-step processes with different configurations."}}}},N={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Outside Text"}),e.jsx(s,{value:65,label:"File Upload",showProgress:!0,textPosition:"outside"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Inside Text"}),e.jsx(s,{value:75,size:"lg",label:"Processing",showProgress:!0,textPosition:"inside",color:"success"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Overlay Text"}),e.jsx(s,{value:45,size:"lg",label:"Loading Data",showProgress:!0,textPosition:"overlay",color:"info"})]})]}),parameters:{docs:{description:{story:"Different text positioning options: outside, inside, and overlay."}}}},f={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Linear Animated"}),e.jsx(s,{value:70,animated:!0,label:"Downloading...",showProgress:!0})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Striped Animated"}),e.jsx(s,{value:55,variant:"striped",animated:!0,color:"warning",label:"Processing Files...",showProgress:!0})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Gradient Animated"}),e.jsx(s,{value:80,variant:"gradient",animated:!0,color:"success",label:"Upload Complete",showProgress:!0})]})]}),parameters:{docs:{description:{story:"Animated progress bars with shine effects and moving stripes."}}}},P={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Linear Indeterminate"}),e.jsx(s,{value:0,indeterminate:!0,label:"Loading..."})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Circular Indeterminate"}),e.jsxs("div",{className:"story-demo-row",children:[e.jsx(s,{value:0,variant:"circular",size:"md",indeterminate:!0,color:"primary"}),e.jsx(s,{value:0,variant:"circular",size:"lg",indeterminate:!0,color:"success"})]})]})]}),parameters:{docs:{description:{story:"Indeterminate progress indicators for unknown duration tasks."}}}},j={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(s,{value:70,customColor:"#ff6b6b",label:"Custom Red",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(s,{value:65,customColor:"#4ecdc4",label:"Custom Teal",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(s,{value:85,customColor:"#45b7d1",label:"Custom Blue",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(s,{value:50,customColor:"#f9ca24",label:"Custom Yellow",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(s,{value:75,customColor:"#6c5ce7",label:"Custom Purple",showProgress:!0})})]}),parameters:{docs:{description:{story:"Custom colors override the color variant prop for brand-specific styling."}}}},w={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"File Upload"}),e.jsx(s,{value:73,label:"Uploading document.pdf (2.4 MB)",progressText:"73% - 1.2 MB remaining",showProgress:!0,animated:!0,color:"info"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Installation Progress"}),e.jsx(s,{value:40,variant:"stepped",steps:5,showStepNumbers:!0,label:"Software Installation",color:"primary"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Battery Level"}),e.jsx(s,{value:25,size:"sm",label:"Battery",showProgress:!0,color:"warning",customColor:"#ff9500"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Skill Level"}),e.jsxs("div",{className:"story-demo-row",children:[e.jsx(s,{value:90,variant:"circular",size:"md",showProgress:!0,color:"success",label:"JavaScript"}),e.jsx(s,{value:75,variant:"circular",size:"md",showProgress:!0,color:"info",label:"React"}),e.jsx(s,{value:60,variant:"circular",size:"md",showProgress:!0,color:"warning",label:"TypeScript"})]})]})]}),parameters:{docs:{description:{story:"Real-world usage examples: file uploads, installations, battery levels, and skill indicators."}}}},_={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Screen Reader Friendly"}),e.jsx(s,{value:65,label:"Loading user data","aria-label":"Data loading progress",showProgress:!0}),e.jsx("p",{className:"story-demo-description",children:"Includes ARIA attributes and screen reader announcements"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Custom Max Value"}),e.jsx(s,{value:150,max:200,label:"Download progress",showProgress:!0,progressText:"150 MB / 200 MB",color:"info"}),e.jsx("p",{className:"story-demo-description",children:"Properly handles custom maximum values with correct ARIA attributes"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Reduced Motion"}),e.jsx(s,{value:80,variant:"striped",animated:!0,label:"Respects motion preferences",showProgress:!0,color:"success"}),e.jsx("p",{className:"story-demo-description",children:"Animations are disabled for users with motion sensitivity preferences"})]})]}),parameters:{docs:{description:{story:"Accessibility features including ARIA attributes, screen reader support, and reduced motion preferences."}}}},S={args:{value:65,max:100,variant:"linear",size:"md",color:"primary",showProgress:!0,textPosition:"outside",animated:!1,animationSpeed:"normal",label:"Progress Demo",hideLabel:!1,indeterminate:!1,steps:5,showStepNumbers:!1},parameters:{docs:{description:{story:"Interactive story with all available controls. Use the controls panel to experiment with different props."}}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 65,
    variant: 'linear',
    size: 'md',
    color: 'primary'
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Linear</h4>\r
        <ProgressBar value={75} variant="linear" label="Linear Progress" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Circular</h4>\r
        <ProgressBar value={60} variant="circular" showProgress />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Stepped</h4>\r
        <ProgressBar value={50} variant="stepped" steps={5} showStepNumbers />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Gradient</h4>\r
        <ProgressBar value={80} variant="gradient" color="success" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Striped</h4>\r
        <ProgressBar value={45} variant="striped" color="warning" animated />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All 5 progress bar variants: linear, circular, stepped, gradient, and striped.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={25} size="xs" label="XS Size" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={40} size="sm" label="SM Size" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={60} size="md" label="MD Size" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={75} size="lg" label="LG Size" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={90} size="xl" label="XL Size" showProgress />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Available size variants from extra small to extra large.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={70} color="primary" label="Primary" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={65} color="secondary" label="Secondary" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={85} color="success" label="Success" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={45} color="warning" label="Warning" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={30} color="error" label="Error" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={55} color="info" label="Info" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={40} color="neutral" label="Neutral" showProgress />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Available color variants for different semantic contexts.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-row">\r
      <div className="story-demo-item">\r
        <ProgressBar value={25} variant="circular" size="sm" showProgress />\r
        <p className="story-demo-label">25%</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <ProgressBar value={50} variant="circular" size="md" showProgress color="success" />\r
        <p className="story-demo-label">50%</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <ProgressBar value={75} variant="circular" size="lg" showProgress color="warning" />\r
        <p className="story-demo-label">75%</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <ProgressBar value={100} variant="circular" size="xl" showProgress color="success" />\r
        <p className="story-demo-label">Complete</p>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Circular progress indicators in different sizes and completion states.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">With Numbers</h4>\r
        <ProgressBar value={60} variant="stepped" steps={5} showStepNumbers label="Account Setup" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Without Numbers</h4>\r
        <ProgressBar value={75} variant="stepped" steps={4} color="success" label="Order Processing" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">More Steps</h4>\r
        <ProgressBar value={30} variant="stepped" steps={8} size="sm" color="info" label="Project Progress" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Stepped progress bars for multi-step processes with different configurations.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Outside Text</h4>\r
        <ProgressBar value={65} label="File Upload" showProgress textPosition="outside" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Inside Text</h4>\r
        <ProgressBar value={75} size="lg" label="Processing" showProgress textPosition="inside" color="success" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Overlay Text</h4>\r
        <ProgressBar value={45} size="lg" label="Loading Data" showProgress textPosition="overlay" color="info" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different text positioning options: outside, inside, and overlay.'
      }
    }
  }
}`,...N.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Linear Animated</h4>\r
        <ProgressBar value={70} animated label="Downloading..." showProgress />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Striped Animated</h4>\r
        <ProgressBar value={55} variant="striped" animated color="warning" label="Processing Files..." showProgress />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Gradient Animated</h4>\r
        <ProgressBar value={80} variant="gradient" animated color="success" label="Upload Complete" showProgress />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Animated progress bars with shine effects and moving stripes.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Linear Indeterminate</h4>\r
        <ProgressBar value={0} indeterminate label="Loading..." />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Circular Indeterminate</h4>\r
        <div className="story-demo-row">\r
          <ProgressBar value={0} variant="circular" size="md" indeterminate color="primary" />\r
          <ProgressBar value={0} variant="circular" size="lg" indeterminate color="success" />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Indeterminate progress indicators for unknown duration tasks.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={70} customColor="#ff6b6b" label="Custom Red" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={65} customColor="#4ecdc4" label="Custom Teal" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={85} customColor="#45b7d1" label="Custom Blue" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={50} customColor="#f9ca24" label="Custom Yellow" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={75} customColor="#6c5ce7" label="Custom Purple" showProgress />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Custom colors override the color variant prop for brand-specific styling.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">File Upload</h4>\r
        <ProgressBar value={73} label="Uploading document.pdf (2.4 MB)" progressText="73% - 1.2 MB remaining" showProgress animated color="info" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Installation Progress</h4>\r
        <ProgressBar value={40} variant="stepped" steps={5} showStepNumbers label="Software Installation" color="primary" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Battery Level</h4>\r
        <ProgressBar value={25} size="sm" label="Battery" showProgress color="warning" customColor="#ff9500" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Skill Level</h4>\r
        <div className="story-demo-row">\r
          <ProgressBar value={90} variant="circular" size="md" showProgress color="success" label="JavaScript" />\r
          <ProgressBar value={75} variant="circular" size="md" showProgress color="info" label="React" />\r
          <ProgressBar value={60} variant="circular" size="md" showProgress color="warning" label="TypeScript" />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage examples: file uploads, installations, battery levels, and skill indicators.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Screen Reader Friendly</h4>\r
        <ProgressBar value={65} label="Loading user data" aria-label="Data loading progress" showProgress />\r
        <p className="story-demo-description">\r
          Includes ARIA attributes and screen reader announcements\r
        </p>\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Custom Max Value</h4>\r
        <ProgressBar value={150} max={200} label="Download progress" showProgress progressText="150 MB / 200 MB" color="info" />\r
        <p className="story-demo-description">\r
          Properly handles custom maximum values with correct ARIA attributes\r
        </p>\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Reduced Motion</h4>\r
        <ProgressBar value={80} variant="striped" animated label="Respects motion preferences" showProgress color="success" />\r
        <p className="story-demo-description">\r
          Animations are disabled for users with motion sensitivity preferences\r
        </p>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including ARIA attributes, screen reader support, and reduced motion preferences.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    value: 65,
    max: 100,
    variant: 'linear',
    size: 'md',
    color: 'primary',
    showProgress: true,
    textPosition: 'outside',
    animated: false,
    animationSpeed: 'normal',
    label: 'Progress Demo',
    hideLabel: false,
    indeterminate: false,
    steps: 5,
    showStepNumbers: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive story with all available controls. Use the controls panel to experiment with different props.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};const ae=["Default","Variants","SizeVariants","ColorVariants","CircularProgress","SteppedProgress","TextPositioning","AnimatedProgress","IndeterminateProgress","CustomColors","RealWorldExamples","AccessibilityDemo","Interactive"];export{_ as AccessibilityDemo,f as AnimatedProgress,x as CircularProgress,y as ColorVariants,j as CustomColors,v as Default,P as IndeterminateProgress,S as Interactive,w as RealWorldExamples,h as SizeVariants,b as SteppedProgress,N as TextPositioning,g as Variants,ae as __namedExportsOrder,re as default};
