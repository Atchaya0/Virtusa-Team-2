import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class MostFrequentCharacter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String text = scanner.nextLine();

        Map<Character, Integer> frequency = new HashMap<>();

        for (char ch : text.toCharArray()) {
            if (ch != ' ') {
                frequency.put(ch, frequency.getOrDefault(ch, 0) + 1);
            }
        }

        char mostFrequent = '\0';
        int maxFrequency = 0;

        for (Map.Entry<Character, Integer> entry : frequency.entrySet()) {
            if (entry.getValue() > maxFrequency) {
                maxFrequency = entry.getValue();
                mostFrequent = entry.getKey();
            }
        }

        if (maxFrequency > 0) {
            System.out.println("Most frequent character: " + mostFrequent);
            System.out.println("Frequency: " + maxFrequency);
        } else {
            System.out.println("No characters found.");
        }
    }
}
