(this.webpackJsonplocal_deal=this.webpackJsonplocal_deal||[]).push([[14],{129:function(e,t,n){"use strict";var r=n(51),o=n(53),a=n(0),i=n.n(a),l=n(54),c=(n(52),n(177)),s=n(55),u=n(73),p=n(74),d=n(63),m=i.a.forwardRef((function(e,t){var n=e.children,a=e.classes,s=e.className,m=e.collapsedHeight,f=void 0===m?"0px":m,h=e.component,y=void 0===h?"div":h,E=e.in,g=e.onEnter,b=e.onEntered,C=e.onEntering,v=e.onExit,k=e.onExiting,I=e.style,O=e.timeout,x=void 0===O?u.b.standard:O,F=Object(o.a)(e,["children","classes","className","collapsedHeight","component","in","onEnter","onEntered","onEntering","onExit","onExiting","style","timeout"]),j=Object(d.a)(),T=i.a.useRef(),w=i.a.useRef(null),L=i.a.useRef(),D="number"===typeof f?"".concat(f,"px"):f;i.a.useEffect((function(){return function(){clearTimeout(T.current)}}),[]);return i.a.createElement(c.a,Object(r.a)({in:E,onEnter:function(e,t){e.style.height=D,g&&g(e,t)},onEntered:function(e,t){e.style.height="auto",b&&b(e,t)},onEntering:function(e,t){var n=w.current?w.current.clientHeight:0,r=Object(p.a)({style:I,timeout:x},{mode:"enter"}).duration;if("auto"===x){var o=j.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(o,"ms"),L.current=o}else e.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");e.style.height="".concat(n,"px"),C&&C(e,t)},onExit:function(e){var t=w.current?w.current.clientHeight:0;e.style.height="".concat(t,"px"),v&&v(e)},onExiting:function(e){var t=w.current?w.current.clientHeight:0,n=Object(p.a)({style:I,timeout:x},{mode:"exit"}).duration;if("auto"===x){var r=j.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(r,"ms"),L.current=r}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height=D,k&&k(e)},addEndListener:function(e,t){"auto"===x&&(T.current=setTimeout(t,L.current||0))},timeout:"auto"===x?null:x},F),(function(e,o){return i.a.createElement(y,Object(r.a)({className:Object(l.a)(a.container,s,{entered:a.entered,exited:!E&&"0px"===D&&a.hidden}[e]),style:Object(r.a)({minHeight:D},I),ref:t},o),i.a.createElement("div",{className:a.wrapper,ref:w},i.a.createElement("div",{className:a.wrapperInner},n)))}))}));m.muiSupportAuto=!0,t.a=Object(s.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(m)},41:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n(2),o=n(3),a=n(4),i=n(10),l=n(9),c=n(11),s=n(0),u=n.n(s),p=n(58),d=n(56),m=n(129),f=n(16),h=n(65),y=function(e){function t(){var e,n,r=this;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).BottomToolBar=function(){return u.a.createElement(p.a,{isFlexDirectionRow:!0,style:E.bottonToolBar},n.props.bottomToolBarContent,u.a.createElement(r.ExpandSign,null))},n.ExpandSign=function(){return n.props.allowExpand?n.props.expanded?u.a.createElement(h.a,{onClick:n.props.onClickExpandSign,type:"expandLess"}):u.a.createElement(h.a,{onClick:n.props.onClickExpandSign,type:"expandMore"}):null},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return u.a.createElement(p.a,{style:Object(r.a)({},E.rootContainer,{textAlign:"start"})},u.a.createElement(m.a,{in:this.props.expanded},u.a.createElement(p.a,{style:this.props.allowExpand?E.collapsedContentContainer:E.empty},this.props.children)),u.a.createElement(this.BottomToolBar,null))}}]),t}(f.a),E={bottonToolBar:{justifyContent:"space-between",marginTop:10,width:"inherit"},collapsedContentContainer:{paddingBottom:15,paddingTop:15},empty:{},expandSignButton:{backgroundColor:d.a.color.primaryColorTransparent,padding:0},rootContainer:{width:"inherit"}}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",o={button:{borderRadius:15},color:{black:"black",blueTransparent:"rgba(0,132,255,.1)",blueTransparentSemi:"rgba(16, 137, 254,1)",green:"#5CC928",greenMedium:"#1EA362",greyDark:"#7D7D7D",greyLight:"#f6f6f6",greyTransparent:"rgba(12, 12, 12, .1)",orange:"#FF4F00",orangeGradient:r,orangeTransparent:"rgb(255, 168, 128, .1)",primaryColor:"#FF4F00",primaryGradient:r,primaryColorTransparent:"rgb(255, 168, 128, .1)",red:"EA4335",redDark:"#DA4B3C",secondaryColor:"#7D7D7D",secondaryColorTransparent:"rgba(12, 12, 12, .1)",systemError:"#F44436",systemInform:"#2196F3",systemSuccess:"#4CAF51",systemWarn:"#FF9800",white:"#FFFFFF"},common:{borderColor:"#f6f6f6"},dimension:{FILL_ALL_HEIGHT:"-webkit-fill-available",FILL_ALL_WIDTH:"-webkit-fill-available"},font:{fontSize:16,primaryFont:"sans-serif"},remind:{primaryColor:"#5CC928",secondaryColor:"#007AFF"},textField:{borderColor:"#007AFF",borderRadius:15,borderWidth:2}}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(3),o=n(4),a=n(10),i=n(9),l=n(11),c=n(0),s=n.n(c),u=n(16),p=n(198),d=function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(p.a,Object.assign({display:"flex",flexDirection:this.props.isFlexDirectionRow?"row":"column",alignItems:this.props.alignItems?this.props.alignItems:"start",justifyContent:this.props.justifyContent?this.props.justifyContent:"start",onClick:function(){return e.props.onClick?e.props.onClick():{}}},this.props),this.props.children)}}]),t}(u.a)},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return J}));var r=n(2),o=n(3),a=n(4),i=n(10),l=n(9),c=n(11),s=n(0),u=n.n(s),p=n(78),d=n.n(p),m=n(79),f=n.n(m),h=n(80),y=n.n(h),E=n(81),g=n.n(E),b=n(82),C=n.n(b),v=n(84),k=n.n(v),I=n(83),O=n.n(I),x=n(85),F=n.n(x),j=n(86),T=n.n(j),w=n(88),L=n.n(w),D=n(89),S=n.n(D),B=n(90),A=n.n(B),H=n(87),M=n.n(H),R=n(91),z=n.n(R),W=n(56),_=n(202),N=n(199),G=n(55),J=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).AddIcon=function(){return u.a.createElement(d.a,{onClick:n.props.onClick,style:Object(r.a)({},P.add,{},n.props.style)})},n.AddLargeIcon=function(){return u.a.createElement(d.a,{onClick:n.props.onClick,style:Object(r.a)({},P.addLarge,{},n.props.style)})},n.ButtonWrapper=function(e){var t=e.children;return u.a.createElement(V,{onClick:n.props.onClick,style:P.buttonStyle},t)},n.CloseIcon=function(){return u.a.createElement(f.a,{onClick:n.props.onClick,style:P.close})},n.EditIcon=function(){return u.a.createElement(y.a,{onClick:n.props.onClick,style:P.edit})},n.ExpandLessIcon=function(){return u.a.createElement(g.a,{onClick:n.props.onClick,style:P.expand})},n.ExpandMoreIcon=function(){return u.a.createElement(C.a,{onClick:n.props.onClick,style:P.expand})},n.FavoriteBorderIcon=function(){return u.a.createElement(O.a,{style:P.favorite})},n.FavoriteIcon=function(){return u.a.createElement(k.a,{style:P.favorite})},n.FolderOpenIcon=function(){return u.a.createElement(F.a,{onClick:n.props.onClick,style:P.folderOpen})},n.HelpOutlineIcon=function(){return u.a.createElement(T.a,{style:P.helpOutline})},n.LocationIcon=function(){return u.a.createElement(M.a,{style:Object(r.a)({},P.location,{},n.props.style)})},n.MenuIcon=function(){return u.a.createElement(L.a,{onClick:n.props.onClick,style:Object(r.a)({},P.menu,{},n.props.style)})},n.PostIcon=function(){return u.a.createElement(S.a,{style:P.post})},n.ReplyIcon=function(){return u.a.createElement(A.a,{onClick:n.props.onClick,style:P.reply})},n.VerifiedIcon=function(){return u.a.createElement(z.a,{style:P.verified})},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.getIcon(this.props.type);return this.props.toolTipsMessage&&this.props.children?u.a.createElement(_.a,{disableTouchListener:!0,title:this.props.toolTipsMessage},u.a.createElement(N.a,{startIcon:e,style:P.buttonStyle},this.props.children)):this.props.toolTipsMessage?u.a.createElement(_.a,{disableTouchListener:!0,title:this.props.toolTipsMessage},u.a.createElement(this.ButtonWrapper,null,e)):u.a.createElement(this.ButtonWrapper,null,e)}},{key:"getIcon",value:function(e){switch(e){case"add":return u.a.createElement(this.AddIcon,null);case"addLarge":return u.a.createElement(this.AddLargeIcon,null);case"close":return u.a.createElement(this.CloseIcon,null);case"edit":return u.a.createElement(this.EditIcon,null);case"expandLess":return u.a.createElement(this.ExpandLessIcon,null);case"expandMore":return u.a.createElement(this.ExpandMoreIcon,null);case"favroite":return u.a.createElement(this.FavoriteIcon,null);case"favroiteBorder":return u.a.createElement(this.FavoriteBorderIcon,null);case"folderOpen":return u.a.createElement(this.FolderOpenIcon,null);case"helpOutline":return u.a.createElement(this.HelpOutlineIcon,null);case"location":return u.a.createElement(this.LocationIcon,null);case"menu":return u.a.createElement(this.MenuIcon,null);case"post":return u.a.createElement(this.PostIcon,null);case"revert":return u.a.createElement(this.ReplyIcon,null);case"verified":return u.a.createElement(this.VerifiedIcon,null)}}}]),t}(s.Component),P={add:{color:W.a.color.primaryColor,fontSize:38},addLarge:{color:W.a.color.greyTransparent,fontSize:"80"},buttonStyle:{padding:0},close:{color:W.a.color.greyDark},edit:{color:W.a.color.blueTransparentSemi},expand:{color:W.a.color.primaryColor},favorite:{color:W.a.color.red,fontSize:20},folderOpen:{backgroundColor:W.a.color.secondaryColorTransparent,borderRadius:25,color:W.a.color.secondaryColor,fontSize:16,marginBottom:1,padding:3},helpOutline:{color:W.a.color.secondaryColor,fontSize:18},location:{color:W.a.color.greenMedium,fontSize:38},menu:{color:W.a.color.greyDark,fontSize:38},post:{color:W.a.color.blueTransparentSemi},reply:{color:W.a.color.greyDark},verified:{color:W.a.color.green,fontSize:20}},V=Object(G.a)({root:{minWidth:0}})(N.a)}}]);
//# sourceMappingURL=14.f2678384.chunk.js.map