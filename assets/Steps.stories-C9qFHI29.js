import{j as e,r as w}from"./iframe-NKDFF6YA.js";import"./preload-helper-PPVm8Dsz.js";const b=({current:r=0,items:s,direction:n="horizontal",size:i="default",status:o="process",clickable:c=!1,onChange:l,className:k})=>{const _=["steps",`steps--${n}`,`steps--${i}`,k].filter(Boolean).join(" "),N=t=>{c&&!s[t]?.disabled&&l&&l(t)},x=t=>s[t]?.disabled?"disabled":t<r?"finish":t===r?o:"wait";return e.jsx("div",{className:_,children:s.map((t,p)=>{const j=x(p),I=p===s.length-1;return e.jsxs("div",{className:`steps__item steps__item--${j} ${c&&!t.disabled?"steps__item--clickable":""}`,onClick:()=>N(p),children:[e.jsxs("div",{className:"steps__item-container",children:[e.jsx("div",{className:"steps__item-icon",children:t.icon?e.jsx("span",{className:"steps__item-custom-icon",children:t.icon}):e.jsx("span",{className:"steps__item-number",children:p+1})}),e.jsxs("div",{className:"steps__item-content",children:[e.jsx("div",{className:"steps__item-title",children:t.title}),t.description&&e.jsx("div",{className:"steps__item-description",children:t.description})]})]}),!I&&e.jsx("div",{className:"steps__item-tail"})]},t.key)})})};b.__docgenInfo={description:"",methods:[],displayName:"Steps",props:{current:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},items:{required:!0,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'wait' | 'process' | 'finish' | 'error'",elements:[{name:"literal",value:"'wait'"},{name:"literal",value:"'process'"},{name:"literal",value:"'finish'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'process'",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(current: number) => void",signature:{arguments:[{type:{name:"number"},name:"current"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const z={title:"Atoms/Steps",component:b,parameters:{layout:"centered",docs:{description:{component:"A Steps component for displaying progress through a sequence of logical steps. Supports horizontal and vertical orientations with customizable content."}}},argTypes:{current:{control:{type:"number",min:0,max:10},description:"Current step index (0-based)"},direction:{control:"select",options:["horizontal","vertical"],description:"Layout direction"},size:{control:"select",options:["small","default"],description:"Size variant"},status:{control:"select",options:["wait","process","finish","error"],description:"Status of current step"},clickable:{control:"boolean",description:"Allow clicking on steps to navigate"}}},a=[{key:"step1",title:"Account Setup",description:"Create your account and verify email"},{key:"step2",title:"Profile Information",description:"Add your personal details"},{key:"step3",title:"Preferences",description:"Configure your settings"},{key:"step4",title:"Complete",description:"Review and finish setup"}],d={args:{current:1,items:a}},u={args:{current:2,items:a,direction:"vertical"},parameters:{docs:{description:{story:"Steps displayed in vertical layout, useful for sidebars or narrow spaces."}}}},m={args:{current:1,items:a,size:"small"},parameters:{docs:{description:{story:"Compact size variant for smaller UI areas."}}}},g={args:{current:1,items:[{key:"cart",title:"Shopping Cart",description:"Add items to cart",icon:"🛒"},{key:"payment",title:"Payment",description:"Enter payment details",icon:"💳"},{key:"shipping",title:"Shipping",description:"Choose delivery method",icon:"📦"},{key:"confirmation",title:"Confirmation",description:"Order confirmation",icon:"✅"}]},parameters:{docs:{description:{story:"Steps with custom icons instead of numbers."}}}},y={args:{current:2,items:a,status:"error"},parameters:{docs:{description:{story:"Steps showing error state on current step."}}}},h={args:{current:1,items:a,clickable:!0},render:r=>{const[s,n]=w.useState(r.current||1);return e.jsxs("div",{className:"steps-demo",children:[e.jsx(b,{...r,current:s,onChange:n}),e.jsxs("div",{className:"steps-demo__info",children:["Current step: ",s+1," - ",a[s]?.title]})]})},parameters:{docs:{description:{story:"Interactive steps that can be clicked to navigate. Try clicking on different steps."}}}},f={args:{current:2,items:[{key:"step1",title:"Basic Info",description:"Required information"},{key:"step2",title:"Advanced Options",description:"Optional configuration"},{key:"step3",title:"Premium Features",description:"Upgrade required",disabled:!0},{key:"step4",title:"Final Review",description:"Complete setup",disabled:!0}],clickable:!0},parameters:{docs:{description:{story:"Steps with some items disabled, preventing interaction."}}}},C=[{key:"validate",title:"Validation",description:"Checking form data"},{key:"process",title:"Processing",description:"Creating your account"},{key:"notify",title:"Notification",description:"Sending confirmation email"},{key:"complete",title:"Complete",description:"Account successfully created"}],v={args:{current:0,items:C,status:"process"},render:r=>{const[s,n]=w.useState(r.current||0),[i,o]=w.useState(r.status||"process"),c=()=>{s<C.length-1?(n(s+1),o("process")):o("finish")},l=()=>{o("error")},k=()=>{n(0),o("process")};return e.jsxs("div",{className:"steps-process-demo",children:[e.jsx(b,{...r,current:s,status:i}),e.jsxs("div",{className:"steps-process-demo__controls",children:[e.jsx("button",{onClick:c,disabled:i==="finish",children:"Next Step"}),e.jsx("button",{onClick:l,disabled:i==="error",children:"Simulate Error"}),e.jsx("button",{onClick:k,children:"Reset"})]}),e.jsxs("div",{className:"steps-process-demo__status",children:["Status: ",i," | Step: ",s+1,"/",C.length]})]})},parameters:{docs:{description:{story:"Interactive demo showing different status states and progression through steps."}}}},S={args:{current:1,direction:"vertical",items:[{key:"setup",title:"Initial Setup",description:"Configure your development environment with all necessary tools and dependencies. This includes installing Node.js, setting up your IDE, and configuring version control."},{key:"development",title:"Development Phase",description:"Write your code following best practices and coding standards. Implement features incrementally and test thoroughly."},{key:"testing",title:"Testing & Quality Assurance",description:"Run comprehensive tests including unit tests, integration tests, and end-to-end testing to ensure code quality."},{key:"deployment",title:"Deployment",description:"Deploy your application to production environment with proper monitoring and rollback procedures."}]},parameters:{docs:{description:{story:"Vertical steps with longer descriptions to show text wrapping and layout behavior."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    current: 1,
    items: basicSteps
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    current: 2,
    items: basicSteps,
    direction: 'vertical'
  },
  parameters: {
    docs: {
      description: {
        story: 'Steps displayed in vertical layout, useful for sidebars or narrow spaces.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    current: 1,
    items: basicSteps,
    size: 'small'
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact size variant for smaller UI areas.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    current: 1,
    items: [{
      key: 'cart',
      title: 'Shopping Cart',
      description: 'Add items to cart',
      icon: '🛒'
    }, {
      key: 'payment',
      title: 'Payment',
      description: 'Enter payment details',
      icon: '💳'
    }, {
      key: 'shipping',
      title: 'Shipping',
      description: 'Choose delivery method',
      icon: '📦'
    }, {
      key: 'confirmation',
      title: 'Confirmation',
      description: 'Order confirmation',
      icon: '✅'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Steps with custom icons instead of numbers.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    current: 2,
    items: basicSteps,
    status: 'error'
  },
  parameters: {
    docs: {
      description: {
        story: 'Steps showing error state on current step.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    current: 1,
    items: basicSteps,
    clickable: true
  },
  render: args => {
    const [current, setCurrent] = useState(args.current || 1);
    return <div className="steps-demo">\r
        <Steps {...args} current={current} onChange={setCurrent} />\r
        <div className="steps-demo__info">\r
          Current step: {current + 1} - {basicSteps[current]?.title}\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive steps that can be clicked to navigate. Try clicking on different steps.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    current: 2,
    items: [{
      key: 'step1',
      title: 'Basic Info',
      description: 'Required information'
    }, {
      key: 'step2',
      title: 'Advanced Options',
      description: 'Optional configuration'
    }, {
      key: 'step3',
      title: 'Premium Features',
      description: 'Upgrade required',
      disabled: true
    }, {
      key: 'step4',
      title: 'Final Review',
      description: 'Complete setup',
      disabled: true
    }],
    clickable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Steps with some items disabled, preventing interaction.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    current: 0,
    items: processSteps,
    status: 'process'
  },
  render: args => {
    const [current, setCurrent] = useState(args.current || 0);
    const [status, setStatus] = useState<'wait' | 'process' | 'finish' | 'error'>(args.status || 'process');
    const handleNext = () => {
      if (current < processSteps.length - 1) {
        setCurrent(current + 1);
        setStatus('process');
      } else {
        setStatus('finish');
      }
    };
    const handleError = () => {
      setStatus('error');
    };
    const handleReset = () => {
      setCurrent(0);
      setStatus('process');
    };
    return <div className="steps-process-demo">\r
        <Steps {...args} current={current} status={status} />\r
        \r
        <div className="steps-process-demo__controls">\r
          <button onClick={handleNext} disabled={status === 'finish'}>\r
            Next Step\r
          </button>\r
          <button onClick={handleError} disabled={status === 'error'}>\r
            Simulate Error\r
          </button>\r
          <button onClick={handleReset}>\r
            Reset\r
          </button>\r
        </div>\r
        \r
        <div className="steps-process-demo__status">\r
          Status: {status} | Step: {current + 1}/{processSteps.length}\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing different status states and progression through steps.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    current: 1,
    direction: 'vertical',
    items: [{
      key: 'setup',
      title: 'Initial Setup',
      description: 'Configure your development environment with all necessary tools and dependencies. This includes installing Node.js, setting up your IDE, and configuring version control.'
    }, {
      key: 'development',
      title: 'Development Phase',
      description: 'Write your code following best practices and coding standards. Implement features incrementally and test thoroughly.'
    }, {
      key: 'testing',
      title: 'Testing & Quality Assurance',
      description: 'Run comprehensive tests including unit tests, integration tests, and end-to-end testing to ensure code quality.'
    }, {
      key: 'deployment',
      title: 'Deployment',
      description: 'Deploy your application to production environment with proper monitoring and rollback procedures.'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical steps with longer descriptions to show text wrapping and layout behavior.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};const E=["Default","Vertical","Small","WithCustomIcons","WithError","Clickable","WithDisabledSteps","ProcessFlow","VerticalWithLongContent"];export{h as Clickable,d as Default,v as ProcessFlow,m as Small,u as Vertical,S as VerticalWithLongContent,g as WithCustomIcons,f as WithDisabledSteps,y as WithError,E as __namedExportsOrder,z as default};
