(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var o,r,c,i,a,d,l,s,u,b,g,j,x,f,h,p,O,k=t(1),m=t.n(k),T=t(12),v=t.n(T),y=(t(21),t(16)),I=t(6),B=t(4),w=t(2),D=t(3),S=D.b.form(o||(o=Object(w.a)(["\n    background-color: #fff;\n    padding: 10px;\n    display: flex;\n\n    @media (max-width: 768px) {\n        flex-direction: column;\n    }\n"]))),C=D.b.input(r||(r=Object(w.a)(["\n    border: solid 1px #ddd;\n    padding: 10px;\n    flex-grow: 1;\n    margin: 10px;\n"]))),H=D.b.button(c||(c=Object(w.a)(["\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    color: #fff;\n    background-color: teal;\n    border: none;\n    padding: 5px;\n    padding: 10px;\n    margin: 10px;\n    transition: background 0.5s, transform 1s;\n\n    &:hover {\n        background-color: hsl(180, 100%, 35%);\n        transform: scale(1.05);\n    }\n\n    &:active {\n        background-color: hsl(180, 80%, 45%);\n        box-shadow: inset 1px 1px 2px darkgrey;\n    }\n"]))),z=t(0),P=function(n){var e=n.addNewTask,t=n.inputPlaceholder,o=n.formButtonInnerText,r=Object(k.useState)(""),c=Object(B.a)(r,2),i=c[0],a=c[1],d=Object(k.useRef)(null);return Object(z.jsxs)(S,{onSubmit:function(n){n.preventDefault();var t=i.trim();""!==t?(e(t),a(""),d.current.focus()):a("")},children:[Object(z.jsx)(C,{ref:d,value:i,placeholder:t,onChange:function(n){var e=n.target;return a(e.value)},autoFocus:!0}),Object(z.jsx)(H,{children:o})]})},L=function(n){var e=n.languages,t=n.changeLanguage;return Object(z.jsx)("div",{children:e.map((function(n){return Object(z.jsx)("button",{onClick:function(){return t(n.key)},children:n.key},n.key)}))})},F=D.b.ul(i||(i=Object(w.a)(["\n    background-color: #fff;\n    padding: 15px;\n    list-style-type: none;\n    width: 100%;\n    margin: 0 auto;\n"]))),N=D.b.li(a||(a=Object(w.a)(["\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: auto 1fr auto;\n    align-items: center;\n    padding: 6px;\n    border-style: solid;\n    border-width: 0px 0px 1px 0px;\n    border-color: #ddd;\n\n    ","\n"])),(function(n){return n.hidden&&Object(D.a)(d||(d=Object(w.a)(["\n        display: none;\n    "])))})),V=D.b.span(l||(l=Object(w.a)(["\n    word-break: break-all;\n\n    ","\n"])),(function(n){return n.done&&Object(D.a)(s||(s=Object(w.a)(["\n        text-decoration: line-through;\n    "])))})),A=D.b.button(u||(u=Object(w.a)(["\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    color: #fff;\n    border: none;\n    padding: 5px;\n    width: 28px;\n    height: 28px;\n    transition: 0.5s;\n\n    ","\n\n    ","\n"])),(function(n){return n.toggleDone&&Object(D.a)(b||(b=Object(w.a)(["\n        background-color: hsl(137, 85%, 21%);\n\n        &:hover {\n            background-color: hsl(135, 85%, 31%);\n        }\n\n        &:active {\n            background-color: hsl(135, 85%, 41%);\n            box-shadow: inset 1px 1px 3px darkgrey;\n        }\n    "])))}),(function(n){return n.remove&&Object(D.a)(g||(g=Object(w.a)(["\n        background-color: crimson;\n\n        &:hover {\n            background-color: hsl(348, 83%, 60%);\n        }\n\n        &:active {\n            background-color: hsl(348, 83%, 70%);\n            box-shadow: inset 1px 1px 3px darkgrey;\n        }\n    "])))})),E=function(n){var e=n.tasks,t=n.hideDone,o=n.removeTask,r=n.toggleTaskDone;return Object(z.jsx)(F,{children:e.map((function(n){return Object(z.jsxs)(N,{hidden:n.done&&t,children:[Object(z.jsx)(A,{toggleDone:!0,onClick:function(){return r(n.id)},children:n.done?"\u2714":" "}),Object(z.jsx)(V,{done:n.done,children:n.content}),Object(z.jsx)(A,{remove:!0,onClick:function(){return o(n.id)},children:"\ud83d\uddd1"})]},n.id)}))})},J=D.b.div(j||(j=Object(w.a)(["\n    display: grid;\n    gap: 10px;\n    grid-template-columns: auto auto;\n    \n    @media (max-width:620px) {\n        grid-template-columns: 1fr;\n    }\n"]))),U=D.b.button(x||(x=Object(w.a)(["\n    color: hsl(180, 100%, 25%);\n    font-weight: 400;\n    background-color: #fff;\n    border: none;\n    transition: 0.5s;\n\n    &:hover {\n        color: hsl(180, 100%, 45%);\n    }\n\n    &:active {\n        color: hsl(180, 100%, 15%);\n    }\n\n    &:disabled {\n        color: #ccc;\n        cursor: unset;\n    }\n"]))),M=function(n){var e=n.tasks,t=n.hideDone,o=n.toggleHideDone,r=n.setAllDone,c=n.setDoneButtonInnerText,i=n.toggleButtonInnerTextHidden,a=n.toggleButtonInnerTextVisible;return Object(z.jsx)(J,{children:e.length>0&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(U,{onClick:o,children:t?i:a}),Object(z.jsx)(U,{onClick:r,disabled:e.every((function(n){return n.done})),children:c})]})})},R=D.b.section(f||(f=Object(w.a)(["\n    margin-bottom: 10px;\n"]))),W=D.b.div(h||(h=Object(w.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto auto;\n    gap: 10px;\n    align-items: center;\n    background-color: #fff;\n    padding-right: 10px;\n    margin: 0 0 1px 0;\n\n    @media (max-width:620px) {\n        grid-template-columns: 1fr;\n        justify-content: center;\n    }\n"]))),q=D.b.h2(p||(p=Object(w.a)(["\n    background-color: #fff;\n    padding: 15px;\n    font-weight: 700;\n    font-size: 20px;\n    margin: 0 0 1px 0;\n"]))),G=function(n){var e=n.title,t=n.body,o=n.extraHeaderContent;return Object(z.jsxs)(R,{children:[Object(z.jsxs)(W,{children:[Object(z.jsx)(q,{children:e}),o]}),t]})},K=function(n){var e=n.title;return Object(z.jsx)("header",{children:Object(z.jsx)("h1",{children:e})})},Q=D.b.main(O||(O=Object(w.a)(["\n  padding: 10px;\n"]))),X=function(n){var e=n.children;return Object(z.jsx)(Q,{children:e})},Y=[{key:"EN",headerTitle:"To-do list",sectionTitle:"Add new task",tasksSectionTitle:"List of tasks",inputPlaceholder:"What are you going to do?",formButtonInnerText:"Add task",setDoneButtonInnerText:"Finish all",toggleButtonInnerTextHidden:"Show done",toggleButtonInnerTextVisible:"Hide done"},{key:"PL",headerTitle:"Lista zada\u0144",sectionTitle:"Dodaj nowe zadanie",tasksSectionTitle:"Lista zada\u0144",inputPlaceholder:"Co jest do zrobienia?",formButtonInnerText:"Dodaj zadanie",setDoneButtonInnerText:"Uko\u0144cz wszystkie",toggleButtonInnerTextHidden:"Poka\u017c uko\u0144czone",toggleButtonInnerTextVisible:"Ukryj uko\u0144czone"}];var Z=function(){var n=Object(k.useState)(localStorage.getItem("langId")||0),e=Object(B.a)(n,2),t=e[0],o=e[1],r=Object(k.useState)(!1),c=Object(B.a)(r,2),i=c[0],a=c[1],d=Object(k.useState)(JSON.parse(localStorage.getItem("tasks"))||[{id:1,content:"task1",done:!1},{id:2,content:"task2",done:!0}]),l=Object(B.a)(d,2),s=l[0],u=l[1];return Object(k.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(s))}),[s]),Object(k.useEffect)((function(){localStorage.setItem("langId",t)}),[t]),Object(z.jsxs)(X,{children:[Object(z.jsx)(K,{title:Y[t].headerTitle}),Object(z.jsx)(G,{title:Y[t].sectionTitle,body:Object(z.jsx)(P,{addNewTask:function(n){u((function(e){return[].concat(Object(y.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))},inputPlaceholder:Y[t].inputPlaceholder,formButtonInnerText:Y[t].formButtonInnerText}),extraHeaderContent:Object(z.jsx)(L,{languages:Y,changeLanguage:function(n){o(Y.findIndex((function(e){return e.key===n})))}})}),Object(z.jsx)(G,{title:Y[t].tasksSectionTitle,body:Object(z.jsx)(E,{tasks:s,hideDone:i,removeTask:function(n){u((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){u((function(e){return e.map((function(e){return e.id===n?Object(I.a)(Object(I.a)({},e),{},{done:!e.done}):e}))}))}}),extraHeaderContent:Object(z.jsx)(M,{tasks:s,hideDone:i,toggleHideDone:function(){a((function(n){return!n}))},setAllDone:function(){u((function(n){return n.map((function(n){return Object(I.a)(Object(I.a)({},n),{},{done:!0})}))}))},setDoneButtonInnerText:Y[t].setDoneButtonInnerText,toggleButtonInnerTextVisible:Y[t].toggleButtonInnerTextVisible,toggleButtonInnerTextHidden:Y[t].toggleButtonInnerTextHidden})})]})},$=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),o(n),r(n),c(n),i(n)}))};v.a.render(Object(z.jsx)(m.a.StrictMode,{children:Object(z.jsx)(Z,{})}),document.getElementById("root")),$()}},[[25,1,2]]]);
//# sourceMappingURL=main.f495bcfd.chunk.js.map