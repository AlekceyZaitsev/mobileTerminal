(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[638],{1517:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return b}});var i,o,a=t(1163),r=t(7294),p=t(2175),s=t(6310),d=s.Ry().shape({phoneInput:s.Rx().required("Обязательно для заполнения").typeError("Некорректный номер телефона"),payInput:s.Rx().min(1,"Минимальная сумма оплаты 1р").max(1e3,"Максимальная сумма пополнения 1000р").typeError("Некорректная сумма оплаты").required("Обязательно для заполнения")}),u=t(1664),c=t.n(u);(i=o||(o={})).PENDING="pending",i.FULFILLED="fulfilled",i.REJECTED="rejected";var l=t(7739),f=t(508),m=t(5242),x=f.ZP.div.withConfig({displayName:"loader__Loader",componentId:"sc-1dbpepy-0"})(["margin:0 auto;width:160px;height:160px;border-radius:50%;border:5px dashed ",";animation:rotate 1s infinite linear;@keyframes rotate{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"],m.w.WHITE),h=t(7471),w=t(1852),g=t(9679),E=t(2943),I=f.ZP.p.withConfig({displayName:"SuccessMessage",componentId:"sc-5j33dx-0"})(["margin:0 0 15px 0;color:",';font-family:"Arial Black";font-size:calc(10px + 10 * (100vw / 1280));@media (max-width:768px){font-size:11px;}'],m.w.GREEN),y=f.ZP.p.withConfig({displayName:"MessageError",componentId:"sc-1cb6bt-0"})(["margin:0 0 15px 0;color:",';font-family:"Arial Black";font-size:calc(10px + 10 * (100vw / 1280));@media (max-width:768px){font-size:11px;}'],m.w.RED),v=t(5893),b=function(){var n=(0,a.useRouter)(),e=(0,a.useRouter)().query,t=(0,r.useState)(),i=t[0],s=t[1],u=i===o.FULFILLED,f=i===o.REJECTED,m=i===o.PENDING;return(0,v.jsx)(g.Y,{children:(0,v.jsx)(h.U,{children:(0,v.jsx)(p.J9,{initialValues:{phoneInput:"",payInput:""},validateOnBlur:!0,onSubmit:function(){s(o.PENDING),setTimeout(function(){Math.floor(2*Math.random())?(s(o.FULFILLED),setTimeout(function(){return n.push("/")},2e3)):s(o.REJECTED)},1e3)},validationSchema:d,children:function(n){var t=n.values,i=n.errors,o=n.touched,a=n.handleChange,r=n.handleBlur,s=n.handleSubmit,d=n.isValid;return m?(0,v.jsx)(x,{}):(0,v.jsxs)(p.l0,{children:[(0,v.jsx)(w.D,{children:e.operatorItem}),(0,v.jsx)(l.M,{mask:"+7 \\ 999 999 99 99",maskChar:"_",alwaysShowMask:!0,type:"tel",name:"phoneInput",onChange:a,onBlur:r,value:t.phoneInput,placeholder:"Введите номер телефона"}),o.phoneInput&&i.phoneInput&&(0,v.jsx)(y,{children:i.phoneInput}),(0,v.jsx)(l.M,{type:"text",name:"payInput",onChange:a,onBlur:r,value:t.payInput,placeholder:"Введите сумму"}),o.payInput&&i.payInput&&(0,v.jsx)(y,{children:i.payInput}),(0,v.jsx)(E.O,{type:"submit",disabled:!d||u,onClick:function(){return s},children:"Отправить"}),(0,v.jsx)(c(),{href:"/",children:(0,v.jsx)(E.O,{disabled:u,children:"Назад"})}),u&&(0,v.jsx)(I,{children:"Пополнение успешно выполнено!"}),f&&(0,v.jsx)(y,{children:"Ошибка отправки данных!"})]})}})})})}},2943:function(n,e,t){"use strict";t.d(e,{O:function(){return a}});var i=t(508),o=t(5242),a=i.ZP.button.withConfig({displayName:"FormButton",componentId:"sc-tgze3u-0"})(["padding:10px;color:",';font-family:"Arial Black";font-size:calc(14px + 16 * (100vw / 1280));border:1px solid ',";border-radius:10px;background:none;transition:0.3s;cursor:pointer;@media (max-width:768px){font-size:14px;padding:5px;}"],o.w.WHITE,o.w.BLACK)},7471:function(n,e,t){"use strict";t.d(e,{U:function(){return a}});var i=t(508),o=t(5242),a=i.ZP.section.withConfig({displayName:"FormMobilePayment",componentId:"sc-1688q1z-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;background:",";border-radius:30px;margin:30px 0 0 0;padding:15px 0 15px 0;min-height:400px;"],o.w.BLUE)},7739:function(n,e,t){"use strict";t.d(e,{M:function(){return p}});var i=t(508),o=t(6627),a=t.n(o),r=t(5242),p=(0,i.ZP)(a()).withConfig({displayName:"inputForm__InputForm",componentId:"sc-10xgkp1-0"})(['display:flex;flex-direction:column;margin:0 0 30px 0;font-family:"Arial Black";font-size:calc(14px + 16 * (100vw / 1280));padding-left:15px;transition:0.3s;outline:none;:hover,:focus{transform:scale(1.05);::placeholder{color:',";}::-webkit-inner-spin-button{-webkit-appearance:none;}}@media (max-width:768px){width:200px;height:30px;font-size:12px;margin:0 0 10px 0;}"],r.w.BLACK)},1852:function(n,e,t){"use strict";t.d(e,{D:function(){return a}});var i=t(508),o=t(5242),a=i.ZP.h2.withConfig({displayName:"Title",componentId:"sc-3l228o-0"})(["margin:0 0 30px 0;text-align:center;color:",';font-family:"Arial Black";font-size:calc(24px + 24 * (100vw / 1280));font-weight:700;@media (max-width:1200px){font-size:26px;}@media (max-width:768px){font-size:17px;}'],o.w.WHITE)},5242:function(n,e,t){"use strict";var i,o;t.d(e,{w:function(){return i}}),(o=i||(i={})).BLACK="#403A3A",o.GREEN="#008000",o.WHITE="#fafafa",o.RED="#ff0000",o.BLUE="#47a0ff"},9679:function(n,e,t){"use strict";t.d(e,{Y:function(){return i}});var i=t(508).ZP.div.withConfig({displayName:"ContainerApp",componentId:"sc-9puhx7-0"})(["width:50%;margin:0 auto;@media (max-width:1200px){width:70%;}"])},3588:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/operators/[operatorItem]",function(){return t(1517)}])}},function(n){n.O(0,[774,685,789,888,179],function(){return n(n.s=3588)}),_N_E=n.O()}]);