(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[368],{3454:function(e,t,n){"use strict";var s,i;e.exports=(null==(s=n.g.process)?void 0:s.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},8989:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tip/[company_id]/[user_id]",function(){return n(2539)}])},1587:function(e,t,n){"use strict";n.d(t,{h:function(){return c}});var s=n(5893),i=n(1163),o=n(7294),a=n(1014),r=n.n(a);let c=()=>{let[e,t]=(0,o.useState)(!1),n=(0,i.useRouter)(),a=async()=>{n.push("/login")};return(0,o.useEffect)(()=>{let e=()=>{window.innerWidth>=800&&t(!1)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),(0,o.useEffect)(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:r().container,children:[(0,s.jsx)("div",{className:r().left,children:"Spica"}),(0,s.jsxs)("div",{className:r().right,children:[(0,s.jsx)("span",{children:"ビジョン"}),(0,s.jsx)("span",{children:"ニュース"}),(0,s.jsx)("span",{children:"お問い合わせ"}),"/login"!==n.pathname&&(0,s.jsx)("span",{onClick:a,children:"ログイン"}),"/signup"!==n.pathname&&(0,s.jsx)("span",{className:r().account,onClick:()=>{n.push("/signup")},children:"アカウント開設"})]}),(0,s.jsxs)("div",{className:"".concat(r().menuButton," ").concat(e?r().open:""),onClick:()=>t(!e),children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})]}),(0,s.jsx)("div",{className:r().menu,children:e&&(0,s.jsxs)("div",{className:r().dropdown,children:[(0,s.jsx)("span",{className:r().menuItem,onClick:()=>t(!1),children:"ビジョン"}),(0,s.jsx)("span",{className:r().menuItem,onClick:()=>t(!1),children:"ニュース"}),(0,s.jsx)("span",{className:r().menuItem,onClick:()=>t(!1),children:"お問い合わせ"}),(0,s.jsx)("span",{className:r().menuItem,onClick:()=>t(!1),children:"サインイン"}),(0,s.jsx)("span",{className:r().menuItem,onClick:()=>t(!1),children:"サインアップ"})]})})]})}},2539:function(e,t,n){"use strict";n.r(t);var s=n(5893),i=n(8486),o=n(6198),a=n(1163),r=n(7294),c=n(1587),u=n(9777),l=n(5501),d=n.n(l);t.default=()=>{let e=(0,a.useRouter)(),t=e.asPath.split("/").filter(Boolean),n=t[t.length-2]||"",l=t[t.length-1]||"",[p,_]=(0,r.useState)("500"),[h,m]=(0,r.useState)(""),f=async()=>{let t=await u.x.paypay.qrcode.$post({body:{company_id:n,user_id:l,amount:Number(p),feedback:h}});t&&e.push(t)},[x,g]=(0,r.useState)(!1),j=()=>{g(!1)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.h,{}),(0,s.jsxs)("div",{className:d().container,children:[(0,s.jsxs)("div",{className:d().tipDetails,children:[(0,s.jsxs)("div",{className:d().tipDetailsUpper,children:[(0,s.jsx)("div",{className:d().icon,children:(0,s.jsx)("div",{className:d().iconImage})}),(0,s.jsxs)("div",{className:d().tipName,children:[n,(0,s.jsx)("br",{}),l,(0,s.jsx)("br",{}),"さんへ"]})]}),(0,s.jsxs)("div",{className:d().tipDetailsLower,children:[(0,s.jsxs)("div",{className:d().tipAmountDetail,children:[(0,s.jsx)("div",{className:d().tipAmount,children:"チップ"}),(0,s.jsxs)("div",{className:d().tipAmountValue,children:["\xa5",p]})]}),(0,s.jsx)("button",{className:d().tipButton,onClick:()=>{g(!0)},children:"チップを設定する"}),x&&(0,s.jsx)(i.Z,{open:x,onClose:j,options:[300,500,1e3,1500],onInputChange:(e,t)=>{_(t),j()},renderInput:e=>(0,s.jsx)(o.Z,{className:d().tipTextField,...e}),className:d().tipAmountInput})]})]}),(0,s.jsxs)("div",{className:d().tipMessageArea,children:[(0,s.jsxs)("div",{className:d().tipMessage,children:[l,"さんへのメッセージ"]}),(0,s.jsx)("textarea",{className:d().tipMessageInput,value:h,onChange:e=>{m(e.target.value)}})]}),(0,s.jsx)("div",{className:d().tippingArea,children:(0,s.jsx)("button",{className:d().tippingButton,onClick:f,children:"チップを送る"})})]})]})}},9777:function(e,t,n){"use strict";n.d(t,{x:function(){return r}});var s=n(9239),i=n(7080),o=n(6154),a=n(3454);let r=(e=>{let{baseURL:t,fetch:n}=e,s=(void 0===t?"":t).replace(/\/$/,""),o="/health",a="/mailVerification",r="/paypay",c="/paypay/payment",u="/paypay/qrcode",l="/session",d="/tasks",p="/tasks/di",_="POST",h="DELETE",m="PATCH";return{health:{get:e=>n(s,o,"GET",e).json(),$get:e=>n(s,o,"GET",e).json().then(e=>e.body),$path:()=>"".concat(s).concat(o)},mailVerification:{get:e=>n(s,a,"GET",e).text(),$get:e=>n(s,a,"GET",e).text().then(e=>e.body),post:e=>n(s,a,_,e).send(),$post:e=>n(s,a,_,e).send().then(e=>e.body),$path:()=>"".concat(s).concat(a)},me:{get:e=>n(s,"/me","GET",e).json(),$get:e=>n(s,"/me","GET",e).json().then(e=>e.body),$path:()=>"".concat(s).concat("/me")},paypay:{payment:{get:e=>n(s,c,"GET",e).text(),$get:e=>n(s,c,"GET",e).text().then(e=>e.body),post:e=>n(s,c,_,e).send(),$post:e=>n(s,c,_,e).send().then(e=>e.body),$path:()=>"".concat(s).concat(c)},qrcode:{get:e=>n(s,u,"GET",e).text(),$get:e=>n(s,u,"GET",e).text().then(e=>e.body),post:e=>n(s,u,_,e).text(),$post:e=>n(s,u,_,e).text().then(e=>e.body),$path:()=>"".concat(s).concat(u)},get:e=>n(s,r,"GET",e).text(),$get:e=>n(s,r,"GET",e).text().then(e=>e.body),$path:()=>"".concat(s).concat(r)},session:{post:e=>n(s,l,_,e).json(),$post:e=>n(s,l,_,e).json().then(e=>e.body),delete:e=>n(s,l,h,e).json(),$delete:e=>n(s,l,h,e).json().then(e=>e.body),$path:()=>"".concat(s).concat(l)},tasks:{_taskId:e=>{let t="".concat(d,"/").concat(e);return{patch:e=>n(s,t,m,e).json(),$patch:e=>n(s,t,m,e).json().then(e=>e.body),delete:e=>n(s,t,h,e).json(),$delete:e=>n(s,t,h,e).json().then(e=>e.body),$path:()=>"".concat(s).concat(t)}},di:{get:e=>n(s,p,"GET",e).json(),$get:e=>n(s,p,"GET",e).json().then(e=>e.body),$path:()=>"".concat(s).concat(p)},get:e=>n(s,d,"GET",e).json(),$get:e=>n(s,d,"GET",e).json().then(e=>e.body),post:e=>n(s,d,_,e).json(),$post:e=>n(s,d,_,e).json().then(e=>e.body),patch:e=>n(s,d,m,e).json(),$patch:e=>n(s,d,m,e).json().then(e=>e.body),delete:e=>n(s,d,h,e).json(),$delete:e=>n(s,d,h,e).json().then(e=>e.body),$path:e=>"".concat(s).concat(d).concat(e&&e.query?"?".concat((0,i._K)(e.query)):"")},get:e=>n(s,"","GET",e).text(),$get:e=>n(s,"","GET",e).text().then(e=>e.body),$path:()=>"".concat(s)}})((0,s.Z)(o.Z.create({baseURL:a.env.NEXT_PUBLIC_API_BASE_URL,withCredentials:!0})))},1014:function(e){e.exports={container:"Header_container__3JNoS",left:"Header_left__2EE3i",right:"Header_right__IaiY4",account:"Header_account__usRDz",menuButton:"Header_menuButton__mlszh",open:"Header_open__jNVWy",menu:"Header_menu__UYmdC",dropdown:"Header_dropdown__f5upL",menuItem:"Header_menuItem__DuO3o"}},5501:function(e){e.exports={container:"_user_id__container__bWT8X",tipDetails:"_user_id__tipDetails__u0U_p",tipDetailsUpper:"_user_id__tipDetailsUpper__1DRNX",tipDetailsLower:"_user_id__tipDetailsLower__KKPeT",icon:"_user_id__icon__T99zC",iconImage:"_user_id__iconImage__fuxgK",tipName:"_user_id__tipName__cTcvM",tipAmountDetail:"_user_id__tipAmountDetail__tNNd0",tipAmount:"_user_id__tipAmount__gLsn0",tipAmountValue:"_user_id__tipAmountValue__y3_hh",tipButton:"_user_id__tipButton__8hghF",tipAmountInput:"_user_id__tipAmountInput__a9VMU",tipTextField:"_user_id__tipTextField__yVGwo",tipMessageArea:"_user_id__tipMessageArea___gM_v",tipMessage:"_user_id__tipMessage__6D4cy",tipMessageInput:"_user_id__tipMessageInput__Cnuuj",tippingArea:"_user_id__tippingArea__MqGp9",tippingButton:"_user_id__tippingButton__71kRN"}},7663:function(e){!function(){var t={229:function(e){var t,n,s,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function r(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var c=[],u=!1,l=-1;function d(){u&&s&&(u=!1,s.length?c=s.concat(c):l=-1,c.length&&p())}function p(){if(!u){var e=r(d);u=!0;for(var t=c.length;t;){for(s=c,c=[];++l<t;)s&&s[l].run();l=-1,t=c.length}s=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function _(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new _(e,t)),1!==c.length||u||r(p)},_.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function s(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}},a=!0;try{t[e](o,o.exports,s),a=!1}finally{a&&delete n[e]}return o.exports}s.ab="//";var i=s(229);e.exports=i}()}},function(e){e.O(0,[845,58,911,774,888,179],function(){return e(e.s=8989)}),_N_E=e.O()}]);