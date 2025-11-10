import{j as e}from"./iframe-C-Dpaqp0.js";import{T as t}from"./Text-DKFgGKuj.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"Atoms/Text",component:t,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["xs","sm","base","lg","xl"],description:"Text size variant"},weight:{control:"select",options:["normal","medium","semibold","bold"],description:"Font weight"},color:{control:"select",options:["primary","secondary","muted","accent","success","warning","error"],description:"Text color variant"},align:{control:"select",options:["left","center","right","justify"],description:"Text alignment"},as:{control:"select",options:["p","span","div","small","strong","em"],description:"HTML element to render"},italic:{control:"boolean",description:"Make text italic"},underline:{control:"boolean",description:"Underline text"},strikethrough:{control:"boolean",description:"Strike through text"},truncate:{control:"boolean",description:"Truncate with ellipsis"},lineClamp:{control:"number",description:"Maximum lines before truncating"},children:{control:"text",description:"Text content"}},args:{children:"Sample text content for demonstration purposes."}},r={parameters:{docs:{description:{story:"Default text with base size, normal weight, and primary color."}}}},s={render:()=>e.jsxs("div",{className:"text-story-section",children:[e.jsx(t,{size:"xs",children:"Extra Small - Perfect for captions and fine print"}),e.jsx(t,{size:"sm",children:"Small - Good for secondary information"}),e.jsx(t,{size:"base",children:"Base - Standard body text size"}),e.jsx(t,{size:"lg",children:"Large - Emphasis text or lead paragraphs"}),e.jsx(t,{size:"xl",children:"Extra Large - Prominent text or callouts"})]}),parameters:{docs:{description:{story:"All available text size variants from extra small to extra large."}}}},i={render:()=>e.jsxs("div",{className:"text-story-section",children:[e.jsx(t,{weight:"normal",children:"Normal weight - Standard text weight"}),e.jsx(t,{weight:"medium",children:"Medium weight - Slightly emphasized"}),e.jsx(t,{weight:"semibold",children:"Semibold weight - More emphasis"}),e.jsx(t,{weight:"bold",children:"Bold weight - Strong emphasis"})]}),parameters:{docs:{description:{story:"Different font weight options for text emphasis."}}}},o={render:()=>e.jsxs("div",{className:"text-story-section",children:[e.jsx(t,{color:"primary",children:"Primary - Default text color"}),e.jsx(t,{color:"secondary",children:"Secondary - Subdued text"}),e.jsx(t,{color:"muted",children:"Muted - De-emphasized text"}),e.jsx(t,{color:"accent",children:"Accent - Brand color text"}),e.jsx(t,{color:"success",children:"Success - Positive messaging"}),e.jsx(t,{color:"warning",children:"Warning - Cautionary messaging"}),e.jsx(t,{color:"error",children:"Error - Error states and alerts"})]}),parameters:{docs:{description:{story:"Color variants using theme color tokens for different contexts."}}}},n={render:()=>e.jsxs("div",{className:"text-story-alignment",children:[e.jsx(t,{align:"left",children:"Left aligned - Default alignment for most languages"}),e.jsx(t,{align:"center",children:"Center aligned - Good for headings and callouts"}),e.jsx(t,{align:"right",children:"Right aligned - Less common, useful for specific layouts"}),e.jsx(t,{align:"justify",children:"Justify aligned - This longer text demonstrates how justify alignment works by distributing words evenly across the line width, creating clean edges on both sides."})]}),parameters:{docs:{description:{story:"Text alignment options for different layout needs."}}}},a={render:()=>e.jsxs("div",{className:"text-story-section",children:[e.jsx(t,{italic:!0,children:"Italic text - Emphasized or stylistic text"}),e.jsx(t,{underline:!0,children:"Underlined text - Traditional emphasis"}),e.jsx(t,{strikethrough:!0,children:"Strikethrough text - Deleted or invalid content"}),e.jsx(t,{weight:"bold",italic:!0,underline:!0,children:"Combined modifiers - Bold, italic, and underlined"})]}),parameters:{docs:{description:{story:"Style modifiers that can be combined for different text treatments."}}}},l={render:()=>e.jsxs("div",{className:"text-story-section",children:[e.jsx(t,{as:"p",children:"Paragraph element - Default semantic choice"}),e.jsx(t,{as:"span",children:"Span element - Inline text"}),e.jsx(t,{as:"div",children:"Div element - Block text container"}),e.jsx(t,{as:"small",size:"sm",children:"Small element - Fine print and disclaimers"}),e.jsx(t,{as:"strong",weight:"bold",children:"Strong element - Important text"}),e.jsx(t,{as:"em",italic:!0,children:"Em element - Emphasized text"})]}),parameters:{docs:{description:{story:"Different HTML elements for proper semantic markup."}}}},c={render:()=>e.jsxs("div",{className:"text-story-truncation",children:[e.jsxs("div",{className:"text-story-truncation-container",children:[e.jsx("h4",{children:"Single Line Truncation:"}),e.jsx(t,{truncate:!0,children:"This is a very long text that will be truncated with an ellipsis when it exceeds the container width. Only one line will be shown."})]}),e.jsxs("div",{className:"text-story-truncation-container",children:[e.jsx("h4",{children:"2-Line Clamp:"}),e.jsx(t,{lineClamp:2,children:"This is a longer text that demonstrates the line clamp feature. It will show exactly two lines before truncating with an ellipsis. This is useful for card layouts and previews where you want consistent heights."})]}),e.jsxs("div",{className:"text-story-truncation-container",children:[e.jsx("h4",{children:"3-Line Clamp:"}),e.jsx(t,{lineClamp:3,children:"This is an even longer text that shows how the line clamp works with three lines. You can see that it maintains proper line spacing and truncates cleanly at the end of the third line. This is commonly used for article previews, product descriptions, and other content where you need to limit vertical space while showing more content than a single line would allow."})]})]}),parameters:{docs:{description:{story:"Examples of text truncation using ellipsis and line clamping."}}}},d={args:{size:"xl",children:"Responsive text that scales down on smaller screens"},parameters:{viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop",styles:{width:"1200px",height:"800px"}}}},docs:{description:{story:"Extra large text that automatically scales down on smaller viewports. Use viewport controls to see the responsive behavior."}}}},m={render:()=>e.jsxs("div",{className:"text-story-theme-demo",children:[e.jsx(t,{size:"lg",weight:"semibold",color:"primary",children:"Theme Integration Showcase"}),e.jsx(t,{color:"secondary",children:"This text adapts to your selected theme. Switch between Dark, Light, and Custom themes using the toolbar to see how colors change automatically."}),e.jsxs("div",{className:"text-story-color-grid",children:[e.jsx(t,{color:"primary",children:"Primary"}),e.jsx(t,{color:"secondary",children:"Secondary"}),e.jsx(t,{color:"muted",children:"Muted"}),e.jsx(t,{color:"accent",children:"Accent"}),e.jsx(t,{color:"success",children:"Success"}),e.jsx(t,{color:"warning",children:"Warning"}),e.jsx(t,{color:"error",children:"Error"})]}),e.jsxs("div",{className:"text-story-theme-info",children:[e.jsx(t,{size:"sm",weight:"medium",children:"Theme Variables Used:"}),e.jsxs(t,{size:"xs",as:"div",color:"muted",children:[e.jsx("code",{children:"--color-text"}),", ",e.jsx("code",{children:"--color-text-secondary"}),",",e.jsx("code",{children:"--color-text-muted"}),", ",e.jsx("code",{children:"--color-accent"}),",",e.jsx("code",{children:"--color-success"}),", ",e.jsx("code",{children:"--color-warning"}),",",e.jsx("code",{children:"--color-error"})]})]})]}),parameters:{docs:{description:{story:"Demonstrates how text colors adapt to different themes using CSS custom properties."}}}},h={render:()=>e.jsx("div",{className:"text-story-comprehensive",children:e.jsxs("div",{className:"text-story-grid",children:[e.jsxs("div",{className:"text-story-grid-section",children:[e.jsx("h4",{children:"Size + Weight Combinations"}),e.jsx(t,{size:"xl",weight:"bold",color:"primary",children:"XL Bold Primary"}),e.jsx(t,{size:"lg",weight:"semibold",color:"accent",children:"Large Semibold Accent"}),e.jsx(t,{size:"base",weight:"medium",color:"secondary",children:"Base Medium Secondary"}),e.jsx(t,{size:"sm",weight:"normal",color:"muted",children:"Small Normal Muted"})]}),e.jsxs("div",{className:"text-story-grid-section",children:[e.jsx("h4",{children:"Semantic Elements"}),e.jsx(t,{as:"strong",weight:"bold",color:"success",children:"Strong Success"}),e.jsx(t,{as:"em",italic:!0,color:"warning",children:"Em Warning"}),e.jsx(t,{as:"small",size:"xs",color:"error",children:"Small Error"}),e.jsx(t,{as:"span",underline:!0,color:"accent",children:"Span Underlined"})]}),e.jsxs("div",{className:"text-story-grid-section",children:[e.jsx("h4",{children:"Style Combinations"}),e.jsx(t,{weight:"bold",italic:!0,color:"primary",children:"Bold Italic"}),e.jsx(t,{underline:!0,strikethrough:!0,color:"muted",children:"Underline + Strike"}),e.jsx(t,{size:"lg",weight:"semibold",italic:!0,color:"accent",children:"Large Semibold Italic"})]})]})}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of text combinations across sizes, weights, colors, and styles."}}}},x={args:{size:"base",weight:"normal",color:"primary",align:"left",as:"p",children:"Interactive text example - modify properties in the controls panel",italic:!1,underline:!1,strikethrough:!1,truncate:!1},parameters:{docs:{description:{story:"Interactive story where you can modify all text properties using the controls panel below."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default text with base size, normal weight, and primary color.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-section">\r
      <Text size="xs">Extra Small - Perfect for captions and fine print</Text>\r
      <Text size="sm">Small - Good for secondary information</Text>\r
      <Text size="base">Base - Standard body text size</Text>\r
      <Text size="lg">Large - Emphasis text or lead paragraphs</Text>\r
      <Text size="xl">Extra Large - Prominent text or callouts</Text>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All available text size variants from extra small to extra large.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-section">\r
      <Text weight="normal">Normal weight - Standard text weight</Text>\r
      <Text weight="medium">Medium weight - Slightly emphasized</Text>\r
      <Text weight="semibold">Semibold weight - More emphasis</Text>\r
      <Text weight="bold">Bold weight - Strong emphasis</Text>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different font weight options for text emphasis.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-section">\r
      <Text color="primary">Primary - Default text color</Text>\r
      <Text color="secondary">Secondary - Subdued text</Text>\r
      <Text color="muted">Muted - De-emphasized text</Text>\r
      <Text color="accent">Accent - Brand color text</Text>\r
      <Text color="success">Success - Positive messaging</Text>\r
      <Text color="warning">Warning - Cautionary messaging</Text>\r
      <Text color="error">Error - Error states and alerts</Text>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Color variants using theme color tokens for different contexts.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-alignment">\r
      <Text align="left">Left aligned - Default alignment for most languages</Text>\r
      <Text align="center">Center aligned - Good for headings and callouts</Text>\r
      <Text align="right">Right aligned - Less common, useful for specific layouts</Text>\r
      <Text align="justify">Justify aligned - This longer text demonstrates how justify alignment works by distributing words evenly across the line width, creating clean edges on both sides.</Text>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Text alignment options for different layout needs.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-section">\r
      <Text italic>Italic text - Emphasized or stylistic text</Text>\r
      <Text underline>Underlined text - Traditional emphasis</Text>\r
      <Text strikethrough>Strikethrough text - Deleted or invalid content</Text>\r
      <Text weight="bold" italic underline>\r
        Combined modifiers - Bold, italic, and underlined\r
      </Text>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Style modifiers that can be combined for different text treatments.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-section">\r
      <Text as="p">Paragraph element - Default semantic choice</Text>\r
      <Text as="span">Span element - Inline text</Text>\r
      <Text as="div">Div element - Block text container</Text>\r
      <Text as="small" size="sm">Small element - Fine print and disclaimers</Text>\r
      <Text as="strong" weight="bold">Strong element - Important text</Text>\r
      <Text as="em" italic>Em element - Emphasized text</Text>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different HTML elements for proper semantic markup.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-truncation">\r
      <div className="text-story-truncation-container">\r
        <h4>Single Line Truncation:</h4>\r
        <Text truncate>\r
          This is a very long text that will be truncated with an ellipsis when it exceeds the container width. Only one line will be shown.\r
        </Text>\r
      </div>\r
      \r
      <div className="text-story-truncation-container">\r
        <h4>2-Line Clamp:</h4>\r
        <Text lineClamp={2}>\r
          This is a longer text that demonstrates the line clamp feature. It will show exactly two lines before truncating with an ellipsis. This is useful for card layouts and previews where you want consistent heights.\r
        </Text>\r
      </div>\r
      \r
      <div className="text-story-truncation-container">\r
        <h4>3-Line Clamp:</h4>\r
        <Text lineClamp={3}>\r
          This is an even longer text that shows how the line clamp works with three lines. You can see that it maintains proper line spacing and truncates cleanly at the end of the third line. This is commonly used for article previews, product descriptions, and other content where you need to limit vertical space while showing more content than a single line would allow.\r
        </Text>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of text truncation using ellipsis and line clamping.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    children: 'Responsive text that scales down on smaller screens'
  },
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
        story: 'Extra large text that automatically scales down on smaller viewports. Use viewport controls to see the responsive behavior.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-theme-demo">\r
      <Text size="lg" weight="semibold" color="primary">\r
        Theme Integration Showcase\r
      </Text>\r
      \r
      <Text color="secondary">\r
        This text adapts to your selected theme. Switch between Dark, Light, and Custom themes using the toolbar to see how colors change automatically.\r
      </Text>\r
      \r
      <div className="text-story-color-grid">\r
        <Text color="primary">Primary</Text>\r
        <Text color="secondary">Secondary</Text>\r
        <Text color="muted">Muted</Text>\r
        <Text color="accent">Accent</Text>\r
        <Text color="success">Success</Text>\r
        <Text color="warning">Warning</Text>\r
        <Text color="error">Error</Text>\r
      </div>\r
      \r
      <div className="text-story-theme-info">\r
        <Text size="sm" weight="medium">Theme Variables Used:</Text>\r
        <Text size="xs" as="div" color="muted">\r
          <code>--color-text</code>, <code>--color-text-secondary</code>, \r
          <code>--color-text-muted</code>, <code>--color-accent</code>, \r
          <code>--color-success</code>, <code>--color-warning</code>, \r
          <code>--color-error</code>\r
        </Text>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how text colors adapt to different themes using CSS custom properties.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-story-comprehensive">\r
      <div className="text-story-grid">\r
        <div className="text-story-grid-section">\r
          <h4>Size + Weight Combinations</h4>\r
          <Text size="xl" weight="bold" color="primary">XL Bold Primary</Text>\r
          <Text size="lg" weight="semibold" color="accent">Large Semibold Accent</Text>\r
          <Text size="base" weight="medium" color="secondary">Base Medium Secondary</Text>\r
          <Text size="sm" weight="normal" color="muted">Small Normal Muted</Text>\r
        </div>\r
        \r
        <div className="text-story-grid-section">\r
          <h4>Semantic Elements</h4>\r
          <Text as="strong" weight="bold" color="success">Strong Success</Text>\r
          <Text as="em" italic color="warning">Em Warning</Text>\r
          <Text as="small" size="xs" color="error">Small Error</Text>\r
          <Text as="span" underline color="accent">Span Underlined</Text>\r
        </div>\r
        \r
        <div className="text-story-grid-section">\r
          <h4>Style Combinations</h4>\r
          <Text weight="bold" italic color="primary">Bold Italic</Text>\r
          <Text underline strikethrough color="muted">Underline + Strike</Text>\r
          <Text size="lg" weight="semibold" italic color="accent">Large Semibold Italic</Text>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of text combinations across sizes, weights, colors, and styles.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
    weight: 'normal',
    color: 'primary',
    align: 'left',
    as: 'p',
    children: 'Interactive text example - modify properties in the controls panel',
    italic: false,
    underline: false,
    strikethrough: false,
    truncate: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive story where you can modify all text properties using the controls panel below.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const w=["Default","SizeVariants","WeightVariants","ColorVariants","AlignmentVariants","StyleModifiers","SemanticElements","TruncationExamples","ResponsiveDemo","ThemeShowcase","AllCombinations","Interactive"];export{n as AlignmentVariants,h as AllCombinations,o as ColorVariants,r as Default,x as Interactive,d as ResponsiveDemo,l as SemanticElements,s as SizeVariants,a as StyleModifiers,m as ThemeShowcase,c as TruncationExamples,i as WeightVariants,w as __namedExportsOrder,y as default};
