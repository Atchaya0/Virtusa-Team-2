import java.util.Scanner;

/**
 * Question 1: Write a program to convert a decimal number to binary.
 * 
 * Logic:
 * Decimal numbers (base 10) can be converted to binary (base 2)
 * by repeatedly dividing the number by 2 and recording the remainders.
 * Reading the remainders in reverse order yields the binary equivalent.
 */
public class DecimalToBinary {

    // Method to convert a non-negative decimal integer to binary using custom logic
    public static String decimalToBinary(long decimal) {
        if (decimal == 0) {
            return "0";
        }

        boolean isNegative = decimal < 0;
        long num = Math.abs(decimal);
        StringBuilder binary = new StringBuilder();

        while (num > 0) {
            long remainder = num % 2;
            binary.append(remainder);
            num /= 2;
        }

        // Reverse the string of remainders to get the actual binary representation
        String result = binary.reverse().toString();
        return isNegative ? "-" + result : result;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("=========================================");
        System.out.println("       DECIMAL TO BINARY CONVERTER       ");
        System.out.println("=========================================");

        System.out.print("Enter a decimal number: ");
        if (scanner.hasNextLong()) {
            long decimal = scanner.nextLong();

            // Using custom algorithmic method
            String binaryCustom = decimalToBinary(decimal);

            // Using Java built-in utility for verification
            String binaryBuiltIn = Long.toBinaryString(decimal);

            System.out.println("\n--- Conversion Results ---");
            System.out.println("Decimal Input       : " + decimal);
            System.out.println("Binary (Algorithm)  : " + binaryCustom);
            System.out.println("Binary (Built-in)   : " + binaryBuiltIn);
        } else {
            System.out.println("Invalid input. Please enter an integer.");
        }

        scanner.close();
    }
}
