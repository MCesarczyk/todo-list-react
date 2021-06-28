(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var o,r,i,c,a,d,s,l,u,b,g,f,x,h,j,p,m,O=t(1),k=t.n(O),T=t(12),v=t.n(T),y=t(4),I=t(16),w=t(6),D=t(3),B=t(2),S=B.d.form(o||(o=Object(D.a)(["\n    background-color: ",";\n    padding: 10px;\n    display: flex;\n\n    @media (max-width: ",") {\n        flex-direction: column;\n    }\n"])),(function(n){return n.theme.color.background}),(function(n){return n.theme.breakpoint.tabletMax})),z=B.d.input(r||(r=Object(D.a)(["\n    border: solid 1px ",";\n    padding: 10px;\n    flex-grow: 1;\n    margin: 10px;\n"])),(function(n){return n.theme.color.borders})),C=B.d.button(i||(i=Object(D.a)(["\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    color: ",";\n    background-color: ",";\n    border: none;\n    padding: 5px;\n    padding: 10px;\n    margin: 10px;\n    transition: background 0.5s, transform 1s;\n\n    &:hover {\n        filter: brightness(130%);\n        transform: scale(1.05);\n    }\n\n    &:active {\n        filter: brightness(160%);\n        box-shadow: inset 1px 1px 2px darkgrey;\n    }\n"])),(function(n){return n.theme.color.fontLight}),(function(n){return n.theme.color.primary})),L=t(0),H=function(n){var e=n.addNewTask,t=n.inputPlaceholder,o=n.formButtonInnerText,r=Object(O.useState)(""),i=Object(y.a)(r,2),c=i[0],a=i[1],d=Object(O.useRef)(null);return Object(L.jsxs)(S,{onSubmit:function(n){n.preventDefault();var t=c.trim();""!==t?(e(t),a(""),d.current.focus()):a("")},children:[Object(L.jsx)(z,{ref:d,value:c,placeholder:t,onChange:function(n){var e=n.target;return a(e.value)},autoFocus:!0}),Object(L.jsx)(C,{children:o})]})},P=function(n){var e=n.languages,t=n.changeLanguage;return Object(L.jsx)("div",{children:e.map((function(n){return Object(L.jsx)("button",{onClick:function(){return t(n.key)},children:n.key},n.key)}))})},F=B.d.ul(c||(c=Object(D.a)(["\n    background-color: ",";\n    padding: 15px;\n    list-style-type: none;\n    width: 100%;\n    margin: 0 auto;\n"])),(function(n){return n.theme.color.background})),M=B.d.li(a||(a=Object(D.a)(["\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: auto 1fr auto;\n    align-items: center;\n    padding: 6px;\n    border-style: solid;\n    border-width: 0px 0px 1px 0px;\n    border-color: ",";\n\n    ","\n"])),(function(n){return n.theme.color.borders}),(function(n){return n.hidden&&Object(B.c)(d||(d=Object(D.a)(["\n        display: none;\n    "])))})),N=B.d.span(s||(s=Object(D.a)(["\n    word-break: break-all;\n\n    ","\n"])),(function(n){return n.done&&Object(B.c)(l||(l=Object(D.a)(["\n        text-decoration: line-through;\n    "])))})),A=B.d.button(u||(u=Object(D.a)(["\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    color: ",";\n    border: none;\n    padding: 5px;\n    width: 28px;\n    height: 28px;\n    transition: 0.5s;\n\n    ","\n\n    ","\n"])),(function(n){return n.theme.color.fontLight}),(function(n){return n.toggleDone&&Object(B.c)(b||(b=Object(D.a)(["\n        background-color: ",";\n\n        &:hover {\n            filter: brightness(130%);\n        }\n\n        &:active {\n            filter: brightness(160%);\n            box-shadow: inset 1px 1px 3px ",";\n        }\n    "])),(function(n){return n.theme.color.toggleDone}),(function(n){return n.theme.color.shadows}))}),(function(n){return n.remove&&Object(B.c)(g||(g=Object(D.a)(["\n        background-color: ",";\n\n        &:hover {\n            filter: brightness(130%);\n        }\n\n        &:active {\n            filter: brightness(160%);\n            box-shadow: inset 1px 1px 3px ",";\n        }\n    "])),(function(n){return n.theme.color.remove}),(function(n){return n.theme.color.shadows}))})),V=function(n){var e=n.tasks,t=n.hideDone,o=n.removeTask,r=n.toggleTaskDone;return Object(L.jsx)(F,{children:e.map((function(n){return Object(L.jsxs)(M,{hidden:n.done&&t,children:[Object(L.jsx)(A,{toggleDone:!0,onClick:function(){return r(n.id)},children:n.done?"\u2714":" "}),Object(L.jsx)(N,{done:n.done,children:n.content}),Object(L.jsx)(A,{remove:!0,onClick:function(){return o(n.id)},children:"\ud83d\uddd1"})]},n.id)}))})},E=B.d.div(f||(f=Object(D.a)(["\n    display: grid;\n    gap: 10px;\n    grid-template-columns: auto auto;\n    \n    @media (max-width: ",") {\n        grid-template-columns: 1fr;\n    }\n"])),(function(n){return n.theme.breakpoint.mobileMax})),J=B.d.button(x||(x=Object(D.a)(["\n    color: ",";\n    font-weight: 400;\n    background-color: transparent;\n    border: none;\n    transition: 0.5s;\n\n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n\n    &:disabled {\n        color: ",";\n        cursor: unset;\n    }\n"])),(function(n){return n.theme.color.primary}),(function(n){return n.theme.color.disabled})),U=function(n){var e=n.tasks,t=n.hideDone,o=n.toggleHideDone,r=n.setAllDone,i=n.setDoneButtonInnerText,c=n.toggleButtonInnerTextHidden,a=n.toggleButtonInnerTextVisible;return Object(L.jsx)(E,{children:e.length>0&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(J,{onClick:o,children:t?c:a}),Object(L.jsx)(J,{onClick:r,disabled:e.every((function(n){return n.done})),children:i})]})})},R=B.d.section(h||(h=Object(D.a)(["\n    margin-bottom: 10px;\n"]))),W=B.d.div(j||(j=Object(D.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto auto;\n    gap: 10px;\n    align-items: center;\n    background-color: ",";\n    padding-right: 10px;\n    margin: 0 0 1px 0;\n\n    @media (max-width: ",") {\n        grid-template-columns: 1fr;\n        justify-content: center;\n    }\n"])),(function(n){return n.theme.color.background}),(function(n){return n.theme.breakpoint.mobileMax})),q=B.d.h2(p||(p=Object(D.a)(["\n    background-color: ",";\n    padding: 15px;\n    font-weight: 700;\n    font-size: 20px;\n    margin: 0 0 1px 0;\n"])),(function(n){return n.theme.color.background})),G=function(n){var e=n.title,t=n.body,o=n.extraHeaderContent;return Object(L.jsxs)(R,{children:[Object(L.jsxs)(W,{children:[Object(L.jsx)(q,{children:e}),o]}),t]})},K=function(n){var e=n.title;return Object(L.jsx)("header",{children:Object(L.jsx)("h1",{children:e})})},Q=B.d.main(m||(m=Object(D.a)(["\n  padding: 10px;\n"]))),X=function(n){var e=n.children;return Object(L.jsx)(Q,{children:e})},Y=[{key:"EN",headerTitle:"To-do list",sectionTitle:"Add new task",tasksSectionTitle:"List of tasks",inputPlaceholder:"What are you going to do?",formButtonInnerText:"Add task",setDoneButtonInnerText:"Finish all",toggleButtonInnerTextHidden:"Show done",toggleButtonInnerTextVisible:"Hide done"},{key:"PL",headerTitle:"Lista zada\u0144",sectionTitle:"Dodaj nowe zadanie",tasksSectionTitle:"Lista zada\u0144",inputPlaceholder:"Co jest do zrobienia?",formButtonInnerText:"Dodaj zadanie",setDoneButtonInnerText:"Uko\u0144cz wszystkie",toggleButtonInnerTextHidden:"Poka\u017c uko\u0144czone",toggleButtonInnerTextVisible:"Ukryj uko\u0144czone"}];var Z,$=function(){var n=Object(O.useState)(!1),e=Object(y.a)(n,2),t=e[0],o=e[1],r=function(){var n=Object(O.useState)(localStorage.getItem("langId")||0),e=Object(y.a)(n,2),t=e[0],o=e[1];return Object(O.useEffect)((function(){localStorage.setItem("langId",t)}),[t]),{langId:t,setLangId:o}}(),i=r.langId,c=r.setLangId,a=function(){var n=Object(O.useState)(JSON.parse(localStorage.getItem("tasks"))||[{id:1,content:"task1",done:!1},{id:2,content:"task2",done:!0}]),e=Object(y.a)(n,2),t=e[0],o=e[1];return Object(O.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(t))}),[t]),{tasks:t,toggleTaskDone:function(n){o((function(e){return e.map((function(e){return e.id===n?Object(w.a)(Object(w.a)({},e),{},{done:!e.done}):e}))}))},removeTask:function(n){o((function(e){return e.filter((function(e){return e.id!==n}))}))},setAllDone:function(){o((function(n){return n.map((function(n){return Object(w.a)(Object(w.a)({},n),{},{done:!0})}))}))},addNewTask:function(n){o((function(e){return[].concat(Object(I.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}}}(),d=a.tasks,s=a.toggleTaskDone,l=a.removeTask,u=a.setAllDone,b=a.addNewTask;return Object(L.jsxs)(X,{children:[Object(L.jsx)(K,{title:Y[i].headerTitle}),Object(L.jsx)(G,{title:Y[i].sectionTitle,body:Object(L.jsx)(H,{addNewTask:b,inputPlaceholder:Y[i].inputPlaceholder,formButtonInnerText:Y[i].formButtonInnerText}),extraHeaderContent:Object(L.jsx)(P,{languages:Y,changeLanguage:function(n){c(Y.findIndex((function(e){return e.key===n})))}})}),Object(L.jsx)(G,{title:Y[i].tasksSectionTitle,body:Object(L.jsx)(V,{tasks:d,hideDone:t,removeTask:l,toggleTaskDone:s}),extraHeaderContent:Object(L.jsx)(U,{tasks:d,hideDone:t,toggleHideDone:function(){o((function(n){return!n}))},setAllDone:u,setDoneButtonInnerText:Y[i].setDoneButtonInnerText,toggleButtonInnerTextVisible:Y[i].toggleButtonInnerTextVisible,toggleButtonInnerTextHidden:Y[i].toggleButtonInnerTextHidden})})]})},_=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),o(n),r(n),i(n),c(n)}))},nn=Object(B.b)(Z||(Z=Object(D.a)(["\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, ::after, ::before {\n  box-sizing: inherit;\n}\n\nbody {\n  background-color: #eee;\n  max-width: 1024px;\n  min-width: 320px;\n  margin: 0 auto;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 14 px;\n}\n\nbutton {\n  cursor: pointer;\n}"])));v.a.render(Object(L.jsx)(k.a.StrictMode,{children:Object(L.jsxs)(B.a,{theme:{color:{primary:"teal",background:"#fff",fontLight:"#fff",disabled:"#ccc",borders:"#ddd",shadows:"darkgrey",toggleDone:"forestgreen",remove:"crimson"},breakpoint:{mobileMax:"480px",tabletMax:"768px"}},children:[Object(L.jsx)(nn,{}),Object(L.jsx)($,{})]})}),document.getElementById("root")),_()}},[[24,1,2]]]);
//# sourceMappingURL=main.39ead6dd.chunk.js.map