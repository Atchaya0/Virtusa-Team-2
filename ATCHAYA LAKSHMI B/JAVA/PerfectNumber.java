import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

/**
 * Question 2: Write a program to check whether a number is a perfect number.
 * 
 * Definition:
 * A perfect number is a positive integer that is equal to the sum of its
 * positive proper divisors (excluding the number itself).
 * Example: 6 has divisors 1, 2, 3 -> 1 + 2 + 3 = 6 (Perfect Number)
 *          28 has divisors 1, 2, 4, 7, 14 -> 1 + 2 + 4 + 7 + 14 = 28 (Perfect Number)
 */
public class PerfectNumber {

    /**
     * Finds all proper divisors of a given positive integer.
     */
    public static List<Long> getProperDivisors(long number) {
        List<Long> divisors = new ArrayList<>();
        if (number <= 1) {
            return divisors;
        }

        divisors.add(1L);

        // Check divisors up to square root of number for optimal O(sqrt(n)) performance
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

    /**
     * Checks if a given number is a perfect number.
     */
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

        System.out.println("=========================================");
        System.out.println("         PERFECT NUMBER CHECKER          ");
        System.out.println("=========================================");

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
