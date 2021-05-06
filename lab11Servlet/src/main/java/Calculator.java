import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/calculator")
public class Calculator extends HttpServlet {

    double addFirst = 0.0;
    double addSecond = 0.0;
    double mulFirst = 0.0;
    double mulSecond = 0.0;
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
            addFirst = Double.parseDouble(req.getParameter("addFirst"));
            addSecond = Double.parseDouble(req.getParameter("addSecond"));
            mulFirst = Double.parseDouble(req.getParameter("mulFirst"));
            mulSecond = Double.parseDouble(req.getParameter("mulSecond"));

            double addRes = addFirst + addSecond;
            req.setAttribute(String.valueOf(addRes), "addRes");
            double mulRes = mulFirst * mulSecond;
            req.setAttribute(String.valueOf(mulRes), "mulRes");

            PrintWriter out = resp.getWriter();
            out.println("<style>.inputs { margin-bottom: 5%; } </style>");
            out.println("<div style=\"display: grid; justify-content: center;\">");
            out.println("<form action=\"calculator\" method=\"post\" style=\"display: `${}`block;\">");
            out.println(String.format("<input class=\"inputs\" type=\"number\" name=\"addFirst\" value=\"%s\"> + <input class=\"inputs\" type=\"number\" name=\"addSecond\" value=\"%s\"> = <input name=\"addRes\" class=\"inputs\" type=\"number\" value=\"%.2f\">", req.getParameter("addFirst"), req.getParameter("addSecond"), addRes));
            out.println("<br>");
            out.println(String.format("<input class=\"inputs\" type=\"number\" name=\"mulFirst\" value=\"%s\" > * <input class=\"inputs\" type=\"number\" name=\"mulSecond\" value=\"%s\" > = <input name=\"mulRes\" class=\"inputs\" type=\"number\" value=\"%.2f\">", req.getParameter("mulFirst"), req.getParameter("mulSecond"), mulRes));
            out.println("<br>");
            out.println("<input type=\"submit\" value=\"submit\">");
            out.println("</form>");
            out.println("</div>");
    }

}

