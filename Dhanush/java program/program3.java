class SharedBuffer {
    private int value;
    private boolean available = false;

    synchronized void produce(int value) {
        try {
            while (available) {
                wait();
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        this.value = value;
        available = true;

        System.out.println("Produced: " + value);

        notify();
    }

    synchronized void consume() {
        try {
            while (!available) {
                wait();
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        System.out.println("Consumed: " + value);
        available = false;

        notify();
    }
}

class Producer extends Thread {
    private SharedBuffer buffer;

    Producer(SharedBuffer buffer) {
        this.buffer = buffer;
    }

    public void run() {
        for (int i = 1; i <= 5; i++) {
            buffer.produce(i);
        }
    }
}

class Consumer extends Thread {
    private SharedBuffer buffer;

    Consumer(SharedBuffer buffer) {
        this.buffer = buffer;
    }

    public void run() {
        for (int i = 1; i <= 5; i++) {
            buffer.consume();
        }
    }
}

public class ProducerConsumer {
    public static void main(String[] args) {
        SharedBuffer buffer = new SharedBuffer();

        Producer producer = new Producer(buffer);
        Consumer consumer = new Consumer(buffer);

        producer.start();
        consumer.start();
    }
}
