"use strict";(self.webpackChunkreact_ecommerce=self.webpackChunkreact_ecommerce||[]).push([[137],{5137:function(e,s,c){c.r(s);var t=c(2791),r=c(4458),n=c(7022),a=c(9743),l=c(2677),i=c(184);s.default=function(){var e=(0,t.useContext)(r.c),s=e.CartItem,c=e.setCartItem,d=e.addToCart,m=e.decreaseQty,o=e.deleteProduct,h=s.reduce((function(e,s){return e+s.qty*s.price}),0);return(0,t.useEffect)((function(){if(window.scrollTo(0,0),0===s.length){var e=localStorage.getItem("cartItem");c(JSON.parse(e))}}),[]),(0,i.jsx)("section",{className:"cart-items",children:(0,i.jsx)(n.Z,{children:(0,i.jsxs)(a.Z,{className:"justify-content-center",children:[(0,i.jsxs)(l.Z,{md:8,children:[0===s.length&&(0,i.jsx)("h1",{className:"no-items product",children:"No Items are add in Cart"}),s.map((function(e){var s=e.price*e.qty;return(0,i.jsx)("div",{className:"cart-list",children:(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(l.Z,{className:"image-holder",sm:4,md:3,children:(0,i.jsx)("img",{src:e.imgUrl,alt:""})}),(0,i.jsx)(l.Z,{sm:8,md:9,children:(0,i.jsxs)(a.Z,{className:"cart-content justify-content-center",children:[(0,i.jsxs)(l.Z,{xs:12,sm:9,className:"cart-details",children:[(0,i.jsx)("h3",{children:e.productName}),(0,i.jsxs)("h4",{children:["$",e.price,".00 * ",e.qty,(0,i.jsxs)("span",{children:["$",s,".00"]})]})]}),(0,i.jsxs)(l.Z,{xs:12,sm:3,className:"cartControl",children:[(0,i.jsx)("button",{className:"incCart",onClick:function(){return d(e)},children:(0,i.jsx)("i",{className:"fa-solid fa-plus"})}),(0,i.jsx)("button",{className:"desCart",onClick:function(){return m(e)},children:(0,i.jsx)("i",{className:"fa-solid fa-minus"})})]})]})}),(0,i.jsx)("button",{className:"delete",onClick:function(){return o(e)},children:(0,i.jsx)("ion-icon",{name:"close"})})]})},e.id)}))]}),(0,i.jsx)(l.Z,{md:4,children:(0,i.jsxs)("div",{className:"cart-total",children:[(0,i.jsx)("h2",{children:"Cart Summary"}),(0,i.jsxs)("div",{className:" d_flex",children:[(0,i.jsx)("h4",{children:"Total Price :"}),(0,i.jsxs)("h3",{children:["$",h,".00"]})]})]})})]})})})}}}]);
//# sourceMappingURL=137.65fe2f5a.chunk.js.map