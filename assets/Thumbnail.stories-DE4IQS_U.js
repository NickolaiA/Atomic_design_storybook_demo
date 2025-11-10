import{j as a}from"./iframe-BMIDd8Dz.js";import{T as r}from"./Thumbnail-BCGe8roW.js";import"./preload-helper-PPVm8Dsz.js";const z={title:"Atoms/Thumbnail",component:r,parameters:{layout:"centered",docs:{description:{component:"A small preview image component with various sizes, shapes, and interaction states."}}},tags:["autodocs"],argTypes:{src:{control:"text",description:"Image source URL"},alt:{control:"text",description:"Alternative text for accessibility"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Size variant"},shape:{control:"select",options:["square","rounded","circle"],description:"Shape variant"},bordered:{control:"boolean",description:"Whether to show a border"},clickable:{control:"boolean",description:"Whether the thumbnail is clickable"},loading:{control:"boolean",description:"Loading state"},error:{control:"boolean",description:"Error state"},fallbackSrc:{control:"text",description:"Fallback image URL"},caption:{control:"text",description:"Caption text below the thumbnail"},showPopupOnHover:{control:"boolean",description:"Enable popup on hover with larger image"},popupSrc:{control:"text",description:"Image source for the popup (defaults to main src if not provided)"},popupMaxWidth:{control:"text",description:"Maximum width for the popup image"},popupMaxHeight:{control:"text",description:"Maximum height for the popup image"},popupDelay:{control:"number",description:"Delay before showing popup (ms)"},onClick:{action:"clicked",description:"Click handler"}}},e={portrait:"https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&crop=face",landscape:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",nature:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",city:"https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=400&fit=crop"},t={args:{src:e.portrait,alt:"Sample portrait",size:"md",shape:"rounded"}},o={render:()=>a.jsxs("div",{className:"thumbnail-demo-row",children:[a.jsx(r,{src:e.portrait,alt:"Extra small thumbnail",size:"xs",shape:"rounded"}),a.jsx(r,{src:e.portrait,alt:"Small thumbnail",size:"sm",shape:"rounded"}),a.jsx(r,{src:e.portrait,alt:"Medium thumbnail",size:"md",shape:"rounded"}),a.jsx(r,{src:e.portrait,alt:"Large thumbnail",size:"lg",shape:"rounded"}),a.jsx(r,{src:e.portrait,alt:"Extra large thumbnail",size:"xl",shape:"rounded"})]}),args:{src:e.portrait,alt:"Size comparison"},parameters:{docs:{description:{story:"Available sizes from xs to xl."}}}},p={render:()=>a.jsxs("div",{className:"thumbnail-demo-row",children:[a.jsx(r,{src:e.portrait,alt:"Square thumbnail",size:"lg",shape:"square"}),a.jsx(r,{src:e.portrait,alt:"Rounded thumbnail",size:"lg",shape:"rounded"}),a.jsx(r,{src:e.portrait,alt:"Circle thumbnail",size:"lg",shape:"circle"})]}),args:{src:e.portrait,alt:"Shape comparison"},parameters:{docs:{description:{story:"Available shapes: square, rounded, and circle."}}}},i={args:{src:e.landscape,alt:"Landscape with border",size:"lg",shape:"rounded",bordered:!0}},n={args:{src:e.nature,alt:"Clickable nature thumbnail",size:"lg",shape:"rounded",clickable:!0,onClick:()=>alert("Thumbnail clicked!")},parameters:{docs:{description:{story:"Clickable thumbnails have hover effects and keyboard navigation support."}}}},l={args:{src:e.city,alt:"City skyline",size:"lg",shape:"rounded",caption:"Beautiful city skyline at sunset"}},c={args:{src:e.portrait,alt:"Loading thumbnail",size:"lg",shape:"rounded",loading:!0},parameters:{docs:{description:{story:"Loading state shows a spinning icon placeholder."}}}},u={args:{src:"https://invalid-url.com/image.jpg",alt:"Failed to load",size:"lg",shape:"rounded",error:!0},parameters:{docs:{description:{story:"Error state shows a placeholder when image fails to load."}}}},d={args:{src:"https://invalid-url.com/image.jpg",alt:"Image with fallback",size:"lg",shape:"rounded",fallbackSrc:e.nature},parameters:{docs:{description:{story:"When the main image fails, it automatically tries the fallback image."}}}},m={render:()=>a.jsxs("div",{className:"thumbnail-demo-gallery",children:[a.jsx(r,{src:e.portrait,alt:"Portrait 1",size:"lg",shape:"circle",clickable:!0,onClick:()=>alert("Portrait clicked!")}),a.jsx(r,{src:e.landscape,alt:"Landscape 1",size:"lg",shape:"rounded",clickable:!0,onClick:()=>alert("Landscape clicked!")}),a.jsx(r,{src:e.nature,alt:"Nature 1",size:"lg",shape:"rounded",clickable:!0,onClick:()=>alert("Nature clicked!")}),a.jsx(r,{src:e.city,alt:"City 1",size:"lg",shape:"rounded",clickable:!0,onClick:()=>alert("City clicked!")})]}),args:{src:e.portrait,alt:"Gallery thumbnail"},parameters:{docs:{description:{story:"Example gallery layout with clickable thumbnails."}}}},h={render:()=>a.jsx("div",{className:"thumbnail-demo-responsive",children:Array.from({length:12},(w,s)=>a.jsx(r,{src:Object.values(e)[s%4],alt:`Thumbnail ${s+1}`,size:"lg",shape:"rounded",clickable:!0,bordered:!0,onClick:()=>alert(`Thumbnail ${s+1} clicked!`)},s))}),args:{src:e.portrait,alt:"Grid thumbnail"},parameters:{docs:{description:{story:"Responsive grid layout demonstrating how thumbnails work in different layouts."}}}},g={args:{src:e.portrait,alt:"Thumbnail with popup",size:"md",shape:"rounded",showPopupOnHover:!0,popupDelay:300},parameters:{docs:{description:{story:"Hover over the thumbnail to see a larger version in a popup. The popup appears after a configurable delay and follows the mouse position."}}}},b={args:{src:e.landscape,alt:"Thumbnail with custom popup size",size:"sm",shape:"rounded",showPopupOnHover:!0,popupMaxWidth:"600px",popupMaxHeight:"400px",popupDelay:200},parameters:{docs:{description:{story:"Popup with custom maximum dimensions. The popup will respect the maximum width and height constraints."}}}},x={args:{src:e.nature,alt:"Thumbnail with different popup image",size:"lg",shape:"circle",showPopupOnHover:!0,popupSrc:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",popupMaxWidth:"500px",popupMaxHeight:"400px",popupDelay:150},parameters:{docs:{description:{story:"Popup showing a different (higher resolution) image than the thumbnail. Useful for showing detailed versions."}}}},y={render:()=>a.jsxs("div",{className:"thumbnail-demo-row",children:[a.jsx(r,{src:e.portrait,alt:"Portrait with popup",size:"lg",shape:"rounded",showPopupOnHover:!0,popupMaxWidth:"400px",popupMaxHeight:"400px",popupDelay:250}),a.jsx(r,{src:e.landscape,alt:"Landscape with popup",size:"lg",shape:"rounded",showPopupOnHover:!0,popupMaxWidth:"500px",popupMaxHeight:"350px",popupDelay:200}),a.jsx(r,{src:e.nature,alt:"Nature with popup",size:"lg",shape:"circle",showPopupOnHover:!0,popupMaxWidth:"450px",popupMaxHeight:"450px",popupDelay:300}),a.jsx(r,{src:e.city,alt:"City with popup",size:"lg",shape:"square",showPopupOnHover:!0,popupMaxWidth:"400px",popupMaxHeight:"300px",popupDelay:100})]}),args:{src:e.portrait,alt:"Gallery with popups"},parameters:{docs:{description:{story:"Gallery of thumbnails with hover popups. Each thumbnail can have different popup configurations and delays."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImages.portrait,
    alt: 'Sample portrait',
    size: 'md',
    shape: 'rounded'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImages.landscape,
    alt: 'Landscape with border',
    size: 'lg',
    shape: 'rounded',
    bordered: true
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImages.city,
    alt: 'City skyline',
    size: 'lg',
    shape: 'rounded',
    caption: 'Beautiful city skyline at sunset'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const S=["Default","Sizes","Shapes","WithBorder","Clickable","WithCaption","LoadingState","ErrorState","WithFallback","Gallery","ResponsiveGrid","WithPopup","PopupWithCustomSize","PopupWithDifferentImage","PopupGallery"];export{n as Clickable,t as Default,u as ErrorState,m as Gallery,c as LoadingState,y as PopupGallery,b as PopupWithCustomSize,x as PopupWithDifferentImage,h as ResponsiveGrid,p as Shapes,o as Sizes,i as WithBorder,l as WithCaption,d as WithFallback,g as WithPopup,S as __namedExportsOrder,z as default};
