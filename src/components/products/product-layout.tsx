"use client";

import { useEffect, useState } from 'react';
import Button from '../FormControls/button';
import Modal from '../Modal';
import { productFormControls } from '@/utils/config';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  price: string;
  visitors: number;
  sales: number;
  month: string;
}

const initialFormData: FormData = {
  name: '',
  price: '',
  visitors: 0,
  sales: 0,
  month: '',
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const router = useRouter();

  async function handleAddProduct() {
    const res = await fetch('/api/product/add-product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data && data.success) {
      setFormData(initialFormData);
      setShowModal(false);
      router.refresh();
    } else {
      setFormData(initialFormData);
      setShowModal(false);
    }
  }

  return (
    <div>
      <Button onClick={() => setShowModal(true)} text={'Add New Product'} />
      {children}
      <Modal
        show={showModal}
        setShow={setShowModal}
        formData={formData}
        setFormData={setFormData}
        formControls={productFormControls}
        onAdd={handleAddProduct}
      />
    </div>
  );
}
