import{j as e}from"./iframe-C-Dpaqp0.js";import{T as r}from"./TextInput-CpV-8_ZP.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"Atoms/TextInput",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Whether the input is disabled"},type:{control:{type:"select"},options:["text","email","password","number","tel","url"],description:"Input type"},value:{control:"text",description:"Input value"}}},a={args:{placeholder:"Enter text..."}},s={args:{value:"Sample text",placeholder:"Enter text..."}},o={args:{type:"email",placeholder:"Enter your email..."}},t={args:{type:"password",placeholder:"Enter your password..."}},n={args:{type:"number",placeholder:"Enter a number..."}},l={args:{type:"tel",placeholder:"Enter your phone number..."}},p={args:{type:"url",placeholder:"Enter a URL..."}},c={args:{placeholder:"This input is disabled",disabled:!0}},d={args:{defaultValue:"Default value",placeholder:"This has a default value"}},m={render:i=>e.jsxs("div",{className:"input-demo",children:[e.jsx(r,{...i}),e.jsx("style",{children:`
          .input-demo {
            width: 300px;
          }
        `})]}),args:{placeholder:"Type something..."}},u={render:()=>e.jsxs("form",{className:"form-example",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Name:"}),e.jsx(r,{placeholder:"Enter your name"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Email:"}),e.jsx(r,{type:"email",placeholder:"Enter your email"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Password:"}),e.jsx(r,{type:"password",placeholder:"Enter your password"})]}),e.jsx("style",{children:`
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
      `})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Sample text',
    placeholder: 'Enter text...'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'Enter your email...'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter your password...'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: 'Enter a number...'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'tel',
    placeholder: 'Enter your phone number...'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'url',
    placeholder: 'Enter a URL...'
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This input is disabled',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Default value',
    placeholder: 'This has a default value'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const b=["Default","WithValue","Email","Password","Number","Phone","URL","Disabled","WithDefaultValue","Interactive","FormExample"];export{a as Default,c as Disabled,o as Email,u as FormExample,m as Interactive,n as Number,t as Password,l as Phone,p as URL,d as WithDefaultValue,s as WithValue,b as __namedExportsOrder,y as default};
