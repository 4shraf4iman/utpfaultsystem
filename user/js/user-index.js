var buttonLogout = 0;
var temp;

function logout() {;
    buttonLogout++;
    if (buttonLogout == 1) {
        $.ajax({
            type: "POST",
            url: 'php/user-index.php',
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

function invokeHistoryFunction(data) {
    document.getElementById('history').contentWindow.targetFunction(data);
}