import unittest
from ticket_system import TicketSystem

class TestTicketSystem(unittest.TestCase):
    # Normal Test Cases
    def test_ticket_generation(self):
        system = TicketSystem()
        system.generate_ticket()
        self.assertEqual(system.ticket_queue.qsize(), 1)

    def test_ticket_processing(self):
        system = TicketSystem()
        system.generate_ticket()
        system.process_ticket()
        self.assertEqual(system.ticket_queue.qsize(), 0)

    def test_multiple_tickets(self):
        system = TicketSystem()
        for _ in range(5):
            system.generate_ticket()
        self.assertEqual(system.ticket_queue.qsize(), 5)


# Edge Test Cases
    def test_process_empty_queue(self):
        system = TicketSystem()
        system.process_ticket()
        self.assertEqual(system.ticket_queue.qsize(), 0)

    def test_large_number_of_tickets(self):
        system = TicketSystem()
        for _ in range(1000):
            system.generate_ticket()
        self.assertEqual(system.ticket_queue.qsize(), 1000)

    def test_ticket_order(self):
        system = TicketSystem()
        system.generate_ticket()
        system.generate_ticket()

        first = system.ticket_queue.get()
        second = system.ticket_queue.get()

        self.assertLess(first.ticket_number, second.ticket_number)


if __name__ == "__main__":
    unittest.main()
