import{j as e}from"./iframe-CdBaqdCg.js";import{B as a}from"./Button-B5OiHgR-.js";import{H as t}from"./Heading-D8nj_93E.js";import{C as o}from"./Container-DLLOoI4_.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Guides/Accessibility",parameters:{docs:{description:{component:"This guide showcases accessibility features and best practices for the component library. Use the Accessibility tab to see automated accessibility checks."}},a11y:{config:{rules:[{id:"color-contrast",enabled:!0},{id:"heading-order",enabled:!0},{id:"keyboard-navigation",enabled:!0}]}}}},r={render:()=>e.jsxs(o,{children:[e.jsx(t,{level:"h1",children:"Accessibility Guide"}),e.jsx("p",{children:"This page demonstrates accessible components and patterns:"}),e.jsx(t,{level:"h2",children:"Proper Heading Hierarchy"}),e.jsx("p",{children:"Headings should follow a logical order (h1, h2, h3, etc.)"}),e.jsx(t,{level:"h3",children:"Color Contrast"}),e.jsx("p",{children:"All text should have sufficient color contrast against its background."}),e.jsx(t,{level:"h3",children:"Interactive Elements"}),e.jsx("p",{children:"Buttons and links should be keyboard accessible and have proper focus states:"}),e.jsxs("div",{className:"button-group",children:[e.jsx(a,{variant:"primary",children:"Primary Button"}),e.jsx(a,{variant:"secondary",children:"Secondary Button"}),e.jsx(a,{variant:"ghost",children:"Ghost Button"})]}),e.jsx(t,{level:"h2",children:"Keyboard Navigation"}),e.jsx("p",{children:"Try using Tab, Shift+Tab, Enter, and Space to navigate through the components."})]}),parameters:{docs:{description:{story:"A collection of accessible components demonstrating best practices. Check the Accessibility tab for automated accessibility tests."}}}},s={render:()=>e.jsxs(o,{children:[e.jsx(t,{level:"h1",children:"Color Contrast Examples"}),e.jsxs("div",{className:"grid-layout",children:[e.jsxs("div",{children:[e.jsx(t,{level:"h2",children:"Good Contrast"}),e.jsx("div",{className:"contrast-example",children:"This text has good contrast against its background."})]}),e.jsxs("div",{children:[e.jsx(t,{level:"h2",children:"Button Variants"}),e.jsxs("div",{className:"button-group",children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"ghost",children:"Ghost"})]})]})]})]}),parameters:{docs:{description:{story:"Examples showing color contrast compliance across different themes and button variants."}}}},n={render:()=>e.jsxs(o,{children:[e.jsx(t,{level:"h1",children:"Keyboard Navigation Demo"}),e.jsx("p",{children:"Use Tab and Shift+Tab to navigate through these interactive elements:"}),e.jsxs("div",{className:"grid-layout",children:[e.jsxs("div",{children:[e.jsx(t,{level:"h2",children:"Form Elements"}),e.jsxs("div",{className:"form-group",children:[e.jsx("input",{type:"text",placeholder:"Text input",className:"form-input","aria-label":"Sample text input"}),e.jsxs("select",{className:"form-input","aria-label":"Sample select dropdown",title:"Choose an option",children:[e.jsx("option",{children:"Option 1"}),e.jsx("option",{children:"Option 2"}),e.jsx("option",{children:"Option 3"})]}),e.jsx("textarea",{placeholder:"Textarea",className:"form-textarea","aria-label":"Sample textarea"})]})]}),e.jsxs("div",{children:[e.jsx(t,{level:"h2",children:"Interactive Buttons"}),e.jsxs("div",{className:"button-group",children:[e.jsx(a,{onClick:()=>alert("Button 1 clicked!"),children:"Button 1"}),e.jsx(a,{onClick:()=>alert("Button 2 clicked!"),children:"Button 2"}),e.jsx(a,{onClick:()=>alert("Button 3 clicked!"),children:"Button 3"})]})]}),e.jsxs("div",{children:[e.jsx(t,{level:"h2",children:"Links"}),e.jsxs("div",{className:"link-group",children:[e.jsx("a",{href:"#",className:"demo-link",children:"Sample Link 1"}),e.jsx("a",{href:"#",className:"demo-link",children:"Sample Link 2"}),e.jsx("a",{href:"#",className:"demo-link",children:"Sample Link 3"})]})]})]})]}),parameters:{docs:{description:{story:"Interactive elements that demonstrate proper keyboard navigation. Tab through the elements to test focus management."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Container>\r
      <Heading level="h1">Accessibility Guide</Heading>\r
      <p>This page demonstrates accessible components and patterns:</p>\r
      \r
      <Heading level="h2">Proper Heading Hierarchy</Heading>\r
      <p>Headings should follow a logical order (h1, h2, h3, etc.)</p>\r
      \r
      <Heading level="h3">Color Contrast</Heading>\r
      <p>All text should have sufficient color contrast against its background.</p>\r
      \r
      <Heading level="h3">Interactive Elements</Heading>\r
      <p>Buttons and links should be keyboard accessible and have proper focus states:</p>\r
      \r
      <div className="button-group">\r
        <Button variant="primary">Primary Button</Button>\r
        <Button variant="secondary">Secondary Button</Button>\r
        <Button variant="ghost">Ghost Button</Button>\r
      </div>\r
      \r
      <Heading level="h2">Keyboard Navigation</Heading>\r
      <p>Try using Tab, Shift+Tab, Enter, and Space to navigate through the components.</p>\r
    </Container>,
  parameters: {
    docs: {
      description: {
        story: 'A collection of accessible components demonstrating best practices. Check the Accessibility tab for automated accessibility tests.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Container>\r
      <Heading level="h1">Color Contrast Examples</Heading>\r
      \r
      <div className="grid-layout">\r
        <div>\r
          <Heading level="h2">Good Contrast</Heading>\r
          <div className="contrast-example">\r
            This text has good contrast against its background.\r
          </div>\r
        </div>\r
        \r
        <div>\r
          <Heading level="h2">Button Variants</Heading>\r
          <div className="button-group">\r
            <Button variant="primary">Primary</Button>\r
            <Button variant="secondary">Secondary</Button>\r
            <Button variant="ghost">Ghost</Button>\r
          </div>\r
        </div>\r
      </div>\r
    </Container>,
  parameters: {
    docs: {
      description: {
        story: 'Examples showing color contrast compliance across different themes and button variants.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Container>\r
      <Heading level="h1">Keyboard Navigation Demo</Heading>\r
      <p>Use Tab and Shift+Tab to navigate through these interactive elements:</p>\r
      \r
      <div className="grid-layout">\r
        <div>\r
          <Heading level="h2">Form Elements</Heading>\r
          <div className="form-group">\r
            <input type="text" placeholder="Text input" className="form-input" aria-label="Sample text input" />\r
            <select className="form-input" aria-label="Sample select dropdown" title="Choose an option">\r
              <option>Option 1</option>\r
              <option>Option 2</option>\r
              <option>Option 3</option>\r
            </select>\r
            <textarea placeholder="Textarea" className="form-textarea" aria-label="Sample textarea" />\r
          </div>\r
        </div>\r
        \r
        <div>\r
          <Heading level="h2">Interactive Buttons</Heading>\r
          <div className="button-group">\r
            <Button onClick={() => alert('Button 1 clicked!')}>Button 1</Button>\r
            <Button onClick={() => alert('Button 2 clicked!')}>Button 2</Button>\r
            <Button onClick={() => alert('Button 3 clicked!')}>Button 3</Button>\r
          </div>\r
        </div>\r
        \r
        <div>\r
          <Heading level="h2">Links</Heading>\r
          <div className="link-group">\r
            <a href="#" className="demo-link">Sample Link 1</a>\r
            <a href="#" className="demo-link">Sample Link 2</a>\r
            <a href="#" className="demo-link">Sample Link 3</a>\r
          </div>\r
        </div>\r
      </div>\r
    </Container>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive elements that demonstrate proper keyboard navigation. Tab through the elements to test focus management.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const m=["AccessibleComponents","ColorContrastExamples","KeyboardNavigationDemo"];export{r as AccessibleComponents,s as ColorContrastExamples,n as KeyboardNavigationDemo,m as __namedExportsOrder,p as default};
