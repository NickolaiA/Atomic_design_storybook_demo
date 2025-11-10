import{j as e}from"./iframe-C-Dpaqp0.js";import{B as i}from"./BlogPostTemplate-C7H9L37Z.js";import{B as n}from"./Badge-BF0X2pMx.js";import{A as l}from"./Avatar-BxXlSEno.js";import{L as t}from"./Link-ijPFVMA8.js";import"./preload-helper-PPVm8Dsz.js";import"./Header-Buh8fdbU.js";import"./NavItem-C7D4Kptp.js";import"./Icon-C2VW0K67.js";import"./Text-DKFgGKuj.js";import"./SearchField-KM40tgy2.js";import"./TextInput-CpV-8_ZP.js";import"./Button-BMKKFIIK.js";import"./Container-OcbYfyDk.js";import"./Heading-AsYCJ2yB.js";import"./Divider-C6unn7VX.js";import"./Spacer-_42iplUp.js";const T={title:"Templates/BlogPostTemplate",component:i,parameters:{layout:"fullscreen"}},a={args:{titleSlot:"Article Title",metaSlot:"By You • 6 Nov 2025",bodySlot:e.jsx("div",{className:"story-skeleton"})}},r={args:{titleSlot:"Getting Started with Atomic Design in React",metaSlot:e.jsxs("div",{className:"story-meta",children:[e.jsxs("div",{className:"story-meta-author",children:[e.jsx(l,{size:"sm",name:"John Doe"}),e.jsx("span",{children:"John Doe"})]}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"November 10, 2025"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"5 min read"}),e.jsx(n,{variant:"info",children:"Tutorial"})]}),bodySlot:e.jsxs("div",{children:[e.jsx("p",{children:"Atomic Design is a methodology for creating design systems. It was introduced by Brad Frost and provides a clear methodology for crafting design systems by breaking interfaces into their smallest pieces."}),e.jsx("p",{children:"The methodology consists of five distinct stages: Atoms, Molecules, Organisms, Templates, and Pages. Each stage builds upon the previous one, creating a hierarchical structure that makes it easy to maintain and scale your component library."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Atoms"})," are the basic building blocks - buttons, inputs, labels. They can't be broken down any further without losing their meaning."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Molecules"})," are groups of atoms working together as a unit - a search form with an input and button, or a profile card with an avatar and name."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Organisms"})," are complex components made up of molecules and atoms - a complete header with navigation, search, and user profile sections."]}),e.jsx("p",{children:"By following this methodology, you can build consistent, scalable, and maintainable user interfaces that are easy to update and extend."})]}),relatedSlot:e.jsxs("div",{className:"story-related-links",children:[e.jsx(t,{href:"#",variant:"default",children:"Building Your First Component Library"}),e.jsx(t,{href:"#",variant:"default",children:"React Best Practices for 2025"}),e.jsx(t,{href:"#",variant:"default",children:"Design Systems: A Complete Guide"})]}),footerSlot:e.jsx("div",{children:e.jsxs("p",{className:"story-footer",children:["© 2025 Your Company. All rights reserved.",e.jsx("span",{className:"story-footer-link",children:e.jsx(t,{href:"#",children:"Privacy Policy"})}),e.jsx("span",{className:"story-footer-link",children:e.jsx(t,{href:"#",children:"Terms of Service"})})]})})}},s={args:{titleSlot:"Simple Blog Post Without Metadata",bodySlot:e.jsxs("div",{children:[e.jsx("p",{children:"Sometimes you don't need all the metadata. This template is flexible enough to work with just a title and body content."}),e.jsx("p",{children:"The meta slot is optional, and when omitted, the post maintains a clean, minimal appearance."})]})}},o={args:{titleSlot:"Short Announcement",metaSlot:"Posted today",bodySlot:e.jsx("p",{children:"This is a minimal blog post with just the essential information. Perfect for announcements or quick updates."})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    titleSlot: "Article Title",
    metaSlot: "By You • 6 Nov 2025",
    bodySlot: <div className="story-skeleton" />
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    titleSlot: "Getting Started with Atomic Design in React",
    metaSlot: <div className="story-meta">\r
        <div className="story-meta-author">\r
          <Avatar size="sm" name="John Doe" />\r
          <span>John Doe</span>\r
        </div>\r
        <span>•</span>\r
        <span>November 10, 2025</span>\r
        <span>•</span>\r
        <span>5 min read</span>\r
        <Badge variant="info">Tutorial</Badge>\r
      </div>,
    bodySlot: <div>\r
        <p>\r
          Atomic Design is a methodology for creating design systems. It was introduced by Brad Frost and \r
          provides a clear methodology for crafting design systems by breaking interfaces into their smallest pieces.\r
        </p>\r
        <p>\r
          The methodology consists of five distinct stages: Atoms, Molecules, Organisms, Templates, and Pages. \r
          Each stage builds upon the previous one, creating a hierarchical structure that makes it easy to \r
          maintain and scale your component library.\r
        </p>\r
        <p>\r
          <strong>Atoms</strong> are the basic building blocks - buttons, inputs, labels. They can't be broken \r
          down any further without losing their meaning.\r
        </p>\r
        <p>\r
          <strong>Molecules</strong> are groups of atoms working together as a unit - a search form with an \r
          input and button, or a profile card with an avatar and name.\r
        </p>\r
        <p>\r
          <strong>Organisms</strong> are complex components made up of molecules and atoms - a complete header \r
          with navigation, search, and user profile sections.\r
        </p>\r
        <p>\r
          By following this methodology, you can build consistent, scalable, and maintainable user interfaces \r
          that are easy to update and extend.\r
        </p>\r
      </div>,
    relatedSlot: <div className="story-related-links">\r
        <Link href="#" variant="default">\r
          Building Your First Component Library\r
        </Link>\r
        <Link href="#" variant="default">\r
          React Best Practices for 2025\r
        </Link>\r
        <Link href="#" variant="default">\r
          Design Systems: A Complete Guide\r
        </Link>\r
      </div>,
    footerSlot: <div>\r
        <p className="story-footer">\r
          © 2025 Your Company. All rights reserved. \r
          <span className="story-footer-link">\r
            <Link href="#">Privacy Policy</Link>\r
          </span>\r
          <span className="story-footer-link">\r
            <Link href="#">Terms of Service</Link>\r
          </span>\r
        </p>\r
      </div>
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    titleSlot: "Simple Blog Post Without Metadata",
    bodySlot: <div>\r
        <p>\r
          Sometimes you don't need all the metadata. This template is flexible enough to work \r
          with just a title and body content.\r
        </p>\r
        <p>\r
          The meta slot is optional, and when omitted, the post maintains a clean, minimal appearance.\r
        </p>\r
      </div>
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    titleSlot: "Short Announcement",
    metaSlot: "Posted today",
    bodySlot: <p>\r
        This is a minimal blog post with just the essential information. Perfect for announcements \r
        or quick updates.\r
      </p>
  }
}`,...o.parameters?.docs?.source}}};const P=["Skeleton","FullBlogPost","WithoutMetadata","MinimalPost"];export{r as FullBlogPost,o as MinimalPost,a as Skeleton,s as WithoutMetadata,P as __namedExportsOrder,T as default};
