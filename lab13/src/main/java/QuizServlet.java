import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

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

          if(quiz.getQuestions().length == question) response.sendRedirect("final.jsp");
          else response.sendRedirect("quiz.jsp");

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

        if(quiz.getQuestions().length == question) response.sendRedirect("final.jsp");
        else response.sendRedirect("quiz.jsp");
    }
}
