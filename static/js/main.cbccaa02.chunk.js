(this.webpackJsonpgamejam2021=this.webpackJsonpgamejam2021||[]).push([[0],{187:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),i=n(36),o=n.n(i),l=(n(65),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,193)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))}),r=n(16),d=(n(66),function(){var e=Object(s.useState)(),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(s.useState)("layer_popup"),o=Object(r.a)(i,2),l=o[0],d=o[1];return Object(s.useEffect)((function(){n?d(l+" on"):0==n&&d("layer_popup")}),[n]),Object(a.jsxs)("nav",{className:"topnav_background",children:[Object(a.jsxs)("div",{className:"topnav",children:[Object(a.jsx)("a",{className:"leftAtt",href:"https://thecgawards.kro.kr",children:Object(a.jsx)("img",{className:"Title",src:"image/Title.png"})}),Object(a.jsx)("a",{id:"topnav_Button",className:"Button",children:"\ud22c\ud45c\ud558\ub7ec \uac00\uae30"}),Object(a.jsxs)("ul",{className:"topnav_icon",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://www.youtube.com/channel/UCCM8oRwSn5KdywxiuLp-bfA",target:"_blank",children:Object(a.jsx)("img",{src:"youtube.svg"})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://www.instagram.com/kah.cg/",target:"_blank",children:Object(a.jsx)("img",{src:"instagram.svg"})})})]}),Object(a.jsx)("ul",{className:"topnav_icon_small",children:Object(a.jsx)("li",{onClick:function(){c(!0)},children:Object(a.jsx)("a",{children:Object(a.jsx)("img",{src:"menu.svg"})})})})]}),Object(a.jsxs)("div",{className:l,children:[Object(a.jsxs)("div",{className:"layer",children:[Object(a.jsxs)("div",{className:"text_area",children:[Object(a.jsx)("div",{className:"title",children:"\uba54\uc778"}),Object(a.jsxs)("div",{className:"maker",children:[Object(a.jsx)("div",{className:"human",children:"\uc77c\ud638"}),Object(a.jsx)("div",{className:"human",children:"\uc774\ud638"}),Object(a.jsx)("div",{className:"human",children:"\uc0bc\ud638"}),Object(a.jsx)("div",{className:"human",children:"\uc0ac\ud638"}),Object(a.jsx)("div",{className:"human",children:"\uc0ac\ud638"})]})]}),Object(a.jsx)("div",{className:"btn_area"}),Object(a.jsx)("button",{className:"btn_close",onClick:function(){c(!1)},children:"CLOSE"})]}),Object(a.jsx)("div",{className:"dimmed"})]})]})}),u=n(3),j=n(6),m=n(5),b=n(4),h=(n(67),n(37)),f=n(12),g=n(57),p=n(56);n(68);var x=Object(g.a)()((function(e){var t=e.index,n=e.offsetRadius,s=e.gameName,c=e.content,i=e.icon,o=e.link,l=e.moveSlide,r=e.delta,d=e.down,u=e.animationConfig,j=t-n,m=1-Math.abs(j/(n+1)),b=Math.abs(j)/(n+1)*50,g=0;return 0===j&&d&&(g+=r[1]/(n+1),console.log(g),g<-63&&l(1),g>63&&l(-1)),j>0?g-=b:j<0&&(g+=b),Object(a.jsx)(p.Spring,{to:{transform:"translate(-50%,  ".concat(-50+g,"%) scale(").concat(m,")"),top:"".concat(0===n?50:50+50*j/n,"%"),opacity:m*m,zIndex:Math.abs(Math.abs(j)-2)},config:u,children:function(e){return Object(a.jsx)(f.a.div,{className:"SliderContainer",style:Object(h.a)(Object(h.a)({},e),{},{zIndex:Math.abs(Math.abs(j)-2)}),children:Object(a.jsxs)(f.a.div,{className:"SliderCard",style:{},children:[Object(a.jsx)("a",{className:"gameName",children:s}),Object(a.jsx)("a",{className:"context",children:c}),Object(a.jsx)("a",{className:"icon",href:o,children:Object(a.jsx)("img",{className:"img",src:i})})]})})}})}));n(84);var O=function(e){for(var t=e.Count,n=e.index,s=e.moveIndex,c=[],i=0;i<t;i++)c.push(i);return Object(a.jsx)("ul",{className:"DotNavContainer",children:c.map((function(e,c){return Object(a.jsx)("li",{onClick:function(){return s(e)},style:{transform:"translate(0%, ".concat(t/2>e?-10*(t/2-e):10*(t/2-(t-e)),"%)")},className:n===e?"Dot_Active":"Dot"},c)}))})};function v(e,t){return(e%t+t)%t}var y=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={index:0},e.componentDidMount=function(){document.addEventListener("keydown",(function(t){t.isComposing||229===t.keyCode||(38===t.keyCode&&e.moveSlide(-1),40===t.keyCode&&e.moveSlide(1))}))},e.modBySlidesLength=function(t){return v(t,e.props.slides.length)},e.moveSlide=function(t){e.setState({index:e.modBySlidesLength(e.state.index+t),goToSlide:null})},e.moveIndex=function(t){e.setState({index:t})},e}return Object(j.a)(n,[{key:"clampOffsetRadius",value:function(e){var t=this.props.slides,n=Math.floor((t.length-1)/2);return e<0?0:e>n?n:e}},{key:"getSlidesCount",value:function(){return this.props.slides.length}},{key:"getPresentableSlides",value:function(){var e=this.props.slides,t=this.state.index,n=this.props.offsetRadius;n=this.clampOffsetRadius(n);for(var a=new Array,s=-n;s<1+n;s++)a.push(e[this.modBySlidesLength(t+s)]);return a}},{key:"render",value:function(){var e=this,t=this.props,n=t.animationConfig,s=t.offsetRadius;return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsxs)("div",{children:[this.getPresentableSlides().map((function(t,c){return Object(a.jsx)(x,{index:c,offsetRadius:e.clampOffsetRadius(s),gameName:t.gameName,content:t.content,icon:t.icon,link:t.link,moveSlide:e.moveSlide,animationConfig:n},t.key)})),Object(a.jsx)(O,{Count:this.getSlidesCount(),index:this.state.index,moveIndex:this.moveIndex})]})})}}]),n}(c.a.Component);y.defaultProps={offsetRadius:1,animationConfig:{tension:120,friction:14,duration:100}};var N=y,k=(n(85),n(86),n(192)),C=n(191),S=(n(87),n(58)),_=n.n(S),I=n(59),B=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).componentDidMount=function(){s.setState({count:s.props.contents.length,half:s.props.count/2,bar:Object(a.jsx)(I.Bar,{data:s.state.data,height:300,width:1200,options:{maintainAspectRatio:!1}})})},s.voteGame=function(e,t){_.a.ajax({type:"GET",url:"https://script.google.com/macros/s/AKfycbz0-j2Y5LhXOA6ug_r4bQfoC0QE5MD3zYcsQ7iAkDLh6JXCG1yBxTYFtaiUfU3IXwHd/exec",data:{post_ID:e,choice:t},success:function(e){alert("\ud22c\ud45c \uc644\ub8cc")}})},s.state={id:"",contents:null,count:0,half:0,data:{labels:["1","2","4"],datasets:[{label:"\ud22c\ud45c\ud604\ud669",data:[2,5,7]}]},bar:null},s}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsxs)("div",{className:"Info",children:[Object(a.jsx)("a",{className:"AwardName",children:"~~~~~~~!!!!!!!\uc0c1"}),Object(a.jsx)("button",{className:"PollState",children:"\ud22c\ud45c \ud604\ud669"})]}),this.props.contents.map((function(t,n){return Object(a.jsx)("div",{className:"PollContent",style:{display:"none"},children:Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{children:t.name}),Object(a.jsx)("img",{src:t.image}),Object(a.jsx)("button",{onClick:function(){return e.voteGame(e.props.id,t.index)},children:"\uc120\ud0dd\ud558\uae30"})]})},n)})),Object(a.jsx)("div",{id:"VoteResult",children:this.state.bar})]})}}]),n}(c.a.Component),w=[{content:[{name:"HelpBee",index:0,image:"logo512.png"},{name:"StockMarket",index:1,image:"logo512.png"},{name:"Arksung's Epidemic",index:2,image:"logo512.png"},{name:"Arksung's Epidemic",index:2,image:"logo512.png"}]},{content:[{name:"HelpBee",index:0,image:"logo512.png"},{name:"StockMarket",index:1,image:"logo512.png"},{name:"Arksung's Epidemic",index:2,image:"logo512.png"}]},{}];var E=function(e){e.content;var t=Object(s.useState)(""),n=Object(r.a)(t,2),c=n[0],i=n[1],o=Object(C.a)(["uniqueId"]),l=Object(r.a)(o,3),d=l[0],u=l[1];return l[2],Object(s.useEffect)((function(){if(fetch("https://spreadsheets.google.com/feeds/list/1rl0fCsvCnAg9uWTKzztFlFd3Q2E08-zjRAeCGCd-55s/1/public/full?alt=json").then((function(e){return e.json()})).then((function(e){console.log(e.feed.entry[0].gsx$postid.$t),e.feed.entry[0].gsx$postid.$t[2]}),(function(e){})),void 0!==d.uniqueId)i(d.uniqueId);else{var e=Object(k.a)();i(e),u("uniqueId",e)}})),Object(a.jsx)("div",{className:"Poll",children:Object(a.jsx)("div",{className:"PollContainer",children:Object(a.jsx)(B,{id:c,contents:w[0].content})})})},A=[{key:0,gameName:"Test",content:"\uc720\uc2e0\uc774\ubc14\ubcf4",icon:"logo512.png",link:"aa"},{key:1,gameName:"Test1",content:"\uc720\uc2e0\uc774d\ubcf4",icon:"logo512.png",link:"aa"},{key:2,gameName:"Test2",content:"\uc720\uc2e0\uc774d\ubcf4",icon:"logo512.png",link:"aa"},{key:3,gameName:"Test3",content:"\uc720\uc2e0\uc774d\ubcf4",icon:"logo512.png",link:"aa"}],M=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).movePage=function(){console.log(a.state.flipped),a.state.flipped?(document.getElementById("context_1").style.display="none",document.getElementById("context_2").style.display="flex"):(document.getElementById("context_1").style.display="flex",document.getElementById("context_2").style.display="none"),document.getElementById("topnav_Button").textContent=a.state.flipped?"\uac8c\uc784 \uc815\ubcf4 \ubcf4\uae30":"\ud22c\ud45c\ud558\ub7ec \uac00\uae30",a.setState({flipped:!a.state.flipped})},a.state={config:f.b.gentle,flipped:!0},a}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return setTimeout((function(){document.getElementById("topnav_Button").onclick=e.movePage}),500),Object(a.jsxs)("div",{style:{background:"black",height:"100vh"},children:[Object(a.jsx)(d,{}),Object(a.jsxs)("div",{id:"main",className:"main",children:[Object(a.jsx)("div",{id:"context_1",className:"GameInfo",children:Object(a.jsx)(N,{slides:A,animationConfig:f.b})}),Object(a.jsx)("div",{id:"context_2",className:"Vote",children:Object(a.jsx)(E,{})})]})]})}}]),n}(s.Component);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root")),l()},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){}},[[187,1,2]]]);
//# sourceMappingURL=main.cbccaa02.chunk.js.map