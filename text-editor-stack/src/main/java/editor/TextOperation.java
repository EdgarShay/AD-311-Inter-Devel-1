package editor;

public class TextOperation {

    public enum OperationType {
        ADD,
        DELETE
    }

    private OperationType type;
    private char character;

    public TextOperation(OperationType type, char character) {
        this.type = type;
        this.character = character;
    }

    public OperationType getType() {
        return type;
    }

    public char getCharacter() {
        return character;
    }
}