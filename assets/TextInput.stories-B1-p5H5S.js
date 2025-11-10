import{j as e,r as o}from"./iframe-BMIDd8Dz.js";import{T as r}from"./TextInput-BzWkoopA.js";import"./preload-helper-PPVm8Dsz.js";const M={title:"Atoms/TextInput",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Whether the input is disabled"},type:{control:{type:"select"},options:["text","email","password","number","tel","url"],description:"Input type"},value:{control:"text",description:"Input value"},allowClear:{control:"boolean",description:"Show clear button to clear input value"},prefixIcon:{control:!1,description:"Icon element to show at the start of the input"},prefixIconOpacity:{control:{type:"range",min:0,max:1,step:.1},description:"Opacity of the prefix icon (0-1)"},clearButtonOpacity:{control:{type:"range",min:0,max:1,step:.1},description:"Opacity of the clear button (0-1)"}}},d={args:{placeholder:"Enter text..."}},x={args:{value:"Sample text",placeholder:"Enter text..."}},m={args:{type:"email",placeholder:"Enter your email..."}},h={args:{type:"password",placeholder:"Enter your password..."}},g={args:{type:"number",placeholder:"Enter a number..."}},y={args:{type:"tel",placeholder:"Enter your phone number..."}},v={args:{type:"url",placeholder:"Enter a URL..."}},f={args:{placeholder:"This input is disabled",disabled:!0}},C={args:{defaultValue:"Default value",placeholder:"This has a default value"}},S={render:t=>e.jsxs("div",{className:"input-demo",children:[e.jsx(r,{...t}),e.jsx("style",{children:`
          .input-demo {
            width: 300px;
          }
        `})]}),args:{placeholder:"Type something..."}},I={render:()=>e.jsxs("form",{className:"form-example",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Name:"}),e.jsx(r,{placeholder:"Enter your name"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Email:"}),e.jsx(r,{type:"email",placeholder:"Enter your email"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Password:"}),e.jsx(r,{type:"password",placeholder:"Enter your password"})]}),e.jsx("style",{children:`
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
      `})]})},s=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M14 14L10.5 10.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),O=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M2 16C2 12.6863 4.68629 10 8 10C11.3137 10 14 12.6863 14 16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),B=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2 4L8 8L14 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("rect",{x:"1",y:"3",width:"14",height:"10",rx:"2",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),b={render:()=>{const[t,a]=o.useState("Sample text");return e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{value:t,onChange:n=>a(n.target.value),onClear:()=>a(""),placeholder:"Type something...",allowClear:!0})})}},w={render:()=>e.jsxs("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{placeholder:"Search...",prefixIcon:e.jsx(s,{})}),e.jsx(r,{placeholder:"Enter your name",prefixIcon:e.jsx(O,{})}),e.jsx(r,{type:"email",placeholder:"Enter your email",prefixIcon:e.jsx(B,{})})]})},j={render:()=>{const[t,a]=o.useState("Search query with both features");return e.jsxs("div",{style:{width:"300px"},children:[e.jsx(r,{value:t,onChange:n=>a(n.target.value),onClear:()=>a(""),placeholder:"Search with icon and clear...",prefixIcon:e.jsx(s,{}),allowClear:!0}),e.jsx("p",{style:{marginTop:"8px",fontSize:"14px",color:"var(--color-text-secondary)"},children:"This input has both a search icon (prefix) and a clear button (suffix). The clear button appears when text is entered."})]})}},V={render:()=>{const[t,a]=o.useState(""),[n,i]=o.useState("John Doe"),[u,c]=o.useState("john@example.com");return e.jsxs("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{value:t,onChange:l=>a(l.target.value),onClear:()=>a(""),placeholder:"Search...",prefixIcon:e.jsx(s,{}),allowClear:!0}),e.jsx(r,{value:n,onChange:l=>i(l.target.value),onClear:()=>i(""),placeholder:"Enter your name",prefixIcon:e.jsx(O,{}),allowClear:!0}),e.jsx(r,{type:"email",value:u,onChange:l=>c(l.target.value),onClear:()=>c(""),placeholder:"Enter your email",prefixIcon:e.jsx(B,{}),allowClear:!0})]})}},T={render:()=>{const[t,a]=o.useState("Small size"),[n,i]=o.useState("Medium size"),[u,c]=o.useState("Large size");return e.jsxs("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"14px"},children:"Small"}),e.jsx(r,{size:"sm",value:t,onChange:l=>a(l.target.value),onClear:()=>a(""),prefixIcon:e.jsx(s,{}),allowClear:!0})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"14px"},children:"Medium"}),e.jsx(r,{size:"md",value:n,onChange:l=>i(l.target.value),onClear:()=>i(""),prefixIcon:e.jsx(s,{}),allowClear:!0})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"14px"},children:"Large"}),e.jsx(r,{size:"lg",value:u,onChange:l=>c(l.target.value),onClear:()=>c(""),prefixIcon:e.jsx(s,{}),allowClear:!0})]})]})}},E={render:()=>{const[t,a]=o.useState("This input has a clear button");return e.jsxs("div",{style:{width:"300px"},children:[e.jsx(r,{value:t,onChange:n=>a(n.target.value),onClear:()=>a(""),placeholder:"Type something...",allowClear:!0}),e.jsx("p",{style:{marginTop:"8px",fontSize:"14px",color:"var(--color-text-secondary)"},children:"The clear button appears when there is text in the input."})]})}},k={render:()=>e.jsxs("div",{style:{width:"300px"},children:[e.jsx(r,{placeholder:"Search without clear button...",prefixIcon:e.jsx(s,{})}),e.jsx("p",{style:{marginTop:"8px",fontSize:"14px",color:"var(--color-text-secondary)"},children:"This input has an icon but no clear button."})]})},z={render:()=>{const[t,a]=o.useState("Full opacity"),[n,i]=o.useState("Half opacity"),[u,c]=o.useState("Light opacity"),[l,L]=o.useState("Mixed opacity");return e.jsxs("div",{style:{width:"350px",display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"14px",fontWeight:500},children:"Full Opacity (1.0)"}),e.jsx(r,{value:t,onChange:p=>a(p.target.value),onClear:()=>a(""),prefixIcon:e.jsx(s,{}),allowClear:!0,prefixIconOpacity:1,clearButtonOpacity:1})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"14px",fontWeight:500},children:"Default Opacity (0.6)"}),e.jsx(r,{value:n,onChange:p=>i(p.target.value),onClear:()=>i(""),prefixIcon:e.jsx(O,{}),allowClear:!0,prefixIconOpacity:.6,clearButtonOpacity:.6})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"14px",fontWeight:500},children:"Light Opacity (0.3)"}),e.jsx(r,{value:u,onChange:p=>c(p.target.value),onClear:()=>c(""),prefixIcon:e.jsx(B,{}),allowClear:!0,prefixIconOpacity:.3,clearButtonOpacity:.3})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"14px",fontWeight:500},children:"Mixed (Icon: 0.4, Clear: 0.8)"}),e.jsx(r,{value:l,onChange:p=>L(p.target.value),onClear:()=>L(""),prefixIcon:e.jsx(s,{}),allowClear:!0,prefixIconOpacity:.4,clearButtonOpacity:.8})]}),e.jsx("p",{style:{marginTop:"8px",fontSize:"14px",color:"var(--color-text-secondary)",lineHeight:"1.5"},children:"Control the transparency of the prefix icon and clear button independently. Values range from 0 (fully transparent) to 1 (fully opaque). Default is 0.6."})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...d.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Sample text',
    placeholder: 'Enter text...'
  }
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'Enter your email...'
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter your password...'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: 'Enter a number...'
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'tel',
    placeholder: 'Enter your phone number...'
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'url',
    placeholder: 'Enter a URL...'
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This input is disabled',
    disabled: true
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Default value',
    placeholder: 'This has a default value'
  }
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Sample text');
    return <div style={{
      width: '300px'
    }}>\r
        <TextInput value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} placeholder="Type something..." allowClear />\r
      </div>;
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <TextInput placeholder="Search..." prefixIcon={<SearchIcon />} />\r
      <TextInput placeholder="Enter your name" prefixIcon={<UserIcon />} />\r
      <TextInput type="email" placeholder="Enter your email" prefixIcon={<EmailIcon />} />\r
    </div>
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Search query with both features');
    return <div style={{
      width: '300px'
    }}>\r
        <TextInput value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} placeholder="Search with icon and clear..." prefixIcon={<SearchIcon />} allowClear />\r
        <p style={{
        marginTop: '8px',
        fontSize: '14px',
        color: 'var(--color-text-secondary)'
      }}>\r
          This input has both a search icon (prefix) and a clear button (suffix). The clear button appears when text is entered.\r
        </p>\r
      </div>;
  }
}`,...j.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const [nameValue, setNameValue] = useState('John Doe');
    const [emailValue, setEmailValue] = useState('john@example.com');
    return <div style={{
      width: '300px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>\r
        <TextInput value={searchValue} onChange={e => setSearchValue(e.target.value)} onClear={() => setSearchValue('')} placeholder="Search..." prefixIcon={<SearchIcon />} allowClear />\r
        <TextInput value={nameValue} onChange={e => setNameValue(e.target.value)} onClear={() => setNameValue('')} placeholder="Enter your name" prefixIcon={<UserIcon />} allowClear />\r
        <TextInput type="email" value={emailValue} onChange={e => setEmailValue(e.target.value)} onClear={() => setEmailValue('')} placeholder="Enter your email" prefixIcon={<EmailIcon />} allowClear />\r
      </div>;
  }
}`,...V.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [smallValue, setSmallValue] = useState('Small size');
    const [mediumValue, setMediumValue] = useState('Medium size');
    const [largeValue, setLargeValue] = useState('Large size');
    return <div style={{
      width: '300px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>\r
        <div>\r
          <label style={{
          display: 'block',
          marginBottom: '4px',
          fontSize: '14px'
        }}>Small</label>\r
          <TextInput size="sm" value={smallValue} onChange={e => setSmallValue(e.target.value)} onClear={() => setSmallValue('')} prefixIcon={<SearchIcon />} allowClear />\r
        </div>\r
        <div>\r
          <label style={{
          display: 'block',
          marginBottom: '4px',
          fontSize: '14px'
        }}>Medium</label>\r
          <TextInput size="md" value={mediumValue} onChange={e => setMediumValue(e.target.value)} onClear={() => setMediumValue('')} prefixIcon={<SearchIcon />} allowClear />\r
        </div>\r
        <div>\r
          <label style={{
          display: 'block',
          marginBottom: '4px',
          fontSize: '14px'
        }}>Large</label>\r
          <TextInput size="lg" value={largeValue} onChange={e => setLargeValue(e.target.value)} onClear={() => setLargeValue('')} prefixIcon={<SearchIcon />} allowClear />\r
        </div>\r
      </div>;
  }
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('This input has a clear button');
    return <div style={{
      width: '300px'
    }}>\r
        <TextInput value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} placeholder="Type something..." allowClear />\r
        <p style={{
        marginTop: '8px',
        fontSize: '14px',
        color: 'var(--color-text-secondary)'
      }}>\r
          The clear button appears when there is text in the input.\r
        </p>\r
      </div>;
  }
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>\r
      <TextInput placeholder="Search without clear button..." prefixIcon={<SearchIcon />} />\r
      <p style={{
      marginTop: '8px',
      fontSize: '14px',
      color: 'var(--color-text-secondary)'
    }}>\r
        This input has an icon but no clear button.\r
      </p>\r
    </div>
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState('Full opacity');
    const [value2, setValue2] = useState('Half opacity');
    const [value3, setValue3] = useState('Light opacity');
    const [value4, setValue4] = useState('Mixed opacity');
    return <div style={{
      width: '350px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>\r
        <div>\r
          <label style={{
          display: 'block',
          marginBottom: '4px',
          fontSize: '14px',
          fontWeight: 500
        }}>\r
            Full Opacity (1.0)\r
          </label>\r
          <TextInput value={value1} onChange={e => setValue1(e.target.value)} onClear={() => setValue1('')} prefixIcon={<SearchIcon />} allowClear prefixIconOpacity={1.0} clearButtonOpacity={1.0} />\r
        </div>\r
        \r
        <div>\r
          <label style={{
          display: 'block',
          marginBottom: '4px',
          fontSize: '14px',
          fontWeight: 500
        }}>\r
            Default Opacity (0.6)\r
          </label>\r
          <TextInput value={value2} onChange={e => setValue2(e.target.value)} onClear={() => setValue2('')} prefixIcon={<UserIcon />} allowClear prefixIconOpacity={0.6} clearButtonOpacity={0.6} />\r
        </div>\r
        \r
        <div>\r
          <label style={{
          display: 'block',
          marginBottom: '4px',
          fontSize: '14px',
          fontWeight: 500
        }}>\r
            Light Opacity (0.3)\r
          </label>\r
          <TextInput value={value3} onChange={e => setValue3(e.target.value)} onClear={() => setValue3('')} prefixIcon={<EmailIcon />} allowClear prefixIconOpacity={0.3} clearButtonOpacity={0.3} />\r
        </div>\r
        \r
        <div>\r
          <label style={{
          display: 'block',
          marginBottom: '4px',
          fontSize: '14px',
          fontWeight: 500
        }}>\r
            Mixed (Icon: 0.4, Clear: 0.8)\r
          </label>\r
          <TextInput value={value4} onChange={e => setValue4(e.target.value)} onClear={() => setValue4('')} prefixIcon={<SearchIcon />} allowClear prefixIconOpacity={0.4} clearButtonOpacity={0.8} />\r
        </div>\r
        \r
        <p style={{
        marginTop: '8px',
        fontSize: '14px',
        color: 'var(--color-text-secondary)',
        lineHeight: '1.5'
      }}>\r
          Control the transparency of the prefix icon and clear button independently. \r
          Values range from 0 (fully transparent) to 1 (fully opaque). Default is 0.6.\r
        </p>\r
      </div>;
  }
}`,...z.parameters?.docs?.source}}};const P=["Default","WithValue","Email","Password","Number","Phone","URL","Disabled","WithDefaultValue","Interactive","FormExample","WithClearButton","WithPrefixIcon","IconAndClearButton","WithIconAndClear","SizesWithFeatures","ClearButtonOnly","IconOnly","CustomOpacity"];export{E as ClearButtonOnly,z as CustomOpacity,d as Default,f as Disabled,m as Email,I as FormExample,j as IconAndClearButton,k as IconOnly,S as Interactive,g as Number,h as Password,y as Phone,T as SizesWithFeatures,v as URL,b as WithClearButton,C as WithDefaultValue,V as WithIconAndClear,w as WithPrefixIcon,x as WithValue,P as __namedExportsOrder,M as default};
