(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(43)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),l=n.n(r),c=(n(29),n(7)),i=n(8),s=n(10),u=n(9),m=n(11),g=(n(30),n(5)),d=n(6);var p=function(e){return o.a.createElement("div",null,o.a.createElement("h2",null,"Profile"),o.a.createElement("p",null,"Username: Admin"))};n(31);function f(){return o.a.createElement("h2",null,"...Loading")}var h=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={news:[],isLoading:!1},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),setTimeout(function(){e.setState({news:["News # 1: All pinguins are doomed","News # 2: Bees are doing great!"],isLoading:!1})},2e3)}},{key:"render",value:function(){var e=this.state,t=e.news,n=e.isLoading,a=t.map(function(e){return o.a.createElement("div",null,e)});return o.a.createElement("div",{className:"news"},o.a.createElement("h2",null,"News"),n?o.a.createElement(f,null):a)}}]),t}(o.a.Component);var v=function(){return o.a.createElement("h1",null,"This is home page")},E=n(21),b=n(13),w=(n(32),o.a.createContext({loggedIn:!1,username:"",logOut:function(){},logIn:function(){},setUsername:function(){}})),I=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={username:"",password:"",error:""},n.onChange=n.onChange.bind(Object(b.a)(n)),n.onSubmit=n.onSubmit.bind(Object(b.a)(n)),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){var t=e.target.name,n=e.target.value;this.setState(Object(E.a)({},t,n))}},{key:"onSubmit",value:function(e){var t=this,n=this.state,a=n.username,o=n.password;setTimeout(function(){"admin"===a.toLowerCase()&&"1234"===o?(t.context.logIn(),t.context.setUsername(a),t.props.history.push("/profile")):t.setState({error:"Username or password is incorrect."})},1e3),e.preventDefault()}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.password,a=e.error;return o.a.createElement("div",{className:"login"},o.a.createElement("h2",null,"Login"),o.a.createElement("form",{className:"login__form",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",name:"username",className:"login__input",value:t,onChange:this.onChange}),o.a.createElement("input",{type:"text",name:"password",className:"login__input",value:n,onChange:this.onChange}),o.a.createElement("button",{type:"submit"},"Submit")),a&&o.a.createElement("p",{className:"login__error"},a))}}]),t}(o.a.Component);I.contextType=w;var O=I;n(33);var S=function(){return o.a.createElement("div",null,o.a.createElement(w.Consumer,null,function(e){e.logIn;var t=e.logOut,n=e.loggedIn,a={color:n?"red":"green",padding:"5px 10px"};return n?o.a.createElement("button",{style:a,onClick:t},"log out"):o.a.createElement("button",{style:a},o.a.createElement(g.b,{style:{textDecoration:"none"},to:"/login"},"log in"))}))};var N=function(){return o.a.createElement("nav",{className:"navigation"},o.a.createElement("ul",{className:"navigation__links"},o.a.createElement("li",null,o.a.createElement(g.b,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(g.b,{to:"/news"},"News")),o.a.createElement("li",null,o.a.createElement(g.b,{to:"/profile"},"Profile"))),o.a.createElement(S,null))};n(42);var j=function(){return o.a.createElement("p",{className:"NoMatch"},"404 No such page.")},y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).logIn=function(){n.setState(function(e){return{loggedIn:!0}}),localStorage.setItem("loggedIn",!0)},n.logOut=function(){n.setState(function(e){return{loggedIn:!1}}),localStorage.setItem("loggedIn",!1),localStorage.setItem("username","")},n.setUsername=function(e){n.setState(function(t){return{username:e}}),localStorage.setItem("username",JSON.stringify(e)),console.log(e)},n.state={loggedIn:!1,logIn:n.logIn,logOut:n.logOut,username:"",setUsername:n.setUsername},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("loggedIn")),t=localStorage.getItem("username")||"";this.setState({loggedIn:e,username:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.loggedIn,a=t.logIn,r=t.logOut,l=t.username,c=t.setUsername;return o.a.createElement("div",{className:"App"},o.a.createElement(g.a,null,o.a.createElement(w.Provider,{value:{loggedIn:n,logIn:a,logOut:r,username:l,setUsername:c}},o.a.createElement(N,null),o.a.createElement("div",{className:"App__content"},o.a.createElement(d.d,null,o.a.createElement(d.b,{path:"/",exact:!0,component:v}),o.a.createElement(d.b,{path:"/news",component:h}),o.a.createElement(d.b,{path:"/login",component:O}),o.a.createElement(d.b,{path:"/profile/",render:function(){return e.state.loggedIn?o.a.createElement(p,null):o.a.createElement(d.a,{to:"/login"})}}),o.a.createElement(d.b,{component:j}))))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.abcb4ba9.chunk.js.map