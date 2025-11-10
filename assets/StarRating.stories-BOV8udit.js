import{r as d,j as e}from"./iframe-BMIDd8Dz.js";import{S as L}from"./Star-zw6ti8DJ.js";import"./preload-helper-PPVm8Dsz.js";const a=({value:r,defaultValue:o=0,count:c=5,allowHalf:u=!1,allowClear:s=!0,disabled:t=!1,readOnly:n=!1,size:v="default",character:V,tooltips:H,onChange:A,onHoverChange:p,className:q="",style:O})=>{const[B,G]=d.useState(o),[T,k]=d.useState(null),g=r!==void 0?r:B,D=T!==null?T:g,z=d.useCallback((m,i=!1)=>{if(t||n)return;const l=m+(i?.5:1),h=s&&l===g?0:l;r===void 0&&G(h),A?.(h)},[t,n,s,g,r,A]),E=d.useCallback((m,i=!1)=>{if(t||n)return;const l=m+(i?.5:1);k(l),p?.(l)},[t,n,p]),$=d.useCallback(()=>{t||n||(k(null),p?.(g))},[t,n,g,p]),P=d.useCallback(m=>{const i=m+1,l=D-(i-1);return l>=1?100:l<=0?0:u?l>=.5?50:0:Math.round(l*100)},[D,u]),I=d.useMemo(()=>Array.from({length:c},(m,i)=>{const l=P(i),h=H?.[i];return e.jsx(L,{fillPercentage:l,size:v,character:V,onClick:()=>!t&&!n&&z(i),onMouseEnter:()=>!t&&!n&&E(i),ariaLabel:h||`Rate ${i+1} star${i>0?"s":""}`,className:`star-rating__star ${t?"star-rating__star--disabled":""} ${n?"star-rating__star--readonly":""}`},i)}),[c,P,H,v,V,t,n,z,E]);return e.jsx("div",{className:`star-rating star-rating--${v} ${t?"star-rating--disabled":""} ${n?"star-rating--readonly":""} ${q}`,style:O,onMouseLeave:$,role:"radiogroup","aria-label":`Rating: ${g} out of ${c} stars`,"data-size":v,"data-disabled":t,"data-readonly":n,"data-allow-half":u,"data-allow-clear":s,children:I})};a.__docgenInfo={description:"",methods:[],displayName:"StarRating",props:{value:{required:!1,tsType:{name:"number"},description:"Current rating value (0-count)"},defaultValue:{required:!1,tsType:{name:"number"},description:"Default rating value for uncontrolled mode",defaultValue:{value:"0",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"Total number of stars",defaultValue:{value:"5",computed:!1}},allowHalf:{required:!1,tsType:{name:"boolean"},description:"Allow half stars",defaultValue:{value:"false",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Allow clearing rating by clicking the same star",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"Read-only mode",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size of the stars",defaultValue:{value:"'default'",computed:!1}},character:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom character for stars"},tooltips:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Tooltip text for each star"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback when rating changes"},onHoverChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback when hovering over stars"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"}}};const Q={title:"Atoms/StarRating",component:a,parameters:{layout:"centered",docs:{description:{component:"A StarRating component for collecting user ratings. Features configurable star count, half-star support, custom characters, and accessibility features."}}},argTypes:{value:{control:{type:"number",min:0,max:5,step:.5},description:"Current rating value (controlled)"},defaultValue:{control:{type:"number",min:0,max:5,step:.5},description:"Default rating value (uncontrolled)"},count:{control:{type:"number",min:1,max:10},description:"Total number of stars"},allowHalf:{control:"boolean",description:"Allow half star ratings"},allowClear:{control:"boolean",description:"Allow clearing rating by clicking same star"},disabled:{control:"boolean",description:"Disabled state"},readOnly:{control:"boolean",description:"Read-only mode"},size:{control:"select",options:["small","default","large"],description:"Size of the stars"}}},f={args:{defaultValue:3}},_={render:()=>e.jsxs("div",{className:"star-rating-demo",children:[e.jsxs("div",{className:"star-rating-demo__section",children:[e.jsx("h4",{children:"Small"}),e.jsx(a,{size:"small",defaultValue:4})]}),e.jsxs("div",{className:"star-rating-demo__section",children:[e.jsx("h4",{children:"Default"}),e.jsx(a,{size:"default",defaultValue:3.5,allowHalf:!0})]}),e.jsxs("div",{className:"star-rating-demo__section",children:[e.jsx("h4",{children:"Large"}),e.jsx(a,{size:"large",defaultValue:5})]})]}),args:{},parameters:{docs:{description:{story:"Different size variants of the star rating component."}}}},x={args:{defaultValue:3.5,allowHalf:!0},parameters:{docs:{description:{story:"Star rating with half-star support for more precise ratings."}}}},j={render:()=>e.jsxs("div",{className:"star-rating-demo",children:[e.jsxs("div",{className:"star-rating-demo__section",children:[e.jsx("h4",{children:"3 Stars"}),e.jsx(a,{count:3,defaultValue:2})]}),e.jsxs("div",{className:"star-rating-demo__section",children:[e.jsx("h4",{children:"7 Stars"}),e.jsx(a,{count:7,defaultValue:5})]}),e.jsxs("div",{className:"star-rating-demo__section",children:[e.jsx("h4",{children:"10 Stars"}),e.jsx(a,{count:10,defaultValue:8,allowHalf:!0})]})]}),args:{},parameters:{docs:{description:{story:"Star rating with different numbers of stars."}}}},S={args:{defaultValue:4,tooltips:["Terrible","Bad","Normal","Good","Wonderful"]},parameters:{docs:{description:{story:"Star rating with custom tooltips for each star."}}}},y={render:()=>e.jsxs("div",{className:"star-rating-demo",children:[e.jsxs("div",{className:"star-rating-demo__section",children:[e.jsx("h4",{children:"Hearts"}),e.jsx(a,{defaultValue:4,character:"♥"})]}),e.jsxs("div",{className:"star-rating-demo__section",children:[e.jsx("h4",{children:"Thumbs Up"}),e.jsx(a,{defaultValue:3,character:"👍"})]}),e.jsxs("div",{className:"star-rating-demo__section",children:[e.jsx("h4",{children:"Diamonds"}),e.jsx(a,{defaultValue:5,character:"♦"})]}),e.jsxs("div",{className:"star-rating-demo__section",children:[e.jsx("h4",{children:"Custom Icon"}),e.jsx(a,{defaultValue:2,character:"🔥"})]})]}),args:{},parameters:{docs:{description:{story:"Star rating with custom characters instead of stars."}}}},N={render:()=>e.jsxs("div",{className:"star-rating-demo",children:[e.jsxs("div",{className:"star-rating-demo__section",children:[e.jsx("h4",{children:"Default"}),e.jsx(a,{defaultValue:3})]}),e.jsxs("div",{className:"star-rating-demo__section",children:[e.jsx("h4",{children:"Disabled"}),e.jsx(a,{defaultValue:3,disabled:!0})]}),e.jsxs("div",{className:"star-rating-demo__section",children:[e.jsx("h4",{children:"Read Only"}),e.jsx(a,{defaultValue:4,readOnly:!0})]})]}),args:{},parameters:{docs:{description:{story:"Different states of the star rating component."}}}},w={args:{defaultValue:3,allowClear:!1},parameters:{docs:{description:{story:"Star rating that prevents clearing the rating once set."}}}},R={render:()=>{const[r,o]=d.useState(3),[c,u]=d.useState(0);return e.jsxs("div",{className:"star-rating-controlled",children:[e.jsx("div",{className:"star-rating-controlled__section",children:e.jsx(a,{value:r,allowHalf:!0,onChange:o,onHoverChange:u})}),e.jsxs("div",{className:"star-rating-controlled__info",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Current Rating:"})," ",r]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Hover Rating:"})," ",c]})]}),e.jsxs("div",{className:"star-rating-controlled__buttons",children:[e.jsx("button",{onClick:()=>o(0),children:"Clear"}),e.jsx("button",{onClick:()=>o(1),children:"1 Star"}),e.jsx("button",{onClick:()=>o(2.5),children:"2.5 Stars"}),e.jsx("button",{onClick:()=>o(4),children:"4 Stars"}),e.jsx("button",{onClick:()=>o(5),children:"5 Stars"})]})]})},args:{},parameters:{docs:{description:{story:"Controlled star rating with external state management and hover tracking."}}}},b={render:()=>{const[r,o]=d.useState({product:0,service:0,delivery:0,overall:0}),c=(s,t)=>{o(n=>({...n,[s]:t}))},u=Object.values(r).reduce((s,t)=>s+t,0)/4;return e.jsxs("div",{className:"star-rating-interactive",children:[e.jsx("h4",{children:"Rate Your Experience"}),e.jsxs("div",{className:"star-rating-interactive__category",children:[e.jsx("label",{children:"Product Quality:"}),e.jsx(a,{value:r.product,allowHalf:!0,onChange:s=>c("product",s),tooltips:["Poor","Below Average","Average","Good","Excellent"]}),e.jsx("span",{className:"star-rating-interactive__value",children:r.product})]}),e.jsxs("div",{className:"star-rating-interactive__category",children:[e.jsx("label",{children:"Customer Service:"}),e.jsx(a,{value:r.service,allowHalf:!0,onChange:s=>c("service",s),tooltips:["Poor","Below Average","Average","Good","Excellent"]}),e.jsx("span",{className:"star-rating-interactive__value",children:r.service})]}),e.jsxs("div",{className:"star-rating-interactive__category",children:[e.jsx("label",{children:"Delivery Speed:"}),e.jsx(a,{value:r.delivery,allowHalf:!0,onChange:s=>c("delivery",s),tooltips:["Poor","Below Average","Average","Good","Excellent"]}),e.jsx("span",{className:"star-rating-interactive__value",children:r.delivery})]}),e.jsxs("div",{className:"star-rating-interactive__category",children:[e.jsx("label",{children:"Overall Experience:"}),e.jsx(a,{value:r.overall,allowHalf:!0,onChange:s=>c("overall",s),tooltips:["Poor","Below Average","Average","Good","Excellent"]}),e.jsx("span",{className:"star-rating-interactive__value",children:r.overall})]}),e.jsxs("div",{className:"star-rating-interactive__summary",children:[e.jsxs("strong",{children:["Average Rating: ",u.toFixed(1)," / 5.0"]}),e.jsx("div",{className:"star-rating-interactive__average",children:e.jsx(a,{value:u,allowHalf:!0,readOnly:!0})})]})]})},args:{},parameters:{docs:{description:{story:"Interactive rating form with multiple categories and automatic average calculation."}}}},C={render:()=>e.jsx("div",{className:"star-rating-demo",children:e.jsxs("div",{className:"star-rating-demo__section",children:[e.jsx("h4",{children:"Product Reviews"}),e.jsxs("div",{className:"star-rating-reviews",children:[e.jsxs("div",{className:"star-rating-reviews__item",children:[e.jsx(a,{value:4.5,allowHalf:!0,readOnly:!0,size:"small"}),e.jsx("span",{children:"(4.5/5) - 142 reviews"})]}),e.jsxs("div",{className:"star-rating-reviews__item",children:[e.jsx(a,{value:3,readOnly:!0,size:"small"}),e.jsx("span",{children:"(3.0/5) - 28 reviews"})]}),e.jsxs("div",{className:"star-rating-reviews__item",children:[e.jsx(a,{value:5,readOnly:!0,size:"small"}),e.jsx("span",{children:"(5.0/5) - 89 reviews"})]}),e.jsxs("div",{className:"star-rating-reviews__item",children:[e.jsx(a,{value:2.5,allowHalf:!0,readOnly:!0,size:"small"}),e.jsx("span",{children:"(2.5/5) - 15 reviews"})]})]})]})}),args:{},parameters:{docs:{description:{story:"Read-only star ratings for displaying existing ratings and reviews."}}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 3
  }
}`,...f.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="star-rating-demo">\r
      <div className="star-rating-demo__section">\r
        <h4>Small</h4>\r
        <StarRating size="small" defaultValue={4} />\r
      </div>\r
      \r
      <div className="star-rating-demo__section">\r
        <h4>Default</h4>\r
        <StarRating size="default" defaultValue={3.5} allowHalf />\r
      </div>\r
      \r
      <div className="star-rating-demo__section">\r
        <h4>Large</h4>\r
        <StarRating size="large" defaultValue={5} />\r
      </div>\r
    </div>,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the star rating component.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 3.5,
    allowHalf: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Star rating with half-star support for more precise ratings.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="star-rating-demo">\r
      <div className="star-rating-demo__section">\r
        <h4>3 Stars</h4>\r
        <StarRating count={3} defaultValue={2} />\r
      </div>\r
      \r
      <div className="star-rating-demo__section">\r
        <h4>7 Stars</h4>\r
        <StarRating count={7} defaultValue={5} />\r
      </div>\r
      \r
      <div className="star-rating-demo__section">\r
        <h4>10 Stars</h4>\r
        <StarRating count={10} defaultValue={8} allowHalf />\r
      </div>\r
    </div>,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Star rating with different numbers of stars.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 4,
    tooltips: ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful']
  },
  parameters: {
    docs: {
      description: {
        story: 'Star rating with custom tooltips for each star.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="star-rating-demo">\r
      <div className="star-rating-demo__section">\r
        <h4>Hearts</h4>\r
        <StarRating defaultValue={4} character="♥" />\r
      </div>\r
      \r
      <div className="star-rating-demo__section">\r
        <h4>Thumbs Up</h4>\r
        <StarRating defaultValue={3} character="👍" />\r
      </div>\r
      \r
      <div className="star-rating-demo__section">\r
        <h4>Diamonds</h4>\r
        <StarRating defaultValue={5} character="♦" />\r
      </div>\r
      \r
      <div className="star-rating-demo__section">\r
        <h4>Custom Icon</h4>\r
        <StarRating defaultValue={2} character="🔥" />\r
      </div>\r
    </div>,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Star rating with custom characters instead of stars.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div className="star-rating-demo">\r
      <div className="star-rating-demo__section">\r
        <h4>Default</h4>\r
        <StarRating defaultValue={3} />\r
      </div>\r
      \r
      <div className="star-rating-demo__section">\r
        <h4>Disabled</h4>\r
        <StarRating defaultValue={3} disabled />\r
      </div>\r
      \r
      <div className="star-rating-demo__section">\r
        <h4>Read Only</h4>\r
        <StarRating defaultValue={4} readOnly />\r
      </div>\r
    </div>,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Different states of the star rating component.'
      }
    }
  }
}`,...N.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 3,
    allowClear: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Star rating that prevents clearing the rating once set.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [rating, setRating] = useState(3);
    const [hoverRating, setHoverRating] = useState<number>(0);
    return <div className="star-rating-controlled">\r
        <div className="star-rating-controlled__section">\r
          <StarRating value={rating} allowHalf onChange={setRating} onHoverChange={setHoverRating} />\r
        </div>\r
        \r
        <div className="star-rating-controlled__info">\r
          <div><strong>Current Rating:</strong> {rating}</div>\r
          <div><strong>Hover Rating:</strong> {hoverRating}</div>\r
        </div>\r
        \r
        <div className="star-rating-controlled__buttons">\r
          <button onClick={() => setRating(0)}>Clear</button>\r
          <button onClick={() => setRating(1)}>1 Star</button>\r
          <button onClick={() => setRating(2.5)}>2.5 Stars</button>\r
          <button onClick={() => setRating(4)}>4 Stars</button>\r
          <button onClick={() => setRating(5)}>5 Stars</button>\r
        </div>\r
      </div>;
  },
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Controlled star rating with external state management and hover tracking.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [ratings, setRatings] = useState({
      product: 0,
      service: 0,
      delivery: 0,
      overall: 0
    });
    const handleRatingChange = (category: keyof typeof ratings, value: number) => {
      setRatings(prev => ({
        ...prev,
        [category]: value
      }));
    };
    const averageRating = Object.values(ratings).reduce((sum, rating) => sum + rating, 0) / 4;
    return <div className="star-rating-interactive">\r
        <h4>Rate Your Experience</h4>\r
        \r
        <div className="star-rating-interactive__category">\r
          <label>Product Quality:</label>\r
          <StarRating value={ratings.product} allowHalf onChange={value => handleRatingChange('product', value)} tooltips={['Poor', 'Below Average', 'Average', 'Good', 'Excellent']} />\r
          <span className="star-rating-interactive__value">{ratings.product}</span>\r
        </div>\r
        \r
        <div className="star-rating-interactive__category">\r
          <label>Customer Service:</label>\r
          <StarRating value={ratings.service} allowHalf onChange={value => handleRatingChange('service', value)} tooltips={['Poor', 'Below Average', 'Average', 'Good', 'Excellent']} />\r
          <span className="star-rating-interactive__value">{ratings.service}</span>\r
        </div>\r
        \r
        <div className="star-rating-interactive__category">\r
          <label>Delivery Speed:</label>\r
          <StarRating value={ratings.delivery} allowHalf onChange={value => handleRatingChange('delivery', value)} tooltips={['Poor', 'Below Average', 'Average', 'Good', 'Excellent']} />\r
          <span className="star-rating-interactive__value">{ratings.delivery}</span>\r
        </div>\r
        \r
        <div className="star-rating-interactive__category">\r
          <label>Overall Experience:</label>\r
          <StarRating value={ratings.overall} allowHalf onChange={value => handleRatingChange('overall', value)} tooltips={['Poor', 'Below Average', 'Average', 'Good', 'Excellent']} />\r
          <span className="star-rating-interactive__value">{ratings.overall}</span>\r
        </div>\r
        \r
        <div className="star-rating-interactive__summary">\r
          <strong>Average Rating: {averageRating.toFixed(1)} / 5.0</strong>\r
          <div className="star-rating-interactive__average">\r
            <StarRating value={averageRating} allowHalf readOnly />\r
          </div>\r
        </div>\r
      </div>;
  },
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Interactive rating form with multiple categories and automatic average calculation.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="star-rating-demo">\r
      <div className="star-rating-demo__section">\r
        <h4>Product Reviews</h4>\r
        <div className="star-rating-reviews">\r
          <div className="star-rating-reviews__item">\r
            <StarRating value={4.5} allowHalf readOnly size="small" />\r
            <span>(4.5/5) - 142 reviews</span>\r
          </div>\r
          <div className="star-rating-reviews__item">\r
            <StarRating value={3} readOnly size="small" />\r
            <span>(3.0/5) - 28 reviews</span>\r
          </div>\r
          <div className="star-rating-reviews__item">\r
            <StarRating value={5} readOnly size="small" />\r
            <span>(5.0/5) - 89 reviews</span>\r
          </div>\r
          <div className="star-rating-reviews__item">\r
            <StarRating value={2.5} allowHalf readOnly size="small" />\r
            <span>(2.5/5) - 15 reviews</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Read-only star ratings for displaying existing ratings and reviews.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};const U=["Default","Sizes","HalfStars","CustomStarCount","WithTooltips","CustomCharacter","States","NoClear","Controlled","Interactive","ReadOnlyDisplay"];export{R as Controlled,y as CustomCharacter,j as CustomStarCount,f as Default,x as HalfStars,b as Interactive,w as NoClear,C as ReadOnlyDisplay,_ as Sizes,N as States,S as WithTooltips,U as __namedExportsOrder,Q as default};
