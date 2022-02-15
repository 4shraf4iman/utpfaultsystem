function init(){
    $.ajax({
        type: "GET",
        url: '../php/announcement-user.php',
        dataType: 'json',
        data: { functionname: 'announcement' },

        success: function(obj, textstatus) {
            for (var i = (obj.length - 1); i >= 0; i--) {
                $("#accordion").append('<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse' + obj[i].id + '">' +
                    obj[i].subject + '</a></h4></div><div id="collapse' + obj[i].id + '" class="panel-collapse collapse"><div class="panel-body">' +
                    obj[i].announcement + '</div></div></div>');
            }
        },
        error: function(err) {
            console.log(err.responseText);
        }
    });
}