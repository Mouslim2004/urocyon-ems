$(document).ready(function(){

  $('.btn-close').click(() => {
    let doc = $('.alert').text().replace(/ /g, "-")
    let firstname = $('.name-data').text()
    let nameParts = firstname.split(" ") 
    let name = nameParts[0]
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + name
    //   success: function(data){
    //     //do sth with the data via front-end framework
    //     location.reload();
    //     //$(this).remove();
    //     console.log(data);
    //   }
    // //alert('hello');
    // });
  } )

  // $('.alert').click(function(){
  //   let name = $('.name-data').text()
  //   let nameParts = name.split(" ") 
  //   let firstname = nameParts[0]
  //   console.log(firstname)
  // })
  
  
})})