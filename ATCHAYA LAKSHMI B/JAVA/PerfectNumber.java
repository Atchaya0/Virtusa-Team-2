import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
public class PerfectNumber {
    public static List<Long> getProperDivisors(long number) {
        List<Long> divisors = new ArrayList<>();
        if (number <= 1) {
            return divisors;
        }

        divisors.add(1L);
        for (long i = 2; i * i <= number; i++) {
            if (number % i == 0) {
                divisors.add(i);
                long counterpart = number / i;
                if (counterpart != i) {
                    divisors.add(counterpart);
                }
            }
        }

        Collections.sort(divisors);
        return divisors;
    }
    public static boolean isPerfectNumber(long number) {
        if (number <= 1) {
            return false;
        }

        long sum = 1;
        for (long i = 2; i * i <= number; i++) {
            if (number % i == 0) {
                sum += i;
                long counterpart = number / i;
                if (counterpart != i) {
                    sum += counterpart;
                }
            }
        }

        return sum == number;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a positive integer: ");
        if (scanner.hasNextLong()) {
            long number = scanner.nextLong();

            if (number <= 0) {
                System.out.println("Perfect numbers are defined only for positive integers.");
            } else {
                List<Long> divisors = getProperDivisors(number);
                long sumOfDivisors = divisors.stream().mapToLong(Long::longValue).sum();

                System.out.println("\n--- Analysis ---");
                System.out.println("Number           : " + number);
                System.out.println("Proper Divisors  : " + divisors);
                System.out.println("Sum of Divisors  : " + sumOfDivisors);

                if (sumOfDivisors == number && number > 1) {
                    System.out.println("\nResult: " + number + " is a PERFECT NUMBER! [OK]");
                } else {
                    System.out.println("\nResult: " + number + " is NOT a perfect number. [X]");
                }
            }
        } else {
            System.out.println("Invalid input. Please enter a valid integer.");
        }

        scanner.close();
    }
}
