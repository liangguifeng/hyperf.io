(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,M,t){e.exports=t(193)},117:function(e,M,t){},192:function(e,M,t){},193:function(e,M,t){"use strict";t.r(M);var a,I=t(1),c=t.n(I),i=t(6),n=t.n(i),g=(t(117),t(14)),N=t(15),l=t(17),j=t(16),D=t(18),A=t(79),T=t(23),r=(t(194),t(81)),z=t(10),y=r.b.Item,m=function(e){function M(e){var t;return Object(g.a)(this,M),(t=Object(l.a)(this,Object(j.a)(M).call(this,e))).phoneClick=function(){var e=!t.state.phoneOpen;t.setState({phoneOpen:e,menuHeight:e?t.menu.current.dom.scrollHeight:0})},t.state={phoneOpen:!1,menuHeight:0},t.menu=c.a.createRef(),t}return Object(D.a)(M,e),Object(N.a)(M,[{key:"render",value:function(){var e=this,M=Object(T.a)({},this.props),t=M.dataSource,a=M.isMobile;delete M.dataSource,delete M.isMobile;var I=this.state,i=I.menuHeight,n=I.phoneOpen,g=t.Menu.children,N=Object.keys(g).map(function(e,M){return c.a.createElement(y,Object.assign({key:M.toString()},g[e]),c.a.createElement("a",Object.assign({},g[e].a,{href:g[e].a.href,target:g[e].a.target}),g[e].a.children))});return c.a.createElement(z.b,Object.assign({component:"header",animation:{opacity:0,type:"from"}},t.wrapper,M),c.a.createElement("div",Object.assign({},t.page,{className:"".concat(t.page.className).concat(n?" open":"")}),c.a.createElement(z.b,Object.assign({animation:{x:-30,type:"from",ease:"easeOutQuad"}},t.logo),c.a.createElement("img",{width:"100%",src:t.logo.children,alt:"img"})),a&&c.a.createElement("div",Object.assign({},t.mobileMenu,{onClick:function(){e.phoneClick()}}),c.a.createElement("em",null),c.a.createElement("em",null),c.a.createElement("em",null)),c.a.createElement(z.b,Object.assign({},t.Menu,{animation:{x:30,type:"from",ease:"easeOutQuad"},ref:this.menu,style:a?{height:i}:null}),c.a.createElement(r.b,{mode:a?"inline":"horizontal",defaultSelectedKeys:["0"],theme:a?"dark":"default"},N))))}}]),M}(c.a.Component),L=(t(98),t(59)),o=t(109),u=t(43),s=t(108),w=(t(188),function(e){function M(){return Object(g.a)(this,M),Object(l.a)(this,Object(j.a)(M).apply(this,arguments))}return Object(D.a)(M,e),Object(N.a)(M,[{key:"render",value:function(){var e=Object(T.a)({},this.props),M=e.dataSource;delete e.dataSource,delete e.isMobile;var t=M.textWrapper.children.map(function(e){var M=e.name,t=e.texty,a=Object(o.a)(e,["name","texty"]);return M.match("button")?c.a.createElement(L.a,Object.assign({type:"primary",key:M},a),e.children):c.a.createElement("div",Object.assign({key:M},a),t?c.a.createElement(s.a,{type:"mask-bottom"},e.children):e.children)});return c.a.createElement("div",Object.assign({},e,M.wrapper),c.a.createElement(u.a,Object.assign({key:"QueueAnim",type:["bottom","top"],delay:200},M.textWrapper),t))}}]),M}(c.a.PureComponent)),C=(t(99),t(60)),E=(t(101),t(61)),d=t(42),O=t.n(d),x=t(45),b=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/,h=function(e,M){var t=0===e.name.indexOf("title")?"h1":"div",a="string"===typeof e.children&&e.children.match(b)?c.a.createElement("img",{src:e.children,alt:"img"}):e.children;return a="object"===typeof e.children&&0===e.name.indexOf("button")?c.a.createElement(L.a,Object(x.a)({},e.children)):a,c.a.createElement(t,Object(x.a)({key:M.toString()},e),a)},Y=function(e){function M(){var e,t;Object(g.a)(this,M);for(var a=arguments.length,I=new Array(a),i=0;i<a;i++)I[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(j.a)(M)).call.apply(e,[this].concat(I)))).getBlockChildren=function(e){return e.map(function(e,M){var t=e.children;return c.a.createElement(E.a,Object.assign({key:M.toString()},e),c.a.createElement("div",t.icon,c.a.createElement("img",{src:t.icon.children,width:"100%",alt:"img"})),c.a.createElement("h3",t.title,t.title.children),c.a.createElement("div",t.content,t.content.children))})},t}return Object(D.a)(M,e),Object(N.a)(M,[{key:"render",value:function(){var e=Object(T.a)({},this.props),M=e.dataSource;delete e.dataSource,delete e.isMobile;var t=this.getBlockChildren(M.block.children);return c.a.createElement("div",Object.assign({},e,M.wrapper),c.a.createElement("div",M.page,c.a.createElement("div",M.titleWrapper,M.titleWrapper.children.map(h)),c.a.createElement(O.a,M.OverPack,c.a.createElement(u.a,Object.assign({type:"bottom",key:"block",leaveReverse:!0},M.block,{component:C.a}),t))))}}]),M}(c.a.PureComponent),k=function(e){function M(){var e,t;Object(g.a)(this,M);for(var a=arguments.length,I=new Array(a),c=0;c<a;c++)I[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(j.a)(M)).call.apply(e,[this].concat(I)))).getDelay=function(e,M){return e%M*100+100*Math.floor(e/M)+100*M},t}return Object(D.a)(M,e),Object(N.a)(M,[{key:"render",value:function(){var e=this,M=Object(T.a)({},this.props),t=M.dataSource,a=M.isMobile;delete M.dataSource,delete M.isMobile;var I=0,i=t.block.children.map(function(M,t){var i=M.children,n=a?50*t:e.getDelay(t,24/M.md),g={opacity:0,type:"from",ease:"easeOutQuad",delay:n},N=Object(x.a)({},g,{x:"+=10",delay:n+100});return I=(I+=M.md)>24?0:I,c.a.createElement(z.b,Object.assign({component:E.a,animation:g,key:M.name},M,{componentProps:{md:M.md,xs:M.xs},className:I?M.className:"".concat(M.className||""," clear-both").trim()}),c.a.createElement(z.b,Object.assign({animation:{x:"-=10",opacity:0,type:"from",ease:"easeOutQuad"},key:"img"},i.icon),c.a.createElement("img",{src:i.icon.children,width:"100%",alt:"img"})),c.a.createElement("div",i.textWrapper,c.a.createElement(z.b,Object.assign({key:"h2",animation:N,component:"h2"},i.title),i.title.children),c.a.createElement(z.b,Object.assign({key:"p",animation:Object(x.a)({},N,{delay:n+200}),component:"div"},i.content),i.content.children)))});return c.a.createElement("div",Object.assign({},M,t.wrapper),c.a.createElement("div",t.page,c.a.createElement("div",t.titleWrapper,t.titleWrapper.children.map(h)),c.a.createElement(O.a,t.OverPack,c.a.createElement(u.a,{key:"u",type:"bottom"},c.a.createElement(C.a,Object.assign({key:"row"},t.block),i)))))}}]),M}(c.a.PureComponent),p=function(e){function M(){return Object(g.a)(this,M),Object(l.a)(this,Object(j.a)(M).apply(this,arguments))}return Object(D.a)(M,e),Object(N.a)(M,[{key:"render",value:function(){var e=Object(T.a)({},this.props),M=e.dataSource;return delete e.dataSource,delete e.isMobile,c.a.createElement("div",Object.assign({},e,M.wrapper),c.a.createElement(O.a,M.OverPack,c.a.createElement(z.b,Object.assign({animation:{y:"+=30",opacity:0,type:"from"},key:"footer"},M.copyright),M.copyright.children)))}}]),M}(c.a.PureComponent),Q={wrapper:{className:"header0 home-page-wrapper jwbweljfrfi-editor_css"},page:{className:"home-page jwbwg2b25dc-editor_css"},logo:{className:"header0-logo jwbwdwdhgqr-editor_css",children:"https://hyperf.oss-cn-hangzhou.aliyuncs.com/hyperf.png"},Menu:{className:"header0-menu",children:[{name:"item0",a:{children:"\u5f00\u53d1\u6587\u6863",href:"https://doc.hyperf.io",className:"jwbwev2ey7-editor_css"},className:"jwbwfgejg3-editor_css"},{name:"item1",a:{children:"Github",href:"https://github.com/hyperf-cloud/hyperf",className:"jwbwf54e8hn-editor_css"}}]},mobileMenu:{className:"header0-mobile-menu"}},v={wrapper:{className:"banner3 jwbvg9mw5gi-editor_css"},textWrapper:{className:"banner3-text-wrapper",children:[{name:"nameEn",className:"banner3-name-en",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,c.a.createElement("br",null)))},{name:"slogan",className:"banner3-slogan jwbvhicx5l-editor_css",children:"The Way to PHP Microservice",texty:!0},{name:"name",className:"banner3-name jwbvj2078d8-editor_css",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Hyperf = Hyperspeed + Flexibility"))},{name:"button",className:"banner3-button jwbvker8eo-editor_css",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5feb\u901f\u5f00\u59cb")),href:"https://doc.hyperf.io"},{name:"time",className:"banner3-time",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,c.a.createElement("br",null)))}]}},S={wrapper:{className:"home-page-wrapper content0-wrapper jwq3fv7xmf-editor_css"},page:{className:"home-page content0"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u7b80\u5355\u5316\xa0 \xa0\u534f\u7a0b\u5316 \xa0 \u7ec4\u4ef6\u5316"))}]},block:{className:"block-wrapper",children:[{name:"block0",className:"block",md:8,xs:24,children:{icon:{className:"icon",children:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTUzNzI0NTcwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY1OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik05NjYuMjA4IDI0Ni43NTJMNTM0LjE0NCAyMS40MDhhNDcuOTY4IDQ3Ljk2OCAwIDAgMC00NC4xMjgtMC4xMjhMNTguMDggMjQzLjEzNkE0Ny45NjggNDcuOTY4IDAgMCAwIDMyIDI4NS44MjRWNzQ0LjY0YzAgMTguMjA4IDEwLjMwNCAzNC44NDggMjYuNTkyIDQyLjk3Nmw0MzIgMjE1LjM2YTQ4IDQ4IDAgMCAwIDQyLjgxNiAwbDQzMi0yMTUuMzZBNDggNDggMCAwIDAgOTkyIDc0NC42NzJWMjg5LjM0NGMwLTE3LjkyLTkuOTUyLTM0LjMwNC0yNS43OTItNDIuNTkyek01MDguMzg0IDQ2My42OGwtMTYyLjE3Ni03OS44MDggMzY3LjM2LTE5Ni43MDQgMTU4LjQgODIuNjI0LTM2My41ODQgMTkzLjg4OHogbTMuNDg4LTM4MS42OTZsMTMyLjk5MiA2OS4zNzYtMzY5LjMxMiAxOTcuNzYtMTQ0Ljg5Ni03MS4zMjggMzgxLjIxNi0xOTUuODA4ek05NiAzMzIuMDk2bDE1My4yMTYgNzUuMzkydjE2OC4yNTZhMzIgMzIgMCAwIDAgNjQgMHYtMTM2LjczNkw0ODAgNTIxLjAyNHY0MDUuMTg0TDk2IDczNC43NTJWMzMyLjA5NnogbTQ0OCA1OTQuMTEyVjUxNy4xODRsMzg0LTIwNC43MzZ2NDIyLjMwNGwtMzg0IDE5MS40NTZ6IiBwLWlkPSI2NTkiIGZpbGw9IiM1MTUxNTEiPjwvcGF0aD48L3N2Zz4="},title:{className:"content0-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5f00\u7bb1\u5373\u7528\uff0c\u5feb\u4eba\u4e00\u6b65"))},content:{children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5b98\u65b9\u63d0\u4f9b\u8d85\u591a\u5e38\u7528\u7ec4\u4ef6\uff0c\u968f\u7528\u968f\u53d6"))}}},{name:"block1",className:"block",md:8,xs:24,children:{icon:{className:"icon",children:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTUzNzk0NTk2IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk2NyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik04OTIuMjI0IDExNy4wMjRjLTgzLjkzNi04My45MzYtMjMxLjY0OC04MS4xMi0zODcuNjE2LTMuODQtMTU1LjkzNi03Ny4yOC0zMDMuNjgtODAuMDk2LTM4Ny42MTYgMy44NC02OS43NiA2OS43Ni03OS40ODggMTgzLjU1Mi0zNi42NCAzMDkuMzQ0YTk1Ljc3NiA5NS43NzYgMCAwIDAgMTIuOTkyIDEyMi41MjhjLTU1LjkzNiAxMzYuODk2LTUzLjQ3MiAyNjYuMTc2IDIzLjY4IDM0My4zMjggODMuOTM2IDgzLjkzNiAyMzEuNzEyIDgxLjE1MiAzODcuNzc2IDMuNzc2IDE1Mi44IDc1LjY4IDMwMi4wMTYgODEuNjMyIDM4Ny40MjQtMy43NzYgODUuNDQtODUuNDQgNzkuNDI0LTIzNC43MiAzLjY4LTM4Ny41ODQgNzUuNzQ0LTE1Mi44OTYgODEuNzYtMzAyLjE3Ni0zLjY4LTM4Ny42MTZ6IG0tNDUuMjQ4IDcyOS45NTJjLTk2LjQxNiA5Ni40MTYtMzMyLjY0IDI5LjQwOC01MjMuMzYtMTYxLjM0NGEzMS45NjggMzEuOTY4IDAgMSAwLTQ1LjI0OCA0NS4yNDggOTEzLjA1NiA5MTMuMDU2IDAgMCAwIDE1Ny4zNzYgMTI2LjMwNGMtMTE3LjI0OCA0Ny45MDQtMjE5LjEwNCA0NC4xMjgtMjczLjQ3Mi0xMC4yNC01NS43NzYtNTUuNzc2LTU2LjU0NC0xNTguMzY4LTEwLjY1Ni0yNzEuODA4IDIuODE2IDAuMjU2IDUuNTA0IDAuODY0IDguMzg0IDAuODY0YTk2IDk2IDAgMCAwIDk2LTk2YzAtMjEuMDI0LTYuOTQ0LTQwLjI4OC0xOC40LTU2LjA5NmE4NzAuNTkyIDg3MC41OTIgMCAwIDEgODYuMDE2LTEwMC4yODggMzEuOTY4IDMxLjk2OCAwIDEgMC00NS4yNDgtNDUuMjQ4IDkzMy42IDkzMy42IDAgMCAwLTkzLjQ3MiAxMDkuMzQ0QTkyLjkyOCA5Mi45MjggMCAwIDAgMTYwIDM4NGE5NS42OCA5NS42OCAwIDAgMC0yNC43MzYgMy42MTZjLTI4LjcwNC05Ni40NDgtMTkuNzc2LTE3OC41NiAyNy4wMDgtMjI1LjM0NCA2Mi4zNjgtNjIuMzY4IDE4Ny4yNjQtNTguMTc2IDMyNi4xMTIgMTQuMjRhMzEuMDA4IDMxLjAwOCAwIDAgMCAxNi41NDQgMy4wNCAzMS4xMDQgMzEuMTA0IDAgMCAwIDE2LjAzMi0zLjEwNGMxMzguODE2LTcyLjM1MiAyNjMuNjQ4LTc2LjU0NCAzMjYuMDE2LTE0LjE3NiA1NiA1NiA1Ni41NDQgMTU5LjIgMTAuMDQ4IDI3My4yMTZhODc5LjM2IDg3OS4zNiAwIDAgMC02Ny41ODQtOTIuNDhjNi41MjgtMTEuNTg0IDEwLjU2LTI0Ljc2OCAxMC41Ni0zOS4wMDhhODAgODAgMCAxIDAtODAgODBjNi4zNjggMCAxMi40OC0wLjkyOCAxOC40LTIuMzM2YTc5NS45NjggNzk1Ljk2OCAwIDAgMSA4NS40MDggMTIyLjk0NGMtMzEuNTIgNTYuNjcyLTczLjk4NCAxMTQuMDgtMTI2LjE3NiAxNjguMzUyLTMuMi0wLjM4NC02LjMzNi0wLjk2LTkuNjMyLTAuOTZhODAgODAgMCAxIDAgNjUuNzkyIDM0LjYyNCA5MDEuMDU2IDkwMS4wNTYgMCAwIDAgMTAzLjIzMi0xMzIuODY0YzQ2LjQ2NCAxMTMuOTg0IDQ1Ljk1MiAyMTcuMjE2LTEwLjA0OCAyNzMuMjE2eiIgcC1pZD0iOTY4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTUxMiAzODRhMTI4IDEyOCAwIDEgMCAwIDI1NiAxMjggMTI4IDAgMCAwIDAtMjU2eiBtMCAxOTJhNjQgNjQgMCAxIDEgMC4wMzItMTI4LjAzMkE2NCA2NCAwIDAgMSA1MTIgNTc2eiIgcC1pZD0iOTY5IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+"},title:{className:"content0-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u539f\u751f\u534f\u7a0b\uff0c\u8d85\u9ad8\u6027\u80fd"))},content:{children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u57fa\u4e8eSwoole\u539f\u751f\u534f\u7a0b\uff0c\u6027\u80fd\u5f3a\u608d"))}}},{name:"block2",className:"block",md:8,xs:24,children:{icon:{className:"icon",children:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTUzNzY3NzMwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjgxNiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xOTIgMTYwYTMyIDMyIDAgMCAwLTMyIDMydjE5MmEzMiAzMiAwIDAgMCAzMiAzMmgxOTJhMzIgMzIgMCAwIDAgMzItMzJWMTkyYTMyIDMyIDAgMCAwLTMyLTMySDE5MnogbTAtNjRoMTkyYTk2IDk2IDAgMCAxIDk2IDk2djE5MmE5NiA5NiAwIDAgMS05NiA5NkgxOTJhOTYgOTYgMCAwIDEtOTYtOTZWMTkyYTk2IDk2IDAgMCAxIDk2LTk2ek0xOTIgNjA4YTMyIDMyIDAgMCAwLTMyIDMydjE5MmEzMiAzMiAwIDAgMCAzMiAzMmgxOTJhMzIgMzIgMCAwIDAgMzItMzJ2LTE5MmEzMiAzMiAwIDAgMC0zMi0zMkgxOTJ6IG0wLTY0aDE5MmE5NiA5NiAwIDAgMSA5NiA5NnYxOTJhOTYgOTYgMCAwIDEtOTYgOTZIMTkyYTk2IDk2IDAgMCAxLTk2LTk2di0xOTJhOTYgOTYgMCAwIDEgOTYtOTZ6TTY0MCA2MDhhMzIgMzIgMCAwIDAtMzIgMzJ2MTkyYTMyIDMyIDAgMCAwIDMyIDMyaDE5MmEzMiAzMiAwIDAgMCAzMi0zMnYtMTkyYTMyIDMyIDAgMCAwLTMyLTMyaC0xOTJ6IG0wLTY0aDE5MmE5NiA5NiAwIDAgMSA5NiA5NnYxOTJhOTYgOTYgMCAwIDEtOTYgOTZoLTE5MmE5NiA5NiAwIDAgMS05Ni05NnYtMTkyYTk2IDk2IDAgMCAxIDk2LTk2ek02MDIuMjcyIDI2Ni4yNzJhMzIgMzIgMCAwIDAgMCA0NS4yOGwxMTIgMTEyYTMyIDMyIDAgMCAwIDQ1LjI4IDBsMTEyLTExMmEzMiAzMiAwIDAgMCAwLTQ1LjI4bC0xMTItMTEyYTMyIDMyIDAgMCAwLTQ1LjI4IDBsLTExMiAxMTJ6IG0tNDUuMjQ4LTQ1LjI0OGwxMTItMTEyYTk2IDk2IDAgMCAxIDEzNS43NzYgMGwxMTIgMTEyYTk2IDk2IDAgMCAxIDAgMTM1Ljc3NmwtMTEyIDExMmE5NiA5NiAwIDAgMS0xMzUuNzc2IDBsLTExMi0xMTJhOTYgOTYgMCAwIDEgMC0xMzUuNzc2eiIgcC1pZD0iODE3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+"},title:{className:"content0-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u4e30\u5bcc\u7ec4\u4ef6\uff0c\u4efb\u610f\u7ec4\u5408"))},content:{children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5168\u7ec4\u4ef6\u5316\u8bbe\u8ba1\uff0c\u53ef\u590d\u7528\u4e8e\u5176\u5b83\u6846\u67b6"))}}}]}},R={wrapper:{className:"home-page-wrapper content3-wrapper jwq3fnvddaf-editor_css"},page:{className:"home-page content3 jwq3bo8n6w-editor_css"},OverPack:{playScale:.3},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u751f\u4ea7\u7ea7\u522b\u7684\u534f\u7a0b\u6846\u67b6")),className:"title-h1"},{name:"content",className:"title-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u7531 Swoole 4 \u539f\u751f\u534f\u7a0b\u5f3a\u529b\u9a71\u52a8"))}]},block:{className:"content3-block-wrapper",children:[{name:"block0",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTU1ODQ5MzM1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQxMDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTc5LjIgMTU4Ljg0OGEzMiAzMiAwIDAgMC0zOC40LTIzLjkzNmwtMTY2Ljg0OCAzOC42NTZhMzIgMzIgMCAwIDAtMTUuODA4IDUzLjQwOEw3OTQuNTYgMjY0LjY0bC0xOTQuNTYgMTczLjU2OC0xMDEuMDI0LTk1LjY4YTMyIDMyIDAgMCAwLTQ1LjE1MiAxLjE1MmwtMjE2LjczNiAyMjcuMjY0QTY0IDY0IDAgMSAwIDI4OCA2MzMuNmMwLTYuOTQ0LTEuMzc2LTEzLjQ3Mi0zLjQyNC0xOS43MTJsMTkzLjUzNi0yMDIuOTQ0IDk5LjIzMiA5My45NTJhMzIgMzIgMCAwIDAgNDMuMjk2IDAuNjRMODM5LjA0IDMxMC43Mmw0MS41MDQgNDIuOTc2YTMyIDMyIDAgMCAwIDUzLjkyLTEzLjkybDQ0LjQ0OC0xNjUuNDA4YTMxLjg0IDMxLjg0IDAgMCAwIDAuMjg4LTE1LjUyeiIgcC1pZD0iNDEwMSIgZmlsbD0iIzUxNTE1MSI+PC9wYXRoPjxwYXRoIGQ9Ik05MjggNDUwLjQ2NGEzMiAzMiAwIDAgMC0zMiAzMlY3MzZhMzIgMzIgMCAwIDEtMzIgMzJIMTYwYTMyIDMyIDAgMCAxLTMyLTMyVjE2MGEzMiAzMiAwIDAgMSAzMi0zMmg1MzAuNjU2YTMyIDMyIDAgMCAwIDAtNjRIMTYwYTk2IDk2IDAgMCAwLTk2IDk2djU3NmE5NiA5NiAwIDAgMCA5NiA5Nmg3MDRhOTYgOTYgMCAwIDAgOTYtOTZ2LTI1My41MzZhMzIgMzIgMCAwIDAtMzItMzJ6TTkxMiA4OTZoLTgwMGEzMiAzMiAwIDAgMCAwIDY0aDgwMGEzMiAzMiAwIDAgMCAwLTY0eiIgcC1pZD0iNDEwMiIgZmlsbD0iIzUxNTE1MSI+PC9wYXRoPjwvc3ZnPg=="},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u9ad8\u6027\u80fd"))},content:{className:"content3-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5168\u534f\u7a0b\u5f02\u6b65\u5b9e\u73b0\uff0c\u6027\u80fd\u8fdc\u8d85\u6240\u6709\u4f20\u7edf PHP-FPM \u6846\u67b6"))}}},{name:"block1",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTU1OTM0MTEyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQyNTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDgzMm0tNjQgMGE2NCA2NCAwIDEgMCAxMjggMCA2NCA2NCAwIDEgMC0xMjggMFoiIHAtaWQ9IjQyNTMiIGZpbGw9IiM1MTUxNTEiPjwvcGF0aD48cGF0aCBkPSJNNzkwLjQgMzJIMjMzLjZDMTgyLjcyIDMyIDE0NCA3OC4zMzYgMTQ0IDEzMi45Mjh2NzU4LjE0NEMxNDQgOTQ1LjY2NCAxODIuNzIgOTkyIDIzMy42IDk5Mmg1NTYuOGM1MC44OCAwIDg5LjYtNDYuMzM2IDg5LjYtMTAwLjkyOFYxMzIuOTI4Qzg4MCA3OC4zMzYgODQxLjI4IDMyIDc5MC40IDMyek0yMzMuNiA5Nmg1NTYuOGMxMi43MzYgMCAyNS42IDE1LjM5MiAyNS42IDM2LjkyOFYxNjBoLTYwOHYtMjcuMDcyQzIwOCAxMTEuMzkyIDIyMC44NjQgOTYgMjMzLjYgOTZ6IG01NTYuOCA4MzJIMjMzLjZjLTEyLjczNiAwLTI1LjYtMTUuMzkyLTI1LjYtMzYuOTI4VjIyNGg2MDh2NjY3LjA3MmMwIDIxLjUzNi0xMi44NjQgMzYuOTI4LTI1LjYgMzYuOTI4eiIgcC1pZD0iNDI1NCIgZmlsbD0iIzUxNTE1MSI+PC9wYXRoPjxwYXRoIGQ9Ik03MDQgNTYwSDMyMGEzMiAzMiAwIDEgMCAwIDY0aDM4NGEzMiAzMiAwIDEgMCAwLTY0ek0zMjAgNDMyaDI1Ni41NzZhMzIgMzIgMCAxIDAgMC02NEgzMjBhMzIgMzIgMCAwIDAgMCA2NHoiIHAtaWQ9IjQyNTUiIGZpbGw9IiM1MTUxNTEiPjwvcGF0aD48L3N2Zz4="},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u751f\u4ea7\u53ef\u7528"))},content:{className:"content3-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u7ecf\u5386\u8fc7\u957f\u65f6\u95f4\u751f\u4ea7\u73af\u5883\u8003\u9a8c\u7684\u4f01\u4e1a\u7ea7\u6846\u67b6\u8bbe\u8ba1\uff0c\u7a33\u5b9a\u53ef\u9760"))}}},{name:"block2",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTU2MjI3MjYzIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ4MzMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODY0IDE2MGgtMTY0LjUxMkExMjcuNzEyIDEyNy43MTIgMCAwIDAgNTc2IDY0YTEyOCAxMjggMCAwIDAgMCAyNTYgMTI3LjcxMiAxMjcuNzEyIDAgMCAwIDEyMy40ODgtOTZIODY0YTMyIDMyIDAgMCAxIDMyIDMydjI4OGEzMiAzMiAwIDAgMS0zMiAzMmgtMzA0YTMyIDMyIDAgMCAwIDAgNjRIODY0YTk2IDk2IDAgMCAwIDk2LTk2VjI1NmE5NiA5NiAwIDAgMC05Ni05NnogbS0yODggOTZhNjQgNjQgMCAxIDEgMC4wMzItMTI4LjAzMkE2NCA2NCAwIDAgMSA1NzYgMjU2eiIgcC1pZD0iNDgzNCIgZmlsbD0iIzUxNTE1MSI+PC9wYXRoPjxwYXRoIGQ9Ik04MzIgNzA0Yy01Ny4zNzYgMC0xMDUuMzc2IDM4LjAxNi0xMjEuNjMyIDkwLjA0OEgzODRhMzEuODcyIDMxLjg3MiAwIDAgMS0zMS43NDQtMzAuNjU2QTEyNy42OCAxMjcuNjggMCAwIDAgMzIwIDUxMmMtNDcuMjY0IDAtODguMDY0IDI1Ljg4OC0xMTAuMjQgNjRIMTYwYTMyIDMyIDAgMCAxLTMyLTMyVjI1NmEzMiAzMiAwIDAgMSAzMi0zMmgyMDhhMzIgMzIgMCAwIDAgMC02NEgxNjBhOTYgOTYgMCAwIDAtOTYgOTZ2Mjg4YTk2IDk2IDAgMCAwIDk2IDk2aDMyYTEyNy42OCAxMjcuNjggMCAwIDAgOTYuMTYgMTIzLjUyQTk1LjkzNiA5NS45MzYgMCAwIDAgMzg0IDg1OC4wOGgzMjIuNjg4QTEyOCAxMjggMCAxIDAgODMyIDcwNHpNMjU2IDY0MGE2NCA2NCAwIDEgMSAxMjguMDMyIDAuMDMyQTY0IDY0IDAgMCAxIDI1NiA2NDB6IG01NzYgMjU2YTY0IDY0IDAgMSAxIDAuMDMyLTEyOC4wMzJBNjQgNjQgMCAwIDEgODMyIDg5NnoiIHAtaWQ9IjQ4MzUiIGZpbGw9IiM1MTUxNTEiPjwvcGF0aD48L3N2Zz4="},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5fae\u670d\u52a1"))},content:{className:"content3-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5065\u5168\u7684\u5fae\u670d\u52a1\u4f53\u7cfb\uff0cgRPC\u3001JsonRPC\u3001\u670d\u52a1\u53d1\u73b0\u3001\u7194\u65ad\uff0c\u7075\u6d3b\u5b8c\u5584"))}}},{name:"block3",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTU2MTkyNTkwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ2ODEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDY2OC4yMjRsMzY5LjY5Ni0xODQuODMyYTMyIDMyIDAgMCAxIDI4LjYwOCA1Ny4yMTZsLTM4NCAxOTJhMzIgMzIgMCAwIDEtMjguNjA4IDBsLTM4NC0xOTJhMzIgMzIgMCAwIDEgMjguNjA4LTU3LjIxNkw1MTIgNjY4LjIyNHoiIHAtaWQ9IjQ2ODIiIGZpbGw9IiM1MTUxNTEiPjwvcGF0aD48cGF0aCBkPSJNNTEyIDg2MC4yMjRsMzY5LjY5Ni0xODQuODMyYTMyIDMyIDAgMCAxIDI4LjYwOCA1Ny4yMTZsLTM4NCAxOTJhMzIgMzIgMCAwIDEtMjguNjA4IDBsLTM4NC0xOTJhMzIgMzIgMCAwIDEgMjguNjA4LTU3LjIxNkw1MTIgODYwLjIyNHpNMTEzLjY5NiAzNDguNjRhMzIgMzIgMCAwIDEgMC01Ny4yOGwzODQtMTkyYTMyIDMyIDAgMCAxIDI4LjYwOCAwbDM4NCAxOTJhMzIgMzIgMCAwIDEgMCA1Ny4yOGwtMzg0IDE5MmEzMiAzMiAwIDAgMS0yOC42MDggMGwtMzg0LTE5MnpNNTEyIDQ3Ni4yMjRMODI0LjQ0OCAzMjAgNTEyIDE2My43NzYgMTk5LjU1MiAzMjAgNTEyIDQ3Ni4yMjR6IiBwLWlkPSI0NjgzIiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u7ec4\u4ef6\u4e30\u5bcc"))},content:{className:"content3-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5168\u7ec4\u4ef6\u5316\u8bbe\u8ba1\uff0c\u8d85\u591a\u5e38\u7528\u7ec4\u4ef6\uff0c\u7edd\u5927\u90e8\u5206\u7ec4\u4ef6\u5747\u53ef\u590d\u7528\u4e8e\u5176\u5b83\u6846\u67b6"))}}},{name:"block4",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTU2MDA4NTc0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ1MjIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODMyIDczNmExMjggMTI4IDAgMCAwLTEyNS4yOCAxMDEuODI0bC0zMTguMzA0LTAuMDY0Yy04LjM1Mi01LjU2OC0xMy40NC00My42MTYtMTYuNDQ4LTY5Ljc2aDkyLjM4NGMxNC41OTIgMTkuMzI4IDM3LjU2OCAzMiA2My42NDggMzJhODAgODAgMCAxIDAtNzguNC05NmgtODYuMjRjLTExLjYxNi02My4xMzYtMzguMzM2LTEyOC0xMjIuMTQ0LTEyOEg5NmEzMiAzMiAwIDEgMCAwIDY0aDE0NS4yNDhjMzIuMzIgMCA0Ny4xMzYgMTkuNzc2IDU2LjcwNCA2NEg5NmEzMiAzMiAwIDAgMCAwIDY0aDIxMS41NTJjNi43MiA2MC4wNjQgMTUuNTg0IDEzMy44MjQgODIuMjQgMTMzLjgyNGgzMTguMTc2YzAuOCAwIDEuNDQtMC4zODQgMi4yMDgtMC40NDhDNzI2LjI3MiA5NTMuNjk2IDc3NC40IDk5MiA4MzIgOTkyYTEyOCAxMjggMCAwIDAgMC0yNTZ6IG0wIDE5MmE2NCA2NCAwIDEgMSAwLjAzMi0xMjguMDMyQTY0IDY0IDAgMCAxIDgzMiA5Mjh6TTk2IDUxMmgzODQuNTEyYzEuMzQ0IDAgMi40OTYtMC42MDggMy43NzYtMC43NjhBMTI3Ljc0NCAxMjcuNzQ0IDAgMCAwIDYwOCA2MDhhMTI4IDEyOCAwIDAgMCAwLTI1NiAxMjcuNzQ0IDEyNy43NDQgMCAwIDAtMTIzLjcxMiA5Ni43NjhjLTEuMjgtMC4xNi0yLjQzMi0wLjc2OC0zLjc3Ni0wLjc2OEg5NmEzMiAzMiAwIDAgMCAwIDY0eiBtNTEyLTk2YTY0IDY0IDAgMSAxLTAuMDMyIDEyOC4wMzJBNjQgNjQgMCAwIDEgNjA4IDQxNnpNOTYgMzg5Ljc5MmgxNDUuMjQ4YzEwOC4yMjQgMCAxMjEuNi05MC4yNzIgMTI5LjYtMTQ0LjE5MiA2LjY4OC00NS41MDQgMTAuNzg0LTUzLjYgMTguOTQ0LTUzLjZoMjk4LjU2YzE0LjU5MiAxOS4zMjggMzcuNTY4IDMyIDYzLjY0OCAzMmE4MCA4MCAwIDEgMC03OC40LTk2aC0yODMuODA4QzMyMy41MiAxMjggMzEzLjg4OCAxOTMuMTIgMzA3LjUyIDIzNi4yMjRjLTkuNDA4IDYzLjY0OC0xOC4wNDggODkuNTY4LTY2LjI3MiA4OS41NjhIOTZhMzIgMzIgMCAwIDAgMCA2NHoiIHAtaWQ9IjQ1MjMiIGZpbGw9IiM1MTUxNTEiPjwvcGF0aD48L3N2Zz4="},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5206\u5e03\u5f0f"))},content:{className:"content3-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u57fa\u4e8e\u76f8\u5173\u7ec4\u4ef6\u53ef\u5feb\u901f\u642d\u5efa\u51fa\u4f01\u4e1a\u7ea7\u7684\u5206\u5e03\u5f0f\u7cfb\u7edf\uff0c\u6781\u901f\u6269\u5bb9"))}}},{name:"block5",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTU2MzA1OTQ1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ5ODUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODY3LjU4NCAxNjAuMTkyYy0xNDkuNjMyLTE2LjkyOC0yNjIuMjA4LTU3LjQwOC0zMzQuNTkyLTEyMC4zNTJsLTE5LjA0LTE2LjU0NC0yMC41NDQgMTQuNjU2QzM3OS45NjggMTE4Ljk0NCAyNjcuNzc2IDE2MCAxNjAgMTYwSDEyOHY0NDhjMCAxMzcuMzQ0IDEyMS4wODggMjYxLjkyIDM3MC4yMDggMzgwLjg2NGwxMy4wODggNi4yNCAxMy4zNDQtNS43MjhDNzcxLjA3MiA4ODMuNTIgODk2IDc1NS4yMzIgODk2IDYwOFYxNjMuNDI0bC0yOC40MTYtMy4yMzJ6TTgzMiA2MDhjMCAxMTYuOC0xMDcuMzkyIDIyMy4zNi0zMTkuMzI4IDMxNi44QzI5OS44NzIgODIxLjAyNCAxOTIgNzE0LjQ2NCAxOTIgNjA4VjIyMi45NzZjMTA0LjY3Mi02Ljc4NCAyMTEuNTg0LTQ2LjY4OCAzMTguNDk2LTExOC45NDRDNTg3LjIzMiAxNjIuNTI4IDY5NS4xNjggMjAxLjUzNiA4MzIgMjIwLjI1NlY2MDh6IiBwLWlkPSI0OTg2IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM1OS43NzYgNDY4LjY3MmEzMiAzMiAwIDEgMC00Ny45NjggNDIuNGwxMjEuNzkyIDEzNy44MjRjMTIuNjA4IDE0LjI0IDMwLjE3NiAyMS41NjggNDcuOTA0IDIxLjU2OGE2NC4zODQgNjQuMzg0IDAgMCAwIDQ5LjY5Ni0yMy41MmwxOTcuNi0yNDIuNzJhMzIgMzIgMCAwIDAtNDkuNjMyLTQwLjQxNmwtMTk3LjYgMjQyLjY4OC0xMjEuNzkyLTEzNy44MjR6IiBwLWlkPSI0OTg3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u81ea\u52a8\u5316\u6d4b\u8bd5"))},content:{className:"content3-content",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u5b8c\u5907\u7684\u81ea\u52a8\u5316\u6d4b\u8bd5\uff0c\u4ece\u5f00\u53d1\u5230\u751f\u4ea7\u4ea4\u4ed8\u5168\u6d41\u7a0b\u4fdd\u969c"))}}}]}},G={wrapper:{className:"home-page-wrapper footer0-wrapper jwq3bq34q9r-editor_css"},OverPack:{className:"home-page footer0",playScale:.05},copyright:{className:"copyright",children:c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"\xa92019 Hyperf\xa0All Rights Reserved"))}};t(192);Object(A.enquireScreen)(function(e){a=e});var U=window.location,P=function(e){function M(e){var t;return Object(g.a)(this,M),(t=Object(l.a)(this,Object(j.a)(M).call(this,e))).state={isMobile:a,show:!U.port},t}return Object(D.a)(M,e),Object(N.a)(M,[{key:"componentDidMount",value:function(){var e=this;Object(A.enquireScreen)(function(M){e.setState({isMobile:!!M})}),U.port&&setTimeout(function(){e.setState({show:!0})},500)}},{key:"render",value:function(){var e=this,M=[c.a.createElement(m,{id:"Nav0_0",key:"Nav0_0",dataSource:Q,isMobile:this.state.isMobile}),c.a.createElement(w,{id:"Banner3_0",key:"Banner3_0",dataSource:v,isMobile:this.state.isMobile}),c.a.createElement(Y,{id:"Content0_0",key:"Content0_0",dataSource:S,isMobile:this.state.isMobile}),c.a.createElement(k,{id:"Content3_0",key:"Content3_0",dataSource:R,isMobile:this.state.isMobile}),c.a.createElement(p,{id:"Footer0_0",key:"Footer0_0",dataSource:G,isMobile:this.state.isMobile})];return c.a.createElement("div",{className:"templates-wrapper",ref:function(M){e.dom=M}},this.state.show&&M)}}]),M}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(c.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[112,1,2]]]);
//# sourceMappingURL=main.35796771.chunk.js.map