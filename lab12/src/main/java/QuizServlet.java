import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

@WebServlet("/quiz")
public class QuizServlet extends HttpServlet {
    private Quiz quiz;
    private int question = 0;
      protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
          HttpSession session = request.getSession();
          quiz = (Quiz) session.getAttribute("quiz");

          question = (int) session.getAttribute("counter");

//          int x = !request.getParameter("answer").equals("") ? Integer.parseInt(request.getParameter("answer")) : 0;
          int x = Integer.parseInt(request.getParameter("answer"));
          if(quiz.getAnswers()[question] == x){
              quiz.setCount();
          }

          question += 1;
          session.setAttribute("counter", question);
          session.setAttribute("quiz", quiz);
          PrintWriter out = response.getWriter();

          if(quiz.getQuestions().length == question){
              out.println("<!DOCTYPE html>\n" +
                      "<html lang=\"en\">\n" +
                      "<head>\n" +
                      "    <meta charset=\"UTF-8\">\n" +
                      "    <title>Quiz</title>\n" +
                      "</head>\n" +
                      "<body>\n" +
                      "<h1>The Number Quiz Results</h1>\n" +
                      "Your score is " + quiz.getCount() + "/" + quiz.getQuestions().length +
                      "\n" +
                      "</body>\n" +
                      "</html>");

          } else {
              out.println("<!DOCTYPE html>\n" +
                      "<html lang=\"en\">\n" +
                      "<head>\n" +
                      "    <meta charset=\"UTF-8\">\n" +
                      "    <title>Quiz</title>\n" +
                      "</head>\n" +
                      "<body>\n" +
                      "<h1>The Number Quiz</h1>\n" +
                      "<p>" + quiz.getQuestions()[question] + "\n" +
                      "Your score is :" + quiz.getCount() + "\n" +
                      "<form action=\"quiz\" method=\"post\">\n" +
                      "    <input required type=\"number\" name=\"answer\">\n" +
                      "    <input type=\"submit\" value=\"Check\">\n" +
                      "</form>\n" +
                      "\n" +
                      "</body>\n" +
                      "</html>");
          }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        if(session.getAttribute("quiz") == null){
            quiz = new Quiz();
            session.setAttribute("quiz", quiz);
            session.setAttribute("counter", question);
        } else {
            quiz = (Quiz) session.getAttribute("quiz");
            question = (int)session.getAttribute("counter");
        }

        PrintWriter out = response.getWriter();

        if(quiz.getQuestions().length == question){
            out.println("<!DOCTYPE html>\n" +
                    "<html lang=\"en\">\n" +
                    "<head>\n" +
                    "    <meta charset=\"UTF-8\">\n" +
                    "    <title>Quiz</title>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "<h1>The Number Quiz Results</h1>\n" +
                    "Your score is " + quiz.getCount() + "/" + quiz.getQuestions().length +
                    "\n" +
                    "</body>\n" +
                    "</html>");

        } else {
            out.println("<!DOCTYPE html>\n" +
                    "<html lang=\"en\">\n" +
                    "<head>\n" +
                    "    <meta charset=\"UTF-8\">\n" +
                    "    <title>Quiz</title>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "<h1>The Number Quiz</h1>\n" +
                    "<p>" + quiz.getQuestions()[question] + "\n" +
                    "Your score is :" + quiz.getCount() + "\n" +
                    "<form action=\"quiz\" method=\"post\">\n" +
                    "    <input required type=\"number\" name=\"answer\">\n" +
                    "    <input type=\"submit\" value=\"Check\">\n" +
                    "</form>\n" +
                    "\n" +
                    "</body>\n" +
                    "</html>");
        }
    }
}
