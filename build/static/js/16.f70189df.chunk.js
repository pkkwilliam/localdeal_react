(this.webpackJsonplocal_deal=this.webpackJsonplocal_deal||[]).push([[16],{157:function(e,t,r){e.exports=r.p+"static/media/logo_icon_character-min.f8d459b6.png"},49:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(4),o=r(10),l=r(9),c=r(11),i=r(0),s=r.n(i),u=r(16),p=(r(18),r(58)),d=r(56),m=r(157),C=r.n(m),f=r(12),h=r(5),y=r(65),b=Object(f.a)(h.a.CreateDeal),E=Object(f.a)(h.a.Drawer),g=function(e){function t(){var e,r,a=this;Object(n.a)(this,t);for(var c=arguments.length,i=new Array(c),u=0;u<c;u++)i[u]=arguments[u];return(r=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).CreateDealDrawer=function(){return s.a.createElement(E,{anchor:"top",onClose:r.props.onCloseCreateDeal,open:r.props.isCreateDealDrawerOpen},s.a.createElement(b,{onClose:r.props.onCloseCreateDeal}))},r.CreateNewDealButton=function(){return s.a.createElement(y.a,{onClick:r.props.onClickCreateDeal,type:"add",style:D.headerIcon})},r.HeaderTextAndLogo=function(){return s.a.createElement(p.a,null,s.a.createElement("img",{alt:"app-logo",src:C.a,style:{width:100}}))},r.LocationButton=function(){var e,t=r.labels.header;return e=r.props.selectedAddress&&r.props.selectedAddress.area?r.props.selectedAddress.area:t.loading,s.a.createElement(y.a,{toolTipsMessage:"".concat(t.currentLocation," ").concat(e),type:"location",style:D.headerIcon})},r.TopBarSection=function(){var e=Object(f.a)(h.a.HeaderMenu);return s.a.createElement(p.a,{isFlexDirectionRow:!0,style:D.buttonContainer},s.a.createElement(a.CreateNewDealButton,null),s.a.createElement(a.LocationButton,null),s.a.createElement(e,null))},r}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{boxShadow:1,isFlexDirectionRow:!0,style:D.rootContainer},s.a.createElement(this.CreateDealDrawer,null),s.a.createElement(this.HeaderTextAndLogo,null),s.a.createElement(this.TopBarSection,null)))}}]),t}(u.a),D={buttonContainer:{alignItems:"center",justifyContent:"space-between"},headerIcon:{marginRight:15},rootContainer:{alignItems:"center",backgroundColor:d.a.color.white,borderColor:d.a.color.greyDark,justifyContent:"space-between",padding:15}};r.d(t,"default",(function(){return k}));var k=function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(o.a)(this,Object(l.a)(t).call(this,e))).onClickCreateDeal=function(){console.debug("onClickCreateDeal"),r.setState({isCreateDealDrawerOpen:!0})},r.onCloseCreateDeal=function(){console.debug("onCloseCreateDeal"),r.setState({isCreateDealDrawerOpen:!1})},r.state={isCreateDealDrawerOpen:!1,isHamburgerMenuDrawerOpen:!1,useAutoLocation:!0},r}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return s.a.createElement(g,{isCreateDealDrawerOpen:this.state.isCreateDealDrawerOpen,onClickCreateDeal:this.onClickCreateDeal,onCloseCreateDeal:this.onCloseCreateDeal,selectedAddress:this.appState.address.selectedAddress})}}]),t}(u.a)},56:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",a={button:{borderRadius:15},color:{black:"black",blueTransparent:"rgba(0,132,255,.1)",blueTransparentSemi:"rgba(16, 137, 254,1)",green:"#5CC928",greenMedium:"#1EA362",greyDark:"#7D7D7D",greyLight:"#f6f6f6",greyTransparent:"rgba(12, 12, 12, .1)",orange:"#FF4F00",orangeGradient:n,orangeTransparent:"rgb(255, 168, 128, .1)",primaryColor:"#FF4F00",primaryGradient:n,primaryColorTransparent:"rgb(255, 168, 128, .1)",red:"EA4335",redDark:"#DA4B3C",secondaryColor:"#7D7D7D",secondaryColorTransparent:"rgba(12, 12, 12, .1)",systemError:"#F44436",systemInform:"#2196F3",systemSuccess:"#4CAF51",systemWarn:"#FF9800",white:"#FFFFFF"},common:{borderColor:"#f6f6f6"},dimension:{FILL_ALL_HEIGHT:"-webkit-fill-available",FILL_ALL_WIDTH:"-webkit-fill-available"},font:{fontSize:16,primaryFont:"sans-serif"},remind:{primaryColor:"#5CC928",secondaryColor:"#007AFF"},textField:{borderColor:"#007AFF",borderRadius:15,borderWidth:2}}},58:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(3),a=r(4),o=r(10),l=r(9),c=r(11),i=r(0),s=r.n(i),u=r(16),p=r(198),d=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(p.a,Object.assign({display:"flex",flexDirection:this.props.isFlexDirectionRow?"row":"column",alignItems:this.props.alignItems?this.props.alignItems:"start",justifyContent:this.props.justifyContent?this.props.justifyContent:"start",onClick:function(){return e.props.onClick?e.props.onClick():{}}},this.props),this.props.children)}}]),t}(u.a)},65:function(e,t,r){"use strict";r.d(t,"a",(function(){return N}));var n=r(2),a=r(3),o=r(4),l=r(10),c=r(9),i=r(11),s=r(0),u=r.n(s),p=r(78),d=r.n(p),m=r(79),C=r.n(m),f=r(80),h=r.n(f),y=r(81),b=r.n(y),E=r(82),g=r.n(E),D=r(84),k=r.n(D),I=r(83),O=r.n(I),F=r(85),v=r.n(F),j=r(86),w=r.n(j),L=r(88),T=r.n(L),A=r(89),S=r.n(A),x=r(90),B=r.n(x),M=r(87),z=r.n(M),H=r(91),R=r.n(H),_=r(56),W=r(202),G=r(199),J=r(55),N=function(e){function t(){var e,r;Object(a.a)(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(r=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).AddIcon=function(){return u.a.createElement(d.a,{onClick:r.props.onClick,style:Object(n.a)({},P.add,{},r.props.style)})},r.AddLargeIcon=function(){return u.a.createElement(d.a,{onClick:r.props.onClick,style:Object(n.a)({},P.addLarge,{},r.props.style)})},r.ButtonWrapper=function(e){var t=e.children;return u.a.createElement(V,{onClick:r.props.onClick,style:P.buttonStyle},t)},r.CloseIcon=function(){return u.a.createElement(C.a,{onClick:r.props.onClick,style:P.close})},r.EditIcon=function(){return u.a.createElement(h.a,{onClick:r.props.onClick,style:P.edit})},r.ExpandLessIcon=function(){return u.a.createElement(b.a,{onClick:r.props.onClick,style:P.expand})},r.ExpandMoreIcon=function(){return u.a.createElement(g.a,{onClick:r.props.onClick,style:P.expand})},r.FavoriteBorderIcon=function(){return u.a.createElement(O.a,{style:P.favorite})},r.FavoriteIcon=function(){return u.a.createElement(k.a,{style:P.favorite})},r.FolderOpenIcon=function(){return u.a.createElement(v.a,{onClick:r.props.onClick,style:P.folderOpen})},r.HelpOutlineIcon=function(){return u.a.createElement(w.a,{style:P.helpOutline})},r.LocationIcon=function(){return u.a.createElement(z.a,{style:Object(n.a)({},P.location,{},r.props.style)})},r.MenuIcon=function(){return u.a.createElement(T.a,{onClick:r.props.onClick,style:Object(n.a)({},P.menu,{},r.props.style)})},r.PostIcon=function(){return u.a.createElement(S.a,{style:P.post})},r.ReplyIcon=function(){return u.a.createElement(B.a,{onClick:r.props.onClick,style:P.reply})},r.VerifiedIcon=function(){return u.a.createElement(R.a,{style:P.verified})},r}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.getIcon(this.props.type);return this.props.toolTipsMessage&&this.props.children?u.a.createElement(W.a,{disableTouchListener:!0,title:this.props.toolTipsMessage},u.a.createElement(G.a,{startIcon:e,style:P.buttonStyle},this.props.children)):this.props.toolTipsMessage?u.a.createElement(W.a,{disableTouchListener:!0,title:this.props.toolTipsMessage},u.a.createElement(this.ButtonWrapper,null,e)):u.a.createElement(this.ButtonWrapper,null,e)}},{key:"getIcon",value:function(e){switch(e){case"add":return u.a.createElement(this.AddIcon,null);case"addLarge":return u.a.createElement(this.AddLargeIcon,null);case"close":return u.a.createElement(this.CloseIcon,null);case"edit":return u.a.createElement(this.EditIcon,null);case"expandLess":return u.a.createElement(this.ExpandLessIcon,null);case"expandMore":return u.a.createElement(this.ExpandMoreIcon,null);case"favroite":return u.a.createElement(this.FavoriteIcon,null);case"favroiteBorder":return u.a.createElement(this.FavoriteBorderIcon,null);case"folderOpen":return u.a.createElement(this.FolderOpenIcon,null);case"helpOutline":return u.a.createElement(this.HelpOutlineIcon,null);case"location":return u.a.createElement(this.LocationIcon,null);case"menu":return u.a.createElement(this.MenuIcon,null);case"post":return u.a.createElement(this.PostIcon,null);case"revert":return u.a.createElement(this.ReplyIcon,null);case"verified":return u.a.createElement(this.VerifiedIcon,null)}}}]),t}(s.Component),P={add:{color:_.a.color.primaryColor,fontSize:38},addLarge:{color:_.a.color.greyTransparent,fontSize:"80"},buttonStyle:{padding:0},close:{color:_.a.color.greyDark},edit:{color:_.a.color.blueTransparentSemi},expand:{color:_.a.color.primaryColor},favorite:{color:_.a.color.red,fontSize:20},folderOpen:{backgroundColor:_.a.color.secondaryColorTransparent,borderRadius:25,color:_.a.color.secondaryColor,fontSize:16,marginBottom:1,padding:3},helpOutline:{color:_.a.color.secondaryColor,fontSize:18},location:{color:_.a.color.greenMedium,fontSize:38},menu:{color:_.a.color.greyDark,fontSize:38},post:{color:_.a.color.blueTransparentSemi},reply:{color:_.a.color.greyDark},verified:{color:_.a.color.green,fontSize:20}},V=Object(J.a)({root:{minWidth:0}})(G.a)}}]);
//# sourceMappingURL=16.f70189df.chunk.js.map