import{j as e}from"./iframe-C-Dpaqp0.js";import{S as r}from"./Star-CdCuGh6u.js";import"./preload-helper-PPVm8Dsz.js";const P={title:"Atoms/Star",component:r,parameters:{layout:"centered",docs:{description:{component:"A flexible Star component that supports partial filling (0-100%). Can be used standalone or as part of a rating system."}}},tags:["autodocs"],argTypes:{fillPercentage:{control:{type:"range",min:0,max:100,step:1},description:"Fill percentage (0-100)"},size:{control:{type:"select"},options:["small","default","large"],description:"Size of the star"},character:{control:{type:"text"},description:"Custom character for the star"},emptyColor:{control:{type:"color"},description:"Color for empty/unfilled part"},fillColor:{control:{type:"color"},description:"Color for filled part"}}},l={args:{fillPercentage:100}},a={args:{fillPercentage:0}},t={args:{fillPercentage:50}},s={args:{fillPercentage:25}},i={args:{fillPercentage:75}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[e.jsx(r,{size:"small",fillPercentage:75}),e.jsx(r,{size:"default",fillPercentage:75}),e.jsx(r,{size:"large",fillPercentage:75})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(r,{fillPercentage:0}),e.jsx(r,{fillPercentage:10}),e.jsx(r,{fillPercentage:20}),e.jsx(r,{fillPercentage:30}),e.jsx(r,{fillPercentage:40}),e.jsx(r,{fillPercentage:50}),e.jsx(r,{fillPercentage:60}),e.jsx(r,{fillPercentage:70}),e.jsx(r,{fillPercentage:80}),e.jsx(r,{fillPercentage:90}),e.jsx(r,{fillPercentage:100})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[e.jsx(r,{fillPercentage:75,emptyColor:"#cccccc",fillColor:"#ff6b6b"}),e.jsx(r,{fillPercentage:50,emptyColor:"#e0e0e0",fillColor:"#4ecdc4"}),e.jsx(r,{fillPercentage:100,emptyColor:"#bbb",fillColor:"#9b59b6"}),e.jsx(r,{fillPercentage:25,emptyColor:"#ddd",fillColor:"#f39c12"})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center",fontSize:"24px"},children:[e.jsx(r,{fillPercentage:75,character:"❤"}),e.jsx(r,{fillPercentage:50,character:"♦"}),e.jsx(r,{fillPercentage:100,character:"●"}),e.jsx(r,{fillPercentage:60,character:"♠"}),e.jsx(r,{fillPercentage:80,character:"♣"})]})},f={render:()=>e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(r,{fillPercentage:100,onClick:()=>alert("Star clicked!"),ariaLabel:"Click to rate"}),e.jsx(r,{fillPercentage:75,onClick:()=>alert("3/4 star clicked!")}),e.jsx(r,{fillPercentage:50,onClick:()=>alert("Half star clicked!")}),e.jsx(r,{fillPercentage:25,onClick:()=>alert("1/4 star clicked!")}),e.jsx(r,{fillPercentage:0,onClick:()=>alert("Empty star clicked!")})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"10px"},children:"Small"}),e.jsxs("div",{style:{display:"flex",gap:"5px"},children:[e.jsx(r,{size:"small",fillPercentage:0}),e.jsx(r,{size:"small",fillPercentage:25}),e.jsx(r,{size:"small",fillPercentage:50}),e.jsx(r,{size:"small",fillPercentage:75}),e.jsx(r,{size:"small",fillPercentage:100})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"10px"},children:"Default"}),e.jsxs("div",{style:{display:"flex",gap:"5px"},children:[e.jsx(r,{size:"default",fillPercentage:0}),e.jsx(r,{size:"default",fillPercentage:25}),e.jsx(r,{size:"default",fillPercentage:50}),e.jsx(r,{size:"default",fillPercentage:75}),e.jsx(r,{size:"default",fillPercentage:100})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"10px"},children:"Large"}),e.jsxs("div",{style:{display:"flex",gap:"5px"},children:[e.jsx(r,{size:"large",fillPercentage:0}),e.jsx(r,{size:"large",fillPercentage:25}),e.jsx(r,{size:"large",fillPercentage:50}),e.jsx(r,{size:"large",fillPercentage:75}),e.jsx(r,{size:"large",fillPercentage:100})]})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    fillPercentage: 100
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    fillPercentage: 0
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    fillPercentage: 50
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fillPercentage: 25
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    fillPercentage: 75
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }}>\r
      <Star size="small" fillPercentage={75} />\r
      <Star size="default" fillPercentage={75} />\r
      <Star size="large" fillPercentage={75} />\r
    </div>
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  }}>\r
      <Star fillPercentage={0} />\r
      <Star fillPercentage={10} />\r
      <Star fillPercentage={20} />\r
      <Star fillPercentage={30} />\r
      <Star fillPercentage={40} />\r
      <Star fillPercentage={50} />\r
      <Star fillPercentage={60} />\r
      <Star fillPercentage={70} />\r
      <Star fillPercentage={80} />\r
      <Star fillPercentage={90} />\r
      <Star fillPercentage={100} />\r
    </div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }}>\r
      <Star fillPercentage={75} emptyColor="#cccccc" fillColor="#ff6b6b" />\r
      <Star fillPercentage={50} emptyColor="#e0e0e0" fillColor="#4ecdc4" />\r
      <Star fillPercentage={100} emptyColor="#bbb" fillColor="#9b59b6" />\r
      <Star fillPercentage={25} emptyColor="#ddd" fillColor="#f39c12" />\r
    </div>
}`,...o.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    fontSize: '24px'
  }}>\r
      <Star fillPercentage={75} character="❤" />\r
      <Star fillPercentage={50} character="♦" />\r
      <Star fillPercentage={100} character="●" />\r
      <Star fillPercentage={60} character="♠" />\r
      <Star fillPercentage={80} character="♣" />\r
    </div>
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '10px'
  }}>\r
      <Star fillPercentage={100} onClick={() => alert('Star clicked!')} ariaLabel="Click to rate" />\r
      <Star fillPercentage={75} onClick={() => alert('3/4 star clicked!')} />\r
      <Star fillPercentage={50} onClick={() => alert('Half star clicked!')} />\r
      <Star fillPercentage={25} onClick={() => alert('1/4 star clicked!')} />\r
      <Star fillPercentage={0} onClick={() => alert('Empty star clicked!')} />\r
    </div>
}`,...f.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  }}>\r
      <div>\r
        <h4 style={{
        marginBottom: '10px'
      }}>Small</h4>\r
        <div style={{
        display: 'flex',
        gap: '5px'
      }}>\r
          <Star size="small" fillPercentage={0} />\r
          <Star size="small" fillPercentage={25} />\r
          <Star size="small" fillPercentage={50} />\r
          <Star size="small" fillPercentage={75} />\r
          <Star size="small" fillPercentage={100} />\r
        </div>\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: '10px'
      }}>Default</h4>\r
        <div style={{
        display: 'flex',
        gap: '5px'
      }}>\r
          <Star size="default" fillPercentage={0} />\r
          <Star size="default" fillPercentage={25} />\r
          <Star size="default" fillPercentage={50} />\r
          <Star size="default" fillPercentage={75} />\r
          <Star size="default" fillPercentage={100} />\r
        </div>\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: '10px'
      }}>Large</h4>\r
        <div style={{
        display: 'flex',
        gap: '5px'
      }}>\r
          <Star size="large" fillPercentage={0} />\r
          <Star size="large" fillPercentage={25} />\r
          <Star size="large" fillPercentage={50} />\r
          <Star size="large" fillPercentage={75} />\r
          <Star size="large" fillPercentage={100} />\r
        </div>\r
      </div>\r
    </div>
}`,...d.parameters?.docs?.source}}};const S=["Default","Empty","Half","Quarter","ThreeQuarters","Sizes","FillPercentages","CustomColors","CustomCharacters","Interactive","AllSizesComparison"];export{d as AllSizesComparison,g as CustomCharacters,o as CustomColors,l as Default,a as Empty,n as FillPercentages,t as Half,f as Interactive,s as Quarter,c as Sizes,i as ThreeQuarters,S as __namedExportsOrder,P as default};
