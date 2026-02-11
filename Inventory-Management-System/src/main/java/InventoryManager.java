public class InventoryManager {

    public static void duplicateZeros(int[] inventory) {
        int zeros = 0;
        int n = inventory.length;

        // Count zeros
        for (int num : inventory) {
            if (num == 0) {
                zeros++;
            }
        }

        // Traverse backwards
        for (int i = n - 1; i >= 0; i--) {

            if (i + zeros < n) {
                inventory[i + zeros] = inventory[i];
            }

            if (inventory[i] == 0) {
                zeros--;
                if (i + zeros < n) {
                    inventory[i + zeros] = 0;
                }
            }
        }
    }
}