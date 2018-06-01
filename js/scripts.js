
$(function() {
  $("#btn-submit").click(function(){
    var webdevelopment = parseInt($("input:radio[name=development]:checked").val());
    var busi = parseInt($("input:radio[name=business]:checked").val());
    var webdesign = parseInt($("input:radio[name=design]:checked").val());
    var serverside = parseInt($("input:radio[name=server]:checked").val());
    var ininteractive = parseInt($("input:radio[name=interactive]:checked").val());

    //backend is selected
    if((!webdevelopment)&&(!busi)&&(!webdesign)&&(!serverside)&&(!ininteractive)){
      $(".initial-hide").hide();
      $("#csharp").show();
    }
    else if((webdevelopment)&&(busi)&&(webdesign)&&(serverside)&&(ininteractive))  {
      $(".initial-hide").hide();
      alert("Sorry there are no tracks available for you ")
    }
    else if((!webdevelopment)&&(!busi)&&(webdesign)&&(serverside)&&(ininteractive)){
      $(".initial-hide").hide();
      $("#ruby").show();
    }
    else if ((!webdevelopment)&&(!busi)&&(!webdesign)&&(serverside)&&(!ininteractive)){
      $(".initial-hide").hide();
      $("#php").show();
    }
    else if ((webdevelopment)&&(busi)&&(!webdesign)&&(serverside)&&(!ininteractive)) {
      $(".initial-hide").hide();
      $("#css").show();
    }
    else if ((!webdevelopment)&&(busi)&&(!webdesign)&&(!serverside)&&(!ininteractive)) {
      $(".initial-hide").hide();
      $("#php").show();
    }

    else if ((!webdevelopment)&&(!busi)&&(!webdesign)&&(!serverside)&&(ininteractive)) {
      $(".initial-hide").hide();
      $("#csharp").show();
    }
    else if ((webdevelopment)&&(busi)&&(webdesign)&&(!serverside)&&(!ininteractive)) {
      $(".initial-hide").hide();
      $("#php").show();
    }
    else if ((webdevelopment)&&(!busi)&&(!webdesign)&&(!serverside)&&(!ininteractive)) {
      $(".initial-hide").hide();
      $("#ruby").show();
    }
    else ((webdevelopment)&&(busi)&&(!webdesign)&&(serverside)&&(!ininterasctive)) {
      $(".initial-hide").hide();
      $("#css").show();
    }

  });
});
