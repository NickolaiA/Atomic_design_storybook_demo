import{j as e}from"./jsx-runtime-CDt2p4po.js";import{T as r}from"./TextInput-SmvPHKDv.js";import"./index-GiUgBvb1.js";const X={title:"Atoms/TextInput",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Whether the input is disabled"},type:{control:{type:"select"},options:["text","email","password","number","tel","url"],description:"Input type"},value:{control:"text",description:"Input value"}}},a={args:{placeholder:"Enter text..."}},s={args:{value:"Sample text",placeholder:"Enter text..."}},o={args:{type:"email",placeholder:"Enter your email..."}},t={args:{type:"password",placeholder:"Enter your password..."}},n={args:{type:"number",placeholder:"Enter a number..."}},l={args:{type:"tel",placeholder:"Enter your phone number..."}},p={args:{type:"url",placeholder:"Enter a URL..."}},c={args:{placeholder:"This input is disabled",disabled:!0}},d={args:{defaultValue:"Default value",placeholder:"This has a default value"}},m={render:J=>e.jsxs("div",{className:"input-demo",children:[e.jsx(r,{...J}),e.jsx("style",{children:`
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
      `})]})};var i,h,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,y,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 'Sample text',
    placeholder: 'Enter text...'
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,E,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'Enter your email...'
  }
}`,...(v=(E=o.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var w,j,N;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter your password...'
  }
}`,...(N=(j=t.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var T,S,I;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: 'Enter a number...'
  }
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var D,P,V;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'tel',
    placeholder: 'Enter your phone number...'
  }
}`,...(V=(P=l.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var R,W,L;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: 'url',
    placeholder: 'Enter a URL...'
  }
}`,...(L=(W=p.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var U,k,F;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    placeholder: 'This input is disabled',
    disabled: true
  }
}`,...(F=(k=c.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var _,A,O;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Default value',
    placeholder: 'This has a default value'
  }
}`,...(O=(A=d.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var q,z,B;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(B=(z=m.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var C,G,H;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const Y=["Default","WithValue","Email","Password","Number","Phone","URL","Disabled","WithDefaultValue","Interactive","FormExample"];export{a as Default,c as Disabled,o as Email,u as FormExample,m as Interactive,n as Number,t as Password,l as Phone,p as URL,d as WithDefaultValue,s as WithValue,Y as __namedExportsOrder,X as default};
