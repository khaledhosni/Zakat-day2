import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {

    addOrder(order: any) {
        // Logic to add an order
        return { message: 'Order added successfully', order };
    }

    getOrders() {
        // Logic to retrieve orders
        return [{ id: 1, item: 'Product A', quantity: 2 }];
    }   

    removeOrder(orderId: number) {
        // Logic to remove an order
        return { message: `Order with ID ${orderId} removed successfully` };
    }
}
