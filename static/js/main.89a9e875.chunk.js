(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var r,c,a,o,i,d,s,u,h=t(0),l=t.n(h),b=t(9),f=t.n(b),m=(t(17),t(3)),j=t(2),g=t(4),O={Latijn:new Date("May 19, 2021 09:00:00"),Engels:new Date("May 20, 2021, 13:30:00"),Nederlands:new Date("May 21, 2021, 13:30:00"),Muziek:new Date("May 26, 2021, 09:00:00"),Scheikunde:new Date("May 26, 2021, 13:30:00"),Natuurkunde:new Date("May 28, 2021, 13:30:00"),Wiskunde:new Date("June 18, 2021, 13:30:00")},y=t(1),x=l.a.createContext(),p=function(e){var n=e.children,t=Object(h.useState)("Latijn"),r=Object(g.a)(t,2),c=r[0],a=r[1];return Object(y.jsx)(x.Provider,{value:{currentExam:c,changeCurrentExam:function(e){return a(e)}},children:n})};var v,k,w,_=j.d.div(r||(r=Object(m.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  \n"]))),M=j.d.div(c||(c=Object(m.a)(["\n  position: relative;\n  width: 14em;\n"]))),C=j.d.h1(a||(a=Object(m.a)(["\n  text-align: center;\n  color: ",";\n  margin: 0;\n"])),(function(e){return e.theme.primary})),E=j.d.span(o||(o=Object(m.a)(["\n  cursor: pointer;\n"]))),D=j.d.ul(i||(i=Object(m.a)(["\n  list-style-type: none;\n  background-color: ",";\n  border: .5em solid ",";\n  border-radius: 1em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 2em;\n  left: 0em;\n  width: 13em;\n  padding: 0 0em 0em 0em;\n  animation: ",";\n  transform-origin: top center;\n"])),(function(e){return e.theme.primary}),(function(e){return e.theme.primary}),(function(e){return e.active?Object(j.c)(d||(d=Object(m.a)([""," 0.5s"])),N):""})),S=j.d.li(s||(s=Object(m.a)(["\n  color: ",";\n  border-bottom: .15em solid ",";\n  border-radius: 0.15em;\n  cursor: pointer;\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.secondary}),(function(e){return e.theme.highlight}),(function(e){return e.theme.secondary}),(function(e){return e.theme.highlight})),N=Object(j.e)(u||(u=Object(m.a)(["\n  0% {\n    opacity: 0;\n    transform: rotateX(-90deg);\n  }\n  50% {\n    transform: rotateX(-20deg);\n  }\n  100% {\n    opacity: 1;\n    transform: rotateX(0deg);\n  }\n"]))),z=function(){var e=Object(h.useState)(!1),n=Object(g.a)(e,2),t=n[0],r=n[1],c=Object(h.useContext)(x),a=c.currentExam,o=c.changeCurrentExam,i=Object.keys(O).map((function(e){return Object(y.jsx)(S,{onClick:function(){return function(e){console.log(e),o(e),r(!t)}(e)},children:e},e)}));return Object(y.jsxs)(_,{children:[Object(y.jsxs)(M,{children:[Object(y.jsx)(C,{children:Object(y.jsx)(E,{onClick:function(){r(!t)},children:a})}),t?Object(y.jsx)(D,{active:t,className:"StyledUlComponent",children:i}):null]}),Object(y.jsx)(C,{children:Object(y.jsx)(E,{children:"Eindexamen"})})]})};var T,J,X=j.d.h1(v||(v=Object(m.a)(["\n  text-align: center;\n  color: ",";\n  font-size: 3em;\n"])),(function(e){return e.theme.secondary})),L=j.d.p(k||(k=Object(m.a)(["\n  text-align: center;\n  color: ",";\n  font-size: 2em;\n  font-weight\n"])),(function(e){return e.theme.highlight})),P=j.d.div(w||(w=Object(m.a)(["\n"]))),A=function(){var e=Object(h.useContext)(x).currentExam;console.log(e);var n=function(){var n=+O[e]-+new Date,t={};return n>0&&(t={days:Math.floor(n/864e5),hours:Math.floor(n/36e5%24),minutes:Math.floor(n/1e3/60%60),seconds:Math.floor(n/1e3%60)}),t},t=Object(h.useState)(n()),r=Object(g.a)(t,2),c=r[0],a=r[1];return Object(h.useEffect)((function(){var e=setTimeout((function(){a(n())}),1e3);return function(){return clearTimeout(e)}})),Object(y.jsxs)(P,{children:[Object(y.jsxs)(X,{children:[c.days," dagen"]}),Object(y.jsxs)(L,{children:[c.hours," uur, ",c.minutes," minuten en ",c.seconds," seconden"]})]})},B=["dusted_with_snow","rosy_afters","pastel_blonde","rosy_dew","salmon_sushi","melon_and_mint","sun_kissed_rock","halved_lemons","kiddie_shawl"],I=l.a.createContext(),K=function(e){var n=e.children,t=Math.floor(Math.random(0,B.length)*B.length),r=B[t],c=Object(h.useState)(r),a=Object(g.a)(c,2),o=a[0],i=a[1];return Object(y.jsx)(I.Provider,{value:{changeTheme:function(){return i(function(){var e="";if(o)for(;;){var n=Math.floor(Math.random(0,B.length)*B.length);if(e=B[n],console.log(o,e),e!==o)break}return e}())},theme:o},children:n})};var U,V=j.d.div(T||(T=Object(m.a)(["\n"]))),W=j.d.button(J||(J=Object(m.a)(["\n  border: 0.5em solid ",";\n  border-radius: 0.5em;\n  height: 10vh;\n  width: 75vw;\n  color: ",";\n  background-color: ",";\n  font-size: 1.5em;\n  &:hover{\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.primary}),(function(e){return e.theme.secondary}),(function(e){return e.theme.primary}),(function(e){return e.theme.primary}),(function(e){return e.theme.primary}),(function(e){return e.theme.highlight})),q=function(){var e=Object(h.useContext)(I).changeTheme;return Object(y.jsx)(V,{children:Object(y.jsx)(W,{onClick:e,children:"Verander Kleurenschema"})})};var F,G,H=j.d.div(U||(U=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 100vh;\n  width: 80vw;\n  padding: 0 10vw 0 10vw;\n  \n"]))),Q=function(){return Object(y.jsxs)(H,{className:"Container",children:[Object(y.jsx)(z,{}),Object(y.jsx)(A,{}),Object(y.jsx)(q,{})]})},R={dusted_with_snow:{primary:"#0f4454",secondary:"#cab5a7",highlight:"#fcf8f5",background:"#05263b"},rosy_afters:{primary:"#623b41",secondary:"#fdd55e",highlight:"#f3e4e2",background:"#ff6f61"},pastel_blonde:{primary:"#85d2d0",secondary:"#f4b9b8",highlight:"#fff4bd",background:"#887bb0"},rosy_dew:{primary:"#f8afa6",secondary:"#fadcd9",highlight:"#f9f1f0",background:"#f79489"},salmon_sushi:{primary:"#74bdcb",secondary:"#ffa384",highlight:"#e7c5da",background:"#efe7bc"},melon_and_mint:{primary:"#ebeef1",secondary:"#3b9778",highlight:"#f4b18c",background:"#efe7bc"},sun_kissed_rock:{primary:"#f5631a",secondary:"#ffa303",highlight:"#ffe0ae",background:"#a2abce"},halved_lemons:{primary:"#3aa3a0",secondary:"#f7d330",highlight:"#f7dd80",background:"#8ae2e0"},kiddie_shawl:{primary:"#a44757",secondary:"#f8d3b7",highlight:"#b4f8c8",background:"#f7ac32"}},Y=Object(j.b)(F||(F=Object(m.a)(["\n * {\n   transition: all 0.5s;\n }\n"]))),Z=function(e){var n=e.children,t=Object(h.useContext)(I).theme;return console.log(R[t]),Object(y.jsxs)(j.a,{theme:R[t],children:[Object(y.jsx)(Y,{}),n]})};var $=j.d.div(G||(G=Object(m.a)(["\n  height: 100vh;\n  margin: 0;\n  background-color: ",";\n"])),(function(e){return e.theme.background})),ee=function(){return Object(y.jsx)(K,{children:Object(y.jsx)(Z,{children:Object(y.jsx)(p,{children:Object(y.jsxs)($,{children:[Object(y.jsx)("header",{className:"App-header"}),Object(y.jsx)(Q,{})]})})})})};f.a.render(Object(y.jsx)(l.a.StrictMode,{children:Object(y.jsx)(ee,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.89a9e875.chunk.js.map