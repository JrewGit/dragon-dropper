(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e){e.exports=[{id:1,name:"Goku",image:"http://media.japanpowered.com/images/goku.png"},{id:2,name:"Bulma",image:"https://pngimage.net/wp-content/uploads/2018/05/bulma-png-8.png"},{id:3,name:"Master Roshi",image:"https://vignette.wikia.nocookie.net/fictional-battle-omniverse/images/3/30/Master_Roshi_Dragon_Ball.png/revision/latest?cb=20160208025545"},{id:4,name:"Broly",image:"https://i.pinimg.com/originals/98/39/1a/98391a7b8bd0bfd16d1bd68fb47df626.png"},{id:5,name:"Krillin",image:"https://3.bp.blogspot.com/-eedF06cd2L8/WXvCV_ZwrMI/AAAAAAAAAZg/w6UkNyl5NycIBuMj5o_75tUEfOnsTqoDQCLcBGAs/s1600/krillin___dragonball_z__saiyan_saga__by_krillin888-d9p7qj4.png"},{id:6,name:"Tien",image:"https://vignette.wikia.nocookie.net/deathbattlefanon/images/1/16/Tien.png/revision/latest?cb=20150409194538"},{id:7,name:"Piccolo",image:"https://vignette.wikia.nocookie.net/fanfictioncharacters/images/e/e5/Piccolo.png/revision/latest?cb=20180203115506"},{id:8,name:"Gohan",image:"https://ya-webdesign.com/images/gohan-transparent-2.png"},{id:9,name:"Vegeta",image:"https://i.imgur.com/H6w9u7O.jpg"},{id:10,name:"Trunks",image:"https://i.pinimg.com/originals/d8/e9/12/d8e912a9dd6f7f613f0aa998ac55197a.png"},{id:11,name:"Cell",image:"https://i.pinimg.com/originals/2b/88/f7/2b88f7a4ea1d4ed7fc396dd6363f5c6f.png"},{id:12,name:"Goten",image:"https://dbshop.fr/wp-content/uploads/2017/11/goten.png"}]},,,,,,,,function(e,t,n){e.exports=n(26)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(4),s=n.n(o),c=(n(16),n(5)),r=n(6),l=n(8),m=n(7),d=n(9),u=n(1),g=(n(18),function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container",onClick:function(){e.wasClicked(e.warrior.id)}},i.a.createElement("img",{src:e.warrior.image,alt:e.warrior.name})))}),p=(n(20),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),h=(n(22),function(e){return i.a.createElement("h1",{className:"title"},e.children)}),f=n(2),b=(n(24),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={warriors:f,score:0,topScore:0,clicked:[],message:"Click on an image to earn points, but don't click on any more than once!"},e.addPoint=e.addPoint.bind(Object(u.a)(Object(u.a)(e))),e.wasClicked=e.wasClicked.bind(Object(u.a)(Object(u.a)(e))),e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"scramble",value:function(){var e=f.sort(function(e,t){return.5-Math.random()});this.setState(function(){return{warriors:e}})}},{key:"addPoint",value:function(){this.setState(function(e){return{score:e.score+1}})}},{key:"topScoring",value:function(){this.setState(function(e){return{topScore:e.topScore+1}})}},{key:"resetGame",value:function(){this.setState(function(){return{score:0}}),this.setState(function(){return{clicked:[]}}),this.setState(function(){return{message:"Click on an image to earn points, but don't click on any more than once!"}})}},{key:"wasClicked",value:function(e){this.scramble(),this.state.clicked.includes(e)?(this.resetGame(),this.scramble()):(this.state.clicked.push(e),this.addPoint(),this.state.score>=this.state.topScore&&this.topScoring(),12===this.state.clicked.length?this.scramble():this.setState(function(){return{message:"Keep going!"}}))}},{key:"render",value:function(){var e=this;return i.a.createElement(p,null,i.a.createElement(h,null,"Dragon Dropper! ",i.a.createElement("br",null),i.a.createElement("span",{className:"inst"},this.state.message),i.a.createElement("br",null),i.a.createElement("hr",null)," ",i.a.createElement("span",{className:"scoreStyle"},"Score: ",this.state.score," | Top Score: ",this.state.topScore)),this.state.warriors.map(function(t){return i.a.createElement(g,{key:t.id,warrior:t,wasClicked:e.wasClicked})}))}}]),t}(a.Component));s.a.render(i.a.createElement(b,null),document.getElementById("root"))}],[[10,2,1]]]);
//# sourceMappingURL=main.a2a767ac.chunk.js.map