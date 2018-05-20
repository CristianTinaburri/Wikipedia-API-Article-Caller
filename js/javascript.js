$(document).ready(function(){

  var searchIcon = document.getElementById("searchIcon");

  $("#search").click(function(){
    var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data){
        document.getElementById("containerLinks").innerHTML = "";
        displayArticleMultiples(data);
      },
      error: function(errorMessage){
        alert("Error");
      }
    })
  });

  /*
  function deleteAllChilds(){
    var containerLinks = document.getElementById("containerLinks");
    while (containerLinks.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
  }
  */

  function displayArticleMultiples(data){
    for(var i=0; i<10; i++){
      displayArticle(data[1][i],data[2][i],data[3][i]);
    }
  }

  function displayArticle(par1,par2,par3){
    var container = document.getElementById("containerLinks");
    var t = document.createElement("div");
    var p = document.createElement("p");
    var a = document.createElement("a");
    t.appendChild(a);
    t.appendChild(p);
    t.classList.add("styler");
    a.innerHTML = par1;
    p.innerHTML = par2;
    a.setAttribute("target","blank");
    a.setAttribute("href",par3);
    container.appendChild(t);
  }

});
