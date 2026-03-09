package editor;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        TextEditor editor = new TextEditor();
        Scanner scanner = new Scanner(System.in);

        while (true) {

            System.out.println("\nChoose operation:");
            System.out.println("1 - Add Character");
            System.out.println("2 - Delete Last Character");
            System.out.println("3 - Undo");
            System.out.println("4 - Exit");

            int choice = scanner.nextInt();

            switch (choice) {

                case 1:
                    System.out.print("Enter character: ");
                    char c = scanner.next().charAt(0);
                    editor.addChar(c);
                    break;

                case 2:
                    editor.deleteChar();
                    break;

                case 3:
                    editor.undo();
                    break;

                case 4:
                    System.out.println("Exiting...");
                    return;

                default:
                    System.out.println("Invalid option");
            }
        }
    }
}