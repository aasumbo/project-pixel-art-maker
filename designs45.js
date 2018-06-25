// Select color input
// Select size input

var height,width,color;
  height = $("#inputHeight").val();
  width = $("#inputWeight").val();

  //event listener

  $("#submit").click(function(event){
    event.preventDefault();

});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  for(var i=1 ; i<=height ; i++){
    $("#pixelCanvas").append('<tr id=table' + i + '></tr>');
    for(var k=0; k<width ; k++){
        $("#table" + i).append("<td></td>");
    }
  }

  //adding color to cell
  $('td').click(function addColor(){
    color = $("#colorPicker").val();
    if($(this).css()){
      $(this).removeAttr('style')
    }else{
      $(this).css("background-color",color);
    }
  })

}
