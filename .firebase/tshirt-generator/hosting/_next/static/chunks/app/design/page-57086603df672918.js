(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[535],{5660:function(e,t,n){Promise.resolve().then(n.bind(n,8577)),Promise.resolve().then(n.t.bind(n,7704,23))},8577:function(e,t,n){"use strict";n.d(t,{default:function(){return k}});var i=n(7437),r=n(2265),a=n(4340),l=n(4973),o=n(9240),s=n(114),u=n(3682),c=n(191),d=n(4757),p=n(7414),x=n(7158),h=n(6122),g=n(9386),f=n(6632),m=(0,f.I)({displayName:"ArrowLeftIcon",path:(0,i.jsxs)("g",{fill:"currentColor",children:[(0,i.jsx)("path",{d:"M10.416,12a2.643,2.643,0,0,1,.775-1.875L20.732.584a1.768,1.768,0,0,1,2.5,2.5l-8.739,8.739a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5l-9.541-9.541A2.643,2.643,0,0,1,10.416,12Z"}),(0,i.jsx)("path",{d:"M.25,12a2.643,2.643,0,0,1,.775-1.875L10.566.584a1.768,1.768,0,0,1,2.5,2.5L4.327,11.823a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5L1.025,13.875A2.643,2.643,0,0,1,.25,12Z"})]})}),v=(0,f.I)({viewBox:"0 0 14 14",path:(0,i.jsx)("g",{fill:"currentColor",children:(0,i.jsx)("polygon",{points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})})}),y=n(6463),j=n(7175),b=n(8849),w=n(18);let C=e=>{let{isSelected:t=!1,src:n,setSelectedImage:r,index:o}=e;return(0,i.jsx)(a.xu,{border:t?"dashed 6px teal":"none",boxSizing:"border-box",width:["100%","400px"],onClick:()=>r(o),cursor:"pointer",transition:"all 0.3s ease",children:(0,i.jsx)(l.E,{src:n,alt:"test"})})};function k(){let e=(0,y.useRouter)(),[t,n]=(0,r.useState)(""),[l,f]=(0,r.useState)([]),[k,I]=(0,r.useState)(!1),[S,A]=(0,r.useState)(!1),[T,_]=(0,r.useState)(0),R=async()=>{I(!0),f((await (0,b.OM)({prompt:t})).data.map(e=>"data:image/jpeg;base64,".concat(e.image_base64))),I(!1),(0,j.Kz)(w.co,"prompt")},E=async()=>{A(!0);let t=await (0,b.DB)(l[T]);A(!1),e.push("tshirt?design=".concat(t)),(0,j.Kz)(w.co,"select_image")};return(0,i.jsxs)(o.k,{w:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"50px",backgroundColor:"gray.50",id:"start",children:[(0,i.jsxs)(s.K,{spacing:"24px",maxW:"1100px",textAlign:"center",children:[(0,i.jsx)(u.X,{as:"h3",children:"Start With A Prompt"}),(0,i.jsx)(c.x,{children:"Choose a prompt that speaks to you. We'll guide you through the rest."}),(0,i.jsx)(d.g,{width:"100%",placeholder:"Try anything you have in mind",value:t,onChange:e=>n(e.target.value)}),(0,i.jsx)(p.z,{colorScheme:"teal",isLoading:k,onClick:R,marginBottom:"50px",children:"Create"})]}),(0,i.jsx)(x.U,{in:!!l.length,children:(0,i.jsxs)(s.K,{spacing:"24px",backgroundColor:"gray.50",alignItems:"center",width:"100vw",padding:"50px",children:[(0,i.jsx)(u.X,{as:"h3",children:"Your Masterpieces"}),(0,i.jsx)(a.xu,{children:"Choose an Image"}),(0,i.jsx)(h.M,{columns:[1,2],spacing:"24px",children:l.map((e,t)=>(0,i.jsx)(C,{isSelected:T===t,src:e,index:t,setSelectedImage:_},t))}),(0,i.jsxs)(g.U,{flexDirection:["column-reverse","row"],spacing:"24px",flex:1,mt:"24px",children:[(0,i.jsx)(p.z,{colorScheme:"teal",onClick:()=>{f([])},variant:"ghost",leftIcon:(0,i.jsx)(m,{}),flex:1,size:"lg",width:"300px",children:"Reset"}),(0,i.jsx)(p.z,{colorScheme:"teal",size:"lg",width:"300px",leftIcon:(0,i.jsx)(v,{}),isLoading:S,onClick:()=>E(),children:"Continue"})]})]})})]})}},8849:function(e,t,n){"use strict";n.d(t,{DB:function(){return c},OM:function(){return s},gJ:function(){return d},vm:function(){return u}});var i=n(8116),r=n(9854),a=n(2290),l=n(18);let o=(0,i.$C)(l.l2,"us-central1"),s=(0,i.V1)(o,"generateImages"),u=(0,i.V1)(o,"order"),c=async e=>{let t=(0,r.cF)(),n=(0,a.x0)(),i=(0,r.iH)(t,"images/".concat(n));return(await (0,r.sf)(i,e,"data_url")).metadata.fullPath},d=async e=>{let t=(0,r.cF)(),n=(0,r.iH)(t,e);return await (0,r.Jt)(n)}},18:function(e,t,n){"use strict";n.d(t,{co:function(){return o},l2:function(){return l}});var i=n(5236),r=n(7175),a=n(4495);let l=(0,i.ZF)({apiKey:"AIzaSyBvtnXfPCs5y3A6x3ezGXw1_nqyeDrcTZU",authDomain:"tshirt-generator.firebaseapp.com",projectId:"tshirt-generator",storageBucket:"tshirt-generator.appspot.com",messagingSenderId:"430451629726",appId:"1:430451629726:web:a3ce11c7afaf472823258f",measurementId:"G-SZ7EKGRSDH"}),o=(0,r.IH)(l);(0,a.yu)(l,{provider:new a.z9("6Lcsu-EpAAAAAA6PTfPeBCTCr8xgW7zEr4H4Pg2f"),isTokenAutoRefreshEnabled:!0})},7704:function(e){e.exports={main:"page_main__38VsZ"}},7712:function(e,t,n){"use strict";n.d(t,{K:function(){return l},Y:function(){return a}});var i=n(9769),r=n(9372);function a(e){let{isDisabled:t,isInvalid:n,isReadOnly:i,isRequired:a,...o}=l(e);return{...o,disabled:t,readOnly:i,required:a,"aria-invalid":(0,r.Qm)(n),"aria-required":(0,r.Qm)(a),"aria-readonly":(0,r.Qm)(i)}}function l(e){var t,n,a;let l=(0,i.NJ)(),{id:o,disabled:s,readOnly:u,required:c,isRequired:d,isInvalid:p,isReadOnly:x,isDisabled:h,onFocus:g,onBlur:f,...m}=e,v=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==l?void 0:l.hasFeedbackText)&&(null==l?void 0:l.isInvalid)&&v.push(l.feedbackId),(null==l?void 0:l.hasHelpText)&&v.push(l.helpTextId),{...m,"aria-describedby":v.join(" ")||void 0,id:null!=o?o:null==l?void 0:l.id,isDisabled:null!=(t=null!=s?s:h)?t:null==l?void 0:l.isDisabled,isReadOnly:null!=(n=null!=u?u:x)?n:null==l?void 0:l.isReadOnly,isRequired:null!=(a=null!=c?c:d)?a:null==l?void 0:l.isRequired,isInvalid:null!=p?p:null==l?void 0:l.isInvalid,onFocus:(0,r.v0)(null==l?void 0:l.onFocus,g),onBlur:(0,r.v0)(null==l?void 0:l.onBlur,f)}}},230:function(e,t,n){"use strict";n.d(t,{r:function(){return l}});var i=n(5151),r=n(6387),a=n(7437),l=(0,i.forwardRef)(function(e,t){let{templateAreas:n,gap:i,rowGap:l,columnGap:o,column:s,row:u,autoFlow:c,autoRows:d,templateRows:p,autoColumns:x,templateColumns:h,...g}=e;return(0,a.jsx)(r.chakra.div,{ref:t,__css:{display:"grid",gridTemplateAreas:n,gridGap:i,gridRowGap:l,gridColumnGap:o,gridAutoColumns:x,gridColumn:s,gridRow:u,gridAutoFlow:c,gridAutoRows:d,gridTemplateRows:p,gridTemplateColumns:h},...g})});l.displayName="Grid"},6122:function(e,t,n){"use strict";n.d(t,{M:function(){return u}});var i=n(230),r=n(5151),a=n(3983),l=n(1246),o=n(7087),s=n(7437),u=(0,r.forwardRef)(function(e,t){let{columns:n,spacingX:r,spacingY:u,spacing:c,minChildWidth:d,...p}=e,x=(0,a.useTheme)(),h=d?(0,o.XQ)(d,e=>{let t=(0,l.getToken)("sizes",e,"number"==typeof e?"".concat(e,"px"):e)(x);return null===e?null:"repeat(auto-fit, minmax(".concat(t,", 1fr))")}):(0,o.XQ)(n,e=>null===e?null:"repeat(".concat(e,", minmax(0, 1fr))"));return(0,s.jsx)(i.r,{ref:t,gap:c,columnGap:r,rowGap:u,templateColumns:h,...p})});u.displayName="SimpleGrid"},4757:function(e,t,n){"use strict";n.d(t,{g:function(){return d}});var i=n(7712),r=n(5151),a=n(2899),l=n(9506),o=n(6387),s=n(9372),u=n(7437),c=["h","minH","height","minHeight"],d=(0,r.forwardRef)((e,t)=>{let n=(0,a.useStyleConfig)("Textarea",e),{className:r,rows:d,...p}=(0,l.Lr)(e),x=(0,i.Y)(p),h=d?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}(n,c):n;return(0,u.jsx)(o.chakra.textarea,{ref:t,rows:d,...x,className:(0,s.cx)("chakra-textarea",r),__css:h})});d.displayName="Textarea"},7158:function(e,t,n){"use strict";n.d(t,{U:function(){return p}});var i=n(6572),r=n(9372),a=n(5127),l=n(6451),o=n(2265),s=n(7437),u=e=>null!=e&&parseInt(e.toString(),10)>0,c={exit:{height:{duration:.2,ease:i.Lj.ease},opacity:{duration:.3,ease:i.Lj.ease}},enter:{height:{duration:.3,ease:i.Lj.ease},opacity:{duration:.4,ease:i.Lj.ease}}},d={exit:e=>{var t;let{animateOpacity:n,startingHeight:r,transition:a,transitionEnd:l,delay:o}=e;return{...n&&{opacity:u(r)?1:0},height:r,transitionEnd:null==l?void 0:l.exit,transition:null!=(t=null==a?void 0:a.exit)?t:i.p$.exit(c.exit,o)}},enter:e=>{var t;let{animateOpacity:n,endingHeight:r,transition:a,transitionEnd:l,delay:o}=e;return{...n&&{opacity:1},height:r,transitionEnd:null==l?void 0:l.enter,transition:null!=(t=null==a?void 0:a.enter)?t:i.p$.enter(c.enter,o)}}},p=(0,o.forwardRef)((e,t)=>{let{in:n,unmountOnExit:i,animateOpacity:u=!0,startingHeight:c=0,endingHeight:p="auto",style:x,className:h,transition:g,transitionEnd:f,...m}=e,[v,y]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=setTimeout(()=>{y(!0)});return()=>clearTimeout(e)},[]),(0,r.ZK)({condition:Number(c)>0&&!!i,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});let j=parseFloat(c.toString())>0,b={startingHeight:c,endingHeight:p,animateOpacity:u,transition:v?g:{enter:{duration:0}},transitionEnd:{enter:null==f?void 0:f.enter,exit:i?null==f?void 0:f.exit:{...null==f?void 0:f.exit,display:j?"block":"none"}}},w=!i||n,C=n||i?"enter":"exit";return(0,s.jsx)(a.M,{initial:!1,custom:b,children:w&&(0,s.jsx)(l.E.div,{ref:t,...m,className:(0,r.cx)("chakra-collapse",h),style:{overflow:"hidden",display:"block",...x},custom:b,variants:d,initial:!!i&&"exit",animate:C,exit:"exit"})})});p.displayName="Collapse"}},function(e){e.O(0,[517,107,641,203,645,971,23,744],function(){return e(e.s=5660)}),_N_E=e.O()}]);