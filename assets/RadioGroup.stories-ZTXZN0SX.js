import{j as e,r as _}from"./iframe-BMIDd8Dz.js";import{a}from"./RadioGroup-pvgiCsJ6.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"Atoms/RadioGroup",component:a,parameters:{layout:"centered",docs:{description:{component:"A radio group component that manages a collection of radio buttons. Only one option can be selected at a time."}}},argTypes:{name:{control:"text",description:"The name attribute for the radio group"},options:{control:"object",description:"Array of radio options"},value:{control:"text",description:"Currently selected value (controlled)"},defaultValue:{control:"text",description:"Default selected value (uncontrolled)"},disabled:{control:"boolean",description:"Disable the entire group"},size:{control:"select",options:["small","medium","large"],description:"Size variant for all radio buttons"},variant:{control:"select",options:["primary","secondary"],description:"Style variant for all radio buttons"},orientation:{control:"select",options:["horizontal","vertical"],description:"Layout orientation"}}},o=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],r={args:{name:"default-group",options:o}},t={args:{name:"default-value-group",options:o,defaultValue:"option2"},parameters:{docs:{description:{story:"RadioGroup with a pre-selected default value."}}}},n={args:{name:"horizontal-group",options:o,orientation:"horizontal",defaultValue:"option1"},parameters:{docs:{description:{story:"RadioGroup with horizontal layout orientation."}}}},l={args:{name:"sizes-group",options:o},render:()=>e.jsxs("div",{className:"radiogroup-demo",children:[e.jsxs("div",{className:"radiogroup-demo__section",children:[e.jsx("h4",{className:"radiogroup-demo__title",children:"Small"}),e.jsx(a,{name:"size-small",options:o,size:"small",defaultValue:"option1"})]}),e.jsxs("div",{className:"radiogroup-demo__section",children:[e.jsx("h4",{className:"radiogroup-demo__title",children:"Medium (Default)"}),e.jsx(a,{name:"size-medium",options:o,size:"medium",defaultValue:"option2"})]}),e.jsxs("div",{className:"radiogroup-demo__section",children:[e.jsx("h4",{className:"radiogroup-demo__title",children:"Large"}),e.jsx(a,{name:"size-large",options:o,size:"large",defaultValue:"option3"})]})]}),parameters:{docs:{description:{story:"Different size variants of the radio group."}}}},s={args:{name:"variants-group",options:o},render:()=>e.jsxs("div",{className:"radiogroup-demo radiogroup-demo--horizontal",children:[e.jsxs("div",{className:"radiogroup-demo__section",children:[e.jsx("h4",{className:"radiogroup-demo__title",children:"Primary"}),e.jsx(a,{name:"variant-primary",options:o,variant:"primary",defaultValue:"option1"})]}),e.jsxs("div",{className:"radiogroup-demo__section",children:[e.jsx("h4",{className:"radiogroup-demo__title",children:"Secondary"}),e.jsx(a,{name:"variant-secondary",options:o,variant:"secondary",defaultValue:"option2"})]})]}),parameters:{docs:{description:{story:"Different visual variants of the radio group."}}}},i={args:{name:"disabled-options-group",options:[{value:"option1",label:"Available Option"},{value:"option2",label:"Disabled Option",disabled:!0},{value:"option3",label:"Another Available Option"},{value:"option4",label:"Another Disabled Option",disabled:!0}],defaultValue:"option1"},parameters:{docs:{description:{story:"RadioGroup with some options disabled individually."}}}},d={args:{name:"completely-disabled-group",options:o,disabled:!0,defaultValue:"option2"},parameters:{docs:{description:{story:"RadioGroup with all options disabled."}}}},p={args:{name:"complex-labels-group",options:[{value:"basic",label:"Basic Plan - $9.99/month"},{value:"pro",label:"Pro Plan - $19.99/month (Most Popular)"},{value:"enterprise",label:"Enterprise Plan - Contact Sales"}],defaultValue:"pro"},parameters:{docs:{description:{story:"RadioGroup with more complex label content."}}}},u={args:{name:"controlled-group",options:o},render:()=>{const[v,g]=_.useState("option2"),b=[{value:"option1",label:"React"},{value:"option2",label:"Vue"},{value:"option3",label:"Angular"},{value:"option4",label:"Svelte"}];return e.jsxs("div",{className:"radiogroup-controlled",children:[e.jsx("div",{className:"radiogroup-controlled__section",children:e.jsx(a,{name:"controlled-group",options:b,value:v,onChange:h=>g(h)})}),e.jsxs("div",{className:"radiogroup-controlled__info",children:["Selected framework: ",e.jsx("strong",{children:v})]}),e.jsxs("div",{className:"radiogroup-controlled__buttons",children:[e.jsx("button",{onClick:()=>g("option1"),className:"radiogroup-controlled__button radiogroup-controlled__button--primary",children:"Select React"}),e.jsx("button",{onClick:()=>g(""),className:"radiogroup-controlled__button radiogroup-controlled__button--secondary",children:"Clear Selection"})]})]})},parameters:{docs:{description:{story:"Controlled radio group with external state management."}}}},c={args:{name:"long-list-group",options:[{value:"js",label:"JavaScript"},{value:"ts",label:"TypeScript"},{value:"py",label:"Python"},{value:"java",label:"Java"},{value:"cs",label:"C#"},{value:"cpp",label:"C++"},{value:"go",label:"Go"},{value:"rust",label:"Rust"},{value:"swift",label:"Swift"},{value:"kt",label:"Kotlin"}],defaultValue:"ts"},parameters:{docs:{description:{story:"RadioGroup with many options to test scrolling and layout."}}}},m={args:{name:"horizontal-wrap-group",options:[{value:"xs",label:"Extra Small"},{value:"sm",label:"Small"},{value:"md",label:"Medium"},{value:"lg",label:"Large"},{value:"xl",label:"Extra Large"},{value:"xxl",label:"Double Extra Large"}],orientation:"horizontal",defaultValue:"md"},parameters:{docs:{description:{story:"Horizontal radio group that demonstrates wrapping behavior."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'default-group',
    options: basicOptions
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'default-value-group',
    options: basicOptions,
    defaultValue: 'option2'
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup with a pre-selected default value.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'horizontal-group',
    options: basicOptions,
    orientation: 'horizontal',
    defaultValue: 'option1'
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup with horizontal layout orientation.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'sizes-group',
    options: basicOptions
  },
  render: () => <div className="radiogroup-demo">\r
      <div className="radiogroup-demo__section">\r
        <h4 className="radiogroup-demo__title">Small</h4>\r
        <RadioGroup name="size-small" options={basicOptions} size="small" defaultValue="option1" />\r
      </div>\r
      \r
      <div className="radiogroup-demo__section">\r
        <h4 className="radiogroup-demo__title">Medium (Default)</h4>\r
        <RadioGroup name="size-medium" options={basicOptions} size="medium" defaultValue="option2" />\r
      </div>\r
      \r
      <div className="radiogroup-demo__section">\r
        <h4 className="radiogroup-demo__title">Large</h4>\r
        <RadioGroup name="size-large" options={basicOptions} size="large" defaultValue="option3" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the radio group.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'variants-group',
    options: basicOptions
  },
  render: () => <div className="radiogroup-demo radiogroup-demo--horizontal">\r
      <div className="radiogroup-demo__section">\r
        <h4 className="radiogroup-demo__title">Primary</h4>\r
        <RadioGroup name="variant-primary" options={basicOptions} variant="primary" defaultValue="option1" />\r
      </div>\r
      \r
      <div className="radiogroup-demo__section">\r
        <h4 className="radiogroup-demo__title">Secondary</h4>\r
        <RadioGroup name="variant-secondary" options={basicOptions} variant="secondary" defaultValue="option2" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the radio group.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabled-options-group',
    options: [{
      value: 'option1',
      label: 'Available Option'
    }, {
      value: 'option2',
      label: 'Disabled Option',
      disabled: true
    }, {
      value: 'option3',
      label: 'Another Available Option'
    }, {
      value: 'option4',
      label: 'Another Disabled Option',
      disabled: true
    }],
    defaultValue: 'option1'
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup with some options disabled individually.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'completely-disabled-group',
    options: basicOptions,
    disabled: true,
    defaultValue: 'option2'
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup with all options disabled.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'complex-labels-group',
    options: [{
      value: 'basic',
      label: 'Basic Plan - $9.99/month'
    }, {
      value: 'pro',
      label: 'Pro Plan - $19.99/month (Most Popular)'
    }, {
      value: 'enterprise',
      label: 'Enterprise Plan - Contact Sales'
    }],
    defaultValue: 'pro'
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup with more complex label content.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'controlled-group',
    options: basicOptions
  },
  render: () => {
    const [selectedValue, setSelectedValue] = useState('option2');
    const options = [{
      value: 'option1',
      label: 'React'
    }, {
      value: 'option2',
      label: 'Vue'
    }, {
      value: 'option3',
      label: 'Angular'
    }, {
      value: 'option4',
      label: 'Svelte'
    }];
    return <div className="radiogroup-controlled">\r
        <div className="radiogroup-controlled__section">\r
          <RadioGroup name="controlled-group" options={options} value={selectedValue} onChange={value => setSelectedValue(value)} />\r
        </div>\r
        \r
        <div className="radiogroup-controlled__info">\r
          Selected framework: <strong>{selectedValue}</strong>\r
        </div>\r
        \r
        <div className="radiogroup-controlled__buttons">\r
          <button onClick={() => setSelectedValue('option1')} className="radiogroup-controlled__button radiogroup-controlled__button--primary">\r
            Select React\r
          </button>\r
          <button onClick={() => setSelectedValue('')} className="radiogroup-controlled__button radiogroup-controlled__button--secondary">\r
            Clear Selection\r
          </button>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled radio group with external state management.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'long-list-group',
    options: [{
      value: 'js',
      label: 'JavaScript'
    }, {
      value: 'ts',
      label: 'TypeScript'
    }, {
      value: 'py',
      label: 'Python'
    }, {
      value: 'java',
      label: 'Java'
    }, {
      value: 'cs',
      label: 'C#'
    }, {
      value: 'cpp',
      label: 'C++'
    }, {
      value: 'go',
      label: 'Go'
    }, {
      value: 'rust',
      label: 'Rust'
    }, {
      value: 'swift',
      label: 'Swift'
    }, {
      value: 'kt',
      label: 'Kotlin'
    }],
    defaultValue: 'ts'
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup with many options to test scrolling and layout.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'horizontal-wrap-group',
    options: [{
      value: 'xs',
      label: 'Extra Small'
    }, {
      value: 'sm',
      label: 'Small'
    }, {
      value: 'md',
      label: 'Medium'
    }, {
      value: 'lg',
      label: 'Large'
    }, {
      value: 'xl',
      label: 'Extra Large'
    }, {
      value: 'xxl',
      label: 'Double Extra Large'
    }],
    orientation: 'horizontal',
    defaultValue: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Horizontal radio group that demonstrates wrapping behavior.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const V=["Default","WithDefaultValue","Horizontal","Sizes","Variants","WithDisabledOptions","CompletelyDisabled","WithComplexLabels","Controlled","LongOptionsList","HorizontalWrap"];export{d as CompletelyDisabled,u as Controlled,r as Default,n as Horizontal,m as HorizontalWrap,c as LongOptionsList,l as Sizes,s as Variants,p as WithComplexLabels,t as WithDefaultValue,i as WithDisabledOptions,V as __namedExportsOrder,S as default};
