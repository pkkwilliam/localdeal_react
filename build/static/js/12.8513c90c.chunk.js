(this.webpackJsonplocal_deal=this.webpackJsonplocal_deal||[]).push([[12],{135:function(e,t,n){"use strict";var a=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(61)).default)(r.default.createElement("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"}),"ThumbUp");t.default=o},136:function(e,t,n){"use strict";var a=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(61)).default)(r.default.createElement("path",{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"}),"ThumbDown");t.default=o},42:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),o=n(10),i=n(9),l=n(11),c=n(0),s=n.n(c),u=n(16),d=n(62),p=n(55),m=n(51),f=n(4),h=n.n(f),g=n(1),b=n(136),v=n.n(b),y=n(135),C=n.n(y),j=n(188),O=n(7),E=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).VoteButton=function(e){var t=e.voteCount,a=e.voteUpIcon,r=null,o=null;n.state.voted?(r=I.VotedButtonContainer,o=Object(g.a)({},I.mainIconStyle,{},I.votedIcon)):(r=I.VoteButtonContainer,o=Object(g.a)({},I.mainIconStyle,{},I.voteIcon));var i=a?n.onPressUpVote:n.onPressDownVote;return s.a.createElement(p.a,{isFlexDirectionRow:!0,style:Object(g.a)({},I.buttonContainer,{},r)},s.a.createElement(j.a,{disabled:n.state.voted,onClick:i,style:I.iconButton},a?s.a.createElement(C.a,{style:o}):s.a.createElement(v.a,{style:o})),s.a.createElement(d.a,{style:I.componentStyle},t))},n.onPressDownVote=function(){n.createVoteRequest(!1)},n.onPressUpVote=function(){n.createVoteRequest(!0)},n.createVoteRequest=function(e){var t,a,r;return h.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:t=n.props.deal,a=t.id,r=t.serverIdentifierName,!n.state.voted&&a&&r&&n.appContext.serviceExecutor.execute(Object(O.b)({id:a,upVote:e,serverIdentifierName:r})).then((function(e){n.setState({voted:!0}),n.appState.deal.setDeals(e.deals)}));case 2:case"end":return o.stop()}}))},n.state={voted:!1},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t,n=null!==(e=null===(t=this.props.deal)||void 0===t?void 0:t.vote)&&void 0!==e?e:{},a=n.downVote,r=n.upVote;return s.a.createElement(p.a,{isFlexDirectionRow:!0,style:I.rootContainer},s.a.createElement(this.VoteButton,{voteCount:null!==r&&void 0!==r?r:0,voteUpIcon:!0}),s.a.createElement(this.VoteButton,{voteCount:null!==a&&void 0!==a?a:0,voteUpIcon:!1}))}}]),t}(u.a),I={buttonContainer:{alignItems:"center",borderRadius:5,marginRight:5},componentStyle:{paddingRight:10},mainIconStyle:{fontSize:22,paddingTop:2,paddingBottom:2},iconButton:{padding:0},rootContainer:{alignItems:"center",marginTop:10},VotedButtonContainer:{backgroundColor:m.a.color.secondaryColorTransparent},VoteButtonContainer:{backgroundColor:m.a.color.primaryColorTransparent},votedIcon:{color:m.a.color.secondaryColor},voteIcon:{color:m.a.color.primaryColor}},D=n(57),k=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,{isFlexDirectionRow:!0},s.a.createElement(d.a,null,this.generateAddressWithSpace(this.props.address)))}},{key:"generateAddressWithSpace",value:function(e){return e.formattedAddress||""}},{key:"removeNotValidAddress",value:function(e){return e?"".concat(e," "):""}}]),t}(u.a),F=n(14),x=n(5),S=500,L=Object(F.a)(x.a.CollapseCard),w=Object(F.a)(x.a.Slide),V=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).CardHeader=function(e){var t=e.address,a=e.timestamp,r=e.title;return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{isFlexDirectionRow:!0,style:B.cardContainer},s.a.createElement(D.a,null,r),s.a.createElement(d.a,null,a?n.appContext.transformer.timeDifferentCalcualtor(a):n.appContext.labels.date.unknown)),t?s.a.createElement(k,{address:t}):null)},n.ImageSection=function(){var e,t,a=n.props.deal;if(n.state.expanded)return s.a.createElement(w,{dealIndex:null!==(e=a.id)&&void 0!==e?e:0,fileUrls:null!==(t=a.filesUrl)&&void 0!==t?t:[],height:n.state.coverImageHeight});var r,o=n.state.coverImageLoaded?{height:n.state.coverImageHeight}:B.empty;return(null===(r=a.filesUrl)||void 0===r?void 0:r.length)?s.a.createElement("img",{alt:"cover",id:"deal-".concat(n.props.index," cover-image"),onLoad:n.onLoadImage,src:a.filesUrl[0],style:o}):null},n.onExpand=function(){n.setState({expanded:!n.state.expanded})},n.onLoadImage=function(){var e,t=null===(e=document.getElementById("deal-".concat(n.props.index," cover-image")))||void 0===e?void 0:e.clientHeight;t&&(console.debug(t),n.setState({coverImageHeight:t<S?t:S,coverImageLoaded:!0}))},n.state={coverImageHeight:150,coverImageLoaded:!1,expanded:!1},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.DealCard())}},{key:"DealCard",value:function(){var e=this.props.deal,t=s.a.createElement(E,{deal:this.props.deal}),n=null!==e.description&&""!==e.description||e.filesUrl.length>1;return s.a.createElement(p.a,{borderBottom:1,style:B.rootContainer,onClick:this.onExpand},s.a.createElement(this.CardHeader,{address:e.address,timestamp:e.timestamp,title:e.title}),s.a.createElement(p.a,{style:B.imageContainer},s.a.createElement(this.ImageSection,null)),s.a.createElement(L,{allowExpand:n,bottomToolBarContent:t,expanded:this.state.expanded,onClickExpandSign:this.onExpand},e.description))}}]),t}(u.a),B={cardContainer:{justifyContent:"space-between",width:"inherit"},empty:{},imageContainer:{alignItems:"center",justifyContent:"center",marginTop:5,width:"inherit"},rootContainer:{backgroundColor:m.a.color.white,borderColor:m.a.color.greyTransparent,padding:15,width:"inherit"}},A=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.deals.map((function(e,t){return s.a.createElement(V,{deal:e,index:t})}));return s.a.createElement(s.a.Fragment,null,e)}}]),t}(c.Component),T=function(e){function t(){var e,n,r=this;Object(a.a)(this,t);for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).BodySection=function(){return s.a.createElement(p.a,{boxShadow:n.props.deals.length?1:0,style:R.dealSectionContainer},(function(){return n.props.deals.length?s.a.createElement(A,{deals:n.props.deals}):n.props.isLoadingDeals?s.a.createElement(r.LoadingDeals,null):s.a.createElement(r.NoDealInArea,null)}))},n.LoadingDeals=function(){return s.a.createElement(p.a,{style:R.noDealInAreaContainer},s.a.createElement(d.a,null,n.appContext.labels.landingPage.loadingDeals))},n.NoDealInArea=function(){return s.a.createElement(p.a,{style:R.noDealInAreaContainer},s.a.createElement(d.a,null,n.appContext.labels.landingPage.noDeal))},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,{style:R.rootContainer},s.a.createElement(this.BodySection,null))}}]),t}(u.a),R={dealSectionContainer:{alignItems:"center",width:"100%"},locationButtonContainer:{alignItems:"center",justifyContent:"center"},noDealInAreaContainer:{},rootContainer:{alignItems:"center",justifyContent:"center",padding:15,width:m.a.dimension.FILL_ALL_WIDTH},searchButton:{borderColor:m.a.remind.secondaryColor,borderRadius:m.a.button.borderRadius,backgroundColor:m.a.remind.secondaryColor,borderWidth:3}};n(25);n.d(t,"default",(function(){return H}));var H=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={isLoading:!0},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"sortDeals",value:function(e){return e.sort((function(e,t){return t.timestamp-e.timestamp}))}},{key:"render",value:function(){var e=this.sortDeals(this.appState.deal.deals?this.appState.deal.deals:[]);return s.a.createElement(T,{deals:e,isLoadingDeals:this.state.isLoading})}}]),t}(u.a)},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",r={button:{borderRadius:15},color:{black:"black",blueTransparent:"rgba(0,132,255,.1)",green:"#5CC928",greenMedium:"#1EA362",greyDark:"#7D7D7D",greyLight:"#f6f6f6",greyTransparent:"rgba(12, 12, 12, .1)",orange:"#FF4F00",orangeGradient:a,orangeTransparent:"rgb(255, 168, 128, .1)",primaryColor:"#FF4F00",primaryGradient:a,primaryColorTransparent:"rgb(255, 168, 128, .1)",red:"EA4335",redDark:"#DA4B3C",secondaryColor:"#7D7D7D",secondaryColorTransparent:"rgba(12, 12, 12, .1)",systemError:"#F44436",systemInform:"#2196F3",systemSuccess:"#4CAF51",systemWarn:"#FF9800",white:"#FFFFFF"},common:{borderColor:"#f6f6f6"},dimension:{FILL_ALL_HEIGHT:"-webkit-fill-available",FILL_ALL_WIDTH:"-webkit-fill-available"},font:{fontSize:16,primaryFont:"sans-serif"},icon:{fontSize:38,marginLeft:18},remind:{primaryColor:"#5CC928",secondaryColor:"#007AFF"},textField:{borderColor:"#007AFF",borderRadius:15,borderWidth:2}}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(2),r=n(3),o=n(10),i=n(9),l=n(11),c=n(0),s=n.n(c),u=n(16),d=n(187),p=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(d.a,Object.assign({display:"flex",flexDirection:this.props.isFlexDirectionRow?"row":"column",alignItems:this.props.alignItems?this.props.alignItems:"start",justifyContent:this.props.justifyContent?this.props.justifyContent:"start",onClick:function(){return e.props.onClick?e.props.onClick():{}}},this.props),this.props.children)}}]),t}(u.a)},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(1),r=n(2),o=n(3),i=n(10),l=n(9),c=n(11),s=n(0),u=n.n(s),d=n(51),p=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement("p",{style:Object(a.a)({},this.getDefaultStyle(),{},this.getDefaultColor(),{},this.props.style)},this.props.children)}},{key:"getDefaultColor",value:function(){return{color:this.getColor()}}},{key:"getColor",value:function(){return d.a.color.black}},{key:"getDefaultStyle",value:function(){return Object(a.a)({},m.defaultStyle,{},this.getStyle())}},{key:"getStyle",value:function(){return m.text}}]),t}(s.Component),m={defaultStyle:{margin:0},text:{fontFamily:d.a.font.primaryFont,fontSize:18,fontWeight:600}}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(2),r=n(3),o=n(10),i=n(9),l=n(11),c=n(57),s=n(51),u=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"getColor",value:function(){return s.a.color.greyDark}},{key:"getStyle",value:function(){return d.text}}]),t}(c.a),d={text:{fontSize:15,fontWeight:500}}}}]);
//# sourceMappingURL=12.8513c90c.chunk.js.map