(this.webpackJsonplocal_deal=this.webpackJsonplocal_deal||[]).push([[15],{137:function(e,t,n){"use strict";var a=n(44);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(46)).default)(r.default.createElement("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"}),"ThumbUp");t.default=o},138:function(e,t,n){"use strict";var a=n(44);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(46)).default)(r.default.createElement("path",{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"}),"ThumbDown");t.default=o},27:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(4),o=n(6),l=n(5),i=n(7),c=n(0),s=n.n(c),u=n(39),d=n(54),p=n(45),m=n(38),f=n(52),h=n.n(f),v=n(1),b=n(138),y=n.n(b),g=n(137),C=n.n(g),j=n(189),O=n(48),E=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).VoteButton=function(e){var t=e.voteCount,a=e.voteUpIcon,r=null,o=null;n.state.voted?(r=I.VotedButtonContainer,o=Object(v.a)({},I.mainIconStyle,{},I.votedIcon)):(r=I.VoteButtonContainer,o=Object(v.a)({},I.mainIconStyle,{},I.voteIcon));var l=a?n.onPressUpVote:n.onPressDownVote;return s.a.createElement(p.a,{isFlexDirectionRow:!0,style:Object(v.a)({},I.buttonContainer,{},r)},s.a.createElement(j.a,{disabled:n.state.voted,onClick:l,style:I.iconButton},a?s.a.createElement(C.a,{style:o}):s.a.createElement(y.a,{style:o})),s.a.createElement(d.a,{style:I.componentStyle},t))},n.onPressDownVote=function(){n.createVoteRequest(!1)},n.onPressUpVote=function(){n.createVoteRequest(!0)},n.createVoteRequest=function(e){var t,a,r;return h.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:t=n.props.deal,a=t.id,r=t.serverIdentifierName,!n.state.voted&&a&&r&&n.appContext.serviceExecutor.execute(Object(O.b)({id:a,upVote:e,serverIdentifierName:r})).then((function(e){n.setState({voted:!0}),n.appState.deal.setDeals(e.deals)}));case 2:case"end":return o.stop()}}))},n.state={voted:!1},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t,n=null!==(e=null===(t=this.props.deal)||void 0===t?void 0:t.vote)&&void 0!==e?e:{},a=n.downVote,r=n.upVote;return s.a.createElement(p.a,{isFlexDirectionRow:!0,style:I.rootContainer},s.a.createElement(this.VoteButton,{voteCount:null!==r&&void 0!==r?r:0,voteUpIcon:!0}),s.a.createElement(this.VoteButton,{voteCount:null!==a&&void 0!==a?a:0,voteUpIcon:!1}))}}]),t}(u.a),I={buttonContainer:{alignItems:"center",borderRadius:5,marginRight:5},componentStyle:{paddingRight:10},mainIconStyle:{fontSize:22,paddingTop:2,paddingBottom:2},iconButton:{padding:0},rootContainer:{alignItems:"center",marginTop:10},VotedButtonContainer:{backgroundColor:m.a.color.secondaryColorTransparent},VoteButtonContainer:{backgroundColor:m.a.color.primaryColorTransparent},votedIcon:{color:m.a.color.secondaryColor},voteIcon:{color:m.a.color.primaryColor}},k=n(42),x=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,{isFlexDirectionRow:!0},s.a.createElement(d.a,null,this.generateAddressWithSpace(this.props.address)))}},{key:"generateAddressWithSpace",value:function(e){return e.formattedAddress||""}},{key:"removeNotValidAddress",value:function(e){return e?"".concat(e," "):""}}]),t}(u.a),S=n(8),D=n(2),w=500,V=Object(S.a)(D.a.CollapseCard),B=Object(S.a)(D.a.Slide),L=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).CardHeader=function(e){var t=e.address,a=e.timestamp,r=e.title;return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{isFlexDirectionRow:!0,style:R.cardContainer},s.a.createElement(k.a,null,r),s.a.createElement(d.a,null,a?n.appContext.transformer.timeDifferentCalcualtor(a):n.appContext.labels.date.unknown)),t?s.a.createElement(x,{address:t}):null)},n.ImageSection=function(){var e,t,a=n.props.deal;return s.a.createElement(B,{dealIndex:null!==(e=a.id)&&void 0!==e?e:0,dots:n.state.expanded,fileUrls:null!==(t=a.filesUrl)&&void 0!==t?t:[],swipe:n.state.expanded,height:284})},n.onExpand=function(){n.setState({expanded:!n.state.expanded})},n.onLoadImage=function(){var e,t=null===(e=document.getElementById("deal-".concat(n.props.index," cover-image")))||void 0===e?void 0:e.clientHeight;t&&(console.debug(t),n.setState({coverImageHeight:t<w?t:w,coverImageLoaded:!0}))},n.state={coverImageHeight:150,coverImageLoaded:!1,expanded:!1},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.DealCard())}},{key:"DealCard",value:function(){var e=this.props.deal,t=s.a.createElement(E,{deal:this.props.deal}),n=null!==e.description&&""!==e.description||e.filesUrl.length>1;return s.a.createElement(p.a,{borderBottom:1,style:R.rootContainer},s.a.createElement(this.CardHeader,{address:e.address,timestamp:e.timestamp,title:e.title}),s.a.createElement(p.a,{style:R.imageContainer},s.a.createElement(this.ImageSection,null)),s.a.createElement(V,{allowExpand:n,bottomToolBarContent:t,expanded:this.state.expanded,onClickExpandSign:this.onExpand},e.description))}}]),t}(u.a),R={cardContainer:{justifyContent:"space-between",width:"inherit"},empty:{},imageContainer:{alignItems:"center",justifyContent:"center",marginTop:5,width:"inherit"},rootContainer:{backgroundColor:m.a.color.white,borderColor:m.a.color.greyTransparent,padding:15,width:"inherit"}},A=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.deals.map((function(e,t){return s.a.createElement(L,{deal:e,index:t})}));return s.a.createElement(s.a.Fragment,null,e)}}]),t}(c.Component),F=function(e){function t(){var e,n,r=this;Object(a.a)(this,t);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).BodySection=function(){return s.a.createElement(p.a,{boxShadow:n.props.deals.length?1:0,style:T.dealSectionContainer},(function(){return n.props.deals.length?s.a.createElement(A,{deals:n.props.deals}):n.props.isLoadingDeals?s.a.createElement(r.LoadingDeals,null):s.a.createElement(r.NoDealInArea,null)}))},n.LoadingDeals=function(){return s.a.createElement(p.a,{isFlexDirectionRow:!0,style:T.noDealInAreaContainer},s.a.createElement(d.a,null,n.appContext.labels.landingPage.loadingDeals))},n.NoDealInArea=function(){return s.a.createElement(p.a,{style:T.noDealInAreaContainer},s.a.createElement(d.a,null,n.appContext.labels.landingPage.noDeal))},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,{style:T.rootContainer},s.a.createElement(this.BodySection,null))}}]),t}(u.a),T={dealSectionContainer:{alignItems:"center",width:"100%"},locationButtonContainer:{alignItems:"center",justifyContent:"center"},noDealInAreaContainer:{alignItems:"center",justifyContent:"center"},rootContainer:{alignItems:"center",justifyContent:"center",padding:15,width:m.a.dimension.FILL_ALL_WIDTH},searchButton:{borderColor:m.a.remind.secondaryColor,borderRadius:m.a.button.borderRadius,backgroundColor:m.a.remind.secondaryColor,borderWidth:3}};n(13);n.d(t,"default",(function(){return U}));var U=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={isLoading:!0},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"sortDeals",value:function(e){return e.sort((function(e,t){return t.timestamp-e.timestamp}))}},{key:"render",value:function(){var e=this.sortDeals(this.appState.deal.deals?this.appState.deal.deals:[]);return s.a.createElement(F,{deals:e,isLoadingDeals:this.state.isLoading})}}]),t}(u.a)},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(1),r=n(3),o=n(4),l=n(6),i=n(5),c=n(7),s=n(0),u=n.n(s),d=n(38),p=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement("p",{style:Object(a.a)({},this.getDefaultStyle(),{},this.getDefaultColor(),{},this.props.style)},this.props.children)}},{key:"getDefaultColor",value:function(){return{color:this.getColor()}}},{key:"getColor",value:function(){switch(this.props.color){case"primary":return m.primaryColor.color;case"secondary":return m.secondaryColor.color;case"black":return m.black.color;case"white":return m.white.color;default:return m.black.color}}},{key:"getDefaultStyle",value:function(){return Object(a.a)({},m.defaultStyle,{},this.getStyle())}},{key:"getStyle",value:function(){return m.text}}]),t}(s.Component),m={defaultStyle:{margin:0},text:{fontFamily:d.a.font.primaryFont,fontSize:18,fontWeight:600},primaryColor:{color:d.a.color.primaryColor},secondaryColor:{color:d.a.color.secondaryColor},black:{color:d.a.color.black},white:{color:d.a.color.white}}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(3),r=n(4),o=n(6),l=n(5),i=n(7),c=n(42),s=n(38),u=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"getColor",value:function(){return s.a.color.greyDark}},{key:"getStyle",value:function(){return d.text}}]),t}(c.a),d={text:{fontSize:15,fontWeight:500}}}}]);
//# sourceMappingURL=15.2b3f0b5a.chunk.js.map