import{j as o}from"./iframe-CdBaqdCg.js";import{P as t}from"./Popup-Bc4PnGYO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BH2Zh2Q5.js";import"./index-Z8ZsTslQ.js";const N={title:"Atoms/Popup",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
A flexible popup component that supports both modal and non-modal modes with various triggers and positioning options.

## Features

- **Modal & Non-Modal Modes**: Support for overlay popups and positioned popups
- **Multiple Triggers**: Click, hover, focus, or manual control
- **Flexible Positioning**: 12 different placement options with automatic positioning
- **Portal Rendering**: Renders outside normal DOM hierarchy to avoid z-index issues
- **Accessibility**: Full keyboard navigation and ARIA attributes
- **Animation Support**: Smooth open/close animations with customizable timing
- **Backdrop Control**: Configurable backdrop for modal mode
- **Auto-close Options**: Click outside, escape key, or manual control
- **Arrow Support**: Optional arrow pointing to trigger element

## Basic Usage

\`\`\`tsx
// Basic popup with click trigger
<Popup trigger="click" content="Hello World!">
  <button>Click me</button>
</Popup>

// Modal popup
<Popup mode="modal" trigger="click" content="Modal Content">
  <button>Open Modal</button>
</Popup>

// Hover tooltip
<Popup trigger="hover" placement="top" arrow content="Tooltip text">
  <span>Hover me</span>
</Popup>
\`\`\`
        `}}},argTypes:{content:{control:"text",description:"Content to display in the popup"},mode:{control:{type:"select"},options:["modal","non-modal"],description:"Modal or non-modal behavior"},trigger:{control:{type:"select"},options:["click","hover","focus","manual"],description:"How the popup is triggered"},placement:{control:{type:"select"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],description:"Placement of the popup relative to trigger"},arrow:{control:"boolean",description:"Whether to show an arrow pointing to the trigger"},disabled:{control:"boolean",description:"Whether the popup is disabled"},showBackdrop:{control:"boolean",description:"Whether to show backdrop in modal mode"},animationDuration:{control:{type:"number",min:0,max:1e3,step:50},description:"Animation duration in milliseconds"}},args:{content:"Hello from Popup!",trigger:"click",placement:"bottom",mode:"non-modal",arrow:!1,disabled:!1,showBackdrop:!0,animationDuration:200},render:e=>o.jsx("div",{className:"popup-story-container",children:o.jsx(t,{...e,content:o.jsx("div",{className:"popup-story-content",children:e.content}),children:o.jsx("button",{className:"popup-story-trigger",children:"Click me"})})})},r={},s={args:{arrow:!0,content:"Popup with arrow"},render:e=>o.jsx("div",{className:"popup-story-container",children:o.jsx(t,{...e,content:o.jsx("div",{className:"popup-story-content",children:e.content}),children:o.jsx("button",{className:"popup-story-trigger",children:"Click me"})})})},a={args:{trigger:"click",content:"Click to toggle",arrow:!0},render:e=>o.jsx("div",{className:"popup-story-container",children:o.jsx(t,{...e,content:o.jsx("div",{className:"popup-story-content",children:e.content}),children:o.jsx("button",{className:"popup-story-trigger",children:"Click me"})})})},n={args:{trigger:"hover",content:"Hover to show",arrow:!0,showDelay:200},render:e=>o.jsx("div",{className:"popup-story-container",children:o.jsx(t,{...e,content:o.jsx("div",{className:"popup-story-content",children:e.content}),children:o.jsx("button",{className:"popup-story-trigger",children:"Hover me"})})})},p={args:{trigger:"focus",content:"Focus to show",arrow:!0},render:e=>o.jsx("div",{className:"popup-story-container",children:o.jsx(t,{...e,content:o.jsx("div",{className:"popup-story-content",children:e.content}),children:o.jsx("input",{type:"text",placeholder:"Focus trigger",className:"popup-story-input"})})})},c={args:{mode:"modal",content:"This is a modal popup with backdrop",showBackdrop:!0},render:e=>o.jsx("div",{className:"popup-story-container",children:o.jsx(t,{...e,content:o.jsx("div",{className:"popup-story-content",children:e.content}),children:o.jsx("button",{className:"popup-story-trigger",children:"Open Modal"})})})},i={args:{mode:"modal",content:"Modal without backdrop",showBackdrop:!1},render:e=>o.jsx("div",{className:"popup-story-container",children:o.jsx(t,{...e,content:o.jsx("div",{className:"popup-story-content",children:e.content}),children:o.jsx("button",{className:"popup-story-trigger",children:"Open Modal"})})})},l={args:{placement:"top",content:"Top placement",arrow:!0}},d={args:{placement:"bottom",content:"Bottom placement",arrow:!0}},u={args:{placement:"left",content:"Left placement",arrow:!0}},m={args:{placement:"right",content:"Right placement",arrow:!0}},g={args:{disabled:!0,content:"This popup is disabled",arrow:!0},render:e=>o.jsx("div",{className:"popup-story-container",children:o.jsx(t,{...e,content:o.jsx("div",{className:"popup-story-content",children:e.content}),children:o.jsx("button",{className:"popup-story-trigger",disabled:!0,children:"Disabled"})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    arrow: true,
    content: 'Popup with arrow'
  },
  render: args => <div className="popup-story-container">\r
      <Popup {...args} content={<div className="popup-story-content">{args.content}</div>}>\r
        <button className="popup-story-trigger">Click me</button>\r
      </Popup>\r
    </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'click',
    content: 'Click to toggle',
    arrow: true
  },
  render: args => <div className="popup-story-container">\r
      <Popup {...args} content={<div className="popup-story-content">{args.content}</div>}>\r
        <button className="popup-story-trigger">Click me</button>\r
      </Popup>\r
    </div>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'hover',
    content: 'Hover to show',
    arrow: true,
    showDelay: 200
  },
  render: args => <div className="popup-story-container">\r
      <Popup {...args} content={<div className="popup-story-content">{args.content}</div>}>\r
        <button className="popup-story-trigger">Hover me</button>\r
      </Popup>\r
    </div>
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'focus',
    content: 'Focus to show',
    arrow: true
  },
  render: args => <div className="popup-story-container">\r
      <Popup {...args} content={<div className="popup-story-content">{args.content}</div>}>\r
        <input type="text" placeholder="Focus trigger" className="popup-story-input" />\r
      </Popup>\r
    </div>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'modal',
    content: 'This is a modal popup with backdrop',
    showBackdrop: true
  },
  render: args => <div className="popup-story-container">\r
      <Popup {...args} content={<div className="popup-story-content">{args.content}</div>}>\r
        <button className="popup-story-trigger">Open Modal</button>\r
      </Popup>\r
    </div>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'modal',
    content: 'Modal without backdrop',
    showBackdrop: false
  },
  render: args => <div className="popup-story-container">\r
      <Popup {...args} content={<div className="popup-story-content">{args.content}</div>}>\r
        <button className="popup-story-trigger">Open Modal</button>\r
      </Popup>\r
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    content: 'Top placement',
    arrow: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    content: 'Bottom placement',
    arrow: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    content: 'Left placement',
    arrow: true
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    content: 'Right placement',
    arrow: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    content: 'This popup is disabled',
    arrow: true
  },
  render: args => <div className="popup-story-container">\r
      <Popup {...args} content={<div className="popup-story-content">{args.content}</div>}>\r
        <button className="popup-story-trigger" disabled>Disabled</button>\r
      </Popup>\r
    </div>
}`,...g.parameters?.docs?.source}}};const x=["Default","WithArrow","ClickTrigger","HoverTrigger","FocusTrigger","ModalPopup","ModalWithoutBackdrop","TopPlacement","BottomPlacement","LeftPlacement","RightPlacement","DisabledPopup"];export{d as BottomPlacement,a as ClickTrigger,r as Default,g as DisabledPopup,p as FocusTrigger,n as HoverTrigger,u as LeftPlacement,c as ModalPopup,i as ModalWithoutBackdrop,m as RightPlacement,l as TopPlacement,s as WithArrow,x as __namedExportsOrder,N as default};
