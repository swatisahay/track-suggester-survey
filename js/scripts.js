
$(function() {
  $("#btn-submit").click(function(){
    var webdevelopment = parseInt($("input:radio[name=development]:checked").val());
    var busi = parseInt($("input:radio[name=business]:checked").val());
    var webdesign = parseInt($("input:radio[name=design]:checked").val());
    var serverside = parseInt($("input:radio[name=server]:checked").val());
    var ininteractive = parseInt($("input:radio[name=interactive]:checked").val());

    //input val= 0,0,0,0,0
    if((!webdevelopment)&&(!busi)&&(!webdesign)&&(!serverside)&&(!ininteractive)){
      $(".initial-hide").hide();
      $("#csharp").show();
    }

    //input val= 1,1,1,1,1
    else if((webdevelopment)&&(busi)&&(webdesign)&&(serverside)&&(ininteractive))  {
      $(".initial-hide").hide();
      alert("Sorry there are no tracks available for you ")
    }

    //input val= 0,0,1,1,1
    else if((!webdevelopment)&&(!busi)&&(webdesign)&&(serverside)&&(ininteractive)){
      $(".initial-hide").hide();
      $("#ruby").show();
    }

    //input val= 0,0,0,1,0
    else if ((!webdevelopment)&&(!busi)&&(!webdesign)&&(serverside)&&(!ininteractive)){
      $(".initial-hide").hide();
      $("#php").show();
    }

    //input val= 0,0,1,0,1
    else if ((webdevelopment)&&(busi)&&(!webdesign)&&(serverside)&&(!ininteractive)) {
      $(".initial-hide").hide();
      $("#css").show();
    }

    //input val= 0,1,0,0,0
    else if ((!webdevelopment)&&(busi)&&(!webdesign)&&(!serverside)&&(!ininteractive)) {
      $(".initial-hide").hide();
      $("#php").show();
    }

    //input val= 0,0,0,0,1
    else if ((!webdevelopment)&&(!busi)&&(!webdesign)&&(!serverside)&&(ininteractive)) {
      $(".initial-hide").hide();
      $("#csharp").show();
    }

    //input val= 0,1,1,0,0
    else if ((!webdevelopment)&&(busi)&&(webdesign)&&(!serverside)&&(!ininteractive)) {
      $(".initial-hide").hide();
      $("#php").show();
    }

    //input val= 1,0,0,0,0
    else if ((webdevelopment)&&(!busi)&&(!webdesign)&&(!serverside)&&(!ininteractive)) {
      $(".initial-hide").hide();
      $("#ruby").show();
    }

    //input val= 1,1,0,0,0
    else if((webdevelopment)&&(busi)&&(!webdesign)&&(serverside)&&(!ininterasctive)) {
      $(".initial-hide").hide();
      $("#css").show();
    }

    //input val= 1,1,1,0,0
    else ((webdevelopment)&&(busi)&&(webdesign)&&(!serverside)&&(!ininterasctive)) {
      $(".initial-hide").hide();
      alert("sorry !! Your answers doesnot have any match in our library")
    }

  });
});
