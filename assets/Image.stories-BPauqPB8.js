import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as o,R as B}from"./index-GiUgBvb1.js";const _=()=>e.jsx("div",{className:"image__spinner",children:e.jsx("svg",{className:"image__spinner-icon",viewBox:"0 0 24 24",fill:"none",children:e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"31.416",strokeDashoffset:"31.416"})})}),ke=()=>e.jsxs("div",{className:"image__error",children:[e.jsx("svg",{className:"image__error-icon",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"})}),e.jsx("span",{className:"image__error-text",children:"Failed to load image"})]}),t=({src:s,alt:c,aspectRatio:N="auto",objectFit:m="cover",objectPosition:R="center",fallbackSrc:r,placeholder:T,errorContent:C,loading:me="lazy",sizes:pe,srcSet:he,blurPlaceholder:ue=!1,showSpinner:fe=!0,loadingSpinner:E,zoomOnHover:ge=!1,rounded:q=!1,border:I=!1,shadow:S=!1,fadeIn:k=!0,className:ve="",onLoad:n,onError:p,onLoadingChange:a,style:be,...xe})=>{const[H,h]=o.useState(!0),[P,l]=o.useState(!1),[we,F]=o.useState(!1),[d,A]=o.useState(s),ye=o.useRef(null),je=o.useCallback(i=>{k?setTimeout(()=>{h(!1),l(!1),F(!0),n==null||n(i),a==null||a(!1)},200):(h(!1),l(!1),F(!0),n==null||n(i),a==null||a(!1))},[k,n,a]),Ne=o.useCallback(i=>{if(h(!1),r&&d!==r){A(r),l(!1);return}l(!0),p==null||p(i),a==null||a(!1)},[r,d,p,a]);o.useEffect(()=>{s!==d&&(A(s),h(!0),l(!1),F(!1),a==null||a(!0))},[s,d,a]);const Re=["image",`image--aspect-${N}`,`image--object-fit-${m}`,`image--object-position-${R}`,q&&`image--rounded${typeof q=="string"?`-${q}`:""}`,I&&`image--border${typeof I=="string"?`-${I}`:""}`,S&&`image--shadow${typeof S=="string"?`-${S}`:""}`,ge&&"image--zoom-hover",k&&"image--fade-in",H&&"image--loading",P&&"image--error",we&&"image--loaded",ue&&"image--blur-placeholder",ve].filter(Boolean).join(" "),qe={...be},Ie=()=>{if(T)return T;if(fe&&(E||_)){const i=E||_;return typeof i=="function"?e.jsx(i,{}):i}return null},Se=()=>C||e.jsx(ke,{});return e.jsxs("div",{className:Re,style:qe,children:[H&&e.jsx("div",{className:"image__placeholder",children:Ie()}),P&&e.jsx("div",{className:"image__error-container",children:Se()}),e.jsx("img",{ref:ye,src:d,alt:c,loading:me,sizes:pe,srcSet:he,onLoad:je,onError:Ne,className:"image__element",...xe})]})};t.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:"Image source URL"},alt:{required:!0,tsType:{name:"string"},description:"Alternative text for accessibility"},aspectRatio:{required:!1,tsType:{name:"union",raw:"'1:1' | '16:9' | '4:3' | '3:2' | '21:9' | 'auto'",elements:[{name:"literal",value:"'1:1'"},{name:"literal",value:"'16:9'"},{name:"literal",value:"'4:3'"},{name:"literal",value:"'3:2'"},{name:"literal",value:"'21:9'"},{name:"literal",value:"'auto'"}]},description:"Aspect ratio of the image",defaultValue:{value:"'auto'",computed:!1}},objectFit:{required:!1,tsType:{name:"union",raw:"'cover' | 'contain' | 'fill' | 'scale-down' | 'none'",elements:[{name:"literal",value:"'cover'"},{name:"literal",value:"'contain'"},{name:"literal",value:"'fill'"},{name:"literal",value:"'scale-down'"},{name:"literal",value:"'none'"}]},description:"Object fit behavior",defaultValue:{value:"'cover'",computed:!1}},objectPosition:{required:!1,tsType:{name:"union",raw:"'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-right'"}]},description:"Object position",defaultValue:{value:"'center'",computed:!1}},fallbackSrc:{required:!1,tsType:{name:"string"},description:"Fallback image URL"},placeholder:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Placeholder content while loading"},errorContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Error content when image fails to load"},loading:{required:!1,tsType:{name:"union",raw:"'lazy' | 'eager'",elements:[{name:"literal",value:"'lazy'"},{name:"literal",value:"'eager'"}]},description:"Loading behavior",defaultValue:{value:"'lazy'",computed:!1}},sizes:{required:!1,tsType:{name:"string"},description:"Sizes attribute for responsive images"},srcSet:{required:!1,tsType:{name:"string"},description:"Source set for responsive images"},blurPlaceholder:{required:!1,tsType:{name:"boolean"},description:"Blur placeholder while loading",defaultValue:{value:"false",computed:!1}},showSpinner:{required:!1,tsType:{name:"boolean"},description:"Show loading spinner",defaultValue:{value:"true",computed:!1}},loadingSpinner:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom loading spinner"},zoomOnHover:{required:!1,tsType:{name:"boolean"},description:"Zoom on hover",defaultValue:{value:"false",computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:"boolean | 'sm' | 'md' | 'lg' | 'xl' | 'full'",elements:[{name:"boolean"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"}]},description:"Rounded corners",defaultValue:{value:"false",computed:!1}},border:{required:!1,tsType:{name:"union",raw:"boolean | 'sm' | 'md' | 'lg'",elements:[{name:"boolean"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Border variant",defaultValue:{value:"false",computed:!1}},shadow:{required:!1,tsType:{name:"union",raw:"boolean | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"boolean"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Shadow variant",defaultValue:{value:"false",computed:!1}},fadeIn:{required:!1,tsType:{name:"boolean"},description:"Fade in animation on load",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},onLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent<HTMLImageElement>) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent<HTMLImageElement>",elements:[{name:"HTMLImageElement"}]},name:"event"}],return:{name:"void"}}},description:"Load event handler"},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent<HTMLImageElement>) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent<HTMLImageElement>",elements:[{name:"HTMLImageElement"}]},name:"event"}],return:{name:"void"}}},description:"Error event handler"},onLoadingChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(loading: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"loading"}],return:{name:"void"}}},description:"Loading state change handler"}},composes:["Omit"]};const Ce={title:"Atoms/Image",component:t,parameters:{layout:"padded",docs:{description:{component:"A responsive image component with loading states, error handling, and various display options."}}},argTypes:{src:{control:"text",description:"Image source URL"},alt:{control:"text",description:"Alternative text for accessibility"},aspectRatio:{control:"select",options:["1:1","16:9","4:3","3:2","21:9","auto"],description:"Aspect ratio of the image"},objectFit:{control:"select",options:["cover","contain","fill","scale-down","none"],description:"Object fit behavior"},objectPosition:{control:"select",options:["center","top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"],description:"Object position"},fallbackSrc:{control:"text",description:"Fallback image URL"},loading:{control:"select",options:["lazy","eager"],description:"Loading behavior"},blurPlaceholder:{control:"boolean",description:"Blur placeholder while loading"},showSpinner:{control:"boolean",description:"Show loading spinner"},zoomOnHover:{control:"boolean",description:"Zoom on hover"},rounded:{control:"select",options:[!1,!0,"sm","md","lg","xl","full"],description:"Rounded corners"},border:{control:"select",options:[!1,!0,"sm","md","lg"],description:"Border variant"},shadow:{control:"select",options:[!1,!0,"sm","md","lg","xl"],description:"Shadow variant"},fadeIn:{control:"boolean",description:"Fade in animation on load"}}},u={args:{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",alt:"Beautiful landscape",aspectRatio:"16:9",width:400}},f={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Square (1:1)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Square image",aspectRatio:"1:1",width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Widescreen (16:9)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Widescreen image",aspectRatio:"16:9",width:300})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Standard (4:3)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Standard image",aspectRatio:"4:3",width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Cinema (21:9)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",alt:"Cinema image",aspectRatio:"21:9",width:350})]})]})},g={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Cover (Default)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Cover fit",aspectRatio:"1:1",objectFit:"cover",width:150})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Contain"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Contain fit",aspectRatio:"1:1",objectFit:"contain",width:150})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Fill"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Fill fit",aspectRatio:"1:1",objectFit:"fill",width:150})]})]})},v={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"No Rounding"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Small"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",rounded:"sm",width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Medium"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",rounded:"md",width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Large"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",rounded:"lg",width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Full (Circle)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",rounded:"full",width:120})]})]})},b={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Border"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",border:!0,width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Shadow"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",shadow:!0,width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Large Shadow"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",shadow:"lg",width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Combined"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",rounded:"lg",border:"md",shadow:"md",width:120})]})]})},x={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Zoom on Hover"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Hover to zoom",aspectRatio:"16:9",zoomOnHover:!0,rounded:"md",width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"With Fade Animation"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Fade in animation",aspectRatio:"16:9",fadeIn:!0,rounded:"md",width:200})]})]})},w={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Broken Image (Default Error)"}),e.jsx(t,{src:"https://broken-url-that-will-fail.jpg",alt:"Broken image",aspectRatio:"16:9",width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"With Fallback"}),e.jsx(t,{src:"https://broken-url-that-will-fail.jpg",fallbackSrc:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Image with fallback",aspectRatio:"16:9",width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Custom Error Content"}),e.jsx(t,{src:"https://broken-url-that-will-fail.jpg",alt:"Custom error",aspectRatio:"16:9",width:200,errorContent:e.jsxs("div",{className:"image-error-custom",children:[e.jsx("div",{className:"image-error-custom-icon",children:"⚠️"}),e.jsx("div",{children:"Custom error message"})]})})]})]})},y={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"With Spinner"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",alt:"Loading with spinner",aspectRatio:"16:9",showSpinner:!0,width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Custom Placeholder"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",alt:"Custom placeholder",aspectRatio:"16:9",width:200,placeholder:e.jsxs("div",{className:"image-placeholder-custom",children:[e.jsx("div",{className:"image-placeholder-custom-icon",children:"🖼️"}),e.jsx("div",{children:"Loading image..."})]})})]})]})},j={render:()=>{const[s,c]=B.useState(0),[N,m]=B.useState(!1),R=()=>{m(!0),c(r=>r+1)};return e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Fade Animation Test"}),e.jsx("p",{children:'Click "Reload Image" to see the fade animation in action'}),e.jsx("button",{onClick:R,className:"fade-test-button",children:"Reload Image"}),N&&e.jsx("p",{children:"Status: Loading..."}),e.jsx(t,{src:`https://picsum.photos/400/300?random=${s}`,alt:"Fade animation test",aspectRatio:"4:3",fadeIn:!0,rounded:"md",width:400,onLoadingChange:r=>m(r),onLoad:()=>console.log("Image loaded with fade animation")},s)]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Without Fade Animation"}),e.jsx("button",{onClick:()=>c(r=>r+1),className:"fade-test-button fade-test-button--secondary",children:"Reload Image"}),e.jsx(t,{src:`https://picsum.photos/400/300?random=${s+100}`,alt:"No fade animation",aspectRatio:"4:3",fadeIn:!1,rounded:"md",width:400},`no-fade-${s}`)]})]})},parameters:{docs:{description:{story:'Interactive test to demonstrate fade animation. Click "Reload Image" to trigger the animation with random images.'}}}};var D,V,z;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Beautiful landscape',
    aspectRatio: '16:9',
    width: 400
  }
}`,...(z=(V=u.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var M,L,W;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="story-grid">\r
      <div className="story-item">\r
        <h4>Square (1:1)</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Square image" aspectRatio="1:1" width={200} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Widescreen (16:9)</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Widescreen image" aspectRatio="16:9" width={300} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Standard (4:3)</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Standard image" aspectRatio="4:3" width={200} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Cinema (21:9)</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Cinema image" aspectRatio="21:9" width={350} />\r
      </div>\r
    </div>
}`,...(W=(L=f.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var $,O,G;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="story-grid">\r
      <div className="story-item">\r
        <h4>Cover (Default)</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Cover fit" aspectRatio="1:1" objectFit="cover" width={150} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Contain</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Contain fit" aspectRatio="1:1" objectFit="contain" width={150} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Fill</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Fill fit" aspectRatio="1:1" objectFit="fill" width={150} />\r
      </div>\r
    </div>
}`,...(G=(O=g.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var K,U,Z;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="story-grid">\r
      <div className="story-item">\r
        <h4>No Rounding</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" width={120} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Small</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" rounded="sm" width={120} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Medium</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" rounded="md" width={120} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Large</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" rounded="lg" width={120} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Full (Circle)</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" rounded="full" width={120} />\r
      </div>\r
    </div>
}`,...(Z=(U=v.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var Y,J,Q;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="story-grid">\r
      <div className="story-item">\r
        <h4>Border</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" border width={120} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Shadow</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" shadow width={120} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Large Shadow</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" shadow="lg" width={120} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Combined</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" rounded="lg" border="md" shadow="md" width={120} />\r
      </div>\r
    </div>
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,ee,te;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="story-grid">\r
      <div className="story-item">\r
        <h4>Zoom on Hover</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Hover to zoom" aspectRatio="16:9" zoomOnHover rounded="md" width={200} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>With Fade Animation</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Fade in animation" aspectRatio="16:9" fadeIn rounded="md" width={200} />\r
      </div>\r
    </div>
}`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,se;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="story-grid">\r
      <div className="story-item">\r
        <h4>Broken Image (Default Error)</h4>\r
        <Image src="https://broken-url-that-will-fail.jpg" alt="Broken image" aspectRatio="16:9" width={200} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>With Fallback</h4>\r
        <Image src="https://broken-url-that-will-fail.jpg" fallbackSrc="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Image with fallback" aspectRatio="16:9" width={200} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Custom Error Content</h4>\r
        <Image src="https://broken-url-that-will-fail.jpg" alt="Custom error" aspectRatio="16:9" width={200} errorContent={<div className="image-error-custom">\r
              <div className="image-error-custom-icon">⚠️</div>\r
              <div>Custom error message</div>\r
            </div>} />\r
      </div>\r
    </div>
}`,...(se=(re=w.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,oe,ne;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="story-grid">\r
      <div className="story-item">\r
        <h4>With Spinner</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Loading with spinner" aspectRatio="16:9" showSpinner width={200} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Custom Placeholder</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Custom placeholder" aspectRatio="16:9" width={200} placeholder={<div className="image-placeholder-custom">\r
              <div className="image-placeholder-custom-icon">🖼️</div>\r
              <div>Loading image...</div>\r
            </div>} />\r
      </div>\r
    </div>
}`,...(ne=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,de,ce;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [key, setKey] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false);
    const reloadImage = () => {
      setIsLoading(true);
      setKey(prev => prev + 1);
    };
    return <div className="story-grid">\r
        <div className="story-item">\r
          <h4>Fade Animation Test</h4>\r
          <p>Click "Reload Image" to see the fade animation in action</p>\r
          <button onClick={reloadImage} className="fade-test-button">\r
            Reload Image\r
          </button>\r
          {isLoading && <p>Status: Loading...</p>}\r
          <Image key={key} src={\`https://picsum.photos/400/300?random=\${key}\`} alt="Fade animation test" aspectRatio="4:3" fadeIn={true} rounded="md" width={400} onLoadingChange={loading => setIsLoading(loading)} onLoad={() => console.log('Image loaded with fade animation')} />\r
        </div>\r
        \r
        <div className="story-item">\r
          <h4>Without Fade Animation</h4>\r
          <button onClick={() => setKey(prev => prev + 1)} className="fade-test-button fade-test-button--secondary">\r
            Reload Image\r
          </button>\r
          <Image key={\`no-fade-\${key}\`} src={\`https://picsum.photos/400/300?random=\${key + 100}\`} alt="No fade animation" aspectRatio="4:3" fadeIn={false} rounded="md" width={400} />\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive test to demonstrate fade animation. Click "Reload Image" to trigger the animation with random images.'
      }
    }
  }
}`,...(ce=(de=j.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const Ee=["Default","AspectRatios","ObjectFitOptions","RoundedVariants","BordersAndShadows","InteractiveFeatures","ErrorHandling","LoadingStates","FadeAnimationTest"];export{f as AspectRatios,b as BordersAndShadows,u as Default,w as ErrorHandling,j as FadeAnimationTest,x as InteractiveFeatures,y as LoadingStates,g as ObjectFitOptions,v as RoundedVariants,Ee as __namedExportsOrder,Ce as default};
