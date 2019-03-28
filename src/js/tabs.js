window.onload = function () {
  startTab();
};

function startTab() {
  document.getElementById("metric").click();
}



function openTab(evt, methodName) {
    var i, tabcontent, tablinks; 
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(methodName).style.display = "block";
    evt.currentTarget.className += " active";
    
    document.getElementById("calculate_metric").reset();
    document.getElementById("calculate_imperial").reset();
    global.displayMetricMessage.innerHTML = " ";
    global.displayImperialMessage.innerHTML = " ";
} 
