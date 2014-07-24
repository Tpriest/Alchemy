(function(){angular.module("site",["ngRoute","alchemyExamples","featCarousel","angular-inview","navigation"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"MainCtrl"}).when("/examples",{templateUrl:"views/examples.html",controller:"MainCtrl",reloadOnSearch:!1}).when("/examples/FullApp",{templateUrl:"views/examples/example3viz.html",controller:"MainCtrl"})}])}).call(this),function(){"use strict";angular.module("site").directive("prettyPrint",function(){var a;return{restrict:"A",link:a=function(a,b){return b.html(prettyPrintOne(b.html()))}}}).controller("MainCtrl",["$scope","$location",function(a){return a.sectionSnap=function(a){var b,c,d;b=angular.element("body"),d=angular.element(a),c=d.offset().top,b.animate({scrollTop:c},500)},a.snapElement=function(a,b,c){"top"===b&&this.sectionSnap(c)}}]),angular.module("navigation",["ui.bootstrap"]).controller("navCtrl",["$scope","$location","$route",function(a,b){return a.$on("$routeChangeSuccess",function(){return a.showNav="/examples/FullApp"===b.path()?"hidden":""}),a.init=function(){return a.links=[{name:"Home",href:"/"},{name:"Examples",href:"/examples"},{name:"Tutorial",tooltip:"Coming Soon!"}],a.active(b.path())},a.active=function(c){var d,e,f,g,h;for(b.hash(""),g=a.links,h=[],e=0,f=g.length;f>e;e++)d=g[e],c===d.href?(d.state="active",h.push(b.path(d.href))):h.push(d.state="");return h}}]),angular.module("alchemyExamples",[]).controller("examplesCtrl",["$scope","$location",function(a,b){return a.init=function(){return a.examples=[{name:"Basic Graph",src:"views/examples/example1.html",id:"example1",desc:"A basic Alchemy.js graph, with only a custom dataSource defined."},{name:"Embedded Graph",src:"views/examples/example2.html",id:"example2",desc:"An example with custom graphHeight, graphWidth, and linkDistance making it easy to include and embed within larger applications."},{name:"Custom Styling",src:"views/examples/example4.html",id:"example4",desc:"An example illustrating how to apply custom styles to the graph, overriding Alchemy.css by using nodeTypes and edgeTypes."},{name:"Full Application",src:"views/examples/example3.html",id:"example3",desc:"A full application using clustering, filters, node typing, and search."},{name:"Advance Styling",src:"views/examples/example5.html",id:"example5",desc:"Styling based on node and edge properties."}]},a.showExample=function(c){var d,e,f,g,h;for(a.current_example=c,null!=angular.element("#removethis")&&angular.element("#removethis").remove(),h=a.examples,f=0,g=h.length;g>f;f++)d=h[f],d.state=a.current_example===d?"active":"";return e=c.name.replace(" ","_"),b.hash(e)},a.showViz=function(){return b.path("examples/FullApp")},a.hideViz=function(){return b.hash(""),b.path("examples/")}}]),angular.module("featCarousel",["ui.bootstrap"]).controller("carouselCtrl",["$scope",function(a){return a.myInterval=3e3,a.slides=[{image:"images/features/search_movies.png",text:"Search within the graph to quickly find insights"},{image:"images/features/cluster_team.png",text:"Cluster nodes for easy identification of patterns"},{image:"images/features/filters_movies.png",text:"Automatically generate filters based on the data"},{image:"images/features/clusterHighlight_team.png",text:"Cluster nodes for easy identification of patterns"},{image:"images/features/filters&Stats_movies.png",text:"Network statistic API endpoints to use in the rest of your app"}]}])}.call(this);