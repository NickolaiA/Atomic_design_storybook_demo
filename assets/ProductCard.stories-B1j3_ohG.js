import{j as e}from"./jsx-runtime-CDt2p4po.js";import{P as S}from"./ProductCard-kja-hGtc.js";import"./index-GiUgBvb1.js";import"./Button-CJLaJPku.js";const Ce={title:"Organisms/ProductCard",component:S,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{imageUrl:{control:"text",description:"URL of the product image"},title:{control:"text",description:"Product title"},price:{control:"text",description:"Product price"},onAddToCart:{action:"add-to-cart",description:"Callback function when add to cart button is clicked"}}},a={args:{imageUrl:"https://picsum.photos/280/160?random=1",title:"Premium Wireless Headphones",price:"$199.99"}},i={args:{imageUrl:"https://picsum.photos/280/160?random=2",title:"MacBook Pro 16-inch",price:"$2,499.00"}},s={args:{imageUrl:"https://picsum.photos/280/160?random=3",title:"iPhone 15 Pro",price:"$999.00"}},c={args:{imageUrl:"https://picsum.photos/280/160?random=4",title:"Canon EOS R5 Camera",price:"$3,899.99"}},p={args:{imageUrl:"https://picsum.photos/280/160?random=5",title:"Apple Watch Series 9",price:"$399.00"}},d={args:{imageUrl:"https://picsum.photos/280/160?random=6",title:"Wireless Earbuds",price:"$49.99"}},n={args:{imageUrl:"https://picsum.photos/280/160?random=7",title:"Professional Monitor",price:"$1,299.99"}},l={args:{imageUrl:"https://picsum.photos/280/160?random=8",title:"Gaming Keyboard",price:"$89.99 $129.99"}},m={args:{imageUrl:"https://picsum.photos/280/160?random=9",title:"Ultra-Premium Noise-Cancelling Wireless Bluetooth Headphones with Advanced Features",price:"$299.99"}},u={render:t=>{const o=()=>{alert(`Added "${t.title}" to cart!`)};return e.jsxs("div",{className:"product-card-demo",children:[e.jsx(S,{imageUrl:t.imageUrl||"https://picsum.photos/280/160?random=10",title:t.title||"Wireless Mouse",price:t.price||"$79.99",onAddToCart:o}),e.jsx("p",{children:'Click "Add to cart" to see an alert'}),e.jsx("style",{children:`
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
        `})]})}};var v,C,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=1',
    title: 'Premium Wireless Headphones',
    price: '$199.99'
  }
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var W,A,w;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=2',
    title: 'MacBook Pro 16-inch',
    price: '$2,499.00'
  }
}`,...(w=(A=i.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var k,T,j;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=3',
    title: 'iPhone 15 Pro',
    price: '$999.00'
  }
}`,...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var I,N,F;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=4',
    title: 'Canon EOS R5 Camera',
    price: '$3,899.99'
  }
}`,...(F=(N=c.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var O,L,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=5',
    title: 'Apple Watch Series 9',
    price: '$399.00'
  }
}`,...(B=(L=p.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var M,b,E;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=6',
    title: 'Wireless Earbuds',
    price: '$49.99'
  }
}`,...(E=(b=d.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var H,z,G;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=7',
    title: 'Professional Monitor',
    price: '$1,299.99'
  }
}`,...(G=(z=n.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var R,V,K;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=8',
    title: 'Gaming Keyboard',
    price: '$89.99 $129.99'
  }
}`,...(K=(V=l.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var D,_,q;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=9',
    title: 'Ultra-Premium Noise-Cancelling Wireless Bluetooth Headphones with Advanced Features',
    price: '$299.99'
  }
}`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var J,Q,X;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,te,oe;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://via.placeholder.com/280x160/cccccc/666666?text=No+Image',
    title: 'Product with Placeholder',
    price: '$99.99'
  }
}`,...(oe=(te=h.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ae,ie,se;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://broken-url-that-does-not-exist.jpg',
    title: 'Product with Broken Image',
    price: '$149.99'
  }
}`,...(se=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ce,pe,de;U.parameters={...U.parameters,docs:{...(ce=U.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=15',
    title: 'Free Sample Kit',
    price: 'Free'
  }
}`,...(de=(pe=U.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ne,le,me;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=16',
    title: 'Limited Edition Item',
    price: 'Out of Stock'
  }
}`,...(me=(le=P.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var ue,ge,he;$.parameters={...$.parameters,docs:{...(ue=$.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/280/160?random=17',
    title: 'Next Generation Product',
    price: 'Coming Soon'
  }
}`,...(he=(ge=$.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var xe,Ue,Pe;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Pe=(Ue=f.parameters)==null?void 0:Ue.docs)==null?void 0:Pe.source}}};const ye=["Default","Laptop","Smartphone","Camera","Watch","LowPrice","HighPrice","SalePrice","LongTitle","Interactive","ProductGrid","WithPlaceholderImage","WithBrokenImage","FreeProduct","OutOfStock","ComingSoon","AllVariations"];export{f as AllVariations,c as Camera,$ as ComingSoon,a as Default,U as FreeProduct,n as HighPrice,u as Interactive,i as Laptop,m as LongTitle,d as LowPrice,P as OutOfStock,g as ProductGrid,l as SalePrice,s as Smartphone,p as Watch,x as WithBrokenImage,h as WithPlaceholderImage,ye as __namedExportsOrder,Ce as default};
