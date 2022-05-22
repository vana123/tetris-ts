(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(2),i=a(3),s=a(4),l=a(7),c=a(5),d=a(8),u=function(e){var t=[];return e.field.forEach(function(e,a){var n=e.map(function(e,t){return r.createElement("div",{className:"col-".concat(e),key:t})});t.push(r.createElement("div",{className:"tetris-board__row",key:a},n))}),r.createElement("div",{className:"tetris-board"},r.createElement("div",{className:"tetris-board__info tetris-board__text"},"Level: ",e.level," Score: ",e.score,e.gameOver&&r.createElement("p",{className:"tetris-board__text"},r.createElement("strong",null,"Game Over"))),r.createElement("div",{className:"tetris-board__board"},t))},v=a(6),h=(a(15),function(e){var t=e.handlePauseClick,a=Object(r.useState)(!0),o=Object(v.a)(a,2),i=o[0],s=o[1];return n.a.createElement("div",{className:i?"activeFlag Start":"inactiveFlag Start",onClick:function(){t(),s(!i)}},n.a.createElement("button",{className:"Start__button"},"START"))}),m=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).onKeyDownHandler=function(e){switch(console.log(e.keyCode),e.keyCode){case 65:a.setState({action:"left"}),a.handleBoardUpdate(a.state.action);break;case 68:a.setState({action:"right"}),a.handleBoardUpdate(a.state.action);break;case 83:a.setState({action:"down"}),a.handleBoardUpdate(a.state.action);break;case 87:a.setState({action:"rotate"}),a.handleBoardUpdate(a.state.action)}},a.handleBoardUpdate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!a.state.gameOver&&!a.state.isPaused){var t=0,r=0,n=0,o=a.state.activeTile;"left"===e&&(t=-1),"right"===e&&(t=1),"rotate"===e&&(n=1),"down"===e&&(r=1);var i=a.state.field,s=a.state.activeTileX,l=a.state.activeTileY,c=a.state.tileRotate,d=a.state.tiles;i[l+d[o][c][0][1]][s+d[o][c][0][0]]=0,i[l+d[o][c][1][1]][s+d[o][c][1][0]]=0,i[l+d[o][c][2][1]][s+d[o][c][2][0]]=0,i[l+d[o][c][3][1]][s+d[o][c][3][0]]=0;var u=!0;if(0!==t)for(var v=0;v<=3;v++)s+t+d[o][c][v][0]>=0&&s+t+d[o][c][v][0]<a.props.boardWidth?0!==i[l+d[o][c][v][1]][s+t+d[o][c][v][0]]&&(u=!1):u=!1;u&&(s+=t);var h=c+n>3?0:c+n,m=!0;if(0!==n)for(var f=0;f<=3;f++)s+d[o][h][f][0]>=0&&s+d[o][h][f][0]<a.props.boardWidth&&l+d[o][h][f][1]>=0&&l+d[o][h][f][1]<a.props.boardHeight?0!==i[l+d[o][h][f][1]][s+d[o][h][f][0]]&&(m=!1):m=!1;m&&(c=h);var p=!0;if(0!==r)for(var b=0;b<=3;b++)l+r+d[o][c][b][1]>=0&&l+r+d[o][c][b][1]<a.props.boardHeight?0!==i[l+r+d[o][c][b][1]][s+d[o][c][b][0]]&&(p=!1):p=!1;if(p&&(l+=r),i[l+d[o][c][0][1]][s+d[o][c][0][0]]=o,i[l+d[o][c][1][1]][s+d[o][c][1][0]]=o,i[l+d[o][c][2][1]][s+d[o][c][2][0]]=o,i[l+d[o][c][3][1]][s+d[o][c][3][0]]=o,!p){for(var k=a.props.boardHeight-1;k>=0;k--){for(var g=!0,w=0;w<a.props.boardWidth;w++)0===i[k][w]&&(g=!1);if(g){for(;k>0;k--)for(var E=0;E<a.props.boardWidth;E++)i[k][E]=i[k-1][E];k=a.props.boardHeight}}var C;a.setState(function(e){return{score:e.score+1*e.level,tileCount:e.tileCount+1,level:1+Math.floor(e.tileCount/10)}}),clearInterval(a.state.timerId),C=setInterval(function(){return a.handleBoardUpdate("down")},1e3-(10*a.state.level>600?600:10*a.state.level)),a.setState({timerId:C}),o=Math.floor(10*Math.random()+1),s=parseInt(a.props.boardWidth)/2,c=0,0!==i[(l=1)+d[o][c][0][1]][s+d[o][c][0][0]]||0!==i[l+d[o][c][1][1]][s+d[o][c][1][0]]||0!==i[l+d[o][c][2][1]][s+d[o][c][2][0]]||0!==i[l+d[o][c][3][1]][s+d[o][c][3][0]]?a.setState({gameOver:!0}):(i[l+d[o][c][0][1]][s+d[o][c][0][0]]=o,i[l+d[o][c][1][1]][s+d[o][c][1][0]]=o,i[l+d[o][c][2][1]][s+d[o][c][2][0]]=o,i[l+d[o][c][3][1]][s+d[o][c][3][0]]=o)}a.setState({field:i,activeTileX:s,activeTileY:l,tileRotate:c,activeTile:o})}},a.handlePauseClick=function(){a.setState(function(e){return{isPaused:!e.isPaused}})},a.handleNewGameClick=function(){for(var e=[],t=0;t<a.props.boardHeight;t++){for(var r=[],n=0;n<a.props.boardWidth;n++)r.push(0);e.push(r)}var o=Math.floor(parseInt(a.props.boardWidth)/2);a.setState({activeTileX:o,activeTileY:1,activeTile:2,tileRotate:0,score:0,level:1,tileCount:0,gameOver:!1,field:e})};for(var r=[],n=0;n<e.boardHeight;n++){for(var o=[],s=0;s<e.boardWidth;s++)o.push(0);r.push(o)}var d=Math.floor(parseInt(e.boardWidth)/2);return a.state={activeTileX:d,activeTileY:1,activeTile:1,tileRotate:0,score:0,level:1,tileCount:0,gameOver:!1,isPaused:!0,field:r,timerId:null,action:"",tiles:[[[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]]],[[[0,0],[1,0],[0,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]]],[[[0,-1],[0,0],[0,1],[0,2]],[[-1,0],[0,0],[1,0],[2,0]],[[0,-1],[0,0],[0,1],[0,2]],[[-1,0],[0,0],[1,0],[2,0]]],[[[0,0],[-1,0],[1,0],[0,-1]],[[0,0],[1,0],[0,1],[0,-1]],[[0,0],[-1,0],[1,0],[0,1]],[[0,0],[-1,0],[0,1],[0,-1]]],[[[0,0],[-1,0],[1,0],[-1,-1]],[[0,0],[0,1],[0,-1],[1,-1]],[[0,0],[1,0],[-1,0],[1,1]],[[0,0],[0,1],[0,-1],[-1,1]]],[[[0,0],[1,0],[-1,0],[1,-1]],[[0,0],[0,1],[0,-1],[1,1]],[[0,0],[1,0],[-1,0],[-1,1]],[[0,0],[0,1],[0,-1],[-1,-1]]],[[[0,0],[1,0],[0,-1],[-1,-1]],[[0,0],[1,0],[0,1],[1,-1]],[[0,0],[1,0],[0,-1],[-1,-1]],[[0,0],[1,0],[0,1],[1,-1]]],[[[0,0],[-1,0],[0,-1],[1,-1]],[[0,0],[0,-1],[1,0],[1,1]],[[0,0],[-1,0],[0,-1],[1,-1]],[[0,0],[0,-1],[1,0],[1,1]]],[[[0,0],[-1,0],[0,-1],[0,0]],[[0,0],[1,0],[0,-1],[0,0]],[[0,0],[1,0],[0,1],[0,0]],[[0,0],[-1,0],[0,1],[0,0]]],[[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]]],[[[0,0],[-1,0],[0,0],[0,0]],[[0,0],[0,-1],[0,0],[0,0]],[[0,0],[1,0],[0,0],[0,0]],[[0,0],[0,1],[0,0],[0,0]]]]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;e=window.setInterval(function(){return t.handleBoardUpdate("down")},1e3-(10*this.state.level>600?600:10*this.state.level)),this.setState({timerId:e})}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.state.timerId)}},{key:"render",value:function(){var e=this;return r.createElement("div",{className:"tetris"},r.createElement(h,{handlePauseClick:this.handlePauseClick}),r.createElement("div",{className:"wraper"},r.createElement(u,{field:this.state.field,gameOver:this.state.gameOver,score:this.state.score,level:this.state.level,rotate:this.state.tileRotate}),r.createElement("div",{className:"tetris__controls"},r.createElement("button",{className:"btn left",onClick:function(){return e.handleBoardUpdate("left")}},"Left"),r.createElement("button",{className:"btn down",onClick:function(){return e.handleBoardUpdate("down")}},"Down"),r.createElement("button",{className:"btn right",onClick:function(){return e.handleBoardUpdate("right")}},"Right"),r.createElement("button",{className:"btn rotate",onClick:function(){return e.handleBoardUpdate("rotate")}},"Rotate"),r.createElement("button",{className:"btn NewGame",onClick:this.handleNewGameClick},"New Game"),r.createElement("button",{className:"btn Pause",onClick:this.handlePauseClick},this.state.isPaused?"Resume":"Pause"))))}}]),t}(r.Component);a(16);o.render(r.createElement(m,{boardWidth:"14",boardHeight:"25"}),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.0877d808.chunk.js.map