$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    let first = $("#first").val();
    let last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(data => displayGuests(data));
}

function displayGuests(data) {
    $("#guestList").empty()
    $("#first").val("");
    $("#last").val("");
    $.each(data, function(i, item) {
        $("#guestList").append("<p>" + item.first + " " + item.last + "</p>");
    });
}