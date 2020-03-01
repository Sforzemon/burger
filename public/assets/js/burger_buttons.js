
    $("#add-burger").on("submit", (e) => {
        e.preventDefault();
        $.ajax(`/api/burgers/${$("#burger-name").val().trim()}`, {type: "POST"})
        .then( 
            () => {
            location.reload();
            console.log("Burger added.");
            }
        );
    });
    // $(".goAgain").on("submit", (e) => {
    //     console.log($(".roundTwo").value)
    //     e.preventDefault();
    //     $.ajax(`/api/burgers/${$(".roundTwo").value}`, {type: "POST"})
    //     .then( 
    //         () => {
    //         location.reload();
    //         console.log("Burger added.");
    //         }
    //     );
    // }); was gonna add a put me back in coach button, but it wasn't working...

    $(".devour").on("click", (e) => { 
        // console.log($(e.currentTarget).data("id"))
        var id = $(e.currentTarget).data("id");
        $.ajax(`/api/burgers/${id}`, {type: "PUT"})
        .then(
            () => {
            location.reload();
            console.log("Ate that burger!");
            }
        );
    });
