(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[368],{8989:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tip/[company_id]/[user_id]",function(){return n(2539)}])},1587:function(e,t,n){"use strict";n.d(t,{h:function(){return _}});var s=n(5893),a=n(1163),i=n(7294),o=n(1014),c=n.n(o);let _=()=>{let[e,t]=(0,i.useState)(!1),n=(0,a.useRouter)(),o=async()=>{n.push("/login")};return(0,i.useEffect)(()=>{let e=()=>{window.innerWidth>=800&&t(!1)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),(0,i.useEffect)(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:c().container,children:[(0,s.jsx)("div",{className:c().left,children:"Spica"}),(0,s.jsxs)("div",{className:c().right,children:[(0,s.jsx)("span",{children:"ビジョン"}),(0,s.jsx)("span",{children:"ニュース"}),(0,s.jsx)("span",{children:"お問い合わせ"}),"/login"!==n.pathname&&(0,s.jsx)("span",{onClick:o,children:"ログイン"}),"/signup"!==n.pathname&&(0,s.jsx)("span",{className:c().account,onClick:()=>{n.push("/signup")},children:"アカウント開設"})]}),(0,s.jsxs)("div",{className:"".concat(c().menuButton," ").concat(e?c().open:""),onClick:()=>t(!e),children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})]}),(0,s.jsx)("div",{className:c().menu,children:e&&(0,s.jsxs)("div",{className:c().dropdown,children:[(0,s.jsx)("span",{className:c().menuItem,onClick:()=>t(!1),children:"ビジョン"}),(0,s.jsx)("span",{className:c().menuItem,onClick:()=>t(!1),children:"ニュース"}),(0,s.jsx)("span",{className:c().menuItem,onClick:()=>t(!1),children:"お問い合わせ"}),(0,s.jsx)("span",{className:c().menuItem,onClick:()=>t(!1),children:"サインイン"}),(0,s.jsx)("span",{className:c().menuItem,onClick:()=>t(!1),children:"サインアップ"})]})})]})}},4497:function(e,t,n){"use strict";var s=n(5893),a=n(8486),i=n(6198),o=n(7294);t.Z=e=>{let{target:t,amount:n,tipOptions:c,setAmount:_,message:d,feedback:r,handleFeedbackChange:p,styles:l,handleSendTip:u}=e,[h,m]=(0,o.useState)(!1),j=()=>{m(!1)};return(0,s.jsxs)("div",{className:l.container,children:[(0,s.jsxs)("div",{className:l.tipDetails,children:[(0,s.jsxs)("div",{className:l.tipDetailsUpper,children:[(0,s.jsx)("div",{className:l.icon,children:(0,s.jsx)("div",{className:l.iconImage})}),(0,s.jsx)("div",{className:l.tipName,children:t})]}),(0,s.jsxs)("div",{className:l.tipDetailsLower,children:[(0,s.jsxs)("div",{className:l.tipAmountDetail,children:[(0,s.jsx)("div",{className:l.tipAmount,children:"チップ"}),(0,s.jsxs)("div",{className:l.tipAmountValue,children:["\xa5",n]})]}),(0,s.jsx)("button",{className:l.tipButton,onClick:()=>{m(!0)},children:"チップを設定する"}),h&&(0,s.jsx)(a.Z,{open:h,onClose:j,options:c,onInputChange:(e,t)=>{_(t),j()},renderInput:e=>(0,s.jsx)(i.Z,{className:l.tipTextField,...e}),getOptionLabel:e=>e.toString(),className:l.tipAmountInput})]})]}),(0,s.jsxs)("div",{className:l.tipMessageArea,children:[(0,s.jsx)("div",{className:l.tipMessage}),d,(0,s.jsx)("textarea",{className:l.tipMessageInput,value:r,onChange:p})]}),(0,s.jsx)("div",{className:l.tippingArea,children:(0,s.jsx)("button",{className:l.tippingButton,onClick:u,children:"チップを送る"})})]})}},2539:function(e,t,n){"use strict";n.r(t);var s=n(5893),a=n(1163),i=n(7294),o=n(1587),c=n(4497),_=n(9777),d=n(5501),r=n.n(d);t.default=()=>{let e=(0,a.useRouter)(),t=e.asPath.split("/").filter(Boolean),n=t[t.length-2]||"",d=t[t.length-1]||"",[p,l]=(0,i.useState)("500"),[u,h]=(0,i.useState)(""),m=async()=>{let t=await _.x.paypay.qrcode.$post({body:{company_id:n,user_id:d,amount:Number(p),feedback:u}});t&&e.push(t)},j=(0,s.jsxs)(s.Fragment,{children:[n,(0,s.jsx)("br",{}),d,(0,s.jsx)("br",{}),"さんへ"]});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h,{}),(0,s.jsx)(c.Z,{target:j,amount:p,tipOptions:[300,500,1e3,1500],setAmount:l,message:"".concat(d,"さんへのメッセージ"),feedback:u,handleFeedbackChange:e=>{h(e.target.value)},styles:r(),handleSendTip:m})]})}},9777:function(e,t,n){"use strict";n.d(t,{x:function(){return c}});var s=n(9239),a=n(7080),i=n(6154),o=n(3454);let c=(e=>{let{baseURL:t,fetch:n}=e,s=(void 0===t?"":t).replace(/\/$/,""),i="/health",o="/mailVerification",c="/paypay",_="/paypay/payment",d="/paypay/qrcode",r="/session",p="/tasks",l="/tasks/di",u="POST",h="DELETE",m="PATCH";return{health:{get:e=>n(s,i,"GET",e).json(),$get:e=>n(s,i,"GET",e).json().then(e=>e.body),$path:()=>"".concat(s).concat(i)},mailVerification:{get:e=>n(s,o,"GET",e).text(),$get:e=>n(s,o,"GET",e).text().then(e=>e.body),post:e=>n(s,o,u,e).send(),$post:e=>n(s,o,u,e).send().then(e=>e.body),$path:()=>"".concat(s).concat(o)},me:{get:e=>n(s,"/me","GET",e).json(),$get:e=>n(s,"/me","GET",e).json().then(e=>e.body),$path:()=>"".concat(s).concat("/me")},paypay:{payment:{get:e=>n(s,_,"GET",e).text(),$get:e=>n(s,_,"GET",e).text().then(e=>e.body),post:e=>n(s,_,u,e).send(),$post:e=>n(s,_,u,e).send().then(e=>e.body),$path:()=>"".concat(s).concat(_)},qrcode:{get:e=>n(s,d,"GET",e).text(),$get:e=>n(s,d,"GET",e).text().then(e=>e.body),post:e=>n(s,d,u,e).text(),$post:e=>n(s,d,u,e).text().then(e=>e.body),$path:()=>"".concat(s).concat(d)},get:e=>n(s,c,"GET",e).text(),$get:e=>n(s,c,"GET",e).text().then(e=>e.body),$path:()=>"".concat(s).concat(c)},session:{post:e=>n(s,r,u,e).json(),$post:e=>n(s,r,u,e).json().then(e=>e.body),delete:e=>n(s,r,h,e).json(),$delete:e=>n(s,r,h,e).json().then(e=>e.body),$path:()=>"".concat(s).concat(r)},tasks:{_taskId:e=>{let t="".concat(p,"/").concat(e);return{patch:e=>n(s,t,m,e).json(),$patch:e=>n(s,t,m,e).json().then(e=>e.body),delete:e=>n(s,t,h,e).json(),$delete:e=>n(s,t,h,e).json().then(e=>e.body),$path:()=>"".concat(s).concat(t)}},di:{get:e=>n(s,l,"GET",e).json(),$get:e=>n(s,l,"GET",e).json().then(e=>e.body),$path:()=>"".concat(s).concat(l)},get:e=>n(s,p,"GET",e).json(),$get:e=>n(s,p,"GET",e).json().then(e=>e.body),post:e=>n(s,p,u,e).json(),$post:e=>n(s,p,u,e).json().then(e=>e.body),patch:e=>n(s,p,m,e).json(),$patch:e=>n(s,p,m,e).json().then(e=>e.body),delete:e=>n(s,p,h,e).json(),$delete:e=>n(s,p,h,e).json().then(e=>e.body),$path:e=>"".concat(s).concat(p).concat(e&&e.query?"?".concat((0,a._K)(e.query)):"")},get:e=>n(s,"","GET",e).text(),$get:e=>n(s,"","GET",e).text().then(e=>e.body),$path:()=>"".concat(s)}})((0,s.Z)(i.Z.create({baseURL:o.env.NEXT_PUBLIC_API_BASE_URL,withCredentials:!0})))},1014:function(e){e.exports={container:"Header_container__3JNoS",left:"Header_left__2EE3i",right:"Header_right__IaiY4",account:"Header_account__usRDz",menuButton:"Header_menuButton__mlszh",open:"Header_open__jNVWy",menu:"Header_menu__UYmdC",dropdown:"Header_dropdown__f5upL",menuItem:"Header_menuItem__DuO3o"}},5501:function(e){e.exports={container:"_user_id__container__bWT8X",tipDetails:"_user_id__tipDetails__u0U_p",tipDetailsUpper:"_user_id__tipDetailsUpper__1DRNX",tipDetailsLower:"_user_id__tipDetailsLower__KKPeT",icon:"_user_id__icon__T99zC",iconImage:"_user_id__iconImage__fuxgK",tipName:"_user_id__tipName__cTcvM",tipAmountDetail:"_user_id__tipAmountDetail__tNNd0",tipAmount:"_user_id__tipAmount__gLsn0",tipAmountValue:"_user_id__tipAmountValue__y3_hh",tipButton:"_user_id__tipButton__8hghF",tipAmountInput:"_user_id__tipAmountInput__a9VMU",tipTextField:"_user_id__tipTextField__yVGwo",tipMessageArea:"_user_id__tipMessageArea___gM_v",tipMessage:"_user_id__tipMessage__6D4cy",tipMessageInput:"_user_id__tipMessageInput__Cnuuj",tippingArea:"_user_id__tippingArea__MqGp9",tippingButton:"_user_id__tippingButton__71kRN"}}},function(e){e.O(0,[845,58,804,774,888,179],function(){return e(e.s=8989)}),_N_E=e.O()}]);