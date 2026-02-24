import queue
import time
import random
from datetime import datetime

class Ticket:
    def __init__(self, ticket_number):
        self.ticket_number = ticket_number
        self.timestamp = datetime.now()

    def __str__(self):
        return f"Ticket #{self.ticket_number} | Time: {self.timestamp.strftime('%H:%M:%S')}"


class TicketSystem:
    def __init__(self):
        self.ticket_queue = queue.Queue()
        self.ticket_counter = 1

    def generate_ticket(self):
        ticket = Ticket(self.ticket_counter)
        self.ticket_queue.put(ticket)
        print(f"Generated: {ticket}")
        self.ticket_counter += 1

    def process_ticket(self):
        if self.ticket_queue.empty():
            print("No tickets to process.")
            return

        ticket = self.ticket_queue.get()
        print(f"Serving: {ticket}")

    def simulate_generation(self, num_tickets):
        for _ in range(num_tickets):
            self.generate_ticket()
            time.sleep(random.uniform(0.5, 1.5))

    def simulate_processing(self):
        while not self.ticket_queue.empty():
            self.process_ticket()
            time.sleep(random.uniform(0.5, 1.5))


if __name__ == "__main__":
    system = TicketSystem()

    print("\nGenerating Tickets...\n")
    system.simulate_generation(5)

    print("\nProcessing Tickets...\n")
    system.simulate_processing()
