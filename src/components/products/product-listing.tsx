import { monthsMapper, productTableHeaders } from '@/utils/config';
import Table from '../Table';

interface Product {
  name: string;
  price: number;
  visitors: number;
  sales: number;
  month: string;
}

interface ProductData extends Product {
  revenue: number;
}

async function extractAllProducts(): Promise<{ data: Product[] }> {
  const res = await fetch('http://localhost:3000/api/product/all-products', {
    method: 'GET',
    cache: 'no-store',
  });

  const data = await res.json();

  return data;
}

export default async function ProductListing() {
  const allProducts = await extractAllProducts();


  return (
    <Table
      tableHeaderText="All Products Overview"
      tableHeaderCells={productTableHeaders}
      data={
        allProducts && allProducts.data && allProducts.data.length
          ? allProducts.data.map((item: Product): ProductData => ({
              ...item,
              revenue: item.price * item.sales,
              month: monthsMapper[item.month],
            }))
          : []
      }
    />
  );
}
