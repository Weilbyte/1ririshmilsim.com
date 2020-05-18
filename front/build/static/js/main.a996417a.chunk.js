(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),i=a.n(o),s=a(10),u=(a(29),a(9)),c=a(2),l=a(3),p=a(4),m=a(5),d=a(20),h=a(6),v=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("Sidebar mounted")}},{key:"Button",value:function(e,t,a){return r.a.createElement(s.b,{activeClassName:"active",className:"link sidebar-button",to:e},r.a.createElement("button",{className:"inner"},a,r.a.createElement(d.a,{id:"icon",icon:t,pull:"right"})))}},{key:"Descriptor",value:function(e){return r.a.createElement("div",{className:"descriptor"},r.a.createElement("p",null,e))}},{key:"render",value:function(){return r.a.createElement("div",{id:"sidebar-container"},r.a.createElement("div",{id:"sidebar-top-container"},r.a.createElement("h2",null,"Ifrit")),r.a.createElement("div",{id:"sidebar-button-container"},this.Button("/app/home",h.e,"Home"),this.Descriptor("General"),this.Button("/app/account",h.l,"Account"),this.Button("/app/logs",h.c,"Logs"),this.Button("/app/missions",h.f,"Missions"),this.Button("/app/addons",h.j,"Addons"),this.Button("/app/profiles",h.a,"Profiles"),this.Descriptor("Instance Management "),this.Button("/app/instance/dashboard",h.i,"Dashboard"),this.Button("/app/instance/security",h.h,"Security"),this.Button("/app/instance/addons",h.k,"Addons"),this.Button("/app/instance/configuration",h.b,"Configuration"),this.Descriptor("Panel Management "),this.Button("/app/panel/users",h.m,"Users"),this.Button("/app/panel/sftp",h.d,"SFTP Settings"),this.Button("/app/panel/server",h.g,"Server Settings")))}}]),a}(n.Component),b={"#/app/home":"Home","#/app/account":"Account","#/app/logs":"Logs","#/app/missions":"Missions","#/app/addons":"Addons","#/app/profiles":"Profiles","#/app/instance/dashboard":"Dashboard","#/app/instance/security":"Security","#/app/instance/addons":"Addons","#/app/instance/configuration":"Configuration","#/app/panel/users":"Users","#/app/panel/sftp":"SFTP Settings","#/app/panel/server":"Server Settings"},f=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("Topbar mounted")}},{key:"getLocation",value:function(){var e=b[window.location.hash];return document.title="Ifrit - "+e,e}},{key:"render",value:function(){return r.a.createElement("div",{id:"topbar-container"},r.a.createElement("div",{id:"topbar-inner-container"},r.a.createElement("div",{id:"page-title"},r.a.createElement("span",null,this.getLocation()))))}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("Home page mounted")}},{key:"render",value:function(){return r.a.createElement("div",{id:"body-outer-container"},r.a.createElement("div",{id:"body-inner"},"Home!"))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("Login mounted")}},{key:"submitForm",value:function(e){console.log("Submitted form!"),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",{id:"login-container"},r.a.createElement("div",{id:"login-inner"},r.a.createElement("h2",{className:"center-text"},"Sign in"),r.a.createElement("form",{id:"form",onSubmit:this.submitForm},r.a.createElement("input",{className:"input-field",type:"text",placeholder:"Username"}),r.a.createElement("br",null),r.a.createElement("input",{className:"input-field",type:"password",placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("input",{id:"submit-button",type:"submit",value:"Next"}))))}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("Login page mounted")}},{key:"render",value:function(){return r.a.createElement("div",{id:"singlepage-container"},r.a.createElement("div",{id:"singlepage-inner"},r.a.createElement(E,null)))}}]),a}(n.Component),V=a(23),j=a(11),O=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.label.toUpperCase(),t=this.props.required?"*":"",a=void 0!==this.props.maxlength?this.props.maxlength:-1,n=void 0!==this.props.error?"error":"";return r.a.createElement("div",{id:"input-container"},r.a.createElement("label",null,e),r.a.createElement("span",null,t),r.a.createElement("input",{id:"input-inner",type:this.props.type,value:this.props.value,className:n,onChange:this.props.change,spellCheck:!1,maxLength:a}),r.a.createElement("span",null,this.props.error))}}]),a}(n.Component),S=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={usernameValue:"",usernameError:void 0,passwordValue:"",passwordError:void 0,srvPathValue:"/srv/arma3",srvPathError:void 0,insPathValue:"/srv/arma3/instances",insPathError:void 0,dbServerValue:"127.0.0.1:5432",dbServerError:void 0,dbNameValue:"ifrit",dbUserValue:"ifrituser",dbPassValue:""},n.checkInput=n.checkInput.bind(Object(j.a)(n)),n.submitForm=n.submitForm.bind(Object(j.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("Setup mounted")}},{key:"checkInput",value:function(){this.state.usernameValue.length>20?this.setState({usernameError:"Username can not be more than 20 characters long."}):this.state.usernameValue.length<3?this.setState({usernameError:"Username must be at least 3 characters long."}):this.state.usernameValue.match(/^[a-zA-Z0-9]+$/)?this.setState({usernameError:void 0}):this.setState({usernameError:"Username contains invalid characters or spaces."}),this.state.passwordValue.length<5?this.setState({passwordError:"Password must be more than 5 characters."}):this.setState({passwordError:void 0})}},{key:"submitForm",value:function(e){e.preventDefault(),this.checkInput()}},{key:"updateValue",value:function(e,t){this.setState(Object(V.a)({},e,t))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"login-container"},r.a.createElement("div",{id:"login-inner"},r.a.createElement("h2",{className:"center-text"},"Setup Ifrit"),r.a.createElement("form",{id:"form",onSubmit:this.submitForm},r.a.createElement("h4",{className:"center-text"},"Admin Account"),r.a.createElement(O,{label:"Username",value:this.state.usernameValue,change:function(t){return e.updateValue("usernameValue",t.target.value)},required:!0,maxlength:20,type:"text",error:this.state.usernameError}),r.a.createElement(O,{label:"Password",value:this.state.passwordValue,change:function(t){return e.updateValue("passwordValue",t.target.value)},required:!0,type:"password",error:this.state.passwordError}),r.a.createElement("h4",{className:"center-text"},"Arma Server"),r.a.createElement(O,{label:"Server directory path",value:this.state.srvPathValue,change:function(t){return e.updateValue("srvPathValue",t.target.value)},required:!0,type:"text",error:this.state.srvPathError}),r.a.createElement(O,{label:"Instance directory path",value:this.state.insPathValue,change:function(t){return e.updateValue("insPathValue",t.target.value)},required:!0,type:"text",error:this.state.insPathError}),r.a.createElement("h4",{className:"center-text"},"Database"),r.a.createElement("p",{className:"center-text"},"Ifrit currently only supports PostgreSQL."),r.a.createElement(O,{label:"Server IP/HOSTNAME",value:this.state.dbServerValue,change:function(t){return e.updateValue("dbServerValue",t.target.value)},required:!0,type:"text",error:this.state.dbServerError}),r.a.createElement(O,{label:"Database name",value:this.state.dbNameValue,change:function(t){return e.updateValue("dbNameValue",t.target.value)},required:!0,type:"text"}),r.a.createElement(O,{label:"Username",value:this.state.dbUserValue,change:function(t){return e.updateValue("dbUserValue",t.target.value)},required:!0,type:"text"}),r.a.createElement(O,{label:"Password",value:this.state.dbPassValue,change:function(t){return e.updateValue("dbPassValue",t.target.value)},required:!0,type:"password"}),r.a.createElement("input",{id:"submit-button",type:"submit",value:"Next"}))))}}]),a}(n.Component),k=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("Login page mounted")}},{key:"render",value:function(){return r.a.createElement("div",{id:"singlepage-container"},r.a.createElement("div",{id:"singlepage-inner",className:"fullheight"},r.a.createElement(S,null)))}}]),a}(n.Component);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{path:"/login",component:y}),r.a.createElement(u.a,{path:"/setup",component:k}),r.a.createElement(u.a,{path:"/app/",component:v}),r.a.createElement("div",{id:"middle-container"},r.a.createElement(u.a,{path:"/app/",component:f}),r.a.createElement(u.a,{path:"/app/home",component:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(s.a,{basename:"/"},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.a996417a.chunk.js.map