(this.webpackJsonpgamejam2021=this.webpackJsonpgamejam2021||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),c=n.n(s),i=n(15),o=n.n(i),l=(n(29),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))}),r=n(13),d=(n(30),function(){var e=Object(s.useState)(),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(s.useState)("layer_popup"),o=Object(r.a)(i,2),l=o[0],d=o[1];return Object(s.useEffect)((function(){n?d(l+" on"):0==n&&d("layer_popup")}),[n]),Object(a.jsxs)("nav",{className:"background ",children:[Object(a.jsxs)("div",{className:"topnav",children:[Object(a.jsx)("a",{className:"leftAtt",href:"https://thecgawards.kro.kr",children:"The CG Awards"}),Object(a.jsxs)("ul",{className:"topnav_icon",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"Youtube",children:Object(a.jsx)("img",{src:"youtube.svg"})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"Instagram",children:Object(a.jsx)("img",{src:"instagram.svg"})})})]}),Object(a.jsx)("ul",{className:"topnav_icon_small",children:Object(a.jsx)("li",{onClick:function(){c(!0)},children:Object(a.jsx)("a",{children:Object(a.jsx)("img",{src:"menu.svg"})})})})]}),Object(a.jsxs)("div",{className:l,children:[Object(a.jsxs)("div",{className:"layer",children:[Object(a.jsxs)("div",{className:"text_area",children:[Object(a.jsx)("div",{className:"title",children:"\uba54\uc778"}),Object(a.jsxs)("div",{className:"maker",children:[Object(a.jsx)("div",{className:"human",children:"\uc77c\ud638"}),Object(a.jsx)("div",{className:"human",children:"\uc774\ud638"}),Object(a.jsx)("div",{className:"human",children:"\uc0bc\ud638"}),Object(a.jsx)("div",{className:"human",children:"\uc0ac\ud638"}),Object(a.jsx)("div",{className:"human",children:"\uc0ac\ud638"})]})]}),Object(a.jsx)("div",{className:"btn_area"}),Object(a.jsx)("button",{className:"btn_close",onClick:function(){c(!1)},children:"CLOSE"})]}),Object(a.jsx)("div",{className:"dimmed"})]})]})}),j=n(3),m=n(7),u=n(5),b=n(4),h=(n(31),n(16)),f=n(23),O=n(11),g=n(17),x=n(22);n(32);var v=Object(g.b)()((function(e){var t=e.index,n=e.offsetRadius,s=e.gameName,c=e.content,i=e.icon,o=e.link,l=e.moveSlide,d=e.delta,j=e.down,m=e.animationConfig,u=Object(O.c)((function(){return{xy:[0,0]}})),b=Object(r.a)(u,2),v=(b[0].xy,b[1]),p=(Object(g.a)((function(e){var t=e.down,n=e.delta,a=e.velocity;a=Object(f.a)(a,1,8),v({xy:t?n:[0,0],config:{mass:a,tension:500*a,friction:50}})})),t-n),N=1-Math.abs(p/(n+1)),y=Math.abs(p)/(n+1)*50,k=0;return 0===p&&j&&(k+=d[1]/(n+1),console.log(k),k<-63&&l(1),k>63&&l(-1)),p>0?k-=y:p<0&&(k+=y),Object(a.jsx)(x.Spring,{to:{transform:"translate(-50%, ".concat(-50+k,"%) scale(").concat(N,")"),top:"".concat(0===n?50:50+50*p/n,"%"),opacity:N*N,zIndex:Math.abs(Math.abs(p)-2)},config:m,children:function(e){return Object(a.jsx)(O.a.div,{className:"SliderContainer",style:Object(h.a)(Object(h.a)({},e),{},{zIndex:Math.abs(Math.abs(p)-2)}),children:Object(a.jsxs)(O.a.div,{className:"SliderCard",style:{},children:[Object(a.jsx)("a",{className:"gameName",children:s}),Object(a.jsx)("a",{className:"context",children:c}),Object(a.jsx)("a",{className:"icon",href:o,children:Object(a.jsx)("img",{className:"img",src:i})})]})})}})}));function p(e,t){return(e%t+t)%t}var N=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={index:0},e.componentDidMount=function(){document.addEventListener("keydown",(function(t){t.isComposing||229===t.keyCode||(38===t.keyCode&&e.moveSlide(-1),40===t.keyCode&&e.moveSlide(1))}))},e.modBySlidesLength=function(t){return p(t,e.props.slides.length)},e.moveSlide=function(t){e.setState({index:e.modBySlidesLength(e.state.index+t),goToSlide:null})},e}return Object(m.a)(n,[{key:"clampOffsetRadius",value:function(e){var t=this.props.slides,n=Math.floor((t.length-1)/2);return e<0?0:e>n?n:e}},{key:"getPresentableSlides",value:function(){var e=this.props.slides,t=this.state.index,n=this.props.offsetRadius;n=this.clampOffsetRadius(n);for(var a=new Array,s=-n;s<1+n;s++)console.log(e[this.modBySlidesLength(t+s)].key),a.push(e[this.modBySlidesLength(t+s)]);return a}},{key:"render",value:function(){var e=this,t=this.props,n=t.animationConfig,s=t.offsetRadius;return Object(a.jsx)(c.a.Fragment,{children:this.getPresentableSlides().map((function(t,c){return Object(a.jsx)(v,{index:c,offsetRadius:e.clampOffsetRadius(s),gameName:t.gameName,content:t.content,icon:t.icon,link:t.link,moveSlide:e.moveSlide,animationConfig:n},t.key)}))})}}]),n}(c.a.Component);N.defaultProps={offsetRadius:1,animationConfig:{tension:120,friction:14,duration:100}};var y=N,k=[{key:0,gameName:"Test",content:"\uc720\uc2e0\uc774\ubc14\ubcf4",icon:"logo512.png",link:"aa"},{key:1,gameName:"Test1",content:"\uc720\uc2e0\uc774d\ubcf4",icon:"logo512.png",link:"aa"},{key:2,gameName:"Test2",content:"\uc720\uc2e0\uc774d\ubcf4",icon:"logo512.png",link:"aa"},{key:3,gameName:"Test3",content:"\uc720\uc2e0\uc774d\ubcf4",icon:"logo512.png",link:"aa"}],S=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={config:O.b.gentle},a}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{id:"main",className:"main",children:Object(a.jsx)(y,{slides:k,animationConfig:this.state.config})})}}]),n}(s.Component);o.a.render(Object(a.jsxs)(c.a.StrictMode,{children:[Object(a.jsx)(d,{}),Object(a.jsx)(S,{})]}),document.getElementById("root")),l()}},[[49,1,2]]]);
//# sourceMappingURL=main.411eb4b7.chunk.js.map