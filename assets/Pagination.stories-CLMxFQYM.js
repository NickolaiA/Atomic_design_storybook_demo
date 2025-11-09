import{R as U,j as e,r as $}from"./iframe-CdBaqdCg.js";import"./preload-helper-PPVm8Dsz.js";const s=({currentPage:a,totalPages:n,onPageChange:l,size:p="md",variant:m="default",siblingCount:g=1,showFirstLast:v=!0,showPrevNext:f=!0,disabled:d=!1,className:H,labels:K={}})=>{const{previous:b="Previous",next:C="Next",first:G="First",last:A="Last",page:J="Page"}=K,B=["pagination",`pagination--${p}`,`pagination--${m}`,d&&"pagination--disabled",H].filter(Boolean).join(" "),x=U.useMemo(()=>{const i=g*2+3+2;if(n<=i)return Array.from({length:n},(c,N)=>N+1);const o=Math.max(a-g,1),j=Math.min(a+g,n),h=o>2,P=j<n-2;if(!h&&P){const c=3+2*g;return[...Array.from({length:c},(M,W)=>W+1),"...",n]}if(h&&!P){const c=3+2*g;return[1,"...",...Array.from({length:c},(M,W)=>n-c+W+1)]}return h&&P?[1,"...",...Array.from({length:j-o+1},(N,M)=>o+M),"...",n]:[]},[a,n,g]),u=t=>{d||t===a||t<1||t>n||l(t)},Q=(t,i)=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),u(i))},R=(t,i,o=!1,j,h=!1)=>{const P=["pagination__button",o&&"pagination__button--active",h&&"pagination__button--disabled"].filter(Boolean).join(" ");return e.jsx("button",{type:"button",className:P,onClick:()=>u(i),onKeyDown:c=>Q(c,i),disabled:d||h,"aria-label":j||`${J} ${i}`,"aria-current":o?"page":void 0,children:t},typeof t=="string"?t:i)},V=t=>e.jsx("span",{className:"pagination__ellipsis","aria-hidden":"true",children:"..."},t);return n<=1?null:m==="simple"?e.jsx("nav",{className:B,"aria-label":"Pagination navigation",children:e.jsxs("div",{className:"pagination__simple",children:[f&&e.jsxs("button",{type:"button",className:"pagination__button pagination__button--prev",onClick:()=>u(a-1),disabled:d||a<=1,"aria-label":b,children:["← ",b]}),e.jsxs("span",{className:"pagination__info",children:[a," of ",n]}),f&&e.jsxs("button",{type:"button",className:"pagination__button pagination__button--next",onClick:()=>u(a+1),disabled:d||a>=n,"aria-label":C,children:[C," →"]})]})}):e.jsx("nav",{className:B,"aria-label":"Pagination navigation",children:e.jsxs("div",{className:"pagination__list",children:[v&&a>1&&e.jsxs(e.Fragment,{children:[R(G,1,!1,`Go to ${G} page`),x[0]!==1&&V("first-ellipsis")]}),f&&e.jsx("button",{type:"button",className:"pagination__button pagination__button--prev",onClick:()=>u(a-1),disabled:d||a<=1,"aria-label":b,children:m==="minimal"?"‹":`← ${b}`}),x.map((t,i)=>{if(t==="...")return V(`ellipsis-${i}`);const o=t;return R(o,o,o===a,`Go to page ${o}`)}),f&&e.jsx("button",{type:"button",className:"pagination__button pagination__button--next",onClick:()=>u(a+1),disabled:d||a>=n,"aria-label":C,children:m==="minimal"?"›":`${C} →`}),v&&a<n&&e.jsxs(e.Fragment,{children:[x[x.length-1]!==n&&V("last-ellipsis"),R(A,n,!1,`Go to ${A} page`)]})]})})};s.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:"Current page number (1-based)"},totalPages:{required:!0,tsType:{name:"number"},description:"Total number of pages"},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Callback when page changes"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'minimal' | 'simple'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'minimal'"},{name:"literal",value:"'simple'"}]},description:"Visual variant",defaultValue:{value:"'default'",computed:!1}},siblingCount:{required:!1,tsType:{name:"number"},description:"Number of page buttons to show around current page",defaultValue:{value:"1",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"Whether to show first/last page buttons",defaultValue:{value:"true",computed:!1}},showPrevNext:{required:!1,tsType:{name:"boolean"},description:"Whether to show previous/next buttons",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the pagination is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},labels:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  previous?: string;\r
  next?: string;\r
  first?: string;\r
  last?: string;\r
  page?: string;\r
}`,signature:{properties:[{key:"previous",value:{name:"string",required:!1}},{key:"next",value:{name:"string",required:!1}},{key:"first",value:{name:"string",required:!1}},{key:"last",value:{name:"string",required:!1}},{key:"page",value:{name:"string",required:!1}}]}},description:"Custom labels for buttons",defaultValue:{value:"{}",computed:!1}}}};const r=()=>{},ee={title:"Atoms/Pagination",component:s,parameters:{layout:"centered",docs:{description:{component:"A pagination component for navigating through multiple pages of content."}}},tags:["autodocs"],argTypes:{currentPage:{control:"number",description:"Current page number (1-based)"},totalPages:{control:"number",description:"Total number of pages"},onPageChange:{action:"page-changed",description:"Callback when page changes"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},variant:{control:"select",options:["default","minimal","simple"],description:"Visual variant"},siblingCount:{control:"number",description:"Number of page buttons to show around current page"},showFirstLast:{control:"boolean",description:"Whether to show first/last page buttons"},showPrevNext:{control:"boolean",description:"Whether to show previous/next buttons"},disabled:{control:"boolean",description:"Whether the pagination is disabled"}}},y={args:{currentPage:5,totalPages:20,size:"md",variant:"default",onPageChange:r}},S={args:{currentPage:1,totalPages:20,onPageChange:r}},w={args:{currentPage:20,totalPages:20,onPageChange:r}},_={args:{currentPage:2,totalPages:5,onPageChange:r}},k={render:()=>e.jsxs("div",{className:"pagination-demo-sizes",children:[e.jsxs("div",{className:"pagination-demo-section",children:[e.jsx("h3",{children:"Small"}),e.jsx(s,{currentPage:3,totalPages:10,size:"sm",onPageChange:()=>{}})]}),e.jsxs("div",{className:"pagination-demo-section",children:[e.jsx("h3",{children:"Medium (Default)"}),e.jsx(s,{currentPage:3,totalPages:10,size:"md",onPageChange:()=>{}})]}),e.jsxs("div",{className:"pagination-demo-section",children:[e.jsx("h3",{children:"Large"}),e.jsx(s,{currentPage:3,totalPages:10,size:"lg",onPageChange:()=>{}})]})]}),args:{currentPage:3,totalPages:10,onPageChange:r},parameters:{docs:{description:{story:"Different size variants for pagination."}}}},T={render:()=>e.jsxs("div",{className:"pagination-demo-variants",children:[e.jsxs("div",{className:"pagination-demo-section",children:[e.jsx("h3",{children:"Default"}),e.jsx(s,{currentPage:5,totalPages:15,variant:"default",onPageChange:()=>{}})]}),e.jsxs("div",{className:"pagination-demo-section",children:[e.jsx("h3",{children:"Minimal"}),e.jsx(s,{currentPage:5,totalPages:15,variant:"minimal",onPageChange:()=>{}})]}),e.jsxs("div",{className:"pagination-demo-section",children:[e.jsx("h3",{children:"Simple"}),e.jsx(s,{currentPage:5,totalPages:15,variant:"simple",onPageChange:()=>{}})]})]}),args:{currentPage:5,totalPages:15,onPageChange:r},parameters:{docs:{description:{story:"Different visual variants for pagination."}}}},z={render:()=>e.jsxs("div",{className:"pagination-demo-siblings",children:[e.jsxs("div",{className:"pagination-demo-section",children:[e.jsx("h3",{children:"Sibling Count: 1 (Default)"}),e.jsx(s,{currentPage:10,totalPages:20,siblingCount:1,onPageChange:()=>{}})]}),e.jsxs("div",{className:"pagination-demo-section",children:[e.jsx("h3",{children:"Sibling Count: 2"}),e.jsx(s,{currentPage:10,totalPages:20,siblingCount:2,onPageChange:()=>{}})]}),e.jsxs("div",{className:"pagination-demo-section",children:[e.jsx("h3",{children:"Sibling Count: 3"}),e.jsx(s,{currentPage:10,totalPages:20,siblingCount:3,onPageChange:()=>{}})]})]}),args:{currentPage:10,totalPages:20,onPageChange:r},parameters:{docs:{description:{story:"Control how many page numbers appear around the current page."}}}},q={args:{currentPage:5,totalPages:20,showFirstLast:!1,onPageChange:r}},D={args:{currentPage:5,totalPages:20,showPrevNext:!1,onPageChange:r}},L={args:{currentPage:5,totalPages:20,disabled:!0,onPageChange:r}},O={args:{currentPage:5,totalPages:20,labels:{previous:"Prev",next:"Next",first:"Start",last:"End",page:"Go to page"},onPageChange:r}},X=()=>{const[a,n]=$.useState(1),[l]=$.useState(25),[p]=$.useState(10),m=(a-1)*p+1,g=Math.min(a*p,l*p),v=l*p;return e.jsxs("div",{className:"pagination-demo-interactive",children:[e.jsxs("div",{className:"pagination-demo-info",children:[e.jsxs("p",{children:["Showing ",m,"-",g," of ",v," items"]}),e.jsxs("p",{children:["Current page: ",e.jsx("strong",{children:a})," of ",e.jsx("strong",{children:l})]})]}),e.jsx(s,{currentPage:a,totalPages:l,onPageChange:n,size:"md",variant:"default"}),e.jsxs("div",{className:"pagination-demo-controls",children:[e.jsx("button",{className:"pagination-demo-button",onClick:()=>n(1),children:"Reset to First"}),e.jsx("button",{className:"pagination-demo-button",onClick:()=>n(Math.ceil(l/2)),children:"Go to Middle"}),e.jsx("button",{className:"pagination-demo-button",onClick:()=>n(l),children:"Go to Last"})]})]})},I={render:X,args:{currentPage:1,totalPages:25,onPageChange:r},parameters:{docs:{description:{story:"Interactive pagination with state management and additional controls."}}}},E={args:{currentPage:50,totalPages:100,siblingCount:2,onPageChange:r},parameters:{docs:{description:{story:"Pagination with many pages showing ellipsis and collapsing behavior."}}}},F={render:()=>e.jsxs("div",{className:"pagination-demo-edges",children:[e.jsxs("div",{className:"pagination-demo-section",children:[e.jsx("h3",{children:"Single Page (Hidden)"}),e.jsxs("div",{className:"pagination-demo-empty",children:[e.jsx(s,{currentPage:1,totalPages:1,onPageChange:()=>{}}),e.jsx("p",{className:"pagination-demo-note",children:"Pagination is hidden when there's only one page"})]})]}),e.jsxs("div",{className:"pagination-demo-section",children:[e.jsx("h3",{children:"Two Pages"}),e.jsx(s,{currentPage:1,totalPages:2,onPageChange:()=>{}})]}),e.jsxs("div",{className:"pagination-demo-section",children:[e.jsx("h3",{children:"Three Pages"}),e.jsx(s,{currentPage:2,totalPages:3,onPageChange:()=>{}})]})]}),args:{currentPage:1,totalPages:1,onPageChange:r},parameters:{docs:{description:{story:"Edge cases with very few pages."}}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 20,
    size: 'md',
    variant: 'default',
    onPageChange: noOpCallback
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 20,
    onPageChange: noOpCallback
  }
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 20,
    totalPages: 20,
    onPageChange: noOpCallback
  }
}`,...w.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalPages: 5,
    onPageChange: noOpCallback
  }
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pagination-demo-sizes">\r
      <div className="pagination-demo-section">\r
        <h3>Small</h3>\r
        <Pagination currentPage={3} totalPages={10} size="sm" onPageChange={() => {}} />\r
      </div>\r
      \r
      <div className="pagination-demo-section">\r
        <h3>Medium (Default)</h3>\r
        <Pagination currentPage={3} totalPages={10} size="md" onPageChange={() => {}} />\r
      </div>\r
      \r
      <div className="pagination-demo-section">\r
        <h3>Large</h3>\r
        <Pagination currentPage={3} totalPages={10} size="lg" onPageChange={() => {}} />\r
      </div>\r
    </div>,
  args: {
    currentPage: 3,
    totalPages: 10,
    onPageChange: noOpCallback
  },
  parameters: {
    docs: {
      description: {
        story: 'Different size variants for pagination.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pagination-demo-variants">\r
      <div className="pagination-demo-section">\r
        <h3>Default</h3>\r
        <Pagination currentPage={5} totalPages={15} variant="default" onPageChange={() => {}} />\r
      </div>\r
      \r
      <div className="pagination-demo-section">\r
        <h3>Minimal</h3>\r
        <Pagination currentPage={5} totalPages={15} variant="minimal" onPageChange={() => {}} />\r
      </div>\r
      \r
      <div className="pagination-demo-section">\r
        <h3>Simple</h3>\r
        <Pagination currentPage={5} totalPages={15} variant="simple" onPageChange={() => {}} />\r
      </div>\r
    </div>,
  args: {
    currentPage: 5,
    totalPages: 15,
    onPageChange: noOpCallback
  },
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants for pagination.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pagination-demo-siblings">\r
      <div className="pagination-demo-section">\r
        <h3>Sibling Count: 1 (Default)</h3>\r
        <Pagination currentPage={10} totalPages={20} siblingCount={1} onPageChange={() => {}} />\r
      </div>\r
      \r
      <div className="pagination-demo-section">\r
        <h3>Sibling Count: 2</h3>\r
        <Pagination currentPage={10} totalPages={20} siblingCount={2} onPageChange={() => {}} />\r
      </div>\r
      \r
      <div className="pagination-demo-section">\r
        <h3>Sibling Count: 3</h3>\r
        <Pagination currentPage={10} totalPages={20} siblingCount={3} onPageChange={() => {}} />\r
      </div>\r
    </div>,
  args: {
    currentPage: 10,
    totalPages: 20,
    onPageChange: noOpCallback
  },
  parameters: {
    docs: {
      description: {
        story: 'Control how many page numbers appear around the current page.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 20,
    showFirstLast: false,
    onPageChange: noOpCallback
  }
}`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 20,
    showPrevNext: false,
    onPageChange: noOpCallback
  }
}`,...D.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 20,
    disabled: true,
    onPageChange: noOpCallback
  }
}`,...L.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 20,
    labels: {
      previous: 'Prev',
      next: 'Next',
      first: 'Start',
      last: 'End',
      page: 'Go to page'
    },
    onPageChange: noOpCallback
  }
}`,...O.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: InteractivePaginationTemplate,
  args: {
    currentPage: 1,
    totalPages: 25,
    onPageChange: noOpCallback
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive pagination with state management and additional controls.'
      }
    }
  }
}`,...I.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 50,
    totalPages: 100,
    siblingCount: 2,
    onPageChange: noOpCallback
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with many pages showing ellipsis and collapsing behavior.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pagination-demo-edges">\r
      <div className="pagination-demo-section">\r
        <h3>Single Page (Hidden)</h3>\r
        <div className="pagination-demo-empty">\r
          <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />\r
          <p className="pagination-demo-note">Pagination is hidden when there's only one page</p>\r
        </div>\r
      </div>\r
      \r
      <div className="pagination-demo-section">\r
        <h3>Two Pages</h3>\r
        <Pagination currentPage={1} totalPages={2} onPageChange={() => {}} />\r
      </div>\r
      \r
      <div className="pagination-demo-section">\r
        <h3>Three Pages</h3>\r
        <Pagination currentPage={2} totalPages={3} onPageChange={() => {}} />\r
      </div>\r
    </div>,
  args: {
    currentPage: 1,
    totalPages: 1,
    onPageChange: noOpCallback
  },
  parameters: {
    docs: {
      description: {
        story: 'Edge cases with very few pages.'
      }
    }
  }
}`,...F.parameters?.docs?.source}}};const ae=["Default","FirstPage","LastPage","FewPages","Sizes","Variants","CustomSiblingCount","WithoutFirstLast","WithoutPrevNext","Disabled","CustomLabels","Interactive","LongPagination","EdgeCases"];export{O as CustomLabels,z as CustomSiblingCount,y as Default,L as Disabled,F as EdgeCases,_ as FewPages,S as FirstPage,I as Interactive,w as LastPage,E as LongPagination,k as Sizes,T as Variants,q as WithoutFirstLast,D as WithoutPrevNext,ae as __namedExportsOrder,ee as default};
