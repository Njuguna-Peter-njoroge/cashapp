import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'cash.html',
  styleUrls: ['./cash.css']
})
export class PaymentConfirmationComponent implements OnInit {
  // Using Angular 20's signal for reactive state management
  amount = signal<string>('1,000.00');
  recipientName = signal<string>('Caiden');

  // Names categorized by payment context/amount
  private paymentContextNames = {
    // Small amounts (10-100) - Friends, casual payments
    casual: ['Alex', 'Sam', 'Chris', 'Jordan', 'Taylor', 'Casey', 'Riley', 'Morgan'],
    
    // Medium amounts (101-500) - Family, close friends
    family: ['Mom', 'Dad', 'Sarah', 'Michael', 'Jessica', 'David', 'Emily', 'Ryan'],
    
    // Large amounts (501-2000) - Roommates, shared expenses
    roommates: ['Jake', 'Emma', 'Tyler', 'Madison', 'Logan', 'Olivia', 'Noah', 'Sophia'],
    
    // Very large amounts (2001+) - Business, formal payments
    business: ['Johnson', 'Anderson', 'Williams', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore']
  };

  ngOnInit() {
    this.generateRandomAmount(); // This now also generates the contextual name
  }

  generateRandomAmount() {
    // Generate random amount between 10 and 9999
    const randomAmount = Math.floor(Math.random() * 9989) + 10;
    const formattedAmount = randomAmount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    this.amount.set(formattedAmount);
    
    // Generate contextually appropriate name based on amount
    this.generateContextualName(randomAmount);
  }

  generateContextualName(amount: number) {
    let nameCategory: string[];
    
    if (amount <= 100) {
      // Small amounts - casual friends, coffee money, small favors
      nameCategory = this.paymentContextNames.casual;
    } else if (amount <= 500) {
      // Medium amounts - family members, close friends
      nameCategory = this.paymentContextNames.family;  
    } else if (amount <= 2000) {
      // Large amounts - roommates, shared bills, group expenses
      nameCategory = this.paymentContextNames.roommates;
    } else {
      // Very large amounts - business associates, formal payments
      nameCategory = this.paymentContextNames.business;
    }
    
    // Select random name from the appropriate category
    const randomIndex = Math.floor(Math.random() * nameCategory.length);
    this.recipientName.set(nameCategory[randomIndex]);
  }

  generateRandomName() {
    // This method now gets the current amount to determine context
    const currentAmount = parseFloat(this.amount().replace(',', ''));
    this.generateContextualName(currentAmount);
  }

  refreshAmount() {
    this.generateRandomAmount(); // This now handles both amount and contextual name
  }
}
