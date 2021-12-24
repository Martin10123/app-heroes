(this["webpackJsonpapp-heroes"]=this["webpackJsonpapp-heroes"]||[]).push([[0],{18:function(e,r,a){},34:function(e,r,a){"use strict";a.r(r);var c=a(1),t=a.n(c),s=a(12),n=a.n(s),i=(a(18),a(5)),l=a(2),o=Object(c.createContext)(),h="[auth] login",j="[auth] logout",u=a(0),d=function(){var e=Object(c.useContext)(o).dispatch,r=Object(l.g)();return Object(u.jsxs)("div",{className:"container mt-5",children:[Object(u.jsx)("h1",{children:"Login"}),Object(u.jsx)("hr",{}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){var a=localStorage.getItem("lastPath")||"/marvel";e({type:h,payload:{name:"Martin"}}),r(a)},children:"login"})]})},b=a(3),m=function(){var e=Object(c.useContext)(o),r=e.user.name,a=e.dispatch,t=Object(l.g)();return Object(u.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(u.jsx)("div",{className:"navbar-collapse",children:Object(u.jsxs)("div",{className:"navbar-nav",children:[Object(u.jsx)(b.c,{className:function(e){var r=e.isActive;return"nav-item nav-link ".concat(r?"active":"")},to:"/marvel",children:"Marvel"}),Object(u.jsx)(b.c,{className:function(e){var r=e.isActive;return"nav-item nav-link ".concat(r?"active":"")},to:"/dc",children:"DC"}),Object(u.jsx)(b.c,{className:function(e){var r=e.isActive;return"nav-item nav-link ".concat(r?"active":"")},to:"/search",children:"Search"})]})}),Object(u.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(u.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(u.jsx)("span",{className:"nav-item nav-link text-info",children:r}),Object(u.jsx)("button",{onClick:function(){a({type:j}),t("/login")},className:"nav-item nav-link btn",children:"Logout"})]})})]})},p=a(6),O=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],v=function(e){var r=e.id,a=e.superhero,c=e.alter_ego,t=e.first_appearance,s=e.characters;return console.log(r),Object(u.jsx)("div",{className:"card ms-3",style:{maxWidth:540},children:Object(u.jsxs)("div",{className:"row no-gutters",children:[Object(u.jsx)("div",{className:"col-md-4",children:Object(u.jsx)("img",{src:"./assets/heroes/".concat(r,".jpg"),className:"card-img",alt:a})}),Object(u.jsx)("div",{className:"col-md-8",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:a}),Object(u.jsx)("p",{className:"card-text",children:c}),c!==s&&Object(u.jsxs)("p",{className:"card-text",children:[" ",s," "]}),Object(u.jsx)("p",{className:"card-text",children:Object(u.jsx)("small",{className:"text-muted",children:t})}),Object(u.jsx)(b.b,{to:"/hero/".concat(r),children:"M\xe1s..."})]})})]})})},x=function(e){var r=e.publisher,a=Object(c.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("publisher ".concat(e," no encontrado, sorry"));return O.filter((function(r){return r.publisher===e}))}(r)}),[r]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn",children:a.map((function(e){return Object(u.jsx)(v,Object(p.a)({},e),e.id)}))})})},f=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Marvel Screen"}),Object(u.jsx)("hr",{}),Object(u.jsx)(x,{publisher:"Marvel Comics"})]})},g=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Dc Screen"}),Object(u.jsx)("hr",{}),Object(u.jsx)(x,{publisher:"DC Comics"})]})},C=a(13),_=a.n(C),N=a(7),y=function(){var e=Object(l.f)(),r=Object(l.g)(),a=_.a.parse(e.search).q,t=void 0===a?"":a,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(c.useState)(e),a=Object(i.a)(r,2),t=a[0],s=a[1];return[t,function(e){var r=e.target;s(Object(p.a)(Object(p.a)({},t),{},Object(N.a)({},r.name,r.value)))},function(){s(e)}]}({name:t}),n=Object(i.a)(s,2),o=n[0],h=n[1],j=o.name,d=Object(c.useMemo)((function(){return function(e){return""===e?[]:(e=e.toLocaleLowerCase(),O.filter((function(r){return r.superhero.toLocaleLowerCase().includes(e)})))}(t)}),[t]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Search Screen"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-5",children:[Object(u.jsx)("h4",{children:" Search Form "}),Object(u.jsx)("hr",{}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r("?q=".concat(j))},children:[Object(u.jsx)("input",{type:"text",name:"name",placeholder:"Find your hero",className:"form-control",value:j,onChange:h}),Object(u.jsx)("button",{type:"submit",className:"btn m-1 btn-clock btn-outline-primary",children:"Search..."})]})]}),Object(u.jsxs)("div",{className:"col-7",children:[Object(u.jsx)("h4",{children:"Results"}),Object(u.jsx)("hr",{}),d.map((function(e){return Object(u.jsx)(v,Object(p.a)({},e),e.id)}))]})]})]})},S=function(){var e=Object(l.h)().heroeId,r=Object(l.g)(),a=Object(c.useMemo)((function(){return r=e,O.find((function(e){return e.id===r}));var r}),[e]);if(console.log(a),console.log("hola"),!a)return Object(u.jsx)(l.a,{to:"/marvel"});var t=a.superhero,s=a.publisher,n=a.alter_ego,i=a.first_appearance,o=a.characters;return Object(u.jsxs)("div",{className:"row mt-5",children:[Object(u.jsx)("div",{className:"col-4",children:Object(u.jsx)("img",{src:"../assets/heroes/".concat(e,".jpg"),alt:t,className:"img-thumbnail animate__animated animate__fadeInBottomLeft"})}),Object(u.jsxs)("div",{className:"col-8",children:[Object(u.jsxs)("h3",{style:{fontSize:"3.2rem"},children:[" ",t," "]}),Object(u.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(u.jsxs)("li",{className:"list-group-item",children:[Object(u.jsx)("b",{children:"Alter ego: "})," ",n]}),Object(u.jsxs)("li",{className:"list-group-item",children:[Object(u.jsx)("b",{children:"publisher: "})," ",s]}),Object(u.jsxs)("li",{className:"list-group-item",children:[Object(u.jsx)("b",{children:"First appearance: "})," ",i]})]}),Object(u.jsx)("h5",{style:{fontSize:"2.5rem"},children:"characters"}),Object(u.jsx)("p",{style:{fontSize:"2rem"},children:o}),Object(u.jsx)("button",{className:"btn btn-outline-info",onClick:function(){r(-1)},children:"return"})]})]})},M=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{path:"marvel",element:Object(u.jsx)(f,{})}),Object(u.jsx)(l.b,{path:"hero/:heroeId",element:Object(u.jsx)(S,{})}),Object(u.jsx)(l.b,{path:"dc",element:Object(u.jsx)(g,{})}),Object(u.jsx)(l.b,{path:"search",element:Object(u.jsx)(y,{})}),Object(u.jsx)(l.b,{path:"/",element:Object(u.jsx)(f,{})})]})})]})},k=function(e){var r=e.children;return Object(c.useContext)(o).user.logged?r:Object(u.jsx)(l.a,{to:"/login"})},D=function(e){var r=e.children;return Object(c.useContext)(o).user.logged?Object(u.jsx)(l.a,{to:"/marvel"}):r},w=function(){return Object(u.jsx)(b.a,{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{path:"/login",element:Object(u.jsx)(D,{children:Object(u.jsx)(d,{})})}),Object(u.jsx)(l.b,{path:"/*",element:Object(u.jsx)(k,{children:Object(u.jsx)(M,{})})})]})})},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case h:return Object(p.a)(Object(p.a)({},r.payload),{},{logged:!0});case j:return{logged:!1};default:return e}},A=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}};var J=function(){var e=Object(c.useReducer)(B,{},A),r=Object(i.a)(e,2),a=r[0],t=r[1];return Object(c.useEffect)((function(){a&&localStorage.setItem("user",JSON.stringify(a))}),[a]),Object(u.jsx)(o.Provider,{value:{user:a,dispatch:t},children:Object(u.jsx)(w,{})})};n.a.render(Object(u.jsx)(t.a.StrictMode,{children:Object(u.jsx)(J,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6c4ba840.chunk.js.map