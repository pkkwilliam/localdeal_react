(this.webpackJsonplocal_deal=this.webpackJsonplocal_deal||[]).push([[0],{102:function(e){e.exports=JSON.parse('{"createDealPage":{"cancel":"\u53d6\u6d88","close":"\u95dc\u9589","create":"\u5275\u5efa","header":"\u5275\u5efa\u597d\u53bb\u8655","textFieldTitle":"\u6a19\u984c"},"landingPage":{"area":"\u5730\u5340","clickToChange":"\u9ede\u64ca\u66f4\u6539","createDealButton":"\u5275\u5efa\u597d\u53bb\u8655","geolocationProvider":"Google API\u5b9a\u4f4d","noDeal":"\u7db2\u53cb\u5011\u672a\u66fe\u6dfb\u52a0\u597d\u53bb\u8655\uff0c\u8acb\u4f60\u5e6b\u52a9\u6211\u5011\u4e00\u8d77\u8986\u84cb\u9019\u500b\u5340\u57df\u597d\u55ce?"},"date":{"day":"\u65e5","today":"\u4eca\u65e5","unknown":"\u4e0d\u660e"},"position":{"currentArea":"\u6240\u5728\u5730\u5340","loading":"\u6211\u5011\u6b63\u5728\u52aa\u529b\u70ba\u60a8\u8b80\u53d6\u5b9a\u4f4d"},"title":"\u53bb\u908a"}')},117:function(e,t,n){e.exports=n(232)},122:function(e,t,n){},232:function(e,t,n){"use strict";n.r(t);var r,o=n(0),a=n.n(o),i=n(11),s=n.n(i),c=(n(122),n(68),n(6)),l=n(7),u=n(9),d=n(8),p=n(10),h=n(15),g=n.n(h),f=n(23);!function(e){e.CREATE_DEAL="CREATE_DEAL",e.GET_DEALS="GET_DEALS",e.GET_CURRENT_ADDRESS="GET_CURRENT_ADDRESS",e.UPLOAD_IMAGE="UPLOAD_IMAGE"}(r||(r={}));var m,b=function(e){return{body:JSON.stringify(e),hasMock:!1,isMultipartFileRequest:!1,method:"POST",url:"/deals",serviceName:r.CREATE_DEAL}},C=function(e){return{hasMock:!0,isMultipartFileRequest:!1,method:"GET",url:"/deals",optionalRequestParam:function(){return"?".concat(O("areaName",e.area||""))},serviceName:r.GET_DEALS}},E=function(e){return{body:e,hasMock:!1,isMultipartFileRequest:!0,method:"POST",url:"/file/multipart",serviceName:r.UPLOAD_IMAGE}},y=function(e){return console.debug("service.ts: generateCurrentAreaRequestParameter -",e),e.areaName?"?".concat(O("areaName",e.areaName)):e.coordinate?"?".concat("latitude","=").concat(e.coordinate.latitude,"&").concat("longitude","=").concat(e.coordinate.longitude):(console.warn("CurrentArea input might be invalid"),"")},O=function(e,t){return"".concat(e,"=").concat(t)},D=function(){function e(t,n,r){var o=this;Object(c.a)(this,e),this.isMock=t,this.serviceUrl=n,this.headers=r,this.generateHeaders=function(e){return e?Object(f.a)({},o.headers):Object(f.a)({},o.headers,{"Content-Type":"application/json"})}}return Object(l.a)(e,[{key:"execute",value:function(e){var t,n,r;return g.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!this.isMock||!e.hasMock){o.next=4;break}return o.abrupt("return",Promise.resolve(A(e.serviceName)));case 4:return t=this.generateHeaders(e.isMultipartFileRequest),n=e.optionalRequestParam?e.optionalRequestParam():"",r=this.serviceUrl+e.url+n,o.abrupt("return",fetch(r,{body:e.body,headers:t,method:e.method,mode:"cors"}).then((function(e){return 204===e.status?Promise.resolve():e.json()})).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.warn("Something is wrong while fetch: ",r,e),Promise.reject(e)})));case 8:case"end":return o.stop()}}),null,this)}},{key:"isJsonResponse",value:function(e){try{return JSON.parse(e),!0}catch(t){return!1}}}]),e}(),A=function(e){switch(e){case r.GET_DEALS:return S;case r.GET_CURRENT_ADDRESS:return v;default:return Promise.reject()}},S={deals:[{address:{id:0,street1:"\u8857\u90531",street2:"\u5730\u4e0bB\u5ea7",city:"\u6fb3\u9580",state:"",zipCode:"",country:"\u6fb3\u9580",coordinate:{latitude:113,longitude:234}},description:'<p><img src="https://storage.cloud.google.com/deal_image/1577871875967"></p>',title:"\u6fb3\u9580 \u86cb\u9039\u738b\u5b50",timestamp:1577872077582},{address:{id:0,street1:"\u8857\u90531",street2:"\u5730\u4e0bB\u5ea7",city:"\u6fb3\u9580",state:"",zipCode:"",country:"\u6fb3\u9580",coordinate:{latitude:113,longitude:234}},description:'<p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul>',title:"\u6fb3\u9580 CRAZY \u86cb\u9039\u738b\u5b50",timestamp:1576871229332},{address:{id:0,street1:"\u8857\u90531",street2:"\u5730\u4e0bB\u5ea7",city:"\u6fb3\u9580",state:"",zipCode:"",country:"\u6fb3\u9580",coordinate:{latitude:113,longitude:234}},description:'<p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul><p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul><p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul><p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul><p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul><p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul><p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul><p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul><p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul><p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul><p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul><p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul><p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul><p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul><p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul><p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul><p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul><p>\u9019\u500b\u6771\u897f\u4e00\u9ede\u90fd\u4e0d\u597d\u5403\u554a!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>\u90fd\u662f\u4ee3\u78bc\uff0c\u600e\u9ebd\u5403\u554a???</li></ul>',title:"\u6fb3\u9580 CRAZY \u86cb\u9039\u738b\u5b50",timestamp:1577872407269}]},v=[{id:0,area:"\u6fb3\u9580",formattedAddress:"\u6fb3\u9580\u99ac\u4ea4\u77f3\u5df7\u4fe1\u660c\u5de5\u696d\u5927\u5ec8",country:"\u6fb3\u9580"},{id:0,area:"\u6fb3\u9580",formattedAddress:"\u6fb3\u9580\u6f01\u7fc1\u8857166\u865f",country:"\u6fb3\u9580"},{id:0,area:"\u6fb3\u9580",formattedAddress:"\u6fb3\u9580\u6f01\u7fc1\u8857148\u865f",country:"\u6fb3\u9580"},{id:0,area:"\u6fb3\u9580",formattedAddress:"\u6fb3\u9580\u6f01\u7fc1\u885790\u865f",country:"\u6fb3\u9580"},{id:0,area:"\u6fb3\u9580",formattedAddress:"\u6fb3\u9580\u82b1\u5730\u746a\u5802\u5340",city:"\u82b1\u5730\u746a\u5802\u5340",country:"\u6fb3\u9580"},{id:0,area:"\u6fb3\u9580",formattedAddress:"\u6fb3\u9580",country:"\u6fb3\u9580"},{id:0,area:"\u6fb3\u9580",formattedAddress:"\u6fb3\u9580",country:"\u6fb3\u9580"}],T=function(){function e(t){Object(c.a)(this,e),this._lables=t}return Object(l.a)(e,[{key:"timeDifferentCalcualtor",value:function(e){if(e){var t=new Date,n=new Date(e),r=t.getTime()-n.getTime();return this.getLabelAccrodingToTimeDifference(r)}return console.warn("timestamp error: ",e),this._lables.date.unknown}},{key:"getLabelAccrodingToTimeDifference",value:function(e){var t=Math.round(e/864e5);return t>0?"".concat(t).concat(this._lables.date.day):this._lables.date.today}},{key:"getCurrentLocation",value:function(e){navigator.geolocation.getCurrentPosition((function(t){var n=t.coords,r=n.latitude,o=n.longitude;e({latitude:r,longitude:o})}))}}]),e}(),k=n(102),x=function(){function e(){Object(c.a)(this,e),this.ALLOW_DEAL_REFRESH=!1,this.DEAL_REFRESH_TIME=5e3,this.APIKEY="vKZywb959gExXaEHSwdzdq7MfZu3Nb",this.X_MADT_APPID="localdeal",this.X_MADT_APP_VERSION="0.0.1",this._serviceExecutor=new D(this.isMock,this.serviceUrl,this.headers),this._transformer=new T(this.labels)}return Object(l.a)(e,[{key:"allowDealRefresh",get:function(){return this.ALLOW_DEAL_REFRESH},set:function(e){this.ALLOW_DEAL_REFRESH=e}},{key:"dealRefreshTime",get:function(){return this.DEAL_REFRESH_TIME}},{key:"headers",get:function(){return{APIKEY:this.APIKEY,XMADTAPPID:this.X_MADT_APPID,XMADTAPPVERSION:this.X_MADT_APP_VERSION}}},{key:"labels",get:function(){return k}},{key:"isMock",get:function(){return!1}},{key:"isProd",get:function(){return!0}},{key:"serviceExecutor",get:function(){return this._serviceExecutor}},{key:"serviceUrl",get:function(){return this.isProd?"https://liuda.site:8082":"http://127.0.0.1:8081"}},{key:"transformer",get:function(){return this._transformer}}]),e}(),j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o))))._appContext=new x,n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"appContext",get:function(){return this._appContext}}]),t}(o.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(ne,{isFlexDirectionRow:!0},a.a.createElement(F,null,this.generateAddressWithSpace(this.props.address)))}},{key:"generateAddressWithSpace",value:function(e){e.street1,e.street2,e.city,e.state,e.zipCode,e.country;return e.formattedAddress||""}},{key:"removeNotValidAddress",value:function(e){return e?"".concat(e," "):""}}]),t}(j),_={button:{borderRadius:15},color:{black:"black",primaryColor:"#78C5EF",secondaryColor:"#7D7D7D",lightGrey:"#f6f6f6",white:"#FFFFFF"},font:{fontSize:16,white:"#FFFFFF"},remind:{primaryColor:"#5CC928",secondaryColor:"#78C5EF"},textField:{borderColor:"#78C5EF",borderRadius:15,borderWidth:2}},R=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("h4",{style:this.props.style?this.props.style:P.textStyle},this.props.children)}}]),t}(o.Component),P={textStyle:{margin:0}},F=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={color:this.props.color?this.props.color:_.color.secondaryColor};return a.a.createElement("h5",{style:Object(f.a)({},L.text,{},e)},this.props.children)}}]),t}(o.Component),L={text:{margin:0}},B=n(270),I=n(266),N=n(271),M=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).onClickedContent=function(){n.setState({isCollapsed:!n.state.isCollapsed})},n.state={isCollapsed:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.collapsedHeight,r=t.contents;return a.a.createElement(I.a,{in:this.state.isCollapsed,collapsedHeight:n||180},a.a.createElement(B.a,{style:G.cardContainer},a.a.createElement(N.a,{onClick:function(){return e.onClickedContent()}},r),"hahaha"))}}]),t}(o.Component),G={cardContainer:{marginLeft:1,marginRight:1,marginBottom:5,marginTop:5}},V=n(275),H=n(5),q={textFieldStyle:{height:"100%",marginLeft:10,marginRight:10,width:"80%"}},z=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.onBlur?this.props.onBlur:function(){},n=this.props.onFocus?this.props.onFocus:function(){};return a.a.createElement(V.a,{InputProps:{classes:{notchedOutline:this.props.classes.notchedOutline}},label:this.props.text,onBlur:function(){return t()},onChange:function(t){return e.props.onChange(t.target.value)},onFocus:function(){return n()},style:q.textFieldStyle,defaultValue:this.props.defaultValue,variant:"outlined"},this.props.children)}}]),t}(j),W=Object(H.a)(function(e){var t=e.textField;return{notchedOutline:{borderColor:t.borderColor,borderRadius:t.borderRadius,borderWidth:t.borderWidth}}}(_))(z),U=n(105),X=n.n(U),J=(n(230),n(106)),Y=n.n(J),K=[["bold","italic","underline","strike",{header:[1,2,3,4,5,6,!1]},{align:[]}],["image"],["link"],[{list:"ordered"},{list:"bullet"}],[{color:[]},{background:[]}],["clean"]],Z=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).quillRef=void 0,n.imageHandler=function(){var e;return g.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:(e=document.createElement("input")).setAttribute("type","file"),e.setAttribute("accept","image/*"),e.click(),e.onchange=function(){var t,r,o,a,i,s;return g.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(!e.files){c.next=16;break}return t=e.files[0],r=n.quillRef.getSelection(!0),c.next=5,g.a.awrap(n.getImageInfo(t));case 5:return o=c.sent,o.height,o.size,a=o.type,o.width,c.next=12,g.a.awrap(n.imageResize(t,a,300,300,50));case 12:i=c.sent,(s=new FormData).append("image",i,"image"),n.appContext.serviceExecutor.execute(E(s)).then((function(e){var t=e.url;n.quillRef.insertEmbed(r.index,"image",t),n.quillRef.setSelection(r.index+1),n.quillRef.setSelection()}));case 16:case"end":return c.stop()}}))};case 5:case"end":return t.stop()}}))},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(X.a,{ref:function(t){return e.quillRef=null===t||void 0===t?void 0:t.getEditor()},modules:this.getModules(),onChange:function(t){return e.props.onChangeValue(t)}})}},{key:"getModules",value:function(){return{toolbar:{container:K,handlers:{image:this.imageHandler}}}}},{key:"getImageInfo",value:function(e){var t;return g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new Image,n.next=3,g.a.awrap(URL.createObjectURL(e));case 3:return t.src=n.sent,console.info("input image type:".concat(e.type," size:").concat(e.size," height:").concat(t.height," width:").concat(t.width)),n.abrupt("return",{height:t.height,size:e.size,type:e.type,width:t.width});case 6:case"end":return n.stop()}}))}},{key:"imageResize",value:function(e,t,n,r,o){var a;return g.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return a=e,i.next=3,g.a.awrap(Y.a.imageFileResizer(e,n,r,t,o,0,(function(e){a=e}),"blob"));case 3:return i.abrupt("return",a);case 4:case"end":return i.stop()}}))}}]),t}(j),$=n(276),Q=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onClickPrimaryButton,n=e.onClickSecondaryButton,r=e.primaryButtonLabel,o=e.secondaryButtonLabel;return a.a.createElement(ne,{isFlexDirectionRow:!0,style:ee.rootContainer},a.a.createElement($.a,{onClick:function(){return t()},variant:"outlined"},a.a.createElement(F,null,r)),a.a.createElement($.a,{onClick:function(){return n()},variant:"outlined"},a.a.createElement(F,null,o)))}}]),t}(j),ee={rootContainer:{alignItem:"space-between"}},te=n(274),ne=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(te.a,Object.assign({display:"flex",flexDirection:this.props.isFlexDirectionRow?"row":"column",alignItems:this.props.alignItems?this.props.alignItems:"start",justifyContent:this.props.justifyContent?this.props.justifyContent:"start",onClick:function(){return e.props.onClick?e.props.onClick():{}},style:this.props.style},this.props),this.props.children)}}]),t}(j),re=function(e){function t(){var e,n,r=this;Object(c.a)(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).BodySection=function(){return a.a.createElement(r.DealsSection,null)},n.DealsSection=function(){var e=(n.props.deals?n.props.deals:[]).map((function(e){return a.a.createElement(M,{contents:n.generateCardContent(e),onClick:function(){return n.props.onClickCard()},title:e.title})}));return a.a.createElement(te.a,{onClick:function(){return n.props.onClickDealSection()},style:oe.dealSectionContainer},e.length?e:a.a.createElement(r.NoDealInArea,null))},n.NoDealInArea=function(){return a.a.createElement("p",null,n.appContext.labels.landingPage.noDeal)},n.SearchButton=function(){return n.props.showSearchButton?a.a.createElement($.a,{onClick:function(){return n.props.onClickSearch()},style:oe.searchButton,variant:"outlined"},a.a.createElement(F,{color:_.font.white},"Need Label - \u641c\u5c0b")):null},n.TextFieldArea=function(){return a.a.createElement(W,{defaultValue:n.props.textFieldValue,onBlur:function(){return n.props.onBlurTextField()},onChange:function(e){return n.props.onChangeSearchTextField(e)},onFocus:function(){return n.props.onFocusTextField()},text:n.appContext.labels.landingPage.area})},n.generateCardContent=function(e){var t=e.address,r=(e.category,e.discussions,e.description),o=e.title,i=(e.timeAvailable,e.timestamp);e.vote;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ne,{isFlexDirectionRow:!0,style:oe.cardContainer},a.a.createElement(R,null,o),a.a.createElement(F,null,i?n.appContext.transformer.timeDifferentCalcualtor(i):"Need Label - \u4e0d\u660e")),a.a.createElement(ne,null,a.a.createElement(w,{address:t}),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(ne,{style:oe.rootContainer},a.a.createElement(this.BodySection,null))}}]),t}(j),oe={cardContainer:{justifyContent:"space-between"},circularProgress:{marginLeft:5},createNewButton:{borderColor:_.color.secondaryColor,borderRadius:_.button.borderRadius,borderWidth:3},dealSectionContainer:{marginTop:20,width:"100%"},locationButtonContainer:{alignItems:"center",justifyContent:"center"},rootContainer:{alignItems:"center",justifyContent:"center",paddingLeft:20,paddingRight:20,paddingBottom:20},searchButton:{borderColor:_.remind.secondaryColor,borderRadius:_.button.borderRadius,backgroundColor:_.remind.secondaryColor,borderWidth:3},searchMethodLabel:{coordinate:{borderColor:_.remind.primaryColor,borderRadius:_.button.borderRadius,backgroundColor:_.remind.primaryColor,borderWidth:3,paddingBottom:5,paddingTop:5},manual:{borderColor:_.remind.secondaryColor,borderRadius:_.button.borderRadius,backgroundColor:_.remind.secondaryColor,borderWidth:3,paddingBottom:5,paddingTop:5}},topBarContainer:{justifyContent:"space-between",paddingTop:20,width:"100%"}},ae=n(25);!function(e){e.SET_ADDRESS_PREDICTION="SET_ADDRESS_PREDICTION",e.SET_DEALS="SET_DEAL",e.SET_LOADING_POSITION="SET_LOADING_POSITION",e.SET_GEOLOCATION="SET_GEOLOCATION",e.SET_SELECTED_ADDRESS="SET_SELECTED_ADDRESS"}(m||(m={}));var ie=function(e){return function(t){t({type:m.SET_DEALS,payload:e})}},se=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).onBlurTextField=function(){console.log("onBlurTextField")},n.onClickedCard=function(){console.log("Card Clicked")},n.onClickedDealSection=function(){console.log("onClickedDealSection"),n.setState({showSearchButton:!1})},n.onClickSearch=function(){console.log("onClickSearch")},n.onChangeSearchTextField=function(e){console.log("onChangeSearchTextField"),n.setState({})},n.onFocusTextField=function(){console.log("onFocusTextField"),n.setState({showSearchButton:!0})},n.state={isCreateDealDrawerOpen:!1,showSearchButton:!1,textFieldValue:"",useAutoLocation:!0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){return g.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.awrap(this.setCurrentPosition());case 2:return e.next=4,g.a.awrap(this.setCurrentAddress());case 4:case"end":return e.stop()}}),null,this)}},{key:"setCurrentPosition",value:function(){var e=this;return g.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.appContext.isMock){t.next=2;break}return t.abrupt("return",Promise.resolve());case 2:return t.abrupt("return",new Promise((function(t,n){e.appContext.transformer.getCurrentLocation((function(n){return console.debug("Current Coordinate: ",n),e.props.setGeolocation(n),t()}))})));case 3:case"end":return t.stop()}}),null,this)}},{key:"setCurrentAddress",value:function(){var e=this;return g.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var o;e.appContext.serviceExecutor.execute((o={coordinate:e.props.position.coordinate},{method:"GET",hasMock:!0,isMultipartFileRequest:!1,url:"/position",optionalRequestParam:function(){return y(o)},serviceName:r.GET_CURRENT_ADDRESS})).then((function(n){return e.props.setAddressPrediction(n),e.props.setLoadingPosition(!1),t()}))})));case 1:case"end":return t.stop()}}))}},{key:"sortDeals",value:function(e){e.sort((function(e,t){return t.timestamp-e.timestamp}))}},{key:"render",value:function(){var e=this.state,t=(e.isCreateDealDrawerOpen,e.showSearchButton),n=e.textFieldValue;e.useAutoLocation;return this.sortDeals(this.props.deals),a.a.createElement(re,{deals:this.props.deals,onBlurTextField:this.onBlurTextField,onClickCard:this.onClickedCard,onClickDealSection:this.onClickedDealSection,onClickSearch:this.onClickSearch,onChangeSearchTextField:this.onChangeSearchTextField,onFocusTextField:this.onFocusTextField,selectedAddress:this.props.selectedAddress,showSearchButton:t,textFieldValue:n})}}]),t}(j),ce=Object(ae.b)((function(e){return{addressesPrediction:e.addressesPrediction,deals:e.deals,position:e.position,selectedAddress:e.selectedAddress}}),{setAddressPrediction:function(e){return function(t){t({type:m.SET_ADDRESS_PREDICTION,payload:e})}},setDeals:ie,setGeolocation:function(e){return function(t){t({type:m.SET_GEOLOCATION,payload:e})}},setLoadingPosition:function(e){return function(t){t({type:m.SET_LOADING_POSITION,payload:e})}}})(se),le={addressesPrediction:[],deals:[],isLoadingPosition:!0,position:{areaName:"",coordinate:{latitude:0,longitude:0}},selectedAddress:{area:"",street1:"",street2:"",city:"",state:"",country:"",zipCode:""}},ue=function(e,t){return Object(f.a)({},e,{addressesPrediction:t})},de=function(e,t){return Object(f.a)({},e,{deals:t.deals})},pe=function(e,t){return Object(f.a)({},e,{isLoadingPosition:t})},he=function(e,t){return Object(f.a)({},e,{position:{coordinate:t}})},ge=function(e,t){return Object(f.a)({},e,{selectedAddress:t})},fe=n(51),me=[n(110).a],be=Object(fe.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(console.log("Redux",t.type),t.type){case m.SET_ADDRESS_PREDICTION:return ue(e,t.payload);case m.SET_DEALS:return de(e,t.payload);case m.SET_GEOLOCATION:return he(e,t.payload);case m.SET_LOADING_POSITION:return pe(e,t.payload);case m.SET_SELECTED_ADDRESS:return ge(e,t.payload);default:return e}}),fe.a.apply(void 0,me)),Ce=n(278),Ee=function(e){function t(){var e,n,r=this;Object(c.a)(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).AddressSection=function(){return a.a.createElement(ne,{style:{margin:10}},n.props.useAutoPosition?a.a.createElement(r.AddressAutoPositionDisplay,null):a.a.createElement(r.AddressTextField,null))},n.AddressAutoPositionDisplay=function(){return a.a.createElement(w,{address:n.props.currentAddress})},n.AddressTextField=function(){return null},n.ButtonSection=function(){var e=n.appContext.labels.createDealPage;return a.a.createElement(Q,{onClickPrimaryButton:function(){return n.props.onClickSubmit()},onClickSecondaryButton:function(){return n.props.onClickClose()},primaryButtonLabel:e.create,secondaryButtonLabel:e.cancel})},n.DescriptionTextField=function(){return a.a.createElement(Z,{onChangeValue:n.props.onChangeRichTextValue})},n.HeaderSection=function(){var e=n.appContext.labels.createDealPage;return a.a.createElement(ne,{style:ye.headerContainer,isFlexDirectionRow:!0},a.a.createElement(R,{style:ye.headerText},e.header),a.a.createElement($.a,{onClick:function(){return n.props.onClickClose()}},a.a.createElement(F,null,e.close)))},n.HourOfOperationSection=function(){return null},n.TitleTextField=function(){return a.a.createElement(W,{onChange:n.props.onChangeTitleTextField,text:n.appContext.labels.createDealPage.textFieldTitle})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(ne,{style:ye.rootContainer},a.a.createElement(this.HeaderSection,null),a.a.createElement(this.AddressSection,null),a.a.createElement(this.TitleTextField,null),a.a.createElement(this.HourOfOperationSection,null),a.a.createElement(this.DescriptionTextField,null),a.a.createElement(this.ButtonSection,null))}}]),t}(j),ye={headerContainer:{justifyContent:"space-between",width:"80%"},headerText:{marginTop:10},rootContainer:{alignItems:"center",justifyContent:"center",marginLeft:20,marginRight:20}},Oe=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).onChangeRichTextValue=function(e){n.setState({richTextValue:e})},n.onChangeTitleTextField=function(e){n.setState({title:e})},n.onClickSubmit=function(){return g.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.awrap(n.appContext.serviceExecutor.execute(b(n.generateDeal())));case 2:return n.props.onClickClose(),e.next=5,g.a.awrap(n.appContext.serviceExecutor.execute(C(n.props.currentAddress)).then((function(e){return n.props.setDeals(e)})));case 5:case"end":return e.stop()}}))},n.state={richTextValue:"",title:"",useAutoPosition:!0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(Ee,{currentAddress:this.props.currentAddress,onChangeRichTextValue:this.onChangeRichTextValue,onChangeTitleTextField:this.onChangeTitleTextField,onClickClose:function(){return e.props.onClickClose()},onClickSubmit:this.onClickSubmit,useAutoPosition:this.state.useAutoPosition})}},{key:"generateDeal",value:function(){return{address:this.props.currentAddress,description:this.state.richTextValue,timestamp:0,title:this.state.title}}}]),t}(j),De=Object(ae.b)((function(e){return{currentAddress:e.selectedAddress}}),{setDeals:ie})(Oe),Ae=n(272),Se=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).onSelectAddress=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(n.props.addressPrediction){var t=n.props.addressPrediction[e];n.props.setSelectedAddress(t),n.setDeals(t)}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.setDefaultSelectedAddress(),null}},{key:"setDefaultSelectedAddress",value:function(){this.props.addressPrediction.length>0&&!this.props.selectedAddress.area&&this.onSelectAddress()}},{key:"setDeals",value:function(e){var t,n=this;e.area!==(null===(t=this.props.selectedAddress)||void 0===t?void 0:t.area)&&this.appContext.serviceExecutor.execute(C(e)).then((function(e){n.props.setDeals(e)}))}}]),t}(j),ve=Object(ae.b)((function(e){return{addressPrediction:e.addressesPrediction,isPositionLoading:e.isLoadingPosition,selectedAddress:e.selectedAddress}}),{setDeals:ie,setSelectedAddress:function(e){return function(t){t({type:m.SET_SELECTED_ADDRESS,payload:e})}}})(Se),Te=(n(279),n(280),n(103),function(e){function t(){var e,n,r=this;Object(c.a)(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).CreateDealDrawer=function(){return a.a.createElement(Ce.a,{anchor:"top",open:n.props.isCreateDealDrawerOpen,onClose:n.props.onCloseCreateDeal},a.a.createElement(De,{onClickClose:n.props.onCloseCreateDeal}))},n.CreateNewDealButton=function(){return a.a.createElement($.a,{style:ke.createNewButton,onClick:n.props.onClickCreateDeal,variant:"outlined"},a.a.createElement(F,null,n.appContext.labels.landingPage.createDealButton))},n.HeaderTextAndLogo=function(){return a.a.createElement(R,null,n.appContext.labels.title)},n.LocationButton=function(){var e=n.props.selectedAddress&&""!==n.props.selectedAddress.area;return a.a.createElement($.a,{disabled:!0,onClick:n.props.onClickLocationButton,style:ke.searchMethodLabel,variant:"outlined"},a.a.createElement(ne,{isFlexDirectionRow:!0,style:ke.locationButtonContainer},a.a.createElement(F,{color:_.font.white},"".concat(n.appContext.labels.landingPage.geolocationProvider,":")),e?a.a.createElement(F,{color:_.font.white},n.props.selectedAddress.area):a.a.createElement(Ae.a,{size:15,style:ke.circularProgress,variant:"indeterminate"})))},n.TopBarSection=function(){return a.a.createElement(ne,{isFlexDirectionRow:!0,style:ke.buttonContainer},a.a.createElement(r.LocationButton,null),a.a.createElement(r.CreateNewDealButton,null))},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(ne,{boxShadow:1,isFlexDirectionRow:!0,style:ke.rootContainer},a.a.createElement(ve,null),a.a.createElement(this.CreateDealDrawer,null),a.a.createElement(this.HeaderTextAndLogo,null),a.a.createElement(this.TopBarSection,null))}}]),t}(j)),ke={buttonContainer:{justifyContent:"space-between"},circularProgress:{marginLeft:5},createNewButton:{borderColor:_.color.secondaryColor,borderRadius:_.button.borderRadius,borderWidth:3},locationButtonContainer:{alignItems:"center",justifyContent:"center"},rootContainer:{backgroundColor:_.color.white,justifyContent:"space-between",padding:20},searchMethodLabel:{backgroundColor:_.remind.primaryColor,borderColor:_.remind.primaryColor,borderRadius:_.button.borderRadius,marginRight:10,borderWidth:3,paddingBottom:5,paddingTop:5}},xe=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).onClickCreateDeal=function(){console.log("onClickCreateDeal"),n.setState({isCreateDealDrawerOpen:!0})},n.onCloseCreateDeal=function(){console.log("onCloseCreateDeal"),n.setState({isCreateDealDrawerOpen:!1})},n.onClickLocationButton=function(){console.log("onClickLocationButton"),n.setState({useAutoLocation:!0})},n.state={isCreateDealDrawerOpen:!1,useAutoLocation:!0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(Te,{isCreateDealDrawerOpen:this.state.isCreateDealDrawerOpen,onClickCreateDeal:this.onClickCreateDeal,onCloseCreateDeal:this.onCloseCreateDeal,onClickLocationButton:this.onClickLocationButton,selectedAddress:this.props.selectedAddress})}}]),t}(j),je=Object(ae.b)((function(e){return{addressesPrediction:e.addressesPrediction,position:e.position,selectedAddress:e.selectedAddress}}))(xe),we=function(){return a.a.createElement(ae.a,{store:be},a.a.createElement("div",{className:"App"},a.a.createElement(je,null),a.a.createElement(ce,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},68:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.ade0d37b.chunk.js.map