(this.webpackJsonpalexnews=this.webpackJsonpalexnews||[]).push([[0],{26:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(16),r=c.n(n),i=(c(26),c(9)),l=c(7),j=c(1);var o=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(l.b,{className:"navbar-brand",to:"/",children:"Alex News"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.c,{exact:!0,className:"nav-link",to:"/",children:"General"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.c,{className:"nav-link",to:"/tech",children:"Tech"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.c,{className:"nav-link",to:"/sports",children:"Sports"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.c,{className:"nav-link",to:"/finance",children:"Finance"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.c,{className:"nav-link",to:"/politics",children:"Politics"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.c,{className:"nav-link",to:"/entertaiment",children:"entertainment"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.c,{className:"nav-link",to:"/travel",children:"Travel"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.c,{className:"nav-link",to:"/science",children:"Science"})})]})})]})})})},d=c(14),b=c.n(d),x=c(19);var h=function(e){var t=e.imgUrl,c=e.title,s=e.des,a=e.newsUrl,n=e.clean_url,r=e.published_date;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:t||"https://source.unsplash.com/random",className:"card-img-top",alt:"..."}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",children:[n,Object(j.jsx)("span",{className:"visually-hidden",children:"unread messages"})]}),Object(j.jsx)("h5",{className:"card-title",children:c}),Object(j.jsx)("p",{className:"card-text",children:s}),Object(j.jsx)("p",{className:"card-text my-3",children:Object(j.jsxs)("small",{className:"text-muted",children:["Published At : ",r]})}),Object(j.jsx)("a",{href:a,rel:"noreferrer",target:"_blank",className:"btn btn-sm btn-dark",children:"Read More"})]})]})})},p=c.p+"static/media/spinner.385774bd.gif",O=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"rounded mx-auto d-block",src:p,alt:"spinner",width:"50px"})})},m=c(20),u=function(e){var t=Object(s.useState)([]),c=Object(i.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(1),l=Object(i.a)(r,2),o=l[0],d=l[1],p=Object(s.useState)(!0),u=Object(i.a)(p,2),v=u[0],g=u[1],N=Object(s.useState)(0),f=Object(i.a)(N,2),k=f[0],y=f[1];return Object(s.useEffect)((function(){e.setProgress(10),function(){var t=Object(x.a)(b.a.mark((function t(){var c,s,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c="https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&topic=".concat(e.topic,"&page_size=21&page=").concat(o),g(!0),t.next=5,fetch(c,{headers:{"x-api-key":e.apiKey}});case 5:return s=t.sent,e.setProgress(30),t.next=9,s.json();case 9:r=t.sent,e.setProgress(70),n(a.concat(r.articles)),y(r.total_hits),g(!1),e.setProgress(100),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.log("Error is :",t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(){return t.apply(this,arguments)}}()()}),[o]),Object(j.jsxs)(j.Fragment,{children:[v&&Object(j.jsx)(O,{}),Object(j.jsx)("h1",{className:"my-4 text-center",children:"Today's Top ".concat(e.topic," Headlines")}),Object(j.jsx)(m.a,{dataLength:a.length,next:function(){d(o+1)},hasMore:a.length!==k,loader:Object(j.jsx)(O,{}),children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:a.map((function(e){return Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsx)(h,{imgUrl:e.media,title:e.title,des:e.excerpt,newsUrl:e.link,clean_url:e.clean_url,published_date:e.published_date})},e.link)}))})})})]})},v=c(2),g=c(21),N=function(){var e="'8waUum4R8yuVTfw-YjZyz5JLeM_xfquD9ozWm92iObM'",t=Object(s.useState)(5),c=Object(i.a)(t,2),a=c[0],n=c[1];return Object(j.jsx)("div",{children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(o,{}),Object(j.jsx)(g.a,{color:"#f11946",progress:a}),Object(j.jsxs)(v.c,{children:[Object(j.jsxs)(v.a,{exact:!0,path:"/",children:[" ",Object(j.jsx)(u,{setProgress:n,apiKey:e,topic:"news"})]},"news"),Object(j.jsxs)(v.a,{exact:!0,path:"/tech",children:[" ",Object(j.jsx)(u,{setProgress:n,apiKey:e,topic:"tech"})]},"tech"),Object(j.jsxs)(v.a,{exact:!0,path:"/sports",children:[" ",Object(j.jsx)(u,{setProgress:n,apiKey:e,topic:"sport"})]},"sport"),Object(j.jsxs)(v.a,{exact:!0,path:"/finance",children:[" ",Object(j.jsx)(u,{setProgress:n,apiKey:e,topic:"finance"})]},"finance"),Object(j.jsxs)(v.a,{exact:!0,path:"/politics",children:[" ",Object(j.jsx)(u,{setProgress:n,apiKey:e,topic:"politics"})]},"politics"),Object(j.jsxs)(v.a,{exact:!0,path:"/entertaiment",children:[" ",Object(j.jsx)(u,{setProgress:n,apiKey:e,topic:"entertainment"})]},"entertainment"),Object(j.jsxs)(v.a,{exact:!0,path:"/travel",children:[" ",Object(j.jsx)(u,{setProgress:n,apiKey:e,topic:"travel"})]},"travel"),Object(j.jsxs)(v.a,{exact:!0,path:"/science",children:[" ",Object(j.jsx)(u,{setProgress:n,apiKey:e,topic:"science"})]},"science")]})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),f()}},[[34,1,2]]]);
//# sourceMappingURL=main.81e239b1.chunk.js.map