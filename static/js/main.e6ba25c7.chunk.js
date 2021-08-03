(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{38:function(n,e,t){"use strict";t.r(e);var r,o,a,c,i,s,u,d,l,b,x,f,g,p,h,j,m=t(1),O=t.n(m),k=t(16),v=t.n(k),T=t(25),y=t(13),w=t(7),I="tasks",B=function(n){return localStorage.setItem(I,JSON.stringify(n))},D=Object(y.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(I))||[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t[o].done=!t[o].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t.splice(o,1)},setAllDone:function(n,e){var t=n.tasks;e.payload;t.forEach((function(n,e){t[e].done=!0}))},fetchExampleTasks:function(){},setTasks:function(n,e){var t=e.payload;n.tasks=t}}}),z=D.actions,S=z.addTask,C=z.toggleHideDone,H=z.toggleTaskDone,L=z.removeTask,P=z.setAllDone,E=z.fetchExampleTasks,F=z.setTasks,M=function(n){return n.tasks.tasks},N=function(n){return n.tasks.hideDone},V=D.reducer,A=t(6),J=t(5),G=J.default.form(r||(r=Object(A.a)(["\n    background-color: ",";\n    padding: 10px;\n    display: flex;\n\n    @media (max-width: ",") {\n        flex-direction: column;\n    }\n"])),(function(n){return n.theme.color.background}),(function(n){return n.theme.breakpoint.tabletMax})),U=J.default.input(o||(o=Object(A.a)(["\n    border: solid 1px ",";\n    padding: 10px;\n    flex-grow: 1;\n    margin: 10px;\n"])),(function(n){return n.theme.color.borders})),R=J.default.button(a||(a=Object(A.a)(["\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    color: ",";\n    background-color: ",";\n    border: none;\n    padding: 5px;\n    padding: 10px;\n    margin: 10px;\n    transition: background 0.5s, transform 1s;\n\n    &:hover {\n        filter: brightness(130%);\n        transform: scale(1.05);\n    }\n\n    &:active {\n        filter: brightness(160%);\n        box-shadow: inset 1px 1px 2px darkgrey;\n    }\n"])),(function(n){return n.theme.color.fontLight}),(function(n){return n.theme.color.primary})),W=t(2),q=function(n){var e=n.inputPlaceholder,t=n.formButtonInnerText,r=Object(m.useState)(""),o=Object(T.a)(r,2),a=o[0],c=o[1],i=Object(m.useRef)(null),s=Object(w.b)();return Object(W.jsxs)(G,{onSubmit:function(n){n.preventDefault();var e=a.trim();""!==e?(s(S({content:e,done:!1,id:Object(y.c)()})),c(""),i.current.focus()):c("")},children:[Object(W.jsx)(U,{ref:i,value:a,placeholder:e,onChange:function(n){var e=n.target;return c(e.value)},autoFocus:!0}),Object(W.jsx)(R,{children:t})]})},K=Object(y.b)({name:"languages",initialState:{language:"EN"},reducers:{changeLanguage:function(n,e){var t=e.payload;n.language=t}}}),Q=K.actions.changeLanguage,X=function(n){return n.languages.language},Y=K.reducer,Z=J.default.button(c||(c=Object(A.a)(["\n    color: ",";\n    background-color: ",";\n    font-weight: 700;\n    border: solid 1px;\n    padding: 5px;\n    margin: 5px;\n    transition: background 0.5s, transform 1s;\n\n    &:hover {\n        filter: brightness(130%);\n        transform: scale(1.05);\n    }\n\n    &:active {\n        filter: brightness(160%);\n        box-shadow: inset 1px 1px 2px darkgrey;\n    }\n"])),(function(n){return n.theme.color.fontDark}),(function(n){return n.theme.color.background})),$=function(n){var e=n.descriptions,t=Object(w.b)();return Object(W.jsx)("div",{children:Object.keys(e).map((function(n){return Object(W.jsx)(Z,{value:n,onClick:function(){return t(Q(n))},children:n},n)}))})},_=J.default.ul(i||(i=Object(A.a)(["\n    background-color: ",";\n    padding: 15px;\n    list-style-type: none;\n    width: 100%;\n    margin: 0 auto;\n"])),(function(n){return n.theme.color.background})),nn=J.default.li(s||(s=Object(A.a)(["\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: auto 1fr auto;\n    align-items: center;\n    padding: 6px;\n    border-style: solid;\n    border-width: 0px 0px 1px 0px;\n    border-color: ",";\n"])),(function(n){return n.theme.color.borders})),en=J.default.span(u||(u=Object(A.a)(["\n    word-break: break-all;\n\n    ","\n"])),(function(n){return n.done&&Object(J.css)(d||(d=Object(A.a)(["\n        text-decoration: line-through;\n    "])))})),tn=J.default.button(l||(l=Object(A.a)(["\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    color: ",";\n    border: none;\n    padding: 5px;\n    width: 28px;\n    height: 28px;\n    transition: 0.5s;\n\n    ","\n\n    ","\n"])),(function(n){return n.theme.color.fontLight}),(function(n){return n.toggleDone&&Object(J.css)(b||(b=Object(A.a)(["\n        background-color: ",";\n\n        &:hover {\n            filter: brightness(130%);\n        }\n\n        &:active {\n            filter: brightness(160%);\n            box-shadow: inset 1px 1px 3px ",";\n        }\n    "])),(function(n){return n.theme.color.toggleDone}),(function(n){return n.theme.color.shadows}))}),(function(n){return n.remove&&Object(J.css)(x||(x=Object(A.a)(["\n        background-color: ",";\n\n        &:hover {\n            filter: brightness(130%);\n        }\n\n        &:active {\n            filter: brightness(160%);\n            box-shadow: inset 1px 1px 3px ",";\n        }\n    "])),(function(n){return n.theme.color.remove}),(function(n){return n.theme.color.shadows}))})),rn=function(){var n=Object(w.c)(M),e=Object(w.c)(N),t=Object(w.b)();return Object(W.jsx)(_,{children:n.map((function(n){return Object(W.jsxs)(nn,{hidden:n.done&&e,children:[Object(W.jsx)(tn,{toggleDone:!0,onClick:function(){return t(H(n.id))},children:n.done?"\u2714":" "}),Object(W.jsx)(en,{done:n.done,children:n.content}),Object(W.jsx)(tn,{remove:!0,onClick:function(){return t(L(n.id))},children:"\ud83d\uddd1"})]},n.id)}))})},on=J.default.div(f||(f=Object(A.a)(["\n    display: grid;\n    gap: 10px;\n    grid-template-columns: auto auto;\n    \n    @media (max-width: ",") {\n        grid-template-columns: 1fr;\n    }\n"])),(function(n){return n.theme.breakpoint.mobileMax})),an=J.default.button(g||(g=Object(A.a)(["\n    color: ",";\n    font-weight: 400;\n    background-color: transparent;\n    border: none;\n    transition: 0.5s;\n\n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n\n    &:disabled {\n        color: ",";\n        cursor: unset;\n    }\n"])),(function(n){return n.theme.color.primary}),(function(n){return n.theme.color.disabled})),cn=function(n){var e=n.setDoneButtonInnerText,t=n.toggleButtonInnerTextHidden,r=n.toggleButtonInnerTextVisible,o=Object(w.c)(M),a=Object(w.c)(N),c=Object(w.b)();return Object(W.jsx)(on,{children:o.length>0&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(an,{onClick:function(){return c(C())},children:a?t:r}),Object(W.jsx)(an,{onClick:function(){return c(P())},disabled:o.every((function(n){return n.done})),children:e})]})})},sn=J.default.section(p||(p=Object(A.a)(["\n    margin-bottom: 10px;\n"]))),un=J.default.div(h||(h=Object(A.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto auto;\n    gap: 10px;\n    align-items: center;\n    background-color: ",";\n    padding-right: 10px;\n    margin: 0 0 1px 0;\n\n    @media (max-width: ",") {\n        grid-template-columns: 1fr;\n        justify-content: center;\n    }\n"])),(function(n){return n.theme.color.background}),(function(n){return n.theme.breakpoint.mobileMax})),dn=J.default.h2(j||(j=Object(A.a)(["\n    background-color: ",";\n    padding: 15px;\n    font-weight: 700;\n    font-size: 20px;\n    margin: 0 0 1px 0;\n"])),(function(n){return n.theme.color.background})),ln=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(W.jsxs)(sn,{children:[Object(W.jsxs)(un,{children:[Object(W.jsx)(dn,{children:e}),r]}),t]})},bn=function(n){var e=n.title;return Object(W.jsx)("header",{children:Object(W.jsx)("h1",{children:e})})},xn={EN:{headerTitle:"To-do list",sectionTitle:"Add new task",tasksSectionTitle:"List of tasks",inputPlaceholder:"What are you going to do?",formButtonInnerText:"Add task",setDoneButtonInnerText:"Finish all",toggleButtonInnerTextHidden:"Show done",toggleButtonInnerTextVisible:"Hide done",getExampleTasksButtonText:"Get example tasks"},PL:{headerTitle:"Lista zada\u0144",sectionTitle:"Dodaj nowe zadanie",tasksSectionTitle:"Lista zada\u0144",inputPlaceholder:"Co jest do zrobienia?",formButtonInnerText:"Dodaj zadanie",setDoneButtonInnerText:"Uko\u0144cz wszystkie",toggleButtonInnerTextHidden:"Poka\u017c uko\u0144czone",toggleButtonInnerTextVisible:"Ukryj uko\u0144czone",getExampleTasksButtonText:"Pobierz przyk\u0142adowe zadania"}};var fn,gn=function(){var n=Object(w.c)(X),e=Object(w.b)();return document.title=xn[n].headerTitle,Object(W.jsxs)("main",{children:[Object(W.jsx)(bn,{title:xn[n].headerTitle}),Object(W.jsx)(ln,{title:xn[n].sectionTitle,body:Object(W.jsx)(q,{inputPlaceholder:xn[n].inputPlaceholder,formButtonInnerText:xn[n].formButtonInnerText}),extraHeaderContent:Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("div",{children:Object(W.jsx)(an,{onClick:function(){return e(E())},children:xn[n].getExampleTasksButtonText})}),Object(W.jsx)($,{descriptions:xn})]})}),Object(W.jsx)(ln,{title:xn[n].tasksSectionTitle,body:Object(W.jsx)(rn,{}),extraHeaderContent:Object(W.jsx)(cn,{setDoneButtonInnerText:xn[n].setDoneButtonInnerText,toggleButtonInnerTextVisible:xn[n].toggleButtonInnerTextVisible,toggleButtonInnerTextHidden:xn[n].toggleButtonInnerTextHidden})})]})},pn=function(){return Object(W.jsx)(gn,{})},hn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),r(n),o(n),a(n),c(n)}))},jn=t(23),mn=Object(J.createGlobalStyle)(fn||(fn=Object(A.a)(["\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, ::after, ::before {\n  box-sizing: inherit;\n}\n\nbody {\n  background-color: #eee;\n  max-width: 1024px;\n  min-width: 320px;\n  margin: 0 auto;\n  padding: 10px;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 14 px;\n}\n\nbutton {\n  cursor: pointer;\n}"]))),On=t(26),kn=t(10),vn=t.n(kn),Tn=t(12),yn=t(24),wn=function(){var n=Object(yn.a)(vn.a.mark((function n(){var e;return vn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/todo-list-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),In=vn.a.mark(zn),Bn=vn.a.mark(Sn),Dn=vn.a.mark(Cn);function zn(){var n;return vn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Tn.b)(1e3);case 3:return e.next=5,Object(Tn.a)(wn);case 5:return n=e.sent,e.next=8,Object(Tn.c)(F(n));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(Tn.a)(alert,"Something bad happened!");case 14:case"end":return e.stop()}}),In,null,[[0,10]])}function Sn(){var n;return vn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Tn.d)(M);case 2:return n=e.sent,e.next=5,Object(Tn.a)(B,n);case 5:case"end":return e.stop()}}),Bn)}function Cn(){return vn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Tn.f)(E.type,zn);case 2:return n.next=4,Object(Tn.e)("*",Sn);case 4:case"end":return n.stop()}}),Dn)}var Hn=Object(On.a)(),Ln=Object(y.a)({reducer:{tasks:V,languages:Y},middleware:[Hn]});Hn.run(Cn);var Pn=Ln;v.a.render(Object(W.jsx)(O.a.StrictMode,{children:Object(W.jsx)(w.a,{store:Pn,children:Object(W.jsxs)(J.ThemeProvider,{theme:{color:{primary:"teal",fontDark:"#000",background:"#fff",fontLight:"#fff",disabled:"#ccc",borders:"#ddd",shadows:"darkgrey",toggleDone:"forestgreen",remove:"crimson"},breakpoint:{mobileMax:"480px",tabletMax:"768px"}},children:[Object(W.jsx)(jn.Normalize,{}),Object(W.jsx)(mn,{}),Object(W.jsx)(pn,{})]})})}),document.getElementById("root")),hn()}},[[38,1,2]]]);
//# sourceMappingURL=main.e6ba25c7.chunk.js.map