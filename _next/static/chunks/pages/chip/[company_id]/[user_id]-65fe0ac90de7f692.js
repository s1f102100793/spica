(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[874],{397:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chip/[company_id]/[user_id]",function(){return n(5134)}])},1587:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});var s=n(5893),o=n(1163),a=n(7294),c=n(1014),d=n.n(c);let i=()=>{let[e,t]=(0,a.useState)(!1),n=(0,o.useRouter)(),c=async()=>{n.push("/login")};return(0,a.useEffect)(()=>{let e=()=>{window.innerWidth>=800&&t(!1)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),(0,a.useEffect)(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:d().container,children:[(0,s.jsx)("div",{className:d().left,children:"Spica"}),(0,s.jsxs)("div",{className:d().right,children:[(0,s.jsx)("span",{children:"ビジョン"}),(0,s.jsx)("span",{children:"ニュース"}),(0,s.jsx)("span",{children:"お問い合わせ"}),"/login"!==n.pathname&&(0,s.jsx)("span",{onClick:c,children:"ログイン"}),"/signup"!==n.pathname&&(0,s.jsx)("span",{className:d().account,onClick:()=>{n.push("/signup")},children:"アカウント開設"})]}),(0,s.jsxs)("div",{className:"".concat(d().menuButton," ").concat(e?d().open:""),onClick:()=>t(!e),children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})]}),(0,s.jsx)("div",{className:d().menu,children:e&&(0,s.jsxs)("div",{className:d().dropdown,children:[(0,s.jsx)("span",{className:d().menuItem,onClick:()=>t(!1),children:"ビジョン"}),(0,s.jsx)("span",{className:d().menuItem,onClick:()=>t(!1),children:"ニュース"}),(0,s.jsx)("span",{className:d().menuItem,onClick:()=>t(!1),children:"お問い合わせ"}),(0,s.jsx)("span",{className:d().menuItem,onClick:()=>t(!1),children:"サインイン"}),(0,s.jsx)("span",{className:d().menuItem,onClick:()=>t(!1),children:"サインアップ"})]})})]})}},5134:function(e,t,n){"use strict";n.r(t);var s=n(5893),o=n(1163),a=n(7294),c=n(1587),d=n(9777),i=n(658),r=n.n(i);t.default=()=>{let e=(0,o.useRouter)(),{user_id:t}=e.query,[n,i]=(0,a.useState)(""),[l,u]=(0,a.useState)("");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.h,{}),(0,s.jsxs)("div",{className:r().container,children:[(0,s.jsxs)("h1",{className:r().title,children:[t,"にチップをありがとうございます"]}),(0,s.jsxs)("div",{className:r().inputGroup,children:[(0,s.jsx)("label",{htmlFor:"amount",children:"チップの金額:"}),(0,s.jsx)("input",{type:"number",id:"amount",value:n,onChange:e=>i(e.target.value),placeholder:"金額を入力"})]}),(0,s.jsxs)("div",{className:r().inputGroup,children:[(0,s.jsx)("label",{htmlFor:"feedback",children:"フィードバック:"}),(0,s.jsx)("input",{type:"text",id:"feedback",value:l,onChange:e=>u(e.target.value),placeholder:"サービスが良かった点を教えてください"})]}),(0,s.jsx)("button",{onClick:()=>{d.x.paypay.payment.$post({body:{amount:Number(n),feedback:l}})},children:"チップを送る"})]})]})}},9777:function(e,t,n){"use strict";n.d(t,{x:function(){return c}});var s=n(9239),o=n(7080),a=n(6154);let c=(e=>{let{baseURL:t,fetch:n}=e,s=(void 0===t?"":t).replace(/\/$/,""),a="/health",c="/mailVerification",d="/paypay",i="/paypay/payment",r="/paypay/qrcode",l="/session",u="/tasks",h="/tasks/di",p="POST",m="DELETE",_="PATCH";return{health:{get:e=>n(s,a,"GET",e).json(),$get:e=>n(s,a,"GET",e).json().then(e=>e.body),$path:()=>"".concat(s).concat(a)},mailVerification:{get:e=>n(s,c,"GET",e).text(),$get:e=>n(s,c,"GET",e).text().then(e=>e.body),post:e=>n(s,c,p,e).send(),$post:e=>n(s,c,p,e).send().then(e=>e.body),$path:()=>"".concat(s).concat(c)},me:{get:e=>n(s,"/me","GET",e).json(),$get:e=>n(s,"/me","GET",e).json().then(e=>e.body),$path:()=>"".concat(s).concat("/me")},paypay:{payment:{get:e=>n(s,i,"GET",e).text(),$get:e=>n(s,i,"GET",e).text().then(e=>e.body),post:e=>n(s,i,p,e).send(),$post:e=>n(s,i,p,e).send().then(e=>e.body),$path:()=>"".concat(s).concat(i)},qrcode:{get:e=>n(s,r,"GET",e).text(),$get:e=>n(s,r,"GET",e).text().then(e=>e.body),post:e=>n(s,r,p,e).text(),$post:e=>n(s,r,p,e).text().then(e=>e.body),$path:()=>"".concat(s).concat(r)},get:e=>n(s,d,"GET",e).text(),$get:e=>n(s,d,"GET",e).text().then(e=>e.body),$path:()=>"".concat(s).concat(d)},session:{post:e=>n(s,l,p,e).json(),$post:e=>n(s,l,p,e).json().then(e=>e.body),delete:e=>n(s,l,m,e).json(),$delete:e=>n(s,l,m,e).json().then(e=>e.body),$path:()=>"".concat(s).concat(l)},tasks:{_taskId:e=>{let t="".concat(u,"/").concat(e);return{patch:e=>n(s,t,_,e).json(),$patch:e=>n(s,t,_,e).json().then(e=>e.body),delete:e=>n(s,t,m,e).json(),$delete:e=>n(s,t,m,e).json().then(e=>e.body),$path:()=>"".concat(s).concat(t)}},di:{get:e=>n(s,h,"GET",e).json(),$get:e=>n(s,h,"GET",e).json().then(e=>e.body),$path:()=>"".concat(s).concat(h)},get:e=>n(s,u,"GET",e).json(),$get:e=>n(s,u,"GET",e).json().then(e=>e.body),post:e=>n(s,u,p,e).json(),$post:e=>n(s,u,p,e).json().then(e=>e.body),patch:e=>n(s,u,_,e).json(),$patch:e=>n(s,u,_,e).json().then(e=>e.body),delete:e=>n(s,u,m,e).json(),$delete:e=>n(s,u,m,e).json().then(e=>e.body),$path:e=>"".concat(s).concat(u).concat(e&&e.query?"?".concat((0,o._K)(e.query)):"")},get:e=>n(s,"","GET",e).text(),$get:e=>n(s,"","GET",e).text().then(e=>e.body),$path:()=>"".concat(s)}})((0,s.Z)(a.Z.create({withCredentials:!0})))},1014:function(e){e.exports={container:"Header_container__3JNoS",left:"Header_left__2EE3i",right:"Header_right__IaiY4",account:"Header_account__usRDz",menuButton:"Header_menuButton__mlszh",open:"Header_open__jNVWy",menu:"Header_menu__UYmdC",dropdown:"Header_dropdown__f5upL",menuItem:"Header_menuItem__DuO3o"}},658:function(e){e.exports={container:"_user_id__container__LrUk9",title:"_user_id__title__e8j33",inputGroup:"_user_id__inputGroup__DX8q9"}}},function(e){e.O(0,[911,774,888,179],function(){return e(e.s=397)}),_N_E=e.O()}]);