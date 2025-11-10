import{j as e,r as _}from"./iframe-BMIDd8Dz.js";import"./preload-helper-PPVm8Dsz.js";const b=({current:r=0,items:s,direction:i="horizontal",size:o="default",status:a="process",clickable:n=!1,onChange:p,className:k})=>{const x=["steps",`steps--${i}`,`steps--${o}`,k].filter(Boolean).join(" "),N=t=>{n&&!s[t]?.disabled&&p&&p(t)},j=t=>s[t]?.disabled?"disabled":t<r?"finish":t===r?a:"wait";return e.jsx("div",{className:x,role:"group","aria-label":"Progress steps",children:s.map((t,c)=>{const I=j(c),q=c===s.length-1,E=c===r;return e.jsxs("div",{className:`steps__item steps__item--${I} ${n&&!t.disabled?"steps__item--clickable":""}`,onClick:()=>N(c),role:n&&!t.disabled?"button":void 0,"aria-current":E?"step":void 0,"aria-disabled":t.disabled,tabIndex:n&&!t.disabled?0:void 0,onKeyDown:C=>{n&&!t.disabled&&(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),N(c))},children:[e.jsxs("div",{className:"steps__item-container",children:[e.jsx("div",{className:"steps__item-icon",children:t.icon?e.jsx("span",{className:"steps__item-custom-icon",children:t.icon}):e.jsx("span",{className:"steps__item-number",children:c+1})}),e.jsxs("div",{className:"steps__item-content",children:[e.jsx("div",{className:"steps__item-title",children:t.title}),t.description&&e.jsx("div",{className:"steps__item-description",children:t.description})]})]}),!q&&e.jsx("div",{className:"steps__item-tail"})]},t.key)})})};b.__docgenInfo={description:"",methods:[],displayName:"Steps",props:{current:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},items:{required:!0,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'wait' | 'process' | 'finish' | 'error'",elements:[{name:"literal",value:"'wait'"},{name:"literal",value:"'process'"},{name:"literal",value:"'finish'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'process'",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(current: number) => void",signature:{arguments:[{type:{name:"number"},name:"current"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const D={title:"Atoms/Steps",component:b,parameters:{layout:"centered",docs:{description:{component:"A Steps component for displaying progress through a sequence of logical steps. Supports horizontal and vertical orientations with customizable content."}}},argTypes:{current:{control:{type:"number",min:0,max:10},description:"Current step index (0-based)"},direction:{control:"select",options:["horizontal","vertical"],description:"Layout direction"},size:{control:"select",options:["small","default"],description:"Size variant"},status:{control:"select",options:["wait","process","finish","error"],description:"Status of current step"},clickable:{control:"boolean",description:"Allow clicking on steps to navigate"}}},l=[{key:"step1",title:"Account Setup",description:"Create your account and verify email"},{key:"step2",title:"Profile Information",description:"Add your personal details"},{key:"step3",title:"Preferences",description:"Configure your settings"},{key:"step4",title:"Complete",description:"Review and finish setup"}],d={args:{current:1,items:l}},u={args:{current:2,items:l,direction:"vertical"},parameters:{docs:{description:{story:"Steps displayed in vertical layout, useful for sidebars or narrow spaces."}}}},m={args:{current:1,items:l,size:"small"},parameters:{docs:{description:{story:"Compact size variant for smaller UI areas."}}}},g={args:{current:1,items:[{key:"cart",title:"Shopping Cart",description:"Add items to cart",icon:"🛒"},{key:"payment",title:"Payment",description:"Enter payment details",icon:"💳"},{key:"shipping",title:"Shipping",description:"Choose delivery method",icon:"📦"},{key:"confirmation",title:"Confirmation",description:"Order confirmation",icon:"✅"}]},parameters:{docs:{description:{story:"Steps with custom icons instead of numbers."}}}},y={args:{current:2,items:l,status:"error"},parameters:{docs:{description:{story:"Steps showing error state on current step."}}}},h={args:{current:1,items:l,clickable:!0},render:r=>{const[s,i]=_.useState(r.current||1);return e.jsxs("div",{className:"steps-demo",children:[e.jsx(b,{...r,current:s,onChange:i}),e.jsxs("div",{className:"steps-demo__info",children:["Current step: ",s+1," - ",l[s]?.title]})]})},parameters:{docs:{description:{story:"Interactive steps that can be clicked to navigate. Try clicking on different steps."}}}},f={args:{current:2,items:[{key:"step1",title:"Basic Info",description:"Required information"},{key:"step2",title:"Advanced Options",description:"Optional configuration"},{key:"step3",title:"Premium Features",description:"Upgrade required",disabled:!0},{key:"step4",title:"Final Review",description:"Complete setup",disabled:!0}],clickable:!0},parameters:{docs:{description:{story:"Steps with some items disabled, preventing interaction."}}}},w=[{key:"validate",title:"Validation",description:"Checking form data"},{key:"process",title:"Processing",description:"Creating your account"},{key:"notify",title:"Notification",description:"Sending confirmation email"},{key:"complete",title:"Complete",description:"Account successfully created"}],v={args:{current:0,items:w,status:"process"},render:r=>{const[s,i]=_.useState(r.current||0),[o,a]=_.useState(r.status||"process"),n=()=>{s<w.length-1?(i(s+1),a("process")):a("finish")},p=()=>{a("error")},k=()=>{i(0),a("process")};return e.jsxs("div",{className:"steps-process-demo",children:[e.jsx(b,{...r,current:s,status:o}),e.jsxs("div",{className:"steps-process-demo__controls",children:[e.jsx("button",{onClick:n,disabled:o==="finish",children:"Next Step"}),e.jsx("button",{onClick:p,disabled:o==="error",children:"Simulate Error"}),e.jsx("button",{onClick:k,children:"Reset"})]}),e.jsxs("div",{className:"steps-process-demo__status",children:["Status: ",o," | Step: ",s+1,"/",w.length]})]})},parameters:{docs:{description:{story:"Interactive demo showing different status states and progression through steps."}}}},S={args:{current:1,direction:"vertical",items:[{key:"setup",title:"Initial Setup",description:"Configure your development environment with all necessary tools and dependencies. This includes installing Node.js, setting up your IDE, and configuring version control."},{key:"development",title:"Development Phase",description:"Write your code following best practices and coding standards. Implement features incrementally and test thoroughly."},{key:"testing",title:"Testing & Quality Assurance",description:"Run comprehensive tests including unit tests, integration tests, and end-to-end testing to ensure code quality."},{key:"deployment",title:"Deployment",description:"Deploy your application to production environment with proper monitoring and rollback procedures."}]},parameters:{docs:{description:{story:"Vertical steps with longer descriptions to show text wrapping and layout behavior."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const A=["Default","Vertical","Small","WithCustomIcons","WithError","Clickable","WithDisabledSteps","ProcessFlow","VerticalWithLongContent"];export{h as Clickable,d as Default,v as ProcessFlow,m as Small,u as Vertical,S as VerticalWithLongContent,g as WithCustomIcons,f as WithDisabledSteps,y as WithError,A as __namedExportsOrder,D as default};
