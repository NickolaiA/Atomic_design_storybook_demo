import{R as s,j as e}from"./iframe-C-Dpaqp0.js";import"./preload-helper-PPVm8Dsz.js";const r=({src:l,alt:t,size:K="md",shape:J="rounded",bordered:Q=!1,clickable:c=!1,onClick:u,className:X,loading:M=!1,error:P=!1,fallbackSrc:W,caption:R,showPopupOnHover:d=!1,popupSrc:Y,popupMaxWidth:L="400px",popupMaxHeight:N="400px",popupDelay:Z=300})=>{const[H,m]=s.useState(P),[_,q]=s.useState(M),[E,O]=s.useState(l),[ee,G]=s.useState(!1),[A,ae]=s.useState({x:0,y:0}),o=s.useRef(null),re=s.useRef(null);s.useEffect(()=>{O(l),m(P),q(M)},[l,P,M]);const se=()=>{W&&E!==W?(O(W),m(!1)):m(!0),q(!1)},te=()=>{q(!1),m(!1)},oe=()=>{c&&u&&u()},ie=i=>{c&&u&&(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),u())},V=i=>{if(!d)return;o.current&&clearTimeout(o.current);const D=i.currentTarget.getBoundingClientRect(),ne=window.innerWidth,U=window.innerHeight;let n=D.right+10,p=D.top;n+parseInt(L)>ne&&(n=D.left-parseInt(L)-10),p+parseInt(N)>U&&(p=U-parseInt(N)-10),p<10&&(p=10),n<10&&(n=10),ae({x:n,y:p}),o.current=setTimeout(()=>{G(!0)},Z)},$=()=>{d&&(o.current&&(clearTimeout(o.current),o.current=null),G(!1))};s.useEffect(()=>()=>{o.current&&clearTimeout(o.current)},[]);const F=["thumbnail",`thumbnail--${K}`,`thumbnail--${J}`,Q&&"thumbnail--bordered",c&&"thumbnail--clickable",d&&"thumbnail--popup-enabled",_&&"thumbnail--loading",H&&"thumbnail--error",X].filter(Boolean).join(" "),B=()=>_?e.jsx("div",{className:"thumbnail__placeholder","aria-label":"Loading image",children:e.jsx("span",{className:"thumbnail__loading-icon",children:"⟳"})}):H?e.jsx("div",{className:"thumbnail__placeholder","aria-label":"Image failed to load",children:e.jsx("span",{className:"thumbnail__error-icon",children:"🖼"})}):e.jsx("img",{src:E,alt:t,className:"thumbnail__image",onError:se,onLoad:te,draggable:!1});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"thumbnail-wrapper",ref:re,children:[c?e.jsx("div",{className:F,onClick:oe,onKeyDown:ie,onMouseEnter:V,onMouseLeave:$,role:"button",tabIndex:0,"aria-label":`Thumbnail: ${t}`,children:B()}):e.jsx("div",{className:F,onMouseEnter:V,onMouseLeave:$,children:B()}),R&&e.jsx("div",{className:"thumbnail__caption",children:R})]}),d&&ee&&!H&&e.jsx("div",{className:"thumbnail-popup-overlay",style:{"--popup-x":`${A.x}px`,"--popup-y":`${A.y}px`,"--popup-max-width":L,"--popup-max-height":N},children:e.jsx("div",{className:"thumbnail-popup-content",children:e.jsx("img",{src:Y||E,alt:`Large view: ${t}`,className:"thumbnail-popup-image",draggable:!1})})})]})};r.__docgenInfo={description:"",methods:[],displayName:"Thumbnail",props:{src:{required:!0,tsType:{name:"string"},description:"Image source URL"},alt:{required:!0,tsType:{name:"string"},description:"Alternative text for accessibility"},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'square' | 'rounded' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'circle'"}]},description:"Shape variant",defaultValue:{value:"'rounded'",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Whether to show a border",defaultValue:{value:"false",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:"Whether the thumbnail is clickable",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state placeholder",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Error state fallback content",defaultValue:{value:"false",computed:!1}},fallbackSrc:{required:!1,tsType:{name:"string"},description:"Fallback image URL if main image fails to load"},caption:{required:!1,tsType:{name:"string"},description:"Caption text below the thumbnail"},showPopupOnHover:{required:!1,tsType:{name:"boolean"},description:"Enable popup on hover with larger image",defaultValue:{value:"false",computed:!1}},popupSrc:{required:!1,tsType:{name:"string"},description:"Image source for the popup (defaults to main src if not provided)"},popupMaxWidth:{required:!1,tsType:{name:"string"},description:"Maximum width for the popup image",defaultValue:{value:"'400px'",computed:!1}},popupMaxHeight:{required:!1,tsType:{name:"string"},description:"Maximum height for the popup image",defaultValue:{value:"'400px'",computed:!1}},popupDelay:{required:!1,tsType:{name:"number"},description:"Delay before showing popup (ms)",defaultValue:{value:"300",computed:!1}}}};const ce={title:"Atoms/Thumbnail",component:r,parameters:{layout:"centered",docs:{description:{component:"A small preview image component with various sizes, shapes, and interaction states."}}},tags:["autodocs"],argTypes:{src:{control:"text",description:"Image source URL"},alt:{control:"text",description:"Alternative text for accessibility"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Size variant"},shape:{control:"select",options:["square","rounded","circle"],description:"Shape variant"},bordered:{control:"boolean",description:"Whether to show a border"},clickable:{control:"boolean",description:"Whether the thumbnail is clickable"},loading:{control:"boolean",description:"Loading state"},error:{control:"boolean",description:"Error state"},fallbackSrc:{control:"text",description:"Fallback image URL"},caption:{control:"text",description:"Caption text below the thumbnail"},showPopupOnHover:{control:"boolean",description:"Enable popup on hover with larger image"},popupSrc:{control:"text",description:"Image source for the popup (defaults to main src if not provided)"},popupMaxWidth:{control:"text",description:"Maximum width for the popup image"},popupMaxHeight:{control:"text",description:"Maximum height for the popup image"},popupDelay:{control:"number",description:"Delay before showing popup (ms)"},onClick:{action:"clicked",description:"Click handler"}}},a={portrait:"https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&crop=face",landscape:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",nature:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",city:"https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=400&fit=crop"},h={args:{src:a.portrait,alt:"Sample portrait",size:"md",shape:"rounded"}},g={render:()=>e.jsxs("div",{className:"thumbnail-demo-row",children:[e.jsx(r,{src:a.portrait,alt:"Extra small thumbnail",size:"xs",shape:"rounded"}),e.jsx(r,{src:a.portrait,alt:"Small thumbnail",size:"sm",shape:"rounded"}),e.jsx(r,{src:a.portrait,alt:"Medium thumbnail",size:"md",shape:"rounded"}),e.jsx(r,{src:a.portrait,alt:"Large thumbnail",size:"lg",shape:"rounded"}),e.jsx(r,{src:a.portrait,alt:"Extra large thumbnail",size:"xl",shape:"rounded"})]}),args:{src:a.portrait,alt:"Size comparison"},parameters:{docs:{description:{story:"Available sizes from xs to xl."}}}},b={render:()=>e.jsxs("div",{className:"thumbnail-demo-row",children:[e.jsx(r,{src:a.portrait,alt:"Square thumbnail",size:"lg",shape:"square"}),e.jsx(r,{src:a.portrait,alt:"Rounded thumbnail",size:"lg",shape:"rounded"}),e.jsx(r,{src:a.portrait,alt:"Circle thumbnail",size:"lg",shape:"circle"})]}),args:{src:a.portrait,alt:"Shape comparison"},parameters:{docs:{description:{story:"Available shapes: square, rounded, and circle."}}}},f={args:{src:a.landscape,alt:"Landscape with border",size:"lg",shape:"rounded",bordered:!0}},x={args:{src:a.nature,alt:"Clickable nature thumbnail",size:"lg",shape:"rounded",clickable:!0,onClick:()=>alert("Thumbnail clicked!")},parameters:{docs:{description:{story:"Clickable thumbnails have hover effects and keyboard navigation support."}}}},y={args:{src:a.city,alt:"City skyline",size:"lg",shape:"rounded",caption:"Beautiful city skyline at sunset"}},v={args:{src:a.portrait,alt:"Loading thumbnail",size:"lg",shape:"rounded",loading:!0},parameters:{docs:{description:{story:"Loading state shows a spinning icon placeholder."}}}},w={args:{src:"https://invalid-url.com/image.jpg",alt:"Failed to load",size:"lg",shape:"rounded",error:!0},parameters:{docs:{description:{story:"Error state shows a placeholder when image fails to load."}}}},k={args:{src:"https://invalid-url.com/image.jpg",alt:"Image with fallback",size:"lg",shape:"rounded",fallbackSrc:a.nature},parameters:{docs:{description:{story:"When the main image fails, it automatically tries the fallback image."}}}},z={render:()=>e.jsxs("div",{className:"thumbnail-demo-gallery",children:[e.jsx(r,{src:a.portrait,alt:"Portrait 1",size:"lg",shape:"circle",clickable:!0,onClick:()=>alert("Portrait clicked!")}),e.jsx(r,{src:a.landscape,alt:"Landscape 1",size:"lg",shape:"rounded",clickable:!0,onClick:()=>alert("Landscape clicked!")}),e.jsx(r,{src:a.nature,alt:"Nature 1",size:"lg",shape:"rounded",clickable:!0,onClick:()=>alert("Nature clicked!")}),e.jsx(r,{src:a.city,alt:"City 1",size:"lg",shape:"rounded",clickable:!0,onClick:()=>alert("City clicked!")})]}),args:{src:a.portrait,alt:"Gallery thumbnail"},parameters:{docs:{description:{story:"Example gallery layout with clickable thumbnails."}}}},T={render:()=>e.jsx("div",{className:"thumbnail-demo-responsive",children:Array.from({length:12},(l,t)=>e.jsx(r,{src:Object.values(a)[t%4],alt:`Thumbnail ${t+1}`,size:"lg",shape:"rounded",clickable:!0,bordered:!0,onClick:()=>alert(`Thumbnail ${t+1} clicked!`)},t))}),args:{src:a.portrait,alt:"Grid thumbnail"},parameters:{docs:{description:{story:"Responsive grid layout demonstrating how thumbnails work in different layouts."}}}},S={args:{src:a.portrait,alt:"Thumbnail with popup",size:"md",shape:"rounded",showPopupOnHover:!0,popupDelay:300},parameters:{docs:{description:{story:"Hover over the thumbnail to see a larger version in a popup. The popup appears after a configurable delay and follows the mouse position."}}}},I={args:{src:a.landscape,alt:"Thumbnail with custom popup size",size:"sm",shape:"rounded",showPopupOnHover:!0,popupMaxWidth:"600px",popupMaxHeight:"400px",popupDelay:200},parameters:{docs:{description:{story:"Popup with custom maximum dimensions. The popup will respect the maximum width and height constraints."}}}},j={args:{src:a.nature,alt:"Thumbnail with different popup image",size:"lg",shape:"circle",showPopupOnHover:!0,popupSrc:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",popupMaxWidth:"500px",popupMaxHeight:"400px",popupDelay:150},parameters:{docs:{description:{story:"Popup showing a different (higher resolution) image than the thumbnail. Useful for showing detailed versions."}}}},C={render:()=>e.jsxs("div",{className:"thumbnail-demo-row",children:[e.jsx(r,{src:a.portrait,alt:"Portrait with popup",size:"lg",shape:"rounded",showPopupOnHover:!0,popupMaxWidth:"400px",popupMaxHeight:"400px",popupDelay:250}),e.jsx(r,{src:a.landscape,alt:"Landscape with popup",size:"lg",shape:"rounded",showPopupOnHover:!0,popupMaxWidth:"500px",popupMaxHeight:"350px",popupDelay:200}),e.jsx(r,{src:a.nature,alt:"Nature with popup",size:"lg",shape:"circle",showPopupOnHover:!0,popupMaxWidth:"450px",popupMaxHeight:"450px",popupDelay:300}),e.jsx(r,{src:a.city,alt:"City with popup",size:"lg",shape:"square",showPopupOnHover:!0,popupMaxWidth:"400px",popupMaxHeight:"300px",popupDelay:100})]}),args:{src:a.portrait,alt:"Gallery with popups"},parameters:{docs:{description:{story:"Gallery of thumbnails with hover popups. Each thumbnail can have different popup configurations and delays."}}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImages.portrait,
    alt: 'Sample portrait',
    size: 'md',
    shape: 'rounded'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="thumbnail-demo-row">\r
      <Thumbnail src={sampleImages.portrait} alt="Extra small thumbnail" size="xs" shape="rounded" />\r
      <Thumbnail src={sampleImages.portrait} alt="Small thumbnail" size="sm" shape="rounded" />\r
      <Thumbnail src={sampleImages.portrait} alt="Medium thumbnail" size="md" shape="rounded" />\r
      <Thumbnail src={sampleImages.portrait} alt="Large thumbnail" size="lg" shape="rounded" />\r
      <Thumbnail src={sampleImages.portrait} alt="Extra large thumbnail" size="xl" shape="rounded" />\r
    </div>,
  args: {
    src: sampleImages.portrait,
    alt: 'Size comparison'
  },
  parameters: {
    docs: {
      description: {
        story: 'Available sizes from xs to xl.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="thumbnail-demo-row">\r
      <Thumbnail src={sampleImages.portrait} alt="Square thumbnail" size="lg" shape="square" />\r
      <Thumbnail src={sampleImages.portrait} alt="Rounded thumbnail" size="lg" shape="rounded" />\r
      <Thumbnail src={sampleImages.portrait} alt="Circle thumbnail" size="lg" shape="circle" />\r
    </div>,
  args: {
    src: sampleImages.portrait,
    alt: 'Shape comparison'
  },
  parameters: {
    docs: {
      description: {
        story: 'Available shapes: square, rounded, and circle.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImages.landscape,
    alt: 'Landscape with border',
    size: 'lg',
    shape: 'rounded',
    bordered: true
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImages.nature,
    alt: 'Clickable nature thumbnail',
    size: 'lg',
    shape: 'rounded',
    clickable: true,
    onClick: () => alert('Thumbnail clicked!')
  },
  parameters: {
    docs: {
      description: {
        story: 'Clickable thumbnails have hover effects and keyboard navigation support.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImages.city,
    alt: 'City skyline',
    size: 'lg',
    shape: 'rounded',
    caption: 'Beautiful city skyline at sunset'
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImages.portrait,
    alt: 'Loading thumbnail',
    size: 'lg',
    shape: 'rounded',
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state shows a spinning icon placeholder.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://invalid-url.com/image.jpg',
    alt: 'Failed to load',
    size: 'lg',
    shape: 'rounded',
    error: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state shows a placeholder when image fails to load.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://invalid-url.com/image.jpg',
    alt: 'Image with fallback',
    size: 'lg',
    shape: 'rounded',
    fallbackSrc: sampleImages.nature
  },
  parameters: {
    docs: {
      description: {
        story: 'When the main image fails, it automatically tries the fallback image.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="thumbnail-demo-gallery">\r
      <Thumbnail src={sampleImages.portrait} alt="Portrait 1" size="lg" shape="circle" clickable onClick={() => alert('Portrait clicked!')} />\r
      <Thumbnail src={sampleImages.landscape} alt="Landscape 1" size="lg" shape="rounded" clickable onClick={() => alert('Landscape clicked!')} />\r
      <Thumbnail src={sampleImages.nature} alt="Nature 1" size="lg" shape="rounded" clickable onClick={() => alert('Nature clicked!')} />\r
      <Thumbnail src={sampleImages.city} alt="City 1" size="lg" shape="rounded" clickable onClick={() => alert('City clicked!')} />\r
    </div>,
  args: {
    src: sampleImages.portrait,
    alt: 'Gallery thumbnail'
  },
  parameters: {
    docs: {
      description: {
        story: 'Example gallery layout with clickable thumbnails.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="thumbnail-demo-responsive">\r
      {Array.from({
      length: 12
    }, (_, i) => <Thumbnail key={i} src={Object.values(sampleImages)[i % 4]} alt={\`Thumbnail \${i + 1}\`} size="lg" shape="rounded" clickable bordered onClick={() => alert(\`Thumbnail \${i + 1} clicked!\`)} />)}\r
    </div>,
  args: {
    src: sampleImages.portrait,
    alt: 'Grid thumbnail'
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid layout demonstrating how thumbnails work in different layouts.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImages.portrait,
    alt: 'Thumbnail with popup',
    size: 'md',
    shape: 'rounded',
    showPopupOnHover: true,
    popupDelay: 300
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover over the thumbnail to see a larger version in a popup. The popup appears after a configurable delay and follows the mouse position.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImages.landscape,
    alt: 'Thumbnail with custom popup size',
    size: 'sm',
    shape: 'rounded',
    showPopupOnHover: true,
    popupMaxWidth: '600px',
    popupMaxHeight: '400px',
    popupDelay: 200
  },
  parameters: {
    docs: {
      description: {
        story: 'Popup with custom maximum dimensions. The popup will respect the maximum width and height constraints.'
      }
    }
  }
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImages.nature,
    alt: 'Thumbnail with different popup image',
    size: 'lg',
    shape: 'circle',
    showPopupOnHover: true,
    popupSrc: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    popupMaxWidth: '500px',
    popupMaxHeight: '400px',
    popupDelay: 150
  },
  parameters: {
    docs: {
      description: {
        story: 'Popup showing a different (higher resolution) image than the thumbnail. Useful for showing detailed versions.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="thumbnail-demo-row">\r
      <Thumbnail src={sampleImages.portrait} alt="Portrait with popup" size="lg" shape="rounded" showPopupOnHover={true} popupMaxWidth="400px" popupMaxHeight="400px" popupDelay={250} />\r
      <Thumbnail src={sampleImages.landscape} alt="Landscape with popup" size="lg" shape="rounded" showPopupOnHover={true} popupMaxWidth="500px" popupMaxHeight="350px" popupDelay={200} />\r
      <Thumbnail src={sampleImages.nature} alt="Nature with popup" size="lg" shape="circle" showPopupOnHover={true} popupMaxWidth="450px" popupMaxHeight="450px" popupDelay={300} />\r
      <Thumbnail src={sampleImages.city} alt="City with popup" size="lg" shape="square" showPopupOnHover={true} popupMaxWidth="400px" popupMaxHeight="300px" popupDelay={100} />\r
    </div>,
  args: {
    src: sampleImages.portrait,
    alt: 'Gallery with popups'
  },
  parameters: {
    docs: {
      description: {
        story: 'Gallery of thumbnails with hover popups. Each thumbnail can have different popup configurations and delays.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};const ue=["Default","Sizes","Shapes","WithBorder","Clickable","WithCaption","LoadingState","ErrorState","WithFallback","Gallery","ResponsiveGrid","WithPopup","PopupWithCustomSize","PopupWithDifferentImage","PopupGallery"];export{x as Clickable,h as Default,w as ErrorState,z as Gallery,v as LoadingState,C as PopupGallery,I as PopupWithCustomSize,j as PopupWithDifferentImage,T as ResponsiveGrid,b as Shapes,g as Sizes,f as WithBorder,y as WithCaption,k as WithFallback,S as WithPopup,ue as __namedExportsOrder,ce as default};
