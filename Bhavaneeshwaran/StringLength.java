import java.util.Scanner;

public class StringLength {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String text = scanner.nextLine();

        int count = 0;

        for (char ch : text.toCharArray()) {
            count++;
        }

        System.out.println("Length of the string: " + count);
    }
}
