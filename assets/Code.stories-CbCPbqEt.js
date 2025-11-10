import{R as S,j as e}from"./iframe-CY-Mz7KS.js";import"./preload-helper-PPVm8Dsz.js";const a=({children:n,variant:h="inline",language:N="plain",size:L="md",showLineNumbers:x=!1,copyable:j=!1,className:T,label:g,wrapLines:E=!1,maxHeight:b})=>{const[v,w]=S.useState(!1),y=S.useRef(null),W=async()=>{if(!y.current)return;const f=y.current.textContent||"";try{await navigator.clipboard.writeText(f),w(!0),setTimeout(()=>w(!1),2e3)}catch(C){console.error("Failed to copy code:",C)}},k=["code",`code--${h}`,`code--${L}`,`code--${N}`,x&&h==="block"&&"code--line-numbers",E&&"code--wrap",T].filter(Boolean).join(" "),U=f=>f.split(`
`).map((_,M)=>M+1).join(`
`),z=typeof n=="string"?n:String(n);return h==="inline"?e.jsx("code",{className:k,children:n}):e.jsxs("div",{className:"code-block-wrapper",children:[(g||j)&&e.jsxs("div",{className:"code-block__header",children:[g&&e.jsx("div",{className:"code-block__label",children:g}),j&&e.jsxs("button",{className:"code-block__copy-button",onClick:W,"aria-label":"Copy code to clipboard",title:v?"Copied!":"Copy code",children:[e.jsx("span",{className:"code-block__copy-icon",children:v?"✓":"📋"}),v?"Copied!":"Copy"]})]}),e.jsxs("div",{className:`code-block__container ${b?"code-block--max-height":""}`,...b&&{"data-max-height":b},children:[x&&e.jsx("div",{className:"code-block__line-numbers","aria-hidden":"true",children:e.jsx("pre",{children:U(z)})}),e.jsx("pre",{ref:y,className:k,children:e.jsx("code",{children:n})})]})]})};a.__docgenInfo={description:"",methods:[],displayName:"Code",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Code content to display"},variant:{required:!1,tsType:{name:"union",raw:"'inline' | 'block'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'block'"}]},description:"Display variant",defaultValue:{value:"'inline'",computed:!1}},language:{required:!1,tsType:{name:"union",raw:"'javascript' | 'typescript' | 'jsx' | 'tsx' | 'html' | 'css' | 'json' | 'bash' | 'python' | 'java' | 'c' | 'cpp' | 'csharp' | 'php' | 'ruby' | 'go' | 'rust' | 'sql' | 'yaml' | 'xml' | 'markdown' | 'plain'",elements:[{name:"literal",value:"'javascript'"},{name:"literal",value:"'typescript'"},{name:"literal",value:"'jsx'"},{name:"literal",value:"'tsx'"},{name:"literal",value:"'html'"},{name:"literal",value:"'css'"},{name:"literal",value:"'json'"},{name:"literal",value:"'bash'"},{name:"literal",value:"'python'"},{name:"literal",value:"'java'"},{name:"literal",value:"'c'"},{name:"literal",value:"'cpp'"},{name:"literal",value:"'csharp'"},{name:"literal",value:"'php'"},{name:"literal",value:"'ruby'"},{name:"literal",value:"'go'"},{name:"literal",value:"'rust'"},{name:"literal",value:"'sql'"},{name:"literal",value:"'yaml'"},{name:"literal",value:"'xml'"},{name:"literal",value:"'markdown'"},{name:"literal",value:"'plain'"}]},description:"Programming language for syntax highlighting",defaultValue:{value:"'plain'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},showLineNumbers:{required:!1,tsType:{name:"boolean"},description:"Whether to show line numbers (block variant only)",defaultValue:{value:"false",computed:!1}},copyable:{required:!1,tsType:{name:"boolean"},description:"Whether the code is copyable",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},label:{required:!1,tsType:{name:"string"},description:"Label for the code block"},wrapLines:{required:!1,tsType:{name:"boolean"},description:"Whether to wrap long lines",defaultValue:{value:"false",computed:!1}},maxHeight:{required:!1,tsType:{name:"string"},description:"Maximum height for scrollable content"}}};const R={title:"Atoms/Code",component:a,parameters:{layout:"centered",docs:{description:{component:"A component for displaying inline and block code with syntax highlighting support."}}},tags:["autodocs"],argTypes:{children:{control:"text",description:"Code content to display"},variant:{control:"select",options:["inline","block"],description:"Display variant"},language:{control:"select",options:["plain","javascript","typescript","jsx","tsx","html","css","json","bash","python","java","c","cpp","csharp","php","ruby","go","rust","sql","yaml","xml","markdown"],description:"Programming language for syntax highlighting"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},showLineNumbers:{control:"boolean",description:"Show line numbers (block variant only)"},copyable:{control:"boolean",description:"Whether the code is copyable"},label:{control:"text",description:"Label for the code block"},wrapLines:{control:"boolean",description:"Whether to wrap long lines"},maxHeight:{control:"text",description:"Maximum height for scrollable content"}}},r={args:{children:'const greeting = "Hello, World!";',variant:"inline",language:"javascript"},parameters:{docs:{description:{story:"Inline code for short snippets within text."}}}},s={args:{children:`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55`,variant:"block",language:"javascript"}},t={args:{children:`import React from 'react';

const MyComponent = ({ title, children }) => {
  return (
    <div className="my-component">
      <h1>{title}</h1>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default MyComponent;`,variant:"block",language:"jsx",showLineNumbers:!0}},i={args:{children:`npm install @storybook/react
npm install @storybook/addon-essentials
npx storybook@latest init`,variant:"block",language:"bash",copyable:!0,label:"Install Storybook"}},o={args:{children:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
  </header>
  <main>
    <p>This is the main content area.</p>
  </main>
</body>
</html>`,variant:"block",language:"html",showLineNumbers:!0,copyable:!0,label:"HTML Template"}},l={args:{children:`.button {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-1px);
}`,variant:"block",language:"css",copyable:!0,label:"Button Styles"}},c={args:{children:`{
  "name": "my-app",
  "version": "1.0.0",
  "description": "A sample application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest",
    "build": "webpack --mode=production"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "webpack": "^5.0.0"
  }
}`,variant:"block",language:"json",copyable:!0,label:"package.json"}},d={args:{children:`interface User {
  id: number;
  name: string;
  email: string;
  roles: Role[];
}

