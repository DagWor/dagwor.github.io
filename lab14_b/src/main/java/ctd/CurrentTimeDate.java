package ctd;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentTimeDate extends SimpleTagSupport {
    String color;
    String size;

    @Override
    public void doTag() throws JspException, IOException {
        Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat ("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
        String x = ft.format(dNow);


        JspWriter out = getJspContext().getOut();
        if(color != null && size != null) out.write(" <span style=\"color: " + color + "; font-size: " + size + "px;\">" + x + "</span>");
        else if(color != null && size == null) out.write("<span style=\"color:" + color + ";\">" + x + "</span>");
        else if(color == null && size != null) out.write("<span style=\"font-size:" + size + "px;\">" + x + "</span>");
        else out.write("<span>" + x + "</span>");
    }


    public void setColor(String color) {
        this.color = color;
    }

    public void setSize(String size) {
        this.size = size;
    }
}
