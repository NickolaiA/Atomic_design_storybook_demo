import{j as e}from"./iframe-CY-Mz7KS.js";import{P as S}from"./ProductCard-BCbO4pKg.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-acQDbgEt.js";const A={title:"Organisms/ProductCard",component:S,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{imageUrl:{control:"text",description:"URL of the product image"},title:{control:"text",description:"Product title"},price:{control:"text",description:"Product price"},onAddToCart:{action:"add-to-cart",description:"Callback function when add to cart button is clicked"}}},a={args:{imageUrl:"https://picsum.photos/280/160?random=1",title:"Premium Wireless Headphones",price:"$199.99"}},i={args:{imageUrl:"https://picsum.photos/280/160?random=2",title:"MacBook Pro 16-inch",price:"$2,499.00"}},s={args:{imageUrl:"https://picsum.photos/280/160?random=3",title:"iPhone 15 Pro",price:"$999.00"}},c={args:{imageUrl:"https://picsum.photos/280/160?random=4",title:"Canon EOS R5 Camera",price:"$3,899.99"}},p={args:{imageUrl:"https://picsum.photos/280/160?random=5",title:"Apple Watch Series 9",price:"$399.00"}},d={args:{imageUrl:"https://picsum.photos/280/160?random=6",title:"Wireless Earbuds",price:"$49.99"}},n={args:{imageUrl:"https://picsum.photos/280/160?random=7",title:"Professional Monitor",price:"$1,299.99"}},l={args:{imageUrl:"https://picsum.photos/280/160?random=8",title:"Gaming Keyboard",price:"$89.99 $129.99"}},m={args:{imageUrl:"https://picsum.photos/280/160?random=9",title:"Ultra-Premium Noise-Cancelling Wireless Bluetooth Headphones with Advanced Features",price:"$299.99"}},u={render:t=>{const o=()=>{alert(`Added "${t.title}" to cart!`)};return e.jsxs("div",{className:"product-card-demo",children:[e.jsx(S,{imageUrl:t.imageUrl||"https://picsum.photos/280/160?random=10",title:t.title||"Wireless Mouse",price:t.price||"$79.99",onAddToCart:o}),e.jsx("p",{children:'Click "Add to cart" to see an alert'}),e.jsx("style",{children:`
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
        `})]})},args:{imageUrl:"https://picsum.photos/280/160?random=10",title:"Wireless Mouse",price:"$79.99"}},g={render:()=>{const t=[{id:1,imageUrl:"https://picsum.photos/280/160?random=11",title:"Wireless Headphones",price:"$199.99"},{id:2,imageUrl:"https://picsum.photos/280/160?random=12",title:"Smart Watch",price:"$299.00"},{id:3,imageUrl:"https://picsum.photos/280/160?random=13",title:"Bluetooth Speaker",price:"$129.99"},{id:4,imageUrl:"https://picsum.photos/280/160?random=14",title:"Wireless Charger",price:"$49.99"}],o=r=>{alert(`Added "${r}" to cart!`)};return e.jsxs("div",{className:"product-grid",children:[e.jsx("h3",{children:"Featured Products"}),e.jsx("div",{className:"grid",children:t.map(r=>e.jsx(S,{imageUrl:r.imageUrl,title:r.title,price:r.price,onAddToCart:()=>o(r.title)},r.id))}),e.jsx("style",{children:`
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
        `})]})}},h={args:{imageUrl:"https://via.placeholder.com/280x160/cccccc/666666?text=No+Image",title:"Product with Placeholder",price:"$99.99"}},x={args:{imageUrl:"https://broken-url-that-does-not-exist.jpg",title:"Product with Broken Image",price:"$149.99"}},U={args:{imageUrl:"https://picsum.photos/280/160?random=15",title:"Free Sample Kit",price:"Free"}},P={args:{imageUrl:"https://picsum.photos/280/160?random=16",title:"Limited Edition Item",price:"Out of Stock"}},$={args:{imageUrl:"https://picsum.photos/280/160?random=17",title:"Next Generation Product",price:"Coming Soon"}},f={render:()=>{const t=[{imageUrl:"https://picsum.photos/280/160?random=18",title:"Regular Product",price:"$199.99"},{imageUrl:"https://picsum.photos/280/160?random=19",title:"Product with Very Long Title That Wraps to Multiple Lines",price:"$299.99"},{imageUrl:"https://via.placeholder.com/280x160/cccccc/666666?text=Placeholder",title:"With Placeholder Image",price:"$99.99"},{imageUrl:"https://picsum.photos/280/160?random=20",title:"Sale Item",price:"$149.99 $199.99"},{imageUrl:"https://picsum.photos/280/160?random=21",title:"Free Sample",price:"Free"},{imageUrl:"https://picsum.photos/280/160?random=22",title:"Out of Stock Item",price:"Out of Stock"}];return e.jsxs("div",{className:"variations-showcase",children:[e.jsx("h3",{children:"Product Card Variations"}),e.jsx("div",{className:"variations-grid",children:t.map((o,r)=>e.jsx(S,{imageUrl:o.imageUrl,title:o.title,price:o.price,onAddToCart:()=>alert(`Added "${o.title}" to cart!`)},r))}),e.jsx("style",{children:`
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
        `})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=1',
    title: 'Premium Wireless Headphones',
    price: '$199.99'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=2',
    title: 'MacBook Pro 16-inch',
    price: '$2,499.00'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=3',
    title: 'iPhone 15 Pro',
    price: '$999.00'
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=4',
    title: 'Canon EOS R5 Camera',
    price: '$3,899.99'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=5',
    title: 'Apple Watch Series 9',
    price: '$399.00'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=6',
    title: 'Wireless Earbuds',
    price: '$49.99'
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=7',
    title: 'Professional Monitor',
    price: '$1,299.99'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=8',
    title: 'Gaming Keyboard',
    price: '$89.99 $129.99'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=9',
    title: 'Ultra-Premium Noise-Cancelling Wireless Bluetooth Headphones with Advanced Features',
    price: '$299.99'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://via.placeholder.com/280x160/cccccc/666666?text=No+Image',
    title: 'Product with Placeholder',
    price: '$99.99'
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://broken-url-that-does-not-exist.jpg',
    title: 'Product with Broken Image',
    price: '$149.99'
  }
}`,...x.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=15',
    title: 'Free Sample Kit',
    price: 'Free'
  }
}`,...U.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=16',
    title: 'Limited Edition Item',
    price: 'Out of Stock'
  }
}`,...P.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=17',
    title: 'Next Generation Product',
    price: 'Coming Soon'
  }
}`,...$.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const w=["Default","Laptop","Smartphone","Camera","Watch","LowPrice","HighPrice","SalePrice","LongTitle","Interactive","ProductGrid","WithPlaceholderImage","WithBrokenImage","FreeProduct","OutOfStock","ComingSoon","AllVariations"];export{f as AllVariations,c as Camera,$ as ComingSoon,a as Default,U as FreeProduct,n as HighPrice,u as Interactive,i as Laptop,m as LongTitle,d as LowPrice,P as OutOfStock,g as ProductGrid,l as SalePrice,s as Smartphone,p as Watch,x as WithBrokenImage,h as WithPlaceholderImage,w as __namedExportsOrder,A as default};