interface Role {
  id: number;
  name: string;
  permissions: Permission[];
}

interface Permission {
  id: number;
  action: string;
  resource: string;
}

class UserService {
  private users: User[] = [];
  
  async getUser(id: number): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }
  
  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const user: User = {
      id: Date.now(),
      ...userData
    };
    this.users.push(user);
    return user;
  }
}`,variant:"block",language:"typescript",showLineNumbers:!0,copyable:!0,label:"User Service"}},m={args:{children:'const veryLongVariableName = "This is a very long string that would normally extend beyond the width of the code container and might cause horizontal scrolling, but with line wrapping enabled it will wrap to the next line instead.";',variant:"block",language:"javascript",wrapLines:!0,copyable:!0,label:"Long Line Example"}},p={args:{children:`function generateLargeCodeExample() {
  const lines = [];
  
  for (let i = 1; i <= 50; i++) {
    lines.push(\`// This is line \${i}\`);
    lines.push(\`console.log('Processing item \${i}');\`);
    
    if (i % 10 === 0) {
      lines.push(\`// Checkpoint at line \${i}\`);
      lines.push('');
    }
  }
  
  return lines.join('\\n');
}

// Example usage
const largeCode = generateLargeCodeExample();
console.log(largeCode);

// More lines to demonstrate scrolling...
function anotherFunction() {
  return "This content will be scrollable";
}

class ExampleClass {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(\`Hello, \${this.name}!\`);
  }
}

const example = new ExampleClass("World");
example.greet();`,variant:"block",language:"javascript",showLineNumbers:!0,copyable:!0,maxHeight:"300px",label:"Scrollable Code"}},u={render:()=>e.jsxs("div",{className:"code-demo-sizes",children:[e.jsxs("div",{className:"code-demo-section",children:[e.jsx("h3",{children:"Small"}),e.jsx(a,{variant:"inline",size:"sm",language:"javascript",children:"const small = true;"})]}),e.jsxs("div",{className:"code-demo-section",children:[e.jsx("h3",{children:"Medium (Default)"}),e.jsx(a,{variant:"inline",size:"md",language:"javascript",children:"const medium = true;"})]}),e.jsxs("div",{className:"code-demo-section",children:[e.jsx("h3",{children:"Large"}),e.jsx(a,{variant:"inline",size:"lg",language:"javascript",children:"const large = true;"})]})]}),args:{children:"Sample code"},parameters:{docs:{description:{story:"Different size variants for inline code."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'const greeting = "Hello, World!";',
    variant: 'inline',
    language: 'javascript'
  },
  parameters: {
    docs: {
      description: {
        story: 'Inline code for short snippets within text.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55\`,
    variant: 'block',
    language: 'javascript'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`import React from 'react';

const MyComponent = ({ title, children }) => {
  return (
    <div className="my-component">
      <h1>{title}</h1>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default MyComponent;\`,
    variant: 'block',
    language: 'jsx',
    showLineNumbers: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`npm install @storybook/react
npm install @storybook/addon-essentials
npx storybook@latest init\`,
    variant: 'block',
    language: 'bash',
    copyable: true,
    label: 'Install Storybook'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
  </header>
  <main>
    <p>This is the main content area.</p>
  </main>
</body>
</html>\`,
    variant: 'block',
    language: 'html',
    showLineNumbers: true,
    copyable: true,
    label: 'HTML Template'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`.button {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-1px);
}\`,
    variant: 'block',
    language: 'css',
    copyable: true,
    label: 'Button Styles'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`{
  "name": "my-app",
  "version": "1.0.0",
  "description": "A sample application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest",
    "build": "webpack --mode=production"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "webpack": "^5.0.0"
  }
}\`,
    variant: 'block',
    language: 'json',
    copyable: true,
    label: 'package.json'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`interface User {
  id: number;
  name: string;
  email: string;
  roles: Role[];
}

interface Role {
  id: number;
  name: string;
  permissions: Permission[];
}

interface Permission {
  id: number;
  action: string;
  resource: string;
}

class UserService {
  private users: User[] = [];
  
  async getUser(id: number): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }
  
  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const user: User = {
      id: Date.now(),
      ...userData
    };
    this.users.push(user);
    return user;
  }
}\`,
    variant: 'block',
    language: 'typescript',
    showLineNumbers: true,
    copyable: true,
    label: 'User Service'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`const veryLongVariableName = "This is a very long string that would normally extend beyond the width of the code container and might cause horizontal scrolling, but with line wrapping enabled it will wrap to the next line instead.";\`,
    variant: 'block',
    language: 'javascript',
    wrapLines: true,
    copyable: true,
    label: 'Long Line Example'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`function generateLargeCodeExample() {
  const lines = [];
  
  for (let i = 1; i <= 50; i++) {
    lines.push(\\\`// This is line \\\${i}\\\`);
    lines.push(\\\`console.log('Processing item \\\${i}');\\\`);
    
    if (i % 10 === 0) {
      lines.push(\\\`// Checkpoint at line \\\${i}\\\`);
      lines.push('');
    }
  }
  
  return lines.join('\\\\n');
}

// Example usage
const largeCode = generateLargeCodeExample();
console.log(largeCode);

// More lines to demonstrate scrolling...
function anotherFunction() {
  return "This content will be scrollable";
}

class ExampleClass {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(\\\`Hello, \\\${this.name}!\\\`);
  }
}

const example = new ExampleClass("World");
example.greet();\`,
    variant: 'block',
    language: 'javascript',
    showLineNumbers: true,
    copyable: true,
    maxHeight: '300px',
    label: 'Scrollable Code'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="code-demo-sizes">\r
      <div className="code-demo-section">\r
        <h3>Small</h3>\r
        <Code variant="inline" size="sm" language="javascript">\r
          const small = true;\r
        </Code>\r
      </div>\r
      \r
      <div className="code-demo-section">\r
        <h3>Medium (Default)</h3>\r
        <Code variant="inline" size="md" language="javascript">\r
          const medium = true;\r
        </Code>\r
      </div>\r
      \r
      <div className="code-demo-section">\r
        <h3>Large</h3>\r
        <Code variant="inline" size="lg" language="javascript">\r
          const large = true;\r
        </Code>\r
      </div>\r
    </div>,
  args: {
    children: 'Sample code'
  },
  parameters: {
    docs: {
      description: {
        story: 'Different size variants for inline code.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const q=["InlineCode","BlockCode","WithLineNumbers","WithCopyButton","HTMLExample","CSSExample","JSONExample","TypeScriptExample","WithWrapping","WithMaxHeight","Sizes"];export{s as BlockCode,l as CSSExample,o as HTMLExample,r as InlineCode,c as JSONExample,u as Sizes,d as TypeScriptExample,i as WithCopyButton,t as WithLineNumbers,p as WithMaxHeight,m as WithWrapping,q as __namedExportsOrder,R as default};
