var cubes,list,math,num,number,opposite,race,square,__slice=[].slice;number=42,opposite=!0,opposite&&(number=-42),square=function(e){return e*e},list=[1,2,3,4,5],math={root:Math.sqrt,square:square,cube:function(e){return e*square(e)}},race=function(){var e,t;return t=arguments[0],e=2<=arguments.length?__slice.call(arguments,1):[],print(t,e)},"undefined"!=typeof elvis&&null!==elvis&&alert("I knew it! !!!Fuck yeah!"),cubes=function(){var e,t,u;for(u=[],e=0,t=list.length;t>e;e++)num=list[e],u.push(math.cube(num));return u}();elvis !== null) {
  alert("I knew it! !!!Fuck yeah!");
}

cubes = (function() {
  var _i, _len, _results;
  _results = [];
  for (_i = 0, _len = list.length; _i < _len; _i++) {
    num = list[_i];
    _results.push(math.cube(num));
  }
  return _results;
})();
