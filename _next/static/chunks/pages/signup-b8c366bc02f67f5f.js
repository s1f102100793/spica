(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{5975:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return s(6510)}])},5511:function(e,a,s){"use strict";s.d(a,{$:function(){return i}});var n=s(5893),t=s(7889),r=s.n(t);let i=()=>(0,n.jsx)("div",{className:r().container,children:(0,n.jsxs)("div",{className:r().content,children:[(0,n.jsx)("div",{className:r().logoSection,children:(0,n.jsx)("div",{className:r().logo,children:"Spica"})}),(0,n.jsxs)("div",{className:r().navSection,children:[(0,n.jsxs)("div",{className:r().navItem,children:[(0,n.jsx)("div",{className:r().navLabel,children:"サービスtoha"}),(0,n.jsx)("a",{className:r().subNavItem,children:"サービス1"}),(0,n.jsx)("a",{className:r().subNavItem,children:"サービス1"}),(0,n.jsx)("a",{className:r().subNavItem,children:"サービス1"})]}),(0,n.jsxs)("div",{className:r().navItem,children:[(0,n.jsx)("div",{className:r().navLabel,children:"サービスaaaaaaaaaaaaaa"}),(0,n.jsx)("a",{className:r().subNavItem,children:"サービス1"}),(0,n.jsx)("a",{className:r().subNavItem,children:"サービス1"}),(0,n.jsx)("a",{className:r().subNavItem,children:"サービス1"})]}),(0,n.jsxs)("div",{className:r().navItem,children:[(0,n.jsx)("div",{className:r().navLabel,children:"サービス"}),(0,n.jsx)("a",{className:r().subNavItem,children:"サービス1"}),(0,n.jsx)("a",{className:r().subNavItem,children:"サービスaaaaaaaaaaaaa1"}),(0,n.jsx)("a",{className:r().subNavItem,children:"サービス1"})]}),(0,n.jsxs)("div",{className:r().navItem,children:[(0,n.jsx)("div",{className:r().navLabel,children:"サービス"}),(0,n.jsx)("a",{className:r().subNavItem,children:"サービス1"}),(0,n.jsx)("a",{className:r().subNavItem,children:"サービスaaaaaaaaaaaaa1"}),(0,n.jsx)("a",{className:r().subNavItem,children:"サービス1"})]})]})]})})},1587:function(e,a,s){"use strict";s.d(a,{h:function(){return d}});var n=s(5893),t=s(1163),r=s(7294),i=s(2255),l=s(9817),c=s(1014),o=s.n(c);let d=()=>{let[e,a]=(0,r.useState)(!1),{addLoading:s,removeLoading:c}=(0,i.r)(),d=async()=>{s(),await (0,l._)(),c()},m=(0,t.useRouter)();return(0,r.useEffect)(()=>{let e=()=>{window.innerWidth>=800&&a(!1)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),(0,r.useEffect)(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:o().container,children:[(0,n.jsx)("div",{className:o().left,children:"Spica"}),(0,n.jsxs)("div",{className:o().right,children:[(0,n.jsx)("span",{children:"ビジョン"}),(0,n.jsx)("span",{children:"ニュース"}),(0,n.jsx)("span",{children:"お問い合わせ"}),(0,n.jsx)("span",{onClick:d,children:"ログイン"}),"/signup"!==m.pathname&&(0,n.jsx)("span",{className:o().account,onClick:()=>{m.push("/signup")},children:"アカウント開設"})]}),(0,n.jsxs)("div",{className:"".concat(o().menuButton," ").concat(e?o().open:""),onClick:()=>a(!e),children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]})]}),(0,n.jsx)("div",{className:o().menu,children:e&&(0,n.jsxs)("div",{className:o().dropdown,children:[(0,n.jsx)("span",{className:o().menuItem,onClick:()=>a(!1),children:"ビジョン"}),(0,n.jsx)("span",{className:o().menuItem,onClick:()=>a(!1),children:"ニュース"}),(0,n.jsx)("span",{className:o().menuItem,onClick:()=>a(!1),children:"お問い合わせ"}),(0,n.jsx)("span",{className:o().menuItem,onClick:()=>a(!1),children:"サインイン"}),(0,n.jsx)("span",{className:o().menuItem,onClick:()=>a(!1),children:"サインアップ"})]})})]})}},2255:function(e,a,s){"use strict";s.d(a,{r:function(){return p}});var n=s(5893),t=s(5103),r=s(8583),i=s(7294),l=s(3935);let c=e=>{let{children:a}=e,[s,n]=(0,i.useState)();return(0,i.useEffect)(()=>{let e=document.createElement("div");return document.body.appendChild(e),n(e),()=>{document.body.removeChild(e)}},[]),s?l.createPortal(a,s):null};var o=s(3739),d=s.n(o);let m=e=>e.visible?(0,n.jsx)(c,{children:(0,n.jsx)("div",{className:d().container,children:(0,n.jsx)("div",{className:d().loader})})}):null,u=(0,t.cn)(0),h=(0,t.cn)(e=>e(u)>0),p=()=>{let[e,a]=(0,r.KO)(u),[s]=(0,r.KO)(h),t=(0,i.useCallback)(()=>a(e+1),[e,a]),l=(0,i.useCallback)(()=>a(e-1),[e,a]);return{loadingElm:(0,n.jsx)(m,{visible:s}),addLoading:t,removeLoading:l}}},6510:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return h}});var n=s(5893),t=s(5511),r=s(7294),i=s(1293),l=s.n(i);let c=e=>{let{firstName:a,setFirstName:s,lastName:t,setLastName:r,email:i,setEmail:l,password:c,setPassword:o,passwordConfirmation:d,setPasswordConfirmation:m,emailPreferences:u,setEmailPreferences:h,errors:p,setErrors:_,handleNextClick:x,styles:j}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:j.title,children:"アカウント登録"}),(0,n.jsxs)("form",{children:[(0,n.jsxs)("div",{className:j.formGroup,children:[(0,n.jsx)("label",{children:"氏名"}),(0,n.jsxs)("div",{className:j.nameInput,children:[(0,n.jsxs)("div",{className:j.nameArea,children:[(0,n.jsx)("input",{type:"text",value:t,onChange:e=>r(e.target.value),placeholder:"山田"}),null!==p.lastName&&(0,n.jsx)("div",{className:j.error,children:p.lastName})]}),(0,n.jsxs)("div",{className:j.nameArea,children:[(0,n.jsx)("input",{type:"text",value:a,onChange:e=>s(e.target.value),placeholder:"太郎"}),null!==p.firstName&&(0,n.jsx)("div",{className:j.error,children:p.firstName})]})]})]}),(0,n.jsxs)("div",{className:j.formGroup,children:[(0,n.jsx)("label",{children:"メールアドレス"}),(0,n.jsx)("input",{type:"email",value:i,onChange:e=>l(e.target.value),placeholder:"example@example.com"}),null!==p.email&&(0,n.jsx)("div",{className:j.error,children:p.email})]}),(0,n.jsxs)("div",{className:j.formGroup,children:[(0,n.jsx)("label",{children:"パスワード"}),(0,n.jsx)("input",{type:"password",value:c,onChange:e=>o(e.target.value),onBlur:()=>{if(c.length<6){_(e=>({...e,password:"パスワードは6文字以上の半角英数字で入力してください。"}));return}if(!/^[a-zA-Z0-9]+$/.test(c)){_(e=>({...e,password:"パスワードは6文字以上の半角英数字で入力してください。"}));return}},placeholder:"6文字以上の半角英数字"}),null!==p.password&&(0,n.jsx)("div",{className:j.error,children:p.password})]}),(0,n.jsxs)("div",{className:j.formGroup,children:[(0,n.jsx)("label",{children:"パスワード（確認）"}),(0,n.jsx)("input",{type:"password",value:d,onChange:e=>m(e.target.value),placeholder:"6文字以上の半角英数字"}),null!==p.passwordConfirmation&&(0,n.jsx)("div",{className:j.error,children:p.passwordConfirmation})]}),(0,n.jsxs)("div",{className:j.mailGroup,children:[(0,n.jsx)("input",{type:"checkbox",id:"emailPreferences",checked:u,onChange:e=>h(e.target.checked)}),(0,n.jsx)("label",{htmlFor:"emailPreferences",children:"製品の更新、お知らせ、オファーのメールを希望する"})]})]}),(0,n.jsx)("button",{className:j.createButton,type:"button",onClick:x,children:"つぎへ"})]})},o=e=>{let{email:a,handleNextClick:s,verificationCode:t,setVerificationCode:i,sentCode:l,sendEmailVerification:c,styles:o}=e,[d,m]=(0,r.useState)(""),u=(e,a)=>{if(""===a||a.match(/^\d$/)){let s=[...t];s[e]=a,i(s)}};return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:o.title,children:"メールアドレス認証"}),(0,n.jsx)("form",{children:(0,n.jsxs)("div",{className:o.formGroup,children:[(0,n.jsxs)("p",{className:o.certificationMail,children:["認証コードを ",a," に送信しました。"]}),(0,n.jsx)("p",{className:o.mail,children:"メール受信箱を確認し、下記に認証コードを入力してあなたのメールアドレスを認証してください。"}),(0,n.jsx)("div",{className:o.codeInputContainer,children:Array.from({length:6}).map((e,a)=>(0,n.jsx)("input",{type:"text",value:t[a],onChange:e=>u(a,e.target.value),maxLength:1,className:o.codeInput},a))}),d&&(0,n.jsx)("p",{className:o.error,children:d})]})}),(0,n.jsx)("button",{className:o.createButton,onClick:()=>{t.join("")===l?s():m("認証コードが正しくありません。")},children:"確認"}),(0,n.jsx)("button",{className:o.resendButton,onClick:c,children:"コードを再送"})]})},d=e=>{let{styles:a,firstName:s,lastName:t,email:r,password:i,emailPreferences:l,handleNextClick:c,handlebackClick:o}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:a.title,children:"登録情報確認"}),(0,n.jsxs)("form",{children:[(0,n.jsxs)("div",{className:a.formGroup,children:[(0,n.jsx)("label",{className:a.formLabel,children:"氏名"}),(0,n.jsxs)("div",{className:a.nameInput,children:[(0,n.jsx)("p",{className:a,children:t}),(0,n.jsx)("p",{children:s})]})]}),(0,n.jsxs)("div",{className:a.formGroup,children:[(0,n.jsx)("label",{className:a.formLabel,children:"メールアドレス"}),(0,n.jsx)("p",{children:r})]}),(0,n.jsxs)("div",{className:a.formGroup,children:[(0,n.jsx)("label",{className:a.formLabel,children:"パスワード"}),(0,n.jsx)("p",{children:i.replace(/./g,"●")})]}),(0,n.jsxs)("div",{className:a.formGroup,children:[(0,n.jsx)("label",{className:a.formLabel,children:"メール設定"}),(0,n.jsx)("p",{children:l?"希望する":"希望しない"})]})]}),(0,n.jsxs)("div",{className:a.buttonContainer,children:[(0,n.jsx)("button",{className:a.changeStepButton,type:"button",onClick:o,children:"修正する"}),(0,n.jsx)("button",{className:a.changeStepButton,type:"button",onClick:c,children:"つぎへ"})]})]})},m=()=>{let[e,a]=(0,r.useState)(3),[s,t]=(0,r.useState)(""),[i,m]=(0,r.useState)(""),[u,h]=(0,r.useState)(""),[p,_]=(0,r.useState)(""),[x,j]=(0,r.useState)(""),[v,N]=(0,r.useState)(!1),[f,b]=(0,r.useState)({}),[g,S]=(0,r.useState)([]),[C,w]=(0,r.useState)(null),I=()=>{let e={},a=RegExp("^[\\p{Script=Hiragana}\\p{Script=Katakana}\\p{Script=Han}ーa-zA-Z\\s]+$","u");return i&&"string"==typeof i&&a.test(i)||(e.lastName="正しい苗字を入力してください。"),s&&"string"==typeof s&&a.test(s)||(e.firstName="正しい名前を入力してください。"),u&&"string"==typeof u&&/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(u)||(e.email="有効なメールアドレスを入力してください。"),i&&"string"==typeof i||(e.lastName="苗字が未記入です"),s&&"string"==typeof s||(e.firstName="名前が未記入です"),u&&"string"==typeof u||(e.email="メールアドレスが未記入です"),p&&"string"==typeof p||(e.password="パスワードが未記入です"),p.length<6?e.password="パスワードは6文字以上の半角英数字で入力してください。":/^[a-zA-Z0-9]+$/.test(p)||(e.password="パスワードは6文字以上の半角英数字で入力してください。"),("string"!=typeof p||"string"!=typeof x||p!==x)&&(e.passwordConfirmation="パスワードが一致していません。"),e},y=()=>{let s=I();0===Object.keys(s).length?a(e+1):b(s)},F=()=>{let e=Math.floor(1e6*Math.random()).toString().padStart(6,"0");return e.split("")};return(0,n.jsxs)("div",{className:l().container,children:[(0,n.jsxs)("div",{className:l().progressContainer,children:[(0,n.jsx)("div",{className:"".concat(l().progressStep," ").concat(1===e?l().activeStep:""),children:"1.仮登録"}),(0,n.jsx)("div",{className:"".concat(l().progressStep," ").concat(2===e?l().activeStep:""),children:"2.仮登録確認"}),(0,n.jsx)("div",{className:"".concat(l().progressStep," ").concat(3===e?l().activeStep:""),children:"3.メールアドレス認証"})]}),(0,n.jsxs)("div",{className:l().form,children:[1===e&&(0,n.jsx)(c,{firstName:s,setFirstName:t,lastName:i,setLastName:m,email:u,setEmail:h,password:p,setPassword:_,passwordConfirmation:x,setPasswordConfirmation:j,emailPreferences:v,setEmailPreferences:N,errors:f,setErrors:b,handleNextClick:y,styles:l()}),2===e&&(0,n.jsx)(d,{firstName:s,lastName:i,email:u,password:p,emailPreferences:v,handleNextClick:y,handlebackClick:()=>{a(e-1)},styles:l()}),3===e&&(0,n.jsx)(o,{email:u,handleNextClick:y,verificationCode:g,setVerificationCode:S,sentCode:C,sendEmailVerification:()=>{let e=F();w(e.join("")),console.log("Send email to ".concat(u," with verification code: ").concat(e.join("")))},styles:l()})]})]})};var u=s(1587),h=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.h,{}),(0,n.jsx)(m,{}),(0,n.jsx)(t.$,{})]})},9817:function(e,a,s){"use strict";let n;s.d(a,{_:function(){return o}});var t=s(1259),r=s(3977),i=s(3454);let l=()=>{if(void 0!==n)return n;if(void 0!==i.env.NEXT_PUBLIC_AUTH_EMULATOR_URL){let e=(0,t.v0)((0,r.ZF)({apiKey:"fake-api-key",authDomain:location.hostname}));return(0,t.S$)(e,i.env.NEXT_PUBLIC_AUTH_EMULATOR_URL,{disableWarnings:!0}),n=e,e}{let e=JSON.parse(""),a=(0,t.v0)((0,r.ZF)(e));return n=a,a}},c=()=>null,o=async()=>{let e=new t.hJ;e.addScope("read:user"),await (0,t.rh)(l(),e).catch(c)}},7889:function(e){e.exports={container:"Footer_container__Dj1D9",content:"Footer_content__a1cH7",logoSection:"Footer_logoSection__60cxm",logo:"Footer_logo__C9vo8",navSection:"Footer_navSection__F3PZo",navItem:"Footer_navItem__8Yj1Y",navLabel:"Footer_navLabel__NydQx",subNavItem:"Footer_subNavItem__AWV74"}},1293:function(e){e.exports={container:"FormSection_container__uyAoo",form:"FormSection_form__EWuLg",title:"FormSection_title__z0Djb",formGroup:"FormSection_formGroup__HwLYb",nameArea:"FormSection_nameArea__xAbMX",nameInput:"FormSection_nameInput__jGED_",error:"FormSection_error__zfi1E",mailGroup:"FormSection_mailGroup__nAU6H",createButton:"FormSection_createButton__Hii3X",progressContainer:"FormSection_progressContainer__ucPBo",progressStep:"FormSection_progressStep__pnB3Z",activeStep:"FormSection_activeStep__ndpc0",formLabel:"FormSection_formLabel__LAY7m",buttonContainer:"FormSection_buttonContainer__P9kvK",changeStepButton:"FormSection_changeStepButton__cTCfj",certificationMail:"FormSection_certificationMail__tlBtB",mail:"FormSection_mail__xfX4_",codeInputContainer:"FormSection_codeInputContainer__LHqbs",codeInput:"FormSection_codeInput__RvdeG",resendButton:"FormSection_resendButton__kvM7j"}},1014:function(e){e.exports={container:"Header_container__3JNoS",left:"Header_left__2EE3i",right:"Header_right__IaiY4",account:"Header_account__usRDz",menuButton:"Header_menuButton__mlszh",open:"Header_open__jNVWy",menu:"Header_menu__UYmdC",dropdown:"Header_dropdown__f5upL",menuItem:"Header_menuItem__DuO3o"}},3739:function(e){e.exports={container:"Loading_container__wV1ri",loader:"Loading_loader__cpdbt",load:"Loading_load__8NQtO"}}},function(e){e.O(0,[661,235,774,888,179],function(){return e(e.s=5975)}),_N_E=e.O()}]);