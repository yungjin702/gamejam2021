(this.webpackJsonpgamejam2021=this.webpackJsonpgamejam2021||[]).push([[0],{187:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),i=n(38),o=n.n(i),l=(n(66),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,195)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))}),r=n(15),d=(n(67),function(){var e=Object(s.useState)(),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(s.useState)("layer_popup"),o=Object(r.a)(i,2),l=o[0],d=o[1];return Object(s.useEffect)((function(){n?d(l+" on"):0==n&&d("layer_popup")}),[n]),Object(a.jsxs)("nav",{className:"topnav_background",children:[Object(a.jsxs)("div",{className:"topnav",children:[Object(a.jsx)("a",{className:"leftAtt",href:"https://thecgawards.kro.kr",children:Object(a.jsx)("img",{className:"Title",src:"image/Title.png"})}),Object(a.jsx)("a",{id:"topnav_Button",className:"Button",children:"\ud22c\ud45c\ud558\ub7ec \uac00\uae30"}),Object(a.jsxs)("ul",{className:"topnav_icon",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://www.youtube.com/channel/UCCM8oRwSn5KdywxiuLp-bfA",target:"_blank",children:Object(a.jsx)("img",{style:{width:"50px"},src:"image/YoutubeIcon.png"})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://www.instagram.com/kah_best_of_game/",target:"_blank",children:Object(a.jsx)("img",{src:"image/InstaIcon.png"})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://www.facebook.com/anigoGame",target:"_blank",children:Object(a.jsx)("img",{src:"image/FacebookIcon.png"})})})]}),Object(a.jsx)("ul",{className:"topnav_icon_small",children:Object(a.jsx)("li",{onClick:function(){c(!0)},children:Object(a.jsx)("a",{children:Object(a.jsx)("img",{src:"menu.svg"})})})})]}),Object(a.jsxs)("div",{className:l,children:[Object(a.jsxs)("div",{className:"layer",children:[Object(a.jsxs)("div",{className:"text_area",children:[Object(a.jsx)("div",{className:"title",children:"\uba54\uc778"}),Object(a.jsxs)("div",{className:"maker",children:[Object(a.jsx)("div",{className:"human",children:"\uc77c\ud638"}),Object(a.jsx)("div",{className:"human",children:"\uc774\ud638"}),Object(a.jsx)("div",{className:"human",children:"\uc0bc\ud638"}),Object(a.jsx)("div",{className:"human",children:"\uc0ac\ud638"}),Object(a.jsx)("div",{className:"human",children:"\uc0ac\ud638"})]})]}),Object(a.jsx)("div",{className:"btn_area"}),Object(a.jsx)("button",{className:"btn_close",onClick:function(){c(!1)},children:"CLOSE"})]}),Object(a.jsx)("div",{className:"dimmed"})]})]})}),m=n(3),j=n(6),u=n(5),h=n(4),g=(n(68),n(39)),p=n(19),f=n(59),b=n(58);n(69);var x=Object(f.a)()((function(e){var t=e.index,n=e.offsetRadius,s=e.gameName,c=e.content,i=(e.platform,e.link),o=e.moveSlide,l=e.delta,r=e.down,d=e.animationConfig,m=t-n,j=1-Math.abs(m/(n+1)),u=Math.abs(m)/(n+1)*50,h=0;return 0===m&&r&&((h+=l[1]/(n+1))<-63&&(o(1),console.log("Enter")),h>63&&o(-1)),m>0?h-=u:m<0&&(h+=u),Object(a.jsx)(b.Spring,{to:{transform:"translate(-50%,  ".concat(-50+h,"%) scale(").concat(j,")"),top:"".concat(0===n?50:50+50*m/n,"%"),opacity:j*j,zIndex:Math.abs(Math.abs(m)-2)},config:d,children:function(e){return Object(a.jsx)(p.a.div,{className:"SliderContainer",style:Object(g.a)(Object(g.a)({},e),{},{zIndex:Math.abs(Math.abs(m)-2)}),children:Object(a.jsx)("div",{className:"SliderCard",style:{},children:Object(a.jsxs)("div",{className:"grid-container",children:[Object(a.jsx)("div",{className:"GamePoster",children:Object(a.jsx)("img",{src:"gamePoster/helpbee.png"})}),Object(a.jsx)("div",{className:"Content",children:Object(a.jsx)("a",{className:"context",children:c})}),Object(a.jsx)("div",{className:"GameName",children:Object(a.jsx)("a",{className:"gameName",children:s})}),Object(a.jsx)("div",{className:"Platform",children:Object(a.jsx)("a",{href:i,children:Object(a.jsx)("img",{src:"image/AndroidIcon.png"})})})]})})})}})}));n(85);var O=function(e){for(var t=e.Count,n=e.index,s=e.moveIndex,c=[],i=0;i<t;i++)c.push(i);return Object(a.jsx)("ul",{className:"DotNavContainer",children:c.map((function(e,c){return Object(a.jsx)("li",{onClick:function(){return s(e)},style:{transform:"translate(0%, ".concat(t/2>e?-10*(t/2-e):10*(t/2-(t-e)),"%)")},className:n===e?"Dot_Active":"Dot"},c)}))})};function v(e,t){return(e%t+t)%t}var y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={index:0},e.componentDidMount=function(){document.addEventListener("keydown",(function(t){t.isComposing||229===t.keyCode||(38===t.keyCode&&e.moveSlide(-1),40===t.keyCode&&e.moveSlide(1))}))},e.modBySlidesLength=function(t){return v(t,e.props.gameInfo.length)},e.moveSlide=function(t){e.setState({index:e.modBySlidesLength(e.state.index+t)})},e.moveIndex=function(t){e.setState({index:t})},e}return Object(j.a)(n,[{key:"clampOffsetRadius",value:function(e){var t=this.props.gameInfo,n=Math.floor((t.length-1)/2);return e<0?0:e>n?n:e}},{key:"getSlidesCount",value:function(){return this.props.gameInfo.length}},{key:"getPresentableSlides",value:function(){var e=this.props.gameInfo,t=this.state.index,n=this.props.offsetRadius;n=this.clampOffsetRadius(n);for(var a=new Array,s=-n;s<1+n;s++)a.push(e[this.modBySlidesLength(t+s)]);return a}},{key:"render",value:function(){var e=this,t=this.props,n=t.animationConfig,s=t.offsetRadius;return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsxs)("div",{children:[this.getPresentableSlides().map((function(t,c){return Object(a.jsx)(x,{index:c,offsetRadius:e.clampOffsetRadius(s),gameName:t.gameName,content:t.content,platform:t.platform,link:t.link,moveSlide:e.moveSlide,animationConfig:n},t.key)})),Object(a.jsx)(O,{Count:this.getSlidesCount(),index:this.state.index,moveIndex:this.moveIndex})]})})}}]),n}(c.a.Component);y.defaultProps={offsetRadius:1,animationConfig:{tension:120,friction:14,duration:100}};var k=y,N=(n(86),n(194)),C=n(193),w=(n(87),n(26)),S=n.n(w),I=n(27),_=function(e){var t=e.data,n=e.bar,s=document.querySelector("#main");return n=S()(s).width()<=900?Object(a.jsx)(I.Bar,{data:t,options:{maintainAspectRatio:!1,scales:{xAxes:[{ticks:{fontFamily:"JS Dong Kang KR",fontStyle:"normal",fontSize:14,fontColor:"white"},gridLines:{display:!1}}],yAxes:[{gridLines:{display:!1},ticks:{display:!1,beginAtZero:!0}}]}}}):Object(a.jsx)(I.HorizontalBar,{data:t,options:{maintainAspectRatio:!1,scales:{xAxes:[{ticks:{beginAtZero:!0,display:!1},gridLines:{display:!1}}],yAxes:[{gridLines:{display:!1},ticks:{fontFamily:"JS Dong Kang KR",fontStyle:"normal",fontSize:15,fontColor:"white"}}]}}}),console.log(),Object(a.jsx)("div",{style:{width:"100%",height:"100%"},children:n})},A=[{name:["helpbee","stockmarket","arksung"]},{name:["helpbee","stockmarket","arksung"]}],B=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(m.a)(this,n),(s=t.call(this,e)).componentDidMount=function(){s.setState({count:s.props.contents.length,half:s.props.count/2})},s.voteGame=function(e,t){console.log(s.props.sheetNum),S.a.ajax({type:"GET",url:"https://script.google.com/macros/s/AKfycbwVuwa_4i617rg-Z8TssavFxz18_TGvCzV8h0g0j5lq1ACC3A8CP7gQCuErQnsbos_W/exec?sheetName=\uc2dc\ud2b8".concat(s.props.sheetNum),data:{post_ID:e,choice:t},success:function(e){alert("\ud22c\ud45c \uc644\ub8cc")}})},s.setVoteResult=function(){var e="https://spreadsheets.google.com/feeds/list/1rl0fCsvCnAg9uWTKzztFlFd3Q2E08-zjRAeCGCd-55s/".concat(s.props.sheetNum,"/public/full?alt=json"),t=new Array,n=new Array;fetch(e).then((function(e){return e.json()})).then((function(e){for(var c=s.props.contents,i=0;i<c.length;++i)t.push(e.feed.entry[0]["gsx$"+"".concat(A[s.state.sheetNum].name[i])].$t),n.push(c[i].name);console.log(n),console.log(t),s.setState({test:Object(a.jsx)(_,{data:{labels:n,datasets:[{label:"\ud22c\ud45c \uc218",data:t}]}})})}),(function(e){}))},s.showVoteResult=function(){s.setVoteResult(),s.setState({showVote:!s.state.showVote})},s.state={awardName:"",sheetNum:0,showVote:!0,id:"",contents:null,count:0,half:0},s}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsxs)("div",{className:"Info",children:[Object(a.jsx)("a",{className:"AwardName",children:this.props.awardName}),Object(a.jsx)("button",{onClick:function(){return e.showVoteResult()},className:"PollState",children:"\ud22c\ud45c \ud604\ud669"})]}),this.props.contents.map((function(t,n){return Object(a.jsx)("div",{className:"PollContent",style:!0===e.state.showVote?{display:"flex"}:{display:"none"},children:Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{children:t.name}),Object(a.jsx)("img",{src:t.image}),Object(a.jsx)("button",{onClick:function(){return e.voteGame(e.props.id,t.index)},children:"\uc120\ud0dd\ud558\uae30"})]})},n)})),Object(a.jsx)("div",{className:"VoteResult",style:!0===this.state.showVote?{display:"none"}:{display:"flex"},children:this.state.test})]})}}]),n}(c.a.Component),P=[{awardName:"\ub2a5\uc9c0\uc5d0 \uce58\uba85\uc0c1",content:[{name:"HelpBee",index:0,image:"logo512.png"},{name:"StockMarket",index:1,image:"logo512.png"},{name:"Arksung's Epidemic",index:2,image:"logo512.png"}]},{awardName:"\uc2dc\uac04\uc21c\uc0c1",content:[{name:"HelpBee",index:0,image:"logo512.png"},{name:"StockMarket",index:1,image:"logo512.png"},{name:"Arksung's Epidemic",index:2,image:"logo512.png"}]}];var R=function(e){e.content;var t=Object(s.useState)(""),n=Object(r.a)(t,2),c=n[0],i=n[1],o=Object(C.a)(["uniqueId"]),l=Object(r.a)(o,3),d=l[0],m=l[1];return l[2],Object(s.useEffect)((function(){if(void 0!==d.uniqueId)i(d.uniqueId);else{var e=Object(N.a)();i(e),m("uniqueId",e)}})),console.log(P),Object(a.jsx)("div",{className:"Poll",children:P.map((function(e,t){return Object(a.jsx)("div",{className:"PollContainer",children:Object(a.jsx)(B,{awardName:e.awardName,sheetNum:t+1,id:c,contents:e.content},t)})}))})},E=n(60),M=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).movePage=function(){a.state.flipped?(document.getElementById("context_1").style.display="none",document.getElementById("context_2").style.display="flex"):(document.getElementById("context_1").style.display="flex",document.getElementById("context_2").style.display="none"),document.getElementById("topnav_Button").textContent=a.state.flipped?"\uac8c\uc784 \uc815\ubcf4 \ubcf4\uae30":"\ud22c\ud45c\ud558\ub7ec \uac00\uae30",a.setState({flipped:!a.state.flipped})},a.state={config:p.b.gentle,flipped:!0},a}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return setTimeout((function(){document.getElementById("topnav_Button").onclick=e.movePage}),100),Object(a.jsxs)("div",{id:"Background",children:[Object(a.jsx)(d,{}),Object(a.jsxs)("div",{id:"main",className:"main",children:[Object(a.jsxs)("div",{id:"context_1",className:"GameInfo",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{className:"LeftDeco",src:"image/LeftDeco.svg"}),Object(a.jsx)("img",{className:"RightDeco",src:"image/RightDeco.svg"})]}),Object(a.jsx)(k,{gameInfo:E.gameInfo,animationConfig:p.b})]}),Object(a.jsx)("div",{id:"context_2",className:"Vote",children:Object(a.jsx)(R,{})})]})]})}}]),n}(s.Component);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root")),l()},60:function(e){e.exports=JSON.parse('{"gameInfo":[{"key":1,"gameName":"HelpBee","content":"\uc784\uc2dc\uc784\uc2dc\uc784\uc2dc\uc784\uc2dc\uc784\uc2dc\uc784\uc2dc\uc784\uc2dc\uc784\uc2dc\uc784\uc2dc\uc784\uc2dc\uc784\uc2dc\uc784\uc2dc\uc784\uc2dc\uc784\uc2dc\uc784\uc2dc","gamePoster":"image/helpbee.png","link":"https://play.google.com/store/apps/details?id=com.wethinknewrise.HelpBee","platform":"Android"},{"key":2,"gameName":"StockMarekt","content":"\ud22c\uc790 \uac00\ub2a5\ud55c \uc790\ubcf8\uc744 \uc8fc\uc2dd\uacfc \ubd80\ub3d9\uc0b0 \ub4f1 \uc5ec\ub7ec\uac00\uc9c0\uc5d0 \ud22c\uc790\ud558\uace0 \ub3c8\uc744 \ubd88\ub824 \ubaa8\ub4e0 \ubd80\ub3d9\uc0b0\uc744 \uac00\uc9c0\uac70\ub098 \uc790\uc2e0\uc774 \uac00\uc9c0\uace0 \uc788\ub294 \ub3c8\uc744 \ucd5c\ub300\ud55c\uc73c\ub85c \ubd88\ub9ac\uba74 \ub418\ub294 \uac8c\uc784","gamePoster":"image/stockmarket.png","link":"https://play.google.com/store/apps/details?id=com.wethinknewrise.HelpBee","platform":"PC"},{"key":3,"gameName":"StockMarekt","content":"\ud22c\uc790 \uac00\ub2a5\ud55c \uc790\ubcf8\uc744 \uc8fc\uc2dd\uacfc \ubd80\ub3d9\uc0b0 \ub4f1 \uc5ec\ub7ec\uac00\uc9c0\uc5d0 \ud22c\uc790\ud558\uace0 \ub3c8\uc744 \ubd88\ub824 \ubaa8\ub4e0 \ubd80\ub3d9\uc0b0\uc744 \uac00\uc9c0\uac70\ub098 \uc790\uc2e0\uc774 \uac00\uc9c0\uace0 \uc788\ub294 \ub3c8\uc744 \ucd5c\ub300\ud55c\uc73c\ub85c \ubd88\ub9ac\uba74 \ub418\ub294 \uac8c\uc784","gamePoster":"image/stockmarket.png","link":"https://play.google.com/store/apps/details?id=com.wethinknewrise.HelpBee","platform":"PC"},{"key":4,"gameName":"StockMarekt","content":"\ud22c\uc790 \uac00\ub2a5\ud55c \uc790\ubcf8\uc744 \uc8fc\uc2dd\uacfc \ubd80\ub3d9\uc0b0 \ub4f1 \uc5ec\ub7ec\uac00\uc9c0\uc5d0 \ud22c\uc790\ud558\uace0 \ub3c8\uc744 \ubd88\ub824 \ubaa8\ub4e0 \ubd80\ub3d9\uc0b0\uc744 \uac00\uc9c0\uac70\ub098 \uc790\uc2e0\uc774 \uac00\uc9c0\uace0 \uc788\ub294 \ub3c8\uc744 \ucd5c\ub300\ud55c\uc73c\ub85c \ubd88\ub9ac\uba74 \ub418\ub294 \uac8c\uc784","gamePoster":"image/stockmarket.png","link":"","platform":"PC"}]}')},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){}},[[187,1,2]]]);
//# sourceMappingURL=main.ad3cd263.chunk.js.map