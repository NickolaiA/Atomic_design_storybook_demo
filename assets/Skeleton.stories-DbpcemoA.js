import{j as e}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";const t=({variant:x="text",animation:u="pulse",width:s,height:i,lines:g=1,lineSpacing:ee="md",borderRadius:r,baseColor:k,highlightColor:y,duration:j=1.5,shimmer:te=!1,aspectRatio:w,className:ne="",style:se,"aria-label":ie,loading:re=!0,children:f,...N})=>{if(!re&&f)return e.jsx(e.Fragment,{children:f});const ae=k||y,S=["skeleton",`skeleton--${x}`,`skeleton--animation-${u}`,w&&`skeleton--aspect-${w}`,te&&"skeleton--shimmer",ae&&"skeleton--custom-colors",ne].filter(Boolean).join(" "),n={...se};s&&(n.width=typeof s=="number"?`${s}px`:s),i&&(n.height=typeof i=="number"?`${i}px`:i),r&&(n.borderRadius=typeof r=="number"?`${r}px`:r),k&&(n["--skeleton-base-color"]=k),y&&(n["--skeleton-highlight-color"]=y),j&&(n["--skeleton-duration"]=`${j}s`);const b=ie||"Loading content";return x==="text"&&g>1?e.jsx("div",{className:`skeleton-lines skeleton-lines--spacing-${ee}`,role:"status","aria-label":b,...N,children:Array.from({length:g},(le,C)=>{const oe=C===g-1?{width:"75%"}:void 0;return e.jsx("div",{className:S,style:{...n,...oe}},C)})}):e.jsx("div",{className:S,style:n,role:"status","aria-label":b,...N})};t.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'circular' | 'rectangular' | 'rounded'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circular'"},{name:"literal",value:"'rectangular'"},{name:"literal",value:"'rounded'"}]},description:"Shape variant",defaultValue:{value:"'text'",computed:!1}},animation:{required:!1,tsType:{name:"union",raw:"'pulse' | 'wave' | 'none'",elements:[{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"},{name:"literal",value:"'none'"}]},description:"Animation type",defaultValue:{value:"'pulse'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Width of the skeleton"},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Height of the skeleton"},lines:{required:!1,tsType:{name:"number"},description:"Number of lines for text skeleton",defaultValue:{value:"1",computed:!1}},lineSpacing:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Space between lines",defaultValue:{value:"'md'",computed:!1}},borderRadius:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Border radius for rounded variant"},baseColor:{required:!1,tsType:{name:"string"},description:"Base color"},highlightColor:{required:!1,tsType:{name:"string"},description:"Highlight color for animation"},duration:{required:!1,tsType:{name:"number"},description:"Animation duration in seconds",defaultValue:{value:"1.5",computed:!1}},shimmer:{required:!1,tsType:{name:"boolean"},description:"Whether to show shimmer effect",defaultValue:{value:"false",computed:!1}},aspectRatio:{required:!1,tsType:{name:"union",raw:"'1:1' | '16:9' | '4:3' | '3:2' | '21:9'",elements:[{name:"literal",value:"'1:1'"},{name:"literal",value:"'16:9'"},{name:"literal",value:"'4:3'"},{name:"literal",value:"'3:2'"},{name:"literal",value:"'21:9'"}]},description:"Aspect ratio for rectangular skeletons"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},loading:{required:!1,tsType:{name:"boolean"},description:"Whether skeleton is loading",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to show when not loading"}}};const me={title:"Atoms/Skeleton",component:t,parameters:{layout:"padded",docs:{description:{component:"Loading placeholder skeletons with various shapes, animations, and configurations to improve perceived performance."}}},argTypes:{variant:{control:"select",options:["text","circular","rectangular","rounded"],description:"Shape variant"},animation:{control:"select",options:["pulse","wave","none"],description:"Animation type"},width:{control:"text",description:"Width of the skeleton"},height:{control:"text",description:"Height of the skeleton"},lines:{control:{type:"number",min:1,max:10,step:1},description:"Number of lines for text skeleton"},lineSpacing:{control:"select",options:["xs","sm","md","lg"],description:"Space between lines"},borderRadius:{control:"text",description:"Custom border radius"},baseColor:{control:"color",description:"Base color"},highlightColor:{control:"color",description:"Highlight color for animation"},duration:{control:{type:"number",min:.5,max:5,step:.1},description:"Animation duration in seconds"},shimmer:{control:"boolean",description:"Whether to show shimmer effect"},aspectRatio:{control:"select",options:["1:1","16:9","4:3","3:2","21:9"],description:"Aspect ratio for rectangular skeletons"},loading:{control:"boolean",description:"Whether skeleton is loading"}}},a={args:{variant:"text",animation:"pulse",width:200,height:20}},o={render:()=>e.jsxs("div",{className:"skeleton-story-grid",children:[e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"text",width:200}),e.jsx("span",{children:"Text"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"circular",width:60,height:60}),e.jsx("span",{children:"Circular"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"rectangular",width:200,height:120}),e.jsx("span",{children:"Rectangular"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"rounded",width:200,height:120}),e.jsx("span",{children:"Rounded"})]})]})},l={render:()=>e.jsxs("div",{className:"skeleton-story-grid",children:[e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{animation:"pulse",width:200,height:20}),e.jsx("span",{children:"Pulse"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{animation:"wave",width:200,height:20}),e.jsx("span",{children:"Wave"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{animation:"none",width:200,height:20}),e.jsx("span",{children:"None"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{animation:"pulse",shimmer:!0,width:200,height:20}),e.jsx("span",{children:"Pulse + Shimmer"})]})]})},d={render:()=>e.jsxs("div",{className:"skeleton-story-grid",children:[e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"text",lines:3,width:300}),e.jsx("span",{children:"3 Lines (Default Spacing)"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"text",lines:4,lineSpacing:"lg",width:300}),e.jsx("span",{children:"4 Lines (Large Spacing)"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"text",lines:2,lineSpacing:"xs",width:300}),e.jsx("span",{children:"2 Lines (XS Spacing)"})]})]})},c={render:()=>e.jsxs("div",{className:"skeleton-story-grid",children:[e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"rounded",aspectRatio:"1:1",width:150}),e.jsx("span",{children:"Square (1:1)"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"rounded",aspectRatio:"16:9",width:200}),e.jsx("span",{children:"Widescreen (16:9)"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"rounded",aspectRatio:"4:3",width:200}),e.jsx("span",{children:"Standard (4:3)"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{variant:"rounded",aspectRatio:"21:9",width:250}),e.jsx("span",{children:"Cinema (21:9)"})]})]})},h={render:()=>e.jsxs("div",{className:"skeleton-story-grid",children:[e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{width:200,height:20,baseColor:"#e1e7ef",highlightColor:"#f7fafc"}),e.jsx("span",{children:"Light Blue"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{width:200,height:20,baseColor:"#fed7d7",highlightColor:"#fef5e7"}),e.jsx("span",{children:"Pink/Yellow"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{width:200,height:20,baseColor:"#c6f6d5",highlightColor:"#f0fff4"}),e.jsx("span",{children:"Green"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(t,{width:200,height:20,baseColor:"#2d3748",highlightColor:"#4a5568"}),e.jsx("span",{children:"Dark Theme"})]})]})},m={render:()=>e.jsxs("div",{className:"skeleton-story-loading-demo",children:[e.jsxs("div",{className:"skeleton-story-loading-item",children:[e.jsx("h4",{children:"Loading (Skeleton Visible)"}),e.jsx(t,{loading:!0,width:300,height:20,children:e.jsx("div",{children:"This content is hidden while loading"})})]}),e.jsxs("div",{className:"skeleton-story-loading-item",children:[e.jsx("h4",{children:"Loaded (Content Visible)"}),e.jsx(t,{loading:!1,width:300,height:20,children:e.jsx("div",{className:"skeleton-story-loaded-content",children:"This content is now visible after loading completes"})})]})]})},v={render:()=>e.jsxs("div",{className:"skeleton-story-examples",children:[e.jsxs("div",{className:"skeleton-story-example",children:[e.jsx("h4",{children:"User Profile Card"}),e.jsxs("div",{className:"skeleton-story-profile-card",children:[e.jsx(t,{variant:"circular",width:60,height:60}),e.jsxs("div",{className:"skeleton-story-profile-info",children:[e.jsx(t,{variant:"text",width:120,height:16}),e.jsx(t,{variant:"text",width:80,height:14}),e.jsx(t,{variant:"text",width:150,height:12})]})]})]}),e.jsxs("div",{className:"skeleton-story-example",children:[e.jsx("h4",{children:"Article Card"}),e.jsxs("div",{className:"skeleton-story-article-card",children:[e.jsx(t,{variant:"rounded",aspectRatio:"16:9",width:"100%"}),e.jsxs("div",{className:"skeleton-story-article-content",children:[e.jsx(t,{variant:"text",lines:1,width:"100%",height:20}),e.jsx(t,{variant:"text",lines:3,width:"100%"}),e.jsxs("div",{className:"skeleton-story-article-meta",children:[e.jsx(t,{variant:"circular",width:24,height:24}),e.jsx(t,{variant:"text",width:100,height:12})]})]})]})]}),e.jsxs("div",{className:"skeleton-story-example",children:[e.jsx("h4",{children:"Comment Thread"}),e.jsxs("div",{className:"skeleton-story-comments",children:[e.jsxs("div",{className:"skeleton-story-comment",children:[e.jsx(t,{variant:"circular",width:32,height:32}),e.jsxs("div",{className:"skeleton-story-comment-content",children:[e.jsx(t,{variant:"text",width:80,height:12}),e.jsx(t,{variant:"text",lines:2,width:"100%"})]})]}),e.jsxs("div",{className:"skeleton-story-comment",children:[e.jsx(t,{variant:"circular",width:32,height:32}),e.jsxs("div",{className:"skeleton-story-comment-content",children:[e.jsx(t,{variant:"text",width:120,height:12}),e.jsx(t,{variant:"text",lines:1,width:"90%"})]})]}),e.jsxs("div",{className:"skeleton-story-comment",children:[e.jsx(t,{variant:"circular",width:32,height:32}),e.jsxs("div",{className:"skeleton-story-comment-content",children:[e.jsx(t,{variant:"text",width:100,height:12}),e.jsx(t,{variant:"text",lines:3,width:"100%"})]})]})]})]}),e.jsxs("div",{className:"skeleton-story-example",children:[e.jsx("h4",{children:"Data Table"}),e.jsxs("div",{className:"skeleton-story-table",children:[e.jsxs("div",{className:"skeleton-story-table-header",children:[e.jsx(t,{variant:"text",width:80,height:14}),e.jsx(t,{variant:"text",width:100,height:14}),e.jsx(t,{variant:"text",width:60,height:14}),e.jsx(t,{variant:"text",width:90,height:14})]}),Array.from({length:5},(x,u)=>e.jsxs("div",{className:"skeleton-story-table-row",children:[e.jsx(t,{variant:"text",width:70,height:12}),e.jsx(t,{variant:"text",width:90,height:12}),e.jsx(t,{variant:"text",width:50,height:12}),e.jsx(t,{variant:"text",width:80,height:12})]},u))]})]})]})},p={render:()=>e.jsxs("div",{className:"skeleton-story-performance",children:[e.jsxs("div",{className:"skeleton-story-performance-section",children:[e.jsx("h4",{children:"Fast Animation (0.8s)"}),e.jsx(t,{width:300,height:20,duration:.8})]}),e.jsxs("div",{className:"skeleton-story-performance-section",children:[e.jsx("h4",{children:"Normal Animation (1.5s)"}),e.jsx(t,{width:300,height:20,duration:1.5})]}),e.jsxs("div",{className:"skeleton-story-performance-section",children:[e.jsx("h4",{children:"Slow Animation (3s)"}),e.jsx(t,{width:300,height:20,duration:3})]}),e.jsxs("div",{className:"skeleton-story-performance-section",children:[e.jsx("h4",{children:"No Animation (Better Performance)"}),e.jsx(t,{width:300,height:20,animation:"none"})]})]})};var T,A,R;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    animation: 'pulse',
    width: 200,
    height: 20
  }
}`,...(R=(A=a.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var L,q,P;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(P=(q=o.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var V,W,B;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(B=(W=l.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var D,$,_;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(_=($=d.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var E,H,F;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(H=c.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var G,I,M;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(M=(I=h.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var U,X,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var O,z,J;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(J=(z=v.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,Q,Z;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Z=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};const ve=["Default","ShapeVariants","AnimationTypes","MultipleLines","AspectRatios","CustomColors","LoadingStates","RealWorldExamples","PerformanceComparison"];export{l as AnimationTypes,c as AspectRatios,h as CustomColors,a as Default,m as LoadingStates,d as MultipleLines,p as PerformanceComparison,v as RealWorldExamples,o as ShapeVariants,ve as __namedExportsOrder,me as default};
