(this["webpackJsonpform-validation"]=this["webpackJsonpform-validation"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),l=a.n(s),o=(a(12),a(1)),i=a(2),m=a(4),u=a(3),c=(a(13),a(14),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=n.state.fields;t[e.target.name]=e.target.value,n.setState({fields:t})},n.validateForm=function(){var e=n.state.fields,t={},a=!0;(e.username||(a=!1,t.username="*Please enter your username."),"undefined"!==typeof e.username&&(e.username.match(/^[a-zA-Z ]*$/)||(a=!1,t.username="*Please enter alphabet characters only.")),e.emailid||(a=!1,t.emailid="*Please enter your email-ID."),"undefined"!==typeof e.emailid)&&(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.emailid)||(a=!1,t.emailid="*Please enter valid email-ID."));return e.mobileno||(a=!1,t.mobileno="*Please enter your mobile no."),"undefined"!==typeof e.mobileno&&(e.mobileno.match(/^[0-9]{10}$/)||(a=!1,t.mobileno=e.mobileno.length>10?"*Maximum lenght should be 10*":"*Please enter valid mobile no.",console.log(e.mobileno.length))),e.password||(a=!1,t.password="*Please enter your password."),"undefined"!==typeof e.password&&(e.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)||(a=!1,t.password="*Please enter secure and strong password.")),n.setState({errors:t}),a},n.submituserRegistrationForm=function(e){if(e.preventDefault(),n.validateForm()){var t={username:"",emailid:"",mobileno:"",password:""};n.setState({fields:t}),alert("Form submitted")}},n.state={fields:{},errors:{}},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{method:"post",name:"userRegistrationForm",onSubmit:this.submituserRegistrationForm},r.a.createElement("label",null,"FirstName"),r.a.createElement("input",{type:"text",name:"username",value:this.state.fields.username,onChange:this.handleChange}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.username),r.a.createElement("label",null,"Email ID:"),r.a.createElement("input",{type:"text",name:"emailid",value:this.state.fields.emailid,onChange:this.handleChange}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.emailid),r.a.createElement("label",null,"Mobile No:"),r.a.createElement("input",{type:"text",name:"mobileno",value:this.state.fields.mobileno,onChange:this.handleChange}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.mobileno),r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",value:this.state.fields.password,onChange:this.handleChange}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.password),r.a.createElement("input",{type:"submit",className:"button",value:"Register"})))}}]),a}(n.Component));var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(c,null)))};(function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={name:""},e.handleSubmit=function(t){t.preventDefault(),e.setState({name:t.target.elements.firstName.value.trim()}),console.log(t.target.elements.firstName.value.trim())},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Welcome ",this.state.name," count ",this.props.count,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"firstName",placeholder:"First Name"}),r.a.createElement("button",null," Add Value ")))}}]),a}(n.Component)).defaultProps={count:10};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.6367a719.chunk.js.map