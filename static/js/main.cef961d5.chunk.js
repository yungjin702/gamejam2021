(this.webpackJsonpgamejam2021=this.webpackJsonpgamejam2021||[]).push([[0],{194:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),i=n.n(a),o=n(39),c=n.n(o),r=(n(72),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,213)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),i(e),o(e)}))}),l=n(3),d=n(6),m=n(5),p=n(4),b=(n(73),n(40)),g=n(64),h=n(63);n(74);var j=Object(g.a)()((function(e){var t=e.index,n=e.offsetRadius,a=e.gameName,i=e.content,o=e.gamePoster,c=e.platform,r=e.link,l=e.moveSlide,d=e.delta,m=e.down,p=e.animationConfig,g=e.translateY,j=e.translateYoffset,u=e.distanceFactor,f=e.offsetFromMiddle;return f=t-n,u=1-Math.abs(f/(n+1)),j=Math.abs(f)/(n+1)*50,g=0,0===f&&m&&((g+=d[1]/(n+1))<-63&&l(1),g>63&&l(-1)),f>0?g-=j:f<0&&(g+=j),Object(s.jsx)(h.Spring,{to:{transform:"translate(-50%,  ".concat(-50+g,"%) scale(").concat(u,")"),top:"".concat(0===n?50:50+50*f/n,"%"),opacity:u*u,zIndex:Math.abs(Math.abs(f)-2)},config:p,children:function(e){return Object(s.jsx)("div",{className:"SliderContainer",style:Object(b.a)(Object(b.a)({},e),{},{zIndex:Math.abs(Math.abs(f)-2)}),children:Object(s.jsx)("div",{className:"SliderCard",style:{},children:Object(s.jsxs)("div",{className:"grid-container",children:[Object(s.jsx)("div",{className:"GamePoster",children:Object(s.jsx)("img",{src:o,alt:"\uac8c\uc784\ud3ec\uc2a4\ud130"})}),Object(s.jsx)("div",{className:"Content",children:Object(s.jsx)("p",{className:"context",children:i})}),Object(s.jsx)("div",{className:"GameName",children:Object(s.jsx)("p",{className:"gameName",children:a})}),Object(s.jsx)("div",{className:"Platform",children:Object(s.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:Object(s.jsx)("img",{src:"Android"===c?"https://i.ibb.co/F0wTtFY/Android-Icon.png":"https://i.ibb.co/rkYRbH3/Desktop.png",alt:"\ud50c\ub7ab\ud3fc\uc0ac\uc9c4"})})})]})})})}})}));n(90);var u=function(e){for(var t=e.Count,n=e.index,a=e.moveIndex,i=[],o=0;o<t;o++)i.push(o);return Object(s.jsx)("ul",{className:"DotNavContainer",children:i.map((function(e,i){return Object(s.jsx)("li",{onClick:function(){return a(e)},style:{transform:"translate(0%, ".concat(t/2>e?-10*(t/2-e):10*(t/2-(t-e)),"%)")},className:n===e?"Dot_Active":"Dot"},i)}))})};n(91);function f(e,t){return(e%t+t)%t}var x=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={index:0},e.modBySlidesLength=function(t){return f(t,e.props.gameInfo.length)},e.moveSlide=function(t){e.setState({index:e.modBySlidesLength(e.state.index+t)})},e.moveIndex=function(t){e.setState({index:t})},e}return Object(d.a)(n,[{key:"clampOffsetRadius",value:function(e){var t=this.props.gameInfo,n=Math.floor((t.length-1)/2);return e<0?0:e>n?n:e}},{key:"getSlidesCount",value:function(){return this.props.gameInfo.length}},{key:"getPresentableSlides",value:function(){for(var e=this.props.gameInfo,t=this.state.index,n=this.props.offsetRadius,s=[],a=-(n=this.clampOffsetRadius(n));a<1+n;a++)s.push(e[this.modBySlidesLength(t+a)]);return s}},{key:"render",value:function(){var e=this,t=this.props,n=t.animationConfig,a=t.offsetRadius;return Object(s.jsx)(i.a.Fragment,{children:Object(s.jsxs)("div",{children:[this.getPresentableSlides().map((function(t,i){return Object(s.jsx)(j,{index:i,offsetRadius:e.clampOffsetRadius(a),gameName:t.gameName,content:t.content,gamePoster:t.gamePoster,platform:t.platform,link:t.link,moveSlide:e.moveSlide,animationConfig:n},"gameInfo"+t.key)})),Object(s.jsx)("div",{className:"DotBackground",children:Object(s.jsx)("div",{className:"DotIndicator",children:Object(s.jsx)(u,{Count:this.getSlidesCount(),index:this.state.index,moveIndex:this.moveIndex})})})]})})}}]),n}(i.a.Component);x.defaultProps={offsetRadius:1,animationConfig:{tension:120,friction:14,duration:100}};var O=x,v=n(42),y=n(16),k=(n(92),function(e){var t=e.movePage,n=Object(a.useState)(),i=Object(y.a)(n,2),o=i[0],c=i[1],r=Object(a.useState)("layer_popup"),l=Object(y.a)(r,2),d=l[0],m=l[1],p=(document.querySelector("#main"),function(){c(!1)});return Object(a.useEffect)((function(){o?m(d+" on"):!1===o&&m("layer_popup")}),[o]),Object(s.jsxs)("nav",{className:"topnav_background",children:[Object(s.jsxs)("div",{className:"topnav",children:[Object(s.jsxs)("a",{className:"leftAtt",href:"https://thecgawards.kro.kr",children:[Object(s.jsx)("img",{className:"Title",src:"https://i.ibb.co/PgvXNBc/Title.png",alt:"\ud0c0\uc774\ud2c0"}),Object(s.jsx)("img",{className:"Logo",src:"https://i.ibb.co/vHsCWmY/logo.png",alt:"\ub85c\uace0"})]}),Object(s.jsxs)("div",{onClick:function(){return t(null)},className:"Button",children:[Object(s.jsx)("p",{id:"topnav_Button",children:"\ud22c\ud45c\ud558\ub7ec \uac00\uae30"}),Object(s.jsx)("img",{style:{position:"absolute"},src:"https://i.ibb.co/Nn89gYh/Scroll-button.png",alt:"\uc774\ub3d9\uc774\ubbf8\uc9c0"})]}),Object(s.jsxs)("ul",{className:"topnav_icon",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.youtube.com/channel/UCCM8oRwSn5KdywxiuLp-bfA",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("img",{className:"Youtube",src:"https://i.ibb.co/q0yMty0/Youtube-Icon.png",alt:"\uc720\ud29c\ube0c\uc544\uc774\ucf58"})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.instagram.com/kah_best_of_game/",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("img",{src:"https://i.ibb.co/J373CBQ/Insta-Icon.png",alt:"\uc778\uc2a4\ud0c0\uc544\uc774\ucf58"})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.facebook.com/anigoGame",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("img",{src:"https://i.ibb.co/7r6Xkx9/Facebook-Icon.png",alt:"\ud398\uc774\uc2a4\ubd81\uc544\uc774\ucf58"})})})]}),Object(s.jsx)("ul",{className:"topnav_icon_small",children:Object(s.jsx)("li",{onClick:function(){c(!0)},children:Object(s.jsx)("img",{src:"menu.svg",alt:"\uba54\ub274\uc544\uc774\ucf58"})})})]}),Object(s.jsxs)("div",{className:d,children:[Object(s.jsxs)("div",{className:"layer",children:[Object(s.jsx)("div",{className:"menu_bar",children:Object(s.jsxs)("ul",{className:"menu_item",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"link",onClick:function(){t(1),p()},children:"\uac8c\uc784 \uc815\ubcf4"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"link",onClick:function(){t(2),p()},children:"\ud22c\ud45c \ud558\uae30"})}),Object(s.jsxs)("li",{style:{paddingTop:"20px"},children:[Object(s.jsx)("a",{href:"https://www.youtube.com/channel/UCCM8oRwSn5KdywxiuLp-bfA",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("img",{style:{width:"50px"},src:"https://i.ibb.co/q0yMty0/Youtube-Icon.png",alt:"\uc720\ud29c\ube0c\uc544\uc774\ucf58"})}),Object(s.jsx)("a",{href:"https://www.instagram.com/kah_best_of_game/",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("img",{src:"https://i.ibb.co/J373CBQ/Insta-Icon.png",alt:"\uc778\uc2a4\ud0c0\uc544\uc774\ucf58"})}),Object(s.jsx)("a",{href:"https://www.facebook.com/anigoGame",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("img",{src:"https://i.ibb.co/7r6Xkx9/Facebook-Icon.png",alt:"\ud398\uc774\uc2a4\ubd81\uc544\uc774\ucf58"})})]}),Object(s.jsx)("li",{style:{paddingTop:"20px"},children:Object(s.jsx)("p",{children:"\ub9cc\ub4e0 \uc0ac\ub78c"})}),Object(s.jsxs)("li",{children:[" ",Object(s.jsx)("p",{children:"\uc6f9 \uac1c\ubc1c: 20\uae30 \ubc15\uc601\uc9c4"})," "]}),Object(s.jsxs)("li",{style:{paddingTop:"10px"},children:[" ",Object(s.jsx)("p",{children:"\ub514\uc790\uc778: 20\uae30 \uc774\uc9c0\ubbfc"})," "]}),Object(s.jsxs)("li",{style:{paddingLeft:"28px",paddingBottom:"10px"},children:[" ",Object(s.jsx)("p",{children:"20\uae30 \ubc15\uc720\uc2e0"})," "]}),Object(s.jsxs)("li",{children:[" ",Object(s.jsx)("p",{children:"\uba54\ub274 \uc81c\uc791: \uace0\ud55c\ud601"})," "]})]})}),Object(s.jsx)("div",{className:"btn_area"}),Object(s.jsx)("button",{className:"btn_close",onClick:p,children:"CLOSE"})]}),Object(s.jsx)("div",{className:"dimmed"})]})]})}),N=(n(93),n(212)),w=n(211),C=(n(94),n(26)),S=n.n(C),P=n(41),I=(n(194),function(e){var t=e.data,n=e.bar,a=document.querySelector("#main");return n=S()(a).width()<=900?Object(s.jsx)(P.Bar,{data:t,options:{maintainAspectRatio:!1,scales:{xAxes:[{ticks:{fontFamily:"JS Dong Kang KR",fontStyle:"normal",fontSize:14,fontColor:"white"},gridLines:{display:!1}}],yAxes:[{gridLines:{display:!1},ticks:{display:!1,beginAtZero:!0}}]}}}):Object(s.jsx)(P.HorizontalBar,{data:t,options:{maintainAspectRatio:!1,scales:{xAxes:[{ticks:{beginAtZero:!0,display:!1},gridLines:{display:!1}}],yAxes:[{gridLines:{display:!1},ticks:{fontFamily:"JS Dong Kang KR",fontStyle:"normal",fontSize:15,fontColor:"white"}}]}}}),console.log(),Object(s.jsx)("div",{className:"VoteResultContainer",children:n})}),B=n(65),A=n.n(B),_=(n(207),n(27)),L={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5,partialVisibilityGutter:100},desktop:{breakpoint:{max:3e3,min:900},items:3,partialVisibilityGutter:100},tablet:{breakpoint:{max:900,min:600},items:2,partialVisibilityGutter:100},mobile:{breakpoint:{max:600,min:0},items:1,partialVisibilityGutter:100}},R=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.setState({count:a.props.contents.length,half:a.props.count/2}),setTimeout((function(){var e="https://spreadsheets.google.com/feeds/list/1rl0fCsvCnAg9uWTKzztFlFd3Q2E08-zjRAeCGCd-55s/".concat(a.props.sheetNum,"/public/full?alt=json&sq=postid=").concat(a.props.id);fetch(e).then((function(e){return e.json()})).then((function(e){void 0!==e.feed.entry&&a.setState({isExist:1})}),(function(e){a.setState({isExist:2})}))}),100)},a.voteGame=function(e,t){if(0===a.state.isExist){if(!1===window.confirm("\ud22c\ud45c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"))return;alert("\ud22c\ud45c \uc911\uc785\ub2c8\ub2e4."),a.setState({isExist:1}),S.a.ajax({type:"GET",url:"https://script.google.com/macros/s/AKfycbwVuwa_4i617rg-Z8TssavFxz18_TGvCzV8h0g0j5lq1ACC3A8CP7gQCuErQnsbos_W/exec?sheetName=\uc2dc\ud2b8".concat(a.props.sheetNum),data:{post_ID:e,choice:t},success:function(e){alert("\ud22c\ud45c \uc644\ub8cc")},fail:function(e){alert("\uc0c8\ub85c\uace0\uce68 \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694")}})}else 1===a.state.isExist?alert("\uc774\ubbf8 \ud22c\ud45c\ud558\uc168\uc2b5\ub2c8\ub2e4"):alert("\uc0c8\ub85c\uace0\uce68 \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694")},a.setVoteResult=function(){var e="https://spreadsheets.google.com/feeds/list/1rl0fCsvCnAg9uWTKzztFlFd3Q2E08-zjRAeCGCd-55s/".concat(a.props.sheetNum,"/public/full?alt=json"),t=[],n=[];fetch(e).then((function(e){return e.json()})).then((function(e){for(var i=a.props.contents,o=0;o<i.length;++o)t.push(e.feed.entry[0]["gsx$"+_.voteList[a.props.sheetNum-1].name[o]].$t),n.push(i[o].name);a.setState({voteResult:Object(s.jsx)(I,{data:{labels:n,datasets:[{label:"\ud22c\ud45c \uc218",data:t,backgroundColor:"rgba(224, 39, 19, 0.6)"}]}})})}),(function(e){}))},a.showVoteResult=function(){a.state.showVote&&a.setVoteResult(),a.setState({showVote:!a.state.showVote})},a.state={awardName:"",sheetNum:0,showVote:!0,isExist:0,id:"",contents:null,count:0,half:0,breakPoints:[{width:400,itemsToShow:1},{width:600,itemsToShow:2},{width:900,itemsToShow:5}]},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)(i.a.Fragment,{children:[Object(s.jsxs)("div",{className:"Info",children:[Object(s.jsx)("a",{className:"AwardName",children:this.props.awardName}),Object(s.jsx)("button",{onClick:function(){return e.showVoteResult()},className:"PollState"}),Object(s.jsx)("a",{className:"AwardInfo",children:this.props.awardInfo})]}),Object(s.jsx)("div",{className:"voteSelect",style:!0===this.state.showVote?{display:"flex"}:{display:"none"},children:Object(s.jsx)(A.a,{itemClass:"carousel-item",containerClass:"carousel-container",responsive:L,children:this.props.contents.map((function(t,n){return Object(s.jsx)("div",{className:"PollContent",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("a",{children:t.name}),Object(s.jsx)("img",{src:t.image,alt:"\ud6c4\ubcf4\ud3ec\uc2a4\ud130"}),Object(s.jsx)("button",{type:"button",onClick:function(){return e.voteGame(e.props.id,t.index)}})]})},n)}))})}),Object(s.jsx)("div",{className:"VoteResult",style:!0===this.state.showVote?{display:"none"}:{display:"flex"},children:this.state.voteResult}),Object(s.jsx)("div",{className:"TopLine",children:Object(s.jsx)("img",{src:"image/vote_Line.svg",alt:"\uc704\ucabd \ub77c\uc778"})}),Object(s.jsx)("div",{className:"BottomLine",children:Object(s.jsx)("img",{src:"image/vote_Line.svg",alt:"\uc544\ub798\ucabd \ub77c\uc778"})})]})}}]),n}(i.a.Component);var T=function(e){e.content;var t=Object(a.useState)(""),n=Object(y.a)(t,2),i=n[0],o=n[1],c=Object(w.a)(["uniqueId"]),r=Object(y.a)(c,3),l=r[0],d=r[1];return r[2],Object(a.useEffect)((function(){if(void 0!==l.uniqueId)o(l.uniqueId);else{var e=Object(N.a)();o(e),d("uniqueId",e)}}),[]),Object(s.jsx)("div",{className:"Poll",children:_.contents.map((function(e,t){return Object(s.jsx)("div",{className:"PollContainer",children:Object(s.jsx)(R,{awardName:e.awardName,awardInfo:e.awardInfo,sheetNum:e.sheetNum,id:i,contents:e.content},"PollContent"+t)},"PollContainer"+t)}))})},D=n(66),M=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).movePage=function(){s.state.flipped?(document.getElementById("context_1").style.display="none",document.getElementById("context_2").style.display="flex"):(document.getElementById("context_1").style.display="flex",document.getElementById("context_2").style.display="none"),document.getElementById("topnav_Button").textContent=s.state.flipped?"\uac8c\uc784 \uc815\ubcf4 \ubcf4\uae30":"\ud22c\ud45c\ud558\ub7ec \uac00\uae30",s.setState({flipped:!s.state.flipped})},s.movePage=function(e){null!==e?s.setState({flipped:1!==e}):(document.getElementById("topnav_Button").textContent=s.state.flipped?"\ud22c\ud45c\ud558\ub7ec \uac00\uae30":"\uac8c\uc784 \uc815\ubcf4 \ubcf4\uae30",s.setState({flipped:!s.state.flipped}))},s.state={config:v.a.gentle,flipped:!1},s}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{id:"Background",className:"background",children:[Object(s.jsx)(k,{movePage:this.movePage}),Object(s.jsxs)("div",{id:"main",className:"main",children:[Object(s.jsxs)("div",{id:"context_1",className:"GameInfo",style:this.state.flipped?{display:"none"}:{display:"flex"},children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{className:"LeftDeco",src:"image/LeftDeco.svg",alt:"\uc67c\ucabd\ub370\ucf54"}),Object(s.jsx)("img",{className:"RightDeco",src:"image/RightDeco.svg",alt:"\uc624\ub978\ucabd\ub370\ucf54"})]}),Object(s.jsx)(O,{gameInfo:D.gameInfo,animationConfig:v.a})]}),Object(s.jsx)("div",{id:"context_2",className:"Vote",style:this.state.flipped?{display:"flex"}:{display:"none"},children:Object(s.jsx)(T,{})})]})]})}}]),n}(a.Component);c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(M,{})}),document.getElementById("root")),r()},27:function(e){e.exports=JSON.parse('{"contents":[{"awardName":"\ub2a5\uc9c0\uc5d0 \uce58\uba85\uc0c1","awardInfo":"\ub2f9\uc2e0\uc758 \uba38\ub9ac\ub97c \uc5b4\uc9c0\ub7fd\uac8c \ud558\ub294 \uac8c\uc784\uc5d0\uac8c \uc8fc\ub294 \uc0c1","sheetNum":1,"content":[{"name":"HelpBee","index":0,"image":"https://i.ibb.co/BHkX8KJ/Help-Bee.png"},{"name":"StockMarket","index":1,"image":"https://i.ibb.co/Ph7B6kg/Stock-Market.png"},{"name":"Arksung\'s Epidemic","index":2,"image":"https://i.ibb.co/6Zzd5Pb/Akseoung.png"}]},{"awardName":"\uc561\uc158\uc774 \ub0b4 \uc77c\uc0c1","awardInfo":"\ub2f9\uc2e0\uc744 \ubab0\uc785\ud558\uac8c \ub9cc\ub4e0 \uc561\uc158 \uac8c\uc784\uc5d0\uac8c \uc8fc\ub294 \uc0c1","sheetNum":2,"content":[{"name":"Slave of Steam","index":0,"image":"https://i.ibb.co/6sMBTPW/Slave-of-Steam.png"},{"name":"PAZ","index":1,"image":"https://i.ibb.co/5WCrxRk/PAZ.png"},{"name":"Bulliter","index":2,"image":"https://i.ibb.co/qCjd0Sy/BULLITER.png"}]},{"awardName":"\uc2dc\uac04\uc21c\uc0c1","awardInfo":"\uc2dc\uac04 \uac00\ub294 \uc904 \ubaa8\ub974\ub294 \uac8c\uc784\uc5d0\uac8c \uc8fc\ub294 \uc0c1","sheetNum":3,"content":[{"name":"\ubb38\uc9c0\ub124 \uc624\ub77d\uc2e4","index":0,"image":"https://i.ibb.co/cTZJMj3/moon.png"},{"name":"HIDE AND CHICK","index":1,"image":"https://i.ibb.co/nr96sH9/Hide-and-Chick.png"},{"name":"Artist","index":2,"image":"https://i.ibb.co/yN16SMh/Artist.png"},{"name":"BottleMaster","index":3,"image":"https://i.ibb.co/809tSBK/bottle-master.png"},{"name":"The Baggage","index":4,"image":"https://i.ibb.co/0jMLzDX/The-Baggage.png"}]}],"voteList":[{"name":["helpbee","stockmarket","arksung"]},{"name":["slaveofsteam","amazingparty","bulliter"]},{"name":["\ubb38\uc9c0\ub124\uc624\ub77d\uc2e4","hideandchick","artist","bottlemaster","thebaggage"]}]}')},66:function(e){e.exports=JSON.parse('{"gameInfo":[{"key":1,"gameName":"HelpBee","content":"\uc9c0\uc815\ub41c \uc704\uce58\uc5d0 \ub2e4\uc591\ud55c \uac74\ubb3c\ub4e4\uc744 \uc9d3\uace0 \ubab0\ub824\uc624\ub294 \uc801\ub4e4\uc744 \uc790\uc6d0\uc744 \ubaa8\uc544 \ubcf4\ubcd1, \uad81\ubcd1. \ubc29\ud328\ubcd1 \ub4f1\uc758 \ub2e4\uc591\ud55c \uafc0\ubc8c\uc744 \uc0dd\uc0b0\ud558\uace0 \ub04c\ubc1c\ub4e4\uc744 \uc870\uc791\ud574 \ub098\uc05c \ub9d0\ubc8c\uc744 \ub9c9\uc544\ub0b4\uace0 \ubcf8\uc9c4\uc744 \uc9c0\ucf1c\uc11c \uc2b9\ub9ac\ud558\uc138\uc694!","gamePoster":"https://i.ibb.co/r06n9NQ/Helpbee.png","link":"https://play.google.com/store/apps/details?id=com.wethinknewrise.HelpBee","platform":"Android"},{"key":2,"gameName":"PAZ","content":"\uc5b4\uba54\uc774\uc9d5\ud55c \uaca8\uc6b8\uc744 \ubcf4\ub0b4\ub294 \uac8c\uc784\uc73c\ub85c \ub208\uc2f8\uc6c0\uc744 \uc8fc\uc81c\ub85c \ud558\ub294 FPS\uac8c\uc784, \uc801\ub4e4\uc5d0\uac8c \ub208\uc744 \ub358\uc9c8 \uc218 \uc788\uc73c\uba70 \ubaa9\ud45c \uc22b\uc790\uc758 \uc801\ub4e4\uc744 \uc804\ubd80 \ucc98\uce58\ud558\uba74 \ub418\ub294 \ud615\uc2dd\uc758 \uac8c\uc784","gamePoster":"https://i.ibb.co/2dswrBs/PAZ.png","link":"https://drive.google.com/file/d/1wyfbnG9UA06PvB3FJZSaTiDeRhD7sDmi/view?usp=sharing","platform":"PC"},{"key":3,"gameName":"The Baggage","content":"\ud22c\uc790 \uac00\ub2a5\ud55c \uc790\ubcf8\uc744 \uc8fc\uc2dd\uacfc \ubd80\ub3d9\uc0b0 \ub4f1 \uc5ec\ub7ec \uac00\uc9c0\uc5d0 \ud22c\uc790\ud558\uace0 \ub3c8\uc744 \ubd88\ub824 \ubaa8\ub4e0 \ubd80\ub3d9\uc0b0\uc744 \uac00\uc9c0\uac70\ub098 \uc790\uc2e0\uc774 \uac00\uc9c0\uace0 \uc788\ub294 \ub3c8\uc744 \ucd5c\ub300\ud55c\uc73c\ub85c \ubd88\ub9ac\uba74 \ub418\ub294 \uac8c\uc784","gamePoster":"https://i.ibb.co/xSCZYcz/The-Baggage.png","link":"https://drive.google.com/file/d/1fqdKneGpLZB136cyNFzP6gvdeLk_HdjU/view?usp=sharing","platform":"Android"},{"key":4,"gameName":"HIDE AND CHICK","content":"\ub2ed\uc744 \ud53c\ud574\uc11c \ub3c4\ub9dd\uce58\ub294 \uc220\ub798\uc7a1\uae30 \ud615\uc2dd\uc73c\ub85c \ub9f5\uc5d0 \uc0dd\uc131\ub418\ub294 \ub2e4\uc591\ud55c \uc544\uc774\ud15c\uc744 \ud65c\uc6a9\ud574 \uc5b4\uc9f8\uc11c\uc778\uc9c0 \ubcd1\uc544\ub9ac\ub97c \uc704\ud611\ud558\ub294 \ub2ed\ub4e4\ub85c\ubd80\ud130 \uc77c\uc815\ud55c \uc2dc\uac04\ub3d9\uc548 \ub3c4\ub9dd\uce58\uc138\uc694!","gamePoster":"https://i.ibb.co/g39bfc2/Hide-And-Chick.png","link":"https://drive.google.com/file/d/1WoXoxyKrrTbsfmpyDjN0urynLpzIvlQK/view?usp=sharing","platform":"PC"},{"key":5,"gameName":"Arksung\'s Epidemic","content":"\ubc14\uc774\ub7ec\uc2a4\ub85c \uc778\ud574 \ub9dd\ud55c \ub3c4\uc2dc\uc5d0\uc11c \uac10\uc5fc\ub418\uc9c0 \ub9d0\uace0 \uc0b4\uc544\uac00\ub294 \uce74\ub4dc \uc0dd\uc874 \uac8c\uc784,  \ub9e4\uc77c\ub9e4\uc77c \uc8fc\uc5b4\uc9c0\ub294 \uce74\ub4dc\ub4e4\uc744 \uc8fc\uc5b4\uc9c4 \uc0c1\ud669\uc5d0 \ub9de\ucdb0\uc11c \uc0ac\uc6a9\ud574 30\uc77c \ub3d9\uc548 \uc0b4\uc544\ub0a8\uc544\uc57c \ud569\ub2c8\ub2e4. \ub9e4\uc77c \ub9e4\uc77c \ub2ec\ub77c\uc9c0\ub294 \uc0c1\ud669, \uce74\ub4dc\ub97c \ud65c\uc6a9\ud574 \ud560 \uc218 \uc788\ub294 \ub9cc\ud07c \uc0b4\uc544\ub0a8\uc544\ubcf4\uc138\uc694.","gamePoster":"https://i.ibb.co/QnkK9KF/Akseoung.png","link":"https://drive.google.com/file/d/11OER1vcws82YOq8i5uONiKftJ9LdgXBU/view?usp=sharing","platform":"PC"},{"key":6,"gameName":"Slave of Steam","content":"\uc81c\ud55c\ub41c \ub9f5\uc744 \ub3cc\uc544\ub2e4\ub2c8\uba70 \ud0d0\ud5d8\ud558\ub294 \uc815\ud1b5 \uba54\ud2b8\ub85c\ubc30\ub2c8\uc544 \ud615\uc2dd\uc758 \uc2dc\uc2a4\ud15c\uc5d0 \uc2a4\ud300\ud391\ud06c \ubd84\uc704\uae30\ub97c \uac00\ubbf8\ud55c \uac8c\uc784\uc785\ub2c8\ub2e4. \uc5b4\ub460\uc774 \ub4a4\ub36e\uc778 \uc4f0\ub808\uae30\uc7a5\uc744 \ud0d0\ud5d8\ud574 \ubcf4\uc138\uc694","gamePoster":"https://i.ibb.co/fD5L8fd/Slave-of-Steam.png","link":"https://drive.google.com/file/d/1eE-Qy8zhgGJzdiXu2MzInHV_TqXg9Hxi/view?usp=sharing","platform":"PC"},{"key":7,"gameName":"BottleMaster","content":"\ube48 \ubcd1\uc744 \uc218\uc9d1\ud574 \ubd80\uc790\uac00 \ub418\uc790! \uc138\uc0c1 \uacf3\uacf3\uc744 \ub3cc\uc544\ub2e4\ub2c8\uba74\uc11c \ube48\ubcd1\uc744 \uc218\uc9d1\ud574 \uc9d1\ub3c4 \uc0ac\uace0 \ucc28\ub3c4 \uc0ac\uc11c \ub354\uc6b1 \ub354 \ubd80\uc790\uac00 \ub418\ub294 \ubaa8\ubc14\uc77c \ud074\ub9ac\ucee4\ud615 \uac8c\uc784","gamePoster":"https://i.ibb.co/Lz8Lckh/Bottle-Master.png","link":"https://play.google.com/store/apps/details?id=com.Team_6People.BottleMaster","platform":"Android"},{"key":8,"gameName":"StockMarket","content":"\ubaa8\ub4e0 \ucc45\uc784\uc740 \uc790\uae30 \uc790\uc2e0\uc5d0\uac8c\u2026 \uc8fc\uc2dd\uacfc \ucf54\uc778\uc744 \ud1b5\ud574\uc11c \ub3c8\uc744 \ubc8c\uace0 \ubd80\ub3d9\uc0b0, \uae30\uc5c5 \uc778\uc218, \ud22c\uc790\ub97c \ud1b5\ud574\uc11c \ub354 \ud070 \ub3c8\uc744 \ubc84\ub294 \uc804\ub7b5, \ub9e4\ub3c4\uc640 \ub9e4\uc218\ub97c \ud55c \uc21c\uac04\ubd80\ud130 \ud55c\uce58 \uc55e\uc744 \uc54c \uc218 \uc5c6\ub294 \uae34\uc7a5\uac10\uc744 \uc90d\ub2c8\ub2e4.","gamePoster":"https://i.ibb.co/Xbzx2WZ/Stock-Market.png","link":"https://drive.google.com/file/d/1RTtiw0DaqSrIHfUvmVDhOLzogSTS9hKg/view?usp=sharing","platform":"PC"},{"key":9,"gameName":"Artist","content":"\uc810\uc810 \ucee4\uc9c0\ub294 \ub178\ub4dc\uc5d0 \ub9de\ucdb0 \uc54c\ub9de\uc740 \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc57c\ud558\ub294 \ud615\uc2dd\uc758 \uc815\uc11d \ub9ac\ub4ec\uac8c\uc784, \uc0c9, \ubb3c\uac10\uacfc \uc5f0\uad00\ub41c \uadf8\ub798\ud53d\uc73c\ub85c \ud50c\ub808\uc774\uc5b4\uc5d0\uac8c \uadf8\ub9bc\uc744 \uadf8\ub9ac\ub294 \ub4ef\ud55c, \uc608\uc220\uac00\uac00 \ub418\uc5b4\ubcf4\uc138\uc694","gamePoster":"https://i.ibb.co/QY93YRz/Artist.png","link":"https://play.google.com/store/apps/details?id=com.MusicGame.ARTIST","platform":"Android"},{"key":10,"gameName":"Bulliter","content":"\uc288\ud305 \ub85c\uadf8\ub77c\uc774\ud06c \uc7a5\ub974\uc758 \uac8c\uc784\uc73c\ub85c \ud2b9\uc218 \uc694\uc6d0\uc778 \uc8fc\uc778\uacf5\uc744 \uc870\uc885\ud574\uc11c \uc544\ub9c8\uc874, \uc774\uc9d1\ud2b8, \ub7ec\uc2dc\uc544\uc758 \ud5d8\ub09c\ud55c \ud658\uacbd\uc5d0\uc11c \uc801\ub4e4\uc744 \ubb34\ucc0c\ub974\uace0 \uc784\ubb34\ub97c \uc218\ud589\ud574\uc57c\ud558\ub294 \uac8c\uc784","gamePoster":"https://i.ibb.co/GCjVT1L/Bulliter.png","link":"https://drive.google.com/file/d/1NGV3XRhvgBDjHdBdPLSS8im5eZBhg5pe/view?usp=sharing","platform":"PC"},{"key":11,"gameName":"\ubb38\uc9c0\ub124 \uc624\ub77d\uc2e4","content":"\uc5ec\ub7ec \uac00\uc9c0 \uce90\uc8fc\uc5bc\ud55c \ubbf8\ub2c8\uac8c\uc784\uc744 \ubaa8\uc544\ub193\uc740 \ubbf8\ub2c8\uac8c\uc784\ucc9c\uad6d \ud615\uc2dd\uc758 \uac8c\uc784\uc73c\ub85c 8\uac1c\uc758 \ubbf8\ub2c8\uac8c\uc784 \ubaa8\ub450\uac00 \uace0\uc720\ud55c, \ub3c5\ud2b9\ud55c \uac1c\uc131\uc744 \uc9c0\ub2c8\uace0\uc788\uace0 \uac8c\uc784\ub9c8\ub2e4 \uc810\uc810 \uc5b4\ub824\uc6cc \uc9c0\ub294 \ub09c\uc774\ub3c4\ub85c \uac01\uac01\uc758 \uac8c\uc784\uc744 \ud50c\ub808\uc774 \ud574\ubcf4\uc138\uc694!","gamePoster":"https://i.ibb.co/NChNf5N/moon.png","link":"https://drive.google.com/file/d/1kRbfN2muDPS76HKowjgOiPx5AKyeaAe8/view?usp=sharing","platform":"PC"}]}')},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){}},[[208,1,2]]]);
//# sourceMappingURL=main.cef961d5.chunk.js.map