const ListName = (data) =>{
  const element = $('<li>'+data[]+'</li>');
  const checkb = $('<input type="checkbox">');

  $('#list').append(element);
  element.append(checkb);
}

$(_ =>{
  $.getJSON('http://laboratoria.cuadra.co:9339/api/v1/students/',(data)=>{
    console.log(data[0].name);
    ListName(data);
  });
});
