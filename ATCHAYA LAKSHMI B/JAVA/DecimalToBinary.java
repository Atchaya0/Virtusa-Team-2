import java.util.Scanner;
public class DecimalToBinary {
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
        String result = binary.reverse().toString();
        return isNegative ? "-" + result : result;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a decimal number: ");
        if (scanner.hasNextLong()) {
            long decimal = scanner.nextLong();
            String binaryCustom = decimalToBinary(decimal);
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
