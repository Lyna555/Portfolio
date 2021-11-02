
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

var hid_alg_rest=document.getElementById("alg-rest");
hid_alg_rest.style.display="none";
var hid_alg_hotel=document.getElementById("alg-hotels");
hid_alg_hotel.style.display="none";
var hid_alg_tourism=document.getElementById("alg-tourism");
hid_alg_tourism.style.display="none";
var hid_alg_hospital=document.getElementById("alg-hos");
hid_alg_hospital.style.display="none";

var hid_con_rest=document.getElementById("con-rest");
hid_con_rest.style.display="none";
var hid_con_hotel=document.getElementById("con-hotels");
hid_con_hotel.style.display="none";
var hid_con_tourism=document.getElementById("con-tourism");
hid_con_tourism.style.display="none";
var hid_con_hospital=document.getElementById("con-hos");
hid_con_hospital.style.display="none";

var hid_sah_rest=document.getElementById("sah-rest");
hid_sah_rest.style.display="none";
var hid_sah_hotel=document.getElementById("sah-hotels");
hid_sah_hotel.style.display="none";
var hid_sah_tourism=document.getElementById("sah-tourism");
hid_sah_tourism.style.display="none";
var hid_sah_hospital=document.getElementById("sah-hos");
hid_sah_hospital.style.display="none";

var li_elements = document.querySelectorAll("#wilayas li");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function() {
    var li_value = this.getAttribute("data-li");
    if (li_value == "tele" && hid_tele.style.display=="none") {
      document.getElementById("Telemcen").style.display = "flex";
      document.getElementById("Telem").style.transform="scale(1.2)";
    } else{
        document.getElementById("Telemcen").style.display = "none";
        document.getElementById("tele-rest").style.display = "none";
        document.getElementById("tele-hotels").style.display = "none";
        document.getElementById("tele-tourism").style.display = "none";
        document.getElementById("tele-hos").style.display = "none";
        document.getElementById("Telem").style.transform="none";
    }
    if (li_value == "oran" && hid_oran.style.display=="none") {
      document.getElementById("Oran").style.display = "flex";
      document.getElementById("Or").style.transform="scale(1.2)";
    } else{
        document.getElementById("Oran").style.display = "none";
        document.getElementById("oran-rest").style.display = "none";
        document.getElementById("oran-hotels").style.display = "none";
        document.getElementById("oran-tourism").style.display = "none";
        document.getElementById("oran-hos").style.display = "none";
        document.getElementById("Or").style.transform="none";
    }
     if (li_value == "alger" && hid_alger.style.display=="none") {
      document.getElementById("Algiers").style.display = "flex";
      document.getElementById("Alg").style.transform="scale(1.2)";
    } else{
        document.getElementById("Algiers").style.display = "none";
        document.getElementById("alg-rest").style.display = "none";
        document.getElementById("alg-hotels").style.display = "none";
        document.getElementById("alg-tourism").style.display = "none";
        document.getElementById("alg-hos").style.display = "none";
        document.getElementById("Alg").style.transform="none";
    }
     if (li_value == "const" && hid_const.style.display=="none" ) {
      document.getElementById("Constantine").style.display = "flex";
      document.getElementById("Cons").style.transform="scale(1.2)";
    } else{
        document.getElementById("Constantine").style.display = "none";
        document.getElementById("con-rest").style.display = "none";
        document.getElementById("con-hotels").style.display = "none";
        document.getElementById("con-tourism").style.display = "none";
        document.getElementById("con-hos").style.display = "none";
        document.getElementById("Cons").style.transform="none";
    }
     if(li_value == "tam" && hid_tam.style.display=="none") {
        document.getElementById("Sahara").style.display = "flex";
        document.getElementById("Sah").style.transform="scale(1.2)";
    }else{
        document.getElementById("Sahara").style.display = "none";
        document.getElementById("sah-rest").style.display = "none";
        document.getElementById("sah-hotels").style.display = "none";
        document.getElementById("sah-tourism").style.display = "none";
        document.getElementById("sah-hos").style.display = "none";
        document.getElementById("Sah").style.transform="none";
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

var li_elements4 = document.querySelectorAll("#Algiers li");

for (var i = 0; i < li_elements4.length; i++) {
  li_elements4[i].addEventListener("click", function() {
    var li_value = this.getAttribute("data-a");
    if (li_value == "alg-rest" && hid_alg_rest.style.display=="none") {
      document.getElementById("alg-rest").style.display = "grid";
    } else{
        document.getElementById("alg-rest").style.display = "none";
    }
    if (li_value == "alg-hotels" && hid_alg_hotel.style.display=="none") {
      document.getElementById("alg-hotels").style.display = "grid";
    } else{
        document.getElementById("alg-hotels").style.display = "none";
    }
    if(li_value == "alg-tourism" && hid_alg_tourism.style.display=="none"){
      document.getElementById("alg-tourism").style.display = "grid";
    } else{
      document.getElementById("alg-tourism").style.display = "none";
    }
    if(li_value == "alg-hospitals" && hid_alg_hospital.style.display=="none"){
      document.getElementById("alg-hos").style.display = "grid";
    } else{
      document.getElementById("alg-hos").style.display = "none";
    }
});
}  

var li_elements5 = document.querySelectorAll("#Constantine li");

for (var i = 0; i < li_elements5.length; i++) {
  li_elements5[i].addEventListener("click", function() {
    var li_value = this.getAttribute("data-c");
    if (li_value == "con-rest" && hid_con_rest.style.display=="none") {
      document.getElementById("con-rest").style.display = "grid";
    } else{
        document.getElementById("con-rest").style.display = "none";
    }
    if (li_value == "con-hotels" && hid_con_hotel.style.display=="none") {
      document.getElementById("con-hotels").style.display = "grid";
    } else{
        document.getElementById("con-hotels").style.display = "none";
    }
    if(li_value == "con-tourism" && hid_con_tourism.style.display=="none"){
      document.getElementById("con-tourism").style.display = "grid";
    } else{
      document.getElementById("con-tourism").style.display = "none";
    }
    if(li_value == "con-hospitals" && hid_con_hospital.style.display=="none"){
      document.getElementById("con-hos").style.display = "grid";
    } else{
      document.getElementById("con-hos").style.display = "none";
    }
});
}  

var li_elements6 = document.querySelectorAll("#Sahara li");

for (var i = 0; i < li_elements6.length; i++) {
  li_elements6[i].addEventListener("click", function() {
    var li_value = this.getAttribute("data-s");
    if (li_value == "sah-rest" && hid_con_rest.style.display=="none") {
      document.getElementById("sah-rest").style.display = "grid";
    } else{
        document.getElementById("sah-rest").style.display = "none";
    }
    if (li_value == "sah-hotels" && hid_con_hotel.style.display=="none") {
      document.getElementById("sah-hotels").style.display = "grid";
    } else{
        document.getElementById("sah-hotels").style.display = "none";
    }
    if(li_value == "sah-tourism" && hid_con_tourism.style.display=="none"){
      document.getElementById("sah-tourism").style.display = "grid";
    } else{
      document.getElementById("sah-tourism").style.display = "none";
    }
    if(li_value == "sah-hospitals" && hid_con_hospital.style.display=="none"){
      document.getElementById("sah-hos").style.display = "grid";
    } else{
      document.getElementById("sah-hos").style.display = "none";
    }
});
}  
