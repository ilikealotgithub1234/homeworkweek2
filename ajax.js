$.ajax({
  type: "GET",
  url: "http://data.sparkfun.com/output/4J0dwJKJ0lI1dD1gwWol.json",
  success: (response) => {
    console.log(response);
  }
});
var $POST = function(name,score){
    $.ajax({
    url: 'https://data.sparkfun.com/input/4J0dwJKJ0lI1dD1gwWol',
    headers: {
        'Phant-Private-Key':'b5Bvy575Bdh4vg47yRAP'
    },
    method: 'POST',
    dataType: 'json',
    data: { name: name, score: score},
    success: (data) => {
      console.log('succes: '+data);
    }
  });
}
var $POSTGETorDELETE = function(url,privateKey,method,dataType,data){
  $.ajax({
  url: url,
  headers: {
      'Phant-Private-Key':privateKey
  },
  method: method,
  dataType: dataType,
  data: data,
  success: function(data){
    console.log('success: '+data);
  }
  });

}
