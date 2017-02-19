
// ********************
// // Disabled tooltip on line 153 in map.js file.
// // This removed the display box of answer when clicked.
function compareCapitalName(countryName, guessedCapital) {
  // console.log(paths[1].text.match(/\<h1\>(.*?)\<\/h1\>/)[1])
  paths.map((el, idx) => {
    if (el.text.match(/\<h1\>(.*?)\<\/h1\>/)[1] === countryName) {
           console.log(el.text.match(/\<h1\>(.*?)\<\/h1\>/)[1])
      console.log(idx)

      if (el.name === guessedCapital) {
        paths[idx].enable = false;
        alert('you guessed it right!');
      }
      else {
        alert('you guessed it wrong!');
      }
      console.log(el);
    }
  })
}

    document.getElementsById('button').addEventListener('click', function(e){
      let counrtyName = $('h1').text();
      // console.log(counrtyName);

        $('input').each(function(index,element){
          // console.log(paths[0].text)
          if(element.checked) {
            // $('h1').text();
            paths.forEach((el,i) => {
              const paths_text = el.text.match($('h1').text());
              //console.log(paths_text);
              if (paths_text) {
                // console.log(element.value)
                compareCapitalName(counrtyName, element.value);
              }
            });
          }
        });

     });








