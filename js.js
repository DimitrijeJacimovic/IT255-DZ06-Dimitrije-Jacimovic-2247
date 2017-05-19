function iterate(inputArray) {
    for (var index = 0; index < inputArray.length; index++) {
        console.log(inputArray[index]);
        $(".content")
            .append(inputArray[index].id + " ")
            .append(inputArray[index].name + " ")
            .append(inputArray[index].is_front)
            .append("</br>");
    }
}

function getJson() {
    $.ajax({
        url: 'https://wger.de/api/v2/muscle/',
        type: "GET",
        success: function(data) {
            iterate(data.results);
        }
    });
}

$(document).ready(function()
{
    $("button").click(getJson);
}
 );