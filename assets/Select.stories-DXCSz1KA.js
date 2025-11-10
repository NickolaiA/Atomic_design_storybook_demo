import{j as e,R as w}from"./iframe-C-Dpaqp0.js";import{S as s}from"./Select-DtIiyyBy.js";import{L as l}from"./Label-a-p-qo0V.js";import"./preload-helper-PPVm8Dsz.js";const{fn:L}=__STORYBOOK_MODULE_TEST__,r=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],a=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"uk",label:"United Kingdom"},{value:"fr",label:"France"},{value:"de",label:"Germany"},{value:"jp",label:"Japan"},{value:"au",label:"Australia"},{value:"br",label:"Brazil"},{value:"in",label:"India"},{value:"cn",label:"China"}],g=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"},{value:"pending",label:"Pending"},{value:"suspended",label:"Suspended",disabled:!0},{value:"archived",label:"Archived"}],T={title:"Atoms/Select",component:s,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size variant"},options:{control:"object",description:"Array of options"},value:{control:"text",description:"Selected value"},disabled:{control:"boolean",description:"Disabled state"},required:{control:"boolean",description:"Required field validation"},placeholder:{control:"text",description:"Placeholder text"},searchable:{control:"boolean",description:"Enable search functionality"},multiple:{control:"boolean",description:"Allow multiple selections"},maxSelections:{control:"number",description:"Maximum selections (for multiple)"},onChange:{action:"changed"},onFocus:{action:"focused"},onBlur:{action:"blurred"}},args:{onChange:L(),onFocus:L(),onBlur:L(),options:r}},n={args:{placeholder:"Select a fruit..."},parameters:{docs:{description:{story:"Default select dropdown with basic options."}}}},p={render:()=>e.jsxs("div",{className:"select-story-section",children:[e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Small Select"}),e.jsx(s,{size:"sm",options:r,placeholder:"Small select..."})]})}),e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Medium Select (Default)"}),e.jsx(s,{size:"md",options:r,placeholder:"Medium select..."})]})}),e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Large Select"}),e.jsx(s,{size:"lg",options:r,placeholder:"Large select..."})]})})]}),parameters:{docs:{description:{story:"Different size variants for various UI contexts."}}}},h={render:()=>e.jsxs("div",{className:"select-story-form",children:[e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{htmlFor:"fruit-select",children:"Choose your favorite fruit"}),e.jsx(s,{id:"fruit-select",options:r,placeholder:"Select a fruit..."})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{htmlFor:"country-select",children:"Select your country"}),e.jsx(s,{id:"country-select",options:a,placeholder:"Choose country...",value:"us"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{htmlFor:"status-select",required:!0,children:"Account Status"}),e.jsx(s,{id:"status-select",options:g,placeholder:"Select status...",required:!0})]})]}),parameters:{docs:{description:{story:"Select components properly associated with labels using htmlFor."}}}},m={render:()=>e.jsx("div",{className:"select-story-section",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{htmlFor:"searchable-select",children:"Searchable Country Select"}),e.jsx(s,{id:"searchable-select",options:a,placeholder:"Search and select country...",searchable:!0,searchPlaceholder:"Type to search countries..."})]})}),parameters:{docs:{description:{story:"Select with search functionality to filter through options."}}}},A=()=>{const[t,o]=w.useState(["apple","cherry"]),i=c=>{const d=c.target.value.split(",").filter(Boolean);o(d)};return e.jsx("div",{className:"select-story-section",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{htmlFor:"multiple-select",children:"Select Multiple Fruits"}),e.jsx(s,{id:"multiple-select",options:r,placeholder:"Select fruits...",multiple:!0,value:t.join(","),onChange:i}),e.jsxs("div",{className:"select-story-selected-values",children:[e.jsx("strong",{children:"Selected:"})," ",t.length>0?t.join(", "):"None"]})]})})},u={render:()=>e.jsx(A,{}),parameters:{docs:{description:{story:"Select component with multiple selection support. Shows checkboxes and selected count."}}}},D=()=>{const[t,o]=w.useState(["us","ca","uk"]),i=c=>{const d=c.target.value.split(",").filter(Boolean);o(d)};return e.jsx("div",{className:"select-story-section",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{htmlFor:"searchable-multiple",children:"Select Countries (Max 5)"}),e.jsx(s,{id:"searchable-multiple",options:a,placeholder:"Search and select countries...",multiple:!0,searchable:!0,maxSelections:5,value:t.join(","),onChange:i,searchPlaceholder:"Type to search countries..."}),e.jsxs("div",{className:"select-story-selected-values",children:[e.jsxs("strong",{children:["Selected (",t.length,"/5):"]})," ",t.length>0?t.map(c=>a.find(d=>d.value===c)?.label).join(", "):"None"]})]})})},v={render:()=>e.jsx(D,{}),parameters:{docs:{description:{story:"Advanced select with both search and multiple selection features, including selection limit."}}}},b={render:()=>e.jsxs("div",{className:"select-story-section",children:[e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Disabled Select"}),e.jsx(s,{options:r,placeholder:"Disabled select...",disabled:!0})]})}),e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Select with Disabled Options"}),e.jsx(s,{options:g,placeholder:"Some options disabled..."})]})}),e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Disabled with Value"}),e.jsx(s,{options:r,value:"banana",disabled:!0})]})})]}),parameters:{docs:{description:{story:"Select components in disabled states, both component-level and option-level."}}}},y={render:()=>e.jsx("form",{className:"select-story-form-demo",children:e.jsxs("fieldset",{className:"select-story-fieldset",children:[e.jsx("legend",{children:"User Preferences"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{htmlFor:"language-select",required:!0,children:"Preferred Language"}),e.jsx(s,{id:"language-select",name:"language",options:[{value:"en",label:"English"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"de",label:"German"},{value:"zh",label:"Chinese"}],placeholder:"Select language...",required:!0,value:"en"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{htmlFor:"timezone-select",children:"Timezone"}),e.jsx(s,{id:"timezone-select",name:"timezone",options:[{value:"utc",label:"UTC"},{value:"est",label:"Eastern Time"},{value:"cst",label:"Central Time"},{value:"mst",label:"Mountain Time"},{value:"pst",label:"Pacific Time"}],placeholder:"Select timezone...",searchable:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{htmlFor:"interests-select",children:"Interests (Multiple)"}),e.jsx(s,{id:"interests-select",name:"interests",options:[{value:"tech",label:"Technology"},{value:"design",label:"Design"},{value:"business",label:"Business"},{value:"science",label:"Science"},{value:"sports",label:"Sports"},{value:"music",label:"Music"},{value:"art",label:"Art"}],placeholder:"Select interests...",multiple:!0,searchable:!0,maxSelections:3})]})]})}),parameters:{docs:{description:{story:"Select components in a complete form context with fieldsets, legends, and proper form submission attributes."}}}},x={render:()=>e.jsxs("div",{className:"select-story-accessibility",children:[e.jsxs("div",{className:"select-story-section",children:[e.jsx("h4",{children:"ARIA Labels and Descriptions"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(s,{id:"aria-select",options:r,placeholder:"Select with ARIA support...","aria-label":"Fruit selection with ARIA support","aria-describedby":"fruit-help"}),e.jsx("div",{id:"fruit-help",className:"select-story-help-text",children:"This select includes comprehensive ARIA labeling for screen readers."})]})]}),e.jsxs("div",{className:"select-story-section",children:[e.jsx("h4",{children:"Keyboard Navigation"}),e.jsx("p",{className:"select-story-instructions",children:"Use Tab to focus, Arrow Keys to navigate, Enter to select, Escape to close."}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{htmlFor:"keyboard-demo",children:"Keyboard Navigation Demo"}),e.jsx(s,{id:"keyboard-demo",options:a,placeholder:"Use keyboard to navigate...",searchable:!0})]})]}),e.jsxs("div",{className:"select-story-section",children:[e.jsx("h4",{children:"Screen Reader Announcements"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{htmlFor:"screen-reader-demo",children:"Screen Reader Optimized"}),e.jsx(s,{id:"screen-reader-demo",options:g,placeholder:"Optimized for screen readers...","aria-describedby":"screen-reader-help"}),e.jsx("div",{id:"screen-reader-help",className:"select-story-help-text",children:"This select announces selection changes and state updates to screen readers."})]})]})]}),parameters:{docs:{description:{story:"Accessibility features including ARIA labels, descriptions, and keyboard navigation."}}}},S={render:()=>e.jsxs("div",{className:"select-story-theme-demo",children:[e.jsxs("div",{className:"select-story-theme-section",children:[e.jsx("h3",{children:"Theme Adaptive Select Components"}),e.jsxs("div",{className:"select-story-theme-row",children:[e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Small Size"}),e.jsx(s,{size:"sm",options:r,placeholder:"Small select...",value:"apple"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Medium Size"}),e.jsx(s,{options:r,placeholder:"Medium select...",value:"banana"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Large Size"}),e.jsx(s,{size:"lg",options:r,placeholder:"Large select...",value:"cherry"})]})]}),e.jsxs("div",{className:"select-story-theme-row",children:[e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Searchable"}),e.jsx(s,{options:a,placeholder:"Search countries...",searchable:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Multiple Selection"}),e.jsx(s,{options:r,placeholder:"Multiple fruits...",multiple:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Disabled State"}),e.jsx(s,{options:r,value:"date",disabled:!0})]})]})]}),e.jsxs("div",{className:"select-story-theme-info",children:[e.jsx("h4",{children:"Theme Variables Used:"}),e.jsxs("div",{className:"select-story-theme-vars",children:[e.jsx("code",{children:"--color-accent"}),": Border focus and selection background",e.jsx("br",{}),e.jsx("code",{children:"--color-accent-hover"}),": Hover state colors",e.jsx("br",{}),e.jsx("code",{children:"--color-border"}),": Default border color",e.jsx("br",{}),e.jsx("code",{children:"--color-bg"}),": Background color",e.jsx("br",{}),e.jsx("code",{children:"--color-panel"}),": Hover background",e.jsx("br",{}),e.jsx("code",{children:"--color-text"}),": Main text color",e.jsx("br",{}),e.jsx("code",{children:"--color-text-secondary"}),": Arrow and secondary text",e.jsx("br",{}),e.jsx("code",{children:"--color-text-muted"}),": Placeholder and disabled text"]})]})]}),parameters:{docs:{description:{story:"Select components that adapt to different themes. Use the theme switcher in the toolbar to see color changes."}}}},f={render:()=>e.jsx("div",{className:"select-story-comprehensive",children:e.jsxs("div",{className:"select-story-grid",children:[e.jsxs("div",{className:"select-story-grid-section",children:[e.jsx("h4",{children:"Basic Selects"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Simple Select"}),e.jsx(s,{options:r,placeholder:"Choose..."})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"With Value"}),e.jsx(s,{options:r,value:"banana"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Required"}),e.jsx(s,{options:r,placeholder:"Required...",required:!0})]})]}),e.jsxs("div",{className:"select-story-grid-section",children:[e.jsx("h4",{children:"Advanced Features"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Searchable"}),e.jsx(s,{options:a,placeholder:"Search...",searchable:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Multiple"}),e.jsx(s,{options:r,placeholder:"Multiple...",multiple:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Search + Multiple"}),e.jsx(s,{options:a,placeholder:"Both...",searchable:!0,multiple:!0})]})]}),e.jsxs("div",{className:"select-story-grid-section",children:[e.jsx("h4",{children:"States"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Disabled"}),e.jsx(s,{options:r,placeholder:"Disabled...",disabled:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"With Disabled Options"}),e.jsx(s,{options:g,placeholder:"Some disabled..."})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{children:"Max Selections"}),e.jsx(s,{options:r,placeholder:"Max 2...",multiple:!0,maxSelections:2})]})]})]})}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of all select features and variations."}}}},O=()=>{const[t,o]=w.useState(""),i=c=>{o(c.target.value)};return e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{htmlFor:"controlled-select",children:"Controlled Select"}),e.jsx(s,{id:"controlled-select",options:r,value:t,onChange:i,placeholder:"Select a fruit..."}),e.jsxs("div",{className:"select-story-selected-values",children:[e.jsx("strong",{children:"Current Value:"})," ",t||"None"]})]})},j={render:()=>e.jsx(O,{}),parameters:{docs:{description:{story:"Controlled select component with external state management."}}}},N={args:{size:"md",options:r,placeholder:"Interactive select...",disabled:!1,required:!1,searchable:!1,multiple:!1},render:t=>e.jsxs("div",{className:"select-story-field",children:[e.jsx(l,{htmlFor:"interactive-select",children:"Interactive Select"}),e.jsx(s,{...t,id:"interactive-select"})]}),parameters:{docs:{description:{story:"Interactive story where you can modify all select properties using the controls panel. Note: This is uncontrolled, so selections will work properly."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a fruit...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default select dropdown with basic options.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="select-story-section">\r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Small Select</Label>\r
          <Select size="sm" options={basicOptions} placeholder="Small select..." />\r
        </div>\r
      </div>\r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Medium Select (Default)</Label>\r
          <Select size="md" options={basicOptions} placeholder="Medium select..." />\r
        </div>\r
      </div>\r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Large Select</Label>\r
          <Select size="lg" options={basicOptions} placeholder="Large select..." />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different size variants for various UI contexts.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="select-story-form">\r
      <div className="select-story-field">\r
        <Label htmlFor="fruit-select">Choose your favorite fruit</Label>\r
        <Select id="fruit-select" options={basicOptions} placeholder="Select a fruit..." />\r
      </div>\r
      \r
      <div className="select-story-field">\r
        <Label htmlFor="country-select">Select your country</Label>\r
        <Select id="country-select" options={countryOptions} placeholder="Choose country..." value="us" />\r
      </div>\r
      \r
      <div className="select-story-field">\r
        <Label htmlFor="status-select" required>Account Status</Label>\r
        <Select id="status-select" options={statusOptions} placeholder="Select status..." required />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Select components properly associated with labels using htmlFor.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="select-story-section">\r
      <div className="select-story-field">\r
        <Label htmlFor="searchable-select">Searchable Country Select</Label>\r
        <Select id="searchable-select" options={countryOptions} placeholder="Search and select country..." searchable searchPlaceholder="Type to search countries..." />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Select with search functionality to filter through options.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <MultipleSelectDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Select component with multiple selection support. Shows checkboxes and selected count.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <SearchableMultipleDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Advanced select with both search and multiple selection features, including selection limit.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="select-story-section">\r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Disabled Select</Label>\r
          <Select options={basicOptions} placeholder="Disabled select..." disabled />\r
        </div>\r
      </div>\r
      \r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Select with Disabled Options</Label>\r
          <Select options={statusOptions} placeholder="Some options disabled..." />\r
        </div>\r
      </div>\r
      \r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Disabled with Value</Label>\r
          <Select options={basicOptions} value="banana" disabled />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Select components in disabled states, both component-level and option-level.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <form className="select-story-form-demo">\r
      <fieldset className="select-story-fieldset">\r
        <legend>User Preferences</legend>\r
        \r
        <div className="select-story-field">\r
          <Label htmlFor="language-select" required>Preferred Language</Label>\r
          <Select id="language-select" name="language" options={[{
          value: 'en',
          label: 'English'
        }, {
          value: 'es',
          label: 'Spanish'
        }, {
          value: 'fr',
          label: 'French'
        }, {
          value: 'de',
          label: 'German'
        }, {
          value: 'zh',
          label: 'Chinese'
        }]} placeholder="Select language..." required value="en" />\r
        </div>\r
        \r
        <div className="select-story-field">\r
          <Label htmlFor="timezone-select">Timezone</Label>\r
          <Select id="timezone-select" name="timezone" options={[{
          value: 'utc',
          label: 'UTC'
        }, {
          value: 'est',
          label: 'Eastern Time'
        }, {
          value: 'cst',
          label: 'Central Time'
        }, {
          value: 'mst',
          label: 'Mountain Time'
        }, {
          value: 'pst',
          label: 'Pacific Time'
        }]} placeholder="Select timezone..." searchable />\r
        </div>\r
        \r
        <div className="select-story-field">\r
          <Label htmlFor="interests-select">Interests (Multiple)</Label>\r
          <Select id="interests-select" name="interests" options={[{
          value: 'tech',
          label: 'Technology'
        }, {
          value: 'design',
          label: 'Design'
        }, {
          value: 'business',
          label: 'Business'
        }, {
          value: 'science',
          label: 'Science'
        }, {
          value: 'sports',
          label: 'Sports'
        }, {
          value: 'music',
          label: 'Music'
        }, {
          value: 'art',
          label: 'Art'
        }]} placeholder="Select interests..." multiple searchable maxSelections={3} />\r
        </div>\r
      </fieldset>\r
    </form>,
  parameters: {
    docs: {
      description: {
        story: 'Select components in a complete form context with fieldsets, legends, and proper form submission attributes.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="select-story-accessibility">\r
      <div className="select-story-section">\r
        <h4>ARIA Labels and Descriptions</h4>\r
        <div className="select-story-field">\r
          <Select id="aria-select" options={basicOptions} placeholder="Select with ARIA support..." aria-label="Fruit selection with ARIA support" aria-describedby="fruit-help" />\r
          <div id="fruit-help" className="select-story-help-text">\r
            This select includes comprehensive ARIA labeling for screen readers.\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="select-story-section">\r
        <h4>Keyboard Navigation</h4>\r
        <p className="select-story-instructions">\r
          Use Tab to focus, Arrow Keys to navigate, Enter to select, Escape to close.\r
        </p>\r
        <div className="select-story-field">\r
          <Label htmlFor="keyboard-demo">Keyboard Navigation Demo</Label>\r
          <Select id="keyboard-demo" options={countryOptions} placeholder="Use keyboard to navigate..." searchable />\r
        </div>\r
      </div>\r
      \r
      <div className="select-story-section">\r
        <h4>Screen Reader Announcements</h4>\r
        <div className="select-story-field">\r
          <Label htmlFor="screen-reader-demo">Screen Reader Optimized</Label>\r
          <Select id="screen-reader-demo" options={statusOptions} placeholder="Optimized for screen readers..." aria-describedby="screen-reader-help" />\r
          <div id="screen-reader-help" className="select-story-help-text">\r
            This select announces selection changes and state updates to screen readers.\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including ARIA labels, descriptions, and keyboard navigation.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="select-story-theme-demo">\r
      <div className="select-story-theme-section">\r
        <h3>Theme Adaptive Select Components</h3>\r
        \r
        <div className="select-story-theme-row">\r
          <div className="select-story-field">\r
            <Label>Small Size</Label>\r
            <Select size="sm" options={basicOptions} placeholder="Small select..." value="apple" />\r
          </div>\r
          \r
          <div className="select-story-field">\r
            <Label>Medium Size</Label>\r
            <Select options={basicOptions} placeholder="Medium select..." value="banana" />\r
          </div>\r
          \r
          <div className="select-story-field">\r
            <Label>Large Size</Label>\r
            <Select size="lg" options={basicOptions} placeholder="Large select..." value="cherry" />\r
          </div>\r
        </div>\r
        \r
        <div className="select-story-theme-row">\r
          <div className="select-story-field">\r
            <Label>Searchable</Label>\r
            <Select options={countryOptions} placeholder="Search countries..." searchable />\r
          </div>\r
          \r
          <div className="select-story-field">\r
            <Label>Multiple Selection</Label>\r
            <Select options={basicOptions} placeholder="Multiple fruits..." multiple />\r
          </div>\r
          \r
          <div className="select-story-field">\r
            <Label>Disabled State</Label>\r
            <Select options={basicOptions} value="date" disabled />\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="select-story-theme-info">\r
        <h4>Theme Variables Used:</h4>\r
        <div className="select-story-theme-vars">\r
          <code>--color-accent</code>: Border focus and selection background<br />\r
          <code>--color-accent-hover</code>: Hover state colors<br />\r
          <code>--color-border</code>: Default border color<br />\r
          <code>--color-bg</code>: Background color<br />\r
          <code>--color-panel</code>: Hover background<br />\r
          <code>--color-text</code>: Main text color<br />\r
          <code>--color-text-secondary</code>: Arrow and secondary text<br />\r
          <code>--color-text-muted</code>: Placeholder and disabled text\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Select components that adapt to different themes. Use the theme switcher in the toolbar to see color changes.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="select-story-comprehensive">\r
      <div className="select-story-grid">\r
        <div className="select-story-grid-section">\r
          <h4>Basic Selects</h4>\r
          <div className="select-story-field">\r
            <Label>Simple Select</Label>\r
            <Select options={basicOptions} placeholder="Choose..." />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>With Value</Label>\r
            <Select options={basicOptions} value="banana" />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>Required</Label>\r
            <Select options={basicOptions} placeholder="Required..." required />\r
          </div>\r
        </div>\r
        \r
        <div className="select-story-grid-section">\r
          <h4>Advanced Features</h4>\r
          <div className="select-story-field">\r
            <Label>Searchable</Label>\r
            <Select options={countryOptions} placeholder="Search..." searchable />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>Multiple</Label>\r
            <Select options={basicOptions} placeholder="Multiple..." multiple />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>Search + Multiple</Label>\r
            <Select options={countryOptions} placeholder="Both..." searchable multiple />\r
          </div>\r
        </div>\r
        \r
        <div className="select-story-grid-section">\r
          <h4>States</h4>\r
          <div className="select-story-field">\r
            <Label>Disabled</Label>\r
            <Select options={basicOptions} placeholder="Disabled..." disabled />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>With Disabled Options</Label>\r
            <Select options={statusOptions} placeholder="Some disabled..." />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>Max Selections</Label>\r
            <Select options={basicOptions} placeholder="Max 2..." multiple maxSelections={2} />\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of all select features and variations.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledSelectDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Controlled select component with external state management.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    options: basicOptions,
    placeholder: 'Interactive select...',
    disabled: false,
    required: false,
    searchable: false,
    multiple: false
  },
  render: args => <div className="select-story-field">\r
      <Label htmlFor="interactive-select">Interactive Select</Label>\r
      <Select {...args} id="interactive-select" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive story where you can modify all select properties using the controls panel. Note: This is uncontrolled, so selections will work properly.'
      }
    }
  }
}`,...N.parameters?.docs?.source}}};const I=["Default","SizeVariants","WithLabels","SearchableSelect","MultipleSelection","SearchableMultiple","DisabledStates","FormIntegration","AccessibilityDemo","ThemeShowcase","AllFeatures","Controlled","Interactive"];export{x as AccessibilityDemo,f as AllFeatures,j as Controlled,n as Default,b as DisabledStates,y as FormIntegration,N as Interactive,u as MultipleSelection,v as SearchableMultiple,m as SearchableSelect,p as SizeVariants,S as ThemeShowcase,h as WithLabels,I as __namedExportsOrder,T as default};
