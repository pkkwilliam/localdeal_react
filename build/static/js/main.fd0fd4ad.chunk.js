(this.webpackJsonplocal_deal=this.webpackJsonplocal_deal||[]).push([[3],[,,,,,function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.Banner="Banner",e.CollapseCard="CollapseCard",e.CreateDeal="CreateDeal",e.Drawer="Drawer",e.Header="Header",e.HeaderMenu="HeaderMenu",e.LandingPage="LandingPage",e.Slide="Slide"}(r||(r={}))},,function(e,t,n){"use strict";n.d(t,"j",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return h})),n.d(t,"k",(function(){return p}));var r;!function(e){e.CREATE_DEAL="CREATE_DEAL",e.CREATE_VOTE="CREATE_VOTE",e.GET_CURRENT_ADDRESS="GET_CURRENT_ADDRESS",e.GET_DEALS="GET_DEALS",e.GET_PRESIGNED_URL="GET_PRESIGNED_URL",e.GET_USER_PROFILE="GET_USER_PROFILE",e.LOGIN_OAUTH_GOOGLE="LOGIN_OAUTH_GOOGLE",e.LOGOUT_OAUTH="LOGOUT_OAUTH",e.TEST="TEST",e.UPLOAD_IMAGE="UPLOAD_IMAGE",e.UPLOAD_IMAGE_SIGNED_URL="UPLOAD_IMAGE_SIGNED_URL"}(r||(r={}));var a=function(e){return{body:JSON.stringify(e),externalService:!1,hasMock:!1,isMultipartFileRequest:!1,method:"POST",url:"/deals",serviceName:r.CREATE_DEAL}},i=function(e){return{body:JSON.stringify(e),externalService:!1,hasMock:!1,isMultipartFileRequest:!1,method:"POST",url:"/vote",serviceName:r.CREATE_VOTE}},s=function(e){return{externalService:!1,method:"GET",hasMock:!0,isMultipartFileRequest:!1,url:"/position",optionalRequestParam:function(){return f(e)},serviceName:r.GET_CURRENT_ADDRESS}},o=function(e){return{externalService:!1,hasMock:!0,isMultipartFileRequest:!1,method:"GET",url:"/deals",optionalRequestParam:function(){return"?".concat(m("areaName",e.area||""))},serviceName:r.GET_DEALS}},c=function(e,t){return{externalService:!1,hasMock:!1,isMultipartFileRequest:!1,method:"GET",url:"/file",optionalRequestParam:function(){return"?contentType=".concat(e,"&fileName=").concat(t)},serviceName:r.GET_PRESIGNED_URL}},u=function(){return{externalService:!1,hasMock:!0,isMultipartFileRequest:!1,method:"GET",url:"/userProfile",serviceName:r.GET_USER_PROFILE}},l=function(e,t){return{externalService:!1,hasMock:!1,isMultipartFileRequest:!1,method:"POST",url:"/oauth/google",optionalRequestParam:function(){return g(["authorizationCode",e,"redirectUrl",t])},serviceName:r.LOGIN_OAUTH_GOOGLE}},d=function(){return{externalService:!1,hasMock:!1,isMultipartFileRequest:!1,method:"DELETE",url:"/oauth",serviceName:r.LOGOUT_OAUTH}},h=function(e){return{externalService:!1,hasMock:!1,isMultipartFileRequest:!1,method:"POST",optionalRequestParam:function(){return"?fileDetail=".concat(e)},url:"/file",serviceName:r.CREATE_DEAL}},p=function(e,t){return{body:e,customHeader:{"Content-Type":e.type},externalService:!0,hasMock:!1,isMultipartFileRequest:!0,method:"PUT",url:t,serviceName:r.UPLOAD_IMAGE_SIGNED_URL}},f=function(e){return console.debug("service.ts: generateCurrentAreaRequestParameter -",e),e.areaName?"?".concat(m("areaName",e.areaName)):e.coordinate?"?".concat("latitude","=").concat(e.coordinate.latitude,"&").concat("longitude","=").concat(e.coordinate.longitude):(console.warn("CurrentArea input might be invalid"),"")},g=function(e){var t="?";if(e.length%2===0)for(var n=0;n<e.length;n+=2)0!==n&&(t+="&"),t+="".concat(e[n],"=").concat(e[n+1]);return console.debug("generateUrlParameter:",t),t},m=function(e,t){return"".concat(e,"=").concat(t)}},function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.GOOGLE="GOOGLE",e.WECHAT="WECHAT",e.NONE="NONE"}(r||(r={}))},,,,function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.CONTACT_SHOW_EMAIL="CONTACT_SHOW_EMAIL",e.HEADER_MENU="HEADER_MENU",e.CREATE_DEAL_DRAFT="CREATE_DEAL_DRAFT",e.LOGIN_GOOGLE_OAUTH="LOGIN_GOOGLE_OAUTH",e.LOGIN_WECHAT_OAUTH="LOGIN_WECHAT_OAUTH",e.USER_PROFILE_IN_HEADER="USER_PROFILE_IN_HEADER",e.USER_PROFILE_IN_HEADER_MENU="USER_PROFILE_IN_HEADER_MENU"}(r||(r={}))},,function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),a=n.n(r),i=n(5),s=function(e){return a.a.lazy((function(){return function(e){switch(e){case i.a.Banner:return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,43));case i.a.CollapseCard:return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,47));case i.a.CreateDeal:return Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(14)]).then(n.bind(null,44));case i.a.Drawer:return Promise.all([n.e(0),n.e(2),n.e(11)]).then(n.bind(null,45));case i.a.Header:return Promise.all([n.e(0),n.e(1),n.e(8),n.e(15)]).then(n.bind(null,46));case i.a.HeaderMenu:return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,41));case i.a.LandingPage:return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,42));case i.a.Slide:return Promise.all([n.e(6),n.e(16)]).then(n.bind(null,40))}}(e)}))}},function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=a.a.createContext({})},function(e,t,n){"use strict";var r=n(2),a=n(3),i=n(10),s=n(9),o=n(11),c=n(0),u=n(4),l=n.n(u),d=n(1),h=n(7),p=function(){function e(t,n,a){var i=this;Object(r.a)(this,e),this.isMock=t,this.serviceUrl=n,this.headers=a,this.generateHeaders=function(e){return e.isMultipartFileRequest?Object(d.a)({},i.headers):Object(d.a)({},i.headers,{"Content-Type":"application/json"})}}return Object(a.a)(e,[{key:"execute",value:function(e){var t,n,r;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!this.isMock||!e.hasMock){a.next=4;break}return a.abrupt("return",Promise.resolve(f(e.serviceName)));case 4:return t=this.generateHeaders(e),n=e.optionalRequestParam?e.optionalRequestParam():"",r=e.externalService?e.url:this.serviceUrl+e.url+n,a.abrupt("return",fetch(r,{body:e.body,credentials:e.externalService?"omit":"include",headers:e.externalService?e.customHeader:t,method:e.method,mode:"cors"}).then((function(e){var t,n=null===(t=e.headers.get("content-type"))||void 0===t?void 0:t.match("application/json"),r=e.status;return r<400?204!==r&&n?Promise.resolve(e.json()):Promise.resolve():e.status>400?Promise.reject():void 0})).catch((function(e){return console.warn("Something is wrong while fetch: ",r,e),Promise.reject(e)})));case 8:case"end":return a.stop()}}),null,this)}},{key:"isJsonResponse",value:function(e){try{return JSON.parse(e),!0}catch(t){return!1}}}]),e}(),f=function(e){switch(console.debug("get mock response:",e),e){case h.j.GET_DEALS:return g;case h.j.GET_CURRENT_ADDRESS:return m;case h.j.GET_USER_PROFILE:return E;default:return Promise.reject()}},g={deals:[{id:0,address:{id:0,street1:"\u8857\u90531",street2:"\u5730\u4e0bB\u5ea7",city:"\u6fb3\u9580",formattedAddress:"\u6fb3\u9580\u6f01\u7fc1\u885724\u865f",state:"",zipCode:"",country:"\u6fb3\u9580",coordinate:{latitude:113,longitude:234}},description:'<p><img src="https://storage.cloud.google.com/deal_image/1577871875967"></p>',filesUrl:["https://open-shelf.ca/wp-content/uploads/2015/03/twitter-logo-small-1024x576@2x.jpg","https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"],serverIdentifierName:"MACAU",title:"\u6fb3\u9580 \u86cb\u9039\u738b\u5b50",timestamp:1577872077582},{id:1,address:{id:0,street1:"\u8857\u90531",street2:"\u5730\u4e0bB\u5ea7",city:"\u6fb3\u9580",formattedAddress:"\u6fb3\u9580\u6f01\u7fc1\u885724\u865f",state:"",zipCode:"",country:"\u6fb3\u9580",coordinate:{latitude:113,longitude:234}},description:"The content of ExpansionPanels is mounted by default even if the panel is not expanded. This default behavior has server-side rendering and SEO in mind. If you render expensive component trees inside your panels or simply render many panels it might be a good idea to change this default behavior by enabling the unmountOnExit in TransitionProps:",filesUrl:["https://open-shelf.ca/wp-content/uploads/2015/03/twitter-logo-small-1024x576@2x.jpg","https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png","https://open-shelf.ca/wp-content/uploads/2015/03/twitter-logo-small-1024x576@2x.jpg","https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png","https://open-shelf.ca/wp-content/uploads/2015/03/twitter-logo-small-1024x576@2x.jpg"],serverIdentifierName:"MACAU",title:"\u6fb3\u9580 CRAZY \u86cb\u9039\u738b\u5b50",timestamp:1576871229332},{id:2,address:{id:0,street1:"\u8857\u90531",street2:"\u5730\u4e0bB\u5ea7",city:"\u6fb3\u9580",formattedAddress:"\u6fb3\u9580\u6f01\u7fc1\u885724\u865f",state:"",zipCode:"",country:"\u6fb3\u9580",coordinate:{latitude:113,longitude:234}},description:"The content of ExpansionPanels is mounted by default even if the panel is not expanded. This default behavior has server-side rendering and SEO in mind. If you render expensive component trees inside your panels or simply render many panels it might be a good idea to change this default behavior by enabling the unmountOnExit in TransitionProps:",filesUrl:["https://open-shelf.ca/wp-content/uploads/2015/03/twitter-logo-small-1024x576@2x.jpg","https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"],serverIdentifierName:"MACAU",title:"\u6fb3\u9580 CRAZY \u86cb\u9039\u738b\u5b50",timestamp:1576871229332}]},m=[{id:0,area:"\u6fb3\u9580",formattedAddress:"\u6fb3\u9580\u6f01\u7fc1\u8857166\u865f",country:"\u6fb3\u9580"},{id:0,area:"\u6fb3\u9580",formattedAddress:"\u6fb3\u9580\u6f01\u7fc1\u8857166\u865f",country:"\u6fb3\u9580"},{id:0,area:"\u6fb3\u9580",formattedAddress:"\u6fb3\u9580\u6f01\u7fc1\u8857148\u865f",country:"\u6fb3\u9580"},{id:0,area:"\u6fb3\u9580",formattedAddress:"\u6fb3\u9580\u6f01\u7fc1\u885790\u865f",country:"\u6fb3\u9580"},{id:0,area:"\u6fb3\u9580",formattedAddress:"\u6fb3\u9580\u82b1\u5730\u746a\u5802\u5340",city:"\u82b1\u5730\u746a\u5802\u5340",country:"\u6fb3\u9580"},{id:0,area:"\u6fb3\u9580",formattedAddress:"\u6fb3\u9580",country:"\u6fb3\u9580"},{id:0,area:"\u6fb3\u9580",formattedAddress:"\u6fb3\u9580",country:"\u6fb3\u9580"}],E={id:0,name:"Mock User",imageUrl:"https://www.picclickimg.com/d/l400/pict/163647152800_/Cubd-Collectibles-Disney-Frozen-Elsa-Small-Soft-Stuffed.jpg",oAuthProvider:"GOOGLE"},A=function(){function e(t){Object(r.a)(this,e),this._lables=t}return Object(a.a)(e,[{key:"timeDifferentCalcualtor",value:function(e){if(e){var t=new Date,n=new Date(e),r=t.getTime()-n.getTime();return this.getLabelAccrodingToTimeDifference(r)}return console.warn("timestamp error: ",e),this._lables.date.unknown}},{key:"getLabelAccrodingToTimeDifference",value:function(e){var t=Math.round(e/864e5);return t>0?"".concat(t).concat(this._lables.date.day):this._lables.date.today}},{key:"getCurrentLocation",value:function(e){navigator.geolocation.getCurrentPosition((function(t){var n=t.coords,r=n.latitude,a=n.longitude;e({latitude:r,longitude:a})}))}}]),e}(),O=n(22),v=n(12),_=function(){function e(){Object(r.a)(this,e),this.ALLOW_DEAL_REFRESH=!1,this.DEAL_REFRESH_TIME=5e3,this.APIKEY="vKZywb959gExXaEHSwdzdq7MfZu3Nb",this.X_MADT_APPID="localdeal",this.X_MADT_APP_VERSION="0.0.1",this._serviceExecutor=new p(this.isMock,this.serviceUrl,this.headers),this._transformer=new A(this.labels)}return Object(a.a)(e,[{key:"allowDealRefresh",get:function(){return this.ALLOW_DEAL_REFRESH},set:function(e){this.ALLOW_DEAL_REFRESH=e}},{key:"dealRefreshTime",get:function(){return this.DEAL_REFRESH_TIME}},{key:"features",get:function(){return[v.a.CREATE_DEAL_DRAFT,v.a.CONTACT_SHOW_EMAIL,v.a.HEADER_MENU,v.a.LOGIN_GOOGLE_OAUTH,v.a.LOGIN_WECHAT_OAUTH]}},{key:"headers",get:function(){return{APIKEY:this.APIKEY,XMADTAPPID:this.X_MADT_APPID,XMADTAPPVERSION:this.X_MADT_APP_VERSION}}},{key:"labels",get:function(){return O}},{key:"isMock",get:function(){return!1}},{key:"isProd",get:function(){return!0}},{key:"oAuthRedirectUrl",get:function(){return this.isProd?"https://liuda.site":"http://127.0.0.1:3000"}},{key:"serviceExecutor",get:function(){return this._serviceExecutor}},{key:"serviceUrl",get:function(){return this.isProd?"https://liuda.site:8082":"http://127.0.0.1:8081"}},{key:"transformer",get:function(){return this._transformer}}]),e}(),P=n(8),b=n(23),T=n.n(b),y=n(24),D=n.n(y),R=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,[{key:"imageCompress",value:function(e,t,n,r,a){return new Promise((function(i,s){T.a.imageFileResizer(e,r/5,n,t,a,0,(function(e){i(e)}),"blob")}))}},{key:"getImageInfo",value:function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var r=new Image;r.src=URL.createObjectURL(e),r.onload=function(){return t({height:r.height,size:e.size,type:e.type,width:r.width})}})));case 1:case"end":return t.stop()}}))}},{key:"imagePrecprocess",value:function(e){var t,n,r,a,i,s,o,c,u;return l.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,l.a.awrap(this.transferToBlob(e));case 2:return t=d.sent,d.next=5,l.a.awrap(this.getImageInfo(t));case 5:return n=d.sent,r=n.height,a=n.size,i=n.type,s=n.width,console.debug("original image size:",a),o=a>1e5?10:100,c=i.split("/"),d.next=15,l.a.awrap(this.imageCompress(t,c[c.length-1],r,s,o));case 15:return u=d.sent,d.next=18,l.a.awrap(this.getImageInfo(u));case 18:return d.abrupt("return",Promise.resolve(u));case 19:case"end":return d.stop()}}),null,this)}},{key:"transferToBlob",value:function(e){return new Promise((function(t,n){return fetch(e).then((function(e){return e.blob()})).then((function(e){return t(e)}))}))}},{key:"fixRotation",value:function(e){var t=this;return new Promise((function(n,r){D()(e,(function(r){return n(r.toDataURL(t.guessImageMime(e)))}),{orientation:!0})}))}},{key:"guessImageMime",value:function(e){return"/"===e.charAt(0)?"image/jpeg":"R"===e.charAt(0)?"image/gif":"i"===e.charAt(0)?"image/png":""}}]),e}(),S=n(15);n.d(t,"a",(function(){return L}));var L=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o))))._appContext=new _,n._imageProcessor=new R,n}return Object(o.a)(t,e),Object(a.a)(t,[{key:"checkOAuth",value:function(){var e=window.location.search,t=new URLSearchParams(e),n=t.get("state"),r=t.get("code"),a=P.a.NONE,i="";return n===P.a.GOOGLE&&(a=P.a.GOOGLE,i=null!==r&&void 0!==r?r:""),{authorizationCode:i,oAuthProvider:a}}},{key:"onOAuthLoginComplete",value:function(){window.history.pushState(null,document.title,"/")}},{key:"appContext",get:function(){return this._appContext}},{key:"appState",get:function(){return this.context}},{key:"imageProcessor",get:function(){return this._imageProcessor}}]),t}(c.Component);L.contextType=S.a},,,,,,function(e){e.exports=JSON.parse('{"addressDisplay":{"nearBy":"\u9644\u8fd1"},"banner":{},"createDealPage":{"cancel":"\u53d6\u6d88","close":"\u95dc\u9589","create":"\u5275\u5efa","descriptionMissing":"* \u6ca1\u6709\u8a73\u7d30\u554a...","descriptionPlaceHolder":"\u8acb\u52a0\u5165\u5167\u5bb9...","header":"\u5275\u5efa\u597d\u53bb\u8655","textFieldTitle":"\u6a19\u984c","titleMissing":"* \u6ca1\u6709\u6a19\u984c\u554a..."},"createDealPageV2":{"descriptionPlaceHolder":"\u8b1b\u4e00\u4e0b\u7279\u5225\u7684\u5730\u65b9","error":"\u4f3a\u670d\u5668\u51fa\u932f\u5566!!!\u7a0b\u5e8f\u733f\u5df2\u7d93\u5728\u8def\u4e0a\u4e86!!!","imageDimensionTips":"\u6bd4\u4f8b\u76f8\u7d04\u7684\u5716\u7247\u6703\u7372\u5f97\u66f4\u597d\u7684\u89c0\u8cde\u9ad4\u9a57","missingAddress":"* \u7d66\u9ede\u81c9\u5b50\u9078\u500b\u5730\u5740\u5566","missingField":"* \u81f3\u5c11\u52a0\u4e00\u9ede\u5167\u5bb9\u5427","saveDraft":"\u5b58\u8349\u7a3f","success":"\u767c\u5e03\u6210\u529f","submitPost":"\u767c\u5e03\u597d\u73a9","uploadingImage":"\u760b\u72c2\u4e0a\u50b3\u5716\u7247","uploadingDeal":"\u4f3a\u670d\u5668\u611b\u7406\u4e0d\u7406\u4e2d","uploadCompleted":"\u641e\u6382!!!","titlePlaceHolder":"\u6a19\u984c\u6709\u8da3\u6703\u6709\u66f4\u591aLike\u54e6"},"date":{"day":"\u65e5","today":"\u4eca\u65e5","unknown":"\u4e0d\u660e"},"header":{"currentLocation":"\u7576\u524d\u5730\u5340:","loading":"Google API \u6b63\u5728\u70ba\u4f60\u5b9a\u4f4d"},"headerMenu":{"bugReportDescription":"\u6b61\u8fce\u544a\u8a34\u6211\u5011\u4efb\u4f55bug\uff0c\u6216\u6709\u8da3\u7684\u529f\u80fd","closeButton":"\u95dc\u9589","contactUs":"\u806f\u7d61\u6211\u5011","currentDevelopingFeatuers":["Google\u767b\u5165 \u9032\u5ea6: 80%","\u5b58\u8349\u7a3f \u9032\u5ea6: 0%","\u77ed\u5f71\u7247 \u9032\u5ea6: 0%","\u5fae\u4fe1\u767b\u5165 \u9032\u5ea6: 35%","\u6df1\u8272\u6a21\u5f0f \u9032\u5ea6: 20%","\u516c\u544a\u6587\u5b57 \u9032\u5ea6: 0%"],"developingFeature":"\u7b49\u5f85\u958b\u767c\u4e2d\u7684\u529f\u80fd:","emailAddress":"pkkwilliam919@gmail.com","logout":"\u767b\u51fa","moreFeatureIsComingDescription":"\u7522\u54c1\u7d93\u7406\u6b63\u5728\u97ad\u64bb\u7406\u7a0b\u5e8f\u54e1\u63a8\u51fa\u66f4\u591a\u65b0\u529f\u80fd"},"landingPage":{"area":"\u5730\u5340","clickToChange":"\u9ede\u64ca\u66f4\u6539","createDealButton":"\u5275\u5efa\u597d\u53bb\u8655","loadingDeals":"\u6b63\u5728\u5168\u529b\u70ba\u4f60\u8b80\u53d6\u597d\u53bb\u8655","geolocationProvider":"API\u5b9a\u4f4d","noDeal":"\u7db2\u53cb\u5011\u672a\u66fe\u6dfb\u52a0\u597d\u53bb\u8655\\n\u8acb\u4f60\u5e6b\u52a9\u6211\u5011\u4e00\u8d77\u8986\u84cb\u9019\u500b\u5340\u57df\u597d\u55ce?"},"localDealCardPage":{"expand":"\u5c55\u958b","collapse":"\u6536\u8d77"},"login":{"formName":"\u767b\u5165","loginNotYetAvaiable":"\u672a\u7528\u5f97\u554a \u7b49\u9663\u5148\u5566","password":"\u5bc6\u78bc","register":"\u6ce8\u518a\u8cec\u865f","submit":"\u767b\u5165","username":"UID/\u7528\u6236\u540d/EMAIL"},"oAuth":{"google":"Google","login":"\u767b\u5165","logout":"\u767b\u51fa","successfullyLogout":"\u6210\u529f\u767b\u51fa","weChat":"\u5fae\u4fe1","undefined":"\u4e0d\u660e"},"position":{"currentArea":"\u6240\u5728\u5730\u5340","loading":"\u6211\u5011\u6b63\u5728\u52aa\u529b\u70ba\u60a8\u8b80\u53d6\u5b9a\u4f4d"},"title":"\u53bb\u908a"}')},,,function(e,t,n){},function(e,t,n){e.exports=n(39)},,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(17),s=n.n(i),o=(n(31),n(2)),c=n(3),u=n(10),l=n(9),d=n(11),h=(n(25),n(4)),p=n.n(h),f=n(16),g=n(8),m=n(7),E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).executeGetDeals=function(){var e;(null===(e=n.appState.address.selectedAddress)||void 0===e?void 0:e.area)&&n.appContext.serviceExecutor.execute(Object(m.d)(n.appState.address.selectedAddress)).then((function(e){n.setState({isLoading:!1}),n.appState.deal.setDeals(e.deals)}))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return null}},{key:"componentDidMount",value:function(){return p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return this.checkOAuthFromUrl(),this.getUserProfile(),e.next=4,p.a.awrap(this.setCurrentPosition());case 4:return e.next=6,p.a.awrap(this.setCurrentAddress());case 6:return e.next=8,p.a.awrap(this.executeGetDeals());case 8:case"end":return e.stop()}}),null,this)}},{key:"checkOAuthFromUrl",value:function(){var e=this,t=this.checkOAuth(),n=t.authorizationCode;t.oAuthProvider===g.a.GOOGLE&&this.appContext.serviceExecutor.execute(Object(m.g)(n,this.appContext.oAuthRedirectUrl)).then((function(){e.onOAuthLoginComplete(),e.getUserProfile()}))}},{key:"setCurrentPosition",value:function(){var e=this;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.appContext.isMock){t.next=2;break}return t.abrupt("return",Promise.resolve());case 2:return t.abrupt("return",new Promise((function(t,n){e.appContext.transformer.getCurrentLocation((function(n){return e.appState.position.setGeolocation(n),t()}))})));case 3:case"end":return t.stop()}}),null,this)}},{key:"setCurrentAddress",value:function(){var e=this;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){e.appContext.serviceExecutor.execute(Object(m.c)({coordinate:e.appState.position.coordinate})).then((function(n){return e.appState.address.setPredicteAddresses(n),e.appState.position.setLoadingPosition(!1),e.appState.address.setSelectedAddress(n[0]),t()}))})));case 1:case"end":return t.stop()}}))}},{key:"getUserProfile",value:function(){var e=this;this.appContext.serviceExecutor.execute(Object(m.f)()).then((function(t){return e.appState.user.setUserProfile(t)}))}}]),t}(f.a),A=n(1),O=n(15),v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).removeUserProfile=function(){var e={id:0,imageUrl:"",name:"",oAuthProvider:g.a.NONE};n.setState({user:Object(A.a)({},n.state.user,{userProfile:e})})},n.setDeals=function(e){n.setState({deal:Object(A.a)({},n.state.deal,{deals:e})})},n.setCreateDealUploading=function(e){n.setState({createDeal:Object(A.a)({},n.state.createDeal,{uploading:e})})},n.setCreateDealProgressMessage=function(e){n.setState({createDeal:Object(A.a)({},n.state.createDeal,{progressMessage:e})})},n.setGeolocation=function(e){n.setState({position:Object(A.a)({},n.state.position,{coordinate:e})})},n.setLoadingPosition=function(e){n.setState({position:Object(A.a)({},n.state.position,{loadingPosition:e})})},n.setPredicteAddresses=function(e){n.setState({address:Object(A.a)({},n.state.address,{addressesPrediction:e})})},n.setSelectedAddress=function(e){n.setState({address:Object(A.a)({},n.state.address,{selectedAddress:e})})},n.setUserProfile=function(e){n.setState({user:Object(A.a)({},n.state.user,{userProfile:e})})},n.state={address:{addressesPrediction:[],selectedAddress:{area:"",street1:"",street2:"",city:"",state:"",country:"",zipCode:""}},createDeal:{uploading:!1,progressMessage:""},deal:{deals:[]},position:{loadingPosition:!0,coordinate:{latitude:0,longitude:0}},user:{userProfile:{id:0,name:"",imageUrl:"",oAuthProvider:g.a.NONE}}},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.address,n=e.createDeal,r=e.deal,i=e.position,s=e.user;return a.a.createElement(O.a.Provider,{value:{address:Object(A.a)({},t,{setSelectedAddress:this.setSelectedAddress,setPredicteAddresses:this.setPredicteAddresses}),createDeal:Object(A.a)({},n,{setCreateDealUploading:this.setCreateDealUploading,setCreateDealProgressMessage:this.setCreateDealProgressMessage}),deal:Object(A.a)({},r,{setDeals:this.setDeals}),position:Object(A.a)({},i,{setGeolocation:this.setGeolocation,setLoadingPosition:this.setLoadingPosition}),user:Object(A.a)({},s,{removeUserProfile:this.removeUserProfile,setUserProfile:this.setUserProfile})}},this.props.children)}}]),t}(r.Component),_=n(5),P=n(14),b=(n(37),n(38),Object(P.a)(_.a.Banner)),T=Object(P.a)(_.a.Header),y=Object(P.a)(_.a.LandingPage),D=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(v,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(a.a.Fragment,null)},a.a.createElement(E,null),a.a.createElement("div",{className:"App-header"},a.a.createElement(T,null)),a.a.createElement(b,null),a.a.createElement("div",{className:"Content"},a.a.createElement(y,null))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[26,4,5]]]);
//# sourceMappingURL=main.fd0fd4ad.chunk.js.map