$(_ =>{
  $.getJSON('http://laboratoria.cuadra.co:9339/api/v1/students/',(data)=>{
    console.log(data);
    $.each(data,(i,obj)=>{
			$("#list").append('<li>'+obj.name+'<input type="checkbox"></li>');
		});
  });
});
