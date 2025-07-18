export interface PaymentDetails {
    amount: number;
    currency: string;
    method: 'credit_card' | 'paypal' | 'bank_transfer'|'Mpesa';
    description?: string;
    customerId?: string;
}

export interface PaymentResult {
    success: boolean;
    transactionId?: string;
    error?: string;
}