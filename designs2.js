// Select color input
// Select size input

var height,width,color;
$('#sizePicker').submit(function(event){
  event.preventDefault();
  color= $('#colorPicker').val();
  height = $('#inputHeight').val();
  width = $('#inputWeight').val();
  makeGrid(height, width);
});
function makeGrid(x,k);
{
$('tr').remove();
  for(i=0 ; i<=x ; i++)
  {
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
    for(k=0; k<=y ; k++)
    {
        $( 'tr:last').append('<td></td>');
    }
  }
  //adding color to cell
  $('td').click(function addColor()
  {
    color = $('#colorPicker').val();
    if($(this).attr('style'))
    {
      $(this).removeAttr('style')
    }else
    {
      $(this).css('background-color',color);
    }
  })
}
