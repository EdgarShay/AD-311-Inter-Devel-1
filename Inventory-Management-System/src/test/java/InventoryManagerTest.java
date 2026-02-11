import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class InventoryManagerTest {
    // -------- Normal Cases --------
    @Test
    void testNormalCase1() {
        int[] input = {4,0,1,3,0,2,5,0};
        InventoryManager.duplicateZeros(input);
        assertArrayEquals(new int[]{4,0,0,1,3,0,0,2}, input);
    }
    @Test
    void testNormalCase2() {
        int[] input = {1,0,2,3,0,4,5,0};
        InventoryManager.duplicateZeros(input);
        assertArrayEquals(new int[]{1,0,0,2,3,0,0,4}, input);
    }
    @Test
    void testNormalCase3() {
        int[] input = {0,1,2};
        InventoryManager.duplicateZeros(input);
        assertArrayEquals(new int[]{0,0,1}, input);
    }
    // -------- Edge Cases --------
    @Test
    void testNoZeros() {
        int[] input = {3,2,1};
        InventoryManager.duplicateZeros(input);
        assertArrayEquals(new int[]{3,2,1}, input);
    }
    @Test
    void testAllZeros() {
        int[] input = {0,0,0};
        InventoryManager.duplicateZeros(input);
        assertArrayEquals(new int[]{0,0,0}, input);
    }
    @Test
    void testEmptyArray() {
        int[] input = {};
        InventoryManager.duplicateZeros(input);
        assertArrayEquals(new int[]{}, input);
    }
}



