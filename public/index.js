$(document).ready(function(){

  // Attach click event handler to all buttons with the class 'btn-close'
  $('.btn-close').on('click', function() {
    // Find the closest parent <div> with the class 'alert'
    let parentDiv = $(this).closest('.alert');

    // Find the <strong> element inside this parent div
    let strongElement = parentDiv.find('strong');

    // Retrieve and log the text of the <strong> element
    let fullname = strongElement.text();
    console.log("Name from clicked div:", fullname);

    let nameParts = fullname.split(" ") 
    let name = nameParts[0]
    console.log("This is the frstname : ",name)

      $.ajax({
      type: 'post',
      url: '/' + name
    });
  })

  // $('.btn-close').click(() => {
  //   //let doc = $('.alert').text().replace(/ /g, "-")
  //   let firstname = $(".alert strong").text()
  //   console.log(firstname)
  //   let search = $(`strong.name-data:contains(${firstname})`).text();
  //   let nameParts = firstname.split(" ") 
  //   let name = nameParts[0]
  //   console.log(name)

  //   // let name = $('.name-data:contains("Mouslim Ombadi")').text();
  //   $.ajax({
  //     type: 'post',
  //     url: '/' + name,
  //     success: function(data){
  //       //do sth with the data via front-end framework
  //       location.reload();
  //       //$(this).remove();
  //       console.log(data);
  //     }
  //   //alert('hello');
  //   });
  // } )

  // $('.alert').click(function(){
  //   let name = $('.name-data').text()
  //   let nameParts = name.split(" ") 
  //   let firstname = nameParts[0]
  //   console.log(firstname)
  // })
  
  
})