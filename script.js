$('#search').on("keyup", function () { ////when you start typing in the input field - begin this function and start searching for something specific
  let $searchTerm = $('#search').val().toLowerCase(); //whatever value is being entered into the input field make it lower case and store it in a variable called searchterm
  $(".gallery a").each(function () { //get every "a" element from the gallery div - this will generate an array of items and than iterate through them "EACH item"
    let caption = $(this)[0].dataset.title; //inside the loop, we want to read the data stored in the iterating data $(this) to read the data in an object, we use dot notation to access it like `$(this).dataset`,
    //then we want to read the data inside the dataset object, again dot notation `$(this).dataset.title`
    if (caption.indexOf($searchTerm) >= 0) { //when you type if the index is greater than -1 it will run the next line.. 
      $(this).show();//Show the "a " element that matches what is being inputed 
      
    } else {
      $(this).hide();//otherwise hide it 
    }
    })
  })



lightbox.option({
      'resizeDuration': 600,
      'wrapAround': true,
      'maxWidth': 800,
      'positionFromTop': 50,
      
    })
