var winArr = [
  ["#0-0", "#1-0", "#2-0"],
  ["#0-1", "#1-1", "#2-1"],
  ["#0-2", "#1-2", "#2-2"],
  ["#0-0", "#0-1", "#0-2"],
  ["#1-0", "#1-1", "#1-2"],
  ["#2-0", "#2-1", "#2-2"],
  ["#0-0", "#1-1", "#2-2"],
  ["#0-2", "#1-1", "#2-0"],
  
  
  ]


$(document).ready(function(){
  
  function listenForClicksOnCells() {
    $(".cell").click(markCell)
  }
  
  listenForClicksOnCells()
  
  var MARK = "X"
  
  function markCell() {
    this.innerText = MARK
    if (MARK === "X") {
      MARK = "O"
    } else if (MARK === "O") {
      MARK = "X"
    }
  }
  
  
  
  
  
  
  
  
  
  
  
})

