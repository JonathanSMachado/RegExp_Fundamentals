import java.util.regex.*;

public class RegExJava {
    public static void main(String[] args) {
        String text = "1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
        Pattern patternLetras = Pattern.compile("[a-f]");
        Matcher matcher = patternLetras.matcher(text);

        while(matcher.find()) {
            System.out.printf("Posicoes: %s, %s\tValor: %s%n",
                matcher.start(), matcher.end(), matcher.group());
        }
    }
}