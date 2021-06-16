(this["webpackJsonpflick-test"]=this["webpackJsonpflick-test"]||[]).push([[0],{150:function(t,e,n){},151:function(t,e,n){},474:function(t,e,n){},475:function(t,e,n){},476:function(t,e,n){},477:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),c=n(15),a=n.n(c),o=(n(150),n.p,n(28)),l=n(29),r=n(32),d=n(31),j=n(36),h=(n(151),n(30)),b=n(2),u=Object(h.b)((function(t){return{isLogin:t.isLogin}}),(function(t){return{Logout:function(){t({type:"LOGOUT"})}}}))((function(t){return Object(b.jsx)("header",{className:"header",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(j.b,{to:"/",children:Object(b.jsx)("img",{className:"logo",src:"https://www.flick.id/img/flick-black.svg"})}),Object(b.jsx)("div",{className:"title",children:"Front-end Test - Job Search"}),t.isLogin?Object(b.jsx)("div",{className:"logout",children:Object(b.jsx)("input",{onClick:t.Logout,type:"submit",value:"Logout"})}):""]})})})),p=n(5),O=(n(161),function(t){return Object(b.jsxs)("div",{style:{display:"flex",borderBottom:"1px solid #f0f0f0",paddingBottom:"5px",marginBottom:"10px"},children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{style:{fontWeight:"bold"},children:[Object(b.jsx)(j.b,{to:"/detail/"+t.id,children:t.title}),Object(b.jsxs)("span",{style:{color:"#16e616"},children:[" ",t.type," "]})]}),Object(b.jsxs)("div",{style:{color:"grey"},children:[t.company," "]})]}),Object(b.jsxs)("div",{style:{marginLeft:"auto",textAlign:"right"},children:[Object(b.jsxs)("div",{style:{color:"grey"},children:[t.location," "]}),Object(b.jsxs)("div",{style:{color:"grey"},children:[t.date," "]})]})]})}),x=n(53),g=n.n(x),y=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).handlerInputChange=function(t){console.log(t.target.name),"keySearch"==t.target.name&&i.setState({keyCari:t.target.value}),"keyLocation"==t.target.name&&i.setState({keyLokasi:t.target.value}),"FulltimeOnly"==t.target.name&&i.setState({OnlyFulltime:!i.state.OnlyFulltime}),console.log(i.state.OnlyFulltime)},i.state={isLoading:!0,isSearch:!0,keyCari:"",keyLokasi:"",OnlyFulltime:!1,jobs:[]},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;g()("positions.json",{proxy:{host:"https://jobs.github.com/"}}).then((function(e){t.setState({jobs:e.data,isLoading:!1}),console.log(t.state.jobs)})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{className:"container",style:{padding:"20px 0"},children:[Object(b.jsxs)("form",{style:{marginBottom:"20px",display:"flex"},children:[Object(b.jsx)("div",{children:Object(b.jsxs)("label",{children:["Search:",Object(b.jsx)("input",{type:"text",name:"keySearch",onChange:this.handlerInputChange})]})}),Object(b.jsx)("div",{children:Object(b.jsxs)("label",{children:["Location:",Object(b.jsx)("input",{type:"text",name:"keyLocation",onChange:this.handlerInputChange})]})}),Object(b.jsx)("div",{style:{alignSelf:"center"},children:Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{style:{marginRight:"10px"},name:"FulltimeOnly",type:"checkbox",onChange:this.handlerInputChange}),"Full Time Only"]})})]}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h3",{children:"Job List"}),Object(b.jsx)("hr",{}),this.state.isLoading?Object(b.jsx)("div",{style:{textAlign:"center",padding:"50px"},children:Object(b.jsx)("img",{alt:"preload",src:"https://icons8.com/preloaders/preloaders/1486/Hourglass.gif",loading:"lazy"})}):this.state.jobs.map((function(e,n){return t.state.isSearch?e.location.includes(t.state.keyLokasi)&&(e.title.includes(t.state.keyCari)||e.company.includes(t.state.keyCari)||e.description.includes(t.state.keyCari))?(t.state.OnlyFulltime&&e.type,Object(b.jsx)(O,{id:e.id,title:e.title,type:e.type,company:e.company,location:e.location,date:e.created_at})):void 0:Object(b.jsx)(O,{id:e.id,title:e.title,type:e.type,company:e.company,location:e.location,date:e.created_at})}))]})]})}}]),n}(s.a.Component),m=(n(474),function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={isLoading:!0,data:[]},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;g.a.get("../positions/"+v+".json").then((function(e){t.setState({data:e.data,isLoading:!1}),console.log(t.state.data)})).catch((function(t){}))}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"container",style:{padding:"20px 0"},children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)(f,{}),this.state.isLoading?Object(b.jsx)("div",{style:{textAlign:"center",padding:"50px"},children:Object(b.jsx)("img",{alt:"preload",src:"https://icons8.com/preloaders/preloaders/1486/Hourglass.gif",loading:"lazy"})}):Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-8",children:[Object(b.jsx)("h4",{children:this.state.data.company}),Object(b.jsx)("h1",{children:this.state.data.title}),Object(b.jsxs)("h5",{children:[this.state.data.location," - ",this.state.data.type]}),Object(b.jsx)("div",{style:{paddingTop:"20px"},dangerouslySetInnerHTML:{__html:this.state.data.description}})]}),Object(b.jsxs)("div",{className:"col-md-4",children:[Object(b.jsx)("img",{className:"img-responsive",src:this.state.data.company_logo}),Object(b.jsxs)("div",{className:"bg-success",style:{padding:"10px 20px",marginTop:"20px"},children:[Object(b.jsx)("h4",{children:"How to Apply"}),Object(b.jsx)("div",{style:{paddingTop:"10px","overflow-wrap":"anywhere"},dangerouslySetInnerHTML:{__html:this.state.data.how_to_apply}})]})]})]})]})})}}]),n}(s.a.Component)),v="",f=function(){var t=Object(p.f)().id;return v=t,Object(b.jsx)("div",{})},L=(n(475),function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"container",style:{padding:"20px 0"},children:Object(b.jsx)("div",{className:"login-wrapper",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("div",{children:Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Username"}),Object(b.jsx)("input",{type:"text"})]})}),Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Password"}),Object(b.jsx)("input",{type:"text"})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:this.props.Login,type:"submit",children:"Submit"})})]})})})}}]),n}(s.a.Component)),k=Object(h.b)("",(function(t){return{Login:function(){t({type:"LOGGED_IN"})}}}))(L),C=(n(476),function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={isLoading:!0},i}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(j.a,{basename:"/Flick-Frontend-Test",children:[Object(b.jsx)(u,{}),this.props.isLogin?Object(b.jsx)(p.c,{children:Object(b.jsxs)("div",{className:"app-content",children:[Object(b.jsx)(p.a,{path:"/",exact:!0,component:y}),Object(b.jsx)(p.a,{path:"/detail/:id",children:Object(b.jsx)(m,{})})]})}):Object(b.jsx)(k,{})]})}}]),n}(s.a.Component)),N=Object(h.b)((function(t){return{isLogin:t.isLogin}}))(C);var S=function(){return Object(b.jsx)(N,{})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,478)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),i(t),s(t),c(t),a(t)}))},w=n(146),T={isLogin:!1},_=Object(w.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;return"LOGGED_IN"===e.type?{isLogin:!0}:"LOGOUT"===e.type?{isLogin:!1}:t}));a.a.render(Object(b.jsx)(h.a,{store:_,children:Object(b.jsx)(S,{})}),document.getElementById("root")),F()}},[[477,1,2]]]);
//# sourceMappingURL=main.6b13d55b.chunk.js.map