app.filter('kelvin_celsius', function() {

  return function(input, optional1, optional2) {
    var output=input - 272.15;
    return output;
  }

});
