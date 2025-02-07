function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5vHi4AWIZdd":
        Script1();
        break;
  }
}

function Script1()
{
  var currentDate = new Date()
  var day = currentDate.getDate()
  var month = currentDate.getMonth() + 1
  var year = currentDate.getFullYear()
var player = GetPlayer();
player.SetVar("day1", day);
player.SetVar("month1", month);
player.SetVar("year1", year);
}

