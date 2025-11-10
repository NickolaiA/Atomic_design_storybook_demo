import{j as e}from"./iframe-NKDFF6YA.js";import{H as l}from"./Header-Cp_foTGj.js";import"./preload-helper-PPVm8Dsz.js";import"./NavItem-BBGZtjWS.js";import"./Icon-9s2O_cvZ.js";import"./Text-CQWrSbgr.js";import"./SearchField-pHuChTnE.js";import"./TextInput-ru0E2_yX.js";import"./Button-GKrNatKZ.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,N={title:"Organisms/Header",component:l,parameters:{layout:"fullscreen"},argTypes:{onNavigate:{action:"navigated"},onSearch:{action:"searched"}},args:{onNavigate:h(),onSearch:h()}},a={parameters:{docs:{description:{story:"The default header with brand name, navigation items, and search field."}}}},s={args:{onNavigate:r=>{console.log("Navigating to:",r),alert(`Navigating to: ${r}`)},onSearch:r=>{console.log("Searching for:",r),alert(`Searching for: ${r}`)}},parameters:{docs:{description:{story:"Header with interactive callbacks that show alerts when navigation or search actions are triggered."}}}},t={args:{onNavigate:void 0,onSearch:void 0},parameters:{docs:{description:{story:"Header without any callback functions - demonstrates the component in a static state."}}}},o={args:{onNavigate:r=>{console.log(`Navigation event: ${r}`)},onSearch:r=>{console.log(`Search event: ${r}`)}},parameters:{docs:{description:{story:"Header that logs navigation and search events to the browser console. Open DevTools to see the logs."}}}},n={parameters:{layout:"fullscreen",docs:{description:{story:"Header displayed at full width to show how it behaves in a complete layout context."}}},decorators:[r=>e.jsxs("div",{className:"header-story-fullscreen",children:[e.jsx(r,{}),e.jsxs("div",{className:"header-story-content",children:[e.jsx("h1",{children:"Page Content"}),e.jsx("p",{children:"This demonstrates how the header looks as part of a full page layout."})]})]})]},i={parameters:{viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop",styles:{width:"1200px",height:"800px"}}}},docs:{description:{story:"Header shown at different viewport sizes. Use the viewport selector in the toolbar to test responsiveness."}}}},c={parameters:{docs:{description:{story:"Header component demonstrating how it adapts to different themes. Use the theme switcher in the toolbar to see it in Dark, Light, and Custom themes."}}},decorators:[r=>e.jsxs("div",{className:"header-story-theme-demo",children:[e.jsx(r,{}),e.jsxs("div",{className:"header-story-theme-info",children:[e.jsx("h3",{children:"Theme Variables in Use:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"--color-panel"}),": Header background"]}),e.jsxs("li",{children:[e.jsx("code",{children:"--color-text"}),": Text color"]}),e.jsxs("li",{children:[e.jsx("code",{children:"--radius"}),": Border radius"]})]})]})]})]},d={render:()=>e.jsxs("div",{className:"header-story-variants",children:[e.jsxs("div",{className:"header-story-variant-section",children:[e.jsx("h3",{children:"Default Header"}),e.jsx(l,{})]}),e.jsxs("div",{className:"header-story-variant-section",children:[e.jsx("h3",{children:"Interactive Header"}),e.jsx(l,{onNavigate:r=>console.log("Navigate:",r),onSearch:r=>console.log("Search:",r)})]}),e.jsxs("div",{className:"header-story-variant-section",children:[e.jsx("h3",{children:"Static Header (No Callbacks)"}),e.jsx(l,{onNavigate:void 0,onSearch:void 0})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:"A comprehensive view of all Header variants side by side for easy comparison."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The default header with brand name, navigation items, and search field.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const S=["Default","Interactive","WithoutCallbacks","LoggingActions","FullWidthDemo","ResponsiveDemo","ThemeShowcase","AllVariants"];export{d as AllVariants,a as Default,n as FullWidthDemo,s as Interactive,o as LoggingActions,i as ResponsiveDemo,c as ThemeShowcase,t as WithoutCallbacks,S as __namedExportsOrder,N as default};
