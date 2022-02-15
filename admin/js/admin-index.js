var buttonLogout = 0;

function logout() {
    buttonLogout++;
    if (buttonLogout == 1) {
        $.ajax({
            type: "POST",
            url: 'php/admin-index.php',
            dataType: 'json',
            data: { functionname: 'logout' },

            success: function(obj, textstatus) {
                console.log(obj);
                document.location.href = "../";
                buttonLogout = 0;
            },
            error: function(err) {
                console.log(err.responseText);
                buttonLogout = 0;
            }
        });
    }
}

function reroute() {
    $.ajax({
        type: "POST",
        url: '../php/reroute.php',
        dataType: 'json',
        data: { functionname: 'reroute' },

        success: function(obj, textstatus) {
            switch (obj) {
                case 'admin':
                    break;
                case 'user':
                    document.location.href = "../user/";
                    break;
                default:
                    document.location.href = "../";
                    break;
            }
        },
        error: function(err) {
            console.log(err);
        }
    });
}