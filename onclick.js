function myFunction() {
    var element = document.getElementById("myDIV");
  
    if (element.classList) { 
      element.classList.toggle("mystyle");
    } else {
      var classes = element.className.split(" ");
      var i = classes.indexOf("mystyle");
  
      if (i >= 0) 
        classes.splice(i, 1);
      else 
        classes.push("mystyle");
        element.className = classes.join(" "); 

    }

  }