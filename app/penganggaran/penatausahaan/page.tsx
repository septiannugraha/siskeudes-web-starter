import DataTable from "../../components/DataTable";

const PenatausahaanComponent = () => {

  const userData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 },
    // Add more user data items here...
  ];

  const productData = [
    { productId: 'P001', productName: 'Laptop', price: 999.99, inStock: true },
    { productId: 'P002', productName: 'Smartphone', price: 599.99, inStock: false },
    { productId: 'P002', productName: 'Smartphone', price: 599.99, inStock: false },
    { productId: 'P002', productName: 'Smartphone', price: 599.99, inStock: false },
    { productId: 'P002', productName: 'Smartphone', price: 599.99, inStock: false },
    { productId: 'P002', productName: 'Smartphone', price: 599.99, inStock: false },
    { productId: 'P002', productName: 'Smartphone', price: 599.99, inStock: false },
    { productId: 'P002', productName: 'Smartphone', price: 599.99, inStock: false },
    { productId: 'P002', productName: 'Smartphone', price: 599.99, inStock: false },
    { productId: 'P002', productName: 'Smartphone', price: 599.99, inStock: false },
    { productId: 'P002', productName: 'Smartphone', price: 599.99, inStock: false },
    { productId: 'P002', productName: 'Smartphone', price: 599.99, inStock: false },
    { productId: 'P002', productName: 'Smartphone', price: 599.99, inStock: false },
    { productId: 'P002', productName: 'Smartphone', price: 599.99, inStock: false },
    { productId: 'P002', productName: 'Smartphone', price: 599.99, inStock: false },
    { productId: 'P002', productName: 'Smartphone', price: 599.99, inStock: false },
    { productId: 'P002', productName: 'Smartphone', price: 599.99, inStock: false },
    // Add more product data items here...
  ];

  const financialTransactions = [
    {
      transactionId: 'T001',
      date: '2023-04-01',
      description: 'Salary Deposit',
      category: 'Income',
      amount: 5000.00,
      type: 'Credit',
      account: 'Checking Account',
      balance: 5000.00,
      status: 'Completed',
      paymentMethod: 'Direct Deposit',
      currency: 'USD',
      notes: 'Monthly salary',
      tags: ['salary', 'income'],
      merchantName: 'ABC Corp',
      location: 'New York, NY',
    },
    {
      transactionId: 'T002',
      date: '2023-04-02',
      description: 'Grocery Shopping',
      category: 'Food & Dining',
      amount: 150.75,
      type: 'Debit',
      account: 'Credit Card',
      balance: 4849.25,
      status: 'Pending',
      paymentMethod: 'Credit Card',
      currency: 'USD',
      notes: 'Weekly grocery run',
      tags: ['food', 'essentials'],
      merchantName: 'Whole Foods',
      location: 'Brooklyn, NY',
    },
    {
      transactionId: 'T003',
      date: '2023-04-03',
      description: 'Utility Bill Payment',
      category: 'Bills & Utilities',
      amount: 200.00,
      type: 'Debit',
      account: 'Checking Account',
      balance: 4649.25,
      status: 'Completed',
      paymentMethod: 'Bank Transfer',
      currency: 'USD',
      notes: 'Monthly electricity bill',
      tags: ['utilities', 'bills'],
      merchantName: 'City Power Co.',
      location: 'New York, NY',
    },
    // Add more transactions here...
  ];

  return <div>
    {/* <h1>User Data Table</h1>
    <DataTable data={userData} />

    <h1>Product Data Table</h1>
    <DataTable data={productData} /> */}

    <h1 className="text-2xl font-bold mt-8 mb-4">Financial Transactions Table</h1>
    <DataTable data={financialTransactions} />
  </div>
}

export default PenatausahaanComponent