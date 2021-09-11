
var hid_tele=document.getElementById("Telemcen");
hid_tele.style.display="none";
var hid_oran=document.getElementById("Oran");
hid_oran.style.display="none";
var hid_alger=document.getElementById("Algiers");
hid_alger.style.display="none";
var hid_const=document.getElementById("Constantine");
hid_const.style.display="none";
var hid_tam=document.getElementById("Sahara");
hid_tam.style.display="none";

var hid_tele_rest=document.getElementById("tele-rest");
hid_tele_rest.style.display="none";
var hid_tele_hotel=document.getElementById("tele-hotels");
hid_tele_hotel.style.display="none";
var hid_tele_tourism=document.getElementById("tele-tourism");
hid_tele_tourism.style.display="none";
var hid_tele_hospital=document.getElementById("tele-hos");
hid_tele_hospital.style.display="none";

var hid_oran_rest=document.getElementById("oran-rest");
hid_oran_rest.style.display="none";
var hid_oran_hotel=document.getElementById("oran-hotels");
hid_oran_hotel.style.display="none";
var hid_oran_tourism=document.getElementById("oran-tourism");
hid_oran_tourism.style.display="none";
var hid_oran_hospital=document.getElementById("oran-hos");
hid_oran_hospital.style.display="none";

var li_elements = document.querySelectorAll("#wilayas li");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function() {
    var li_value = this.getAttribute("data-li");
    if (li_value == "tele" && hid_tele.style.display=="none") {
      document.getElementById("Telemcen").style.display = "flex";
    } else{
        document.getElementById("Telemcen").style.display = "none";
        document.getElementById("tele-rest").style.display = "none";
        document.getElementById("tele-hotels").style.display = "none";
        document.getElementById("tele-tourism").style.display = "none";
        document.getElementById("tele-hos").style.display = "none";
    }
    if (li_value == "oran" && hid_oran.style.display=="none") {
      document.getElementById("Oran").style.display = "flex";
    } else{
        document.getElementById("Oran").style.display = "none";
        document.getElementById("oran-rest").style.display = "none";
        document.getElementById("oran-hotels").style.display = "none";
        document.getElementById("oran-tourism").style.display = "none";
        document.getElementById("oran-hos").style.display = "none";
    }
     if (li_value == "alger" && hid_alger.style.display=="none") {
      document.getElementById("Algiers").style.display = "flex";
    } else{
        document.getElementById("Algiers").style.display = "none";
    }
     if (li_value == "const" && hid_const.style.display=="none" ) {
      document.getElementById("Constantine").style.display = "flex";
    } else{
        document.getElementById("Constantine").style.display = "none";
    }
     if(li_value == "tam" && hid_tam.style.display=="none") {
        document.getElementById("Sahara").style.display = "flex";
    }else{
        document.getElementById("Sahara").style.display = "none";
    }
  });
}


var li_elements2 = document.querySelectorAll("#Telemcen li");

for (var i = 0; i < li_elements2.length; i++) {
  li_elements2[i].addEventListener("click", function() {
    var li_value = this.getAttribute("data-r");
    if (li_value == "telem-rest" && hid_tele_rest.style.display=="none") {
      document.getElementById("tele-rest").style.display = "grid";
    } else{
        document.getElementById("tele-rest").style.display = "none";
    }
    if (li_value == "telem-hotels" && hid_tele_hotel.style.display=="none") {
      document.getElementById("tele-hotels").style.display = "grid";
    } else{
        document.getElementById("tele-hotels").style.display = "none";
    }
    if(li_value == "telem-tourism" && hid_tele_tourism.style.display=="none"){
      document.getElementById("tele-tourism").style.display = "grid";
    } else{
      document.getElementById("tele-tourism").style.display = "none";
    }
    if(li_value == "telem-hospitals" && hid_tele_hospital.style.display=="none"){
      document.getElementById("tele-hos").style.display = "grid";
    } else{
      document.getElementById("tele-hos").style.display = "none";
    }
});
}  

var li_elements3 = document.querySelectorAll("#Oran li");

for (var i = 0; i < li_elements3.length; i++) {
  li_elements3[i].addEventListener("click", function() {
    var li_value = this.getAttribute("data-o");
    if (li_value == "or-rest" && hid_oran_rest.style.display=="none") {
      document.getElementById("oran-rest").style.display = "grid";
    } else{
        document.getElementById("oran-rest").style.display = "none";
    }
    if (li_value == "or-hotels" && hid_oran_hotel.style.display=="none") {
      document.getElementById("oran-hotels").style.display = "grid";
    } else{
        document.getElementById("oran-hotels").style.display = "none";
    }
    if(li_value == "or-tourism" && hid_oran_tourism.style.display=="none"){
      document.getElementById("oran-tourism").style.display = "grid";
    } else{
      document.getElementById("oran-tourism").style.display = "none";
    }
    if(li_value == "or-hospitals" && hid_oran_hospital.style.display=="none"){
      document.getElementById("oran-hos").style.display = "grid";
    } else{
      document.getElementById("oran-hos").style.display = "none";
    }
});
}  
