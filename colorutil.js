var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

module.export = {
   luminosity : function(a,b,c){
    var light = (a*.2126)+(b*.7152)+(c*.0722);
    // return light;
    console.log(light);
  }
};

module.export.luminosity(r, g, b);
