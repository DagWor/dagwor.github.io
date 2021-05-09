<%--
  Created by IntelliJ IDEA.
  User: dagma
  Date: 5/7/2021
  Time: 4:56 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Quiz</title>
</head>
<body>
<h1> Number Quiz</h1>
<p>Your score is ${quiz.getCount()}</p>
<br/>
<p>
    Guess the number in the sequence
    ${quiz.getQuestions()[counter]}
</p>
<br>
<form method="post" action="quiz">
    <input type="number" name="answer" required/>
    <input type="submit" value="Submit"/>
</form>
</body>
</html
