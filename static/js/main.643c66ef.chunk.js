(this.webpackJsonpcinesimile=this.webpackJsonpcinesimile||[]).push([[0],{15:function(e,t,a){},28:function(e){e.exports=JSON.parse('[{"id":0,"title":"movie 1","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur perferendis quos, libero atque ullam asperiores minima reprehenderit sequi exercitationem necessitatibus nulla omnis quia quae! Libero sapiente cupiditate consectetur corporis. "},{"id":1,"title":"movie 12","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur perferendis quos, libero atque ullam asperiores minima reprehenderit sequi exercitationem necessitatibus nulla omnis quia quae! Libero sapiente cupiditate consectetur corporis. "},{"id":2,"title":"movie 123","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur perferendis quos, libero atque ullam asperiores minima reprehenderit sequi exercitationem necessitatibus nulla omnis quia quae! Libero sapiente cupiditate consectetur corporis. "},{"id":3,"title":"movie 1234","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur perferendis quos, libero atque ullam asperiores minima reprehenderit sequi exercitationem necessitatibus nulla omnis quia quae! Libero sapiente cupiditate consectetur corporis. "},{"id":4,"title":"movie 12345","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur perferendis quos, libero atque ullam asperiores minima reprehenderit sequi exercitationem necessitatibus nulla omnis quia quae! Libero sapiente cupiditate consectetur corporis. "},{"id":5,"title":"Avengers","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur perferendis quos, libero atque ullam asperiores minima reprehenderit sequi exercitationem necessitatibus nulla omnis quia quae! Libero sapiente cupiditate consectetur corporis. "},{"id":6,"title":"Asterix and Obelisk","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur perferendis quos, libero atque ullam asperiores minima reprehenderit sequi exercitationem necessitatibus nulla omnis quia quae! Libero sapiente cupiditate consectetur corporis. "}]')},31:function(e,t,a){e.exports=a(46)},36:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(26),l=a.n(r),s=(a(36),a(29)),c=a(4),o=a(27),m=a(23),u=a(66),d=a(50),p=a(28),E=(a(15),function(e){var t=e.title;return i.a.createElement("h2",{className:"search-query"},"Movies like: ",t)}),h=function(e){var t=e.title,a=e.description;return i.a.createElement("div",{className:"search-results__card"},i.a.createElement("img",{className:"search-results__card-poster",alt:"movie poster",src:"https://dummyimage.com/320x170/bfbfbf/fff"}),i.a.createElement("h3",{className:"search-results__card-title"},t),i.a.createElement("p",{className:"search-results__card-description"},a),i.a.createElement("button",{className:"search-results__card-button"},"Go somewhere"))},b=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),s=Object(m.a)(l,2),c=s[0],b=s[1],g=Object(d.a)((function(e,t){var a=[];if(e){var n,i=Object(o.a)(p);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.title.toLowerCase().startsWith(e)&&a.push(r)}}catch(l){i.e(l)}finally{i.f()}}t(a)}),500);return i.a.createElement("div",{className:"searchBox"},i.a.createElement(u.a,{onChange:function(e){g.callback(e.target.value,r),""===e.target.value&&b(null)},id:"search-1",placeHolderText:"Search a movie"}),i.a.createElement("div",null,a.map((function(e){return i.a.createElement("h4",{key:e.id,id:e.id,onClick:function(){return b(e)}},e.title)}))),c&&a.length>0&&i.a.createElement(E,{title:c.title}),i.a.createElement("div",{style:{display:"flex"}},c&&a.map((function(e){return i.a.createElement(h,{key:e.id,style:{width:"20%"},title:e.title,description:e.description})}))))},g=a(67),f=function(){return i.a.createElement("div",{className:"intro-comp"},i.a.createElement("h1",{className:"landing-page__heading"},"hello, movie lovers!"),i.a.createElement("p",null,"Welcome to CineSmile. We are platform to find similar movies easily. We use sophisticated machine learning models to find similarities between movies and provide you with close matches."),i.a.createElement(g.a,{className:"btn"},"Learn more"))},v=function(){return i.a.createElement("div",{className:"bx--grid bx--grid--full-width landing-page"},i.a.createElement("div",{className:"bx--row landing-page__banner"},i.a.createElement("div",{className:"bx--offset-lg-1 bx--col-lg-14"},i.a.createElement(f,null),i.a.createElement(b,{className:"search-box"}))))},x=[{title:"Home",url:"#"},{title:"News",url:"news"},{title:"Categories",url:"categories"},{title:"Contact Us",url:"contact"}],N=(a(40),a(51)),q=a(52),y=a(53),w=a(54),_=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(N.a,{"aria-label":"Header Panel",className:"header-side"},i.a.createElement(q.a,{"aria-label":"Switcher Container"},x.map((function(e,t){var a=t+e.title+"sideBar";return i.a.createElement(i.a.Fragment,{key:t+"div"+e.title},i.a.createElement(y.a,{"aria-label":a,href:e.url,className:"navbar-items",key:t+"sidebar"},e.title)," ",i.a.createElement(w.a,null))})))))},L=function(){for(var e=document.getElementsByClassName("bx--header-panel"),t=document.getElementById("show-side-panel"),a=document.getElementById("global_header"),n=0;n<e.length;n++)e[n].classList.contains("bx--header-panel--expanded")?(e[n].classList.remove("bx--header-panel--expanded"),t.classList.remove("focus-in"),t.classList.add("focus-out"),a.style.border="none"):(e[n].classList.add("bx--header-panel--expanded"),t.classList.remove("focus-out"),t.classList.add("focus-in"),a.style.border="1px solid white")},k=a(55),C=a(56),S=a(57),B=a(58),I=a(59),O=a(68),W=a(60),T=a(61),V=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(k.a,{"aria-label":"CineSimile",className:"bx--col-sm-10 header"},i.a.createElement(C.a,null),i.a.createElement(S.a,{href:"/",prefix:"",className:"bx--col-lg-2"},"CineSimile"),i.a.createElement(B.a,{"aria-label":"CineSimileItems",className:"nav-menu"},x.map((function(e,t){return i.a.createElement(I.a,{href:e.url,className:"navbar-items  bx--col-lg-10",key:t+e.title},e.title)}))),i.a.createElement(O.a,{id:"global_header"},i.a.createElement(W.a,{"aria-label":"side-bar",onClick:L,id:"show-side-panel"},i.a.createElement(T.a,null))),i.a.createElement(_,null)))},j=a(64),F=(a(41),function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("h5",{className:"footer__heading"},i.a.createElement("span",null,"\xa9")," CineSimile ",i.a.createElement("span",{className:"years"},"2020")))}),M=a(62),P=a(65),H=a(63),J=function(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("h2",{className:"landing-page__heading"},"Leave us a message . . . "),i.a.createElement("p",null,"We are here to help and answer any question you might have. We look forward to hearing from you.")),i.a.createElement("div",null,i.a.createElement(M.a,null,i.a.createElement("div",{style:{marginBottom:"2rem"}},i.a.createElement(P.a,{id:"test2",invalidText:"Invalid error message.",labelText:"Name: "})),i.a.createElement("div",{style:{marginBottom:"2rem"}},i.a.createElement(P.a,{id:"test3",invalidText:"Invalid error message.",labelText:"Email: "})),i.a.createElement("div",{style:{marginBottom:"2rem"}},i.a.createElement(H.a,{cols:50,id:"test5",invalidText:"Invalid error message.",labelText:"Message: ",rows:4})),i.a.createElement(g.a,{className:"btn",kind:"primary",tabIndex:0,type:"submit"},"Submit"))))},A=function(){return i.a.createElement("div",{className:"bx--grid bx--grid--full-width landing-page"},i.a.createElement("div",{className:"bx--row landing-page__banner"},i.a.createElement("div",{className:"bx--offset-lg-1 bx--col-lg-14"},i.a.createElement("html",null,i.a.createElement("h1",null,"404"),i.a.createElement("h2",null,"Page not found"),i.a.createElement("img",{className:"Page_not_found",alt:"Page not found",src:"https://i.imgur.com/qIufhof.png"})))))},G=function(){return i.a.createElement("div",{className:"intro-comp"},i.a.createElement("h1",{className:"landing-page__heading"},"Movie By Genre"),i.a.createElement("p",null," In here you can search movies by category"),i.a.createElement(g.a,{className:"btn"},"See more..."))},U=function(){return i.a.createElement("div",{className:"intro-comp"},i.a.createElement("h1",{className:"landing-page__heading"},"Latest News related to recent movies"),i.a.createElement("p",null," sample1"))},$=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(V,null),i.a.createElement(j.a,null,i.a.createElement(s.a,null,i.a.createElement(c.c,null,i.a.createElement(c.a,{exact:!0,path:"/",render:function(e){return i.a.createElement(v,e)}}),i.a.createElement(c.a,{exact:!0,path:"/home",component:v}),i.a.createElement(c.a,{exact:!0,path:"/categories",component:G}),i.a.createElement(c.a,{exact:!0,path:"/news",component:U}),i.a.createElement(c.a,{exact:!0,path:"/contact",component:J}),i.a.createElement(c.a,{component:A})))),i.a.createElement(F,null))},z=(a(45),function(){return i.a.createElement($,null)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.643c66ef.chunk.js.map