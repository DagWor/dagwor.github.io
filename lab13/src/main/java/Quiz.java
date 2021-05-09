public class Quiz {
    private static final long serialVersionUID = 1L;

    private int count = 0;
    private int index = 0;
    private final String[] questions = {
            "3, 1, 4, 1, 5", //pi
            "1, 1, 2, 3, 5", //fibo
            "1, 4, 9, 16, 25", // squares
            "2, 3, 5, 7, 11", // primes
            "1, 2, 4, 8, 16" // powers
    };
    private final int[] answers = {9, 8, 36, 13, 32};

    public int getCount() {
        return count;
    }

    public void setCount() {
        this.count++;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public String[] getQuestions() {
        return questions;
    }

    public int[] getAnswers() {
        return answers;
    }

    public int getQuizLength(){
        return questions.length;
    }

}
