(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__3eh1o",control:"Checkout_control__mP2c9",actions:"Checkout_actions__zA6b1",submit:"Checkout_submit__1feRT",invalid:"Checkout_invalid__3EDLx"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__Qc7va",total:"Cart_total__3a-RK",actions:"Cart_actions__3-5aO","button--alt":"Cart_button--alt__1p02c",button:"Cart_button__3mn_9"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3hgs3",summary:"CartItem_summary__2RnWh",price:"CartItem_price__3B4aI",amount:"CartItem_amount__31LuC",actions:"CartItem_actions__1sTHJ"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1h9Vy",icon:"HeaderCartButton_icon__eSDXB",badge:"HeaderCartButton_badge__1Ok_y",bump:"HeaderCartButton_bump__l87J4"}},function(e,t,n){e.exports={meal:"MealsItem_meal__Z0Z0f",description:"MealsItem_description__3jw7v",price:"MealsItem_price__2gcCI"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__3bzp8",modal:"Modal_modal__22nql","slide-down":"Modal_slide-down__2Ot9x"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__h8Ibl","meals-appear":"AvailableMeals_meals-appear__1HqWF",MealsLoading:"AvailableMeals_MealsLoading__2dkts",MealsError:"AvailableMeals_MealsError___LG8J"}},,function(e,t,n){e.exports={header:"Header_header__1Ck30","main-image":"Header_main-image__22lcu"}},,function(e,t,n){e.exports={card:"Card_card__2iBw2"}},function(e,t,n){e.exports={input:"Input_input__ASEbI"}},function(e,t,n){e.exports={form:"MealsInputForm_form__C6WHv"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__3N4E9"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=(n(27),n(2)),i=n(1),s=n.n(i),o=n.p+"static/media/meals.2971f633.jpg",l=n(17),u=n.n(l),d=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),j=n(0),m=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},b=n(10),h=n.n(b),O=function(e){var t=e.onShowCart,n=Object(i.useContext)(d),a=Object(i.useState)(!1),c=Object(r.a)(a,2),s=c[0],o=c[1],l=n.items,u=l.reduce((function(e,t){return e+t.amount}),0),b="".concat(h.a.button," ").concat(s?h.a.bump:"");return Object(i.useEffect)((function(){if(0!==l.length){o(!0);var e=setTimeout((function(){o(!1)}),100);return function(){clearTimeout(e)}}}),[l]),Object(j.jsx)(i.Fragment,{children:Object(j.jsxs)("button",{className:b,onClick:t,children:[Object(j.jsx)("span",{className:h.a.icon,children:Object(j.jsx)(m,{})}),Object(j.jsx)("span",{children:"Your Cart"}),Object(j.jsx)("span",{className:h.a.badge,children:u})]})})},p=function(e){var t=e.onShowCart;return Object(j.jsxs)(i.Fragment,{children:[Object(j.jsxs)("header",{className:u.a.header,children:[Object(j.jsx)("h1",{children:"ReactMeals"}),Object(j.jsx)(O,{onShowCart:t})]}),Object(j.jsx)("div",{className:u.a["main-image"],children:Object(j.jsx)("img",{src:o,alt:"A table full all delicius foods"})})]})},x=n(6),f=n.n(x),_=n(13),v=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!1),s=Object(r.a)(c,2),o=s[0],l=s[1],u=Object(i.useState)(!0),d=Object(r.a)(u,2),j=d[0],m=d[1],b=Object(i.useState)(null),h=Object(r.a)(b,2),O=h[0],p=h[1];return{func:Object(i.useCallback)(function(){var e=Object(_.a)(f.a.mark((function e(t,n){var c,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,fetch(t.url,{method:t.method?t.method:"GET",body:t.body?JSON.stringify(t.body):null,headers:{"Content-Type":"application/json"}});case 4:if((c=e.sent).ok){e.next=7;break}throw Error("Request Failed!");case 7:return e.next=9,c.json();case 9:r=e.sent,a(!1),l(!0),m(!1),n(r),e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(1),m(!1),p(e.t0.message),e.abrupt("return",e.t0.message||"Something went wrong!");case 21:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t,n){return e.apply(this,arguments)}}(),[]),isSubmiting:n,didSubmit:o,isLoading:j,hasError:O}},C={value:"",isTouched:!1},g=function(e,t){return"INPUT"===t.type?{value:t.value,isTouched:e.isTouched}:"BLUR"===t.type?{value:e.value,isTouched:!0}:(t.type,C)},y=function(e){var t=Object(i.useReducer)(g,C),n=Object(r.a)(t,2),a=n[0],c=n[1],s=e(a.value),o=!s&&a.isTouched;return{value:a.value,inputChangeHandler:function(e){c({type:"INPUT",value:e.target.value})},inputBlurHandler:function(){c({type:"BLUR"})},reset:function(){c({type:"RESET"})},isValid:s,hasError:o}},N=n(19),S=n.n(N),A=function(e){return Object(j.jsx)(i.Fragment,{children:Object(j.jsx)("div",{className:S.a.card,children:e.children})})},E=n(4),I=n(20),k=n.n(I),w=s.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:k.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(E.a)({ref:t},e.input))]})})),H=n(14),M=n.n(H),B=function(e){var t=function(e){var t=e.onShowCart;return Object(j.jsx)("div",{className:M.a.backdrop,onClick:t})},n=function(e){return Object(j.jsx)("div",{className:M.a.modal,children:Object(j.jsx)("div",{className:M.a.content,children:e.children})})};return Object(j.jsxs)(i.Fragment,{children:[c.a.createPortal(Object(j.jsx)(t,{onShowCart:e.onShowCart}),document.getElementById("overlays")),c.a.createPortal(Object(j.jsx)(n,{children:e.children}),document.getElementById("overlays"))]})},F=n(15),T=n.n(F),R=n(21),P=n.n(R),L=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(j.jsxs)("form",{className:P.a.form,onSubmit:function(t){var n=s.current.value,a=+n;t.preventDefault(),0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(j.jsx)(w,{ref:s,label:"Amount",input:{id:"amount__"+e.id,type:"number",min:1,max:5,step:1,defaultValue:"1"}}),Object(j.jsx)("button",{type:"submit",children:"+ Add"}),!a&&Object(j.jsx)("p",{className:"text-danger",children:"Please Enter Valid Amount 1 - 5."})]})},D=n(11),V=n.n(D),J=function(e){var t=e.meal,n=Object(i.useContext)(d),a="$".concat(t.price.toFixed(2));return Object(j.jsx)(i.Fragment,{children:Object(j.jsxs)("li",{className:V.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:V.a.name,children:t.name}),Object(j.jsx)("div",{className:V.a.description,children:t.description}),Object(j.jsx)("div",{className:V.a.price,children:a})]}),Object(j.jsx)("div",{children:Object(j.jsx)(L,{onAddToCart:function(e){n.addItem({id:t.id,name:t.name,amount:e,price:t.price})},id:t.id})})]})})},z=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=function(){var e=Object(_.a)(f.a.mark((function e(t){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c in n=[],t)n.push({id:c,name:t[c].name,description:t[c].description,price:t[c].price});a(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=v(),o=s.isLoading,l=s.hasError,u=s.func;if(Object(i.useEffect)((function(){u({url:"https://react-http-992d0-default-rtdb.firebaseio.com/meals.json"},c)}),[u]),o)return Object(j.jsx)("section",{className:T.a.MealsLoading,children:Object(j.jsx)("p",{children:"Loading..."})});if(l)return Object(j.jsx)("section",{className:T.a.MealsError,children:Object(j.jsx)("p",{children:l})});var d=n.map((function(e){return Object(j.jsx)(J,{meal:e},e.id)}));return Object(j.jsx)("section",{className:T.a.meals,children:Object(j.jsx)(A,{children:Object(j.jsx)("ul",{children:d})})})},q=n(22),U=n.n(q),W=function(){return Object(j.jsxs)("section",{className:U.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(j.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(j.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},Y=function(){return Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)(W,{}),Object(j.jsx)(z,{})]})},$=n(5),G=n.n($),Z=n(7),K=n.n(Z),Q=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:K.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:K.a.summary,children:[Object(j.jsx)("span",{className:K.a.price,children:t}),Object(j.jsxs)("span",{className:K.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:K.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},X=n(3),ee=n.n(X),te=function(e){var t=function(e){return 0!==e.trim().length},n=y(t),a=n.value,c=n.isValid,r=n.hasError,i=n.inputChangeHandler,s=n.inputBlurHandler,o=n.reset,l=y(t),u=l.value,d=l.isValid,m=l.hasError,b=l.inputChangeHandler,h=l.inputBlurHandler,O=l.reset,p=y((function(e){return 5===e.trim().length})),x=p.value,f=p.isValid,_=p.hasError,v=p.inputChangeHandler,C=p.inputBlurHandler,g=p.reset,N=y(t),S=N.value,A=N.isValid,E=N.hasError,I=N.inputChangeHandler,k=N.inputBlurHandler,w=N.reset,H=!1;c&&d&&f&&A&&(H=!0);var M="".concat(ee.a.control," ").concat(r?ee.a.invalid:""),B="".concat(ee.a.control," ").concat(m?ee.a.invalid:""),F="".concat(ee.a.control," ").concat(_?ee.a.invalid:""),T="".concat(ee.a.control," ").concat(E?ee.a.invalid:"");return Object(j.jsxs)("form",{className:ee.a.form,onSubmit:function(t){t.preventDefault(),E&&m&&_&&r||(e.onConfirm({name:a,street:u,postalCode:x,city:S}),o(),O(),g(),w())},children:[Object(j.jsxs)("div",{className:M,children:[Object(j.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(j.jsx)("input",{type:"text",id:"name",value:a,onBlur:s,onChange:i}),r&&Object(j.jsx)("p",{children:"Please enter your Name!"})]}),Object(j.jsxs)("div",{className:B,children:[Object(j.jsx)("label",{htmlFor:"street",children:"Street"}),Object(j.jsx)("input",{type:"text",id:"street",value:u,onBlur:h,onChange:b}),m&&Object(j.jsx)("p",{children:"Please enter valid Street!"})]}),Object(j.jsxs)("div",{className:F,children:[Object(j.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(j.jsx)("input",{type:"text",id:"postal",value:x,onBlur:C,onChange:v}),_&&Object(j.jsx)("p",{children:"Please enter valid Postal Code (at least 5 chars)!"})]}),Object(j.jsxs)("div",{className:T,children:[Object(j.jsx)("label",{htmlFor:"city",children:"City"}),Object(j.jsx)("input",{type:"text",id:"city",value:S,onBlur:k,onChange:I}),E&&Object(j.jsx)("p",{children:"Please enter your valid city!"})]}),Object(j.jsxs)("div",{className:ee.a.actions,children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{disabled:!H,className:H?ee.a.submit:"",children:"Confirm"})]})]})},ne=function(e){var t=v(),n=t.isSubmiting,a=t.didSubmit,c=t.func,s=Object(i.useState)(!1),o=Object(r.a)(s,2),l=o[0],u=o[1],m=Object(i.useContext)(d),b="$".concat(m.totalAmount.toFixed(2)),h=m.items.length>0,O=function(e){m.removeItem(e)},p=function(e){m.addItem(Object(E.a)(Object(E.a)({},e),{},{amount:1}))},x=Object(j.jsx)("ul",{className:G.a["cart-items"],children:m.items.map((function(e){return Object(j.jsx)(Q,{amount:e.amount,price:e.price,name:e.name,onRemove:O.bind(null,e.id),onAdd:p.bind(null,e)},e.id)}))}),f=Object(j.jsxs)("div",{className:G.a.actions,children:[Object(j.jsx)("button",{className:G.a["button--alt"],onClick:e.onClose,children:"Close"}),h&&Object(j.jsx)("button",{onClick:function(){u(!0)},className:G.a.button,children:"Order"})]}),_=Object(j.jsxs)(i.Fragment,{children:[x,Object(j.jsxs)("div",{className:G.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:b})]}),l&&Object(j.jsx)(te,{onConfirm:function(e){c({url:"https://react-http-992d0-default-rtdb.firebaseio.com/orders.json",method:"POST",body:{user:e,orderItems:m.items}}),m.clearCart()},onCancel:e.onClose}),!l&&f]}),C=Object(j.jsx)(i.Fragment,{children:Object(j.jsx)("p",{children:"Sending order data..."})}),g=Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)("p",{children:"Successfully send the order!"}),Object(j.jsx)("div",{className:G.a.actions,children:Object(j.jsx)("button",{className:G.a.button,onClick:e.onClose,children:"Close"})})]});return Object(j.jsxs)(B,{onShowCart:e.onClose,children:[!n&&!a&&_,n&&C,!n&&a&&g]})},ae=n(18),ce={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(E.a)(Object(E.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ae.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(E.a)(Object(E.a)({},l),{},{amount:l.amount-1});(s=Object(ae.a)(e.items))[o]=d}return"CLEAR"===t.type?ce:{items:s,totalAmount:u}}return ce},ie=function(e){var t=Object(i.useReducer)(re,ce),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(j.jsx)(d.Provider,{value:s,children:e.children})};var se=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],c=function(){a(!n)};return Object(j.jsxs)(ie,{children:[n&&Object(j.jsx)(ne,{onClose:c}),Object(j.jsx)(p,{onShowCart:c}),Object(j.jsx)(Y,{})]})};c.a.render(Object(j.jsx)(se,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.784514e9.chunk.js.map