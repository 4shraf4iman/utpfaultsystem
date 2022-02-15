function getAnnouncement() {
    $.ajax({
        type: "POST",
        url: '../php/announcement-admin.php',
        dataType: 'json',
        data: { functionname: 'getAnnouncement' },

        success: function(obj, textstatus) {
            for (var i = (obj.length - 1); i >= 0; i--) {
                $("#accordion").append('<div class="panel panel-default" id="annlist' + obj[i].id +'"><div class="panel-heading"><h4 class="panel-title"><a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse' + obj[i].id + '">' +
                    obj[i].subject + '</a></h4></div><div id="collapse' + obj[i].id + '" class="panel-collapse collapse"><div class="panel-body">' +
                    obj[i].announcement + '</div></div></div>');
            }
        },
        error: function(err) {
            console.log(err.responseText);
        }
    });
}

function postAnnouncement() {
    var subject = $("#subject").val();
    var desc = $("#desc").val();
    var obj = { "subject": subject, "announcement": desc };

    if (!validate(obj)) {
        $.ajax({
            type: "POST",
            url: '../php/announcement-admin.php',
            dataType: 'json',
            data: { functionname: 'postAnnouncement', data: obj },

            success: function(obj, textstatus) {
                console.log(obj);
                if (obj) {

                    $('<div class="panel panel-default" id="annlist' + obj +'"><div class="panel-heading"><h4 class="panel-title"><a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse' + obj + '">' +
                        subject + '</a></h4></div><div id="collapse' + obj + '" class="panel-collapse collapse"><div class="panel-body">' +
                        desc + '</div></div></div>').insertBefore("#annlist" + (obj - 1));
                    //$("#accordion").append();

                    $("#subject").val("");
                    $("#desc").val("");

                    $("#title").html('Success');
                    $("#errText").html('Announcement has Been Posted');
                    $("#myModal").modal('show');
                } else {
                    $("#title").html('Error');
                    $("#errText").html('Pleas try again in few minutes');
                    $("#myModal").modal('show');
                }
            },
            error: function(err) {
                console.log(err.responseText);
            }
        });
    } else {
        $("#title").html('Error');
        $("#errText").html('All Input Must Be Filled');
        $("#myModal").modal('show');
    }
}

function validate(obj) {
    var bool = false;
    jQuery.each(obj, function(index, item) {
        if (!item || item == "") {
            bool = true;
        }
    });

    return bool;
}