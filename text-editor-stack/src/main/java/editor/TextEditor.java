package editor;

import java.util.Stack;

public class TextEditor {

    private StringBuilder text;
    private Stack<TextOperation> history;

    public TextEditor() {
        text = new StringBuilder();
        history = new Stack<>();
    }

    public void addChar(char c) {
        text.append(c);
        history.push(new TextOperation(TextOperation.OperationType.ADD, c));
        display();
    }

    public void deleteChar() {

        if (text.length() == 0) {
            System.out.println("Nothing to delete");
            return;
        }

        char removed = text.charAt(text.length() - 1);
        text.deleteCharAt(text.length() - 1);

        history.push(new TextOperation(TextOperation.OperationType.DELETE, removed));

        display();
    }

    public void undo() {

        if (history.isEmpty()) {
            System.out.println("Nothing to undo");
            return;
        }

        TextOperation op = history.pop();

        if (op.getType() == TextOperation.OperationType.ADD) {

            text.deleteCharAt(text.length() - 1);

        } else if (op.getType() == TextOperation.OperationType.DELETE) {

            text.append(op.getCharacter());

        }

        display();
    }

    public void display() {
        System.out.println("Current Text: " + text.toString());
    }

    public String getText() {
        return text.toString();
    }
}