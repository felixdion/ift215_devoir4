$(function () {
    console.log("ift215")
});

function chargerpanier(){
    $.ajax({
        url: "/produits",
        success: function( result ) {
            console.log(result);
        }
    });
}