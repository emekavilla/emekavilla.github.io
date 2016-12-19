# African Map Trivia Game

This is a map trivia game that tests country/capital knowledge. A player highlights a country, then chooses the correct capital among options provided. When a player guesses the right answer, 
the country on the map will become blurred out for that session. The goal to win is to blur out the
entire map.

Map structure is courtesy of Raphael JS Library which provided map coordinates.
HTML, CSS, and Javascript were used to develop the game.

Screenshot of Game:
<img src="Screenshot 2016-12-18 21.10.48">


Problems encountered during build:

The game provided an error message which meant it was only viewable in firefox browser:

"XMLHttpRequest cannot load file:///Users/chiemekaihebom/generalassembly/projects/maps/lg-map/africa.js?_=1482104391231. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource."

To remedy this, I created a new server in terminal inside the html folder and gave it a new host name. 

"http-server -p 8084"

This started up a new server to help host and easily view the game. 

UNSOLVED PROBLEMS

Seeing what option was selected for each question in the radio buttons. I achieved this by wrapping
one question as a form but was unable to do so when all questions were wrapped as forms. 

HONORABLE MENTIONS

Would like to thank my Squad lead, Joe Keohan for his guidance through the game making process and always being available to answer my questions.

Also like to mention Alison Stuart, Jon Zachary, and Calvin Bowen Jr for giving insightful inputs.



