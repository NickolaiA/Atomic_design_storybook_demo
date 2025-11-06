import{j as e}from"./react-1-DYTeAnAh.js";import{H as i,I as Ae,L as s,T as n,a,b as $e,c as t}from"./atoms-components-B6eh4y83.js";import{fn as Me}from"./storybook-instrumenter-15-DkasNAnx.js";const We={title:"Atoms/Heading",component:i,parameters:{layout:"centered"},argTypes:{level:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"Semantic heading level for accessibility"},variant:{control:"select",options:["display","title","subtitle","default"],description:"Visual appearance independent of semantic level"},color:{control:"select",options:["primary","secondary","muted","accent"],description:"Color variant using theme tokens"},centered:{control:"boolean",description:"Center align the heading text"},truncate:{control:"boolean",description:"Truncate long text with ellipsis"},children:{control:"text",description:"Heading content"}},args:{children:"Sample Heading Text"}},m={parameters:{docs:{description:{story:"Default heading with h2 semantic level and default visual styling."}}}},h={render:()=>e.jsxs("div",{className:"heading-story-section",children:[e.jsx(i,{level:"h1",children:"H1 - Main Page Title"}),e.jsx(i,{level:"h2",children:"H2 - Section Heading"}),e.jsx(i,{level:"h3",children:"H3 - Subsection Heading"}),e.jsx(i,{level:"h4",children:"H4 - Sub-subsection Heading"}),e.jsx(i,{level:"h5",children:"H5 - Minor Heading"}),e.jsx(i,{level:"h6",children:"H6 - Smallest Heading"})]}),parameters:{docs:{description:{story:"All semantic heading levels (h1-h6) with default visual styling."}}}},p={render:()=>e.jsxs("div",{className:"heading-story-section",children:[e.jsx(i,{variant:"display",children:"Display - Largest visual style"}),e.jsx(i,{variant:"title",children:"Title - Large visual style"}),e.jsx(i,{variant:"subtitle",children:"Subtitle - Medium visual style"}),e.jsx(i,{variant:"default",children:"Default - Standard visual style"})]}),parameters:{docs:{description:{story:"Visual variants that can be used independently of semantic level."}}}},u={render:()=>e.jsxs("div",{className:"heading-story-section",children:[e.jsx(i,{color:"primary",children:"Primary Color (Default)"}),e.jsx(i,{color:"secondary",children:"Secondary Color"}),e.jsx(i,{color:"muted",children:"Muted Color"}),e.jsx(i,{color:"accent",children:"Accent Color"})]}),parameters:{docs:{description:{story:"Different color variants using theme color tokens."}}}},g={render:()=>e.jsxs("div",{className:"heading-story-section",children:[e.jsx(i,{centered:!0,children:"Centered Heading"}),e.jsx("div",{className:"heading-story-truncate-demo",children:e.jsx(i,{truncate:!0,children:"This is a very long heading that will be truncated"})}),e.jsx(i,{centered:!0,color:"accent",variant:"title",children:"Centered Accent Title"})]}),parameters:{docs:{description:{story:"Examples of modifier props like centered and truncate."}}}},x={render:()=>e.jsxs("div",{className:"heading-story-section",children:[e.jsxs("div",{className:"heading-story-example",children:[e.jsx("h4",{children:"Semantic H1 with Display Variant:"}),e.jsx(i,{level:"h1",variant:"display",children:"Large Visual, H1 Semantic"})]}),e.jsxs("div",{className:"heading-story-example",children:[e.jsx("h4",{children:"Semantic H3 with Title Variant:"}),e.jsx(i,{level:"h3",variant:"title",children:"Medium Visual, H3 Semantic"})]}),e.jsxs("div",{className:"heading-story-example",children:[e.jsx("h4",{children:"Semantic H6 with Display Variant:"}),e.jsx(i,{level:"h6",variant:"display",children:"Large Visual, H6 Semantic"})]})]}),parameters:{docs:{description:{story:"Demonstrates how semantic level and visual appearance can be independent for better accessibility and design flexibility."}}}},b={args:{variant:"display",children:"Responsive Display Heading"},parameters:{viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop",styles:{width:"1200px",height:"800px"}}}},docs:{description:{story:"Display variant heading that scales responsively. Use viewport controls to see size changes."}}}},v={render:()=>e.jsxs("div",{className:"heading-story-theme-demo",children:[e.jsx(i,{variant:"display",color:"primary",children:"Theme Integration Demo"}),e.jsx(i,{variant:"title",color:"accent",children:"Accent Color Title"}),e.jsx(i,{variant:"subtitle",color:"secondary",children:"Secondary Color Subtitle"}),e.jsx(i,{color:"muted",children:"Muted Color Text"}),e.jsxs("div",{className:"heading-story-theme-info",children:[e.jsx("h4",{children:"Theme Variables Used:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"--color-text"}),": Primary text color"]}),e.jsxs("li",{children:[e.jsx("code",{children:"--color-text-secondary"}),": Secondary text color"]}),e.jsxs("li",{children:[e.jsx("code",{children:"--color-text-muted"}),": Muted text color"]}),e.jsxs("li",{children:[e.jsx("code",{children:"--color-accent"}),": Accent color"]}),e.jsxs("li",{children:[e.jsx("code",{children:"--font-sans"}),": Font family"]})]})]})]}),parameters:{docs:{description:{story:"Demonstrates how headings adapt to different themes. Switch themes in the toolbar to see color changes."}}}},y={render:()=>e.jsxs("div",{className:"heading-story-grid",children:[e.jsxs("div",{className:"heading-story-grid-section",children:[e.jsx("h4",{children:"Display Variant"}),e.jsx(i,{level:"h1",variant:"display",color:"primary",children:"H1 Display Primary"}),e.jsx(i,{level:"h2",variant:"display",color:"accent",children:"H2 Display Accent"})]}),e.jsxs("div",{className:"heading-story-grid-section",children:[e.jsx("h4",{children:"Title Variant"}),e.jsx(i,{level:"h2",variant:"title",color:"primary",children:"H2 Title Primary"}),e.jsx(i,{level:"h3",variant:"title",color:"secondary",children:"H3 Title Secondary"})]}),e.jsxs("div",{className:"heading-story-grid-section",children:[e.jsx("h4",{children:"Subtitle Variant"}),e.jsx(i,{level:"h3",variant:"subtitle",color:"primary",children:"H3 Subtitle Primary"}),e.jsx(i,{level:"h4",variant:"subtitle",color:"muted",children:"H4 Subtitle Muted"})]}),e.jsxs("div",{className:"heading-story-grid-section",children:[e.jsx("h4",{children:"Default Variant"}),e.jsx(i,{level:"h4",color:"primary",children:"H4 Default Primary"}),e.jsx(i,{level:"h5",color:"secondary",children:"H5 Default Secondary"})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of heading combinations across levels, variants, and colors."}}}},f={args:{level:"h2",variant:"title",color:"primary",children:"Interactive Heading",centered:!1,truncate:!1},parameters:{docs:{description:{story:"Interactive story where you can modify all heading properties using the controls panel."}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default heading with h2 semantic level and default visual styling.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="heading-story-section">\r
      <Heading level="h1">H1 - Main Page Title</Heading>\r
      <Heading level="h2">H2 - Section Heading</Heading>\r
      <Heading level="h3">H3 - Subsection Heading</Heading>\r
      <Heading level="h4">H4 - Sub-subsection Heading</Heading>\r
      <Heading level="h5">H5 - Minor Heading</Heading>\r
      <Heading level="h6">H6 - Smallest Heading</Heading>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All semantic heading levels (h1-h6) with default visual styling.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="heading-story-section">\r
      <Heading variant="display">Display - Largest visual style</Heading>\r
      <Heading variant="title">Title - Large visual style</Heading>\r
      <Heading variant="subtitle">Subtitle - Medium visual style</Heading>\r
      <Heading variant="default">Default - Standard visual style</Heading>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Visual variants that can be used independently of semantic level.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="heading-story-section">\r
      <Heading color="primary">Primary Color (Default)</Heading>\r
      <Heading color="secondary">Secondary Color</Heading>\r
      <Heading color="muted">Muted Color</Heading>\r
      <Heading color="accent">Accent Color</Heading>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different color variants using theme color tokens.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="heading-story-section">\r
      <Heading centered>Centered Heading</Heading>\r
      <div className="heading-story-truncate-demo">\r
        <Heading truncate>This is a very long heading that will be truncated</Heading>\r
      </div>\r
      <Heading centered color="accent" variant="title">\r
        Centered Accent Title\r
      </Heading>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of modifier props like centered and truncate.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="heading-story-section">\r
      <div className="heading-story-example">\r
        <h4>Semantic H1 with Display Variant:</h4>\r
        <Heading level="h1" variant="display">Large Visual, H1 Semantic</Heading>\r
      </div>\r
      \r
      <div className="heading-story-example">\r
        <h4>Semantic H3 with Title Variant:</h4>\r
        <Heading level="h3" variant="title">Medium Visual, H3 Semantic</Heading>\r
      </div>\r
      \r
      <div className="heading-story-example">\r
        <h4>Semantic H6 with Display Variant:</h4>\r
        <Heading level="h6" variant="display">Large Visual, H6 Semantic</Heading>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how semantic level and visual appearance can be independent for better accessibility and design flexibility.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'display',
    children: 'Responsive Display Heading'
  },
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
        story: 'Display variant heading that scales responsively. Use viewport controls to see size changes.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="heading-story-theme-demo">\r
      <Heading variant="display" color="primary">\r
        Theme Integration Demo\r
      </Heading>\r
      <Heading variant="title" color="accent">\r
        Accent Color Title\r
      </Heading>\r
      <Heading variant="subtitle" color="secondary">\r
        Secondary Color Subtitle\r
      </Heading>\r
      <Heading color="muted">\r
        Muted Color Text\r
      </Heading>\r
      \r
      <div className="heading-story-theme-info">\r
        <h4>Theme Variables Used:</h4>\r
        <ul>\r
          <li><code>--color-text</code>: Primary text color</li>\r
          <li><code>--color-text-secondary</code>: Secondary text color</li>\r
          <li><code>--color-text-muted</code>: Muted text color</li>\r
          <li><code>--color-accent</code>: Accent color</li>\r
          <li><code>--font-sans</code>: Font family</li>\r
        </ul>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how headings adapt to different themes. Switch themes in the toolbar to see color changes.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="heading-story-grid">\r
      <div className="heading-story-grid-section">\r
        <h4>Display Variant</h4>\r
        <Heading level="h1" variant="display" color="primary">H1 Display Primary</Heading>\r
        <Heading level="h2" variant="display" color="accent">H2 Display Accent</Heading>\r
      </div>\r
      \r
      <div className="heading-story-grid-section">\r
        <h4>Title Variant</h4>\r
        <Heading level="h2" variant="title" color="primary">H2 Title Primary</Heading>\r
        <Heading level="h3" variant="title" color="secondary">H3 Title Secondary</Heading>\r
      </div>\r
      \r
      <div className="heading-story-grid-section">\r
        <h4>Subtitle Variant</h4>\r
        <Heading level="h3" variant="subtitle" color="primary">H3 Subtitle Primary</Heading>\r
        <Heading level="h4" variant="subtitle" color="muted">H4 Subtitle Muted</Heading>\r
      </div>\r
      \r
      <div className="heading-story-grid-section">\r
        <h4>Default Variant</h4>\r
        <Heading level="h4" color="primary">H4 Default Primary</Heading>\r
        <Heading level="h5" color="secondary">H5 Default Secondary</Heading>\r
      </div>\r
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of heading combinations across levels, variants, and colors.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    level: 'h2',
    variant: 'title',
    color: 'primary',
    children: 'Interactive Heading',
    centered: false,
    truncate: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive story where you can modify all heading properties using the controls panel.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};const Be=["Default","SemanticLevels","VisualVariants","ColorVariants","ModifierExamples","SemanticVsVisual","ResponsiveDemo","ThemeShowcase","AllCombinations","Interactive"],mr=Object.freeze(Object.defineProperty({__proto__:null,AllCombinations:y,ColorVariants:u,Default:m,Interactive:f,ModifierExamples:g,ResponsiveDemo:b,SemanticLevels:h,SemanticVsVisual:x,ThemeShowcase:v,VisualVariants:p,__namedExportsOrder:Be,default:We},Symbol.toStringTag,{value:"Module"})),Ge={title:"Atoms/Icon",component:Ae,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:{type:"select"},options:["search","home","user"],description:"The icon to display"},size:{control:{type:"range",min:12,max:64,step:2},description:"Size of the icon in pixels"}}},j={args:{name:"home",size:16}},w={args:{name:"search",size:24}},k={args:{name:"home",size:24}},L={args:{name:"user",size:24}},S={args:{name:"search",size:16}},T={args:{name:"search",size:24}},N={args:{name:"search",size:32}},D={args:{name:"search",size:48}},z={render:()=>e.jsxs("div",{className:"icon-showcase",children:[e.jsxs("div",{className:"icon-item",children:[e.jsx(Ae,{name:"search",size:24}),e.jsx("div",{className:"icon-label",children:"Search"})]}),e.jsxs("div",{className:"icon-item",children:[e.jsx(Ae,{name:"home",size:24}),e.jsx("div",{className:"icon-label",children:"Home"})]}),e.jsxs("div",{className:"icon-item",children:[e.jsx(Ae,{name:"user",size:24}),e.jsx("div",{className:"icon-label",children:"User"})]}),e.jsx("style",{children:`
        .icon-showcase {
          display: flex;
          gap: 16px;
          align-items: center;
        }
        .icon-item {
          text-align: center;
        }
        .icon-label {
          margin-top: 8px;
          font-size: 12px;
        }
      `})]})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'home',
    size: 16
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'search',
    size: 24
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'home',
    size: 24
  }
}`,...k.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'user',
    size: 24
  }
}`,...L.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'search',
    size: 16
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'search',
    size: 24
  }
}`,...T.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'search',
    size: 32
  }
}`,...N.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'search',
    size: 48
  }
}`,...D.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="icon-showcase">\r
      <div className="icon-item">\r
        <Icon name="search" size={24} />\r
        <div className="icon-label">Search</div>\r
      </div>\r
      <div className="icon-item">\r
        <Icon name="home" size={24} />\r
        <div className="icon-label">Home</div>\r
      </div>\r
      <div className="icon-item">\r
        <Icon name="user" size={24} />\r
        <div className="icon-label">User</div>\r
      </div>\r
      <style>{\`
        .icon-showcase {
          display: flex;
          gap: 16px;
          align-items: center;
        }
        .icon-item {
          text-align: center;
        }
        .icon-label {
          margin-top: 8px;
          font-size: 12px;
        }
      \`}</style>\r
    </div>
}`,...z.parameters?.docs?.source}}};const Je=["Default","Search","Home","User","Small","Medium","Large","ExtraLarge","AllIcons"],hr=Object.freeze(Object.defineProperty({__proto__:null,AllIcons:z,Default:j,ExtraLarge:D,Home:k,Large:N,Medium:T,Search:w,Small:S,User:L,__namedExportsOrder:Je,default:Ge},Symbol.toStringTag,{value:"Module"})),Ye={title:"Atoms/Label",component:s,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","base","lg"],description:"Size variant"},weight:{control:"select",options:["normal","medium","semibold"],description:"Font weight"},required:{control:"boolean",description:"Shows required indicator (*)"},disabled:{control:"boolean",description:"Disabled state styling"},showOptional:{control:"boolean",description:"Shows optional indicator when not required"},htmlFor:{control:"text",description:"Associates label with form control"},children:{control:"text",description:"Label content"},onClick:{action:"clicked"}},args:{children:"Form Label",onClick:Me()}},E={parameters:{docs:{description:{story:"Default label with medium weight and base size."}}}},H={render:()=>e.jsxs("div",{className:"label-story-section",children:[e.jsx(s,{size:"sm",children:"Small Label"}),e.jsx(s,{size:"base",children:"Base Label (Default)"}),e.jsx(s,{size:"lg",children:"Large Label"})]}),parameters:{docs:{description:{story:"Different size variants for various form contexts."}}}},C={render:()=>e.jsxs("div",{className:"label-story-section",children:[e.jsx(s,{weight:"normal",children:"Normal Weight"}),e.jsx(s,{weight:"medium",children:"Medium Weight (Default)"}),e.jsx(s,{weight:"semibold",children:"Semibold Weight"})]}),parameters:{docs:{description:{story:"Font weight options for different emphasis levels."}}}},_={render:()=>e.jsxs("div",{className:"label-story-section",children:[e.jsx(s,{children:"Optional Field"}),e.jsx(s,{required:!0,children:"Required Field"}),e.jsx(s,{showOptional:!0,children:"Optional Field (Explicit)"}),e.jsx(s,{required:!0,showOptional:!0,children:"Required Field (showOptional ignored)"})]}),parameters:{docs:{description:{story:"Required and optional indicators for form validation clarity."}}}},A={render:()=>e.jsxs("div",{className:"label-story-section",children:[e.jsx(s,{children:"Normal Label"}),e.jsx(s,{disabled:!0,children:"Disabled Label"}),e.jsx(s,{disabled:!0,required:!0,children:"Disabled Required Label"})]}),parameters:{docs:{description:{story:"Disabled state for labels associated with disabled form controls."}}}},I={render:()=>e.jsxs("div",{className:"label-story-form",children:[e.jsxs("div",{className:"label-story-field",children:[e.jsx(s,{htmlFor:"username",required:!0,children:"Username"}),e.jsx(n,{id:"username",placeholder:"Enter your username"})]}),e.jsxs("div",{className:"label-story-field",children:[e.jsx(s,{htmlFor:"email",required:!0,children:"Email Address"}),e.jsx(n,{id:"email",type:"email",placeholder:"your@email.com"})]}),e.jsxs("div",{className:"label-story-field",children:[e.jsx(s,{htmlFor:"phone",showOptional:!0,children:"Phone Number"}),e.jsx(n,{id:"phone",type:"tel",placeholder:"(555) 123-4567"})]}),e.jsxs("div",{className:"label-story-field",children:[e.jsx(s,{htmlFor:"bio",size:"sm",children:"Bio"}),e.jsx(n,{id:"bio",placeholder:"Tell us about yourself..."})]})]}),parameters:{docs:{description:{story:"Labels properly associated with form controls using htmlFor. Click labels to focus inputs."}}}},V={render:()=>e.jsxs("div",{className:"label-story-accessibility",children:[e.jsxs("div",{className:"label-story-field",children:[e.jsx(s,{htmlFor:"accessible-input",required:!0,children:"Accessible Form Field"}),e.jsx(n,{id:"accessible-input",placeholder:"Click the label above to focus this input","aria-describedby":"help-text"}),e.jsx("div",{id:"help-text",className:"label-story-help-text",children:"This demonstrates proper label-input association for screen readers."})]}),e.jsxs("div",{className:"label-story-field",children:[e.jsx(s,{htmlFor:"disabled-input",disabled:!0,required:!0,children:"Disabled Field"}),e.jsx(n,{id:"disabled-input",disabled:!0,placeholder:"This field is disabled"})]})]}),parameters:{docs:{description:{story:"Accessibility features including proper associations, screen reader support, and focus management."}}}},F={render:()=>e.jsxs("div",{className:"label-story-form",children:[e.jsxs("div",{className:"label-story-field",children:[e.jsx(s,{htmlFor:"interactive-1",required:!0,onClick:()=>console.log("Label clicked: Required field"),children:"Click to Focus (Required)"}),e.jsx(n,{id:"interactive-1",placeholder:"Focus me by clicking the label"})]}),e.jsxs("div",{className:"label-story-field",children:[e.jsx(s,{htmlFor:"interactive-2",showOptional:!0,onClick:()=>console.log("Label clicked: Optional field"),children:"Click to Focus (Optional)"}),e.jsx(n,{id:"interactive-2",placeholder:"I'm optional"})]})]}),parameters:{docs:{description:{story:"Interactive labels with click handlers. Check browser console for click events."}}}},M={render:()=>e.jsxs("div",{className:"label-story-theme-demo",children:[e.jsxs("div",{className:"label-story-theme-section",children:[e.jsx(s,{size:"lg",weight:"semibold",children:"Theme Adaptive Labels"}),e.jsx(s,{required:!0,children:"Required Field"}),e.jsx(s,{showOptional:!0,children:"Optional Field"}),e.jsx(s,{disabled:!0,children:"Disabled Field"})]}),e.jsxs("div",{className:"label-story-theme-info",children:[e.jsx(s,{size:"sm",weight:"semibold",children:"Theme Variables Used:"}),e.jsxs("div",{className:"label-story-theme-vars",children:[e.jsx("code",{children:"--color-text"}),": Normal text color",e.jsx("br",{}),e.jsx("code",{children:"--color-text-muted"}),": Disabled and optional text",e.jsx("br",{}),e.jsx("code",{children:"--color-error"}),": Required indicator color",e.jsx("br",{}),e.jsx("code",{children:"--color-accent"}),": Hover state color"]})]})]}),parameters:{docs:{description:{story:"Labels that adapt to different themes. Use the theme switcher in the toolbar to see color changes."}}}},U={render:()=>e.jsx("div",{className:"label-story-comprehensive",children:e.jsxs("div",{className:"label-story-grid",children:[e.jsxs("div",{className:"label-story-grid-section",children:[e.jsx("h4",{children:"Size + Weight Combinations"}),e.jsx(s,{size:"lg",weight:"semibold",required:!0,children:"Large Semibold Required"}),e.jsx(s,{size:"base",weight:"medium",showOptional:!0,children:"Base Medium Optional"}),e.jsx(s,{size:"sm",weight:"normal",children:"Small Normal"})]}),e.jsxs("div",{className:"label-story-grid-section",children:[e.jsx("h4",{children:"State Variations"}),e.jsx(s,{required:!0,children:"Required"}),e.jsx(s,{showOptional:!0,children:"Optional"}),e.jsx(s,{disabled:!0,children:"Disabled"}),e.jsx(s,{disabled:!0,required:!0,children:"Disabled Required"})]}),e.jsxs("div",{className:"label-story-grid-section",children:[e.jsx("h4",{children:"Form Context"}),e.jsxs("div",{className:"label-story-mini-form",children:[e.jsx(s,{htmlFor:"combo-1",size:"sm",required:!0,children:"Name"}),e.jsx(n,{id:"combo-1"}),e.jsx(s,{htmlFor:"combo-2",showOptional:!0,children:"Bio"}),e.jsx(n,{id:"combo-2"})]})]})]})}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of all label combinations and contexts."}}}},O={args:{size:"base",weight:"medium",required:!1,disabled:!1,showOptional:!1,children:"Interactive Label",htmlFor:"interactive-input"},render:r=>e.jsxs("div",{className:"label-story-field",children:[e.jsx(s,{...r}),e.jsx(n,{id:"interactive-input",placeholder:"Associated input field"})]}),parameters:{docs:{description:{story:"Interactive story where you can modify all label properties using the controls panel."}}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default label with medium weight and base size.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <div className="label-story-section">\r
      <Label size="sm">Small Label</Label>\r
      <Label size="base">Base Label (Default)</Label>\r
      <Label size="lg">Large Label</Label>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different size variants for various form contexts.'
      }
    }
  }
}`,...H.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="label-story-section">\r
      <Label weight="normal">Normal Weight</Label>\r
      <Label weight="medium">Medium Weight (Default)</Label>\r
      <Label weight="semibold">Semibold Weight</Label>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Font weight options for different emphasis levels.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="label-story-section">\r
      <Label>Optional Field</Label>\r
      <Label required>Required Field</Label>\r
      <Label showOptional>Optional Field (Explicit)</Label>\r
      <Label required showOptional>Required Field (showOptional ignored)</Label>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Required and optional indicators for form validation clarity.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="label-story-section">\r
      <Label>Normal Label</Label>\r
      <Label disabled>Disabled Label</Label>\r
      <Label disabled required>Disabled Required Label</Label>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Disabled state for labels associated with disabled form controls.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div className="label-story-form">\r
      <div className="label-story-field">\r
        <Label htmlFor="username" required>Username</Label>\r
        <TextInput id="username" placeholder="Enter your username" />\r
      </div>\r
      \r
      <div className="label-story-field">\r
        <Label htmlFor="email" required>Email Address</Label>\r
        <TextInput id="email" type="email" placeholder="your@email.com" />\r
      </div>\r
      \r
      <div className="label-story-field">\r
        <Label htmlFor="phone" showOptional>Phone Number</Label>\r
        <TextInput id="phone" type="tel" placeholder="(555) 123-4567" />\r
      </div>\r
      \r
      <div className="label-story-field">\r
        <Label htmlFor="bio" size="sm">Bio</Label>\r
        <TextInput id="bio" placeholder="Tell us about yourself..." />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Labels properly associated with form controls using htmlFor. Click labels to focus inputs.'
      }
    }
  }
}`,...I.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div className="label-story-accessibility">\r
      <div className="label-story-field">\r
        <Label htmlFor="accessible-input" required>\r
          Accessible Form Field\r
        </Label>\r
        <TextInput id="accessible-input" placeholder="Click the label above to focus this input" aria-describedby="help-text" />\r
        <div id="help-text" className="label-story-help-text">\r
          This demonstrates proper label-input association for screen readers.\r
        </div>\r
      </div>\r
      \r
      <div className="label-story-field">\r
        <Label htmlFor="disabled-input" disabled required>\r
          Disabled Field\r
        </Label>\r
        <TextInput id="disabled-input" disabled placeholder="This field is disabled" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including proper associations, screen reader support, and focus management.'
      }
    }
  }
}`,...V.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div className="label-story-form">\r
      <div className="label-story-field">\r
        <Label htmlFor="interactive-1" required onClick={() => console.log('Label clicked: Required field')}>\r
          Click to Focus (Required)\r
        </Label>\r
        <TextInput id="interactive-1" placeholder="Focus me by clicking the label" />\r
      </div>\r
      \r
      <div className="label-story-field">\r
        <Label htmlFor="interactive-2" showOptional onClick={() => console.log('Label clicked: Optional field')}>\r
          Click to Focus (Optional)\r
        </Label>\r
        <TextInput id="interactive-2" placeholder="I'm optional" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive labels with click handlers. Check browser console for click events.'
      }
    }
  }
}`,...F.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="label-story-theme-demo">\r
      <div className="label-story-theme-section">\r
        <Label size="lg" weight="semibold">Theme Adaptive Labels</Label>\r
        <Label required>Required Field</Label>\r
        <Label showOptional>Optional Field</Label>\r
        <Label disabled>Disabled Field</Label>\r
      </div>\r
      \r
      <div className="label-story-theme-info">\r
        <Label size="sm" weight="semibold">Theme Variables Used:</Label>\r
        <div className="label-story-theme-vars">\r
          <code>--color-text</code>: Normal text color<br />\r
          <code>--color-text-muted</code>: Disabled and optional text<br />\r
          <code>--color-error</code>: Required indicator color<br />\r
          <code>--color-accent</code>: Hover state color\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Labels that adapt to different themes. Use the theme switcher in the toolbar to see color changes.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div className="label-story-comprehensive">\r
      <div className="label-story-grid">\r
        <div className="label-story-grid-section">\r
          <h4>Size + Weight Combinations</h4>\r
          <Label size="lg" weight="semibold" required>Large Semibold Required</Label>\r
          <Label size="base" weight="medium" showOptional>Base Medium Optional</Label>\r
          <Label size="sm" weight="normal">Small Normal</Label>\r
        </div>\r
        \r
        <div className="label-story-grid-section">\r
          <h4>State Variations</h4>\r
          <Label required>Required</Label>\r
          <Label showOptional>Optional</Label>\r
          <Label disabled>Disabled</Label>\r
          <Label disabled required>Disabled Required</Label>\r
        </div>\r
        \r
        <div className="label-story-grid-section">\r
          <h4>Form Context</h4>\r
          <div className="label-story-mini-form">\r
            <Label htmlFor="combo-1" size="sm" required>Name</Label>\r
            <TextInput id="combo-1" />\r
            \r
            <Label htmlFor="combo-2" showOptional>Bio</Label>\r
            <TextInput id="combo-2" />\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of all label combinations and contexts.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
    weight: 'medium',
    required: false,
    disabled: false,
    showOptional: false,
    children: 'Interactive Label',
    htmlFor: 'interactive-input'
  },
  render: args => <div className="label-story-field">\r
      <Label {...args} />\r
      <TextInput id="interactive-input" placeholder="Associated input field" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive story where you can modify all label properties using the controls panel.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}};const Ke=["Default","SizeVariants","WeightVariants","RequiredStates","DisabledState","WithFormControls","AccessibilityDemo","InteractiveExamples","ThemeShowcase","AllCombinations","Interactive"],pr=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDemo:V,AllCombinations:U,Default:E,DisabledState:A,Interactive:O,InteractiveExamples:F,RequiredStates:_,SizeVariants:H,ThemeShowcase:M,WeightVariants:C,WithFormControls:I,__namedExportsOrder:Ke,default:Ye},Symbol.toStringTag,{value:"Module"})),Xe={title:"Atoms/Link",component:a,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["default","subtle","accent","danger"],description:"Visual variant for different contexts"},size:{control:"select",options:["sm","base","lg"],description:"Size of the link text"},disabled:{control:"boolean",description:"Disabled state"},underline:{control:"boolean",description:"Always show underline"},external:{control:"boolean",description:"Mark as external link (adds icon and security attributes)"},href:{control:"text",description:"URL to navigate to"},target:{control:"text",description:"Target attribute (_blank, _self, etc.)"},rel:{control:"text",description:"Rel attribute for link security"},children:{control:"text",description:"Link content"},onClick:{action:"clicked"}},args:{children:"Sample Link",href:"#",onClick:Me()}},R={parameters:{docs:{description:{story:"Default link with accent color and hover underline."}}}},q={render:()=>e.jsxs("div",{className:"link-story-section",children:[e.jsx(a,{variant:"default",href:"#",children:"Default - Accent color link"}),e.jsx(a,{variant:"subtle",href:"#",children:"Subtle - Inherits text color"}),e.jsx(a,{variant:"accent",href:"#",children:"Accent - Emphasized accent color"}),e.jsx(a,{variant:"danger",href:"#",children:"Danger - Warning/destructive actions"})]}),parameters:{docs:{description:{story:"Different visual variants for various contexts and actions."}}}},P={render:()=>e.jsxs("div",{className:"link-story-section",children:[e.jsx(a,{size:"sm",href:"#",children:"Small Link"}),e.jsx(a,{size:"base",href:"#",children:"Base Link (Default)"}),e.jsx(a,{size:"lg",href:"#",children:"Large Link"})]}),parameters:{docs:{description:{story:"Different sizes to match surrounding text or create hierarchy."}}}},$={render:()=>e.jsxs("div",{className:"link-story-section",children:[e.jsx(a,{href:"https://example.com",children:"Regular external link"}),e.jsx(a,{external:!0,href:"https://example.com",children:"External link with auto-config"}),e.jsx(a,{external:!0,href:"https://example.com",target:"_blank",rel:"noopener",children:"External with custom attributes"}),e.jsx(a,{external:!0,variant:"accent",href:"https://github.com",children:"External accent link"})]}),parameters:{docs:{description:{story:'External links with automatic security attributes and visual indicators. The external prop adds target="_blank" and rel="noopener noreferrer" automatically.'}}}},W={render:()=>e.jsxs("div",{className:"link-story-section",children:[e.jsx(a,{href:"#",children:"Normal Link"}),e.jsx(a,{href:"#",underline:!0,children:"Always Underlined"}),e.jsx(a,{disabled:!0,href:"#",children:"Disabled Link"}),e.jsx(a,{disabled:!0,underline:!0,href:"#",children:"Disabled Underlined"})]}),parameters:{docs:{description:{story:"Different link states including disabled and always-underlined variants."}}}},B={render:()=>e.jsxs("div",{className:"link-story-interactive",children:[e.jsxs("div",{className:"link-story-example",children:[e.jsx("h4",{children:"Navigation Links:"}),e.jsx(a,{href:"#home",onClick:r=>{r.preventDefault(),console.log("Navigate to home")},children:"Home Page"}),e.jsx(a,{href:"#about",variant:"subtle",onClick:r=>{r.preventDefault(),console.log("Navigate to about")},children:"About Us"})]}),e.jsxs("div",{className:"link-story-example",children:[e.jsx("h4",{children:"Action Links:"}),e.jsx(a,{href:"#",variant:"accent",onClick:r=>{r.preventDefault(),alert("Action triggered!")},children:"Trigger Action"}),e.jsx(a,{href:"#",variant:"danger",onClick:r=>{r.preventDefault(),confirm("Are you sure you want to delete?")},children:"Delete Item"})]}),e.jsxs("div",{className:"link-story-example",children:[e.jsx("h4",{children:"External Links:"}),e.jsx(a,{external:!0,href:"https://storybook.js.org",children:"Storybook Documentation"}),e.jsx(a,{external:!0,variant:"accent",href:"https://github.com",children:"GitHub Repository"})]})]}),parameters:{docs:{description:{story:"Interactive examples with click handlers. Check browser console for navigation events."}}}},G={render:()=>e.jsxs("div",{className:"link-story-accessibility",children:[e.jsxs("div",{className:"link-story-example",children:[e.jsx("h4",{children:"Accessible Link Patterns:"}),e.jsx(a,{href:"#main-content",children:"Skip to main content"}),e.jsx(a,{external:!0,href:"https://example.com",children:"External site (opens in new tab)"}),e.jsx(a,{href:"/download.pdf",target:"_blank","aria-label":"Download user manual (PDF, opens in new tab)",children:"Download Manual"})]}),e.jsxs("div",{className:"link-story-example",children:[e.jsx("h4",{children:"Focus and Keyboard Navigation:"}),e.jsx("p",{children:"Use Tab to navigate between these links:"}),e.jsx(a,{href:"#",variant:"default",children:"First Link"}),e.jsx(a,{href:"#",variant:"accent",children:"Second Link"}),e.jsx(a,{href:"#",disabled:!0,children:"Disabled Link (skipped)"}),e.jsx(a,{href:"#",variant:"subtle",children:"Third Link"})]})]}),parameters:{docs:{description:{story:"Accessibility features including proper ARIA labels, keyboard navigation, and skip links."}}}},J={render:()=>e.jsxs("div",{className:"link-story-text-example",children:[e.jsxs("p",{children:["This is a paragraph with ",e.jsx(a,{href:"#",variant:"default",children:"inline links"})," that flow naturally with the text. You can also have"," ",e.jsx(a,{external:!0,href:"https://example.com",children:"external links"})," and"," ",e.jsx(a,{href:"#",variant:"subtle",children:"subtle links"})," that blend in more. For actions that might be destructive, use"," ",e.jsx(a,{href:"#",variant:"danger",children:"danger variant links"}),"."]}),e.jsxs("p",{children:["Links can be"," ",e.jsx(a,{href:"#",size:"sm",children:"smaller"})," or"," ",e.jsx(a,{href:"#",size:"lg",children:"larger"})," to match the surrounding text size. You can also have"," ",e.jsx(a,{href:"#",underline:!0,children:"always underlined links"})," for emphasis."]})]}),parameters:{docs:{description:{story:"Links used inline within text content, showing how they integrate with typography."}}}},Y={render:()=>e.jsxs("div",{className:"link-story-theme-demo",children:[e.jsxs("div",{className:"link-story-theme-section",children:[e.jsx("h3",{children:"Theme Adaptive Links"}),e.jsx(a,{variant:"default",href:"#",children:"Default Variant"}),e.jsx(a,{variant:"subtle",href:"#",children:"Subtle Variant"}),e.jsx(a,{variant:"accent",href:"#",children:"Accent Variant"}),e.jsx(a,{variant:"danger",href:"#",children:"Danger Variant"}),e.jsx(a,{external:!0,href:"#",children:"External Link"})]}),e.jsxs("div",{className:"link-story-theme-info",children:[e.jsx("h4",{children:"Theme Variables Used:"}),e.jsxs("div",{className:"link-story-theme-vars",children:[e.jsx("code",{children:"--color-accent"}),": Primary link color",e.jsx("br",{}),e.jsx("code",{children:"--color-accent-hover"}),": Hover state color",e.jsx("br",{}),e.jsx("code",{children:"--color-text"}),": Subtle variant color",e.jsx("br",{}),e.jsx("code",{children:"--color-text-muted"}),": Disabled state color",e.jsx("br",{}),e.jsx("code",{children:"--color-error"}),": Danger variant color"]})]})]}),parameters:{docs:{description:{story:"Links that adapt to different themes. Use the theme switcher in the toolbar to see color changes."}}}},K={render:()=>e.jsx("div",{className:"link-story-comprehensive",children:e.jsxs("div",{className:"link-story-grid",children:[e.jsxs("div",{className:"link-story-grid-section",children:[e.jsx("h4",{children:"Variant + Size Combinations"}),e.jsx(a,{variant:"default",size:"lg",href:"#",children:"Default Large"}),e.jsx(a,{variant:"accent",size:"base",href:"#",children:"Accent Base"}),e.jsx(a,{variant:"subtle",size:"sm",href:"#",children:"Subtle Small"}),e.jsx(a,{variant:"danger",size:"base",href:"#",children:"Danger Base"})]}),e.jsxs("div",{className:"link-story-grid-section",children:[e.jsx("h4",{children:"External Links"}),e.jsx(a,{external:!0,variant:"default",href:"#",children:"Default External"}),e.jsx(a,{external:!0,variant:"accent",href:"#",children:"Accent External"}),e.jsx(a,{external:!0,variant:"subtle",href:"#",children:"Subtle External"})]}),e.jsxs("div",{className:"link-story-grid-section",children:[e.jsx("h4",{children:"Special States"}),e.jsx(a,{underline:!0,href:"#",children:"Always Underlined"}),e.jsx(a,{disabled:!0,href:"#",children:"Disabled Link"}),e.jsx(a,{disabled:!0,external:!0,href:"#",children:"Disabled External"})]})]})}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of all link combinations and states."}}}},X={args:{variant:"default",size:"base",disabled:!1,underline:!1,external:!1,href:"#",children:"Interactive Link"},parameters:{docs:{description:{story:"Interactive story where you can modify all link properties using the controls panel."}}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default link with accent color and hover underline.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="link-story-section">\r
      <Link variant="default" href="#">Default - Accent color link</Link>\r
      <Link variant="subtle" href="#">Subtle - Inherits text color</Link>\r
      <Link variant="accent" href="#">Accent - Emphasized accent color</Link>\r
      <Link variant="danger" href="#">Danger - Warning/destructive actions</Link>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants for various contexts and actions.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div className="link-story-section">\r
      <Link size="sm" href="#">Small Link</Link>\r
      <Link size="base" href="#">Base Link (Default)</Link>\r
      <Link size="lg" href="#">Large Link</Link>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different sizes to match surrounding text or create hierarchy.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <div className="link-story-section">\r
      <Link href="https://example.com">Regular external link</Link>\r
      <Link external href="https://example.com">\r
        External link with auto-config\r
      </Link>\r
      <Link external href="https://example.com" target="_blank" rel="noopener">\r
        External with custom attributes\r
      </Link>\r
      <Link external variant="accent" href="https://github.com">\r
        External accent link\r
      </Link>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'External links with automatic security attributes and visual indicators. The external prop adds target="_blank" and rel="noopener noreferrer" automatically.'
      }
    }
  }
}`,...$.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div className="link-story-section">\r
      <Link href="#">Normal Link</Link>\r
      <Link href="#" underline>Always Underlined</Link>\r
      <Link disabled href="#">Disabled Link</Link>\r
      <Link disabled underline href="#">Disabled Underlined</Link>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different link states including disabled and always-underlined variants.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div className="link-story-interactive">\r
      <div className="link-story-example">\r
        <h4>Navigation Links:</h4>\r
        <Link href="#home" onClick={e => {
        e.preventDefault();
        console.log('Navigate to home');
      }}>\r
          Home Page\r
        </Link>\r
        <Link href="#about" variant="subtle" onClick={e => {
        e.preventDefault();
        console.log('Navigate to about');
      }}>\r
          About Us\r
        </Link>\r
      </div>\r
      \r
      <div className="link-story-example">\r
        <h4>Action Links:</h4>\r
        <Link href="#" variant="accent" onClick={e => {
        e.preventDefault();
        alert('Action triggered!');
      }}>\r
          Trigger Action\r
        </Link>\r
        <Link href="#" variant="danger" onClick={e => {
        e.preventDefault();
        confirm('Are you sure you want to delete?');
      }}>\r
          Delete Item\r
        </Link>\r
      </div>\r
      \r
      <div className="link-story-example">\r
        <h4>External Links:</h4>\r
        <Link external href="https://storybook.js.org">\r
          Storybook Documentation\r
        </Link>\r
        <Link external variant="accent" href="https://github.com">\r
          GitHub Repository\r
        </Link>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive examples with click handlers. Check browser console for navigation events.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div className="link-story-accessibility">\r
      <div className="link-story-example">\r
        <h4>Accessible Link Patterns:</h4>\r
        <Link href="#main-content">Skip to main content</Link>\r
        <Link external href="https://example.com">\r
          External site (opens in new tab)\r
        </Link>\r
        <Link href="/download.pdf" target="_blank" aria-label="Download user manual (PDF, opens in new tab)">\r
          Download Manual\r
        </Link>\r
      </div>\r
      \r
      <div className="link-story-example">\r
        <h4>Focus and Keyboard Navigation:</h4>\r
        <p>Use Tab to navigate between these links:</p>\r
        <Link href="#" variant="default">First Link</Link>\r
        <Link href="#" variant="accent">Second Link</Link>\r
        <Link href="#" disabled>Disabled Link (skipped)</Link>\r
        <Link href="#" variant="subtle">Third Link</Link>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including proper ARIA labels, keyboard navigation, and skip links.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div className="link-story-text-example">\r
      <p>\r
        This is a paragraph with <Link href="#" variant="default">inline links</Link> that \r
        flow naturally with the text. You can also have{' '}\r
        <Link external href="https://example.com">external links</Link> and{' '}\r
        <Link href="#" variant="subtle">subtle links</Link> that blend in more. \r
        For actions that might be destructive, use{' '}\r
        <Link href="#" variant="danger">danger variant links</Link>.\r
      </p>\r
      \r
      <p>\r
        Links can be{' '}\r
        <Link href="#" size="sm">smaller</Link> or{' '}\r
        <Link href="#" size="lg">larger</Link> to match the surrounding text size. \r
        You can also have{' '}\r
        <Link href="#" underline>always underlined links</Link> for emphasis.\r
      </p>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Links used inline within text content, showing how they integrate with typography.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="link-story-theme-demo">\r
      <div className="link-story-theme-section">\r
        <h3>Theme Adaptive Links</h3>\r
        <Link variant="default" href="#">Default Variant</Link>\r
        <Link variant="subtle" href="#">Subtle Variant</Link>\r
        <Link variant="accent" href="#">Accent Variant</Link>\r
        <Link variant="danger" href="#">Danger Variant</Link>\r
        <Link external href="#">External Link</Link>\r
      </div>\r
      \r
      <div className="link-story-theme-info">\r
        <h4>Theme Variables Used:</h4>\r
        <div className="link-story-theme-vars">\r
          <code>--color-accent</code>: Primary link color<br />\r
          <code>--color-accent-hover</code>: Hover state color<br />\r
          <code>--color-text</code>: Subtle variant color<br />\r
          <code>--color-text-muted</code>: Disabled state color<br />\r
          <code>--color-error</code>: Danger variant color\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Links that adapt to different themes. Use the theme switcher in the toolbar to see color changes.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div className="link-story-comprehensive">\r
      <div className="link-story-grid">\r
        <div className="link-story-grid-section">\r
          <h4>Variant + Size Combinations</h4>\r
          <Link variant="default" size="lg" href="#">Default Large</Link>\r
          <Link variant="accent" size="base" href="#">Accent Base</Link>\r
          <Link variant="subtle" size="sm" href="#">Subtle Small</Link>\r
          <Link variant="danger" size="base" href="#">Danger Base</Link>\r
        </div>\r
        \r
        <div className="link-story-grid-section">\r
          <h4>External Links</h4>\r
          <Link external variant="default" href="#">Default External</Link>\r
          <Link external variant="accent" href="#">Accent External</Link>\r
          <Link external variant="subtle" href="#">Subtle External</Link>\r
        </div>\r
        \r
        <div className="link-story-grid-section">\r
          <h4>Special States</h4>\r
          <Link underline href="#">Always Underlined</Link>\r
          <Link disabled href="#">Disabled Link</Link>\r
          <Link disabled external href="#">Disabled External</Link>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of all link combinations and states.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'base',
    disabled: false,
    underline: false,
    external: false,
    href: '#',
    children: 'Interactive Link'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive story where you can modify all link properties using the controls panel.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}};const Qe=["Default","Variants","SizeVariants","ExternalLinks","States","InteractiveExamples","AccessibilityDemo","InlineTextExample","ThemeShowcase","AllCombinations","Interactive"],ur=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDemo:G,AllCombinations:K,Default:R,ExternalLinks:$,InlineTextExample:J,Interactive:X,InteractiveExamples:B,SizeVariants:P,States:W,ThemeShowcase:Y,Variants:q,__namedExportsOrder:Qe,default:Xe},Symbol.toStringTag,{value:"Module"})),Ze={title:"Atoms/Table",component:$e,parameters:{layout:"padded",docs:{description:{component:"A powerful, accessible data table component with support for grouping, sorting, selection, and custom rendering."}}},argTypes:{data:{description:"Array of data records to display",control:!1},columns:{description:"Array of column definitions",control:!1},groups:{description:"Optional grouping configuration",control:!1},size:{description:"Size variant of the table",control:"select",options:["sm","md","lg"]},striped:{description:"Enable striped rows",control:"boolean"},bordered:{description:"Enable borders",control:"boolean"},selectable:{description:"Enable row selection",control:"boolean"},hoverable:{description:"Enable hover effects on rows",control:"boolean"},responsive:{description:"Enable responsive behavior",control:"boolean"},loading:{description:"Show loading state",control:"boolean"},emptyMessage:{description:"Custom empty state message",control:"text"},onRowSelect:{description:"Callback when selection changes",action:"selection-changed"},onSort:{description:"Callback when sorting changes",action:"sort-changed"},onRowClick:{description:"Callback when row is clicked",action:"row-clicked"}}},Ue=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",lastLogin:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"active",lastLogin:"2024-01-14"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"User",status:"inactive",lastLogin:"2024-01-10"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"active",lastLogin:"2024-01-13"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"Admin",status:"pending",lastLogin:"2024-01-12"}],Oe=[{key:"name",title:"Name",sortable:!0},{key:"email",title:"Email",sortable:!0},{key:"role",title:"Role",align:"center"},{key:"status",title:"Status",align:"center"},{key:"lastLogin",title:"Last Login",align:"right",sortable:!0}],l={args:{data:Ue,columns:Oe,size:"md",hoverable:!0,responsive:!0,"aria-label":"User management table"}},Q={args:{...l.args,selectable:!0}},Z={args:{...l.args,striped:!0}},ee={args:{...l.args,bordered:!0}},re={args:{...l.args,size:"sm"}},te={args:{...l.args,size:"lg"}},ae={args:{...l.args,loading:!0}},se={args:{data:[],columns:Oe,emptyMessage:"No users found",size:"md"}},er=[{key:"name",title:"Name",sortable:!0},{key:"email",title:"Email",sortable:!0},{key:"role",title:"Role",align:"center",render:r=>e.jsxs("span",{className:`table__status table__status--${r==="Admin"?"error":r==="Editor"?"warning":"active"}`,children:[e.jsx("span",{className:"table__status-dot"}),r]})},{key:"status",title:"Status",align:"center",render:r=>e.jsxs("span",{className:`table__status table__status--${r}`,children:[e.jsx("span",{className:"table__status-dot"}),r.toUpperCase()]})},{key:"actions",title:"Actions",align:"center",render:(r,c)=>e.jsxs("div",{children:[e.jsx("button",{className:"table__action-button table__action-button--primary",children:"Edit"}),e.jsx("button",{className:"table__action-button table__action-button--error",children:"Delete"})]})}],ie={args:{data:Ue,columns:er,size:"md",hoverable:!0,responsive:!0,selectable:!0}},o=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",lastLogin:"2024-01-15",department:"IT"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"Admin",status:"pending",lastLogin:"2024-01-12",department:"IT"},{id:8,name:"Sarah Davis",email:"sarah@example.com",role:"Admin",status:"active",lastLogin:"2024-01-16",department:"HR"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"active",lastLogin:"2024-01-13",department:"Marketing"},{id:7,name:"Mike Chen",email:"mike@example.com",role:"Editor",status:"active",lastLogin:"2024-01-14",department:"Marketing"},{id:9,name:"Emma Garcia",email:"emma@example.com",role:"Editor",status:"inactive",lastLogin:"2024-01-11",department:"Content"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"active",lastLogin:"2024-01-14",department:"Sales"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"User",status:"inactive",lastLogin:"2024-01-10",department:"Sales"},{id:6,name:"Lisa Wang",email:"lisa@example.com",role:"User",status:"active",lastLogin:"2024-01-15",department:"Support"},{id:10,name:"Tom Rodriguez",email:"tom@example.com",role:"User",status:"pending",lastLogin:"2024-01-09",department:"Support"}],Re=[{key:"name",title:"Name",sortable:!0},{key:"email",title:"Email",sortable:!0},{key:"department",title:"Department",align:"center"},{key:"status",title:"Status",align:"center",render:r=>e.jsxs("span",{className:`table__status table__status--${r}`,children:[e.jsx("span",{className:"table__status-dot"}),r.toUpperCase()]})},{key:"lastLogin",title:"Last Login",align:"right",sortable:!0},{key:"actions",title:"Actions",align:"center",render:(r,c)=>e.jsxs("div",{children:[e.jsx("button",{className:"table__action-button table__action-button--primary",children:"Edit"}),e.jsx("button",{className:"table__action-button table__action-button--secondary",children:"View"})]})}],qe=[{id:"Admin",title:"Administrators",color:"error",expanded:!0,records:o.filter(r=>r.role==="Admin")},{id:"Editor",title:"Content Editors",color:"warning",expanded:!0,records:o.filter(r=>r.role==="Editor")},{id:"User",title:"Regular Users",color:"success",expanded:!1,records:o.filter(r=>r.role==="User")}],ne={args:{data:o,columns:Re,groups:qe,size:"md",hoverable:!0,responsive:!0,selectable:!0}},Pe=[{id:"IT",title:"Information Technology",color:"primary",expanded:!0,records:o.filter(r=>r.department==="IT")},{id:"Marketing",title:"Marketing Department",color:"warning",expanded:!0,records:o.filter(r=>r.department==="Marketing")},{id:"Sales",title:"Sales Team",color:"success",expanded:!1,records:o.filter(r=>r.department==="Sales")},{id:"HR",title:"Human Resources",color:"info",expanded:!0,records:o.filter(r=>r.department==="HR")},{id:"Support",title:"Customer Support",color:"secondary",expanded:!1,records:o.filter(r=>r.department==="Support")},{id:"Content",title:"Content Team",color:"error",expanded:!0,records:o.filter(r=>r.department==="Content")}],oe={args:{data:o,columns:Re,groups:Pe,size:"md",striped:!0,hoverable:!0,responsive:!0,selectable:!0}},Ie=[{key:"name",title:"Full Name",sortable:!0,width:"200px"},{key:"email",title:"Email Address",sortable:!0,render:r=>e.jsx("a",{href:`mailto:${r}`,className:"table__email-link",children:r})},{key:"role",title:"Role",align:"center",sortable:!0,render:r=>e.jsxs("span",{className:`table__status table__status--${r==="Admin"?"error":r==="Editor"?"warning":"active"}`,children:[e.jsx("span",{className:"table__status-dot"}),r]})},{key:"department",title:"Department",align:"center",sortable:!0},{key:"status",title:"Status",align:"center",sortable:!0,render:r=>e.jsxs("span",{className:`table__status table__status--${r}`,children:[e.jsx("span",{className:"table__status-dot"}),r.toUpperCase()]})},{key:"lastLogin",title:"Last Login",align:"right",sortable:!0,render:r=>new Date(r).toLocaleDateString()},{key:"actions",title:"Actions",align:"center",width:"180px",render:(r,c)=>e.jsxs("div",{children:[e.jsx("button",{className:"table__action-button table__action-button--primary",title:`Edit ${c.name}`,children:"Edit"}),e.jsx("button",{className:"table__action-button table__action-button--secondary",title:`View ${c.name} profile`,children:"View"}),e.jsx("button",{className:"table__action-button table__action-button--error",title:`Delete ${c.name}`,children:"Delete"})]})}],le={args:{data:o,columns:Ie,groups:Pe,size:"md",bordered:!0,hoverable:!0,responsive:!0,selectable:!0,"aria-label":"Company employee directory with department grouping and management actions"}},ce={args:{data:o,columns:Ie,groups:qe,size:"md",striped:!0,hoverable:!0,responsive:!0,selectable:!0},play:async({canvasElement:r})=>{console.log("Interactive table loaded:",r)}},rr=r=>{const c=["Admin","Editor","User"],Ve=["active","inactive","pending"],Fe=["IT","Marketing","Sales","HR","Support","Content"];return Array.from({length:r},(or,d)=>({id:d+1,name:`User ${d+1}`,email:`user${d+1}@example.com`,role:c[d%c.length],status:Ve[d%Ve.length],department:Fe[d%Fe.length],lastLogin:new Date(2024,0,Math.floor(Math.random()*30)+1).toISOString().split("T")[0]}))},de={args:{data:rr(100),columns:Ie,size:"sm",striped:!0,hoverable:!0,responsive:!0,selectable:!0,"aria-label":"Performance test with 100 records"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: basicColumns,
    size: 'md',
    hoverable: true,
    responsive: true,
    'aria-label': 'User management table'
  }
}`,...l.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectable: true
  }
}`,...Q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    striped: true
  }
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    bordered: true
  }
}`,...ee.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'sm'
  }
}`,...re.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'lg'
  }
}`,...te.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...ae.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: basicColumns,
    emptyMessage: 'No users found',
    size: 'md'
  }
}`,...se.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: columnsWithCustomRender,
    size: 'md',
    hoverable: true,
    responsive: true,
    selectable: true
  }
}`,...ie.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  args: {
    data: groupedUsers,
    columns: groupedColumns,
    groups: userGroups,
    size: 'md',
    hoverable: true,
    responsive: true,
    selectable: true
  }
}`,...ne.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  args: {
    data: groupedUsers,
    columns: groupedColumns,
    groups: departmentGroups,
    size: 'md',
    striped: true,
    hoverable: true,
    responsive: true,
    selectable: true
  }
}`,...oe.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  args: {
    data: groupedUsers,
    columns: complexColumns,
    groups: departmentGroups,
    size: 'md',
    bordered: true,
    hoverable: true,
    responsive: true,
    selectable: true,
    'aria-label': 'Company employee directory with department grouping and management actions'
  }
}`,...le.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  args: {
    data: groupedUsers,
    columns: complexColumns,
    groups: userGroups,
    size: 'md',
    striped: true,
    hoverable: true,
    responsive: true,
    selectable: true
  },
  play: async ({
    canvasElement
  }) => {
    // This would be used for interaction testing in Storybook
    console.log('Interactive table loaded:', canvasElement);
  }
}`,...ce.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateLargeDataset(100),
    columns: complexColumns,
    size: 'sm',
    striped: true,
    hoverable: true,
    responsive: true,
    selectable: true,
    'aria-label': 'Performance test with 100 records'
  }
}`,...de.parameters?.docs?.source}}};const tr=["Default","WithSelection","Striped","Bordered","SmallSize","LargeSize","Loading","Empty","WithCustomRendering","WithGrouping","GroupedByDepartment","ComplexTable","InteractiveTable","LargeDataset"],gr=Object.freeze(Object.defineProperty({__proto__:null,Bordered:ee,ComplexTable:le,Default:l,Empty:se,GroupedByDepartment:oe,InteractiveTable:ce,LargeDataset:de,LargeSize:te,Loading:ae,SmallSize:re,Striped:Z,WithCustomRendering:ie,WithGrouping:ne,WithSelection:Q,__namedExportsOrder:tr,default:Ze},Symbol.toStringTag,{value:"Module"})),ar={title:"Atoms/Text",component:t,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["xs","sm","base","lg","xl"],description:"Text size variant"},weight:{control:"select",options:["normal","medium","semibold","bold"],description:"Font weight"},color:{control:"select",options:["primary","secondary","muted","accent","success","warning","error"],description:"Text color variant"},align:{control:"select",options:["left","center","right","justify"],description:"Text alignment"},as:{control:"select",options:["p","span","div","small","strong","em"],description:"HTML element to render"},italic:{control:"boolean",description:"Make text italic"},underline:{control:"boolean",description:"Underline text"},strikethrough:{control:"boolean",description:"Strike through text"},truncate:{control:"boolean",description:"Truncate with ellipsis"},lineClamp:{control:"number",description:"Maximum lines before truncating"},children:{control:"text",description:"Text content"}},args:{children:"Sample text content for demonstration purposes."}},me={parameters:{docs:{description:{story:"Default text with base size, normal weight, and primary color."}}}},he={render:()=>e.jsxs("div",{className:"text-story-section",children:[e.jsx(t,{size:"xs",children:"Extra Small - Perfect for captions and fine print"}),e.jsx(t,{size:"sm",children:"Small - Good for secondary information"}),e.jsx(t,{size:"base",children:"Base - Standard body text size"}),e.jsx(t,{size:"lg",children:"Large - Emphasis text or lead paragraphs"}),e.jsx(t,{size:"xl",children:"Extra Large - Prominent text or callouts"})]}),parameters:{docs:{description:{story:"All available text size variants from extra small to extra large."}}}},pe={render:()=>e.jsxs("div",{className:"text-story-section",children:[e.jsx(t,{weight:"normal",children:"Normal weight - Standard text weight"}),e.jsx(t,{weight:"medium",children:"Medium weight - Slightly emphasized"}),e.jsx(t,{weight:"semibold",children:"Semibold weight - More emphasis"}),e.jsx(t,{weight:"bold",children:"Bold weight - Strong emphasis"})]}),parameters:{docs:{description:{story:"Different font weight options for text emphasis."}}}},ue={render:()=>e.jsxs("div",{className:"text-story-section",children:[e.jsx(t,{color:"primary",children:"Primary - Default text color"}),e.jsx(t,{color:"secondary",children:"Secondary - Subdued text"}),e.jsx(t,{color:"muted",children:"Muted - De-emphasized text"}),e.jsx(t,{color:"accent",children:"Accent - Brand color text"}),e.jsx(t,{color:"success",children:"Success - Positive messaging"}),e.jsx(t,{color:"warning",children:"Warning - Cautionary messaging"}),e.jsx(t,{color:"error",children:"Error - Error states and alerts"})]}),parameters:{docs:{description:{story:"Color variants using theme color tokens for different contexts."}}}},ge={render:()=>e.jsxs("div",{className:"text-story-alignment",children:[e.jsx(t,{align:"left",children:"Left aligned - Default alignment for most languages"}),e.jsx(t,{align:"center",children:"Center aligned - Good for headings and callouts"}),e.jsx(t,{align:"right",children:"Right aligned - Less common, useful for specific layouts"}),e.jsx(t,{align:"justify",children:"Justify aligned - This longer text demonstrates how justify alignment works by distributing words evenly across the line width, creating clean edges on both sides."})]}),parameters:{docs:{description:{story:"Text alignment options for different layout needs."}}}},xe={render:()=>e.jsxs("div",{className:"text-story-section",children:[e.jsx(t,{italic:!0,children:"Italic text - Emphasized or stylistic text"}),e.jsx(t,{underline:!0,children:"Underlined text - Traditional emphasis"}),e.jsx(t,{strikethrough:!0,children:"Strikethrough text - Deleted or invalid content"}),e.jsx(t,{weight:"bold",italic:!0,underline:!0,children:"Combined modifiers - Bold, italic, and underlined"})]}),parameters:{docs:{description:{story:"Style modifiers that can be combined for different text treatments."}}}},be={render:()=>e.jsxs("div",{className:"text-story-section",children:[e.jsx(t,{as:"p",children:"Paragraph element - Default semantic choice"}),e.jsx(t,{as:"span",children:"Span element - Inline text"}),e.jsx(t,{as:"div",children:"Div element - Block text container"}),e.jsx(t,{as:"small",size:"sm",children:"Small element - Fine print and disclaimers"}),e.jsx(t,{as:"strong",weight:"bold",children:"Strong element - Important text"}),e.jsx(t,{as:"em",italic:!0,children:"Em element - Emphasized text"})]}),parameters:{docs:{description:{story:"Different HTML elements for proper semantic markup."}}}},ve={render:()=>e.jsxs("div",{className:"text-story-truncation",children:[e.jsxs("div",{className:"text-story-truncation-container",children:[e.jsx("h4",{children:"Single Line Truncation:"}),e.jsx(t,{truncate:!0,children:"This is a very long text that will be truncated with an ellipsis when it exceeds the container width. Only one line will be shown."})]}),e.jsxs("div",{className:"text-story-truncation-container",children:[e.jsx("h4",{children:"2-Line Clamp:"}),e.jsx(t,{lineClamp:2,children:"This is a longer text that demonstrates the line clamp feature. It will show exactly two lines before truncating with an ellipsis. This is useful for card layouts and previews where you want consistent heights."})]}),e.jsxs("div",{className:"text-story-truncation-container",children:[e.jsx("h4",{children:"3-Line Clamp:"}),e.jsx(t,{lineClamp:3,children:"This is an even longer text that shows how the line clamp works with three lines. You can see that it maintains proper line spacing and truncates cleanly at the end of the third line. This is commonly used for article previews, product descriptions, and other content where you need to limit vertical space while showing more content than a single line would allow."})]})]}),parameters:{docs:{description:{story:"Examples of text truncation using ellipsis and line clamping."}}}},ye={args:{size:"xl",children:"Responsive text that scales down on smaller screens"},parameters:{viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop",styles:{width:"1200px",height:"800px"}}}},docs:{description:{story:"Extra large text that automatically scales down on smaller viewports. Use viewport controls to see the responsive behavior."}}}},fe={render:()=>e.jsxs("div",{className:"text-story-theme-demo",children:[e.jsx(t,{size:"lg",weight:"semibold",color:"primary",children:"Theme Integration Showcase"}),e.jsx(t,{color:"secondary",children:"This text adapts to your selected theme. Switch between Dark, Light, and Custom themes using the toolbar to see how colors change automatically."}),e.jsxs("div",{className:"text-story-color-grid",children:[e.jsx(t,{color:"primary",children:"Primary"}),e.jsx(t,{color:"secondary",children:"Secondary"}),e.jsx(t,{color:"muted",children:"Muted"}),e.jsx(t,{color:"accent",children:"Accent"}),e.jsx(t,{color:"success",children:"Success"}),e.jsx(t,{color:"warning",children:"Warning"}),e.jsx(t,{color:"error",children:"Error"})]}),e.jsxs("div",{className:"text-story-theme-info",children:[e.jsx(t,{size:"sm",weight:"medium",children:"Theme Variables Used:"}),e.jsxs(t,{size:"xs",as:"div",color:"muted",children:[e.jsx("code",{children:"--color-text"}),", ",e.jsx("code",{children:"--color-text-secondary"}),",",e.jsx("code",{children:"--color-text-muted"}),", ",e.jsx("code",{children:"--color-accent"}),",",e.jsx("code",{children:"--color-success"}),", ",e.jsx("code",{children:"--color-warning"}),",",e.jsx("code",{children:"--color-error"})]})]})]}),parameters:{docs:{description:{story:"Demonstrates how text colors adapt to different themes using CSS custom properties."}}}},je={render:()=>e.jsx("div",{className:"text-story-comprehensive",children:e.jsxs("div",{className:"text-story-grid",children:[e.jsxs("div",{className:"text-story-grid-section",children:[e.jsx("h4",{children:"Size + Weight Combinations"}),e.jsx(t,{size:"xl",weight:"bold",color:"primary",children:"XL Bold Primary"}),e.jsx(t,{size:"lg",weight:"semibold",color:"accent",children:"Large Semibold Accent"}),e.jsx(t,{size:"base",weight:"medium",color:"secondary",children:"Base Medium Secondary"}),e.jsx(t,{size:"sm",weight:"normal",color:"muted",children:"Small Normal Muted"})]}),e.jsxs("div",{className:"text-story-grid-section",children:[e.jsx("h4",{children:"Semantic Elements"}),e.jsx(t,{as:"strong",weight:"bold",color:"success",children:"Strong Success"}),e.jsx(t,{as:"em",italic:!0,color:"warning",children:"Em Warning"}),e.jsx(t,{as:"small",size:"xs",color:"error",children:"Small Error"}),e.jsx(t,{as:"span",underline:!0,color:"accent",children:"Span Underlined"})]}),e.jsxs("div",{className:"text-story-grid-section",children:[e.jsx("h4",{children:"Style Combinations"}),e.jsx(t,{weight:"bold",italic:!0,color:"primary",children:"Bold Italic"}),e.jsx(t,{underline:!0,strikethrough:!0,color:"muted",children:"Underline + Strike"}),e.jsx(t,{size:"lg",weight:"semibold",italic:!0,color:"accent",children:"Large Semibold Italic"})]})]})}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of text combinations across sizes, weights, colors, and styles."}}}},we={args:{size:"base",weight:"normal",color:"primary",align:"left",as:"p",children:"Interactive text example - modify properties in the controls panel",italic:!1,underline:!1,strikethrough:!1,truncate:!1},parameters:{docs:{description:{story:"Interactive story where you can modify all text properties using the controls panel below."}}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default text with base size, normal weight, and primary color.'
      }
    }
  }
}`,...me.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-section">\r
      <Text size="xs">Extra Small - Perfect for captions and fine print</Text>\r
      <Text size="sm">Small - Good for secondary information</Text>\r
      <Text size="base">Base - Standard body text size</Text>\r
      <Text size="lg">Large - Emphasis text or lead paragraphs</Text>\r
      <Text size="xl">Extra Large - Prominent text or callouts</Text>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All available text size variants from extra small to extra large.'
      }
    }
  }
}`,...he.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-section">\r
      <Text weight="normal">Normal weight - Standard text weight</Text>\r
      <Text weight="medium">Medium weight - Slightly emphasized</Text>\r
      <Text weight="semibold">Semibold weight - More emphasis</Text>\r
      <Text weight="bold">Bold weight - Strong emphasis</Text>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different font weight options for text emphasis.'
      }
    }
  }
}`,...pe.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-section">\r
      <Text color="primary">Primary - Default text color</Text>\r
      <Text color="secondary">Secondary - Subdued text</Text>\r
      <Text color="muted">Muted - De-emphasized text</Text>\r
      <Text color="accent">Accent - Brand color text</Text>\r
      <Text color="success">Success - Positive messaging</Text>\r
      <Text color="warning">Warning - Cautionary messaging</Text>\r
      <Text color="error">Error - Error states and alerts</Text>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Color variants using theme color tokens for different contexts.'
      }
    }
  }
}`,...ue.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-alignment">\r
      <Text align="left">Left aligned - Default alignment for most languages</Text>\r
      <Text align="center">Center aligned - Good for headings and callouts</Text>\r
      <Text align="right">Right aligned - Less common, useful for specific layouts</Text>\r
      <Text align="justify">Justify aligned - This longer text demonstrates how justify alignment works by distributing words evenly across the line width, creating clean edges on both sides.</Text>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Text alignment options for different layout needs.'
      }
    }
  }
}`,...ge.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-section">\r
      <Text italic>Italic text - Emphasized or stylistic text</Text>\r
      <Text underline>Underlined text - Traditional emphasis</Text>\r
      <Text strikethrough>Strikethrough text - Deleted or invalid content</Text>\r
      <Text weight="bold" italic underline>\r
        Combined modifiers - Bold, italic, and underlined\r
      </Text>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Style modifiers that can be combined for different text treatments.'
      }
    }
  }
}`,...xe.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-section">\r
      <Text as="p">Paragraph element - Default semantic choice</Text>\r
      <Text as="span">Span element - Inline text</Text>\r
      <Text as="div">Div element - Block text container</Text>\r
      <Text as="small" size="sm">Small element - Fine print and disclaimers</Text>\r
      <Text as="strong" weight="bold">Strong element - Important text</Text>\r
      <Text as="em" italic>Em element - Emphasized text</Text>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different HTML elements for proper semantic markup.'
      }
    }
  }
}`,...be.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-truncation">\r
      <div className="text-story-truncation-container">\r
        <h4>Single Line Truncation:</h4>\r
        <Text truncate>\r
          This is a very long text that will be truncated with an ellipsis when it exceeds the container width. Only one line will be shown.\r
        </Text>\r
      </div>\r
      \r
      <div className="text-story-truncation-container">\r
        <h4>2-Line Clamp:</h4>\r
        <Text lineClamp={2}>\r
          This is a longer text that demonstrates the line clamp feature. It will show exactly two lines before truncating with an ellipsis. This is useful for card layouts and previews where you want consistent heights.\r
        </Text>\r
      </div>\r
      \r
      <div className="text-story-truncation-container">\r
        <h4>3-Line Clamp:</h4>\r
        <Text lineClamp={3}>\r
          This is an even longer text that shows how the line clamp works with three lines. You can see that it maintains proper line spacing and truncates cleanly at the end of the third line. This is commonly used for article previews, product descriptions, and other content where you need to limit vertical space while showing more content than a single line would allow.\r
        </Text>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of text truncation using ellipsis and line clamping.'
      }
    }
  }
}`,...ve.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    children: 'Responsive text that scales down on smaller screens'
  },
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
        story: 'Extra large text that automatically scales down on smaller viewports. Use viewport controls to see the responsive behavior.'
      }
    }
  }
}`,...ye.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-theme-demo">\r
      <Text size="lg" weight="semibold" color="primary">\r
        Theme Integration Showcase\r
      </Text>\r
      \r
      <Text color="secondary">\r
        This text adapts to your selected theme. Switch between Dark, Light, and Custom themes using the toolbar to see how colors change automatically.\r
      </Text>\r
      \r
      <div className="text-story-color-grid">\r
        <Text color="primary">Primary</Text>\r
        <Text color="secondary">Secondary</Text>\r
        <Text color="muted">Muted</Text>\r
        <Text color="accent">Accent</Text>\r
        <Text color="success">Success</Text>\r
        <Text color="warning">Warning</Text>\r
        <Text color="error">Error</Text>\r
      </div>\r
      \r
      <div className="text-story-theme-info">\r
        <Text size="sm" weight="medium">Theme Variables Used:</Text>\r
        <Text size="xs" as="div" color="muted">\r
          <code>--color-text</code>, <code>--color-text-secondary</code>, \r
          <code>--color-text-muted</code>, <code>--color-accent</code>, \r
          <code>--color-success</code>, <code>--color-warning</code>, \r
          <code>--color-error</code>\r
        </Text>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how text colors adapt to different themes using CSS custom properties.'
      }
    }
  }
}`,...fe.parameters?.docs?.source}}};je.parameters={...je.parameters,docs:{...je.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-comprehensive">\r
      <div className="text-story-grid">\r
        <div className="text-story-grid-section">\r
          <h4>Size + Weight Combinations</h4>\r
          <Text size="xl" weight="bold" color="primary">XL Bold Primary</Text>\r
          <Text size="lg" weight="semibold" color="accent">Large Semibold Accent</Text>\r
          <Text size="base" weight="medium" color="secondary">Base Medium Secondary</Text>\r
          <Text size="sm" weight="normal" color="muted">Small Normal Muted</Text>\r
        </div>\r
        \r
        <div className="text-story-grid-section">\r
          <h4>Semantic Elements</h4>\r
          <Text as="strong" weight="bold" color="success">Strong Success</Text>\r
          <Text as="em" italic color="warning">Em Warning</Text>\r
          <Text as="small" size="xs" color="error">Small Error</Text>\r
          <Text as="span" underline color="accent">Span Underlined</Text>\r
        </div>\r
        \r
        <div className="text-story-grid-section">\r
          <h4>Style Combinations</h4>\r
          <Text weight="bold" italic color="primary">Bold Italic</Text>\r
          <Text underline strikethrough color="muted">Underline + Strike</Text>\r
          <Text size="lg" weight="semibold" italic color="accent">Large Semibold Italic</Text>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of text combinations across sizes, weights, colors, and styles.'
      }
    }
  }
}`,...je.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
    weight: 'normal',
    color: 'primary',
    align: 'left',
    as: 'p',
    children: 'Interactive text example - modify properties in the controls panel',
    italic: false,
    underline: false,
    strikethrough: false,
    truncate: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive story where you can modify all text properties using the controls panel below.'
      }
    }
  }
}`,...we.parameters?.docs?.source}}};const sr=["Default","SizeVariants","WeightVariants","ColorVariants","AlignmentVariants","StyleModifiers","SemanticElements","TruncationExamples","ResponsiveDemo","ThemeShowcase","AllCombinations","Interactive"],xr=Object.freeze(Object.defineProperty({__proto__:null,AlignmentVariants:ge,AllCombinations:je,ColorVariants:ue,Default:me,Interactive:we,ResponsiveDemo:ye,SemanticElements:be,SizeVariants:he,StyleModifiers:xe,ThemeShowcase:fe,TruncationExamples:ve,WeightVariants:pe,__namedExportsOrder:sr,default:ar},Symbol.toStringTag,{value:"Module"})),ir={title:"Atoms/TextInput",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Whether the input is disabled"},type:{control:{type:"select"},options:["text","email","password","number","tel","url"],description:"Input type"},value:{control:"text",description:"Input value"}}},ke={args:{placeholder:"Enter text..."}},Le={args:{value:"Sample text",placeholder:"Enter text..."}},Se={args:{type:"email",placeholder:"Enter your email..."}},Te={args:{type:"password",placeholder:"Enter your password..."}},Ne={args:{type:"number",placeholder:"Enter a number..."}},De={args:{type:"tel",placeholder:"Enter your phone number..."}},ze={args:{type:"url",placeholder:"Enter a URL..."}},Ee={args:{placeholder:"This input is disabled",disabled:!0}},He={args:{defaultValue:"Default value",placeholder:"This has a default value"}},Ce={render:r=>e.jsxs("div",{className:"input-demo",children:[e.jsx(n,{...r}),e.jsx("style",{children:`
          .input-demo {
            width: 300px;
          }
        `})]}),args:{placeholder:"Type something..."}},_e={render:()=>e.jsxs("form",{className:"form-example",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Name:"}),e.jsx(n,{placeholder:"Enter your name"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Email:"}),e.jsx(n,{type:"email",placeholder:"Enter your email"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Password:"}),e.jsx(n,{type:"password",placeholder:"Enter your password"})]}),e.jsx("style",{children:`
        .form-example {
          width: 300px;
        }
        .form-group {
          margin-bottom: 16px;
        }
        .form-group label {
          display: block;
          margin-bottom: 4px;
          font-weight: 500;
        }
      `})]})};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...ke.parameters?.docs?.source}}};Le.parameters={...Le.parameters,docs:{...Le.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Sample text',
    placeholder: 'Enter text...'
  }
}`,...Le.parameters?.docs?.source}}};Se.parameters={...Se.parameters,docs:{...Se.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'Enter your email...'
  }
}`,...Se.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter your password...'
  }
}`,...Te.parameters?.docs?.source}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: 'Enter a number...'
  }
}`,...Ne.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'tel',
    placeholder: 'Enter your phone number...'
  }
}`,...De.parameters?.docs?.source}}};ze.parameters={...ze.parameters,docs:{...ze.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'url',
    placeholder: 'Enter a URL...'
  }
}`,...ze.parameters?.docs?.source}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This input is disabled',
    disabled: true
  }
}`,...Ee.parameters?.docs?.source}}};He.parameters={...He.parameters,docs:{...He.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Default value',
    placeholder: 'This has a default value'
  }
}`,...He.parameters?.docs?.source}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="input-demo">\r
        <TextInput {...args} />\r
        <style>{\`
          .input-demo {
            width: 300px;
          }
        \`}</style>\r
      </div>;
  },
  args: {
    placeholder: 'Type something...'
  }
}`,...Ce.parameters?.docs?.source}}};_e.parameters={..._e.parameters,docs:{..._e.parameters?.docs,source:{originalSource:`{
  render: () => <form className="form-example">\r
      <div className="form-group">\r
        <label>Name:</label>\r
        <TextInput placeholder="Enter your name" />\r
      </div>\r
      <div className="form-group">\r
        <label>Email:</label>\r
        <TextInput type="email" placeholder="Enter your email" />\r
      </div>\r
      <div className="form-group">\r
        <label>Password:</label>\r
        <TextInput type="password" placeholder="Enter your password" />\r
      </div>\r
      <style>{\`
        .form-example {
          width: 300px;
        }
        .form-group {
          margin-bottom: 16px;
        }
        .form-group label {
          display: block;
          margin-bottom: 4px;
          font-weight: 500;
        }
      \`}</style>\r
    </form>
}`,..._e.parameters?.docs?.source}}};const nr=["Default","WithValue","Email","Password","Number","Phone","URL","Disabled","WithDefaultValue","Interactive","FormExample"],br=Object.freeze(Object.defineProperty({__proto__:null,Default:ke,Disabled:Ee,Email:Se,FormExample:_e,Interactive:Ce,Number:Ne,Password:Te,Phone:De,URL:ze,WithDefaultValue:He,WithValue:Le,__namedExportsOrder:nr,default:ir},Symbol.toStringTag,{value:"Module"}));export{mr as H,hr as I,pr as L,gr as T,ur as a,xr as b,br as c};
