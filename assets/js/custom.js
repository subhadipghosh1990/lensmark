$(document).ready(function(){

    $(".testForm").on("submit", function(e){
        e.preventDefault();

        var dat = new FormData();

        var txt = $("#txt").val();
        var fle = $("#fle")[0].files[0];

        dat.append("txt", txt);
        dat.append("fle", fle);

        $.ajax({
            url:"http://localhost:9000/upl",
            type:"POST",
            data:dat,
            contentType:false,
            cache:false,
            processData:false,
            success:function(e){
                console.log(e);
            }
        })

    })

    $(".signUpForm").on("submit", function(e){
        e.preventDefault();

        var dat = new FormData();

        dat.append("name", $("#name").val());
        dat.append("mail", $("#mail").val());
        dat.append("phone", $("#phone").val());
        dat.append("pass", $("#pass").val());

        $.ajax({
            url:"http://localhost:9000/sign",
            type:"POST",
            data:dat,
            contentType:false,
            cache:false,
            processData:false,
            success:function(e){
                console.log(e);
            }
        })


    })

});