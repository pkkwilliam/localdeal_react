(this.webpackJsonplocal_deal=this.webpackJsonplocal_deal||[]).push([[10],{133:function(e){e.exports=JSON.parse('{"oAuth":[{"iconUrl":"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg","provider":"GOOGLE","requestUrl":"https://accounts.google.com/o/oauth2/v2/auth?scope=profile&access_type=offline&include_granted_scopes=true&response_type=code&state=GOOGLE&redirect_uri=https://liuda.site&client_id=965687889406-d0pqe0hr6i3c4uo18rr5j0spqq73phth.apps.googleusercontent.com","requestUrlNonProd":"https://accounts.google.com/o/oauth2/v2/auth?scope=profile&access_type=offline&include_granted_scopes=true&response_type=code&state=GOOGLE&redirect_uri=http://127.0.0.1:3000&client_id=965687889406-d0pqe0hr6i3c4uo18rr5j0spqq73phth.apps.googleusercontent.com"},{"iconUrl":"https://www.logo.wine/a/logo/WeChat/WeChat-Icon-Logo.wine.svg","provider":"NONE","requestUrl":"","requestUrlNonProd":""}]}')},134:function(e,t,n){"use strict";var r=n(40);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a=(0,r(n(43)).default)(o.default.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=a},28:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(4),a=n(6),i=n(5),l=n(7),c=n(0),u=n.n(c),s=n(39),p=n(1),h=n(37),d=n(46),f=n(190),m=function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.underline?g.underline:"";return u.a.createElement(f.a,Object.assign({onClick:this.props.onClick,style:Object(p.a)({},g.buttonStyle,{},e),variant:"text"},this.props),this.props.children)}}]),t}(c.Component),g={buttonStyle:{color:h.a.color.primaryColor,paddingBottom:2,paddingTop:2},underline:{textDecoration:"underline"}},y=n(60),b=n(67),v=n(134),O=n.n(v),C=n(32),j=n(34),E=(n(33),n(35)),S=n(41),k=n(36),w=n(81),x=n(42),P={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},M=u.a.forwardRef((function(e,t){var n=e.align,r=void 0===n?"inherit":n,o=e.classes,a=e.className,i=e.color,l=void 0===i?"initial":i,c=e.component,s=e.display,p=void 0===s?"initial":s,h=e.gutterBottom,d=void 0!==h&&h,f=e.noWrap,m=void 0!==f&&f,g=e.paragraph,y=void 0!==g&&g,b=e.variant,v=void 0===b?"body1":b,O=e.variantMapping,k=void 0===O?P:O,w=Object(j.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),x=c||(y?"p":k[v]||P[v])||"span";return u.a.createElement(x,Object(C.a)({className:Object(E.a)(o.root,a,"inherit"!==v&&o[v],"initial"!==l&&o["color".concat(Object(S.a)(l))],m&&o.noWrap,d&&o.gutterBottom,y&&o.paragraph,"inherit"!==r&&o["align".concat(Object(S.a)(r))],"initial"!==p&&o["display".concat(Object(S.a)(p))]),ref:t},w))})),I=Object(k.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(M),A=u.a.forwardRef((function(e,t){var n=e.classes,r=e.className,o=e.color,a=void 0===o?"primary":o,i=e.component,l=void 0===i?"a":i,c=e.onBlur,s=e.onFocus,p=e.TypographyClasses,h=e.underline,d=void 0===h?"hover":h,f=e.variant,m=void 0===f?"inherit":f,g=Object(j.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),y=Object(w.a)(),b=y.isFocusVisible,v=y.onBlurVisible,O=y.ref,k=u.a.useState(!1),P=k[0],M=k[1],A=Object(x.a)(t,O);return u.a.createElement(I,Object(C.a)({className:Object(E.a)(n.root,n["underline".concat(Object(S.a)(d))],r,P&&n.focusVisible,{button:n.button}[l]),classes:p,color:a,component:l,onBlur:function(e){P&&(v(),M(!1)),c&&c(e)},onFocus:function(e){b(e)&&M(!0),s&&s(e)},ref:A,variant:m},g))})),N=Object(k.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(A),L=n(56),D=n(44),U=n(133),_=n(9),z=function(e){function t(e){var n;Object(r.a)(this,t),(n=Object(a.a)(this,Object(i.a)(t).call(this,e))).onClickLogout=function(){console.debug("onClickLogout"),n.appContext.serviceExecutor.execute(Object(D.h)()).then((function(){n.appState.user.removeUserProfile()}))};var o=U.oAuth.map((function(e){return{iconUrl:e.iconUrl,provider:n.convertProvider(e.provider),requestUrl:e.requestUrl,requestUrlNonProd:e.requestUrlNonProd}}));return n.state={oAuthDetails:o},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement(q,{oAuthDetails:this.state.oAuthDetails,onClickLogout:this.onClickLogout,userProfile:this.appState.user.userProfile})}},{key:"convertProvider",value:function(e){switch(e){case _.a.GOOGLE.toString():return _.a.GOOGLE;case _.a.WECHAT.toString():return _.a.WECHAT;default:return _.a.NONE}}}]),t}(s.a),B=function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"getStyle",value:function(){return T.text}}]),t}(n(45).a),T={text:{fontSize:15,fontWeight:500}},F=n(83),q=function(e){function t(){var e,n,o=this;Object(r.a)(this,t);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return(n=Object(a.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).Container=function(){var e=n.props.userProfile&&n.props.userProfile.oAuthProvider!==_.a.NONE?u.a.createElement(o.UserProfileSection,null):u.a.createElement(o.OAuthSelection,null);return u.a.createElement(d.a,{boxShadow:1,isFlexDirectionRow:!0,style:R.userProfileHeaderSectionContainer},e)},n.LogoutButton=function(){return u.a.createElement(m,{onClick:n.props.onClickLogout,underline:!0},n.appContext.labels.oAuth.logout)},n.OAuthSelection=function(){return u.a.createElement(d.a,{isFlexDirectionRow:!0,style:R.oAuthSelectionContainer},n.generateOAuthSelection())},n.UserProfileSection=function(){var e=n.props.userProfile;return e.oAuthProvider!==_.a.NONE?u.a.createElement(u.a.Fragment,null,u.a.createElement(F.a,{size:"miniCircularImage",src:e.imageUrl}),u.a.createElement(B,{color:"primary"},e.name),u.a.createElement(m,{onClick:n.props.onClickLogout,underline:!0},n.appContext.labels.headerMenu.logout)):null},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement(this.Container,null)}},{key:"generateOAuthSelection",value:function(){var e=this;return this.props.oAuthDetails.map((function(t){return console.log(t.iconUrl),t.provider!==_.a.NONE?u.a.createElement(N,{href:e.appContext.isProd?t.requestUrl:t.requestUrlNonProd},u.a.createElement(F.a,{size:"miniCircularImage",src:t.iconUrl})):null}))}}]),t}(s.a),R={logoutButtonContainer:{height:"inherit",alignItems:"right",justifyContent:"right"},oAuthSelectionContainer:{alignItems:"center",justifyContent:"space-around",width:"inherit"},rootContainer:{alignItems:"center",justifyContent:"space-around",padding:10,width:"inherit"},userTextInfoContainer:{marginLeft:15,width:"inherit"},userProfileHeaderSectionContainer:{alignItems:"center",borderRadius:5,justifyContent:"space-between",padding:5,width:"inherit"}},W=n(8),G=n(2),H=Object(W.a)(G.a.Drawer),V=function(e){function t(){var e,n,o=this;Object(r.a)(this,t);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return(n=Object(a.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).CloseButton=function(){return u.a.createElement(m,{onClick:n.props.onCloseMenu},n.appContext.labels.headerMenu.closeButton)},n.ContactInfomation=function(){var e=n.appContext.labels.headerMenu;return n.appContext.features.includes(L.a.CONTACT_SHOW_EMAIL)?u.a.createElement(N,{href:"mailto:".concat(e.emailAddress),underline:"none"},u.a.createElement(b.a,{color:"primary"},e.contactUs)):null},n.DevelopingFeatures=function(){var e=n.appContext.labels.headerMenu.currentDevelopingFeatuers.map((function(e,t){return u.a.createElement(y.a,null,"".concat(t+1,") ").concat(e))})),t=n.appContext.labels.headerMenu;return u.a.createElement(d.a,{style:J.developingFeatureContainer},u.a.createElement(y.a,null,t.moreFeatureIsComingDescription),u.a.createElement(y.a,null,t.developingFeature),e)},n.LowerPortion=function(){return u.a.createElement(d.a,{style:J.lowerPortionContainer},u.a.createElement(o.ContactInfomation,null),u.a.createElement(o.CloseButton,null))},n.MenuContainer=function(){return u.a.createElement(d.a,{style:J.menuContainer},u.a.createElement(o.UpperPortion,null),u.a.createElement(o.LowerPortion,null))},n.UpperPortion=function(){var e=n.appContext.labels.headerMenu;return u.a.createElement(d.a,{style:J.upperPortionContainer},u.a.createElement(z,null),u.a.createElement(o.DevelopingFeatures,null),u.a.createElement(y.a,null,e.bugReportDescription),u.a.createElement(d.a,{style:J.oAuthContainer}))},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.appContext.features.includes(L.a.HEADER_MENU)?u.a.createElement(d.a,{borderLeft:1,style:J.menuIconContainer},u.a.createElement(O.a,{style:J.menuIcon,onClick:this.props.onClickMenu}),u.a.createElement(H,{anchor:"right",onClose:this.props.onCloseMenu,open:this.props.isMenuOpen},u.a.createElement(this.MenuContainer,null))):null}}]),t}(s.a),J={developingFeatureContainer:{padding:15},lowerPortionContainer:{alignItems:"center",paddingTop:20,paddingBottom:20},menuIconContainer:{borderColor:h.a.color.greyTransparent,marginLeft:18},menuIcon:Object(p.a)({color:h.a.color.greyDark},h.a.icon),menuContainer:{alignItems:"center",height:"inherit",justifyContent:"space-between",width:"inherit"},oAuthContainer:{marginTop:20,width:"inherit"},upperPortionContainer:{alignItems:"center",paddingTop:20,width:"inherit"}};n.d(t,"default",(function(){return $}));var $=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(a.a)(this,Object(i.a)(t).call(this,e))).onClickMenu=function(){n.setState({isMenuOpen:!0})},n.onClickLogout=function(){console.debug("onClickLogout"),n.appContext.serviceExecutor.execute(Object(D.h)()).then((function(){n.appState.user.removeUserProfile()}))},n.onCloseMenu=function(){n.setState({isMenuOpen:!1})},n.state={isMenuOpen:!1,isToastMessageOpen:!1},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement(V,{isMenuOpen:this.state.isMenuOpen,onClickMenu:this.onClickMenu,onClickLogout:this.onClickLogout,onCloseMenu:this.onCloseMenu,userProfile:this.appState.user.userProfile})}}]),t}(s.a)},40:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},43:function(e,t,n){"use strict";var r=n(40);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default.memo(a.default.forwardRef((function(t,n){return a.default.createElement(i.default,(0,o.default)({ref:n},t),e)})));0;return n.muiName=i.default.muiName,n};var o=r(n(54)),a=r(n(0)),i=r(n(52))},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(1),o=n(3),a=n(4),i=n(6),l=n(5),c=n(7),u=n(0),s=n.n(u),p=n(37),h=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return s.a.createElement("p",{style:Object(r.a)({},this.getDefaultStyle(),{},this.getDefaultColor(),{},this.props.style)},this.props.children)}},{key:"getDefaultColor",value:function(){return{color:this.getColor()}}},{key:"getColor",value:function(){switch(this.props.color){case"primary":return d.primaryColor.color;case"secondary":return d.secondaryColor.color;case"black":return d.black.color;case"white":return d.white.color;default:return d.black.color}}},{key:"getDefaultStyle",value:function(){return Object(r.a)({},d.defaultStyle,{},this.getStyle())}},{key:"getStyle",value:function(){return d.text}}]),t}(u.Component),d={defaultStyle:{margin:0},text:{fontFamily:p.a.font.primaryFont,fontSize:18,fontWeight:600},primaryColor:{color:p.a.color.primaryColor},secondaryColor:{color:p.a.color.secondaryColor},black:{color:p.a.color.black},white:{color:p.a.color.white}}},48:function(e,t,n){"use strict";var r=n(32),o=n(34),a=n(0),i=n.n(a),l=(n(33),n(35)),c=n(36),u=n(41),s=i.a.forwardRef((function(e,t){var n=e.children,a=e.classes,c=e.className,s=e.color,p=void 0===s?"inherit":s,h=e.component,d=void 0===h?"svg":h,f=e.fontSize,m=void 0===f?"default":f,g=e.htmlColor,y=e.titleAccess,b=e.viewBox,v=void 0===b?"0 0 24 24":b,O=Object(o.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return i.a.createElement(d,Object(r.a)({className:Object(l.a)(a.root,c,"inherit"!==p&&a["color".concat(Object(u.a)(p))],"default"!==m&&a["fontSize".concat(Object(u.a)(m))]),focusable:"false",viewBox:v,color:g,"aria-hidden":y?"false":"true",role:y?"img":"presentation",ref:t},O),n,y?i.a.createElement("title",null,y):null)}));s.muiName="SvgIcon",t.a=Object(c.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(s)},52:function(e,t,n){"use strict";n.r(t);var r=n(48);n.d(t,"default",(function(){return r.a}))},54:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(3),o=n(4),a=n(6),i=n(5),l=n(7),c=n(45),u=n(37),s=function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"getColor",value:function(){return u.a.color.greyDark}},{key:"getStyle",value:function(){return{fontSize:15,fontWeight:500}}}]),t}(c.a)},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(3),o=n(4),a=n(6),i=n(5),l=n(7),c=n(45),u=n(37),s=function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"getStyle",value:function(){return p.text}}]),t}(c.a),p={text:{fontFamily:u.a.font.primaryFont,fontSize:"0.875rem"}}},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(1),o=n(3),a=n(4),i=n(6),l=n(5),c=n(7),u=n(0),s=n.n(u),p=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e,t;return s.a.createElement("img",{alt:null!==(e=null===(t=this.props)||void 0===t?void 0:t.alt)&&void 0!==e?e:"image",src:this.props.src,style:Object(r.a)({},h.defaultStyle,{},this.getImageSizeStyle())})}},{key:"getImageSizeStyle",value:function(){switch(this.props.size){case"big":return h.bigImage;case"medium":return h.mediumImage;case"miniCircularImage":return h.miniCircularImage;default:return h.smallImage}}}]),t}(u.Component),h={bigImage:{width:100},defaultStyle:{borderRadius:5},miniCircularImage:{borderRadius:30,width:30},mediumImage:{width:75},smallImage:{width:50}}}}]);
//# sourceMappingURL=10.0aca9e31.chunk.js.map