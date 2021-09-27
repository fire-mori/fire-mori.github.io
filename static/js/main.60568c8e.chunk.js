(this["webpackJsonphorse-app"]=this["webpackJsonphorse-app"]||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(32),c=n.n(i),o=(n(109),n(110),n(19)),s=n(11),l=n(13),d=n(31),u=n(15),h=n.n(u),j=n(16),f=n(21),b="https://faml-horses-api.herokuapp.com",O={FETCH_HORSES_BEGIN:"FETCH_HORSES_BEGIN",FETCH_HORSES_SUCCESS:"FETCH_HORSES_SUCCESS",FETCH_HORSES_FAILURE:"FETCH_HORSES_FAILURE",HORSE_UPDATED:"HORSE_UPDATED",HORSE_UPDATED_FAILED:"HORSE_UPDATED_FAILED",HORSE_DELETED:"HORSE_DELETED",ADD_HORSE:"ADD_HORSE",HORSE_ADD_FAILED:"HORSE_ADD_FAILED"};function p(){return function(e){return e({type:O.FETCH_HORSES_BEGIN}),fetch("".concat(b,"/horse")).then((function(e){return e.json()})).then((function(e){return e})).then((function(t){return e({type:O.FETCH_HORSES_SUCCESS,payload:t}),t})).catch((function(t){return e(function(e){return{type:O.FETCH_HORSES_FAILURE,payload:e}}(t))}))}}var x,m=function(e,t){return function(n){fetch("".concat(b,"/horse/").concat(t),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(){n(function(e){return{type:O.HORSE_UPDATED,payload:e}}(e))})).catch((function(e){n(function(e){return{type:O.HORSE_UPDATED_FAILED,payload:e}}(e))}))}},g=function(e){return function(t){fetch("".concat(b,"/horse"),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(function(){var n=Object(f.a)(h.a.mark((function n(r){var a,i;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.json();case 2:a=n.sent,i=Object(j.a)({id:String(a)},e),t({type:O.ADD_HORSE,payload:i});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(e){t(function(e){return{type:O.HORSE_ADD_FAILED,payload:e}}(e))}))}},C=n(176),v=n(177),E=n(175),S=n(174),y=n(178),F=n(35),H=["title","titleId"];function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function D(e,t){var n=e.title,a=e.titleId,i=w(e,H);return r.createElement("svg",_({width:94,height:94,viewBox:"0 0 94 94",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,x||(x=r.createElement("path",{d:"M46.728 0C20.962 0 0 20.962 0 46.729C0 72.493 20.962 93.456 46.728 93.456C72.494 93.456 93.456 72.493 93.456 46.729C93.455 20.961 72.493 0 46.728 0ZM87.408 55.983C82.828 50.266 81.096 42.265 79.943 41.164C78.351 39.64 75.65 34.93 76.273 34.999C76.535 35.028 76.859 34.861 77.144 34.658C77.578 34.352 77.308 33.894 76.689 33.567C75.269 32.819 72.976 30.947 72.185 26.479C71.22 21.033 61.986 16.656 58.675 15.249C58.029 14.975 57.884 14.363 58.084 13.692C58.606 11.94 58.991 8.722 58.33 9.23C57.431 9.923 58.054 10.823 56.668 11.516C55.962 11.869 55.202 12.456 54.626 12.947C54.095 13.401 53.321 13.709 52.86 13.743C52.401 13.778 51.74 13.707 51.348 13.421C50.957 13.134 50.671 13.32 50.709 13.837C50.747 14.353 50.354 15.147 49.854 15.637C48.565 16.9 47.974 17.775 47.729 18.373C47.463 19.021 47.436 19.986 47.002 20.536C43.605 24.849 39.574 31.381 38.933 32.921C38.717 33.441 38.704 33.838 38.787 34.14C38.972 34.805 39.475 35.6 39.735 36.25C40.177 37.355 41.597 37.183 42.465 37.562C43.574 38.047 47.799 38.255 46.968 36.731C46.491 35.857 47.268 35.051 48.017 34.523C48.589 34.119 49.579 33.551 50.237 33.307C51.987 32.656 54.243 32.665 56.043 31.259C58.26 29.527 57.014 39.017 56.734 40.264C56.459 41.511 54.588 45.598 52.164 48.507C50.894 50.03 50.631 51.287 50.669 52.14C50.699 52.839 50.423 53.439 49.751 53.637C49.053 53.842 47.992 54.197 46.414 54.812C42.674 56.267 35.608 55.574 31.452 58.275C27.296 60.976 23.417 59.73 21.547 61.945C19.677 64.163 17.391 62.568 16.905 64.103C16.421 65.638 13.858 65.824 13.373 66.863C12.888 67.902 18.152 69.564 19.192 69.634C19.996 69.689 21.216 68.993 21.886 67.777C22.224 67.165 22.355 65.902 22.958 65.547C23.185 65.414 23.441 65.358 23.695 65.343C24.395 65.307 25.257 65.065 25.808 64.635C27.332 63.447 30.182 62.332 32.282 61.393C34.914 60.215 34.844 62.225 37.132 61.325C38.527 60.774 40.283 60.948 41.44 61.166C42.128 61.296 42.229 61.831 41.862 62.428C40.898 64 40.073 66.859 41.634 68.044C43.644 69.567 45.305 78.435 47.315 78.919C49.323 79.403 50.639 81.204 51.816 81.827C52.505 82.192 53.716 82.889 54.601 83.405C55.206 83.757 55.912 83.526 55.943 82.827C55.976 82.104 55.964 80.956 55.835 79.127C55.488 74.209 50.432 78.019 51.057 77.049C51.68 76.079 50.156 75.87 47.661 72.339C45.167 68.806 44.336 64.373 48.701 65.62C51.652 66.464 54.637 66.166 56.26 65.885C56.948 65.765 57.906 66.014 58.414 66.495C64.923 72.647 69.965 76.17 73.812 78.433C66.517 84.676 57.056 88.459 46.723 88.459C23.714 88.459 4.995 69.739 4.995 46.732C4.995 23.723 23.714 5.004 46.723 5.004C69.732 5.004 88.453 23.72 88.453 46.729C88.455 49.909 88.085 53.003 87.408 55.983Z",fill:"black"})))}var R,T,A,I=r.forwardRef(D),P=(n.p,n(54)),k=Object(P.a)(I)(R||(R=Object(F.a)(["\n  margin: auto 10px;\n  padding: 20px 0px;\n\n  path {\n    fill: ",";\n  }\n"])),(function(e){return e.color})),L=n(165),U=n(62),N=n(2),W=Object(d.b)(null,(function(e){return{editHorse:function(t,n){return e(m(t,n))}}}))((function(e){var t=e.horse,n=e.onSave,r=t.id,a=t.name,i=t.profile,c=Object(U.a)(),o=c.register,s=c.handleSubmit,l=c.trigger,u=c.formState.errors,b=Object(d.c)(),O=function(){var e=Object(f.a)(h.a.mark((function e(a){var i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("name");case 2:e.sent&&(i={id:r,name:a.name,profile:{favouriteFood:a.favouriteFood,physical:{height:Number(a.height),weight:Number(a.weight)}}},b(m(i,t.id)),n());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)("div",{style:{width:"80%"},children:Object(N.jsxs)("form",{onSubmit:s(O),children:[Object(N.jsx)(L.a,Object(j.a)(Object(j.a)({},o("name",{required:!0})),{},{name:"name",defaultValue:a,autoFocus:!0,margin:"dense",id:"name",label:"Name*",type:"text",fullWidth:!0,variant:"standard",error:!!u.name,helperText:!!u.name&&"Please fill required field"})),Object(N.jsx)(L.a,Object(j.a)(Object(j.a)({},o("favouriteFood")),{},{name:"favouriteFood",defaultValue:i.favouriteFood,margin:"dense",id:"name",label:"Favourite food",type:"text",fullWidth:!0,variant:"standard"})),Object(N.jsx)(L.a,Object(j.a)(Object(j.a)({},o("weight")),{},{name:"weight",defaultValue:i.physical.weight,margin:"dense",id:"name",label:"Weight",type:"text",fullWidth:!0,variant:"standard"})),Object(N.jsx)(L.a,Object(j.a)(Object(j.a)({},o("height")),{},{name:"height",defaultValue:i.physical.height,margin:"dense",id:"name",label:"Height",type:"text",fullWidth:!0,variant:"standard"})),Object(N.jsx)(S.a,{sx:{marginTop:"20px"},variant:"contained",type:"submit",children:"Submit"})]})})})),B=function(e){var t=e.horse.profile,n=t.favouriteFood,r=t.physical;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(E.a,{sx:{fontSize:14},color:"text.secondary",children:["favourite food: ",n]}),Object(N.jsxs)(E.a,{sx:{fontSize:14},color:"text.secondary",children:["weight:"," ",r.weight&&0!==r.weight?r.weight:null]}),Object(N.jsxs)(E.a,{sx:{fontSize:14},color:"text.secondary",children:["height:"," ",r.height&&0!==r.height?r.height:null]})]})},z=function(e){var t=e.horse,n=e.addToCompare,a=e.removeFromCompare,i=e.selected,c=t.name,o=r.useState(!1),s=Object(l.a)(o,2),d=s[0],u=s[1],h=r.useState(!1),j=Object(l.a)(h,2),f=j[0],b=j[1];return Object(N.jsxs)(C.a,{onClick:function(){!f&&u(!d)},sx:{minWidth:275,flexDirection:"row",display:"flex",position:"relative",outline:i&&i.includes(t)?"1px solid #9c27b0":"unset"},children:[Object(N.jsx)(k,{color:i&&i.includes(t)?"#9c27b0":"#1976d2"}),Object(N.jsxs)(v.a,{sx:d?null:{alignItems:"center",display:"flex"},children:[!f&&Object(N.jsxs)(E.a,{sx:{fontSize:24,marginBottom:0},color:"text.primary",gutterBottom:!0,children:[c,i&&i.includes(t)?Object(N.jsx)(S.a,{color:"secondary",onClick:function(e){e.stopPropagation(),a(t)},sx:{marginLeft:"10px"},children:"Remove from compare table"}):Object(N.jsx)(S.a,{color:"primary",onClick:function(e){n(t),e.stopPropagation()},sx:{marginLeft:"10px"},disabled:Boolean(i.length>=2),children:"Add to compare table"})]}),d&&!f&&Object(N.jsx)(B,{horse:t}),f&&Object(N.jsx)(W,{horse:t,onSave:function(){return b(!1)}})]}),Object(N.jsx)(y.a,{sx:{position:"absolute",bottom:10,right:10},color:f?"secondary":"primary","aria-label":"edit",onClick:function(){b(!f)},children:f?"Exit":"Edit"})]})},q=n(172),G=n(167),J=n(179),V=n(173),M=n(180),Z=n(181),K=n(182),Q=n(183),X=n(184),Y=function(e){var t=e.horses,n=t.map((function(e){var t=e.profile,n=e.name,r=t.favouriteFood,a=t.physical;return function(e,t,n,r){return{name:e,favouriteFood:t,weight:n,height:r}}(n,r,a.weight,a.height)}));return Object(N.jsx)(J.a,{component:V.a,sx:{marginBottom:"40px",width:"100%"},children:Object(N.jsxs)(M.a,{"aria-label":"customized table",children:[Object(N.jsx)(Z.a,{sx:{backgroundColor:"#1976d2"},children:Object(N.jsxs)(K.a,{children:[Object(N.jsx)(Q.a,{sx:{color:"#ffffff"},children:"Horse name"}),Object(N.jsx)(Q.a,{sx:{color:"#ffffff"},align:"right",children:"Favourite food"}),Object(N.jsx)(Q.a,{sx:{color:"#ffffff"},align:"right",children:"Weight"}),Object(N.jsx)(Q.a,{sx:{color:"#ffffff"},align:"right",children:"Height"})]})}),Object(N.jsx)(X.a,{children:n.map((function(e){return Object(N.jsxs)(K.a,{children:[Object(N.jsx)(Q.a,{component:"th",scope:"row",children:e.name}),Object(N.jsx)(Q.a,{align:"right",children:e.favouriteFood}),Object(N.jsx)(Q.a,{align:"right",children:e.weight}),Object(N.jsx)(Q.a,{align:"right",children:e.height})]},e.name)}))})]})})},$=n(171),ee=n(185),te=n(186),ne=n(187),re=Object(d.b)(null,(function(e){return{addHorse:function(t){return e(g(t))}}}))((function(e){var t=e.open,n=e.handleClose,r=Object(U.a)(),a=r.register,i=r.handleSubmit,c=r.trigger,o=r.formState.errors,s=Object(d.c)(),l=function(){var e=Object(f.a)(h.a.mark((function e(t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("name");case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:r={name:t.name,profile:{favouriteFood:t.favouriteFood,physical:{height:Number(t.height),weight:Number(t.weight)}}},s(g(r)),n();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)($.a,{open:t,onClose:n,children:Object(N.jsxs)("form",{onSubmit:i(l),children:[Object(N.jsx)(ee.a,{children:"Add horse"}),Object(N.jsxs)(te.a,{children:[Object(N.jsx)(L.a,Object(j.a)(Object(j.a)({},a("name",{required:!0})),{},{name:"name",autoFocus:!0,margin:"dense",id:"name",label:"Name *",type:"text",fullWidth:!0,variant:"standard",error:!!o.name,helperText:!!o.name&&"Please fill required field"})),Object(N.jsx)(L.a,Object(j.a)(Object(j.a)({},a("favouriteFood")),{},{name:"favouriteFood",margin:"dense",id:"name",label:"Favourite food",type:"text",fullWidth:!0,variant:"standard"})),Object(N.jsx)(L.a,Object(j.a)(Object(j.a)({},a("weight")),{},{name:"weight",margin:"dense",id:"name",label:"Weight",type:"text",fullWidth:!0,variant:"standard"})),Object(N.jsx)(L.a,Object(j.a)(Object(j.a)({},a("height")),{},{name:"height",margin:"dense",id:"name",label:"Height",type:"text",fullWidth:!0,variant:"standard"}))]}),Object(N.jsxs)(ne.a,{children:[Object(N.jsx)(S.a,{onClick:n,children:"Cancel"}),Object(N.jsx)(S.a,{type:"submit",children:"Add"})]})]})})})),ae=Object(d.b)((function(e){return{horses:e.horses}}))((function(e){var t=e.horses,n=Object(d.c)(),r=10;a.a.useEffect((function(){n(p())}),[n]);var i=t.error,c=t.loading,o=t.items,u=a.a.useState(1),h=Object(l.a)(u,2),j=h[0],f=h[1],b=a.a.useState(o.slice(0,r)),O=Object(l.a)(b,2),x=O[0],m=O[1],g=a.a.useState(!1),C=Object(l.a)(g,2),v=C[0],E=C[1],S=a.a.useState([]),F=Object(l.a)(S,2),H=F[0],_=F[1];a.a.useEffect((function(){m(o.slice(0,r))}),[o,r]);var w=function(e){_((function(t){return[].concat(Object(s.a)(t),[e])}))},D=function(e){var t=H.filter((function(t){return t.id!==e.id}));_((function(e){return t}))};if(i)return Object(N.jsxs)("div",{children:["Error! ",i.message]});if(c)return Object(N.jsx)("div",{children:"Loading..."});return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{style:{width:"50%",height:"200px"},children:H.length>0?Object(N.jsx)(Y,{horses:H}):Object(N.jsx)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"168px",backgroundColor:"#dddddd",borderRadius:"10px"},children:"Please pick 2 items to compare"})}),Object(N.jsxs)(q.a,{sx:{width:"50%",position:"relative"},container:!0,spacing:2,children:[x.map((function(e){return Object(N.jsx)(q.a,{item:!0,xs:12,children:Object(N.jsx)(z,{horse:e,addToCompare:w,removeFromCompare:D,selected:H})},e.id)})),(null===o||void 0===o?void 0:o.length)>r&&Object(N.jsx)(G.a,{sx:{margin:"20px auto"},count:Math.ceil(o.length/r),page:j,onChange:function(e,t){return f(n=t),void m(o.slice(0+r*(n-1),r*n));var n}})]}),Object(N.jsx)(y.a,{sx:{position:"fixed",bottom:10,right:10},color:"primary","aria-label":"add",onClick:function(){E(!0)},children:"Add"}),v&&Object(N.jsx)(re,{handleClose:function(){return E(!1)},open:v})]})})),ie=P.a.div(T||(T=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 0px;\n  height: 100%;\n"]))),ce=P.a.h1(A||(A=Object(F.a)(["\n  padding: 40px;\n  font-size: 64px;\n"]))),oe=function(){return Object(N.jsxs)(ie,{children:[Object(N.jsx)(ce,{children:"Horses"}),Object(N.jsx)(ae,{})]})};var se=function(){return Object(N.jsx)("div",{style:{height:"100%"},className:"App",children:Object(N.jsx)(o.a,{component:oe,path:"/",exact:!0})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,188)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))},de=n(55),ue=n(92),he=n.n(ue),je={items:[],loading:!1,error:null};var fe=Object(de.b)({horses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.FETCH_HORSES_BEGIN:return Object(j.a)(Object(j.a)({},e),{},{loading:!0,error:null});case O.FETCH_HORSES_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,items:t.payload});case O.FETCH_HORSES_FAILURE:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:t.payload,items:[]});case O.HORSE_UPDATED:return Object(j.a)(Object(j.a)({},e),{},{items:Object(s.a)(e.items).map((function(e){return e.id===t.payload.id?t.payload:e}))});case O.ADD_HORSE:return Object(j.a)(Object(j.a)({},e),{},{items:Object(s.a)(e.items).concat(t.payload)});default:return e}}}),be=n(93),Oe=[he.a,be.a],pe=Object(de.c)(fe,de.a.apply(void 0,Oe)),xe=n(71);c.a.render(Object(N.jsx)(d.a,{store:pe,children:Object(N.jsx)(xe.a,{children:Object(N.jsx)(se,{})})}),document.getElementById("root")),le()}},[[126,1,2]]]);
//# sourceMappingURL=main.60568c8e.chunk.js.map