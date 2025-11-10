import{j as e}from"./iframe-CY-Mz7KS.js";import{B as o}from"./Button-acQDbgEt.js";import{T as i}from"./TextInput-BPeAmAyI.js";import{N as a}from"./NavItem-C3vJCNd3.js";import{P as s}from"./ProductCard-BCbO4pKg.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BoqwxETs.js";const h={title:"UI Library/Theme Guide",parameters:{layout:"fullscreen",docs:{description:{component:"Guide for using the theme system in this UI library."}}}},r={render:()=>e.jsxs("div",{className:"theme-guide",children:[e.jsxs("div",{className:"guide-header",children:[e.jsx("h1",{children:"🎨 Theme System Guide"}),e.jsx("p",{children:"This UI library supports three themes: Dark (default), Light, and Custom. Use the theme switcher in the Storybook toolbar at the top of the page to change themes."})]}),e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:"📖 How to Use"}),e.jsxs("div",{className:"instruction-grid",children:[e.jsxs("div",{className:"instruction",children:[e.jsx("h3",{children:"1. Storybook Toolbar"}),e.jsx("p",{children:"Click the theme icons (🌙, ☀️, 🎨) in the toolbar at the top of Storybook to switch between themes."})]}),e.jsxs("div",{className:"instruction",children:[e.jsx("h3",{children:"2. In Your App"}),e.jsxs("p",{children:["Wrap your app with ",e.jsx("code",{children:"ThemeProvider"})," and use ",e.jsx("code",{children:"ThemeSwitcher"})," component."]})]}),e.jsxs("div",{className:"instruction",children:[e.jsx("h3",{children:"3. Custom Components"}),e.jsx("p",{children:"Use CSS custom properties (variables) to ensure your components adapt to theme changes."})]})]})]}),e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:"🎯 Available Themes"}),e.jsxs("div",{className:"theme-grid",children:[e.jsxs("div",{className:"theme-card",children:[e.jsx("h3",{children:"🌙 Dark Theme"}),e.jsx("p",{children:"Default theme with dark backgrounds and light text. Great for low-light environments."}),e.jsxs("div",{className:"color-preview",children:[e.jsx("div",{className:"color-sample color-sample--dark-bg",children:"Background"}),e.jsx("div",{className:"color-sample color-sample--dark-panel",children:"Panel"}),e.jsx("div",{className:"color-sample color-sample--dark-accent",children:"Accent"})]})]}),e.jsxs("div",{className:"theme-card",children:[e.jsx("h3",{children:"☀️ Light Theme"}),e.jsx("p",{children:"Clean light theme with bright backgrounds and dark text. Perfect for daytime use."}),e.jsxs("div",{className:"color-preview",children:[e.jsx("div",{className:"color-sample color-sample--light-bg",children:"Background"}),e.jsx("div",{className:"color-sample color-sample--light-panel",children:"Panel"}),e.jsx("div",{className:"color-sample color-sample--light-accent",children:"Accent"})]})]}),e.jsxs("div",{className:"theme-card",children:[e.jsx("h3",{children:"🎨 Custom Theme"}),e.jsx("p",{children:"Unique purple/pink theme with vibrant accents. Shows the flexibility of the system."}),e.jsxs("div",{className:"color-preview",children:[e.jsx("div",{className:"color-sample color-sample--custom-bg",children:"Background"}),e.jsx("div",{className:"color-sample color-sample--custom-panel",children:"Panel"}),e.jsx("div",{className:"color-sample color-sample--custom-accent",children:"Accent"})]})]})]})]}),e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:"🧩 Component Examples"}),e.jsx("p",{children:"All components automatically adapt to the selected theme:"}),e.jsxs("div",{className:"component-showcase",children:[e.jsxs("div",{className:"showcase-row",children:[e.jsx(o,{variant:"primary",children:"Primary Button"}),e.jsx(o,{variant:"secondary",children:"Secondary Button"}),e.jsx(o,{variant:"ghost",children:"Ghost Button"})]}),e.jsx("div",{className:"showcase-row",children:e.jsx(i,{placeholder:"Type something..."})}),e.jsxs("div",{className:"showcase-row",children:[e.jsx(a,{icon:"home",label:"Home"}),e.jsx(a,{icon:"user",label:"Profile",active:!0})]}),e.jsx("div",{className:"showcase-row",children:e.jsx(s,{imageUrl:"https://picsum.photos/280/160?random=100",title:"Sample Product",price:"$99.99",onAddToCart:()=>alert("Added to cart!")})})]})]}),e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:"💻 Code Examples"}),e.jsxs("div",{className:"code-examples",children:[e.jsxs("div",{className:"code-example",children:[e.jsx("h3",{children:"Using ThemeProvider"}),e.jsx("pre",{children:`import { ThemeProvider } from './ui/providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider initialTheme="dark">
      <YourComponents />
    </ThemeProvider>
  );
}`})]}),e.jsxs("div",{className:"code-example",children:[e.jsx("h3",{children:"Using CSS Variables"}),e.jsx("pre",{children:`.my-component {
  background: var(--color-panel);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
}`})]}),e.jsxs("div",{className:"code-example",children:[e.jsx("h3",{children:"Using Theme Hook"}),e.jsx("pre",{children:`import { useTheme } from './ui/providers/ThemeProvider';

function MyComponent() {
  const { theme, setTheme, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}`})]})]})]}),e.jsx("style",{children:`
        .theme-guide {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: var(--font-sans);
          color: var(--color-text);
          background: var(--color-bg);
          line-height: 1.6;
        }
        
        .guide-header {
          text-align: center;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 2px solid var(--color-border);
        }
        
        .guide-header h1 {
          font-size: 2.5rem;
          margin: 0 0 16px 0;
          color: var(--color-text);
        }
        
        .guide-header p {
          font-size: 1.125rem;
          color: var(--color-text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }
        
        .guide-section {
          margin-bottom: 48px;
        }
        
        .guide-section h2 {
          font-size: 1.875rem;
          color: var(--color-text);
          margin: 0 0 24px 0;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 8px;
        }
        
        .instruction-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 24px;
        }
        
        .instruction {
          background: var(--color-panel);
          padding: 24px;
          border-radius: var(--radius);
          border: 1px solid var(--color-border);
        }
        
        .instruction h3 {
          margin: 0 0 12px 0;
          color: var(--color-accent);
          font-size: 1.125rem;
        }
        
        .instruction p {
          margin: 0;
          color: var(--color-text-secondary);
        }
        
        .instruction code {
          background: var(--color-bg);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: 'Monaco', 'Consolas', monospace;
          color: var(--color-accent);
        }
        
        .theme-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 24px;
        }
        
        .theme-card {
          background: var(--color-panel);
          padding: 24px;
          border-radius: var(--radius);
          border: 1px solid var(--color-border);
        }
        
        .theme-card h3 {
          margin: 0 0 12px 0;
          color: var(--color-text);
          font-size: 1.25rem;
        }
        
        .theme-card p {
          margin: 0 0 16px 0;
          color: var(--color-text-secondary);
        }
        
        .color-preview {
          display: flex;
          gap: 8px;
        }
        
        .color-sample {
          flex: 1;
          padding: 8px;
          border-radius: 6px;
          text-align: center;
          font-size: 12px;
          color: white;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        }
        
        .color-sample--dark-bg { background-color: #0b0d12; }
        .color-sample--dark-panel { background-color: #121826; }
        .color-sample--dark-accent { background-color: #4dabf7; }
        
        .color-sample--light-bg { 
          background-color: #ffffff; 
          border: 1px solid #ddd;
          color: #333;
          text-shadow: none;
        }
        .color-sample--light-panel { 
          background-color: #f8f9fa;
          color: #333;
          text-shadow: none;
        }
        .color-sample--light-accent { background-color: #0066cc; }
        
        .color-sample--custom-bg { background-color: #1a1a2e; }
        .color-sample--custom-panel { background-color: #16213e; }
        .color-sample--custom-accent { background-color: #e94560; }
        
        .component-showcase {
          background: var(--color-panel);
          padding: 32px;
          border-radius: var(--radius);
          border: 1px solid var(--color-border);
        }
        
        .showcase-row {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .showcase-row:last-child {
          margin-bottom: 0;
        }
        
        .code-examples {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 24px;
        }
        
        .code-example {
          background: var(--color-panel);
          border: 1px solid var(--color-border);
          border-radius: var(--radius);
          overflow: hidden;
        }
        
        .code-example h3 {
          margin: 0;
          padding: 16px 20px 12px;
          background: var(--color-bg);
          color: var(--color-text);
          font-size: 1rem;
          border-bottom: 1px solid var(--color-border);
        }
        
        .code-example pre {
          margin: 0;
          padding: 20px;
          background: var(--color-bg);
          color: var(--color-text-secondary);
          font-family: 'Monaco', 'Consolas', monospace;
          font-size: 14px;
          line-height: 1.5;
          overflow-x: auto;
        }
        
        @media (max-width: 768px) {
          .theme-guide {
            padding: 20px 16px;
          }
          
          .guide-header h1 {
            font-size: 2rem;
          }
          
          .instruction-grid,
          .theme-grid,
          .code-examples {
            grid-template-columns: 1fr;
          }
          
          .showcase-row {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="theme-guide">\r
      <div className="guide-header">\r
        <h1>🎨 Theme System Guide</h1>\r
        <p>\r
          This UI library supports three themes: Dark (default), Light, and Custom. \r
          Use the theme switcher in the Storybook toolbar at the top of the page to change themes.\r
        </p>\r
      </div>\r
\r
      <div className="guide-section">\r
        <h2>📖 How to Use</h2>\r
        <div className="instruction-grid">\r
          <div className="instruction">\r
            <h3>1. Storybook Toolbar</h3>\r
            <p>Click the theme icons (🌙, ☀️, 🎨) in the toolbar at the top of Storybook to switch between themes.</p>\r
          </div>\r
          <div className="instruction">\r
            <h3>2. In Your App</h3>\r
            <p>Wrap your app with <code>ThemeProvider</code> and use <code>ThemeSwitcher</code> component.</p>\r
          </div>\r
          <div className="instruction">\r
            <h3>3. Custom Components</h3>\r
            <p>Use CSS custom properties (variables) to ensure your components adapt to theme changes.</p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="guide-section">\r
        <h2>🎯 Available Themes</h2>\r
        <div className="theme-grid">\r
          <div className="theme-card">\r
            <h3>🌙 Dark Theme</h3>\r
            <p>Default theme with dark backgrounds and light text. Great for low-light environments.</p>\r
            <div className="color-preview">\r
              <div className="color-sample color-sample--dark-bg">Background</div>\r
              <div className="color-sample color-sample--dark-panel">Panel</div>\r
              <div className="color-sample color-sample--dark-accent">Accent</div>\r
            </div>\r
          </div>\r
          \r
          <div className="theme-card">\r
            <h3>☀️ Light Theme</h3>\r
            <p>Clean light theme with bright backgrounds and dark text. Perfect for daytime use.</p>\r
            <div className="color-preview">\r
              <div className="color-sample color-sample--light-bg">Background</div>\r
              <div className="color-sample color-sample--light-panel">Panel</div>\r
              <div className="color-sample color-sample--light-accent">Accent</div>\r
            </div>\r
          </div>\r
          \r
          <div className="theme-card">\r
            <h3>🎨 Custom Theme</h3>\r
            <p>Unique purple/pink theme with vibrant accents. Shows the flexibility of the system.</p>\r
            <div className="color-preview">\r
              <div className="color-sample color-sample--custom-bg">Background</div>\r
              <div className="color-sample color-sample--custom-panel">Panel</div>\r
              <div className="color-sample color-sample--custom-accent">Accent</div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="guide-section">\r
        <h2>🧩 Component Examples</h2>\r
        <p>All components automatically adapt to the selected theme:</p>\r
        \r
        <div className="component-showcase">\r
          <div className="showcase-row">\r
            <Button variant="primary">Primary Button</Button>\r
            <Button variant="secondary">Secondary Button</Button>\r
            <Button variant="ghost">Ghost Button</Button>\r
          </div>\r
          \r
          <div className="showcase-row">\r
            <TextInput placeholder="Type something..." />\r
          </div>\r
          \r
          <div className="showcase-row">\r
            <NavItem icon="home" label="Home" />\r
            <NavItem icon="user" label="Profile" active />\r
          </div>\r
          \r
          <div className="showcase-row">\r
            <ProductCard imageUrl="https://picsum.photos/280/160?random=100" title="Sample Product" price="$99.99" onAddToCart={() => alert('Added to cart!')} />\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="guide-section">\r
        <h2>💻 Code Examples</h2>\r
        <div className="code-examples">\r
          <div className="code-example">\r
            <h3>Using ThemeProvider</h3>\r
            <pre>{\`import { ThemeProvider } from './ui/providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider initialTheme="dark">
      <YourComponents />
    </ThemeProvider>
  );
}\`}</pre>\r
          </div>\r
          \r
          <div className="code-example">\r
            <h3>Using CSS Variables</h3>\r
            <pre>{\`.my-component {
  background: var(--color-panel);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
}\`}</pre>\r
          </div>\r
          \r
          <div className="code-example">\r
            <h3>Using Theme Hook</h3>\r
            <pre>{\`import { useTheme } from './ui/providers/ThemeProvider';

function MyComponent() {
  const { theme, setTheme, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}\`}</pre>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <style>{\`
        .theme-guide {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: var(--font-sans);
          color: var(--color-text);
          background: var(--color-bg);
          line-height: 1.6;
        }
        
        .guide-header {
          text-align: center;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 2px solid var(--color-border);
        }
        
        .guide-header h1 {
          font-size: 2.5rem;
          margin: 0 0 16px 0;
          color: var(--color-text);
        }
        
        .guide-header p {
          font-size: 1.125rem;
          color: var(--color-text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }
        
        .guide-section {
          margin-bottom: 48px;
        }
        
        .guide-section h2 {
          font-size: 1.875rem;
          color: var(--color-text);
          margin: 0 0 24px 0;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 8px;
        }
        
        .instruction-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 24px;
        }
        
        .instruction {
          background: var(--color-panel);
          padding: 24px;
          border-radius: var(--radius);
          border: 1px solid var(--color-border);
        }
        
        .instruction h3 {
          margin: 0 0 12px 0;
          color: var(--color-accent);
          font-size: 1.125rem;
        }
        
        .instruction p {
          margin: 0;
          color: var(--color-text-secondary);
        }
        
        .instruction code {
          background: var(--color-bg);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: 'Monaco', 'Consolas', monospace;
          color: var(--color-accent);
        }
        
        .theme-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 24px;
        }
        
        .theme-card {
          background: var(--color-panel);
          padding: 24px;
          border-radius: var(--radius);
          border: 1px solid var(--color-border);
        }
        
        .theme-card h3 {
          margin: 0 0 12px 0;
          color: var(--color-text);
          font-size: 1.25rem;
        }
        
        .theme-card p {
          margin: 0 0 16px 0;
          color: var(--color-text-secondary);
        }
        
        .color-preview {
          display: flex;
          gap: 8px;
        }
        
        .color-sample {
          flex: 1;
          padding: 8px;
          border-radius: 6px;
          text-align: center;
          font-size: 12px;
          color: white;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        }
        
        .color-sample--dark-bg { background-color: #0b0d12; }
        .color-sample--dark-panel { background-color: #121826; }
        .color-sample--dark-accent { background-color: #4dabf7; }
        
        .color-sample--light-bg { 
          background-color: #ffffff; 
          border: 1px solid #ddd;
          color: #333;
          text-shadow: none;
        }
        .color-sample--light-panel { 
          background-color: #f8f9fa;
          color: #333;
          text-shadow: none;
        }
        .color-sample--light-accent { background-color: #0066cc; }
        
        .color-sample--custom-bg { background-color: #1a1a2e; }
        .color-sample--custom-panel { background-color: #16213e; }
        .color-sample--custom-accent { background-color: #e94560; }
        
        .component-showcase {
          background: var(--color-panel);
          padding: 32px;
          border-radius: var(--radius);
          border: 1px solid var(--color-border);
        }
        
        .showcase-row {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .showcase-row:last-child {
          margin-bottom: 0;
        }
        
        .code-examples {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 24px;
        }
        
        .code-example {
          background: var(--color-panel);
          border: 1px solid var(--color-border);
          border-radius: var(--radius);
          overflow: hidden;
        }
        
        .code-example h3 {
          margin: 0;
          padding: 16px 20px 12px;
          background: var(--color-bg);
          color: var(--color-text);
          font-size: 1rem;
          border-bottom: 1px solid var(--color-border);
        }
        
        .code-example pre {
          margin: 0;
          padding: 20px;
          background: var(--color-bg);
          color: var(--color-text-secondary);
          font-family: 'Monaco', 'Consolas', monospace;
          font-size: 14px;
          line-height: 1.5;
          overflow-x: auto;
        }
        
        @media (max-width: 768px) {
          .theme-guide {
            padding: 20px 16px;
          }
          
          .guide-header h1 {
            font-size: 2rem;
          }
          
          .instruction-grid,
          .theme-grid,
          .code-examples {
            grid-template-columns: 1fr;
          }
          
          .showcase-row {
            flex-direction: column;
            align-items: stretch;
          }
        }
      \`}</style>\r
    </div>
}`,...r.parameters?.docs?.source}}};const x=["ThemeGuide"];export{r as ThemeGuide,x as __namedExportsOrder,h as default};
