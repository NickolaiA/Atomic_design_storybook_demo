import{j as e}from"./iframe-C-Dpaqp0.js";import"./preload-helper-PPVm8Dsz.js";const t=({children:p,variant:f="block",size:k="md",author:o,source:r,sourceUrl:y,className:v,showQuotationMarks:b=!0})=>{const w=["quote",`quote--${f}`,`quote--${k}`,b&&"quote--with-marks",v].filter(Boolean).join(" "),g=()=>!o&&!r?null:e.jsxs("footer",{className:"quote__attribution",children:[o&&e.jsx("cite",{className:"quote__author",children:o}),r&&e.jsxs(e.Fragment,{children:[o&&e.jsx("span",{className:"quote__separator",children:", "}),y?e.jsx("a",{href:y,className:"quote__source quote__source--link",target:"_blank",rel:"noopener noreferrer",children:e.jsx("cite",{children:r})}):e.jsx("cite",{className:"quote__source",children:r})]})]});return f==="inline"?e.jsxs("q",{className:w,children:[p,g()]}):e.jsxs("blockquote",{className:w,children:[e.jsx("div",{className:"quote__content",children:p}),g()]})};t.__docgenInfo={description:"",methods:[],displayName:"Quote",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Quote content"},variant:{required:!1,tsType:{name:"union",raw:"'block' | 'inline'",elements:[{name:"literal",value:"'block'"},{name:"literal",value:"'inline'"}]},description:"Display variant",defaultValue:{value:"'block'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},author:{required:!1,tsType:{name:"string"},description:"Author of the quote"},source:{required:!1,tsType:{name:"string"},description:"Source/citation of the quote"},sourceUrl:{required:!1,tsType:{name:"string"},description:"URL for the source"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},showQuotationMarks:{required:!1,tsType:{name:"boolean"},description:"Whether to show quotation marks",defaultValue:{value:"true",computed:!1}}}};const S={title:"Atoms/Quote",component:t,parameters:{layout:"centered",docs:{description:{component:"A component for displaying quotations with optional attribution, supporting both inline and block variants."}}},tags:["autodocs"],argTypes:{children:{control:"text",description:"Quote content"},variant:{control:"select",options:["block","inline"],description:"Display variant"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},author:{control:"text",description:"Author of the quote"},source:{control:"text",description:"Source/citation of the quote"},sourceUrl:{control:"text",description:"URL for the source"},showQuotationMarks:{control:"boolean",description:"Whether to show quotation marks"}}},a={args:{children:"The best way to predict the future is to invent it.",variant:"block",size:"md",author:"Alan Kay",showQuotationMarks:!0}},s={render:()=>e.jsx("div",{className:"quote-demo-inline",children:e.jsxs("p",{children:["As Alan Kay once said, "," ",e.jsx(t,{variant:"inline",author:"Alan Kay",showQuotationMarks:!0,children:"The best way to predict the future is to invent it"}),", and this philosophy continues to drive innovation today."]})}),args:{children:"Sample inline quote",variant:"inline"},parameters:{docs:{description:{story:"Inline quotes can be used within paragraphs of text."}}}},n={args:{children:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",variant:"block",size:"md",author:"Albert Einstein",source:"Attributed",showQuotationMarks:!0}},i={args:{children:"Stay hungry, stay foolish.",variant:"block",size:"md",author:"Steve Jobs",source:"Stanford Commencement Address",sourceUrl:"https://www.stanford.edu/news/2005/june15/jobs-061505.html",showQuotationMarks:!0}},u={render:()=>e.jsxs("div",{className:"quote-demo-sizes",children:[e.jsxs("div",{className:"quote-demo-section",children:[e.jsx("h3",{children:"Small"}),e.jsx(t,{variant:"block",size:"sm",author:"Confucius",showQuotationMarks:!0,children:"It does not matter how slowly you go as long as you do not stop."})]}),e.jsxs("div",{className:"quote-demo-section",children:[e.jsx("h3",{children:"Medium (Default)"}),e.jsx(t,{variant:"block",size:"md",author:"Maya Angelou",showQuotationMarks:!0,children:"If you don't like something, change it. If you can't change it, change your attitude."})]}),e.jsxs("div",{className:"quote-demo-section",children:[e.jsx("h3",{children:"Large"}),e.jsx(t,{variant:"block",size:"lg",author:"Nelson Mandela",showQuotationMarks:!0,children:"It always seems impossible until it's done."})]})]}),args:{children:"Sample quote"},parameters:{docs:{description:{story:"Different size variants for block quotes."}}}},l={args:{children:"Innovation distinguishes between a leader and a follower.",variant:"block",size:"md",author:"Steve Jobs",showQuotationMarks:!1},parameters:{docs:{description:{story:"Quotes can be displayed without quotation marks for a cleaner look."}}}},c={args:{children:"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",variant:"block",size:"md",author:"Steve Jobs",source:"Stanford Commencement Address, 2005",sourceUrl:"https://www.stanford.edu/news/2005/june15/jobs-061505.html",showQuotationMarks:!0},parameters:{docs:{description:{story:"Long quotes with multiple sentences work well in block format."}}}},d={render:()=>e.jsxs("div",{className:"quote-demo-multiple",children:[e.jsx(t,{variant:"block",size:"md",author:"Winston Churchill",showQuotationMarks:!0,children:"Success is not final, failure is not fatal: it is the courage to continue that counts."}),e.jsx(t,{variant:"block",size:"md",author:"Franklin D. Roosevelt",showQuotationMarks:!0,children:"The only thing we have to fear is fear itself."}),e.jsx(t,{variant:"block",size:"md",author:"John F. Kennedy",source:"Inaugural Address, 1961",showQuotationMarks:!0,children:"Ask not what your country can do for you—ask what you can do for your country."})]}),args:{children:"Sample quote"},parameters:{docs:{description:{story:"Multiple quotes can be used together to create a collection or comparison."}}}},h={args:{children:"This product has completely transformed how our team works. The intuitive design and powerful features make it an essential tool for our daily workflow.",variant:"block",size:"md",author:"Sarah Johnson",source:"Product Manager, TechCorp",showQuotationMarks:!0,className:"quote--testimonial"},parameters:{docs:{description:{story:"Testimonial-style quote with custom styling."}}}},m={render:()=>e.jsxs("div",{className:"quote-demo-article",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx(t,{variant:"block",size:"lg",author:"Industry Expert",showQuotationMarks:!1,className:"quote--pullquote",children:"The future belongs to those who believe in the beauty of their dreams."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),args:{children:"Sample pullquote"},parameters:{docs:{description:{story:"Pull quote style for highlighting key statements within article content."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'The best way to predict the future is to invent it.',
    variant: 'block',
    size: 'md',
    author: 'Alan Kay',
    showQuotationMarks: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="quote-demo-inline">\r
      <p>\r
        As Alan Kay once said, {' '}\r
        <Quote variant="inline" author="Alan Kay" showQuotationMarks={true}>\r
          The best way to predict the future is to invent it\r
        </Quote>\r
        , and this philosophy continues to drive innovation today.\r
      </p>\r
    </div>,
  args: {
    children: 'Sample inline quote',
    variant: 'inline'
  },
  parameters: {
    docs: {
      description: {
        story: 'Inline quotes can be used within paragraphs of text.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Two things are infinite: the universe and human stupidity; and I\\'m not sure about the universe.',
    variant: 'block',
    size: 'md',
    author: 'Albert Einstein',
    source: 'Attributed',
    showQuotationMarks: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Stay hungry, stay foolish.',
    variant: 'block',
    size: 'md',
    author: 'Steve Jobs',
    source: 'Stanford Commencement Address',
    sourceUrl: 'https://www.stanford.edu/news/2005/june15/jobs-061505.html',
    showQuotationMarks: true
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="quote-demo-sizes">\r
      <div className="quote-demo-section">\r
        <h3>Small</h3>\r
        <Quote variant="block" size="sm" author="Confucius" showQuotationMarks={true}>\r
          It does not matter how slowly you go as long as you do not stop.\r
        </Quote>\r
      </div>\r
      \r
      <div className="quote-demo-section">\r
        <h3>Medium (Default)</h3>\r
        <Quote variant="block" size="md" author="Maya Angelou" showQuotationMarks={true}>\r
          If you don't like something, change it. If you can't change it, change your attitude.\r
        </Quote>\r
      </div>\r
      \r
      <div className="quote-demo-section">\r
        <h3>Large</h3>\r
        <Quote variant="block" size="lg" author="Nelson Mandela" showQuotationMarks={true}>\r
          It always seems impossible until it's done.\r
        </Quote>\r
      </div>\r
    </div>,
  args: {
    children: 'Sample quote'
  },
  parameters: {
    docs: {
      description: {
        story: 'Different size variants for block quotes.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Innovation distinguishes between a leader and a follower.',
    variant: 'block',
    size: 'md',
    author: 'Steve Jobs',
    showQuotationMarks: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Quotes can be displayed without quotation marks for a cleaner look.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.\`,
    variant: 'block',
    size: 'md',
    author: 'Steve Jobs',
    source: 'Stanford Commencement Address, 2005',
    sourceUrl: 'https://www.stanford.edu/news/2005/june15/jobs-061505.html',
    showQuotationMarks: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Long quotes with multiple sentences work well in block format.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="quote-demo-multiple">\r
      <Quote variant="block" size="md" author="Winston Churchill" showQuotationMarks={true}>\r
        Success is not final, failure is not fatal: it is the courage to continue that counts.\r
      </Quote>\r
      \r
      <Quote variant="block" size="md" author="Franklin D. Roosevelt" showQuotationMarks={true}>\r
        The only thing we have to fear is fear itself.\r
      </Quote>\r
      \r
      <Quote variant="block" size="md" author="John F. Kennedy" source="Inaugural Address, 1961" showQuotationMarks={true}>\r
        Ask not what your country can do for you—ask what you can do for your country.\r
      </Quote>\r
    </div>,
  args: {
    children: 'Sample quote'
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple quotes can be used together to create a collection or comparison.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This product has completely transformed how our team works. The intuitive design and powerful features make it an essential tool for our daily workflow.',
    variant: 'block',
    size: 'md',
    author: 'Sarah Johnson',
    source: 'Product Manager, TechCorp',
    showQuotationMarks: true,
    className: 'quote--testimonial'
  },
  parameters: {
    docs: {
      description: {
        story: 'Testimonial-style quote with custom styling.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="quote-demo-article">\r
      <p>\r
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor \r
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis \r
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r
      </p>\r
      \r
      <Quote variant="block" size="lg" author="Industry Expert" showQuotationMarks={false} className="quote--pullquote">\r
        The future belongs to those who believe in the beauty of their dreams.\r
      </Quote>\r
      \r
      <p>\r
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore \r
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, \r
        sunt in culpa qui officia deserunt mollit anim id est laborum.\r
      </p>\r
    </div>,
  args: {
    children: 'Sample pullquote'
  },
  parameters: {
    docs: {
      description: {
        story: 'Pull quote style for highlighting key statements within article content.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const x=["BlockQuote","InlineQuote","WithSource","WithSourceLink","Sizes","WithoutQuotationMarks","LongQuote","MultipleQuotes","Testimonial","PullQuote"];export{a as BlockQuote,s as InlineQuote,c as LongQuote,d as MultipleQuotes,m as PullQuote,u as Sizes,h as Testimonial,n as WithSource,i as WithSourceLink,l as WithoutQuotationMarks,x as __namedExportsOrder,S as default};
