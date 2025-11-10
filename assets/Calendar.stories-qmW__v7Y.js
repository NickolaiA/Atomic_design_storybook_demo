import{r as l,j as a,R as De}from"./iframe-C-Dpaqp0.js";import"./preload-helper-PPVm8Dsz.js";const ne=["January","February","March","April","May","June","July","August","September","October","November","December"],ve=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],K=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],y=({value:d,defaultValue:n,view:i="month",multiple:s=!1,range:p=!1,disabled:c=!1,minDate:O,maxDate:E,disabledDate:H,showWeekNumbers:G=!1,showToday:J=!0,cellRender:Q,onChange:U,onViewChange:X,className:se="",_style:be})=>{const[oe,le]=l.useState(n||(s||p?[]:new Date)),[g,ce]=l.useState(i),[u,S]=l.useState(new Date),[P,Z]=l.useState(null),D=d!==void 0?d:oe,h=Array.isArray(D)?D:[D].filter(Boolean),B=new Date,v=(e,r)=>e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth()&&e.getDate()===r.getDate(),z=(e,r)=>e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth(),C=l.useCallback(e=>!!(c||O&&e<O||E&&e>E||H&&H(e)),[c,O,E,H]),ee=l.useCallback(e=>h.some(r=>v(e,r)),[h]),de=l.useCallback(e=>{if(!p||h.length!==2)return!1;const[r,t]=h.sort((o,m)=>o.getTime()-m.getTime());return e>=r&&e<=t},[p,h]),_=l.useCallback(e=>{if(C(e))return;let r;if(p)if(!P||h.length===2)Z(e),r=[e];else{const t=P,o=e,m=t<=o?[t,o]:[o,t];Z(null),r=m}else if(s){const t=Array.isArray(D)?D:[];t.some(m=>v(m,e))?r=t.filter(m=>!v(m,e)):r=[...t,e]}else r=e;d===void 0&&le(r),U?.(r)},[C,p,P,h.length,s,D,d,U]),ae=l.useCallback(e=>{S(r=>{const t=new Date(r);return e==="prev"?t.setMonth(t.getMonth()-1):t.setMonth(t.getMonth()+1),t})},[]),te=l.useCallback(e=>{S(r=>{const t=new Date(r);return e==="prev"?t.setFullYear(t.getFullYear()-1):t.setFullYear(t.getFullYear()+1),t})},[]),ie=l.useCallback(()=>{S(new Date),J&&_(new Date)},[J,_]),ue=l.useMemo(()=>{const e=u.getFullYear(),r=u.getMonth(),t=new Date(e,r,1),o=new Date(t);o.setDate(o.getDate()-t.getDay());const m=[],w=new Date(o);for(let f=0;f<42;f++)m.push(new Date(w)),w.setDate(w.getDate()+1);return m},[u]),me=l.useMemo(()=>{const e=new Date(u);e.setDate(u.getDate()-u.getDay());const r=[];for(let t=0;t<7;t++){const o=new Date(e);o.setDate(e.getDate()+t),r.push(o)}return r},[u]),ge=l.useMemo(()=>{const e=u.getFullYear(),r=[];for(let t=0;t<12;t++)r.push(new Date(e,t,1));return r},[u]),b=l.useCallback(e=>{ce(e),X?.(e)},[X]),pe=()=>{const e=g==="month"?`${ne[u.getMonth()]} ${u.getFullYear()}`:g==="week"?`Week of ${u.toLocaleDateString()}`:`${u.getFullYear()}`;return a.jsxs("div",{className:"calendar__header","data-view":g,children:[a.jsxs("div",{className:"calendar__navigation",children:[a.jsx("button",{className:"calendar__nav-button",onClick:()=>g==="year"?te("prev"):ae("prev"),"aria-label":"Previous",disabled:c,children:"‹"}),a.jsx("div",{className:"calendar__header-content",children:a.jsx("button",{className:"calendar__header-title",onClick:()=>b("month"),disabled:c,children:e})}),a.jsx("button",{className:"calendar__nav-button",onClick:()=>g==="year"?te("next"):ae("next"),"aria-label":"Next",disabled:c,children:"›"})]}),a.jsxs("div",{className:"calendar__view-switcher",children:[a.jsx("button",{className:`calendar__view-button ${g==="month"?"calendar__view-button--active":""}`,onClick:()=>b("month"),disabled:c,children:"Month"}),a.jsx("button",{className:`calendar__view-button ${g==="week"?"calendar__view-button--active":""}`,onClick:()=>b("week"),disabled:c,children:"Week"}),a.jsx("button",{className:`calendar__view-button ${g==="year"?"calendar__view-button--active":""}`,onClick:()=>b("year"),disabled:c,children:"Year"})]}),J&&a.jsx("button",{className:"calendar__today-button",onClick:ie,disabled:c,children:"Today"})]})},ye=()=>a.jsxs("div",{className:"calendar__month-view",children:[G&&a.jsx("div",{className:"calendar__weekday-header",children:"Wk"}),K.map(e=>a.jsx("div",{className:"calendar__weekday-header",children:e},e)),ue.map((e,r)=>{const t=ee(e),o=v(e,B),m=z(e,u),w=C(e),f=de(e),re=r%7===0?Math.ceil((r+1)/7):null;return a.jsxs(De.Fragment,{children:[G&&re&&a.jsx("div",{className:"calendar__week-number",children:re}),a.jsx("button",{className:`calendar__day-cell ${t?"calendar__day-cell--selected":""} ${o?"calendar__day-cell--today":""} ${m?"":"calendar__day-cell--other-month"} ${w?"calendar__day-cell--disabled":""} ${f?"calendar__day-cell--in-range":""}`,onClick:()=>_(e),disabled:w,"aria-label":e.toLocaleDateString(),"data-selected":t,"data-today":o,"data-current-month":m,"data-disabled":w,"data-in-range":f,children:Q?Q(e,{isSelected:t,isDisabled:w,isToday:o}):e.getDate()})]},e.toISOString())})]}),he=()=>a.jsxs("div",{className:"calendar__week-view",children:[K.map(e=>a.jsx("div",{className:"calendar__weekday-header",children:e},e)),me.map(e=>{const r=ee(e),t=v(e,B),o=C(e);return a.jsxs("button",{className:`calendar__day-cell calendar__day-cell--week ${r?"calendar__day-cell--selected":""} ${t?"calendar__day-cell--today":""} ${o?"calendar__day-cell--disabled":""}`,onClick:()=>_(e),disabled:o,"aria-label":e.toLocaleDateString(),"data-selected":r,"data-today":t,"data-disabled":o,children:[a.jsx("div",{className:"calendar__week-day-number",children:e.getDate()}),a.jsx("div",{className:"calendar__week-day-name",children:K[e.getDay()]})]},e.toISOString())})]}),we=()=>a.jsx("div",{className:"calendar__year-view",children:ge.map(e=>{const r=h.some(o=>z(o,e)),t=z(e,B);return a.jsx("button",{className:`calendar__month-cell ${r?"calendar__month-cell--selected":""} ${t?"calendar__month-cell--current":""}`,onClick:()=>{S(e),b("month")},disabled:c,"aria-label":ne[e.getMonth()],"data-selected":r,"data-current":t,children:ve[e.getMonth()]},e.toISOString())})});return a.jsxs("div",{className:`calendar ${c?"calendar--disabled":""} ${se}`,role:"application","aria-label":"Calendar","data-view":g,"data-disabled":c,"data-multiple":s,"data-range":p,children:[pe(),a.jsxs("div",{className:"calendar__body",children:[g==="month"&&ye(),g==="week"&&he(),g==="year"&&we()]})]})};y.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{value:{required:!1,tsType:{name:"union",raw:"Date | Date[]",elements:[{name:"Date"},{name:"Array",elements:[{name:"Date"}],raw:"Date[]"}]},description:"Current selected date(s)"},defaultValue:{required:!1,tsType:{name:"union",raw:"Date | Date[]",elements:[{name:"Date"},{name:"Array",elements:[{name:"Date"}],raw:"Date[]"}]},description:"Default selected date(s) for uncontrolled mode"},view:{required:!1,tsType:{name:"union",raw:"'month' | 'week' | 'year'",elements:[{name:"literal",value:"'month'"},{name:"literal",value:"'week'"},{name:"literal",value:"'year'"}]},description:"Calendar view mode",defaultValue:{value:"'month'",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"Allow multiple date selection",defaultValue:{value:"false",computed:!1}},range:{required:!1,tsType:{name:"boolean"},description:"Allow date range selection",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},minDate:{required:!1,tsType:{name:"Date"},description:"Minimum selectable date"},maxDate:{required:!1,tsType:{name:"Date"},description:"Maximum selectable date"},disabledDate:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => boolean",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"boolean"}}},description:"Disabled dates function"},showWeekNumbers:{required:!1,tsType:{name:"boolean"},description:"Show week numbers",defaultValue:{value:"false",computed:!1}},showToday:{required:!1,tsType:{name:"boolean"},description:"Show today button",defaultValue:{value:"true",computed:!1}},cellRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date, info: { isSelected: boolean; isDisabled: boolean; isToday: boolean }) => React.ReactNode",signature:{arguments:[{type:{name:"Date"},name:"date"},{type:{name:"signature",type:"object",raw:"{ isSelected: boolean; isDisabled: boolean; isToday: boolean }",signature:{properties:[{key:"isSelected",value:{name:"boolean",required:!0}},{key:"isDisabled",value:{name:"boolean",required:!0}},{key:"isToday",value:{name:"boolean",required:!0}}]}},name:"info"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"Custom cell render function"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | Date[]) => void",signature:{arguments:[{type:{name:"union",raw:"Date | Date[]",elements:[{name:"Date"},{name:"Array",elements:[{name:"Date"}],raw:"Date[]"}]},name:"date"}],return:{name:"void"}}},description:"Callback when date changes"},onViewChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(view: CalendarView) => void",signature:{arguments:[{type:{name:"union",raw:"'month' | 'week' | 'year'",elements:[{name:"literal",value:"'month'"},{name:"literal",value:"'week'"},{name:"literal",value:"'year'"}]},name:"view"}],return:{name:"void"}}},description:"Callback when view changes"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"}}};const Ce={title:"Atoms/Calendar",component:y,parameters:{layout:"centered",docs:{description:{component:"A comprehensive calendar component supporting multiple views (month, week, year), date selection modes (single, multiple, range), and extensive customization options."}}},argTypes:{value:{control:!1,description:"Current selected date(s) - controlled mode"},defaultValue:{control:!1,description:"Default selected date(s) for uncontrolled mode"},view:{control:"select",options:["month","week","year"],description:"Calendar view mode"},multiple:{control:"boolean",description:"Allow multiple date selection"},range:{control:"boolean",description:"Allow date range selection"},disabled:{control:"boolean",description:"Disabled state"},showWeekNumbers:{control:"boolean",description:"Show week numbers in month view"},showToday:{control:"boolean",description:"Show today button"},onChange:{action:"changed",description:"Callback when date changes"},onViewChange:{action:"view-changed",description:"Callback when view changes"}},tags:["autodocs"]},k={args:{showToday:!0,showWeekNumbers:!1}},N={args:{showWeekNumbers:!0,showToday:!0},parameters:{docs:{description:{story:"Calendar with week numbers displayed alongside the month view."}}}},x={args:{view:"week",showToday:!0},parameters:{docs:{description:{story:"Calendar in week view mode showing only the current week."}}}},T={args:{view:"year",showToday:!0},parameters:{docs:{description:{story:"Calendar in year view mode showing all months of the current year."}}}},j={args:{multiple:!0,showToday:!0},parameters:{docs:{description:{story:"Calendar allowing multiple date selection. Click multiple dates to select them."}}}},R={args:{range:!0,showToday:!0},parameters:{docs:{description:{story:"Calendar allowing date range selection. Click two dates to select a range."}}}},M={render:d=>{const[n,i]=l.useState(new Date);return a.jsxs("div",{className:"calendar-story-container",children:[a.jsx(y,{...d,value:n,onChange:i}),a.jsxs("div",{className:"calendar-story-info",children:["Selected: ",Array.isArray(n)?n.map(s=>s.toLocaleDateString()).join(", "):n.toLocaleDateString()]})]})},args:{showToday:!0},parameters:{docs:{description:{story:"Controlled calendar with state management showing the selected date."}}}},V={render:d=>{const[n,i]=l.useState([]);return a.jsxs("div",{className:"calendar-story-container",children:[a.jsx(y,{...d,value:n,onChange:s=>i(s),multiple:!0}),a.jsxs("div",{className:"calendar-story-info calendar-story-info--wide",children:["Selected (",n.length,"): ",n.map(s=>s.toLocaleDateString()).join(", ")||"None"]})]})},args:{showToday:!0},parameters:{docs:{description:{story:"Controlled calendar with multiple selection showing all selected dates."}}}},W={render:d=>{const[n,i]=l.useState([]);return a.jsxs("div",{className:"calendar-story-container",children:[a.jsx(y,{...d,value:n,onChange:s=>i(s),range:!0}),a.jsxs("div",{className:"calendar-story-info calendar-story-info--center",children:[n.length===0&&"No range selected",n.length===1&&`Start: ${n[0].toLocaleDateString()}`,n.length===2&&`Range: ${n[0].toLocaleDateString()} - ${n[1].toLocaleDateString()}`]})]})},args:{showToday:!0},parameters:{docs:{description:{story:"Controlled calendar with range selection showing the selected date range."}}}},A={render:d=>{const[n,i]=l.useState("month"),[s,p]=l.useState(new Date);return a.jsxs("div",{className:"calendar-story-container",children:[a.jsx("div",{className:"calendar-story-controls",children:["month","week","year"].map(c=>a.jsx("button",{onClick:()=>i(c),className:`calendar-story-controls__button ${n===c?"calendar-story-controls__button--active":""}`,children:c},c))}),a.jsx(y,{...d,view:n,value:s,onChange:p,onViewChange:i}),a.jsxs("div",{className:"calendar-story-info",children:["View: ",n," | Selected: ",Array.isArray(s)?s.map(c=>c.toLocaleDateString()).join(", "):s.toLocaleDateString()]})]})},args:{showToday:!0},parameters:{docs:{description:{story:"Interactive calendar with view switching controls and state display."}}}},$={render:d=>{const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),1),s=new Date(n.getFullYear(),n.getMonth()+2,0);return a.jsxs("div",{className:"calendar-story-container",children:[a.jsx(y,{...d,minDate:i,maxDate:s}),a.jsxs("div",{className:"calendar-story-info calendar-story-info--center",children:["Date Range: ",i.toLocaleDateString()," - ",s.toLocaleDateString()]})]})},args:{showToday:!0},parameters:{docs:{description:{story:"Calendar with minimum and maximum date constraints. Only dates within the specified range are selectable."}}}},L={render:d=>{const n=i=>{const s=i.getDay();return s===0||s===6};return a.jsxs("div",{className:"calendar-story-container",children:[a.jsx(y,{...d,disabledDate:n}),a.jsx("div",{className:"calendar-story-info",children:"Weekends are disabled"})]})},args:{showToday:!0},parameters:{docs:{description:{story:"Calendar with custom disabled date logic. In this example, weekends are disabled."}}}},Y={render:d=>{const n=(i,s)=>{const p=i.getDate()%5===0;return a.jsxs("div",{className:"calendar-story-custom-cell",children:[i.getDate(),p&&a.jsx("div",{className:"calendar-story-custom-cell__indicator"})]})};return a.jsxs("div",{className:"calendar-story-container",children:[a.jsx(y,{...d,cellRender:n}),a.jsx("div",{className:"calendar-story-info",children:"Days divisible by 5 have special indicators"})]})},args:{showToday:!0},parameters:{docs:{description:{story:"Calendar with custom cell rendering. Each cell can display custom content and indicators."}}}},F={args:{disabled:!0,showToday:!0,defaultValue:new Date},parameters:{docs:{description:{story:"Calendar in disabled state. All interactions are disabled."}}}},q={args:{showToday:!1},parameters:{docs:{description:{story:"Calendar with the Today button hidden."}}}},I={args:{view:"month",multiple:!1,range:!1,disabled:!1,showWeekNumbers:!1,showToday:!0},parameters:{docs:{description:{story:"Interactive playground for testing all Calendar properties and configurations."}}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    showToday: true,
    showWeekNumbers: false
  }
}`,...k.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    showWeekNumbers: true,
    showToday: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Calendar with week numbers displayed alongside the month view.'
      }
    }
  }
}`,...N.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    view: 'week',
    showToday: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Calendar in week view mode showing only the current week.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    view: 'year',
    showToday: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Calendar in year view mode showing all months of the current year.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true,
    showToday: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Calendar allowing multiple date selection. Click multiple dates to select them.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    range: true,
    showToday: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Calendar allowing date range selection. Click two dates to select a range.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedDate, setSelectedDate] = useState<Date | Date[]>(new Date());
    return <div className="calendar-story-container">\r
        <Calendar {...args} value={selectedDate} onChange={setSelectedDate} />\r
        <div className="calendar-story-info">\r
          Selected: {Array.isArray(selectedDate) ? selectedDate.map(d => d.toLocaleDateString()).join(', ') : selectedDate.toLocaleDateString()}\r
        </div>\r
      </div>;
  },
  args: {
    showToday: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled calendar with state management showing the selected date.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedDates, setSelectedDates] = useState<Date[]>([]);
    return <div className="calendar-story-container">\r
        <Calendar {...args} value={selectedDates} onChange={dates => setSelectedDates(dates as Date[])} multiple />\r
        <div className="calendar-story-info calendar-story-info--wide">\r
          Selected ({selectedDates.length}): {selectedDates.map(d => d.toLocaleDateString()).join(', ') || 'None'}\r
        </div>\r
      </div>;
  },
  args: {
    showToday: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled calendar with multiple selection showing all selected dates.'
      }
    }
  }
}`,...V.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedRange, setSelectedRange] = useState<Date[]>([]);
    return <div className="calendar-story-container">\r
        <Calendar {...args} value={selectedRange} onChange={dates => setSelectedRange(dates as Date[])} range />\r
        <div className="calendar-story-info calendar-story-info--center">\r
          {selectedRange.length === 0 && 'No range selected'}\r
          {selectedRange.length === 1 && \`Start: \${selectedRange[0].toLocaleDateString()}\`}\r
          {selectedRange.length === 2 && \`Range: \${selectedRange[0].toLocaleDateString()} - \${selectedRange[1].toLocaleDateString()}\`}\r
        </div>\r
      </div>;
  },
  args: {
    showToday: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled calendar with range selection showing the selected date range.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [currentView, setCurrentView] = useState<'month' | 'week' | 'year'>('month');
    const [selectedDate, setSelectedDate] = useState<Date | Date[]>(new Date());
    return <div className="calendar-story-container">\r
        <div className="calendar-story-controls">\r
          {(['month', 'week', 'year'] as const).map(view => <button key={view} onClick={() => setCurrentView(view)} className={\`calendar-story-controls__button \${currentView === view ? 'calendar-story-controls__button--active' : ''}\`}>\r
              {view}\r
            </button>)}\r
        </div>\r
        \r
        <Calendar {...args} view={currentView} value={selectedDate} onChange={setSelectedDate} onViewChange={setCurrentView} />\r
        \r
        <div className="calendar-story-info">\r
          View: {currentView} | Selected: {Array.isArray(selectedDate) ? selectedDate.map(d => d.toLocaleDateString()).join(', ') : selectedDate.toLocaleDateString()}\r
        </div>\r
      </div>;
  },
  args: {
    showToday: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive calendar with view switching controls and state display.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => {
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), 1); // First day of current month
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0); // Last day of next month

    return <div className="calendar-story-container">\r
        <Calendar {...args} minDate={minDate} maxDate={maxDate} />\r
        <div className="calendar-story-info calendar-story-info--center">\r
          Date Range: {minDate.toLocaleDateString()} - {maxDate.toLocaleDateString()}\r
        </div>\r
      </div>;
  },
  args: {
    showToday: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Calendar with minimum and maximum date constraints. Only dates within the specified range are selectable.'
      }
    }
  }
}`,...$.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const isWeekend = (date: Date) => {
      const day = date.getDay();
      return day === 0 || day === 6; // Sunday = 0, Saturday = 6
    };
    return <div className="calendar-story-container">\r
        <Calendar {...args} disabledDate={isWeekend} />\r
        <div className="calendar-story-info">\r
          Weekends are disabled\r
        </div>\r
      </div>;
  },
  args: {
    showToday: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Calendar with custom disabled date logic. In this example, weekends are disabled.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const customCellRender = (date: Date, _info: {
      isSelected: boolean;
      isDisabled: boolean;
      isToday: boolean;
    }) => {
      const isSpecialDay = date.getDate() % 5 === 0; // Every 5th day

      return <div className="calendar-story-custom-cell">\r
          {date.getDate()}\r
          {isSpecialDay && <div className="calendar-story-custom-cell__indicator" />}\r
        </div>;
    };
    return <div className="calendar-story-container">\r
        <Calendar {...args} cellRender={customCellRender} />\r
        <div className="calendar-story-info">\r
          Days divisible by 5 have special indicators\r
        </div>\r
      </div>;
  },
  args: {
    showToday: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Calendar with custom cell rendering. Each cell can display custom content and indicators.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    showToday: true,
    defaultValue: new Date()
  },
  parameters: {
    docs: {
      description: {
        story: 'Calendar in disabled state. All interactions are disabled.'
      }
    }
  }
}`,...F.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    showToday: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Calendar with the Today button hidden.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    view: 'month',
    multiple: false,
    range: false,
    disabled: false,
    showWeekNumbers: false,
    showToday: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for testing all Calendar properties and configurations.'
      }
    }
  }
}`,...I.parameters?.docs?.source}}};const _e=["Default","WithWeekNumbers","WeekView","YearView","MultipleSelection","RangeSelection","ControlledCalendar","ControlledMultipleSelection","ControlledRangeSelection","InteractiveViewSwitching","WithDateConstraints","WithDisabledDates","WithCustomCellRender","Disabled","HiddenTodayButton","Playground"];export{M as ControlledCalendar,V as ControlledMultipleSelection,W as ControlledRangeSelection,k as Default,F as Disabled,q as HiddenTodayButton,A as InteractiveViewSwitching,j as MultipleSelection,I as Playground,R as RangeSelection,x as WeekView,Y as WithCustomCellRender,$ as WithDateConstraints,L as WithDisabledDates,N as WithWeekNumbers,T as YearView,_e as __namedExportsOrder,Ce as default};
