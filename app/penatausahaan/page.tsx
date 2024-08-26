import DataTable from "../components/DataTable";

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

  return <div>
      <h1>User Data Table</h1>
      <DataTable data={userData} />

      <h1>Product Data Table</h1>
      <DataTable data={productData} />
  </div>  
}

export default PenatausahaanComponent