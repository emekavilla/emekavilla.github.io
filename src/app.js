
// Check to see if correct radio button is selected.








// $('input:radio').each(function() {
//   if($(this).is(':checked')) {
//   }
//   else {

//   }
// });


// for (i = 0; i < paths.length; i++) {
//     if (name[i].checked) {

//     }
// }

// ********************
// // Disabled tooltip on line 153 in map.js file.
// // This removed the display box of answer when clicked.
// ********************


    document.getElementById('button').addEventListener('click', function(e){
        $('input').each(function(index,element){
          //console.log(index, element);
          if(element.checked) {
            // $('h1').text();
            paths.forEach((el,i) => {
              const paths_text = el.text.match($('h1').text());
              //console.log(paths_text);
              if (paths_text) {
                console.log($(`input[name='capital']:checked`));
                // if(el.name === $('input[name='capital']:checked')) {
                //     alert('Guessed Right!');
                // }
              }
            });
            //console.log(element);
            //console.log($('input option:checked'));
            //if ($('input option:checked').value === )
          }
        });
        // console.log($('input'))

    // function print () {
    // alert('try again');
    // }
});




//     for(i=0 ; i<paths.length ; i++){
//   paths[i].addEventListener("click", enable == false);
// }




