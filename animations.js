// add functions here that serve as a global model for jQuery animations
var faded = true;
var go = 0;

$(document).ready(
  function ()
  {
    // if the exposition button is clicked
    $("#exposition").click(
      function()
      {
        $("#conf").slideUp();
        $("#riac").slideUp();
        $("#clim").slideUp();
        $("#faac").slideUp();
        $("#deno").slideUp();
        go = 1;
        if(faded)
        {
          $("#expo").slideDown();
        }
        else
        {
          $("#expo").slideDown();
        }
      }
    );

    // if the conflict button is clicked
    $("#conflict").click(
      function()
      {
        $("#expo").slideUp();
        $("#riac").slideUp();
        $("#clim").slideUp();
        $("#faac").slideUp();
        $("#deno").slideUp();
        go = 2;
        if(faded)
        {
          $("#conf").slideDown();
        }
        else
        {
          $("#conf").slideDown();
        }
      }
    );

    // if the rising action button is clicked
    $("#risingaction").click(
      function()
      {
        $("#expo").slideUp();
        $("#conf").slideUp();
        $("#clim").slideUp();
        $("#faac").slideUp();
        $("#deno").slideUp();
        go = 3;
        if(faded)
        {
          $("#riac").slideDown();
        }
        else
        {
          $("#riac").slideDown();
        }
      }
    );

    // if the climax button is clicked
    $("#climax").click(
      function()
      {
        $("#expo").slideUp();
        $("#riac").slideUp();
        $("#conf").slideUp();
        $("#faac").slideUp();
        $("#deno").slideUp();
        go = 4;
        if(faded)
        {
          $("#clim").slideDown();
        }
        else
        {
          $("#clim").slideDown();
        }
      }
    );

    // if the falling action button is clicked
    $("#fallingaction").click(
      function()
      {
        $("#expo").slideUp();
        $("#riac").slideUp();
        $("#clim").slideUp();
        $("#conf").slideUp();
        $("#deno").slideUp();
        go = 5;
        if(faded)
        {
          $("#faac").slideDown();
        }
        else
        {
          $("#faac").slideDown();
        }
      }
    );

    // if the denouement button is clicked
    $("#denouement").click(
      function()
      {
        $("#expo").slideUp();
        $("#riac").slideUp();
        $("#clim").slideUp();
        $("#faac").slideUp();
        $("#conf").slideUp();
        go = 6;
        if(faded)
        {
          $("#deno").slideDown();
        }
        else
        {
          $("#deno").slideDown();
        }
      }
    );

    $("#bod").click(
      function()
      {
        switch (val) {
          case 1:
            $("#expo").slideUp();
            break;
          case 2:
            $("#conf").slideUp();
            break;
          case 3:
            $("#riac").slideUp();
            break;
          case 4:
            $("#clim").slideUp();
            break;
          case 5:
            $("#faac").slideUp();
            break;
          case 6:
            $("#deno").slideUp();
            break;
          default:
            break;
        }
      }
    );

  }
);
