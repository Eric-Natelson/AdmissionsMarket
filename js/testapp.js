
<script src="https://www.gstatic.com/firebasejs/4.3.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAJEcB1q-qcu8mlnV4GcUm66_y43cjSToQ",
    authDomain: "amdatabase-e0c0f.firebaseapp.com",
    databaseURL: "https://amdatabase-e0c0f.firebaseio.com",
    projectId: "amdatabase-e0c0f",
    storageBucket: "amdatabase-e0c0f.appspot.com",
    messagingSenderId: "788016927591"
  };
  firebase.initializeApp(config);

  var json = {
  questions: [{
    type: "matrixdynamic",
    addRowText: "Add a new language",
    columns: [{
      name: "Select a language",
      choices: ["Javascript", "Java", "Python", "CSS", "PHP", "Ruby", "C++", "C", "Shell", "C#", "Objective-C", "R", "VimL", "Go", "Perl", "CoffeeScript", "TeX", "Swift", "Scala", "Emacs List", "Haskell", "Lua", "Clojure", "Matlab", "Arduino", "Makefile", "Groovy", "Puppet", "Rust", "PowerShell"],
      cellType: "dropdown",
      isRequired: true,
      hasOther: true,
      choicesOrder: "asc"
    }, {
      name: "What is your experience?",
      choices: ["One year or less", "From one two three years", "From three to five years", "More then five years"],
      cellType: "dropdown",
      isRequired: true
    }],
    isRequired: true,
    name: "languages",
    rowCount: 1,
    title: "What programming languages do you know?"
  }]
};

Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapCss.matrixdynamic.button = "btn btn-green";
Survey.Survey.cssType = "bootstrap";

var survey = new Survey.Model(json);

survey.onComplete.add(function(result) {
	document.querySelector('#result').innerHTML = "result: " + JSON.stringify(result.data);
});

$("#surveyElement").Survey({
  model: survey
});


</script>
