(this.webpackJsonplocal_deal=this.webpackJsonplocal_deal||[]).push([[19],{173:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var i=a(1),n=a(4),o=a(5),s=a(7),l=a(6),r=a(8),c=a(0),u=a.n(c),d=a(157),g=a.n(d),p=(a(173),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).onLoadImage=function(e){if(0===e){var t,i=null===(t=document.getElementById("deal-".concat(a.props.dealIndex," image-0")))||void 0===t?void 0:t.clientHeight;i&&(console.log(i),a.setState({imageHeight:i}))}},a.state={},a}return Object(r.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{style:m.sliderWrapper},u.a.createElement(g.a,{dots:this.props.dots,lazyLoad:"progressive",infinite:!1,focusOnSelect:!1,slidesPerRow:1,slidesToShow:1,swipe:this.props.swipe,speed:100},this.generateImages()))}},{key:"generateImages",value:function(){var e=this;return this.props.fileUrls.map((function(t,a){return u.a.createElement("div",null,u.a.createElement("img",{alt:"post",id:"deal-".concat(e.props.dealIndex," image-").concat(a),onLoad:function(){return e.onLoadImage(a)},src:t,style:e.getImageStlye()}))}))}},{key:"getImageStlye",value:function(){return this.state.imageHeight?Object(i.a)({},m.imageDefaultStyle,{height:this.state.imageHeight}):Object(i.a)({},m.imageDefaultStyle)}}]),t}(c.Component)),m={imageDefaultStyle:{minHeight:"100%",minWidth:"100%",objectFit:"cover"},sliderWrapper:{width:"100%"}}}}]);
//# sourceMappingURL=19.1c3fdbd2.chunk.js.map