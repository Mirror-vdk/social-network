(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[6],{313:function(e,s,t){e.exports={users_main:"Users_users_main__2agaH"}},314:function(e,s,t){e.exports={pages_block:"Paginator_pages_block__2t9hj",selectedPage:"Paginator_selectedPage__ofwHt",button:"Paginator_button__1GCVc"}},315:function(e,s,t){e.exports={userspage_main:"User_userspage_main__1w1VS",userspage_container:"User_userspage_container__TBHyI",users_block:"User_users_block__LlGzs",user_item:"User_user_item__2gISA",user_container:"User_user_container__cL1D6",avablock:"User_avablock__2wvBu",ava_item:"User_ava_item__1wHMp",user_avatar:"User_user_avatar__3y-sV",users_list:"User_users_list__D3bQF",user_body:"User_user_body__3ByxP",item:"User_item__2QwAU"}},332:function(e,s,t){"use strict";t.r(s);var r=t(55),n=t(56),a=t(58),o=t(57),i=t(0),c=t.n(i),l=t(14),u=t(132),g=t(88),_=t(313),d=t.n(_),p=t(298),j=t(314),b=t.n(j),h=t(1),f=function(e){for(var s=e.totalItemsCount,t=e.pageSize,r=e.onPageChanged,n=e.currentPage,a=e.portionSize,o=void 0===a?10:a,c=Math.ceil(s/t),l=[],u=1;u<=c;u++)l.push(u);var g=Math.ceil(c/o),_=Object(i.useState)(1),d=Object(p.a)(_,2),j=d[0],f=d[1],m=(j-1)*o+1,v=j*o;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:b.a.pages_block,children:[j>1&&Object(h.jsx)("button",{className:b.a.button,onClick:function(){f(j-1)},children:"\u041d\u0430\u0437\u0430\u0434"}),l.filter((function(e){return e>=m&&e<=v})).map((function(e){return Object(h.jsx)("div",{className:n===e&&b.a.selectedPage,onClick:function(){r(e)},children:e})})),g>j&&Object(h.jsx)("button",{className:b.a.button,onClick:function(){f(j+1)},children:"\u0412\u043f\u0435\u0440\u0435\u0434"})]})})},m=t(315),v=t.n(m),P=t(329),O=t(25),w=t(95),x=function(e){var s=e.user,t=e.followingInProgress,r=e.unfollow,n=e.follow;return Object(h.jsx)("div",{className:v.a.userspage_main,children:Object(h.jsx)("div",{className:v.a.users_block,children:Object(h.jsx)("div",{className:v.a.user_container,children:Object(h.jsxs)("div",{className:v.a.users_list,children:[Object(h.jsx)("div",{className:v.a.avablock,children:Object(h.jsx)("div",{className:v.a.ava_img,children:Object(h.jsx)(O.b,{to:"profile/"+s.id,children:Object(h.jsx)("img",{src:null!=s.photos.small?s.photos.small:w.a,className:v.a.user_avatar})})})}),Object(h.jsxs)("div",{className:v.a.user_body,children:[Object(h.jsxs)("div",{className:v.a.item,children:["\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ",s.name]}),Object(h.jsx)("div",{className:v.a.item,children:"\u0421\u0442\u0440\u0430\u043d\u0430: \u0420\u043e\u0441\u0441\u0438\u044f"}),Object(h.jsx)("div",{className:v.a.item,children:"\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u044b\u0439 \u043f\u0443\u043d\u043a\u0442: \u0412\u043b\u0430\u0434\u0438\u043a"}),Object(h.jsxs)("div",{className:v.a.ava_item,children:["\u0421\u0442\u0430\u0442\u0443\u0441 ",s.status]})]}),Object(h.jsx)("div",{className:v.a.item,children:s.followed?Object(h.jsx)(P.a,{disabled:t.some((function(e){return e===s.id})),onClick:function(){r(s.id)},variant:"outlined",color:"secondary",children:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"}):Object(h.jsx)(P.a,{disabled:t.some((function(e){return e===s.id})),onClick:function(){n(s.id)},color:"primary",variant:"outlined",children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})})]})})})},s.id)},C=function(e){var s=e.currentPage,t=e.onPageChanged,r=e.totalUsersCount,n=e.pageSize,a=e.users,o=Object(g.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{currentPage:s,onPageChanged:t,totalItemsCount:r,pageSize:n}),Object(h.jsx)("div",{className:d.a.users_main,children:a.map((function(e){return Object(h.jsx)(x,{user:e,follow:o.follow,followingInProgress:o.followingInProgress,unfollow:o.unfollow},e.id)}))})]})},U=t(96),k=t(10),N=function(e){return e.usersPage.users},S=function(e){return e.usersPage.pageSize},y=function(e){return e.usersPage.totalUsersCount},z=function(e){return e.usersPage.currentPage},I=function(e){return e.usersPage.isFetching},F=function(e){return e.usersPage.followingInProgress},H=function(e){Object(a.a)(t,e);var s=Object(o.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=s.call.apply(s,[this].concat(a))).onPageChanged=function(s){e.props.getUsers(s,e.props.pageSize)},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[this.props.isFetching?Object(h.jsx)(U.a,{}):null,Object(h.jsx)(C,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})]})}}]),t}(c.a.Component);s.default=Object(k.d)(Object(l.b)((function(e){return{users:N(e),pageSize:S(e),totalUsersCount:y(e),currentPage:z(e),isFetching:I(e),followingInProgress:F(e)}}),{follow:u.b,unfollow:u.f,setCurrentPage:u.d,toggleFollowingProgress:u.e,getUsers:u.c}))(H)}}]);
//# sourceMappingURL=6.7413a187.chunk.js.map