(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var r,c,o,a,i,d,s,u,h,l=t(0),b=t.n(l),f=t(9),m=t.n(f),j=(t(17),t(3)),g=t(2),O=t(4),y={Muziek:new Date("May 09, 2022, 09:00:00"),Nederlands:new Date("May 12, 2022, 13:30:00"),Scheikunde:new Date("May 16, 2022, 13:30:00"),Latijn:new Date("May 17, 2022 09:00:00"),Engels:new Date("May 18, 2022, 13:30:00"),Natuurkunde:new Date("May 19, 2022, 13:30:00"),Wiskunde:new Date("May 20, 2022, 13:30:00")},x=t(1),p=b.a.createContext(),v=function(e){var n=e.children,t=Object(l.useState)("Latijn"),r=Object(O.a)(t,2),c=r[0],o=r[1];return Object(x.jsx)(p.Provider,{value:{currentExam:c,changeCurrentExam:function(e){return o(e)}},children:n})};var k,w,_,M=g.d.div(r||(r=Object(j.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  \n"]))),C=g.d.div(c||(c=Object(j.a)(["\n  position: relative;\n  width: 14em;\n"]))),E=g.d.h1(o||(o=Object(j.a)(["\n  text-align: center;\n  color: ",";\n  margin: 0;\n"])),(function(e){return e.theme.primary})),D=g.d.h1(a||(a=Object(j.a)(["\n  text-align: center;\n  border-bottom: .1em solid ",";\n  border-radius: .1em;\n  color: ",";\n  margin: 0;\n"])),(function(e){return e.theme.highlight}),(function(e){return e.theme.primary})),S=g.d.span(i||(i=Object(j.a)(["\n  cursor: pointer;\n"]))),N=g.d.ul(d||(d=Object(j.a)(["\n  list-style-type: none;\n  background-color: ",";\n  border: .5em solid ",";\n  border-radius: 1em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 2em;\n  left: 0em;\n  width: 13em;\n  padding: 0 0em 0em 0em;\n  animation: ",";\n  transform-origin: top center;\n"])),(function(e){return e.theme.primary}),(function(e){return e.theme.primary}),(function(e){return e.active?Object(g.c)(s||(s=Object(j.a)([""," 0.5s"])),T):""})),z=g.d.li(u||(u=Object(j.a)(["\n  color: ",";\n  border-bottom: .15em solid ",";\n  border-radius: 0.15em;\n  cursor: pointer;\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.secondary}),(function(e){return e.theme.highlight}),(function(e){return e.theme.secondary}),(function(e){return e.theme.highlight})),T=Object(g.e)(h||(h=Object(j.a)(["\n  0% {\n    opacity: 0;\n    transform: rotateX(-90deg);\n  }\n  50% {\n    transform: rotateX(-20deg);\n  }\n  100% {\n    opacity: 1;\n    transform: rotateX(0deg);\n  }\n"]))),X=function(){var e=Object(l.useState)(!1),n=Object(O.a)(e,2),t=n[0],r=n[1],c=Object(l.useContext)(p),o=c.currentExam,a=c.changeCurrentExam,i=Object.keys(y).map((function(e){return Object(x.jsx)(z,{onClick:function(){return function(e){console.log(e),a(e),r(!t)}(e)},children:e},e)}));return Object(x.jsxs)(M,{children:[Object(x.jsxs)(C,{children:[Object(x.jsx)(D,{children:Object(x.jsx)(S,{onClick:function(){r(!t)},children:o})}),t?Object(x.jsx)(N,{active:t,className:"StyledUlComponent",children:i}):null]}),Object(x.jsx)(E,{children:Object(x.jsx)(S,{children:"Eindexamen"})})]})};var J,L,P=g.d.h1(k||(k=Object(j.a)(["\n  text-align: center;\n  color: ",";\n  font-size: 3em;\n"])),(function(e){return e.theme.secondary})),A=g.d.p(w||(w=Object(j.a)(["\n  text-align: center;\n  color: ",";\n  font-size: 2em;\n  font-weight\n"])),(function(e){return e.theme.highlight})),B=g.d.div(_||(_=Object(j.a)(["\n"]))),I=function(){var e=Object(l.useContext)(p).currentExam;console.log(e);var n=function(){var n=+y[e]-+new Date,t={};return n>0&&(t={days:Math.floor(n/864e5),hours:Math.floor(n/36e5%24),minutes:Math.floor(n/1e3/60%60),seconds:Math.floor(n/1e3%60)}),t},t=Object(l.useState)(n()),r=Object(O.a)(t,2),c=r[0],o=r[1];return Object(l.useEffect)((function(){var e=setTimeout((function(){o(n())}),1e3);return function(){return clearTimeout(e)}})),Object(x.jsxs)(B,{children:[Object(x.jsxs)(P,{children:[c.days," dagen"]}),Object(x.jsxs)(A,{children:[c.hours," uur, ",c.minutes," minuten en ",c.seconds," seconden"]})]})},K=["dusted_with_snow","rosy_afters","pastel_blonde","rosy_dew","salmon_sushi","melon_and_mint","sun_kissed_rock","halved_lemons","kiddie_shawl"],U=b.a.createContext(),V=function(e){var n=e.children,t=Math.floor(Math.random(0,K.length)*K.length),r=K[t],c=Object(l.useState)(r),o=Object(O.a)(c,2),a=o[0],i=o[1];return Object(x.jsx)(U.Provider,{value:{changeTheme:function(){return i(function(){var e="";if(a)for(;;){var n=Math.floor(Math.random(0,K.length)*K.length);if(e=K[n],console.log(a,e),e!==a)break}return e}())},theme:a},children:n})};var W,q=g.d.div(J||(J=Object(j.a)(["\n"]))),F=g.d.button(L||(L=Object(j.a)(["\n  border: 0.5em solid ",";\n  border-radius: 0.5em;\n  height: 10vh;\n  width: 75vw;\n  color: ",";\n  background-color: ",";\n  font-size: 1.5em;\n  &:hover{\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.primary}),(function(e){return e.theme.secondary}),(function(e){return e.theme.primary}),(function(e){return e.theme.primary}),(function(e){return e.theme.primary}),(function(e){return e.theme.highlight})),G=function(){var e=Object(l.useContext)(U).changeTheme;return Object(x.jsx)(q,{children:Object(x.jsx)(F,{onClick:e,children:"Verander Kleurenschema"})})};var H,Q,R=g.d.div(W||(W=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 100vh;\n  width: 80vw;\n  padding: 0 10vw 0 10vw;\n  \n"]))),Y=function(){return Object(x.jsxs)(R,{className:"Container",children:[Object(x.jsx)(X,{}),Object(x.jsx)(I,{}),Object(x.jsx)(G,{})]})},Z={dusted_with_snow:{primary:"#0f4454",secondary:"#cab5a7",highlight:"#fcf8f5",background:"#05263b"},rosy_afters:{primary:"#623b41",secondary:"#fdd55e",highlight:"#f3e4e2",background:"#ff6f61"},pastel_blonde:{primary:"#85d2d0",secondary:"#f4b9b8",highlight:"#fff4bd",background:"#887bb0"},rosy_dew:{primary:"#f8afa6",secondary:"#fadcd9",highlight:"#f9f1f0",background:"#f79489"},salmon_sushi:{primary:"#74bdcb",secondary:"#ffa384",highlight:"#e7c5da",background:"#efe7bc"},melon_and_mint:{primary:"#ebeef1",secondary:"#3b9778",highlight:"#f4b18c",background:"#efe7bc"},sun_kissed_rock:{primary:"#f5631a",secondary:"#ffa303",highlight:"#ffe0ae",background:"#a2abce"},halved_lemons:{primary:"#3aa3a0",secondary:"#f7d330",highlight:"#f7dd80",background:"#8ae2e0"},kiddie_shawl:{primary:"#a44757",secondary:"#f8d3b7",highlight:"#b4f8c8",background:"#f7ac32"}},$=Object(g.b)(H||(H=Object(j.a)(["\n * {\n   transition: all 0.5s;\n }\n"]))),ee=function(e){var n=e.children,t=Object(l.useContext)(U).theme;return console.log(Z[t]),Object(x.jsxs)(g.a,{theme:Z[t],children:[Object(x.jsx)($,{}),n]})};var ne=g.d.div(Q||(Q=Object(j.a)(["\n  height: 100vh;\n  margin: 0;\n  background-color: ",";\n"])),(function(e){return e.theme.background})),te=function(){return Object(x.jsx)(V,{children:Object(x.jsx)(ee,{children:Object(x.jsx)(v,{children:Object(x.jsxs)(ne,{children:[Object(x.jsx)("header",{className:"App-header"}),Object(x.jsx)(Y,{})]})})})})};m.a.render(Object(x.jsx)(b.a.StrictMode,{children:Object(x.jsx)(te,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.023e64c7.chunk.js.map