(this["webpackJsonpcomposed-react-app"]=this["webpackJsonpcomposed-react-app"]||[]).push([[0],{111:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),i=t.n(c),l=(t(73),t(34)),o=(t(74),t(37)),m=t(10),s=t(155),d=t(153),u=t(156),p=t(154),h=t(157),b=t(112),E=t(148),f=t(151),v=t(158),g=Object(E.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},main:{backgroundColor:"white",textAlign:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),backgroundColor:"#6e5baa","&:hover":{backgroundColor:"#825deb"}},checkbox:{"&.Mui-checked":{color:"#825deb"}},input:{"& .Mui-focused":{color:"#825deb"},"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:"#825deb"}}},avatar:{marginTop:20,width:63.5,height:75,borderRadius:0}}}));function k(e){var a=e.onSubmit,t=g(),n=Object(m.f)();return r.a.createElement(f.a,{component:"main",maxWidth:"xs",className:t.main},r.a.createElement(d.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(v.a,{alt:"Sendbird Logo",src:"https://dxstmhyqfqr1o.cloudfront.net/symbol/Sendbird_Symbol_PNG/Sendbird_Symbol_RGB.png",className:t.avatar}),r.a.createElement(b.a,{component:"h1",variant:"h5"},"Sendbird | UIKit Sample"),r.a.createElement("form",{className:t.form,onSubmit:function(e){e.preventDefault(),a({userId:e.target.userId.value,nickname:e.target.nickname.value,theme:e.target.theme.checked?"dark":"light"}),n.push("/chat")}},r.a.createElement(u.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"userId",label:"User Id",name:"userId",className:t.input,autoFocus:!0}),r.a.createElement(u.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"nickname",label:"Nick Name",id:"nickname",className:t.input}),r.a.createElement(p.a,{control:r.a.createElement(h.a,{value:"dark",color:"primary",name:"theme",className:t.checkbox}),label:"Apply dark theme"}),r.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Login"))),r.a.createElement(b.a,{variant:"body1"},"Start chatting on Sendbird by choosing your username and nickname."))}t(83);var S=t(35);t(110);function N(e){var a=e.userId,t=e.nickname,c=e.theme,i=Object(m.f)();Object(n.useEffect)((function(){a&&t||i.push("/")}),[a,t,i]);var o=Object(n.useState)(!1),s=Object(l.a)(o,2),d=s[0],u=s[1],p=Object(n.useState)(null),h=Object(l.a)(p,2),b=h[0],E=h[1];return r.a.createElement("div",{style:{height:"100vh"}},r.a.createElement(S.d,{appId:"09992886-5396-4E68-8AA2-BE0DED0D10D3",theme:c,userId:a,nickname:t},r.a.createElement("div",{className:"sendbird-app__wrap"},r.a.createElement("div",{className:"sendbird-app__channellist-wrap"},r.a.createElement(S.b,{onChannelSelect:function(e){e&&e.url&&E(e.url)}})),r.a.createElement("div",{className:"sendbird-app__conversation-wrap"},r.a.createElement(S.a,{channelUrl:b,onChatHeaderActionClick:function(){u(!0)}}))),d&&r.a.createElement("div",{className:"sendbird-app__settingspanel-wrap"},r.a.createElement(S.c,{channelUrl:b,onCloseClick:function(){u(!1)}}))))}var w=function(){var e=Object(n.useState)({}),a=Object(l.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/chat"},r.a.createElement(N,{userId:t.userId,nickname:t.nickname,theme:t.theme})),r.a.createElement(m.a,{path:"/"},r.a.createElement(k,{onSubmit:c})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,a,t){e.exports=t(111)},73:function(e,a,t){},74:function(e,a,t){},83:function(e,a,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.4daa343d.chunk.js.map