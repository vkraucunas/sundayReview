$(document).ready(function() {

  $('#filter-btn').hide();

  $('form').on('submit', function(e){
    e.preventDefault();
    $('#results').empty();
    var keyword = $('input').val();
    getMovies(keyword);
  });

  function getMovies(keyword) {
    var url = 'http://www.omdbapi.com/?s='+keyword+'&r=json';
    $.get(url)
    .done(function(res) {
      res.Search.forEach(function(obj){
        // $('#results').append('<img src="'+obj.Poster+'">');
        $('#results').append('<li>'+obj.Title+'&nbsp;-&nbsp;'+obj.Year+'</li>');
        $('#filter-btn').show();
      });
      $('input').val('');
    });
  }

    /*
    On button click...
      1. get all movies from the dom
      2. isolate the year
      3. logic to find if year >= 2000
      4. add those movies back to the dom
    */
    $('#filter-btn').on('click', function(){
      var domElementArray = $('li').val('');
      for (var i = 0; i < domElementArray.length; i++){
      var innerText = domElementArray[i].innerText;
      var year = innerText.substr(innerText.length - 4);
      if (+year >= 2000) {
        console.log(year);
      }
    }
    });

});