import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r}from"./index-GiUgBvb1.js";const E=()=>e.jsx("div",{className:"image__spinner",children:e.jsx("svg",{className:"image__spinner-icon",viewBox:"0 0 24 24",fill:"none",children:e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"31.416",strokeDashoffset:"31.416"})})}),Ne=()=>e.jsxs("div",{className:"image__error",children:[e.jsx("svg",{className:"image__error-icon",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"})}),e.jsx("span",{className:"image__error-text",children:"Failed to load image"})]}),t=({src:o,alt:te,aspectRatio:ae="auto",objectFit:re="cover",objectPosition:se="center",fallbackSrc:l,placeholder:N,errorContent:R,loading:ie="lazy",sizes:oe,srcSet:le,blurPlaceholder:ne=!1,showSpinner:de=!0,loadingSpinner:q,zoomOnHover:ce=!1,rounded:x=!1,border:w=!1,shadow:j=!1,fadeIn:me=!0,className:pe="",onLoad:n,onError:d,onLoadingChange:a,style:he,...ue})=>{const[S,y]=r.useState(!0),[I,c]=r.useState(!1),[fe,T]=r.useState(!1),[i,F]=r.useState(o),ve=r.useRef(null),ge=r.useCallback(s=>{y(!1),c(!1),T(!0),n==null||n(s),a==null||a(!1)},[n,a]),be=r.useCallback(s=>{if(y(!1),l&&i!==l){F(l),c(!1);return}c(!0),d==null||d(s),a==null||a(!1)},[l,i,d,a]);r.useEffect(()=>{o!==i&&(F(o),y(!0),c(!1),T(!1),a==null||a(!0))},[o,i,a]);const xe=["image",`image--aspect-${ae}`,`image--object-fit-${re}`,`image--object-position-${se}`,x&&`image--rounded${typeof x=="string"?`-${x}`:""}`,w&&`image--border${typeof w=="string"?`-${w}`:""}`,j&&`image--shadow${typeof j=="string"?`-${j}`:""}`,ce&&"image--zoom-hover",me&&"image--fade-in",S&&"image--loading",I&&"image--error",fe&&"image--loaded",ne&&"image--blur-placeholder",pe].filter(Boolean).join(" "),we={...he},je=()=>{if(N)return N;if(de&&(q||E)){const s=q||E;return typeof s=="function"?e.jsx(s,{}):s}return null},ye=()=>R||e.jsx(Ne,{});return e.jsxs("div",{className:xe,style:we,children:[S&&e.jsx("div",{className:"image__placeholder",children:je()}),I&&e.jsx("div",{className:"image__error-container",children:ye()}),e.jsx("img",{ref:ve,src:i,alt:te,loading:ie,sizes:oe,srcSet:le,onLoad:ge,onError:be,className:"image__element",...ue})]})};t.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:"Image source URL"},alt:{required:!0,tsType:{name:"string"},description:"Alternative text for accessibility"},aspectRatio:{required:!1,tsType:{name:"union",raw:"'1:1' | '16:9' | '4:3' | '3:2' | '21:9' | 'auto'",elements:[{name:"literal",value:"'1:1'"},{name:"literal",value:"'16:9'"},{name:"literal",value:"'4:3'"},{name:"literal",value:"'3:2'"},{name:"literal",value:"'21:9'"},{name:"literal",value:"'auto'"}]},description:"Aspect ratio of the image",defaultValue:{value:"'auto'",computed:!1}},objectFit:{required:!1,tsType:{name:"union",raw:"'cover' | 'contain' | 'fill' | 'scale-down' | 'none'",elements:[{name:"literal",value:"'cover'"},{name:"literal",value:"'contain'"},{name:"literal",value:"'fill'"},{name:"literal",value:"'scale-down'"},{name:"literal",value:"'none'"}]},description:"Object fit behavior",defaultValue:{value:"'cover'",computed:!1}},objectPosition:{required:!1,tsType:{name:"union",raw:"'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-right'"}]},description:"Object position",defaultValue:{value:"'center'",computed:!1}},fallbackSrc:{required:!1,tsType:{name:"string"},description:"Fallback image URL"},placeholder:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Placeholder content while loading"},errorContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Error content when image fails to load"},loading:{required:!1,tsType:{name:"union",raw:"'lazy' | 'eager'",elements:[{name:"literal",value:"'lazy'"},{name:"literal",value:"'eager'"}]},description:"Loading behavior",defaultValue:{value:"'lazy'",computed:!1}},sizes:{required:!1,tsType:{name:"string"},description:"Sizes attribute for responsive images"},srcSet:{required:!1,tsType:{name:"string"},description:"Source set for responsive images"},blurPlaceholder:{required:!1,tsType:{name:"boolean"},description:"Blur placeholder while loading",defaultValue:{value:"false",computed:!1}},showSpinner:{required:!1,tsType:{name:"boolean"},description:"Show loading spinner",defaultValue:{value:"true",computed:!1}},loadingSpinner:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom loading spinner"},zoomOnHover:{required:!1,tsType:{name:"boolean"},description:"Zoom on hover",defaultValue:{value:"false",computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:"boolean | 'sm' | 'md' | 'lg' | 'xl' | 'full'",elements:[{name:"boolean"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"}]},description:"Rounded corners",defaultValue:{value:"false",computed:!1}},border:{required:!1,tsType:{name:"union",raw:"boolean | 'sm' | 'md' | 'lg'",elements:[{name:"boolean"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Border variant",defaultValue:{value:"false",computed:!1}},shadow:{required:!1,tsType:{name:"union",raw:"boolean | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"boolean"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Shadow variant",defaultValue:{value:"false",computed:!1}},fadeIn:{required:!1,tsType:{name:"boolean"},description:"Fade in animation on load",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},onLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent<HTMLImageElement>) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent<HTMLImageElement>",elements:[{name:"HTMLImageElement"}]},name:"event"}],return:{name:"void"}}},description:"Load event handler"},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent<HTMLImageElement>) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent<HTMLImageElement>",elements:[{name:"HTMLImageElement"}]},name:"event"}],return:{name:"void"}}},description:"Error event handler"},onLoadingChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(loading: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"loading"}],return:{name:"void"}}},description:"Loading state change handler"}},composes:["Omit"]};const Se={title:"Atoms/Image",component:t,parameters:{layout:"padded",docs:{description:{component:"A responsive image component with loading states, error handling, and various display options."}}},argTypes:{src:{control:"text",description:"Image source URL"},alt:{control:"text",description:"Alternative text for accessibility"},aspectRatio:{control:"select",options:["1:1","16:9","4:3","3:2","21:9","auto"],description:"Aspect ratio of the image"},objectFit:{control:"select",options:["cover","contain","fill","scale-down","none"],description:"Object fit behavior"},objectPosition:{control:"select",options:["center","top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"],description:"Object position"},fallbackSrc:{control:"text",description:"Fallback image URL"},loading:{control:"select",options:["lazy","eager"],description:"Loading behavior"},blurPlaceholder:{control:"boolean",description:"Blur placeholder while loading"},showSpinner:{control:"boolean",description:"Show loading spinner"},zoomOnHover:{control:"boolean",description:"Zoom on hover"},rounded:{control:"select",options:[!1,!0,"sm","md","lg","xl","full"],description:"Rounded corners"},border:{control:"select",options:[!1,!0,"sm","md","lg"],description:"Border variant"},shadow:{control:"select",options:[!1,!0,"sm","md","lg","xl"],description:"Shadow variant"},fadeIn:{control:"boolean",description:"Fade in animation on load"}}},m={args:{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",alt:"Beautiful landscape",aspectRatio:"16:9",width:400}},p={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Square (1:1)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Square image",aspectRatio:"1:1",width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Widescreen (16:9)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Widescreen image",aspectRatio:"16:9",width:300})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Standard (4:3)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Standard image",aspectRatio:"4:3",width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Cinema (21:9)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",alt:"Cinema image",aspectRatio:"21:9",width:350})]})]})},h={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Cover (Default)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Cover fit",aspectRatio:"1:1",objectFit:"cover",width:150})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Contain"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Contain fit",aspectRatio:"1:1",objectFit:"contain",width:150})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Fill"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Fill fit",aspectRatio:"1:1",objectFit:"fill",width:150})]})]})},u={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"No Rounding"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Small"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",rounded:"sm",width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Medium"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",rounded:"md",width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Large"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",rounded:"lg",width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Full (Circle)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",rounded:"full",width:120})]})]})},f={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Border"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",border:!0,width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Shadow"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",shadow:!0,width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Large Shadow"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",shadow:"lg",width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Combined"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",rounded:"lg",border:"md",shadow:"md",width:120})]})]})},v={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Zoom on Hover"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Hover to zoom",aspectRatio:"16:9",zoomOnHover:!0,rounded:"md",width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"With Fade Animation"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Fade in animation",aspectRatio:"16:9",fadeIn:!0,rounded:"md",width:200})]})]})},g={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Broken Image (Default Error)"}),e.jsx(t,{src:"https://broken-url-that-will-fail.jpg",alt:"Broken image",aspectRatio:"16:9",width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"With Fallback"}),e.jsx(t,{src:"https://broken-url-that-will-fail.jpg",fallbackSrc:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Image with fallback",aspectRatio:"16:9",width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Custom Error Content"}),e.jsx(t,{src:"https://broken-url-that-will-fail.jpg",alt:"Custom error",aspectRatio:"16:9",width:200,errorContent:e.jsxs("div",{className:"image-error-custom",children:[e.jsx("div",{className:"image-error-custom-icon",children:"⚠️"}),e.jsx("div",{children:"Custom error message"})]})})]})]})},b={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"With Spinner"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",alt:"Loading with spinner",aspectRatio:"16:9",showSpinner:!0,width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Custom Placeholder"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",alt:"Custom placeholder",aspectRatio:"16:9",width:200,placeholder:e.jsxs("div",{className:"image-placeholder-custom",children:[e.jsx("div",{className:"image-placeholder-custom-icon",children:"🖼️"}),e.jsx("div",{children:"Loading image..."})]})})]})]})};var H,P,C;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Beautiful landscape',
    aspectRatio: '16:9',
    width: 400
  }
}`,...(C=(P=m.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var k,B,_;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(_=(B=p.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var D,A,V;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(V=(A=h.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var z,M,O;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(O=(M=u.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var W,L,$;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(L=f.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var G,U,Z;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Z=(U=v.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var Y,J,K;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,ee;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(X=b.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};const Ie=["Default","AspectRatios","ObjectFitOptions","RoundedVariants","BordersAndShadows","InteractiveFeatures","ErrorHandling","LoadingStates"];export{p as AspectRatios,f as BordersAndShadows,m as Default,g as ErrorHandling,v as InteractiveFeatures,b as LoadingStates,h as ObjectFitOptions,u as RoundedVariants,Ie as __namedExportsOrder,Se as default};
