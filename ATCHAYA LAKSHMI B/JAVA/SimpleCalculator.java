import java.util.Scanner;

/**
 * Question 3: Implement a simple calculator program using switch-case statements.
 * 
 * Supports:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/) with divide-by-zero check
 * - Modulus (%) with divide-by-zero check
 */
public class SimpleCalculator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("=========================================");
        System.out.println("            SIMPLE CALCULATOR            ");
        System.out.println("=========================================");

        System.out.print("Enter first number: ");
        if (!scanner.hasNextDouble()) {
            System.out.println("Invalid input. Please enter a valid number.");
            scanner.close();
            return;
        }
        double num1 = scanner.nextDouble();

        System.out.print("Enter operator (+, -, *, /, %): ");
        char operator = scanner.next().charAt(0);

        System.out.print("Enter second number: ");
        if (!scanner.hasNextDouble()) {
            System.out.println("Invalid input. Please enter a valid number.");
            scanner.close();
            return;
        }
        double num2 = scanner.nextDouble();

        double result = 0;
        boolean isValidOperation = true;

        // Switch-case statement for arithmetic operations
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;

            case '-':
                result = num1 - num2;
                break;

            case '*':
                result = num1 * num2;
                break;

            case '/':
                if (num2 == 0) {
                    System.out.println("\nError: Division by zero is undefined!");
                    isValidOperation = false;
                } else {
                    result = num1 / num2;
                }
                break;

            case '%':
                if (num2 == 0) {
                    System.out.println("\nError: Modulo by zero is undefined!");
                    isValidOperation = false;
                } else {
                    result = num1 % num2;
                }
                break;

            default:
                System.out.println("\nError: Invalid operator '" + operator + "'. Supported: +, -, *, /, %");
                isValidOperation = false;
                break;
        }

        if (isValidOperation) {
            System.out.println("\n--- Calculation Result ---");
            System.out.printf("%.4f %c %.4f = %.4f%n", num1, operator, num2, result);
        }

        scanner.close();
    }
}
