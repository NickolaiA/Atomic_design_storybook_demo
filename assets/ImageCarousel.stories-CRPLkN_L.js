import{r as i,j as e}from"./iframe-CY-Mz7KS.js";import{I as X}from"./Image-C5eihT2C.js";import{B as te}from"./Button-acQDbgEt.js";import"./preload-helper-PPVm8Dsz.js";const Re=({size:o=24})=>e.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("polyline",{points:"15,18 9,12 15,6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Se=({size:o=24})=>e.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("polyline",{points:"9,18 15,12 9,6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),_e=({size:o=24})=>e.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("polyline",{points:"18,15 12,9 6,15",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Me=({size:o=24})=>e.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("polyline",{points:"6,9 12,15 18,9",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),r=({images:o,activeIndex:h,defaultActiveIndex:le=0,orientation:m="horizontal",showArrows:Y=!0,showIndicators:ne=!0,showThumbnails:J=!1,thumbnailPosition:ce="bottom",autoPlay:N=!1,autoPlayInterval:Q=3e3,pauseOnHover:T=!0,loop:x=!0,aspectRatio:me="16:9",size:de="md",objectFit:ue="cover",touchEnabled:f=!0,fadeTransition:he=!1,enablePopup:O=!1,className:ge="",onChange:Z,onNavigate:A,prevArrow:pe,nextArrow:ve})=>{const[be,we]=i.useState(Math.max(0,Math.min(le,o.length-1))),$=h!==void 0,c=$?h:be,[d,xe]=i.useState(N),C=i.useRef(null),fe=i.useRef(null),[j,K]=i.useState(null),[U,ee]=i.useState(!1),[se,P]=i.useState(!1),l=i.useMemo(()=>o.filter(s=>s.src&&s.alt),[o]),je=l.length>0,n=l.length>1,y=i.useCallback(s=>{const t=Math.max(0,Math.min(s,l.length-1));$||we(t);const b=l[t];b&&Z?.(t,b)},[$,l,Z]),p=i.useCallback(()=>{if(!n)return;const s=x?(c-1+l.length)%l.length:Math.max(0,c-1);y(s),A?.("prev",s)},[n,x,c,l.length,y,A]),u=i.useCallback(()=>{if(!n)return;const s=x?(c+1)%l.length:Math.min(l.length-1,c+1);y(s),A?.("next",s)},[n,x,c,l.length,y,A]),I=i.useCallback(s=>{!n||s===c||y(s)},[n,c,y]),v=i.useCallback(()=>{C.current&&(clearInterval(C.current),C.current=null)},[]),z=i.useCallback(()=>{!N||!n||(v(),C.current=setInterval(()=>{u()},Q))},[N,n,u,Q,v]),ye=i.useCallback(()=>{T&&d&&v()},[T,d,v]),Ie=i.useCallback(()=>{T&&d&&z()},[T,d,z]),Ne=i.useCallback(s=>{if(!f||!n)return;const t=s.touches[0];K({x:t.clientX,y:t.clientY}),P(!1)},[f,n]),Te=i.useCallback(s=>{!j||!f||(P(!0),s.preventDefault())},[j,f]),Ae=i.useCallback(s=>{if(!j||!f||!se){K(null),P(!1);return}const t=s.changedTouches[0],b=t.clientX-j.x,R=t.clientY-j.y,oe=50;m==="horizontal"?Math.abs(b)>oe&&Math.abs(b)>Math.abs(R)&&(b>0?p():u()):Math.abs(R)>oe&&Math.abs(R)>Math.abs(b)&&(R>0?p():u()),K(null),P(!1)},[j,f,se,m,p,u]),Ce=i.useCallback(s=>{if(n)switch(s.key){case"ArrowLeft":m==="horizontal"&&(s.preventDefault(),p());break;case"ArrowRight":m==="horizontal"&&(s.preventDefault(),u());break;case"ArrowUp":m==="vertical"&&(s.preventDefault(),p());break;case"ArrowDown":m==="vertical"&&(s.preventDefault(),u());break;case"Home":s.preventDefault(),I(0);break;case"End":s.preventDefault(),I(l.length-1);break}},[n,m,p,u,I,l.length]),k=i.useCallback(()=>{ee(!1)},[]),Pe=i.useCallback(s=>{s.key==="Escape"&&k()},[k]);i.useEffect(()=>{if(U){const s=document.querySelector(".image-carousel__popup-overlay");return s&&s.focus(),document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}}},[U]),i.useEffect(()=>(d?z():v(),v),[d,z,v]);const ze=pe||(m==="horizontal"?e.jsx(Re,{}):e.jsx(_e,{})),ke=ve||(m==="horizontal"?e.jsx(Se,{}):e.jsx(Me,{})),ae=["image-carousel",`image-carousel--${m}`,`image-carousel--${de}`,he&&"image-carousel--fade",J&&`image-carousel--thumbnails-${ce}`,ge].filter(Boolean).join(" ");if(!je)return e.jsx("div",{className:`${ae} image-carousel--empty`,children:e.jsx("div",{className:"image-carousel__empty",children:e.jsx("p",{children:"No images to display"})})});const g=l[c],re=x||c>0,ie=x||c<l.length-1;return e.jsxs("div",{ref:fe,className:ae,onMouseEnter:ye,onMouseLeave:Ie,onTouchStart:Ne,onTouchMove:Te,onTouchEnd:Ae,onKeyDown:Ce,tabIndex:0,role:"region","aria-label":"Image carousel","aria-live":"polite",children:[e.jsxs("div",{className:"image-carousel__main",children:[Y&&n&&e.jsx(te,{className:`image-carousel__arrow image-carousel__arrow--prev ${re?"":"image-carousel__arrow--disabled"}`,onClick:p,disabled:!re,variant:"ghost",size:"sm","aria-label":"Previous image",children:ze}),e.jsxs("div",{className:`image-carousel__image-container ${O?"image-carousel__image-container--clickable":""}`,onClick:O?()=>ee(!0):void 0,children:[e.jsx(X,{src:g.src,alt:g.alt,aspectRatio:me,objectFit:ue,className:"image-carousel__image",fadeIn:!0}),g.caption&&e.jsx("div",{className:"image-carousel__caption",children:g.caption})]}),Y&&n&&e.jsx(te,{className:`image-carousel__arrow image-carousel__arrow--next ${ie?"":"image-carousel__arrow--disabled"}`,onClick:u,disabled:!ie,variant:"ghost",size:"sm","aria-label":"Next image",children:ke})]}),ne&&n&&e.jsx("div",{className:"image-carousel__indicators",children:l.map((s,t)=>e.jsx("button",{className:`image-carousel__indicator ${t===c?"image-carousel__indicator--active":""}`,onClick:()=>I(t),"aria-label":`Go to image ${t+1}`,"aria-current":t===c?"true":"false"},t))}),J&&n&&e.jsx("div",{className:"image-carousel__thumbnails",children:l.map((s,t)=>e.jsx("button",{className:`image-carousel__thumbnail ${t===c?"image-carousel__thumbnail--active":""}`,onClick:()=>I(t),"aria-label":`Go to ${s.alt}`,children:e.jsx(X,{src:s.thumbnail||s.src,alt:s.alt,aspectRatio:"1:1",objectFit:"cover",className:"image-carousel__thumbnail-image",showSpinner:!1})},s.id))}),N&&n&&e.jsx("div",{className:"image-carousel__controls",children:e.jsx("button",{className:"image-carousel__play-pause",onClick:()=>xe(!d),"aria-label":d?"Pause slideshow":"Play slideshow",children:d?"⏸️":"▶️"})}),O&&U&&e.jsx("div",{className:"image-carousel__popup-overlay",onClick:k,onKeyDown:Pe,role:"dialog","aria-modal":"true","aria-label":"Full size image",tabIndex:-1,children:e.jsxs("div",{className:"image-carousel__popup-content",onClick:s=>s.stopPropagation(),children:[e.jsx("button",{className:"image-carousel__popup-close",onClick:k,"aria-label":"Close full size image",children:"✕"}),e.jsx(X,{src:g.src,alt:g.alt,aspectRatio:"auto",objectFit:"contain",className:"image-carousel__popup-image",showSpinner:!1}),g.caption&&e.jsx("div",{className:"image-carousel__popup-caption",children:g.caption})]})})]})};r.__docgenInfo={description:"",methods:[],displayName:"ImageCarousel",props:{images:{required:!0,tsType:{name:"Array",elements:[{name:"CarouselImage"}],raw:"CarouselImage[]"},description:"Array of images to display"},activeIndex:{required:!1,tsType:{name:"number"},description:"Current active image index (controlled)"},defaultActiveIndex:{required:!1,tsType:{name:"number"},description:"Default active image index (uncontrolled)",defaultValue:{value:"0",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Orientation of the carousel",defaultValue:{value:"'horizontal'",computed:!1}},showArrows:{required:!1,tsType:{name:"boolean"},description:"Whether to show navigation arrows",defaultValue:{value:"true",computed:!1}},showIndicators:{required:!1,tsType:{name:"boolean"},description:"Whether to show dots/indicators",defaultValue:{value:"true",computed:!1}},showThumbnails:{required:!1,tsType:{name:"boolean"},description:"Whether to show thumbnails",defaultValue:{value:"false",computed:!1}},thumbnailPosition:{required:!1,tsType:{name:"union",raw:"'bottom' | 'top' | 'left' | 'right'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Position of thumbnails",defaultValue:{value:"'bottom'",computed:!1}},autoPlay:{required:!1,tsType:{name:"boolean"},description:"Whether to auto-play",defaultValue:{value:"false",computed:!1}},autoPlayInterval:{required:!1,tsType:{name:"number"},description:"Auto-play interval in milliseconds",defaultValue:{value:"3000",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"Whether to pause auto-play on hover",defaultValue:{value:"true",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"Whether carousel should loop",defaultValue:{value:"true",computed:!1}},aspectRatio:{required:!1,tsType:{name:"union",raw:"'1:1' | '16:9' | '4:3' | '3:2' | '21:9' | 'auto'",elements:[{name:"literal",value:"'1:1'"},{name:"literal",value:"'16:9'"},{name:"literal",value:"'4:3'"},{name:"literal",value:"'3:2'"},{name:"literal",value:"'21:9'"},{name:"literal",value:"'auto'"}]},description:"Aspect ratio for main images",defaultValue:{value:"'16:9'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},objectFit:{required:!1,tsType:{name:"union",raw:"'cover' | 'contain' | 'fill' | 'scale-down' | 'none'",elements:[{name:"literal",value:"'cover'"},{name:"literal",value:"'contain'"},{name:"literal",value:"'fill'"},{name:"literal",value:"'scale-down'"},{name:"literal",value:"'none'"}]},description:"Image object fit",defaultValue:{value:"'cover'",computed:!1}},touchEnabled:{required:!1,tsType:{name:"boolean"},description:"Enable touch/swipe gestures",defaultValue:{value:"true",computed:!1}},fadeTransition:{required:!1,tsType:{name:"boolean"},description:"Fade transition instead of slide",defaultValue:{value:"false",computed:!1}},enablePopup:{required:!1,tsType:{name:"boolean"},description:"Enable full-size popup when main image is clicked",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom CSS class",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number, image: CarouselImage) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"CarouselImage"},name:"image"}],return:{name:"void"}}},description:"Callback when active image changes"},onNavigate:{required:!1,tsType:{name:"signature",type:"function",raw:"(direction: 'prev' | 'next', index: number) => void",signature:{arguments:[{type:{name:"union",raw:"'prev' | 'next'",elements:[{name:"literal",value:"'prev'"},{name:"literal",value:"'next'"}]},name:"direction"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Callback when navigation arrow is clicked"},prevArrow:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom previous arrow content"},nextArrow:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom next arrow content"}}};const a=[{id:"1",src:"https://picsum.photos/800/600?random=1",alt:"Beautiful landscape with mountains",thumbnail:"https://picsum.photos/100/100?random=1",caption:"Majestic mountain landscape at sunset"},{id:"2",src:"https://picsum.photos/800/600?random=2",alt:"Ocean waves on beach",thumbnail:"https://picsum.photos/100/100?random=2",caption:"Peaceful ocean waves meeting the shore"},{id:"3",src:"https://picsum.photos/800/600?random=3",alt:"Forest with tall trees",thumbnail:"https://picsum.photos/100/100?random=3",caption:"Dense forest with towering pine trees"},{id:"4",src:"https://picsum.photos/800/600?random=4",alt:"Desert landscape",thumbnail:"https://picsum.photos/100/100?random=4",caption:"Vast desert with rolling sand dunes"},{id:"5",src:"https://picsum.photos/800/600?random=5",alt:"City skyline",thumbnail:"https://picsum.photos/100/100?random=5",caption:"Modern city skyline at night"}],Ve=[{id:"v1",src:"https://picsum.photos/600/800?random=10",alt:"Tall building architecture",thumbnail:"https://picsum.photos/100/100?random=10",caption:"Modern architectural design"},{id:"v2",src:"https://picsum.photos/600/800?random=11",alt:"Waterfall cascade",thumbnail:"https://picsum.photos/100/100?random=11",caption:"Powerful waterfall in natural setting"},{id:"v3",src:"https://picsum.photos/600/800?random=12",alt:"Tall tree in forest",thumbnail:"https://picsum.photos/100/100?random=12",caption:"Ancient tree reaching toward the sky"}],We={title:"Molecules/ImageCarousel",component:r,parameters:{layout:"centered",docs:{description:{component:"A flexible image carousel component that supports both horizontal and vertical orientations with various navigation options."}}},argTypes:{images:{control:!1,description:"Array of images to display in the carousel"},activeIndex:{control:"number",description:"Current active image index (controlled)"},defaultActiveIndex:{control:"number",description:"Default active image index (uncontrolled)"},orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation of the carousel"},showArrows:{control:"boolean",description:"Whether to show navigation arrows"},showIndicators:{control:"boolean",description:"Whether to show dots/indicators"},showThumbnails:{control:"boolean",description:"Whether to show thumbnails"},thumbnailPosition:{control:"select",options:["bottom","top","left","right"],description:"Position of thumbnails"},autoPlay:{control:"boolean",description:"Whether to auto-play"},autoPlayInterval:{control:"number",description:"Auto-play interval in milliseconds"},pauseOnHover:{control:"boolean",description:"Whether to pause auto-play on hover"},loop:{control:"boolean",description:"Whether carousel should loop"},aspectRatio:{control:"select",options:["1:1","16:9","4:3","3:2","21:9","auto"],description:"Aspect ratio for main images"},size:{control:"select",options:["sm","md","lg","xl"],description:"Size variant"},objectFit:{control:"select",options:["cover","contain","fill","scale-down","none"],description:"Image object fit"},touchEnabled:{control:"boolean",description:"Enable touch/swipe gestures"},fadeTransition:{control:"boolean",description:"Fade transition instead of slide"},enablePopup:{control:"boolean",description:"Enable full-size popup when main image is clicked"},onChange:{description:"Callback when active image changes",control:!1},onNavigate:{description:"Callback when navigation arrow is clicked",control:!1}},tags:["autodocs"]},w={args:{images:a,defaultActiveIndex:0,orientation:"horizontal",showArrows:!0,showIndicators:!0,showThumbnails:!1,autoPlay:!1,loop:!0,aspectRatio:"16:9",size:"md",objectFit:"cover",touchEnabled:!0,fadeTransition:!1,enablePopup:!1}},S={args:{...w.args,showThumbnails:!0,thumbnailPosition:"bottom"}},_={args:{...w.args,autoPlay:!0,autoPlayInterval:2e3,pauseOnHover:!0}},M={args:{images:Ve,orientation:"vertical",showArrows:!0,showIndicators:!0,showThumbnails:!1,size:"md",aspectRatio:"4:3",loop:!0}},V={render:()=>e.jsxs("div",{className:"image-carousel-story-sizes",children:[e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,3),size:"sm",showArrows:!0,showIndicators:!0}),e.jsx("p",{children:"Small"})]}),e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,3),size:"md",showArrows:!0,showIndicators:!0}),e.jsx("p",{children:"Medium"})]}),e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,3),size:"lg",showArrows:!0,showIndicators:!0}),e.jsx("p",{children:"Large"})]})]})},L={render:()=>e.jsxs("div",{className:"image-carousel-story-ratios",children:[e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,3),aspectRatio:"16:9",size:"sm",showArrows:!0,showIndicators:!0}),e.jsx("p",{children:"16:9 Widescreen"})]}),e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,3),aspectRatio:"4:3",size:"sm",showArrows:!0,showIndicators:!0}),e.jsx("p",{children:"4:3 Standard"})]}),e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,3),aspectRatio:"1:1",size:"sm",showArrows:!0,showIndicators:!0}),e.jsx("p",{children:"1:1 Square"})]})]})},E={parameters:{docs:{description:{story:"Thumbnails can be positioned on any side of the main image: bottom (default), top, left, or right. Vertical positions (left/right) create a horizontal layout with vertical thumbnail strips."}}},render:()=>e.jsxs("div",{className:"image-carousel-story-thumbnails",children:[e.jsxs("div",{className:"image-carousel-story-section",children:[e.jsx("h3",{children:"Horizontal Thumbnail Layouts"}),e.jsxs("div",{className:"image-carousel-story-row",children:[e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,6),size:"sm",showThumbnails:!0,thumbnailPosition:"bottom",showArrows:!0,aspectRatio:"16:9"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Bottom Thumbnails"})," (Default)"]}),e.jsx("small",{children:"Most common layout, thumbnails below main image"})]}),e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,6),size:"sm",showThumbnails:!0,thumbnailPosition:"top",showArrows:!0,aspectRatio:"16:9"}),e.jsx("p",{children:e.jsx("strong",{children:"Top Thumbnails"})}),e.jsx("small",{children:"Thumbnails above main image"})]})]})]}),e.jsxs("div",{className:"image-carousel-story-section",children:[e.jsx("h3",{children:"Vertical Thumbnail Layouts"}),e.jsxs("div",{className:"image-carousel-story-row",children:[e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,8),size:"md",showThumbnails:!0,thumbnailPosition:"left",showArrows:!0,aspectRatio:"4:3"}),e.jsx("p",{children:e.jsx("strong",{children:"Left Thumbnails"})}),e.jsx("small",{children:"Vertical thumbnail strip on the left side"})]}),e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,8),size:"md",showThumbnails:!0,thumbnailPosition:"right",showArrows:!0,aspectRatio:"4:3"}),e.jsx("p",{children:e.jsx("strong",{children:"Right Thumbnails"})}),e.jsx("small",{children:"Vertical thumbnail strip on the right side"})]})]})]}),e.jsxs("div",{className:"image-carousel-story-info",children:[e.jsx("h4",{children:"Thumbnail Position Guidelines:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Bottom:"})," Default and most familiar to users. Works well for all screen sizes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Top:"})," Good for layouts where content follows below the carousel."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Left:"})," Ideal for product galleries, creates a professional catalog feel."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Right:"})," Good for right-to-left reading patterns or specific design requirements."]})]}),e.jsx("h4",{children:"Layout Considerations:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Horizontal (top/bottom):"})," Better for mobile devices, allows horizontal scrolling of thumbnails."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Vertical (left/right):"})," Better for desktop, provides more main image space vertically."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Screen Space:"})," Vertical layouts work best with wider containers (md, lg, xl sizes)."]})]})]})]})},D={parameters:{docs:{description:{story:"Showcase of vertical thumbnail layouts (left and right positions) with different sizes and configurations. Perfect for product galleries and professional image showcases."}}},render:()=>e.jsxs("div",{className:"image-carousel-story-vertical-thumbnails",children:[e.jsxs("div",{className:"image-carousel-story-section",children:[e.jsx("h3",{children:"Left Vertical Thumbnails"}),e.jsx("div",{className:"image-carousel-story-vertical-demo",children:e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a,size:"lg",showThumbnails:!0,thumbnailPosition:"left",showArrows:!0,aspectRatio:"16:9",enablePopup:!0}),e.jsx("p",{children:e.jsx("strong",{children:"Large Left Thumbnails"})}),e.jsx("small",{children:"Professional gallery layout with popup support"})]})})]}),e.jsxs("div",{className:"image-carousel-story-section",children:[e.jsx("h3",{children:"Right Vertical Thumbnails"}),e.jsx("div",{className:"image-carousel-story-vertical-demo",children:e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a,size:"lg",showThumbnails:!0,thumbnailPosition:"right",showArrows:!0,aspectRatio:"4:3",enablePopup:!0}),e.jsx("p",{children:e.jsx("strong",{children:"Large Right Thumbnails"})}),e.jsx("small",{children:"Alternative vertical layout with 4:3 aspect ratio"})]})})]}),e.jsxs("div",{className:"image-carousel-story-section",children:[e.jsx("h3",{children:"Size Comparison"}),e.jsxs("div",{className:"image-carousel-story-row",children:[e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,6),size:"md",showThumbnails:!0,thumbnailPosition:"left",showArrows:!0,aspectRatio:"1:1"}),e.jsx("p",{children:e.jsx("strong",{children:"Medium Left"})}),e.jsx("small",{children:"Square aspect ratio, medium size"})]}),e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,6),size:"md",showThumbnails:!0,thumbnailPosition:"right",showArrows:!0,aspectRatio:"1:1"}),e.jsx("p",{children:e.jsx("strong",{children:"Medium Right"})}),e.jsx("small",{children:"Square aspect ratio, medium size"})]})]})]}),e.jsxs("div",{className:"image-carousel-story-info",children:[e.jsx("h4",{children:"Vertical Thumbnail Benefits:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Space Efficient:"})," Maximizes main image vertical space"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Professional Look:"})," Creates a gallery-like appearance"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Better for Desktop:"})," Takes advantage of wider screens"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Product Galleries:"})," Ideal for e-commerce and portfolios"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accessibility:"})," Easier to navigate with keyboard"]})]}),e.jsx("h4",{children:"Best Practices:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use larger sizes (md, lg, xl)"})," for better thumbnail visibility"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Limit to 8-12 images"})," to prevent excessive scrolling"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Consider aspect ratio:"})," 16:9 or 4:3 work best with vertical thumbnails"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Enable popup"})," for detailed image viewing"]})]})]})]})},q={parameters:{docs:{description:{story:"Configure which navigation controls are visible: arrows, indicators (dots), and thumbnails can all be shown or hidden independently. Mix and match to create the perfect navigation experience for your use case."}}},render:()=>e.jsxs("div",{className:"image-carousel-story-navigation",children:[e.jsxs("div",{className:"image-carousel-story-section",children:[e.jsx("h3",{children:"Indicators (Dots) Configuration"}),e.jsxs("div",{className:"image-carousel-story-row",children:[e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,5),size:"md",showArrows:!0,showIndicators:!0,showThumbnails:!1,aspectRatio:"16:9"}),e.jsx("p",{children:e.jsx("strong",{children:"With Indicators"})}),e.jsxs("small",{children:["showIndicators=",!0," (default)"]})]}),e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,5),size:"md",showArrows:!0,showIndicators:!1,showThumbnails:!1,aspectRatio:"16:9"}),e.jsx("p",{children:e.jsx("strong",{children:"Without Indicators"})}),e.jsxs("small",{children:["showIndicators=",!1]})]})]})]}),e.jsxs("div",{className:"image-carousel-story-section",children:[e.jsx("h3",{children:"Navigation Combinations"}),e.jsxs("div",{className:"image-carousel-story-row",children:[e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,6),size:"md",showArrows:!1,showIndicators:!0,showThumbnails:!1,aspectRatio:"4:3"}),e.jsx("p",{children:e.jsx("strong",{children:"Indicators Only"})}),e.jsx("small",{children:"Perfect for minimal design"})]}),e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,6),size:"md",showArrows:!0,showIndicators:!1,showThumbnails:!1,aspectRatio:"4:3"}),e.jsx("p",{children:e.jsx("strong",{children:"Arrows Only"})}),e.jsx("small",{children:"Clean, streamlined navigation"})]})]})]}),e.jsxs("div",{className:"image-carousel-story-section",children:[e.jsx("h3",{children:"Thumbnails vs Indicators"}),e.jsxs("div",{className:"image-carousel-story-row",children:[e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,8),size:"md",showArrows:!0,showIndicators:!1,showThumbnails:!0,thumbnailPosition:"bottom",aspectRatio:"16:9"}),e.jsx("p",{children:e.jsx("strong",{children:"Thumbnails Instead of Indicators"})}),e.jsxs("small",{children:["showThumbnails=",!0,", showIndicators=",!1]})]}),e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,8),size:"md",showArrows:!0,showIndicators:!0,showThumbnails:!0,thumbnailPosition:"bottom",aspectRatio:"16:9"}),e.jsx("p",{children:e.jsx("strong",{children:"Both Thumbnails and Indicators"})}),e.jsx("small",{children:"Maximum navigation options"})]})]})]}),e.jsxs("div",{className:"image-carousel-story-section",children:[e.jsx("h3",{children:"Minimal Navigation"}),e.jsx("div",{className:"image-carousel-story-centered",children:e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:a.slice(0,4),size:"lg",showArrows:!1,showIndicators:!1,showThumbnails:!1,aspectRatio:"21:9",touchEnabled:!0}),e.jsx("p",{children:e.jsx("strong",{children:"No Visible Navigation"})}),e.jsx("small",{children:"Touch/swipe only - ultra-minimal design"})]})})]}),e.jsxs("div",{className:"image-carousel-story-info",children:[e.jsx("h4",{children:"Navigation Control Options:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"showArrows:"})," Previous/Next arrow buttons (default: true)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"showIndicators:"})," Dot indicators below main image (default: true)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"showThumbnails:"})," Thumbnail navigation strip (default: false)"]})]}),e.jsx("h4",{children:"Recommended Combinations:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Product Gallery:"})," Arrows + Thumbnails (no indicators)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hero Carousel:"})," Arrows + Indicators (no thumbnails)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Minimal Design:"})," Indicators only (no arrows/thumbnails)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mobile-First:"})," Touch + Indicators (arrows optional)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Professional Portfolio:"})," All navigation controls enabled"]})]}),e.jsx("h4",{children:"Accessibility Notes:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always provide some navigation method"})," - don't disable all controls"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Touch/keyboard navigation"})," still works when visual controls are hidden"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Indicators improve accessibility"})," by showing current position"]})]})]})]})},W={render:()=>{const[o,h]=i.useState(0);return e.jsxs("div",{className:"image-carousel-story-controlled",children:[e.jsx(r,{images:a,activeIndex:o,onChange:h,showArrows:!0,showIndicators:!0,showThumbnails:!0,size:"md"}),e.jsxs("div",{className:"image-carousel-story-controls",children:[e.jsxs("p",{children:["Current image: ",e.jsx("strong",{children:o+1})," of ",e.jsx("strong",{children:a.length})]}),e.jsxs("p",{children:["Image: ",e.jsx("em",{children:a[o]?.alt})]}),e.jsxs("div",{className:"image-carousel-story-buttons",children:[e.jsx("button",{onClick:()=>h(0),children:"First"}),e.jsx("button",{onClick:()=>h(Math.max(0,o-1)),disabled:o===0,children:"Previous"}),e.jsx("button",{onClick:()=>h(Math.min(a.length-1,o+1)),disabled:o===a.length-1,children:"Next"}),e.jsx("button",{onClick:()=>h(a.length-1),children:"Last"})]})]})]})}},B={render:()=>e.jsxs("div",{className:"image-carousel-story-gallery",children:[e.jsx("h3",{children:"Photo Gallery"}),e.jsx("p",{children:"A complete photo gallery experience with all features enabled"}),e.jsx(r,{images:a,showArrows:!0,showIndicators:!0,showThumbnails:!0,thumbnailPosition:"bottom",autoPlay:!0,autoPlayInterval:4e3,pauseOnHover:!0,loop:!0,aspectRatio:"16:9",size:"lg",touchEnabled:!0,objectFit:"cover"}),e.jsxs("div",{className:"image-carousel-story-features",children:[e.jsx("h4",{children:"Features Demonstrated:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"✅ Navigation arrows with hover effects"}),e.jsx("li",{children:"✅ Dot indicators for direct navigation"}),e.jsx("li",{children:"✅ Thumbnail previews at bottom"}),e.jsx("li",{children:"✅ Auto-play with pause on hover"}),e.jsx("li",{children:"✅ Touch/swipe gestures (try on mobile)"}),e.jsx("li",{children:"✅ Keyboard navigation (Arrow keys, Home, End)"}),e.jsx("li",{children:"✅ Image captions with overlay"}),e.jsx("li",{children:"✅ Looping navigation"}),e.jsx("li",{children:"✅ Responsive design"}),e.jsx("li",{children:"✅ Accessibility features"})]})]})]})},F={render:()=>e.jsxs("div",{className:"image-carousel-story-errors",children:[e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:[]}),e.jsx("p",{children:"Empty images array"})]}),e.jsxs("div",{className:"image-carousel-story-demo",children:[e.jsx(r,{images:[{id:"single",src:"https://picsum.photos/400/300?random=99",alt:"Single image",caption:"Only one image - no navigation needed"}],showArrows:!0,showIndicators:!0,showThumbnails:!0}),e.jsx("p",{children:"Single image (no navigation)"})]})]})},G={render:()=>e.jsxs("div",{className:"image-carousel-story-accessibility",children:[e.jsx(r,{images:a,showArrows:!0,showIndicators:!0,showThumbnails:!0,size:"md",aspectRatio:"16:9"}),e.jsxs("div",{className:"image-carousel-story-accessibility-info",children:[e.jsx("h4",{children:"Accessibility Features:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Keyboard Navigation:"})," Arrow keys, Home, End, Tab"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Screen Reader Support:"})," ARIA labels, roles, and live regions"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Focus Management:"})," Visible focus indicators and proper tab order"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Alternative Text:"})," Each image has descriptive alt text"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Semantic HTML:"})," Proper button elements and structure"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Motion Preferences:"})," Respects prefers-reduced-motion"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"High Contrast:"})," Enhanced borders in high contrast mode"]})]}),e.jsx("h4",{children:"Keyboard Shortcuts:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"← →"})," Navigate left/right (horizontal)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"↑ ↓"})," Navigate up/down (vertical)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Home"})," Go to first image"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"End"})," Go to last image"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tab"})," Navigate between controls"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Enter/Space"})," Activate buttons"]})]})]})]})},H={args:{...w.args,enablePopup:!0,showThumbnails:!0,thumbnailPosition:"bottom"},parameters:{docs:{description:{story:"Click on the main image to view it in full-size popup. Press Escape or click outside to close."}}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    defaultActiveIndex: 0,
    orientation: 'horizontal',
    showArrows: true,
    showIndicators: true,
    showThumbnails: false,
    autoPlay: false,
    loop: true,
    aspectRatio: '16:9',
    size: 'md',
    objectFit: 'cover',
    touchEnabled: true,
    fadeTransition: false,
    enablePopup: false
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showThumbnails: true,
    thumbnailPosition: 'bottom'
  }
}`,...S.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    autoPlay: true,
    autoPlayInterval: 2000,
    pauseOnHover: true
  }
}`,..._.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    images: verticalImages,
    orientation: 'vertical',
    showArrows: true,
    showIndicators: true,
    showThumbnails: false,
    size: 'md',
    aspectRatio: '4:3',
    loop: true
  }
}`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div className="image-carousel-story-sizes">\r
      <div className="image-carousel-story-demo">\r
        <ImageCarousel images={sampleImages.slice(0, 3)} size="sm" showArrows showIndicators />\r
        <p>Small</p>\r
      </div>\r
      <div className="image-carousel-story-demo">\r
        <ImageCarousel images={sampleImages.slice(0, 3)} size="md" showArrows showIndicators />\r
        <p>Medium</p>\r
      </div>\r
      <div className="image-carousel-story-demo">\r
        <ImageCarousel images={sampleImages.slice(0, 3)} size="lg" showArrows showIndicators />\r
        <p>Large</p>\r
      </div>\r
    </div>
}`,...V.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="image-carousel-story-ratios">\r
      <div className="image-carousel-story-demo">\r
        <ImageCarousel images={sampleImages.slice(0, 3)} aspectRatio="16:9" size="sm" showArrows showIndicators />\r
        <p>16:9 Widescreen</p>\r
      </div>\r
      <div className="image-carousel-story-demo">\r
        <ImageCarousel images={sampleImages.slice(0, 3)} aspectRatio="4:3" size="sm" showArrows showIndicators />\r
        <p>4:3 Standard</p>\r
      </div>\r
      <div className="image-carousel-story-demo">\r
        <ImageCarousel images={sampleImages.slice(0, 3)} aspectRatio="1:1" size="sm" showArrows showIndicators />\r
        <p>1:1 Square</p>\r
      </div>\r
    </div>
}`,...L.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Thumbnails can be positioned on any side of the main image: bottom (default), top, left, or right. Vertical positions (left/right) create a horizontal layout with vertical thumbnail strips.'
      }
    }
  },
  render: () => <div className="image-carousel-story-thumbnails">\r
      <div className="image-carousel-story-section">\r
        <h3>Horizontal Thumbnail Layouts</h3>\r
        <div className="image-carousel-story-row">\r
          <div className="image-carousel-story-demo">\r
            <ImageCarousel images={sampleImages.slice(0, 6)} size="sm" showThumbnails thumbnailPosition="bottom" showArrows aspectRatio="16:9" />\r
            <p><strong>Bottom Thumbnails</strong> (Default)</p>\r
            <small>Most common layout, thumbnails below main image</small>\r
          </div>\r
          <div className="image-carousel-story-demo">\r
            <ImageCarousel images={sampleImages.slice(0, 6)} size="sm" showThumbnails thumbnailPosition="top" showArrows aspectRatio="16:9" />\r
            <p><strong>Top Thumbnails</strong></p>\r
            <small>Thumbnails above main image</small>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="image-carousel-story-section">\r
        <h3>Vertical Thumbnail Layouts</h3>\r
        <div className="image-carousel-story-row">\r
          <div className="image-carousel-story-demo">\r
            <ImageCarousel images={sampleImages.slice(0, 8)} size="md" showThumbnails thumbnailPosition="left" showArrows aspectRatio="4:3" />\r
            <p><strong>Left Thumbnails</strong></p>\r
            <small>Vertical thumbnail strip on the left side</small>\r
          </div>\r
          <div className="image-carousel-story-demo">\r
            <ImageCarousel images={sampleImages.slice(0, 8)} size="md" showThumbnails thumbnailPosition="right" showArrows aspectRatio="4:3" />\r
            <p><strong>Right Thumbnails</strong></p>\r
            <small>Vertical thumbnail strip on the right side</small>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="image-carousel-story-info">\r
        <h4>Thumbnail Position Guidelines:</h4>\r
        <ul>\r
          <li><strong>Bottom:</strong> Default and most familiar to users. Works well for all screen sizes.</li>\r
          <li><strong>Top:</strong> Good for layouts where content follows below the carousel.</li>\r
          <li><strong>Left:</strong> Ideal for product galleries, creates a professional catalog feel.</li>\r
          <li><strong>Right:</strong> Good for right-to-left reading patterns or specific design requirements.</li>\r
        </ul>\r
        \r
        <h4>Layout Considerations:</h4>\r
        <ul>\r
          <li><strong>Horizontal (top/bottom):</strong> Better for mobile devices, allows horizontal scrolling of thumbnails.</li>\r
          <li><strong>Vertical (left/right):</strong> Better for desktop, provides more main image space vertically.</li>\r
          <li><strong>Screen Space:</strong> Vertical layouts work best with wider containers (md, lg, xl sizes).</li>\r
        </ul>\r
      </div>\r
    </div>
}`,...E.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Showcase of vertical thumbnail layouts (left and right positions) with different sizes and configurations. Perfect for product galleries and professional image showcases.'
      }
    }
  },
  render: () => <div className="image-carousel-story-vertical-thumbnails">\r
      <div className="image-carousel-story-section">\r
        <h3>Left Vertical Thumbnails</h3>\r
        <div className="image-carousel-story-vertical-demo">\r
          <div className="image-carousel-story-demo">\r
            <ImageCarousel images={sampleImages} size="lg" showThumbnails thumbnailPosition="left" showArrows aspectRatio="16:9" enablePopup />\r
            <p><strong>Large Left Thumbnails</strong></p>\r
            <small>Professional gallery layout with popup support</small>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="image-carousel-story-section">\r
        <h3>Right Vertical Thumbnails</h3>\r
        <div className="image-carousel-story-vertical-demo">\r
          <div className="image-carousel-story-demo">\r
            <ImageCarousel images={sampleImages} size="lg" showThumbnails thumbnailPosition="right" showArrows aspectRatio="4:3" enablePopup />\r
            <p><strong>Large Right Thumbnails</strong></p>\r
            <small>Alternative vertical layout with 4:3 aspect ratio</small>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="image-carousel-story-section">\r
        <h3>Size Comparison</h3>\r
        <div className="image-carousel-story-row">\r
          <div className="image-carousel-story-demo">\r
            <ImageCarousel images={sampleImages.slice(0, 6)} size="md" showThumbnails thumbnailPosition="left" showArrows aspectRatio="1:1" />\r
            <p><strong>Medium Left</strong></p>\r
            <small>Square aspect ratio, medium size</small>\r
          </div>\r
          <div className="image-carousel-story-demo">\r
            <ImageCarousel images={sampleImages.slice(0, 6)} size="md" showThumbnails thumbnailPosition="right" showArrows aspectRatio="1:1" />\r
            <p><strong>Medium Right</strong></p>\r
            <small>Square aspect ratio, medium size</small>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="image-carousel-story-info">\r
        <h4>Vertical Thumbnail Benefits:</h4>\r
        <ul>\r
          <li><strong>Space Efficient:</strong> Maximizes main image vertical space</li>\r
          <li><strong>Professional Look:</strong> Creates a gallery-like appearance</li>\r
          <li><strong>Better for Desktop:</strong> Takes advantage of wider screens</li>\r
          <li><strong>Product Galleries:</strong> Ideal for e-commerce and portfolios</li>\r
          <li><strong>Accessibility:</strong> Easier to navigate with keyboard</li>\r
        </ul>\r
        \r
        <h4>Best Practices:</h4>\r
        <ul>\r
          <li><strong>Use larger sizes (md, lg, xl)</strong> for better thumbnail visibility</li>\r
          <li><strong>Limit to 8-12 images</strong> to prevent excessive scrolling</li>\r
          <li><strong>Consider aspect ratio:</strong> 16:9 or 4:3 work best with vertical thumbnails</li>\r
          <li><strong>Enable popup</strong> for detailed image viewing</li>\r
        </ul>\r
      </div>\r
    </div>
}`,...D.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Configure which navigation controls are visible: arrows, indicators (dots), and thumbnails can all be shown or hidden independently. Mix and match to create the perfect navigation experience for your use case.'
      }
    }
  },
  render: () => <div className="image-carousel-story-navigation">\r
      <div className="image-carousel-story-section">\r
        <h3>Indicators (Dots) Configuration</h3>\r
        <div className="image-carousel-story-row">\r
          <div className="image-carousel-story-demo">\r
            <ImageCarousel images={sampleImages.slice(0, 5)} size="md" showArrows={true} showIndicators={true} showThumbnails={false} aspectRatio="16:9" />\r
            <p><strong>With Indicators</strong></p>\r
            <small>showIndicators={true} (default)</small>\r
          </div>\r
          <div className="image-carousel-story-demo">\r
            <ImageCarousel images={sampleImages.slice(0, 5)} size="md" showArrows={true} showIndicators={false} showThumbnails={false} aspectRatio="16:9" />\r
            <p><strong>Without Indicators</strong></p>\r
            <small>showIndicators={false}</small>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="image-carousel-story-section">\r
        <h3>Navigation Combinations</h3>\r
        <div className="image-carousel-story-row">\r
          <div className="image-carousel-story-demo">\r
            <ImageCarousel images={sampleImages.slice(0, 6)} size="md" showArrows={false} showIndicators={true} showThumbnails={false} aspectRatio="4:3" />\r
            <p><strong>Indicators Only</strong></p>\r
            <small>Perfect for minimal design</small>\r
          </div>\r
          <div className="image-carousel-story-demo">\r
            <ImageCarousel images={sampleImages.slice(0, 6)} size="md" showArrows={true} showIndicators={false} showThumbnails={false} aspectRatio="4:3" />\r
            <p><strong>Arrows Only</strong></p>\r
            <small>Clean, streamlined navigation</small>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="image-carousel-story-section">\r
        <h3>Thumbnails vs Indicators</h3>\r
        <div className="image-carousel-story-row">\r
          <div className="image-carousel-story-demo">\r
            <ImageCarousel images={sampleImages.slice(0, 8)} size="md" showArrows={true} showIndicators={false} showThumbnails={true} thumbnailPosition="bottom" aspectRatio="16:9" />\r
            <p><strong>Thumbnails Instead of Indicators</strong></p>\r
            <small>showThumbnails={true}, showIndicators={false}</small>\r
          </div>\r
          <div className="image-carousel-story-demo">\r
            <ImageCarousel images={sampleImages.slice(0, 8)} size="md" showArrows={true} showIndicators={true} showThumbnails={true} thumbnailPosition="bottom" aspectRatio="16:9" />\r
            <p><strong>Both Thumbnails and Indicators</strong></p>\r
            <small>Maximum navigation options</small>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="image-carousel-story-section">\r
        <h3>Minimal Navigation</h3>\r
        <div className="image-carousel-story-centered">\r
          <div className="image-carousel-story-demo">\r
            <ImageCarousel images={sampleImages.slice(0, 4)} size="lg" showArrows={false} showIndicators={false} showThumbnails={false} aspectRatio="21:9" touchEnabled={true} />\r
            <p><strong>No Visible Navigation</strong></p>\r
            <small>Touch/swipe only - ultra-minimal design</small>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="image-carousel-story-info">\r
        <h4>Navigation Control Options:</h4>\r
        <ul>\r
          <li><strong>showArrows:</strong> Previous/Next arrow buttons (default: true)</li>\r
          <li><strong>showIndicators:</strong> Dot indicators below main image (default: true)</li>\r
          <li><strong>showThumbnails:</strong> Thumbnail navigation strip (default: false)</li>\r
        </ul>\r
        \r
        <h4>Recommended Combinations:</h4>\r
        <ul>\r
          <li><strong>Product Gallery:</strong> Arrows + Thumbnails (no indicators)</li>\r
          <li><strong>Hero Carousel:</strong> Arrows + Indicators (no thumbnails)</li>\r
          <li><strong>Minimal Design:</strong> Indicators only (no arrows/thumbnails)</li>\r
          <li><strong>Mobile-First:</strong> Touch + Indicators (arrows optional)</li>\r
          <li><strong>Professional Portfolio:</strong> All navigation controls enabled</li>\r
        </ul>\r
        \r
        <h4>Accessibility Notes:</h4>\r
        <ul>\r
          <li><strong>Always provide some navigation method</strong> - don't disable all controls</li>\r
          <li><strong>Touch/keyboard navigation</strong> still works when visual controls are hidden</li>\r
          <li><strong>Indicators improve accessibility</strong> by showing current position</li>\r
        </ul>\r
      </div>\r
    </div>
}`,...q.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return <div className="image-carousel-story-controlled">\r
        <ImageCarousel images={sampleImages} activeIndex={activeIndex} onChange={setActiveIndex} showArrows showIndicators showThumbnails size="md" />\r
        \r
        <div className="image-carousel-story-controls">\r
          <p>\r
            Current image: <strong>{activeIndex + 1}</strong> of <strong>{sampleImages.length}</strong>\r
          </p>\r
          <p>\r
            Image: <em>{sampleImages[activeIndex]?.alt}</em>\r
          </p>\r
          \r
          <div className="image-carousel-story-buttons">\r
            <button onClick={() => setActiveIndex(0)}>\r
              First\r
            </button>\r
            <button onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))} disabled={activeIndex === 0}>\r
              Previous\r
            </button>\r
            <button onClick={() => setActiveIndex(Math.min(sampleImages.length - 1, activeIndex + 1))} disabled={activeIndex === sampleImages.length - 1}>\r
              Next\r
            </button>\r
            <button onClick={() => setActiveIndex(sampleImages.length - 1)}>\r
              Last\r
            </button>\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...W.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div className="image-carousel-story-gallery">\r
      <h3>Photo Gallery</h3>\r
      <p>A complete photo gallery experience with all features enabled</p>\r
      \r
      <ImageCarousel images={sampleImages} showArrows showIndicators showThumbnails thumbnailPosition="bottom" autoPlay autoPlayInterval={4000} pauseOnHover loop aspectRatio="16:9" size="lg" touchEnabled objectFit="cover" />\r
      \r
      <div className="image-carousel-story-features">\r
        <h4>Features Demonstrated:</h4>\r
        <ul>\r
          <li>✅ Navigation arrows with hover effects</li>\r
          <li>✅ Dot indicators for direct navigation</li>\r
          <li>✅ Thumbnail previews at bottom</li>\r
          <li>✅ Auto-play with pause on hover</li>\r
          <li>✅ Touch/swipe gestures (try on mobile)</li>\r
          <li>✅ Keyboard navigation (Arrow keys, Home, End)</li>\r
          <li>✅ Image captions with overlay</li>\r
          <li>✅ Looping navigation</li>\r
          <li>✅ Responsive design</li>\r
          <li>✅ Accessibility features</li>\r
        </ul>\r
      </div>\r
    </div>
}`,...B.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div className="image-carousel-story-errors">\r
      <div className="image-carousel-story-demo">\r
        <ImageCarousel images={[]} />\r
        <p>Empty images array</p>\r
      </div>\r
      \r
      <div className="image-carousel-story-demo">\r
        <ImageCarousel images={[{
        id: 'single',
        src: 'https://picsum.photos/400/300?random=99',
        alt: 'Single image',
        caption: 'Only one image - no navigation needed'
      }]} showArrows showIndicators showThumbnails />\r
        <p>Single image (no navigation)</p>\r
      </div>\r
    </div>
}`,...F.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div className="image-carousel-story-accessibility">\r
      <ImageCarousel images={sampleImages} showArrows showIndicators showThumbnails size="md" aspectRatio="16:9" />\r
      \r
      <div className="image-carousel-story-accessibility-info">\r
        <h4>Accessibility Features:</h4>\r
        <ul>\r
          <li><strong>Keyboard Navigation:</strong> Arrow keys, Home, End, Tab</li>\r
          <li><strong>Screen Reader Support:</strong> ARIA labels, roles, and live regions</li>\r
          <li><strong>Focus Management:</strong> Visible focus indicators and proper tab order</li>\r
          <li><strong>Alternative Text:</strong> Each image has descriptive alt text</li>\r
          <li><strong>Semantic HTML:</strong> Proper button elements and structure</li>\r
          <li><strong>Motion Preferences:</strong> Respects prefers-reduced-motion</li>\r
          <li><strong>High Contrast:</strong> Enhanced borders in high contrast mode</li>\r
        </ul>\r
        \r
        <h4>Keyboard Shortcuts:</h4>\r
        <ul>\r
          <li><strong>← →</strong> Navigate left/right (horizontal)</li>\r
          <li><strong>↑ ↓</strong> Navigate up/down (vertical)</li>\r
          <li><strong>Home</strong> Go to first image</li>\r
          <li><strong>End</strong> Go to last image</li>\r
          <li><strong>Tab</strong> Navigate between controls</li>\r
          <li><strong>Enter/Space</strong> Activate buttons</li>\r
        </ul>\r
      </div>\r
    </div>
}`,...G.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    enablePopup: true,
    showThumbnails: true,
    thumbnailPosition: 'bottom'
  },
  parameters: {
    docs: {
      description: {
        story: 'Click on the main image to view it in full-size popup. Press Escape or click outside to close.'
      }
    }
  }
}`,...H.parameters?.docs?.source}}};const Be=["Default","WithThumbnails","AutoPlay","Vertical","Sizes","AspectRatios","ThumbnailPositions","VerticalThumbnails","NavigationControls","Controlled","GalleryShowcase","ErrorStates","Accessibility","WithPopup"];export{G as Accessibility,L as AspectRatios,_ as AutoPlay,W as Controlled,w as Default,F as ErrorStates,B as GalleryShowcase,q as NavigationControls,V as Sizes,E as ThumbnailPositions,M as Vertical,D as VerticalThumbnails,H as WithPopup,S as WithThumbnails,Be as __namedExportsOrder,We as default};
