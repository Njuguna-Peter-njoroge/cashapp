// PaymentConfirmationComponent

import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'cash.html',
  styleUrls: ['./cash.css',]
})
export class PaymentConfirmationComponent implements OnInit {
  // Using Angular 20's signal for reactive state management
  amount = signal<string>('1,000.00');

  ngOnInit() {
    this.generateRandomAmount();
  }

  generateRandomAmount() {
    // Generate random amount between 10 and 9999
    const randomAmount = Math.floor(Math.random() * 9989) + 10;
    const formattedAmount = randomAmount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    this.amount.set(formattedAmount);
  }

  refreshAmount() {
    this.generateRandomAmount();
  }
}
