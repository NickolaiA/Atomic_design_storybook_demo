import{j as e}from"./react-1-DYTeAnAh.js";import{fn as H}from"./storybook-instrumenter-15-DkasNAnx.js";import{H as k,P as T}from"./organisms-DH7tj2xh.js";const A={title:"Organisms/Header",component:k,parameters:{layout:"fullscreen"},argTypes:{onNavigate:{action:"navigated"},onSearch:{action:"searched"}},args:{onNavigate:H(),onSearch:H()}},o={parameters:{docs:{description:{story:"The default header with brand name, navigation items, and search field."}}}},s={args:{onNavigate:r=>{console.log("Navigating to:",r),alert(`Navigating to: ${r}`)},onSearch:r=>{console.log("Searching for:",r),alert(`Searching for: ${r}`)}},parameters:{docs:{description:{story:"Header with interactive callbacks that show alerts when navigation or search actions are triggered."}}}},i={args:{onNavigate:void 0,onSearch:void 0},parameters:{docs:{description:{story:"Header without any callback functions - demonstrates the component in a static state."}}}},n={args:{onNavigate:r=>{console.log(`Navigation event: ${r}`)},onSearch:r=>{console.log(`Search event: ${r}`)}},parameters:{docs:{description:{story:"Header that logs navigation and search events to the browser console. Open DevTools to see the logs."}}}},c={parameters:{layout:"fullscreen",docs:{description:{story:"Header displayed at full width to show how it behaves in a complete layout context."}}},decorators:[r=>e.jsxs("div",{className:"header-story-fullscreen",children:[e.jsx(r,{}),e.jsxs("div",{className:"header-story-content",children:[e.jsx("h1",{children:"Page Content"}),e.jsx("p",{children:"This demonstrates how the header looks as part of a full page layout."})]})]})]},d={parameters:{viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop",styles:{width:"1200px",height:"800px"}}}},docs:{description:{story:"Header shown at different viewport sizes. Use the viewport selector in the toolbar to test responsiveness."}}}},l={parameters:{docs:{description:{story:"Header component demonstrating how it adapts to different themes. Use the theme switcher in the toolbar to see it in Dark, Light, and Custom themes."}}},decorators:[r=>e.jsxs("div",{className:"header-story-theme-demo",children:[e.jsx(r,{}),e.jsxs("div",{className:"header-story-theme-info",children:[e.jsx("h3",{children:"Theme Variables in Use:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"--color-panel"}),": Header background"]}),e.jsxs("li",{children:[e.jsx("code",{children:"--color-text"}),": Text color"]}),e.jsxs("li",{children:[e.jsx("code",{children:"--radius"}),": Border radius"]})]})]})]})]},p={render:()=>e.jsxs("div",{className:"header-story-variants",children:[e.jsxs("div",{className:"header-story-variant-section",children:[e.jsx("h3",{children:"Default Header"}),e.jsx(k,{})]}),e.jsxs("div",{className:"header-story-variant-section",children:[e.jsx("h3",{children:"Interactive Header"}),e.jsx(k,{onNavigate:r=>console.log("Navigate:",r),onSearch:r=>console.log("Search:",r)})]}),e.jsxs("div",{className:"header-story-variant-section",children:[e.jsx("h3",{children:"Static Header (No Callbacks)"}),e.jsx(k,{onNavigate:void 0,onSearch:void 0})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:"A comprehensive view of all Header variants side by side for easy comparison."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The default header with brand name, navigation items, and search field.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    onNavigate: (route: string) => {
      console.log('Navigating to:', route);
      alert(\`Navigating to: \${route}\`);
    },
    onSearch: (query: string) => {
      console.log('Searching for:', query);
      alert(\`Searching for: \${query}\`);
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with interactive callbacks that show alerts when navigation or search actions are triggered.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    onNavigate: undefined,
    onSearch: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Header without any callback functions - demonstrates the component in a static state.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    onNavigate: (route: string) => {
      console.log(\`Navigation event: \${route}\`);
    },
    onSearch: (query: string) => {
      console.log(\`Search event: \${query}\`);
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Header that logs navigation and search events to the browser console. Open DevTools to see the logs.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Header displayed at full width to show how it behaves in a complete layout context.'
      }
    }
  },
  decorators: [Story => <div className="header-story-fullscreen">\r
        <Story />\r
        <div className="header-story-content">\r
          <h1>Page Content</h1>\r
          <p>This demonstrates how the header looks as part of a full page layout.</p>\r
        </div>\r
      </div>]
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px'
          }
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px'
          }
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1200px',
            height: '800px'
          }
        }
      }
    },
    docs: {
      description: {
        story: 'Header shown at different viewport sizes. Use the viewport selector in the toolbar to test responsiveness.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Header component demonstrating how it adapts to different themes. Use the theme switcher in the toolbar to see it in Dark, Light, and Custom themes.'
      }
    }
  },
  decorators: [Story => <div className="header-story-theme-demo">\r
        <Story />\r
        <div className="header-story-theme-info">\r
          <h3>Theme Variables in Use:</h3>\r
          <ul>\r
            <li><code>--color-panel</code>: Header background</li>\r
            <li><code>--color-text</code>: Text color</li>\r
            <li><code>--radius</code>: Border radius</li>\r
          </ul>\r
        </div>\r
      </div>]
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="header-story-variants">\r
      <div className="header-story-variant-section">\r
        <h3>Default Header</h3>\r
        <Header />\r
      </div>\r
      \r
      <div className="header-story-variant-section">\r
        <h3>Interactive Header</h3>\r
        <Header onNavigate={route => console.log('Navigate:', route)} onSearch={query => console.log('Search:', query)} />\r
      </div>\r
      \r
      <div className="header-story-variant-section">\r
        <h3>Static Header (No Callbacks)</h3>\r
        <Header onNavigate={undefined} onSearch={undefined} />\r
      </div>\r
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'A comprehensive view of all Header variants side by side for easy comparison.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const W=["Default","Interactive","WithoutCallbacks","LoggingActions","FullWidthDemo","ResponsiveDemo","ThemeShowcase","AllVariants"],_=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:p,Default:o,FullWidthDemo:c,Interactive:s,LoggingActions:n,ResponsiveDemo:d,ThemeShowcase:l,WithoutCallbacks:i,__namedExportsOrder:W,default:A},Symbol.toStringTag,{value:"Module"})),I={title:"Organisms/ProductCard",component:T,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{imageUrl:{control:"text",description:"URL of the product image"},title:{control:"text",description:"Product title"},price:{control:"text",description:"Product price"},onAddToCart:{action:"add-to-cart",description:"Callback function when add to cart button is clicked"}}},m={args:{imageUrl:"https://picsum.photos/280/160?random=1",title:"Premium Wireless Headphones",price:"$199.99"}},h={args:{imageUrl:"https://picsum.photos/280/160?random=2",title:"MacBook Pro 16-inch",price:"$2,499.00"}},g={args:{imageUrl:"https://picsum.photos/280/160?random=3",title:"iPhone 15 Pro",price:"$999.00"}},u={args:{imageUrl:"https://picsum.photos/280/160?random=4",title:"Canon EOS R5 Camera",price:"$3,899.99"}},v={args:{imageUrl:"https://picsum.photos/280/160?random=5",title:"Apple Watch Series 9",price:"$399.00"}},x={args:{imageUrl:"https://picsum.photos/280/160?random=6",title:"Wireless Earbuds",price:"$49.99"}},f={args:{imageUrl:"https://picsum.photos/280/160?random=7",title:"Professional Monitor",price:"$1,299.99"}},y={args:{imageUrl:"https://picsum.photos/280/160?random=8",title:"Gaming Keyboard",price:"$89.99 $129.99"}},S={args:{imageUrl:"https://picsum.photos/280/160?random=9",title:"Ultra-Premium Noise-Cancelling Wireless Bluetooth Headphones with Advanced Features",price:"$299.99"}},U={render:r=>{const a=()=>{alert(`Added "${r.title}" to cart!`)};return e.jsxs("div",{className:"product-card-demo",children:[e.jsx(T,{imageUrl:r.imageUrl||"https://picsum.photos/280/160?random=10",title:r.title||"Wireless Mouse",price:r.price||"$79.99",onAddToCart:a}),e.jsx("p",{children:'Click "Add to cart" to see an alert'}),e.jsx("style",{children:`
          .product-card-demo {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }
          .product-card-demo p {
            margin: 0;
            font-size: 14px;
            color: var(--color-text);
            opacity: 0.7;
          }
        `})]})},args:{imageUrl:"https://picsum.photos/280/160?random=10",title:"Wireless Mouse",price:"$79.99"}},w={render:()=>{const r=[{id:1,imageUrl:"https://picsum.photos/280/160?random=11",title:"Wireless Headphones",price:"$199.99"},{id:2,imageUrl:"https://picsum.photos/280/160?random=12",title:"Smart Watch",price:"$299.00"},{id:3,imageUrl:"https://picsum.photos/280/160?random=13",title:"Bluetooth Speaker",price:"$129.99"},{id:4,imageUrl:"https://picsum.photos/280/160?random=14",title:"Wireless Charger",price:"$49.99"}],a=t=>{alert(`Added "${t}" to cart!`)};return e.jsxs("div",{className:"product-grid",children:[e.jsx("h3",{children:"Featured Products"}),e.jsx("div",{className:"grid",children:r.map(t=>e.jsx(T,{imageUrl:t.imageUrl,title:t.title,price:t.price,onAddToCart:()=>a(t.title)},t.id))}),e.jsx("style",{children:`
          .product-grid {
            display: flex;
            flex-direction: column;
            gap: 24px;
            padding: 16px;
          }
          .product-grid h3 {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
            color: var(--color-text);
            text-align: center;
          }
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 16px;
            max-width: 1200px;
          }
        `})]})}},$={args:{imageUrl:"https://via.placeholder.com/280x160/cccccc/666666?text=No+Image",title:"Product with Placeholder",price:"$99.99"}},P={args:{imageUrl:"https://broken-url-that-does-not-exist.jpg",title:"Product with Broken Image",price:"$149.99"}},N={args:{imageUrl:"https://picsum.photos/280/160?random=15",title:"Free Sample Kit",price:"Free"}},j={args:{imageUrl:"https://picsum.photos/280/160?random=16",title:"Limited Edition Item",price:"Out of Stock"}},b={args:{imageUrl:"https://picsum.photos/280/160?random=17",title:"Next Generation Product",price:"Coming Soon"}},C={render:()=>{const r=[{imageUrl:"https://picsum.photos/280/160?random=18",title:"Regular Product",price:"$199.99"},{imageUrl:"https://picsum.photos/280/160?random=19",title:"Product with Very Long Title That Wraps to Multiple Lines",price:"$299.99"},{imageUrl:"https://via.placeholder.com/280x160/cccccc/666666?text=Placeholder",title:"With Placeholder Image",price:"$99.99"},{imageUrl:"https://picsum.photos/280/160?random=20",title:"Sale Item",price:"$149.99 $199.99"},{imageUrl:"https://picsum.photos/280/160?random=21",title:"Free Sample",price:"Free"},{imageUrl:"https://picsum.photos/280/160?random=22",title:"Out of Stock Item",price:"Out of Stock"}];return e.jsxs("div",{className:"variations-showcase",children:[e.jsx("h3",{children:"Product Card Variations"}),e.jsx("div",{className:"variations-grid",children:r.map((a,t)=>e.jsx(T,{imageUrl:a.imageUrl,title:a.title,price:a.price,onAddToCart:()=>alert(`Added "${a.title}" to cart!`)},t))}),e.jsx("style",{children:`
          .variations-showcase {
            display: flex;
            flex-direction: column;
            gap: 24px;
            padding: 16px;
          }
          .variations-showcase h3 {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
            color: var(--color-text);
            text-align: center;
          }
          .variations-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 16px;
            max-width: 1200px;
          }
        `})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=1',
    title: 'Premium Wireless Headphones',
    price: '$199.99'
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=2',
    title: 'MacBook Pro 16-inch',
    price: '$2,499.00'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=3',
    title: 'iPhone 15 Pro',
    price: '$999.00'
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=4',
    title: 'Canon EOS R5 Camera',
    price: '$3,899.99'
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=5',
    title: 'Apple Watch Series 9',
    price: '$399.00'
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=6',
    title: 'Wireless Earbuds',
    price: '$49.99'
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=7',
    title: 'Professional Monitor',
    price: '$1,299.99'
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=8',
    title: 'Gaming Keyboard',
    price: '$89.99 $129.99'
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=9',
    title: 'Ultra-Premium Noise-Cancelling Wireless Bluetooth Headphones with Advanced Features',
    price: '$299.99'
  }
}`,...S.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    const handleAddToCart = () => {
      alert(\`Added "\${args.title}" to cart!\`);
    };
    return <div className="product-card-demo">\r
        <ProductCard imageUrl={args.imageUrl || 'https://picsum.photos/280/160?random=10'} title={args.title || 'Wireless Mouse'} price={args.price || '$79.99'} onAddToCart={handleAddToCart} />\r
        <p>Click "Add to cart" to see an alert</p>\r
        <style>{\`
          .product-card-demo {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }
          .product-card-demo p {
            margin: 0;
            font-size: 14px;
            color: var(--color-text);
            opacity: 0.7;
          }
        \`}</style>\r
      </div>;
  },
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=10',
    title: 'Wireless Mouse',
    price: '$79.99'
  }
}`,...U.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const products = [{
      id: 1,
      imageUrl: 'https://picsum.photos/280/160?random=11',
      title: 'Wireless Headphones',
      price: '$199.99'
    }, {
      id: 2,
      imageUrl: 'https://picsum.photos/280/160?random=12',
      title: 'Smart Watch',
      price: '$299.00'
    }, {
      id: 3,
      imageUrl: 'https://picsum.photos/280/160?random=13',
      title: 'Bluetooth Speaker',
      price: '$129.99'
    }, {
      id: 4,
      imageUrl: 'https://picsum.photos/280/160?random=14',
      title: 'Wireless Charger',
      price: '$49.99'
    }];
    const handleAddToCart = (productTitle: string) => {
      alert(\`Added "\${productTitle}" to cart!\`);
    };
    return <div className="product-grid">\r
        <h3>Featured Products</h3>\r
        <div className="grid">\r
          {products.map(product => <ProductCard key={product.id} imageUrl={product.imageUrl} title={product.title} price={product.price} onAddToCart={() => handleAddToCart(product.title)} />)}\r
        </div>\r
        \r
        <style>{\`
          .product-grid {
            display: flex;
            flex-direction: column;
            gap: 24px;
            padding: 16px;
          }
          .product-grid h3 {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
            color: var(--color-text);
            text-align: center;
          }
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 16px;
            max-width: 1200px;
          }
        \`}</style>\r
      </div>;
  }
}`,...w.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://via.placeholder.com/280x160/cccccc/666666?text=No+Image',
    title: 'Product with Placeholder',
    price: '$99.99'
  }
}`,...$.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://broken-url-that-does-not-exist.jpg',
    title: 'Product with Broken Image',
    price: '$149.99'
  }
}`,...P.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=15',
    title: 'Free Sample Kit',
    price: 'Free'
  }
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=16',
    title: 'Limited Edition Item',
    price: 'Out of Stock'
  }
}`,...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=17',
    title: 'Next Generation Product',
    price: 'Coming Soon'
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const products = [{
      imageUrl: 'https://picsum.photos/280/160?random=18',
      title: 'Regular Product',
      price: '$199.99'
    }, {
      imageUrl: 'https://picsum.photos/280/160?random=19',
      title: 'Product with Very Long Title That Wraps to Multiple Lines',
      price: '$299.99'
    }, {
      imageUrl: 'https://via.placeholder.com/280x160/cccccc/666666?text=Placeholder',
      title: 'With Placeholder Image',
      price: '$99.99'
    }, {
      imageUrl: 'https://picsum.photos/280/160?random=20',
      title: 'Sale Item',
      price: '$149.99 $199.99'
    }, {
      imageUrl: 'https://picsum.photos/280/160?random=21',
      title: 'Free Sample',
      price: 'Free'
    }, {
      imageUrl: 'https://picsum.photos/280/160?random=22',
      title: 'Out of Stock Item',
      price: 'Out of Stock'
    }];
    return <div className="variations-showcase">\r
        <h3>Product Card Variations</h3>\r
        <div className="variations-grid">\r
          {products.map((product, index) => <ProductCard key={index} imageUrl={product.imageUrl} title={product.title} price={product.price} onAddToCart={() => alert(\`Added "\${product.title}" to cart!\`)} />)}\r
        </div>\r
        \r
        <style>{\`
          .variations-showcase {
            display: flex;
            flex-direction: column;
            gap: 24px;
            padding: 16px;
          }
          .variations-showcase h3 {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
            color: var(--color-text);
            text-align: center;
          }
          .variations-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 16px;
            max-width: 1200px;
          }
        \`}</style>\r
      </div>;
  }
}`,...C.parameters?.docs?.source}}};const O=["Default","Laptop","Smartphone","Camera","Watch","LowPrice","HighPrice","SalePrice","LongTitle","Interactive","ProductGrid","WithPlaceholderImage","WithBrokenImage","FreeProduct","OutOfStock","ComingSoon","AllVariations"],M=Object.freeze(Object.defineProperty({__proto__:null,AllVariations:C,Camera:u,ComingSoon:b,Default:m,FreeProduct:N,HighPrice:f,Interactive:U,Laptop:h,LongTitle:S,LowPrice:x,OutOfStock:j,ProductGrid:w,SalePrice:y,Smartphone:g,Watch:v,WithBrokenImage:P,WithPlaceholderImage:$,__namedExportsOrder:O,default:I},Symbol.toStringTag,{value:"Module"}));export{_ as H,M as P};
