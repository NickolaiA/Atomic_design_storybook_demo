import{r as v,j as t}from"./iframe-CY-Mz7KS.js";import"./preload-helper-PPVm8Dsz.js";const e=({value:s,defaultValue:c=1,min:i=1,max:d=999,step:n=1,size:m="md",buttonLayout:h="horizontal",buttonStyle:M="default",inputWidth:R="m",disabled:l=!1,readOnly:u=!1,onChange:Q,onIncrement:E,onDecrement:H,ariaLabel:D="Quantity",className:K="",id:k})=>{const[P,U]=v.useState(c),I=s!==void 0,o=I?s:P,p=v.useCallback(a=>Math.max(i,Math.min(d,a)),[i,d]),y=v.useCallback(a=>{const r=p(a);I||U(r),Q?.(r)},[I,p,Q]),W=a=>{if(u||l)return;const r=a.target.value;if(r===""){y(i);return}const A=parseInt(r,10);isNaN(A)||y(A)},F=()=>{if(u||l)return;const a=p(o);a!==o&&y(a)},L=()=>{if(l||u)return;const a=o+n,r=p(a);y(r),E?.(r)},C=()=>{if(l||u)return;const a=o-n,r=p(a);y(r),H?.(r)},_=a=>{if(!(u||l))switch(a.key){case"ArrowUp":a.preventDefault(),L();break;case"ArrowDown":a.preventDefault(),C();break}},G=["quantity-input",`quantity-input--${m}`,`quantity-input--${h}`,`quantity-input--input-${R}`,`quantity-input--buttons-${M}`,l&&"quantity-input--disabled",u&&"quantity-input--readonly",K].filter(Boolean).join(" "),T=!l&&!u&&o>i,B=!l&&!u&&o<d,$=()=>t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:"quantity-input__button quantity-input__button--decrement",onClick:C,disabled:!T,"aria-label":"Decrease quantity",tabIndex:-1,children:t.jsx("svg",{viewBox:"0 0 24 24",className:"quantity-input__icon",fill:"none",stroke:"currentColor",children:t.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12",strokeWidth:"2"})})}),t.jsx("input",{type:"number",id:k,className:"quantity-input__input",value:o,min:i,max:d,step:n,disabled:l,readOnly:u,onChange:W,onBlur:F,onKeyDown:_,"aria-label":D,role:"spinbutton","aria-valuemin":i,"aria-valuemax":d,"aria-valuenow":o}),t.jsx("button",{type:"button",className:"quantity-input__button quantity-input__button--increment",onClick:L,disabled:!B,"aria-label":"Increase quantity",tabIndex:-1,children:t.jsxs("svg",{viewBox:"0 0 24 24",className:"quantity-input__icon",fill:"none",stroke:"currentColor",children:[t.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19",strokeWidth:"2"}),t.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12",strokeWidth:"2"})]})})]}),J=()=>t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:"quantity-input__button quantity-input__button--increment",onClick:L,disabled:!B,"aria-label":"Increase quantity",tabIndex:-1,children:t.jsxs("svg",{viewBox:"0 0 24 24",className:"quantity-input__icon",fill:"none",stroke:"currentColor",children:[t.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19",strokeWidth:"2"}),t.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12",strokeWidth:"2"})]})}),t.jsx("input",{type:"number",id:k,className:"quantity-input__input",value:o,min:i,max:d,step:n,disabled:l,readOnly:u,onChange:W,onBlur:F,onKeyDown:_,"aria-label":D,role:"spinbutton","aria-valuemin":i,"aria-valuemax":d,"aria-valuenow":o}),t.jsx("button",{type:"button",className:"quantity-input__button quantity-input__button--decrement",onClick:C,disabled:!T,"aria-label":"Decrease quantity",tabIndex:-1,children:t.jsx("svg",{viewBox:"0 0 24 24",className:"quantity-input__icon",fill:"none",stroke:"currentColor",children:t.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12",strokeWidth:"2"})})})]});return t.jsx("div",{className:G,children:h==="horizontal"?$():J()})};e.__docgenInfo={description:"",methods:[],displayName:"QuantityInput",props:{value:{required:!1,tsType:{name:"number"},description:"Current value"},defaultValue:{required:!1,tsType:{name:"number"},description:"Default value for uncontrolled component",defaultValue:{value:"1",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"Minimum allowed value",defaultValue:{value:"1",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"Maximum allowed value",defaultValue:{value:"999",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Step increment/decrement amount",defaultValue:{value:"1",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},buttonLayout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Button layout - horizontal (side by side) or vertical (stacked)",defaultValue:{value:"'horizontal'",computed:!1}},buttonStyle:{required:!1,tsType:{name:"union",raw:"'default' | 'filled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"}]},description:"Button style variant - default (transparent) or filled (colored background)",defaultValue:{value:"'default'",computed:!1}},inputWidth:{required:!1,tsType:{name:"union",raw:"'s' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:"Input field width variant",defaultValue:{value:"'m'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the input is disabled",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the input is read-only",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback when value changes"},onIncrement:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback when increment button is clicked"},onDecrement:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback when decrement button is clicked"},ariaLabel:{required:!1,tsType:{name:"string"},description:"Aria label for accessibility",defaultValue:{value:"'Quantity'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className",defaultValue:{value:"''",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"ID for the input element"}}};const Y={title:"Atoms/QuantityInput",component:e,parameters:{layout:"centered",docs:{description:{component:"A quantity input component with increment and decrement buttons. Perfect for shopping carts, quantity selectors, and numeric input with constraints."}}},argTypes:{value:{control:"number",description:"Controlled value"},defaultValue:{control:"number",description:"Default value for uncontrolled component"},min:{control:"number",description:"Minimum allowed value"},max:{control:"number",description:"Maximum allowed value"},step:{control:"number",description:"Step increment/decrement amount"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},buttonLayout:{control:"select",options:["horizontal","vertical"],description:"Button layout - horizontal (side by side) or vertical (stacked)"},buttonStyle:{control:"select",options:["default","filled"],description:"Button style - default (transparent) or filled (colored background)"},inputWidth:{control:"select",options:["s","m","l","xl"],description:"Width of the input text area - s (small), m (medium), l (large), xl (extra large)"},disabled:{control:"boolean",description:"Whether the input is disabled"},readOnly:{control:"boolean",description:"Whether the input is read-only"},onChange:{description:"Callback when value changes",control:!1},onIncrement:{description:"Callback when increment button is pressed",control:!1},onDecrement:{description:"Callback when decrement button is pressed",control:!1},ariaLabel:{control:"text",description:"Aria label for accessibility"},className:{control:"text",description:"Additional CSS class"},id:{control:"text",description:"Input element ID"}},tags:["autodocs"]},x={args:{defaultValue:1,min:0,max:100,step:1,size:"md",buttonLayout:"horizontal",buttonStyle:"default",inputWidth:"m",disabled:!1,readOnly:!1,ariaLabel:"Quantity"}},b={render:()=>t.jsxs("div",{className:"quantity-input-story-vertical-layouts",children:[t.jsxs("div",{className:"quantity-input-story-demo",children:[t.jsx(e,{defaultValue:5,buttonLayout:"vertical",size:"sm"}),t.jsx("p",{children:"Small Vertical"})]}),t.jsxs("div",{className:"quantity-input-story-demo",children:[t.jsx(e,{defaultValue:5,buttonLayout:"vertical",size:"md"}),t.jsx("p",{children:"Medium Vertical"})]}),t.jsxs("div",{className:"quantity-input-story-demo",children:[t.jsx(e,{defaultValue:5,buttonLayout:"vertical",size:"lg"}),t.jsx("p",{children:"Large Vertical"})]})]})},f={render:()=>t.jsxs("div",{className:"quantity-input-story-sizes",children:[t.jsxs("div",{className:"quantity-input-story-demo",children:[t.jsx(e,{size:"sm",defaultValue:1}),t.jsx("p",{children:"Small"})]}),t.jsxs("div",{className:"quantity-input-story-demo",children:[t.jsx(e,{size:"md",defaultValue:5}),t.jsx("p",{children:"Medium"})]}),t.jsxs("div",{className:"quantity-input-story-demo",children:[t.jsx(e,{size:"lg",defaultValue:10}),t.jsx("p",{children:"Large"})]})]})},j={render:()=>t.jsxs("div",{className:"quantity-input-story-layouts",children:[t.jsxs("div",{className:"quantity-input-story-demo",children:[t.jsx(e,{defaultValue:5,buttonLayout:"horizontal",size:"md"}),t.jsx("p",{children:"Horizontal Layout"})]}),t.jsxs("div",{className:"quantity-input-story-demo",children:[t.jsx(e,{defaultValue:5,buttonLayout:"vertical",size:"md"}),t.jsx("p",{children:"Vertical Layout"})]})]})},g={render:()=>t.jsxs("div",{className:"quantity-input-story-states",children:[t.jsxs("div",{className:"quantity-input-story-demo",children:[t.jsx(e,{defaultValue:5}),t.jsx("p",{children:"Default"})]}),t.jsxs("div",{className:"quantity-input-story-demo",children:[t.jsx(e,{defaultValue:5,disabled:!0}),t.jsx("p",{children:"Disabled"})]}),t.jsxs("div",{className:"quantity-input-story-demo",children:[t.jsx(e,{defaultValue:5,readOnly:!0}),t.jsx("p",{children:"Read Only"})]})]})},q={render:()=>t.jsxs("div",{className:"quantity-input-story-ranges",children:[t.jsxs("div",{className:"quantity-input-story-demo",children:[t.jsx(e,{defaultValue:1,min:1,max:5,step:1}),t.jsx("p",{children:"Range: 1-5, Step: 1"})]}),t.jsxs("div",{className:"quantity-input-story-demo",children:[t.jsx(e,{defaultValue:10,min:0,max:100,step:10}),t.jsx("p",{children:"Range: 0-100, Step: 10"})]}),t.jsxs("div",{className:"quantity-input-story-demo",children:[t.jsx(e,{defaultValue:0,min:-10,max:10,step:1}),t.jsx("p",{children:"Range: -10 to 10"})]})]})},N={render:()=>{const[s,c]=v.useState(3);return t.jsxs("div",{className:"quantity-input-story-controlled",children:[t.jsx(e,{value:s,onChange:c,min:1,max:10,step:1}),t.jsxs("p",{children:["Current value: ",t.jsx("strong",{children:s})]}),t.jsx("button",{onClick:()=>c(1),children:"Reset to 1"})]})}},V={render:()=>{const[s,c]=v.useState({item1:2,item2:1,item3:3}),i=(n,m)=>{c(h=>({...h,[n]:m}))},d=Object.values(s).reduce((n,m)=>n+m,0);return t.jsxs("div",{className:"quantity-input-story-cart",children:[t.jsx("h3",{children:"Shopping Cart"}),t.jsxs("div",{className:"quantity-input-story-cart-items",children:[t.jsxs("div",{className:"quantity-input-story-cart-item",children:[t.jsx("span",{children:"T-Shirt"}),t.jsx(e,{value:s.item1,onChange:n=>i("item1",n),min:0,max:10,size:"sm",buttonLayout:"horizontal"})]}),t.jsxs("div",{className:"quantity-input-story-cart-item",children:[t.jsx("span",{children:"Jeans"}),t.jsx(e,{value:s.item2,onChange:n=>i("item2",n),min:0,max:5,size:"sm",buttonLayout:"vertical"})]}),t.jsxs("div",{className:"quantity-input-story-cart-item",children:[t.jsx("span",{children:"Sneakers"}),t.jsx(e,{value:s.item3,onChange:n=>i("item3",n),min:0,max:3,size:"sm",buttonLayout:"horizontal"})]})]}),t.jsx("div",{className:"quantity-input-story-cart-total",children:t.jsxs("strong",{children:["Total Items: ",d]})})]})}},S={render:()=>t.jsxs("div",{className:"quantity-input-story-accessibility",children:[t.jsxs("div",{children:[t.jsx("label",{htmlFor:"pizza-quantity",children:"Pizza Quantity:"}),t.jsx(e,{id:"pizza-quantity",defaultValue:2,min:1,max:20,ariaLabel:"Number of pizzas to order"})]}),t.jsxs("div",{className:"quantity-input-story-accessibility-info",children:[t.jsx("strong",{children:"Accessibility Features:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Full keyboard navigation (Tab, Arrow keys, Enter, Space)"}),t.jsx("li",{children:"ARIA attributes for screen readers"}),t.jsx("li",{children:"Focus management and visual indicators"}),t.jsx("li",{children:"Semantic HTML with proper roles"}),t.jsx("li",{children:"Descriptive button labels"})]}),t.jsx("strong",{children:"Keyboard shortcuts:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"↑ Arrow Up: Increment value"}),t.jsx("li",{children:"↓ Arrow Down: Decrement value"}),t.jsx("li",{children:"Tab: Navigate between elements"})]})]})]})},w={parameters:{docs:{description:{story:"Different input width variants to accommodate various layout needs. Choose from small (s), medium (m), large (l), and extra large (xl) widths."}}},render:()=>t.jsxs("div",{className:"quantity-input-story-group",children:[t.jsx("h3",{children:"Input Width Variants"}),t.jsxs("div",{className:"quantity-input-story-row",children:[t.jsxs("div",{className:"quantity-input-story-item",children:[t.jsx("label",{children:"Small (s)"}),t.jsx(e,{defaultValue:5,inputWidth:"s",min:0,max:99})]}),t.jsxs("div",{className:"quantity-input-story-item",children:[t.jsx("label",{children:"Medium (m) - Default"}),t.jsx(e,{defaultValue:25,inputWidth:"m",min:0,max:999})]}),t.jsxs("div",{className:"quantity-input-story-item",children:[t.jsx("label",{children:"Large (l)"}),t.jsx(e,{defaultValue:150,inputWidth:"l",min:0,max:9999})]}),t.jsxs("div",{className:"quantity-input-story-item",children:[t.jsx("label",{children:"Extra Large (xl)"}),t.jsx(e,{defaultValue:1500,inputWidth:"xl",min:0,max:99999})]})]}),t.jsx("h4",{children:"Combined with Vertical Layout"}),t.jsxs("div",{className:"quantity-input-story-row",children:[t.jsxs("div",{className:"quantity-input-story-item",children:[t.jsx("label",{children:"Small Vertical"}),t.jsx(e,{defaultValue:5,inputWidth:"s",buttonLayout:"vertical",min:0,max:99})]}),t.jsxs("div",{className:"quantity-input-story-item",children:[t.jsx("label",{children:"Large Vertical"}),t.jsx(e,{defaultValue:150,inputWidth:"l",buttonLayout:"vertical",min:0,max:9999})]})]}),t.jsxs("div",{className:"quantity-input-story-info",children:[t.jsx("strong",{children:"Width Guidelines:"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Small (s):"})," Best for single-digit values (0-99)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Medium (m):"})," Default size, good for most use cases (0-999)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Large (l):"})," For larger numbers or when more space is available (0-9999)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Extra Large (xl):"})," For very large values or when input prominence is needed (0-99999+)"]})]})]})]})},z={parameters:{docs:{description:{story:"Different button style variants. Choose between default (transparent) and filled (colored background) styles to match your design requirements."}}},render:()=>t.jsxs("div",{className:"quantity-input-story-group",children:[t.jsx("h3",{children:"Button Style Variants"}),t.jsxs("div",{className:"quantity-input-story-row",children:[t.jsxs("div",{className:"quantity-input-story-item",children:[t.jsx("label",{children:"Default (Transparent)"}),t.jsx(e,{defaultValue:3,buttonStyle:"default",min:0,max:99})]}),t.jsxs("div",{className:"quantity-input-story-item",children:[t.jsx("label",{children:"Filled (Colored)"}),t.jsx(e,{defaultValue:3,buttonStyle:"filled",min:0,max:99})]})]}),t.jsx("h4",{children:"Different Sizes with Filled Style"}),t.jsxs("div",{className:"quantity-input-story-row",children:[t.jsxs("div",{className:"quantity-input-story-item",children:[t.jsx("label",{children:"Small Filled"}),t.jsx(e,{defaultValue:5,size:"sm",buttonStyle:"filled",min:0,max:99})]}),t.jsxs("div",{className:"quantity-input-story-item",children:[t.jsx("label",{children:"Medium Filled"}),t.jsx(e,{defaultValue:10,size:"md",buttonStyle:"filled",min:0,max:99})]}),t.jsxs("div",{className:"quantity-input-story-item",children:[t.jsx("label",{children:"Large Filled"}),t.jsx(e,{defaultValue:15,size:"lg",buttonStyle:"filled",min:0,max:99})]})]}),t.jsx("h4",{children:"Vertical Layout with Button Styles"}),t.jsxs("div",{className:"quantity-input-story-row",children:[t.jsxs("div",{className:"quantity-input-story-item",children:[t.jsx("label",{children:"Vertical Default"}),t.jsx(e,{defaultValue:7,buttonLayout:"vertical",buttonStyle:"default",min:0,max:99})]}),t.jsxs("div",{className:"quantity-input-story-item",children:[t.jsx("label",{children:"Vertical Filled"}),t.jsx(e,{defaultValue:7,buttonLayout:"vertical",buttonStyle:"filled",min:0,max:99})]})]}),t.jsxs("div",{className:"quantity-input-story-info",children:[t.jsx("strong",{children:"Button Style Guidelines:"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Default:"})," Subtle appearance, best for minimal designs or when buttons should blend with surroundings"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Filled:"})," Prominent appearance with colored background, ideal for primary actions or when buttons need to stand out"]})]}),t.jsx("strong",{children:"Use Cases:"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Default:"})," Forms, settings panels, secondary controls"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Filled:"})," Shopping carts, product pages, call-to-action areas"]})]})]})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 1,
    min: 0,
    max: 100,
    step: 1,
    size: 'md',
    buttonLayout: 'horizontal',
    buttonStyle: 'default',
    inputWidth: 'm',
    disabled: false,
    readOnly: false,
    ariaLabel: 'Quantity'
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="quantity-input-story-vertical-layouts">\r
      <div className="quantity-input-story-demo">\r
        <QuantityInput defaultValue={5} buttonLayout="vertical" size="sm" />\r
        <p>Small Vertical</p>\r
      </div>\r
      <div className="quantity-input-story-demo">\r
        <QuantityInput defaultValue={5} buttonLayout="vertical" size="md" />\r
        <p>Medium Vertical</p>\r
      </div>\r
      <div className="quantity-input-story-demo">\r
        <QuantityInput defaultValue={5} buttonLayout="vertical" size="lg" />\r
        <p>Large Vertical</p>\r
      </div>\r
    </div>
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="quantity-input-story-sizes">\r
      <div className="quantity-input-story-demo">\r
        <QuantityInput size="sm" defaultValue={1} />\r
        <p>Small</p>\r
      </div>\r
      <div className="quantity-input-story-demo">\r
        <QuantityInput size="md" defaultValue={5} />\r
        <p>Medium</p>\r
      </div>\r
      <div className="quantity-input-story-demo">\r
        <QuantityInput size="lg" defaultValue={10} />\r
        <p>Large</p>\r
      </div>\r
    </div>
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="quantity-input-story-layouts">\r
      <div className="quantity-input-story-demo">\r
        <QuantityInput defaultValue={5} buttonLayout="horizontal" size="md" />\r
        <p>Horizontal Layout</p>\r
      </div>\r
      <div className="quantity-input-story-demo">\r
        <QuantityInput defaultValue={5} buttonLayout="vertical" size="md" />\r
        <p>Vertical Layout</p>\r
      </div>\r
    </div>
}`,...j.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="quantity-input-story-states">\r
      <div className="quantity-input-story-demo">\r
        <QuantityInput defaultValue={5} />\r
        <p>Default</p>\r
      </div>\r
      <div className="quantity-input-story-demo">\r
        <QuantityInput defaultValue={5} disabled />\r
        <p>Disabled</p>\r
      </div>\r
      <div className="quantity-input-story-demo">\r
        <QuantityInput defaultValue={5} readOnly />\r
        <p>Read Only</p>\r
      </div>\r
    </div>
}`,...g.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="quantity-input-story-ranges">\r
      <div className="quantity-input-story-demo">\r
        <QuantityInput defaultValue={1} min={1} max={5} step={1} />\r
        <p>Range: 1-5, Step: 1</p>\r
      </div>\r
      <div className="quantity-input-story-demo">\r
        <QuantityInput defaultValue={10} min={0} max={100} step={10} />\r
        <p>Range: 0-100, Step: 10</p>\r
      </div>\r
      <div className="quantity-input-story-demo">\r
        <QuantityInput defaultValue={0} min={-10} max={10} step={1} />\r
        <p>Range: -10 to 10</p>\r
      </div>\r
    </div>
}`,...q.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(3);
    return <div className="quantity-input-story-controlled">\r
        <QuantityInput value={value} onChange={setValue} min={1} max={10} step={1} />\r
        <p>\r
          Current value: <strong>{value}</strong>\r
        </p>\r
        <button onClick={() => setValue(1)}>\r
          Reset to 1\r
        </button>\r
      </div>;
  }
}`,...N.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [quantities, setQuantities] = useState({
      item1: 2,
      item2: 1,
      item3: 3
    });
    const updateQuantity = (itemId: string, newQuantity: number) => {
      setQuantities(prev => ({
        ...prev,
        [itemId]: newQuantity
      }));
    };
    const total = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
    return <div className="quantity-input-story-cart">\r
        <h3>Shopping Cart</h3>\r
        \r
        <div className="quantity-input-story-cart-items">\r
          <div className="quantity-input-story-cart-item">\r
            <span>T-Shirt</span>\r
            <QuantityInput value={quantities.item1} onChange={value => updateQuantity('item1', value)} min={0} max={10} size="sm" buttonLayout="horizontal" />\r
          </div>\r
          \r
          <div className="quantity-input-story-cart-item">\r
            <span>Jeans</span>\r
            <QuantityInput value={quantities.item2} onChange={value => updateQuantity('item2', value)} min={0} max={5} size="sm" buttonLayout="vertical" />\r
          </div>\r
          \r
          <div className="quantity-input-story-cart-item">\r
            <span>Sneakers</span>\r
            <QuantityInput value={quantities.item3} onChange={value => updateQuantity('item3', value)} min={0} max={3} size="sm" buttonLayout="horizontal" />\r
          </div>\r
        </div>\r
        \r
        <div className="quantity-input-story-cart-total">\r
          <strong>Total Items: {total}</strong>\r
        </div>\r
      </div>;
  }
}`,...V.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="quantity-input-story-accessibility">\r
      <div>\r
        <label htmlFor="pizza-quantity">\r
          Pizza Quantity:\r
        </label>\r
        <QuantityInput id="pizza-quantity" defaultValue={2} min={1} max={20} ariaLabel="Number of pizzas to order" />\r
      </div>\r
      \r
      <div className="quantity-input-story-accessibility-info">\r
        <strong>Accessibility Features:</strong>\r
        <ul>\r
          <li>Full keyboard navigation (Tab, Arrow keys, Enter, Space)</li>\r
          <li>ARIA attributes for screen readers</li>\r
          <li>Focus management and visual indicators</li>\r
          <li>Semantic HTML with proper roles</li>\r
          <li>Descriptive button labels</li>\r
        </ul>\r
        \r
        <strong>Keyboard shortcuts:</strong>\r
        <ul>\r
          <li>↑ Arrow Up: Increment value</li>\r
          <li>↓ Arrow Down: Decrement value</li>\r
          <li>Tab: Navigate between elements</li>\r
        </ul>\r
      </div>\r
    </div>
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Different input width variants to accommodate various layout needs. Choose from small (s), medium (m), large (l), and extra large (xl) widths.'
      }
    }
  },
  render: () => <div className="quantity-input-story-group">\r
      <h3>Input Width Variants</h3>\r
      \r
      <div className="quantity-input-story-row">\r
        <div className="quantity-input-story-item">\r
          <label>Small (s)</label>\r
          <QuantityInput defaultValue={5} inputWidth="s" min={0} max={99} />\r
        </div>\r
        \r
        <div className="quantity-input-story-item">\r
          <label>Medium (m) - Default</label>\r
          <QuantityInput defaultValue={25} inputWidth="m" min={0} max={999} />\r
        </div>\r
        \r
        <div className="quantity-input-story-item">\r
          <label>Large (l)</label>\r
          <QuantityInput defaultValue={150} inputWidth="l" min={0} max={9999} />\r
        </div>\r
        \r
        <div className="quantity-input-story-item">\r
          <label>Extra Large (xl)</label>\r
          <QuantityInput defaultValue={1500} inputWidth="xl" min={0} max={99999} />\r
        </div>\r
      </div>\r
      \r
      <h4>Combined with Vertical Layout</h4>\r
      <div className="quantity-input-story-row">\r
        <div className="quantity-input-story-item">\r
          <label>Small Vertical</label>\r
          <QuantityInput defaultValue={5} inputWidth="s" buttonLayout="vertical" min={0} max={99} />\r
        </div>\r
        \r
        <div className="quantity-input-story-item">\r
          <label>Large Vertical</label>\r
          <QuantityInput defaultValue={150} inputWidth="l" buttonLayout="vertical" min={0} max={9999} />\r
        </div>\r
      </div>\r
      \r
      <div className="quantity-input-story-info">\r
        <strong>Width Guidelines:</strong>\r
        <ul>\r
          <li><strong>Small (s):</strong> Best for single-digit values (0-99)</li>\r
          <li><strong>Medium (m):</strong> Default size, good for most use cases (0-999)</li>\r
          <li><strong>Large (l):</strong> For larger numbers or when more space is available (0-9999)</li>\r
          <li><strong>Extra Large (xl):</strong> For very large values or when input prominence is needed (0-99999+)</li>\r
        </ul>\r
      </div>\r
    </div>
}`,...w.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Different button style variants. Choose between default (transparent) and filled (colored background) styles to match your design requirements.'
      }
    }
  },
  render: () => <div className="quantity-input-story-group">\r
      <h3>Button Style Variants</h3>\r
      \r
      <div className="quantity-input-story-row">\r
        <div className="quantity-input-story-item">\r
          <label>Default (Transparent)</label>\r
          <QuantityInput defaultValue={3} buttonStyle="default" min={0} max={99} />\r
        </div>\r
        \r
        <div className="quantity-input-story-item">\r
          <label>Filled (Colored)</label>\r
          <QuantityInput defaultValue={3} buttonStyle="filled" min={0} max={99} />\r
        </div>\r
      </div>\r
      \r
      <h4>Different Sizes with Filled Style</h4>\r
      <div className="quantity-input-story-row">\r
        <div className="quantity-input-story-item">\r
          <label>Small Filled</label>\r
          <QuantityInput defaultValue={5} size="sm" buttonStyle="filled" min={0} max={99} />\r
        </div>\r
        \r
        <div className="quantity-input-story-item">\r
          <label>Medium Filled</label>\r
          <QuantityInput defaultValue={10} size="md" buttonStyle="filled" min={0} max={99} />\r
        </div>\r
        \r
        <div className="quantity-input-story-item">\r
          <label>Large Filled</label>\r
          <QuantityInput defaultValue={15} size="lg" buttonStyle="filled" min={0} max={99} />\r
        </div>\r
      </div>\r
      \r
      <h4>Vertical Layout with Button Styles</h4>\r
      <div className="quantity-input-story-row">\r
        <div className="quantity-input-story-item">\r
          <label>Vertical Default</label>\r
          <QuantityInput defaultValue={7} buttonLayout="vertical" buttonStyle="default" min={0} max={99} />\r
        </div>\r
        \r
        <div className="quantity-input-story-item">\r
          <label>Vertical Filled</label>\r
          <QuantityInput defaultValue={7} buttonLayout="vertical" buttonStyle="filled" min={0} max={99} />\r
        </div>\r
      </div>\r
      \r
      <div className="quantity-input-story-info">\r
        <strong>Button Style Guidelines:</strong>\r
        <ul>\r
          <li><strong>Default:</strong> Subtle appearance, best for minimal designs or when buttons should blend with surroundings</li>\r
          <li><strong>Filled:</strong> Prominent appearance with colored background, ideal for primary actions or when buttons need to stand out</li>\r
        </ul>\r
        \r
        <strong>Use Cases:</strong>\r
        <ul>\r
          <li><strong>Default:</strong> Forms, settings panels, secondary controls</li>\r
          <li><strong>Filled:</strong> Shopping carts, product pages, call-to-action areas</li>\r
        </ul>\r
      </div>\r
    </div>
}`,...z.parameters?.docs?.source}}};const Z=["Default","VerticalLayout","Sizes","ButtonLayouts","States","Ranges","Controlled","ShoppingCartExample","Accessibility","InputWidths","ButtonStyles"];export{S as Accessibility,j as ButtonLayouts,z as ButtonStyles,N as Controlled,x as Default,w as InputWidths,q as Ranges,V as ShoppingCartExample,f as Sizes,g as States,b as VerticalLayout,Z as __namedExportsOrder,Y as default};
