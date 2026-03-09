package editor;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class TextEditorTest {

    @Test
    public void testAddCharacter() {

        TextEditor editor = new TextEditor();

        editor.addChar('a');
        editor.addChar('b');

        assertEquals("ab", editor.getText());
    }

    @Test
    public void testDeleteCharacter() {

        TextEditor editor = new TextEditor();

        editor.addChar('a');
        editor.addChar('b');
        editor.deleteChar();

        assertEquals("a", editor.getText());
    }

    @Test
    public void testUndoAdd() {

        TextEditor editor = new TextEditor();

        editor.addChar('a');
        editor.undo();

        assertEquals("", editor.getText());
    }

    @Test
    public void testUndoDelete() {

        TextEditor editor = new TextEditor();

        editor.addChar('a');
        editor.deleteChar();
        editor.undo();

        assertEquals("a", editor.getText());
    }

    @Test
    public void testUndoEmpty() {

        TextEditor editor = new TextEditor();

        editor.undo();

        assertEquals("", editor.getText());
    }

    @Test
    public void testDeleteEmpty() {

        TextEditor editor = new TextEditor();

        editor.deleteChar();

        assertEquals("", editor.getText());
    }
}