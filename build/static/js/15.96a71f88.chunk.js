(this.webpackJsonplocal_deal=this.webpackJsonplocal_deal||[]).push([[15],{131:function(e,t,r){e.exports=r.p+"static/media/logo_icon_character-min.f8d459b6.png"},46:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(3),o=r(10),i=r(9),l=r(11),c=r(0),s=r.n(c),u=r(16),p=(r(25),r(1)),d=r(55),C=r(51),b=r(131),f=r.n(b),m=r(90),D=r.n(m),h=r(91),g=r.n(h),y=r(187),O=r(189),F=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(O.a,{disableTouchListener:!0,title:this.props.title},s.a.createElement(y.a,{style:{padding:0,minWidth:0}},this.props.children))}}]),t}(c.Component),j=r(14),w=r(5),E=Object(j.a)(w.a.CreateDeal),k=Object(j.a)(w.a.Drawer),A=function(e){function t(){var e,r,n=this;Object(a.a)(this,t);for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];return(r=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).CreateDealDrawer=function(){return s.a.createElement(k,{anchor:"top",onClose:r.props.onCloseCreateDeal,open:r.props.isCreateDealDrawerOpen},s.a.createElement(E,{onClose:r.props.onCloseCreateDeal}))},r.CreateNewDealButton=function(){return s.a.createElement(D.a,{onClick:r.props.onClickCreateDeal,style:L.createNewDealIcon})},r.HeaderTextAndLogo=function(){return s.a.createElement(d.a,null,s.a.createElement("img",{alt:"app-logo",src:f.a,style:{width:100}}))},r.LocationButton=function(){var e,t=r.appContext.labels.header;return e=r.props.selectedAddress&&r.props.selectedAddress.area?r.props.selectedAddress.area:t.loading,s.a.createElement(F,{title:"".concat(t.currentLocation," ").concat(e)},s.a.createElement(g.a,{style:L.locationIcon}))},r.TopBarSection=function(){var e=Object(j.a)(w.a.HeaderMenu);return s.a.createElement(d.a,{isFlexDirectionRow:!0,style:L.buttonContainer},s.a.createElement(n.CreateNewDealButton,null),s.a.createElement(n.LocationButton,null),s.a.createElement(e,null))},r}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{boxShadow:1,isFlexDirectionRow:!0,style:L.rootContainer},s.a.createElement(this.CreateDealDrawer,null),s.a.createElement(this.HeaderTextAndLogo,null),s.a.createElement(this.TopBarSection,null)))}}]),t}(u.a),L={buttonContainer:{alignItems:"center",justifyContent:"space-between"},createNewDealIcon:Object(p.a)({color:C.a.color.primaryColor},C.a.icon),locationIcon:Object(p.a)({color:C.a.color.greenMedium},C.a.icon),rootContainer:{alignItems:"center",backgroundColor:C.a.color.white,borderColor:C.a.color.greyDark,justifyContent:"space-between",padding:15}};r.d(t,"default",(function(){return v}));var v=function(e){function t(e){var r;return Object(a.a)(this,t),(r=Object(o.a)(this,Object(i.a)(t).call(this,e))).onClickCreateDeal=function(){console.debug("onClickCreateDeal"),r.setState({isCreateDealDrawerOpen:!0})},r.onCloseCreateDeal=function(){console.debug("onCloseCreateDeal"),r.setState({isCreateDealDrawerOpen:!1})},r.state={isCreateDealDrawerOpen:!1,isHamburgerMenuDrawerOpen:!1,useAutoLocation:!0},r}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(A,{isCreateDealDrawerOpen:this.state.isCreateDealDrawerOpen,onClickCreateDeal:this.onClickCreateDeal,onCloseCreateDeal:this.onCloseCreateDeal,selectedAddress:this.appState.address.selectedAddress})}}]),t}(u.a)},51:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",n={button:{borderRadius:15},color:{black:"black",blueTransparent:"rgba(0,132,255,.1)",green:"#5CC928",greenMedium:"#1EA362",greyDark:"#7D7D7D",greyLight:"#f6f6f6",greyTransparent:"rgba(12, 12, 12, .1)",orange:"#FF4F00",orangeGradient:a,orangeTransparent:"rgb(255, 168, 128, .1)",primaryColor:"#FF4F00",primaryGradient:a,primaryColorTransparent:"rgb(255, 168, 128, .1)",red:"EA4335",redDark:"#DA4B3C",secondaryColor:"#7D7D7D",secondaryColorTransparent:"rgba(12, 12, 12, .1)",systemError:"#F44436",systemInform:"#2196F3",systemSuccess:"#4CAF51",systemWarn:"#FF9800",white:"#FFFFFF"},common:{borderColor:"#f6f6f6"},dimension:{FILL_ALL_HEIGHT:"-webkit-fill-available",FILL_ALL_WIDTH:"-webkit-fill-available"},font:{fontSize:16,primaryFont:"sans-serif"},icon:{fontSize:38,marginLeft:18},remind:{primaryColor:"#5CC928",secondaryColor:"#007AFF"},textField:{borderColor:"#007AFF",borderRadius:15,borderWidth:2}}},55:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(2),n=r(3),o=r(10),i=r(9),l=r(11),c=r(0),s=r.n(c),u=r(16),p=r(186),d=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(p.a,Object.assign({display:"flex",flexDirection:this.props.isFlexDirectionRow?"row":"column",alignItems:this.props.alignItems?this.props.alignItems:"start",justifyContent:this.props.justifyContent?this.props.justifyContent:"start",onClick:function(){return e.props.onClick?e.props.onClick():{}}},this.props),this.props.children)}}]),t}(u.a)}}]);
//# sourceMappingURL=15.96a71f88.chunk.js.map