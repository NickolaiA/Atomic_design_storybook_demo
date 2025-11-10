import{j as e}from"./iframe-NKDFF6YA.js";import"./preload-helper-PPVm8Dsz.js";const t=({variant:y="text",animation:j="pulse",width:n,height:s,lines:f=1,lineSpacing:R="md",borderRadius:r,baseColor:o,highlightColor:l,duration:d=1.5,shimmer:L=!1,aspectRatio:w,className:q="",style:N,"aria-label":P,loading:V=!0,children:S,...b})=>{if(!V&&S)return e.jsx(e.Fragment,{children:S});const W=o||l,C=["skeleton",`skeleton--${y}`,`skeleton--animation-${j}`,w&&`skeleton--aspect-${w}`,L&&"skeleton--shimmer",W&&"skeleton--custom-colors",q].filter(Boolean).join(" "),i={...N};n&&(i.width=typeof n=="number"?`${n}px`:n),s&&(i.height=typeof s=="number"?`${s}px`:s),r&&(i.borderRadius=typeof r=="number"?`${r}px`:r),o&&(i["--skeleton-base-color"]=o),l&&(i["--skeleton-highlight-color"]=l),d&&(i["--skeleton-duration"]=`${d}s`);const T=P||"Loading content";if(y==="text"&&f>1){const $=["skeleton-lines",`skeleton-lines--spacing-${R}`].filter(Boolean).join(" "),A={...N};n&&(A.width=typeof n=="number"?`${n}px`:n);const a={};return s&&(a.height=typeof s=="number"?`${s}px`:s),r&&(a.borderRadius=typeof r=="number"?`${r}px`:r),o&&(a["--skeleton-base-color"]=o),l&&(a["--skeleton-highlight-color"]=l),d&&(a["--skeleton-duration"]=`${d}s`),e.jsx("div",{className:$,style:A,role:"status","aria-label":T,...b,children:Array.from({length:f},(D,B)=>e.jsx("div",{className:C,style:a},B))})}return e.jsx("div",{className:C,style:i,role:"status","aria-label":T,...b})};t.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'circular' | 'rectangular' | 'rounded'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circular'"},{name:"literal",value:"'rectangular'"},{name:"literal",value:"'rounded'"}]},description:"Shape variant",defaultValue:{value:"'text'",computed:!1}},animation:{required:!1,tsType:{name:"union",raw:"'pulse' | 'wave' | 'none'",elements:[{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"},{name:"literal",value:"'none'"}]},description:"Animation type",defaultValue:{value:"'pulse'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Width of the skeleton"},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Height of the skeleton"},lines:{required:!1,tsType:{name:"number"},description:"Number of lines for text skeleton",defaultValue:{value:"1",computed:!1}},lineSpacing:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Space between lines",defaultValue:{value:"'md'",computed:!1}},borderRadius:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Border radius for rounded variant"},baseColor:{required:!1,tsType:{name:"string"},description:"Base color"},highlightColor:{required:!1,tsType:{name:"string"},description:"Highlight color for animation"},duration:{required:!1,tsType:{name:"number"},description:"Animation duration in seconds",defaultValue:{value:"1.5",computed:!1}},shimmer:{required:!1,tsType:{name:"boolean"},description:"Whether to show shimmer effect",defaultValue:{value:"false",computed:!1}},aspectRatio:{required:!1,tsType:{name:"union",raw:"'1:1' | '16:9' | '4:3' | '3:2' | '21:9'",elements:[{name:"literal",value:"'1:1'"},{name:"literal",value:"'16:9'"},{name:"literal",value:"'4:3'"},{name:"literal",value:"'3:2'"},{name:"literal",value:"'21:9'"}]},description:"Aspect ratio for rectangular skeletons"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},loading:{required:!1,tsType:{name:"boolean"},description:"Whether skeleton is loading",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to show when not loading"}}};const H={title:"Atoms/Skeleton",component:t,parameters:{layout:"padded",docs:{description:{component:"Loading placeholder skeletons with various shapes, animations, and configurations to improve perceived performance."}}},argTypes:{variant:{control:"select",options:["text","circular","rectangular","rounded"],description:"Shape variant"},animation:{control:"select",options:["pulse","wave","none"],description:"Animation type"},width:{control:"text",description:"Width of the skeleton"},height:{control:"text",description:"Height of the skeleton"},lines:{control:{type:"number",min:1,max:10,step:1},description:"Number of lines for text skeleton"},lineSpacing:{control:"select",options:["xs","sm","md","lg"],description:"Space between lines"},borderRadius:{control:"text",description:"Custom border radius"},baseColor:{control:"color",description:"Base color"},highlightColor:{control:"color",description:"Highlight color for animation"},duration:{control:{type:"number",min:.5,max:5,step:.1},description:"Animation duration in seconds"},shimmer:{control:"boolean",description:"Whether to show shimmer effect"},aspectRatio:{control:"select",options:["1:1","16:9","4:3","3:2","21:9"],description:"Aspect ratio for rectangular skeletons"},loading:{control:"boolean",description:"Whether skeleton is loading"}}},c={args:{variant:"text",animation:"pulse",width:200,height:20}},h={render:()=>e.jsxs("div",{className:"skeleton-story-grid",children:[e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"text",width:200}),e.jsx("span",{children:"Text"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"circular",width:60,height:60}),e.jsx("span",{children:"Circular"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"rectangular",width:200,height:120}),e.jsx("span",{children:"Rectangular"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"rounded",width:200,height:120}),e.jsx("span",{children:"Rounded"})]})]})},m={render:()=>e.jsxs("div",{className:"skeleton-story-grid",children:[e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{animation:"pulse",width:200,height:20}),e.jsx("span",{children:"Pulse"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{animation:"wave",width:200,height:20}),e.jsx("span",{children:"Wave"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{animation:"none",width:200,height:20}),e.jsx("span",{children:"None"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{animation:"pulse",shimmer:!0,width:200,height:20}),e.jsx("span",{children:"Pulse + Shimmer"})]})]})},v={render:()=>e.jsxs("div",{className:"skeleton-story-grid",children:[e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"text",lines:3,width:300}),e.jsx("span",{children:"3 Lines (Default Spacing)"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"text",lines:4,lineSpacing:"lg",width:300}),e.jsx("span",{children:"4 Lines (Large Spacing)"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"text",lines:2,lineSpacing:"xs",width:300}),e.jsx("span",{children:"2 Lines (XS Spacing)"})]})]})},p={render:()=>e.jsxs("div",{className:"skeleton-story-grid",children:[e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"rounded",aspectRatio:"1:1",width:150}),e.jsx("span",{children:"Square (1:1)"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"rounded",aspectRatio:"16:9",width:200}),e.jsx("span",{children:"Widescreen (16:9)"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"rounded",aspectRatio:"4:3",width:200}),e.jsx("span",{children:"Standard (4:3)"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"rounded",aspectRatio:"21:9",width:250}),e.jsx("span",{children:"Cinema (21:9)"})]})]})},x={render:()=>e.jsxs("div",{className:"skeleton-story-grid",children:[e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{width:200,height:20,baseColor:"#e1e7ef",highlightColor:"#f7fafc"}),e.jsx("span",{children:"Light Blue"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{width:200,height:20,baseColor:"#fed7d7",highlightColor:"#fef5e7"}),e.jsx("span",{children:"Pink/Yellow"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{width:200,height:20,baseColor:"#c6f6d5",highlightColor:"#f0fff4"}),e.jsx("span",{children:"Green"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{width:200,height:20,baseColor:"#2d3748",highlightColor:"#4a5568"}),e.jsx("span",{children:"Dark Theme"})]})]})},u={render:()=>e.jsxs("div",{className:"skeleton-story-loading-demo",children:[e.jsxs("div",{className:"skeleton-story-loading-item",children:[e.jsx("h4",{children:"Loading (Skeleton Visible)"}),e.jsx(t,{loading:!0,width:300,height:20,children:e.jsx("div",{children:"This content is hidden while loading"})})]}),e.jsxs("div",{className:"skeleton-story-loading-item",children:[e.jsx("h4",{children:"Loaded (Content Visible)"}),e.jsx(t,{loading:!1,width:300,height:20,children:e.jsx("div",{className:"skeleton-story-loaded-content",children:"This content is now visible after loading completes"})})]})]})},k={render:()=>e.jsxs("div",{className:"skeleton-story-examples",children:[e.jsxs("div",{className:"skeleton-story-example",children:[e.jsx("h4",{children:"User Profile Card"}),e.jsxs("div",{className:"skeleton-story-profile-card",children:[e.jsx(t,{variant:"circular",width:60,height:60}),e.jsxs("div",{className:"skeleton-story-profile-info",children:[e.jsx(t,{variant:"text",width:120,height:16}),e.jsx(t,{variant:"text",width:80,height:14}),e.jsx(t,{variant:"text",width:150,height:12})]})]})]}),e.jsxs("div",{className:"skeleton-story-example",children:[e.jsx("h4",{children:"Article Card"}),e.jsxs("div",{className:"skeleton-story-article-card",children:[e.jsx(t,{variant:"rounded",aspectRatio:"16:9",width:"100%"}),e.jsxs("div",{className:"skeleton-story-article-content",children:[e.jsx(t,{variant:"text",lines:1,width:"100%",height:20}),e.jsx(t,{variant:"text",lines:3,width:"100%"}),e.jsxs("div",{className:"skeleton-story-article-meta",children:[e.jsx(t,{variant:"circular",width:24,height:24}),e.jsx(t,{variant:"text",width:100,height:12})]})]})]})]}),e.jsxs("div",{className:"skeleton-story-example",children:[e.jsx("h4",{children:"Comment Thread"}),e.jsxs("div",{className:"skeleton-story-comments",children:[e.jsxs("div",{className:"skeleton-story-comment",children:[e.jsx(t,{variant:"circular",width:32,height:32}),e.jsxs("div",{className:"skeleton-story-comment-content",children:[e.jsx(t,{variant:"text",width:80,height:12}),e.jsx(t,{variant:"text",lines:2,width:"100%"})]})]}),e.jsxs("div",{className:"skeleton-story-comment",children:[e.jsx(t,{variant:"circular",width:32,height:32}),e.jsxs("div",{className:"skeleton-story-comment-content",children:[e.jsx(t,{variant:"text",width:120,height:12}),e.jsx(t,{variant:"text",lines:1,width:"90%"})]})]}),e.jsxs("div",{className:"skeleton-story-comment",children:[e.jsx(t,{variant:"circular",width:32,height:32}),e.jsxs("div",{className:"skeleton-story-comment-content",children:[e.jsx(t,{variant:"text",width:100,height:12}),e.jsx(t,{variant:"text",lines:3,width:"100%"})]})]})]})]}),e.jsxs("div",{className:"skeleton-story-example",children:[e.jsx("h4",{children:"Data Table"}),e.jsxs("div",{className:"skeleton-story-table",children:[e.jsxs("div",{className:"skeleton-story-table-header",children:[e.jsx(t,{variant:"text",width:80,height:14}),e.jsx(t,{variant:"text",width:100,height:14}),e.jsx(t,{variant:"text",width:60,height:14}),e.jsx(t,{variant:"text",width:90,height:14})]}),Array.from({length:5},(y,j)=>e.jsxs("div",{className:"skeleton-story-table-row",children:[e.jsx(t,{variant:"text",width:70,height:12}),e.jsx(t,{variant:"text",width:90,height:12}),e.jsx(t,{variant:"text",width:50,height:12}),e.jsx(t,{variant:"text",width:80,height:12})]},j))]})]})]})},g={render:()=>e.jsxs("div",{className:"skeleton-story-performance",children:[e.jsxs("div",{className:"skeleton-story-performance-section",children:[e.jsx("h4",{children:"Fast Animation (0.8s)"}),e.jsx(t,{width:300,height:20,duration:.8})]}),e.jsxs("div",{className:"skeleton-story-performance-section",children:[e.jsx("h4",{children:"Normal Animation (1.5s)"}),e.jsx(t,{width:300,height:20,duration:1.5})]}),e.jsxs("div",{className:"skeleton-story-performance-section",children:[e.jsx("h4",{children:"Slow Animation (3s)"}),e.jsx(t,{width:300,height:20,duration:3})]}),e.jsxs("div",{className:"skeleton-story-performance-section",children:[e.jsx("h4",{children:"No Animation (Better Performance)"}),e.jsx(t,{width:300,height:20,animation:"none"})]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    animation: 'pulse',
    width: 200,
    height: 20
  }
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="skeleton-story-grid">\r
      <div className="skeleton-story-item">\r
        <Skeleton variant="text" width={200} />\r
        <span>Text</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton variant="circular" width={60} height={60} />\r
        <span>Circular</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton variant="rectangular" width={200} height={120} />\r
        <span>Rectangular</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton variant="rounded" width={200} height={120} />\r
        <span>Rounded</span>\r
      </div>\r
    </div>
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="skeleton-story-grid">\r
      <div className="skeleton-story-item">\r
        <Skeleton animation="pulse" width={200} height={20} />\r
        <span>Pulse</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton animation="wave" width={200} height={20} />\r
        <span>Wave</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton animation="none" width={200} height={20} />\r
        <span>None</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton animation="pulse" shimmer width={200} height={20} />\r
        <span>Pulse + Shimmer</span>\r
      </div>\r
    </div>
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="skeleton-story-grid">\r
      <div className="skeleton-story-item">\r
        <Skeleton variant="text" lines={3} width={300} />\r
        <span>3 Lines (Default Spacing)</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton variant="text" lines={4} lineSpacing="lg" width={300} />\r
        <span>4 Lines (Large Spacing)</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton variant="text" lines={2} lineSpacing="xs" width={300} />\r
        <span>2 Lines (XS Spacing)</span>\r
      </div>\r
    </div>
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="skeleton-story-grid">\r
      <div className="skeleton-story-item">\r
        <Skeleton variant="rounded" aspectRatio="1:1" width={150} />\r
        <span>Square (1:1)</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton variant="rounded" aspectRatio="16:9" width={200} />\r
        <span>Widescreen (16:9)</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton variant="rounded" aspectRatio="4:3" width={200} />\r
        <span>Standard (4:3)</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton variant="rounded" aspectRatio="21:9" width={250} />\r
        <span>Cinema (21:9)</span>\r
      </div>\r
    </div>
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="skeleton-story-grid">\r
      <div className="skeleton-story-item">\r
        <Skeleton width={200} height={20} baseColor="#e1e7ef" highlightColor="#f7fafc" />\r
        <span>Light Blue</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton width={200} height={20} baseColor="#fed7d7" highlightColor="#fef5e7" />\r
        <span>Pink/Yellow</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton width={200} height={20} baseColor="#c6f6d5" highlightColor="#f0fff4" />\r
        <span>Green</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton width={200} height={20} baseColor="#2d3748" highlightColor="#4a5568" />\r
        <span>Dark Theme</span>\r
      </div>\r
    </div>
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="skeleton-story-loading-demo">\r
      <div className="skeleton-story-loading-item">\r
        <h4>Loading (Skeleton Visible)</h4>\r
        <Skeleton loading={true} width={300} height={20}>\r
          <div>This content is hidden while loading</div>\r
        </Skeleton>\r
      </div>\r
      \r
      <div className="skeleton-story-loading-item">\r
        <h4>Loaded (Content Visible)</h4>\r
        <Skeleton loading={false} width={300} height={20}>\r
          <div className="skeleton-story-loaded-content">\r
            This content is now visible after loading completes\r
          </div>\r
        </Skeleton>\r
      </div>\r
    </div>
}`,...u.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="skeleton-story-examples">\r
      <div className="skeleton-story-example">\r
        <h4>User Profile Card</h4>\r
        <div className="skeleton-story-profile-card">\r
          <Skeleton variant="circular" width={60} height={60} />\r
          <div className="skeleton-story-profile-info">\r
            <Skeleton variant="text" width={120} height={16} />\r
            <Skeleton variant="text" width={80} height={14} />\r
            <Skeleton variant="text" width={150} height={12} />\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="skeleton-story-example">\r
        <h4>Article Card</h4>\r
        <div className="skeleton-story-article-card">\r
          <Skeleton variant="rounded" aspectRatio="16:9" width="100%" />\r
          <div className="skeleton-story-article-content">\r
            <Skeleton variant="text" lines={1} width="100%" height={20} />\r
            <Skeleton variant="text" lines={3} width="100%" />\r
            <div className="skeleton-story-article-meta">\r
              <Skeleton variant="circular" width={24} height={24} />\r
              <Skeleton variant="text" width={100} height={12} />\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="skeleton-story-example">\r
        <h4>Comment Thread</h4>\r
        <div className="skeleton-story-comments">\r
          <div className="skeleton-story-comment">\r
            <Skeleton variant="circular" width={32} height={32} />\r
            <div className="skeleton-story-comment-content">\r
              <Skeleton variant="text" width={80} height={12} />\r
              <Skeleton variant="text" lines={2} width="100%" />\r
            </div>\r
          </div>\r
          \r
          <div className="skeleton-story-comment">\r
            <Skeleton variant="circular" width={32} height={32} />\r
            <div className="skeleton-story-comment-content">\r
              <Skeleton variant="text" width={120} height={12} />\r
              <Skeleton variant="text" lines={1} width="90%" />\r
            </div>\r
          </div>\r
          \r
          <div className="skeleton-story-comment">\r
            <Skeleton variant="circular" width={32} height={32} />\r
            <div className="skeleton-story-comment-content">\r
              <Skeleton variant="text" width={100} height={12} />\r
              <Skeleton variant="text" lines={3} width="100%" />\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="skeleton-story-example">\r
        <h4>Data Table</h4>\r
        <div className="skeleton-story-table">\r
          <div className="skeleton-story-table-header">\r
            <Skeleton variant="text" width={80} height={14} />\r
            <Skeleton variant="text" width={100} height={14} />\r
            <Skeleton variant="text" width={60} height={14} />\r
            <Skeleton variant="text" width={90} height={14} />\r
          </div>\r
          \r
          {Array.from({
          length: 5
        }, (_, index) => <div key={index} className="skeleton-story-table-row">\r
              <Skeleton variant="text" width={70} height={12} />\r
              <Skeleton variant="text" width={90} height={12} />\r
              <Skeleton variant="text" width={50} height={12} />\r
              <Skeleton variant="text" width={80} height={12} />\r
            </div>)}\r
        </div>\r
      </div>\r
    </div>
}`,...k.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="skeleton-story-performance">\r
      <div className="skeleton-story-performance-section">\r
        <h4>Fast Animation (0.8s)</h4>\r
        <Skeleton width={300} height={20} duration={0.8} />\r
      </div>\r
      \r
      <div className="skeleton-story-performance-section">\r
        <h4>Normal Animation (1.5s)</h4>\r
        <Skeleton width={300} height={20} duration={1.5} />\r
      </div>\r
      \r
      <div className="skeleton-story-performance-section">\r
        <h4>Slow Animation (3s)</h4>\r
        <Skeleton width={300} height={20} duration={3} />\r
      </div>\r
      \r
      <div className="skeleton-story-performance-section">\r
        <h4>No Animation (Better Performance)</h4>\r
        <Skeleton width={300} height={20} animation="none" />\r
      </div>\r
    </div>
}`,...g.parameters?.docs?.source}}};const F=["Default","ShapeVariants","AnimationTypes","MultipleLines","AspectRatios","CustomColors","LoadingStates","RealWorldExamples","PerformanceComparison"];export{m as AnimationTypes,p as AspectRatios,x as CustomColors,c as Default,u as LoadingStates,v as MultipleLines,g as PerformanceComparison,k as RealWorldExamples,h as ShapeVariants,F as __namedExportsOrder,H as default};
