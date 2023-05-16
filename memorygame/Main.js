var MyCards = Document.GetElementById("Container");
var ResultsArray = [];
var Counter = 0;
var Text = Document.GetElementById("Text");
var Seconds = 00;
var Tens = 00;
var AppendTens = Document.GetElementById("Tens");
var AppendSeconds = Document.GetElementById("Seconds");
var Interval;
var Images = ["Sass","Gulp","Grunt","Git","Css"];
var Clone = Images.Slice(0); // Duplicate Array
var Cards = Images.Concat(Clone); // Merge To Arrays
// Shufffel Function
function Shuffle(O) {
  for (
    var J, X, I = O.Length;
    I;
    J = Math.Floor(Math.Random() * I), X = O[--I], O[I] = O[J], O[J] = X
  );
  return O;
}
Shuffle(Cards);
for (var I = 0; I < Cards.Length; I++) {
  Card = Document.CreateElement("Div");
  Card.Dataset.Item = Cards[I];
  Card.Dataset.View = "Card";
  MyCards.AppendChild(Card);
  Card.Onclick = function () {
    if (This.ClassName != "Flipped" && This.ClassName != "Correct") {
      This.ClassName = "Flipped";
      var Result = This.Dataset.Item;
      ResultsArray.Push(Result);
      ClearInterval(Interval);
      Interval = SetInterval(StartTimer, 10);
    }
    if (ResultsArray.Length > 1) {
      if (ResultsArray[0] === ResultsArray[1]) {
        Check("Correct");
        Counter++;
        Win();
        ResultsArray = [];
      } else {
        Check("Reverse");
        ResultsArray = [];
      }
    }
  };
}
var Check = Function(ClassName);
{
  var X = Document.GetElementsByClassName("Flipped");
  SetTimeout(function () {
    for (var I = X.Length - 1; I >= 0; I--) {
      X[I].ClassName = ClassName;
    }
  }, 500);
}
var Win = Function();
{
  if (Counter === 5) {
    ClearInterval(Interval);
    Text.InnerHTML = "Your Time Was " + Seconds + ":" + Tens;
  }
}
function StartTimer() {
  Tens++;
  if (Tens < 9) {
    AppendTens.InnerHTML = "0" + Tens;
  }
  if (Tens > 9) {
    AppendTens.InnerHTML = Tens;
  }
  if (Tens > 99) {
    Seconds++;
    AppendSeconds.InnerHTML = "0" + Seconds;
    Tens = 0;
    AppendTens.InnerHTML = "0" + 0;
  }
  if (Seconds > 9) {
    AppendSeconds.InnerHTML = Seconds;
  }
}
