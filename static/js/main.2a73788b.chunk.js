(this["webpackJsonpflick-test"]=this["webpackJsonpflick-test"]||[]).push([[0],{152:function(t,e,n){},153:function(t,e,n){},472:function(t,e,n){},473:function(t,e,n){},474:function(t,e,n){},475:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),a=n(15),c=n.n(a),o=(n(152),n.p,n(28)),l=n(29),r=n(32),d=n(31),j=n(38),h=(n(153),n(30)),u=n(2),p=Object(h.b)((function(t){return{isLogin:t.isLogin}}),(function(t){return{Logout:function(){t({type:"LOGOUT"})}}}))((function(t){return Object(u.jsx)("header",{className:"header",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(j.b,{to:"/",children:Object(u.jsx)("img",{className:"logo",src:"https://www.flick.id/img/flick-black.svg"})}),Object(u.jsx)("div",{className:"title",children:"Front-end Test - Job Search"}),t.isLogin?Object(u.jsx)("div",{className:"logout",children:Object(u.jsx)("input",{onClick:t.Logout,type:"submit",value:"Logout"})}):""]})})})),b=n(4),g=(n(159),function(t){return Object(u.jsxs)("div",{style:{display:"flex",borderBottom:"1px solid #f0f0f0",paddingBottom:"5px",marginBottom:"10px"},children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{style:{fontWeight:"bold"},children:[Object(u.jsx)(j.b,{to:"/detail/"+t.id,children:t.title}),Object(u.jsxs)("span",{style:{color:"#16e616"},children:[" ",t.type," "]})]}),Object(u.jsxs)("div",{style:{color:"grey"},children:[t.company," "]})]}),Object(u.jsxs)("div",{style:{marginLeft:"auto",textAlign:"right"},children:[Object(u.jsxs)("div",{style:{color:"grey"},children:[t.location," "]}),Object(u.jsxs)("div",{style:{color:"grey"},children:[t.date," "]})]})]})}),O=n(44),x=n.n(O),m=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).handlerInputChange=function(t){console.log(t.target.name),"keySearch"==t.target.name&&i.setState({keyCari:t.target.value}),"keyLocation"==t.target.name&&i.setState({keyLokasi:t.target.value}),"FulltimeOnly"==t.target.name&&i.setState({OnlyFulltime:!i.state.OnlyFulltime}),console.log(i.state.OnlyFulltime)},i.state={isLoading:!0,isSearch:!0,keyCari:"",keyLokasi:"",OnlyFulltime:!1,jobs:[]},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;x()("https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json",{proxy:{host:"https://jobs.github.com/"}}).then((function(e){t.setState({jobs:e.data,isLoading:!1}),console.log(t.state.jobs)})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{className:"container",style:{padding:"20px 0"},children:[Object(u.jsxs)("form",{style:{marginBottom:"20px",display:"flex"},children:[Object(u.jsx)("div",{children:Object(u.jsxs)("label",{children:["Search:",Object(u.jsx)("input",{type:"text",name:"keySearch",onChange:this.handlerInputChange})]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("label",{children:["Location:",Object(u.jsx)("input",{type:"text",name:"keyLocation",onChange:this.handlerInputChange})]})}),Object(u.jsx)("div",{style:{alignSelf:"center"},children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{style:{marginRight:"10px"},name:"FulltimeOnly",type:"checkbox",onChange:this.handlerInputChange}),"Full Time Only"]})})]}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h3",{children:"Job List"}),Object(u.jsx)("hr",{}),this.state.isLoading?Object(u.jsx)("div",{style:{textAlign:"center",padding:"50px"},children:Object(u.jsx)("img",{alt:"preload",src:"https://icons8.com/preloaders/preloaders/1486/Hourglass.gif",loading:"lazy"})}):this.state.jobs.map((function(e,n){return t.state.isSearch?e.location.includes(t.state.keyLokasi)&&(e.title.includes(t.state.keyCari)||e.company.includes(t.state.keyCari)||e.description.includes(t.state.keyCari))?(t.state.OnlyFulltime&&e.type,Object(u.jsx)(g,{id:e.id,title:e.title,type:e.type,company:e.company,location:e.location,date:e.created_at})):void 0:Object(u.jsx)(g,{id:e.id,title:e.title,type:e.type,company:e.company,location:e.location,date:e.created_at})}))]})]})}}]),n}(s.a.Component),y=(n(472),function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={isLoading:!0,data:[]},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;x.a.get("https://api.allorigins.win/raw?url=https://jobs.github.com/positions/"+v+".json").then((function(e){t.setState({data:e.data,isLoading:!1}),console.log(t.state.data)})).catch((function(t){}))}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"container",style:{padding:"20px 0"},children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)(f,{}),this.state.isLoading?Object(u.jsx)("div",{style:{textAlign:"center",padding:"50px"},children:Object(u.jsx)("img",{alt:"preload",src:"https://icons8.com/preloaders/preloaders/1486/Hourglass.gif",loading:"lazy"})}):Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-md-8",children:[Object(u.jsx)("h4",{children:this.state.data.company}),Object(u.jsx)("h1",{children:this.state.data.title}),Object(u.jsxs)("h5",{children:[this.state.data.location," - ",this.state.data.type]}),Object(u.jsx)("div",{style:{paddingTop:"20px"},dangerouslySetInnerHTML:{__html:this.state.data.description}})]}),Object(u.jsxs)("div",{className:"col-md-4",children:[Object(u.jsx)("img",{className:"img-responsive",src:this.state.data.company_logo}),Object(u.jsxs)("div",{className:"bg-success",style:{padding:"10px 20px",marginTop:"20px"},children:[Object(u.jsx)("h4",{children:"How to Apply"}),Object(u.jsx)("div",{style:{paddingTop:"10px","overflow-wrap":"anywhere"},dangerouslySetInnerHTML:{__html:this.state.data.how_to_apply}})]})]})]})]})})}}]),n}(s.a.Component)),v="",f=function(){var t=Object(b.f)().id;return v=t,Object(u.jsx)("div",{})},L=n(66),k=(n(473),function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).loginAuth=function(t){var e=Object(L.a)(i);x.a.post("https://reqres.in/api/login",t).then((function(t){e.setState({login:!0})})).catch((function(t){e.setState({login:!1})}))},i.handlerInputChange=function(t){"email"==t.target.name&&i.setState({email:t.target.value}),"password"==t.target.name&&i.setState({password:t.target.value})},i.handleSubmit=function(t,e){var n={email:t,password:e};i.loginAuth(n)},i.state={email:"eve.holt@reqres.in",password:"cityslicka",login:!1},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"handlerLogin",value:function(){console.log(this.props.Login)}},{key:"render",value:function(){var t=this;return this.state.login&&this.props.Login(),Object(u.jsx)("div",{className:"container",style:{padding:"20px 0"},children:Object(u.jsx)("div",{className:"login-wrapper",children:Object(u.jsxs)("form",{children:[Object(u.jsx)("div",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)("p",{children:"Username"}),Object(u.jsx)("input",{type:"text",name:"email",onChange:this.handlerInputChange,value:this.state.email})]})}),Object(u.jsxs)("label",{children:[Object(u.jsx)("p",{children:"Password"}),Object(u.jsx)("input",{onChange:this.handlerInputChange,type:"text",name:"password",value:this.state.password})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){return t.handleSubmit(t.state.email,t.state.password)},name:"submit",type:"button",children:"Login"})})]})})})}}]),n}(s.a.Component)),C=Object(h.b)("",(function(t){return{Login:function(){t({type:"LOGGED_IN"})}}}))(k),w=(n(474),function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={isLoading:!0},i}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(j.a,{basename:"/",children:[Object(u.jsx)(p,{}),this.props.isLogin?Object(u.jsx)(b.c,{children:Object(u.jsxs)("div",{className:"app-content",children:[Object(u.jsx)(b.a,{path:"/",exact:!0,component:m}),Object(u.jsx)(b.a,{path:"/detail/:id",children:Object(u.jsx)(y,{})})]})}):Object(u.jsx)(C,{})]})}}]),n}(s.a.Component)),S=Object(h.b)((function(t){return{isLogin:t.isLogin}}))(w);var N=function(){return Object(u.jsx)(S,{})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,476)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),i(t),s(t),a(t),c(t)}))},I=n(148),T={isLogin:!1},_=Object(I.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;return"LOGGED_IN"===e.type?{isLogin:!0}:"LOGOUT"===e.type?{isLogin:!1}:t}));c.a.render(Object(u.jsx)(h.a,{store:_,children:Object(u.jsx)(N,{})}),document.getElementById("root")),F()}},[[475,1,2]]]);
//# sourceMappingURL=main.2a73788b.chunk.js.map