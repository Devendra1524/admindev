"use client";

import { useEffect, useState } from "react";
import Button from "../FormControls/button";
import Modal from "../Modal";
import { visitorsFormControls } from "@/utils/config";
import { useRouter } from "next/navigation";

interface FormData {
  visitors: number;
  premiumUserNo: number;
  location: string;
  device: string;
  month: string;
}

const initialFormData: FormData = {
  visitors: 0,
  premiumUserNo: 0,
  location: "",
  device: "",
  month: "",
};

export default function VisitorsLayout({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const router = useRouter();

  async function handleAddVisitor() {
    const res = await fetch("/api/visitors/add-visitor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      <Button onClick={() => setShowModal(true)} text={"Add New Visitor"} />
      {children}
      <Modal
        show={showModal}
        setShow={setShowModal}
        formData={formData}
        setFormData={setFormData}
        formControls={visitorsFormControls}
        onAdd={handleAddVisitor}
      />
    </div>
  );
}
