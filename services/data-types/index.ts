export interface CategoryTypes {
    _id: string;
    name: 'Mobile' | 'Desktop' | 'PC';
    __v: number;
}

export interface GameTypes {
    _id: string;
    name: string;
    status: string;
    thumbnail: string;
    category: CategoryTypes;
}

export interface NominalTypes {
    _id: string;
    coinName: string;
    coinQuantity: number;
    price: number;
}

export interface PaymentTypes {
    _id: string;
    type: string;
    status: string;
    __v: number;
    banks: BankTypes[];
}

export interface BankTypes {
    _id: string;
    name: string;
    accountNumber: string;
    username: string;
    __v: number;
}

export interface BankTypes {
    _id: string;
    name: string;
    accountNumber: string;
    username: string;
    __v: number;
}
