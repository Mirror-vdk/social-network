(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{106:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(40),a=n(3),c="dialogs/SEND-MESSAGE",i={messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442"},{id:2,message:"\u0418 \u0432\u0430\u043c \u0434\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c"},{id:3,message:"\u041a\u0430\u043a \u0432\u0430\u0448\u0438 \u0434\u0435\u043b\u0430?"},{id:4,message:"\u041e\u0442\u043b\u0438\u0447\u043d\u043e"},{id:5,message:"\u0423\u0447\u0438\u0448\u044c React?"}],dialogs:[{id:1,name:"\u0412\u0430\u0441\u044f"},{id:2,name:"\u041f\u0435\u0442\u044f"},{id:3,name:"\u041a\u043e\u043b\u044f"},{id:4,name:"\u041b\u0438\u043d\u0430"},{id:5,name:"\u0416\u0435\u043d\u044f"}]},s=function(e){return{type:c,newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageText;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},118:function(e,t,n){"use strict";t.a=n.p+"static/media/Choice_toxicity_icon.c07b4622.png"},132:function(e,t,n){"use strict";n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return x})),n.d(t,"c",(function(){return w})),n.d(t,"b",(function(){return I})),n.d(t,"f",(function(){return B}));var r=n(10),a=n.n(r),c=n(18),i=n(40),s=n(3),o=n(15),u=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(s.a)(Object(s.a)({},e),r):e}))},l="users/FOLLOW",d="users/UNFOLLOW",b="users/SET-USERS",f="users/SET_CURRENT_PAGE",j="users/TOTAL_COUNT",A="users/TOGGLE_IS_FETCHING",p="users/TOGGLE_IS_FOLLOWING_PROGRESS",g={users:[],pageSize:10,totalUsersCount:0,currentPage:5,isFetching:!1,followingInProgress:[]},h=function(e){return{type:l,userId:e}},O=function(e){return{type:d,userId:e}},m=function(e){return{type:f,currentPage:e}},v=function(e){return{type:A,isFetching:e}},x=function(e,t){return{type:p,isFetching:e,userId:t}},w=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(v(!0)),r(m(e)),n.next=4,o.c.getUsers(e,t);case 4:c=n.sent,r(v(!1)),r((i=c.items,{type:b,users:i})),r((a=c.totalCount,{type:j,totalUsersCount:a}));case 8:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()},C=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(c(n)),t(x(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),I=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:C(n,e,o.c.follow.bind(o.c),h);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},B=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:C(n,e,o.c.unfollow.bind(o.c),O);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case d:return Object(s.a)(Object(s.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case b:return Object(s.a)(Object(s.a)({},e),{},{users:t.users});case f:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case j:return Object(s.a)(Object(s.a)({},e),{},{totalUsersCount:t.totalUsersCount});case A:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case p:return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},137:function(e,t,n){e.exports={friends_container:"Friends_friends_container__Qf0aX"}},139:function(e,t,n){e.exports={preloader_img:"preloader_preloader_img__owHKA"}},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(133),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"84b20dbc-0158-43a6-a23d-5c748e05b719"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e),{})},unfollow:function(e){return a.delete("follow/".concat(e))}},i={me:function(){return a.get("auth/me")},login:function(e,t,n){return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}},s={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})}}},248:function(e,t,n){},249:function(e,t,n){},25:function(e,t,n){e.exports={login_main:"Login_login_main__2nsEH",login_block:"Login_login_block__1um8y",login_auth:"Login_login_auth__WnYuM",login_chekbox:"Login_login_chekbox__7CTB-",input_area:"Login_input_area__743g1",input:"Login_input__3ZUR1",formSummaryError:"Login_formSummaryError__1A0k9"}},26:function(e,t,n){e.exports={header:"Header_header__30Lgw",header_logo:"Header_header_logo__v0fHa",header_auth:"Header_header_auth__2dlKO",item:"Header_item__28ff2",item_button:"Header_item_button__1mBUk",ava:"Header_ava__1hIn7"}},293:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=(n(97),function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,328)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))}),i=n(9),s=n(94),o=n(106),u=n(3),l={friends:[{id:1,name:"\u0412\u0430\u0441\u044f"},{id:2,name:"\u041f\u0435\u0442\u044f"},{id:3,name:"\u041a\u043e\u043b\u044f"},{id:4,name:"\u041b\u0438\u043d\u0430"},{id:5,name:"\u0416\u0435\u043d\u044f"}]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=Object(u.a)({},e);return t},b=n(132),f=n(10),j=n.n(f),A=n(18),p=n(15),g=n(42),h="auth/SET_USER_DATA",O={userId:null,email:null,login:null,isFetching:!0,isAuth:!1},m=function(e,t,n,r){return{type:h,data:{userId:e,email:t,login:n,isAuth:r}}},v=function(){return function(){var e=Object(A.a)(j.a.mark((function e(t){var n,r,a,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,i=r.login,t(m(a,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(u.a)(Object(u.a)({},e),t.data);default:return e}},w=n(134),C=n(131),I="INITIALIZED_SUCCESS",B={initialized:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(u.a)(Object(u.a)({},e),{},{initialized:!0});default:return e}},T=Object(i.c)({profilePage:s.b,dialogsPage:o.a,sidebar:d,usersPage:b.a,auth:x,form:C.a,app:N}),k=Object(i.e)(T,Object(i.a)(w.a)),E=n(57),S=n.n(E),y=n(53),F=n(54),L=n(56),G=n(55),P=(n(248),n(249),n(1)),U=function(){return Object(P.jsx)("div",{className:"footer",children:"Footer"})},H=n(11),Q=n(31),_=n.n(Q),D=n(24),Y=n(137),K=n.n(Y),z=n(69),V=n.n(z),R=function(e){return Object(P.jsxs)("div",{className:V.a.friends_block,children:[Object(P.jsx)("div",{children:Object(P.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Choice_toxicity_icon.png",className:V.a.friends_ava})}),Object(P.jsx)("div",{className:V.a.friends_data,children:e.name})]})},Z=function(e){var t=e.friends.map((function(e){return Object(P.jsx)(R,{friend:e.friend,id:e.id,name:e.name})}));return Object(P.jsxs)("div",{className:K.a.friends_container,children:[Object(P.jsx)("h1",{children:"\u0414\u0440\u0443\u0437\u044c\u044f"}),Object(P.jsx)("div",{children:t})]})},q=n(12),M=Object(q.b)((function(e){return{friends:e.sidebar.friends}}))(Z),X=function(e){return Object(P.jsxs)("aside",{className:_.a.sidebar,children:[Object(P.jsx)("div",{className:_.a.item,children:Object(P.jsx)(D.b,{to:"/profile",activeClassName:_.a.activeLink,children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}),Object(P.jsx)("div",{className:_.a.item,children:Object(P.jsx)(D.b,{to:"/dialogs",activeClassName:_.a.activeLink,children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})}),Object(P.jsx)("div",{className:_.a.item,children:Object(P.jsx)(D.b,{to:"/users",activeClassName:_.a.activeLink,children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),Object(P.jsx)(M,{})]})},W=Object(q.b)((function(e){return{sidebar:e.sidebar}}))(X),J=n(26),$=n.n(J),ee=n(118),te=function(e){return Object(P.jsxs)("header",{className:$.a.header,children:[Object(P.jsx)("div",{className:$.a.header_logo,children:"logo"}),Object(P.jsx)("div",{className:$.a.header_auth,children:e.isAuth?Object(P.jsxs)("div",{className:$.a.item,children:[e.login," ",Object(P.jsx)("img",{src:ee.a,className:$.a.ava})," ",Object(P.jsx)("button",{onClick:e.logout,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(P.jsx)("button",{className:$.a.item_button,children:Object(P.jsx)(D.b,{to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})})})]})},ne=function(e){Object(L.a)(n,e);var t=Object(G.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(F.a)(n,[{key:"render",value:function(){return Object(P.jsx)(te,Object(u.a)({},this.props))}}]),n}(a.a.Component),re=Object(q.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(A.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.logout();case 2:0===e.sent.data.resultCode&&t(m(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ne),ae=n(25),ce=n.n(ae),ie=n(130),se=n(41),oe=n(65),ue=Object(ie.a)({form:"login"})((function(e){return Object(P.jsx)("form",{onSubmit:e.handleSubmit,children:Object(P.jsxs)("div",{className:ce.a.login_block,children:[Object(P.jsx)("h1",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(P.jsx)("div",{className:ce.a.input_area,children:Object(se.c)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d",[oe.b],"email",se.a,ce.a.input)}),Object(P.jsx)("div",{className:ce.a.input_area,children:Object(se.c)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",[oe.b],"password",se.a,ce.a.input,{type:"password"})}),e.error&&Object(P.jsx)("div",{className:ce.a.formSummaryError,children:e.error}),Object(P.jsxs)("div",{className:ce.a.login_auth,children:[Object(se.c)(null,null,"rememberMe","Input",ce.a.login_chekbox,{type:"checkbox"},"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c"),Object(P.jsx)("div",{children:Object(P.jsx)("button",{children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})})})),le=Object(q.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(A.a)(j.a.mark((function r(a){var c,i;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(v()):(i=c.data.messages.length>0?c.data.messages[0]:"1",a(Object(g.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(P.jsx)(H.a,{to:"/profile"}):Object(P.jsx)("div",{className:ce.a.login_main,children:Object(P.jsx)(ue,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})})})),de=n(96),be=function(e){return function(t){return Object(P.jsx)(r.Suspense,{fallback:Object(P.jsx)(de.a,{}),children:Object(P.jsx)(e,Object(u.a)({},t))})}},fe=a.a.lazy((function(){return n.e(4).then(n.bind(null,330))})),je=a.a.lazy((function(){return n.e(5).then(n.bind(null,331))})),Ae=a.a.lazy((function(){return Promise.all([n.e(3),n.e(6)]).then(n.bind(null,332))})),pe=function(e){Object(L.a)(n,e);var t=Object(G.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(F.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(P.jsxs)("div",{className:"wrapper",children:[Object(P.jsx)(re,{}),Object(P.jsx)(W,{}),Object(P.jsx)(U,{}),Object(P.jsxs)("div",{className:"wrapper_content",children:[Object(P.jsx)(H.b,{path:"/profile/:userId?",render:be(fe)}),Object(P.jsx)(H.b,{path:"/dialogs",render:be(je)}),Object(P.jsx)(H.b,{path:"/users",render:be(Ae)}),Object(P.jsx)(H.b,{path:"/login",render:function(){return Object(P.jsx)(le,{})}})]})]}):Object(P.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"})}}]),n}(r.Component),ge=Object(i.d)(H.f,Object(q.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(v());Promise.all([t]).then((function(){e({type:I})}))}}}))(pe);S.a.render(Object(P.jsx)(D.a,{children:Object(P.jsx)(q.a,{store:k,children:Object(P.jsx)(ge,{})})}),document.getElementById("root")),c()},31:function(e,t,n){e.exports={sidebar:"Navbar_sidebar__1itGS",item:"Navbar_item__ZrewZ",activeLink:"Navbar_activeLink__3Itbd"}},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return b}));var r=n(3),a=n(88),c=(n(0),n(52)),i=n.n(c),s=(n(65),n(129)),o=n(1),u=function(e){e.input;var t=e.meta,n=t.error,r=t.touched,a=e.children,c=n&&r;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[a,c&&Object(o.jsx)("img",{src:"data:image/png;base64,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",className:i.a.formControl+" "+i.a.error})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},b=function(e,t,n,a,c){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(s.a,Object(r.a)({placeholder:e,validate:t,name:n,component:a,className:c},i)),u]})}},52:function(e,t,n){e.exports={formControl:"FormControls_formControl__2qpUL",error:"FormControls_error__qQGUU"}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"},a=function(e){return function(t){if(t.length>e)return"Max length ".concat(e," symbols")}}},69:function(e,t,n){e.exports={friends_block:"Friend_friends_block__36EAh",friends_ava:"Friend_friends_ava__1M2o0",friends_data:"Friend_friends_data__bUug-"}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"e",(function(){return h}));var r=n(10),a=n.n(r),c=n(18),i=n(40),s=n(3),o=n(15),u=" profile/ADD-POST",l="profile/SET_USER_PROFILE",d="profile/SET_STATUS",b="profile/DELETE_POST",f={posts:[{id:1,post:"\u041f\u0440\u0438\u0432\u0435\u0442",likesCount:25},{id:2,post:"\u0418 \u0432\u0430\u043c \u0434\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c",likesCount:1},{id:3,post:"\u041a\u0430\u043a \u0432\u0430\u0448\u0438 \u0434\u0435\u043b\u0430?",likesCount:5},{id:4,post:"\u041e\u0442\u043b\u0438\u0447\u043d\u043e",likesCount:211},{id:5,post:"\u0423\u0447\u0438\u0448\u044c React?",likesCount:255}],profile:null,status:""},j=function(e){return{type:u,newPostText:e}},A=function(e){return{type:d,status:e}},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(A(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(A(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:6,post:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n]),newPostText:" "});case b:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case l:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case d:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});default:return e}}},96:function(e,t,n){"use strict";n(0);var r=n(139),a=n.n(r),c=n.p+"static/media/831.e3b9a6b4.gif",i=n(1);t.a=function(e){return Object(i.jsx)("img",{className:a.a.preloader_img,src:c})}},97:function(e,t,n){}},[[293,1,2]]]);
//# sourceMappingURL=main.ccc451ac.chunk.js.map