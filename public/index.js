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
   // Event handler for "View Details" button
   $('.alert').on('click', function() {
    // Get the name from the data attribute
    //let name = $(this).closest('.employee').data('name'); 
    let fullname = $(this).find('strong').text();
    let firstname = fullname.split(" ")
    let name = firstname[0]
    console.log(name)
    
    // Send an AJAX request to get the employee details
    $.ajax({
        url: `/employee/${name}`,
        type: 'GET',
        success: function(employee) {
            // Display the employee details
            $('.information').html(
                `<p><strong><span class="name-info font-weight-bolder">${employee.name} ${employee.lastname}</span> <span class="age">(20)</span></strong></p>
                  <p class="address-info">${employee.address}</p>
                  <p class="email-info">${employee.email}</p>
                  <p class="phone-info">Mobile - <span class="phone-nb">${employee.contact}</span></p>
                  <p class="dob-info">DOB - <span class="dob">${employee.date}</span></p>
                  `
            );
        },
        error: function(xhr) {
            $('#employee-info').html('<p>Employee not found.</p>');
        }
    });


  // $('.alert').on('click', function() {

  //   // Retrieve the text inside the <strong> element (name)
  //   // let fullname = $(this).find('strong').text();
  //   // let firstname = fullname.split(" ")
  //   // let name = firstname[0]
  //   // console.log(name)
    
   
  //  });
  
})})