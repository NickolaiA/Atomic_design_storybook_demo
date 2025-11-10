import{R as H,j as e}from"./iframe-NKDFF6YA.js";import"./preload-helper-PPVm8Dsz.js";const o=({items:c,size:z="md",separator:I="/",maxItems:l,className:N,showHomeIcon:w=!1})=>{const D=["breadcrumb",`breadcrumb--${z}`,N].filter(Boolean).join(" "),k=H.useMemo(()=>{if(!l||c.length<=l)return c;const r=Math.max(1,l-2),a={label:"...",disabled:!0};return[c[0],a,...c.slice(-r)]},[c,l]),x=(r,a)=>{if(r.disabled){a.preventDefault();return}r.onClick&&(a.preventDefault(),r.onClick())},j=(r,a)=>{r.disabled||(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),r.onClick?r.onClick():r.href&&(window.location.href=r.href))},B=(r,a,t)=>{const _=["breadcrumb__item",r.disabled&&"breadcrumb__item--disabled",t&&"breadcrumb__item--current"].filter(Boolean).join(" "),v=["breadcrumb__link",r.disabled&&"breadcrumb__link--disabled",t&&"breadcrumb__link--current"].filter(Boolean).join(" "),S=e.jsxs(e.Fragment,{children:[a===0&&w&&e.jsx("span",{className:"breadcrumb__home-icon","aria-hidden":"true",children:"🏠"}),e.jsx("span",{className:"breadcrumb__label",children:r.label})]});return e.jsxs("li",{className:_,children:[r.href&&!r.disabled&&!t?e.jsx("a",{href:r.href,className:v,onClick:n=>x(r,n),onKeyDown:n=>j(r,n),"aria-current":t?"page":void 0,children:S}):r.onClick&&!r.disabled?e.jsx("span",{className:v,onClick:n=>x(r,n),onKeyDown:n=>j(r,n),role:"button",tabIndex:0,"aria-current":t?"page":void 0,children:S}):e.jsx("span",{className:v,"aria-current":t?"page":void 0,children:S}),!t&&e.jsx("span",{className:"breadcrumb__separator","aria-hidden":"true",children:I})]},a)};return c.length?e.jsx("nav",{className:D,"aria-label":"Breadcrumb navigation",children:e.jsx("ol",{className:"breadcrumb__list",children:k.map((r,a)=>B(r,a,a===k.length-1))})}):null};o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Array of breadcrumb items"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom separator between items",defaultValue:{value:"'/'",computed:!1}},maxItems:{required:!1,tsType:{name:"number"},description:"Maximum number of items to show before collapsing"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},showHomeIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show home icon for first item",defaultValue:{value:"false",computed:!1}}}};const E={title:"Atoms/Breadcrumb",component:o,parameters:{layout:"centered",docs:{description:{component:"A navigation component that displays the user's location within a website hierarchy."}}},tags:["autodocs"],argTypes:{items:{control:"object",description:"Array of breadcrumb items"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},separator:{control:"text",description:"Custom separator between items"},maxItems:{control:"number",description:"Maximum number of items to show before collapsing"},showHomeIcon:{control:"boolean",description:"Whether to show home icon for first item"}}},s=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/products/electronics"},{label:"Laptops",href:"/products/electronics/laptops"},{label:"MacBook Pro"}],i={args:{items:s,size:"md"}},m={args:{items:s,size:"md",showHomeIcon:!0}},d={args:{items:s,size:"md",separator:"→"}},p={render:()=>e.jsxs("div",{className:"breadcrumb-demo-sizes",children:[e.jsxs("div",{className:"breadcrumb-demo-section",children:[e.jsx("h3",{children:"Small"}),e.jsx(o,{items:s,size:"sm"})]}),e.jsxs("div",{className:"breadcrumb-demo-section",children:[e.jsx("h3",{children:"Medium (Default)"}),e.jsx(o,{items:s,size:"md"})]}),e.jsxs("div",{className:"breadcrumb-demo-section",children:[e.jsx("h3",{children:"Large"}),e.jsx(o,{items:s,size:"lg"})]})]}),args:{items:s},parameters:{docs:{description:{story:"Different size variants for breadcrumbs."}}}},b={args:{items:[{label:"Dashboard",onClick:()=>alert("Navigated to Dashboard")},{label:"Settings",onClick:()=>alert("Navigated to Settings")},{label:"Profile",onClick:()=>alert("Navigated to Profile")},{label:"Edit Profile"}],size:"md"},parameters:{docs:{description:{story:"Breadcrumbs can use onClick handlers instead of href links."}}}},u={args:{items:[{label:"Home",href:"/"},{label:"Restricted Area",disabled:!0},{label:"Accessible Page",href:"/accessible"},{label:"Current Page"}],size:"md"},parameters:{docs:{description:{story:"Some breadcrumb items can be disabled to prevent navigation."}}}},h={args:{items:[{label:"Home",href:"/"},{label:"Category 1",href:"/category1"},{label:"Category 2",href:"/category1/category2"},{label:"Category 3",href:"/category1/category2/category3"},{label:"Category 4",href:"/category1/category2/category3/category4"},{label:"Category 5",href:"/category1/category2/category3/category4/category5"},{label:"Current Page"}],size:"md",maxItems:4},parameters:{docs:{description:{story:"Long breadcrumb trails can be collapsed to save space by setting maxItems."}}}},g={args:{items:[{label:"Home",href:"/"},{label:"Current Page"}],size:"md",showHomeIcon:!0},parameters:{docs:{description:{story:"Simple two-level breadcrumb navigation."}}}},f={args:{items:[{label:"Store",href:"/",onClick:()=>alert("Home")},{label:"Electronics",href:"/electronics",onClick:()=>alert("Electronics")},{label:"Computers",href:"/electronics/computers",onClick:()=>alert("Computers")},{label:"Laptops",href:"/electronics/computers/laptops",onClick:()=>alert("Laptops")},{label:"Gaming Laptops",href:"/electronics/computers/laptops/gaming",onClick:()=>alert("Gaming")},{label:"ASUS ROG Strix G15"}],size:"md",showHomeIcon:!0,separator:"/"},parameters:{docs:{description:{story:"E-commerce style breadcrumb showing product category hierarchy."}}}},y={args:{items:[{label:"Root",onClick:()=>alert("Root directory")},{label:"Users",onClick:()=>alert("Users directory")},{label:"john",onClick:()=>alert("User directory")},{label:"Documents",onClick:()=>alert("Documents directory")},{label:"Projects",onClick:()=>alert("Projects directory")},{label:"my-app"}],size:"md",separator:"/",maxItems:5},parameters:{docs:{description:{story:"File system style breadcrumb navigation with forward slash separators."}}}},C={render:()=>e.jsxs("div",{className:"breadcrumb-demo-separators",children:[e.jsxs("div",{className:"breadcrumb-demo-section",children:[e.jsx("h4",{children:"Arrow Separator"}),e.jsx(o,{items:s.slice(0,4),separator:"→",size:"md"})]}),e.jsxs("div",{className:"breadcrumb-demo-section",children:[e.jsx("h4",{children:"Chevron Separator"}),e.jsx(o,{items:s.slice(0,4),separator:"›",size:"md"})]}),e.jsxs("div",{className:"breadcrumb-demo-section",children:[e.jsx("h4",{children:"Dot Separator"}),e.jsx(o,{items:s.slice(0,4),separator:"•",size:"md"})]}),e.jsxs("div",{className:"breadcrumb-demo-section",children:[e.jsx("h4",{children:"Custom Icon"}),e.jsx(o,{items:s.slice(0,4),separator:e.jsx("span",{className:"breadcrumb-custom-icon",children:"▶"}),size:"md"})]})]}),args:{items:s},parameters:{docs:{description:{story:"Different separator styles for breadcrumb navigation."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    size: 'md'
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    size: 'md',
    showHomeIcon: true
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    size: 'md',
    separator: '→'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="breadcrumb-demo-sizes">\r
      <div className="breadcrumb-demo-section">\r
        <h3>Small</h3>\r
        <Breadcrumb items={sampleItems} size="sm" />\r
      </div>\r
      \r
      <div className="breadcrumb-demo-section">\r
        <h3>Medium (Default)</h3>\r
        <Breadcrumb items={sampleItems} size="md" />\r
      </div>\r
      \r
      <div className="breadcrumb-demo-section">\r
        <h3>Large</h3>\r
        <Breadcrumb items={sampleItems} size="lg" />\r
      </div>\r
    </div>,
  args: {
    items: sampleItems
  },
  parameters: {
    docs: {
      description: {
        story: 'Different size variants for breadcrumbs.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      onClick: () => alert('Navigated to Dashboard')
    }, {
      label: 'Settings',
      onClick: () => alert('Navigated to Settings')
    }, {
      label: 'Profile',
      onClick: () => alert('Navigated to Profile')
    }, {
      label: 'Edit Profile'
    }],
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs can use onClick handlers instead of href links.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Restricted Area',
      disabled: true
    }, {
      label: 'Accessible Page',
      href: '/accessible'
    }, {
      label: 'Current Page'
    }],
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Some breadcrumb items can be disabled to prevent navigation.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Category 1',
      href: '/category1'
    }, {
      label: 'Category 2',
      href: '/category1/category2'
    }, {
      label: 'Category 3',
      href: '/category1/category2/category3'
    }, {
      label: 'Category 4',
      href: '/category1/category2/category3/category4'
    }, {
      label: 'Category 5',
      href: '/category1/category2/category3/category4/category5'
    }, {
      label: 'Current Page'
    }],
    size: 'md',
    maxItems: 4
  },
  parameters: {
    docs: {
      description: {
        story: 'Long breadcrumb trails can be collapsed to save space by setting maxItems.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Current Page'
    }],
    size: 'md',
    showHomeIcon: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple two-level breadcrumb navigation.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Store',
      href: '/',
      onClick: () => alert('Home')
    }, {
      label: 'Electronics',
      href: '/electronics',
      onClick: () => alert('Electronics')
    }, {
      label: 'Computers',
      href: '/electronics/computers',
      onClick: () => alert('Computers')
    }, {
      label: 'Laptops',
      href: '/electronics/computers/laptops',
      onClick: () => alert('Laptops')
    }, {
      label: 'Gaming Laptops',
      href: '/electronics/computers/laptops/gaming',
      onClick: () => alert('Gaming')
    }, {
      label: 'ASUS ROG Strix G15'
    }],
    size: 'md',
    showHomeIcon: true,
    separator: '/'
  },
  parameters: {
    docs: {
      description: {
        story: 'E-commerce style breadcrumb showing product category hierarchy.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Root',
      onClick: () => alert('Root directory')
    }, {
      label: 'Users',
      onClick: () => alert('Users directory')
    }, {
      label: 'john',
      onClick: () => alert('User directory')
    }, {
      label: 'Documents',
      onClick: () => alert('Documents directory')
    }, {
      label: 'Projects',
      onClick: () => alert('Projects directory')
    }, {
      label: 'my-app'
    }],
    size: 'md',
    separator: '/',
    maxItems: 5
  },
  parameters: {
    docs: {
      description: {
        story: 'File system style breadcrumb navigation with forward slash separators.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="breadcrumb-demo-separators">\r
      <div className="breadcrumb-demo-section">\r
        <h4>Arrow Separator</h4>\r
        <Breadcrumb items={sampleItems.slice(0, 4)} separator="→" size="md" />\r
      </div>\r
      \r
      <div className="breadcrumb-demo-section">\r
        <h4>Chevron Separator</h4>\r
        <Breadcrumb items={sampleItems.slice(0, 4)} separator="›" size="md" />\r
      </div>\r
      \r
      <div className="breadcrumb-demo-section">\r
        <h4>Dot Separator</h4>\r
        <Breadcrumb items={sampleItems.slice(0, 4)} separator="•" size="md" />\r
      </div>\r
      \r
      <div className="breadcrumb-demo-section">\r
        <h4>Custom Icon</h4>\r
        <Breadcrumb items={sampleItems.slice(0, 4)} separator={<span className="breadcrumb-custom-icon">▶</span>} size="md" />\r
      </div>\r
    </div>,
  args: {
    items: sampleItems
  },
  parameters: {
    docs: {
      description: {
        story: 'Different separator styles for breadcrumb navigation.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};const R=["Default","WithHomeIcon","CustomSeparator","Sizes","WithClickHandlers","WithDisabledItems","Collapsed","ShortBreadcrumb","EcommerceBreadcrumb","FileSystemBreadcrumb","CustomSeparators"];export{h as Collapsed,d as CustomSeparator,C as CustomSeparators,i as Default,f as EcommerceBreadcrumb,y as FileSystemBreadcrumb,g as ShortBreadcrumb,p as Sizes,b as WithClickHandlers,u as WithDisabledItems,m as WithHomeIcon,R as __namedExportsOrder,E as default};
