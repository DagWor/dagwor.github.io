<%--
  Created by IntelliJ IDEA.
  User: dagma
  Date: 5/11/2021
  Time: 3:08 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Posts</title>
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script>

        function clicked(postId){

            console.log(postId)
            $.get("http://jsonplaceholder.typicode.com/comments?postId=" + postId)
                .done(function(data){
                    $("#comments").empty()
                    $.each(data, function (index, value) {
                        $("#comments").append("<li data-id=\"" + value["id"] + "\">" + value["body"] + "</li>");
                    });
                }).fail(function (err) {
                console.log(err)
            });
        }


        $(function (){
            $("#btn1").click(function (){
                let userId = $('#userid').val();
                $.get("https://jsonplaceholder.typicode.com/posts").done(function (data) {
                    $.each(data, function (index, value) {
                        if(value["userId"] == userId) {$("#user").append("<li data-id=\"" + value["id"] + "\" onClick=\"clicked(" + value["id"] + ")\">" + value["title"] + "</li>");}
                    });
                }).fail(function (err) {
                    console.error(err);
                });

                $.get("https://jsonplaceholder.typicode.com/users").done(function (data) {
                    $.each(data, function (index, value) {
                        if(value["id"] == userId) {$("#userinfo").append("<li data-id=\"" + value["id"] + "\">" + value["name"] + "</li>");}
                    });
                }).fail(function (err) {
                    console.error(err);
                });
            })
        })
    </script>
</head>
<body>
<div>
        <input id="userid" type="text"> <button id="btn1">Fetch</button>
</div>

<div>User Details</div>
<ul id="userinfo">

</ul>

<div>POSTS</div>
<ul id="user">

</ul>

<div>Comments</div>
<ul id="comments">

</ul>

</body>
</html>
