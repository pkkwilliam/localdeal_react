(this.webpackJsonplocal_deal=this.webpackJsonplocal_deal||[]).push([[12],{135:function(e,t,n){"use strict";var a=n(40);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=(0,a(n(46)).default)(o.default.createElement("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"}),"ThumbUp");t.default=r},136:function(e,t,n){"use strict";var a=n(40);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=(0,a(n(46)).default)(o.default.createElement("path",{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"}),"ThumbDown");t.default=r},29:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(4),r=n(6),l=n(5),i=n(7),c=n(0),s=n.n(c),u=n(39),d=n(54),p=n(45),f=n(37),m=n(48),h=n.n(m),v=n(1),b=n(136),y=n.n(b),g=n(135),C=n.n(g),j=n(189),O=n(44),E=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(l.a)(t).call(this,e))).VoteButton=function(e){var t=e.voteCount,a=e.voteUpIcon,o=null,r=null;n.state.voted?(o=S.VotedButtonContainer,r=Object(v.a)({},S.mainIconStyle,{},S.votedIcon)):(o=S.VoteButtonContainer,r=Object(v.a)({},S.mainIconStyle,{},S.voteIcon));var l=a?n.onPressUpVote:n.onPressDownVote;return s.a.createElement(p.a,{isFlexDirectionRow:!0,style:Object(v.a)({},S.buttonContainer,{},o)},s.a.createElement(j.a,{disabled:n.state.voted,onClick:l,style:S.iconButton},a?s.a.createElement(C.a,{style:r}):s.a.createElement(y.a,{style:r})),s.a.createElement(d.a,{style:S.componentStyle},t))},n.onPressDownVote=function(){n.createVoteRequest(!1)},n.onPressUpVote=function(){n.createVoteRequest(!0)},n.createVoteRequest=function(e){var t,a,o;return h.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:t=n.props.deal,a=t.id,o=t.serverIdentifierName,!n.state.voted&&a&&o&&n.appContext.serviceExecutor.execute(Object(O.b)({id:a,upVote:e,serverIdentifierName:o})).then((function(e){n.setState({voted:!0}),n.appState.deal.setDeals(e.deals)}));case 2:case"end":return r.stop()}}))},n.state={voted:!1},n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t,n=null!==(e=null===(t=this.props.deal)||void 0===t?void 0:t.vote)&&void 0!==e?e:{},a=n.downVote,o=n.upVote;return s.a.createElement(p.a,{isFlexDirectionRow:!0,style:S.rootContainer},s.a.createElement(this.VoteButton,{voteCount:null!==o&&void 0!==o?o:0,voteUpIcon:!0}),s.a.createElement(this.VoteButton,{voteCount:null!==a&&void 0!==a?a:0,voteUpIcon:!1}))}}]),t}(u.a),S={buttonContainer:{alignItems:"center",borderRadius:5,marginRight:5},componentStyle:{paddingRight:10},mainIconStyle:{fontSize:22,paddingTop:2,paddingBottom:2},iconButton:{padding:0},rootContainer:{alignItems:"center",marginTop:10},VotedButtonContainer:{backgroundColor:f.a.color.secondaryColorTransparent},VoteButtonContainer:{backgroundColor:f.a.color.primaryColorTransparent},votedIcon:{color:f.a.color.secondaryColor},voteIcon:{color:f.a.color.primaryColor}},x=n(43),I=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,{isFlexDirectionRow:!0},s.a.createElement(d.a,null,this.generateAddressWithSpace(this.props.address)))}},{key:"generateAddressWithSpace",value:function(e){return e.formattedAddress||""}},{key:"removeNotValidAddress",value:function(e){return e?"".concat(e," "):""}}]),t}(u.a),w=n(8),k=n(2),D=500,V=Object(w.a)(k.a.CollapseCard),B=Object(w.a)(k.a.Slide),R=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(l.a)(t).call(this,e))).CardHeader=function(e){var t=e.address,a=e.timestamp,o=e.title;return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{isFlexDirectionRow:!0,style:z.cardContainer},s.a.createElement(x.a,null,o),s.a.createElement(d.a,null,a?n.appContext.transformer.timeDifferentCalcualtor(a):n.appContext.labels.date.unknown)),t?s.a.createElement(I,{address:t}):null)},n.ImageSection=function(){var e,t,a=n.props.deal;return s.a.createElement(B,{dealIndex:null!==(e=a.id)&&void 0!==e?e:0,dots:n.state.expanded,fileUrls:null!==(t=a.filesUrl)&&void 0!==t?t:[],swipe:n.state.expanded})},n.onExpand=function(){n.setState({expanded:!n.state.expanded})},n.onLoadImage=function(){var e,t=null===(e=document.getElementById("deal-".concat(n.props.index," cover-image")))||void 0===e?void 0:e.clientHeight;t&&(console.debug(t),n.setState({coverImageHeight:t<D?t:D,coverImageLoaded:!0}))},n.state={coverImageHeight:150,coverImageLoaded:!1,expanded:!1},n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.DealCard())}},{key:"DealCard",value:function(){var e=this.props.deal,t=s.a.createElement(E,{deal:this.props.deal}),n=null!==e.description&&""!==e.description||e.filesUrl.length>1;return s.a.createElement(p.a,{borderBottom:1,style:z.rootContainer},s.a.createElement(this.CardHeader,{address:e.address,timestamp:e.timestamp,title:e.title}),s.a.createElement(p.a,{style:z.imageContainer},s.a.createElement(this.ImageSection,null)),s.a.createElement(V,{allowExpand:n,bottomToolBarContent:t,expanded:this.state.expanded,onClickExpandSign:this.onExpand},e.description))}}]),t}(u.a),z={cardContainer:{justifyContent:"space-between",width:"inherit"},empty:{},imageContainer:{alignItems:"center",justifyContent:"center",marginTop:5,width:"inherit"},rootContainer:{backgroundColor:f.a.color.white,borderColor:f.a.color.greyTransparent,padding:15,width:"inherit"}},L=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.deals.map((function(e,t){return s.a.createElement(R,{deal:e,index:t})}));return s.a.createElement(s.a.Fragment,null,e)}}]),t}(c.Component),A=function(e){function t(){var e,n,o=this;Object(a.a)(this,t);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return(n=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).BodySection=function(){return s.a.createElement(p.a,{boxShadow:n.props.deals.length?1:0,style:T.dealSectionContainer},(function(){return n.props.deals.length?s.a.createElement(L,{deals:n.props.deals}):n.props.isLoadingDeals?s.a.createElement(o.LoadingDeals,null):s.a.createElement(o.NoDealInArea,null)}))},n.LoadingDeals=function(){return s.a.createElement(p.a,{isFlexDirectionRow:!0,style:T.noDealInAreaContainer},s.a.createElement(d.a,null,n.appContext.labels.landingPage.loadingDeals))},n.NoDealInArea=function(){return s.a.createElement(p.a,{style:T.noDealInAreaContainer},s.a.createElement(d.a,null,n.appContext.labels.landingPage.noDeal))},n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,{style:T.rootContainer},s.a.createElement(this.BodySection,null))}}]),t}(u.a),T={dealSectionContainer:{alignItems:"center",width:"100%"},locationButtonContainer:{alignItems:"center",justifyContent:"center"},noDealInAreaContainer:{alignItems:"center",justifyContent:"center"},rootContainer:{alignItems:"center",justifyContent:"center",padding:15,width:f.a.dimension.FILL_ALL_WIDTH},searchButton:{borderColor:f.a.remind.secondaryColor,borderRadius:f.a.button.borderRadius,backgroundColor:f.a.remind.secondaryColor,borderWidth:3}};n(13);n.d(t,"default",(function(){return _}));var _=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(l.a)(t).call(this,e))).state={isLoading:!0},n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"sortDeals",value:function(e){return e.sort((function(e,t){return t.timestamp-e.timestamp}))}},{key:"render",value:function(){var e=this.sortDeals(this.appState.deal.deals?this.appState.deal.deals:[]);return s.a.createElement(A,{deals:e,isLoadingDeals:this.state.isLoading})}}]),t}(u.a)},40:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(1),o=n(3),r=n(4),l=n(6),i=n(5),c=n(7),s=n(0),u=n.n(s),d=n(37),p=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("p",{style:Object(a.a)({},this.getDefaultStyle(),{},this.getDefaultColor(),{},this.props.style)},this.props.children)}},{key:"getDefaultColor",value:function(){return{color:this.getColor()}}},{key:"getColor",value:function(){switch(this.props.color){case"primary":return f.primaryColor.color;case"secondary":return f.secondaryColor.color;case"black":return f.black.color;case"white":return f.white.color;default:return f.black.color}}},{key:"getDefaultStyle",value:function(){return Object(a.a)({},f.defaultStyle,{},this.getStyle())}},{key:"getStyle",value:function(){return f.text}}]),t}(s.Component),f={defaultStyle:{margin:0},text:{fontFamily:d.a.font.primaryFont,fontSize:18,fontWeight:600},primaryColor:{color:d.a.color.primaryColor},secondaryColor:{color:d.a.color.secondaryColor},black:{color:d.a.color.black},white:{color:d.a.color.white}}},46:function(e,t,n){"use strict";var a=n(40);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=r.default.memo(r.default.forwardRef((function(t,n){return r.default.createElement(l.default,(0,o.default)({ref:n},t),e)})));0;return n.muiName=l.default.muiName,n};var o=a(n(55)),r=a(n(0)),l=a(n(52))},49:function(e,t,n){"use strict";var a=n(32),o=n(34),r=n(0),l=n.n(r),i=(n(33),n(35)),c=n(36),s=n(41),u=l.a.forwardRef((function(e,t){var n=e.children,r=e.classes,c=e.className,u=e.color,d=void 0===u?"inherit":u,p=e.component,f=void 0===p?"svg":p,m=e.fontSize,h=void 0===m?"default":m,v=e.htmlColor,b=e.titleAccess,y=e.viewBox,g=void 0===y?"0 0 24 24":y,C=Object(o.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return l.a.createElement(f,Object(a.a)({className:Object(i.a)(r.root,c,"inherit"!==d&&r["color".concat(Object(s.a)(d))],"default"!==h&&r["fontSize".concat(Object(s.a)(h))]),focusable:"false",viewBox:g,color:v,"aria-hidden":b?"false":"true",role:b?"img":"presentation",ref:t},C),n,b?l.a.createElement("title",null,b):null)}));u.muiName="SvgIcon",t.a=Object(c.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(u)},52:function(e,t,n){"use strict";n.r(t);var a=n(49);n.d(t,"default",(function(){return a.a}))},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(3),o=n(4),r=n(6),l=n(5),i=n(7),c=n(43),s=n(37),u=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"getColor",value:function(){return s.a.color.greyDark}},{key:"getStyle",value:function(){return d.text}}]),t}(c.a),d={text:{fontSize:15,fontWeight:500}}},55:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n}}]);
//# sourceMappingURL=12.86d8b327.chunk.js.map