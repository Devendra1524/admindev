import React, { useState } from 'react';
import Button from '../FormControls/button';
import Input from '../FormControls/input';
import Select from '../FormControls/select';

interface FormControl {
  id: string;
  type?: string;
  placeholder?: string;
  label: string;
  componentType: string;
  options?: Option[];
}

interface Option {
  id: string;
  label: string;
}

interface ModalProps {
  show: boolean;
  title: string;
  formControls?: FormControl[];
  onAdd: () => void;
  formData: { [key: string]: any } | any;
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: any }>> | any;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({
  show,
  title,
  formControls = [],
  onAdd,
  formData,
  setFormData,
  setShow,
}: ModalProps) {
  return (
    <>
      {show ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                </div>
                <div className="relative p-5 flex-auto flex flex-col gap-5">
                  {formControls && formControls.length
                    ? formControls.map((item) =>
                      item.componentType === 'input' ? (
                        <Input
                          type={item.type || 'text'}
                          placeholder={item.placeholder}
                          label={item.label}
                          value={formData && formData[item.id]}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [item.id]:
                                item.type === 'number'
                                  ? parseInt(e.target.value, 10)
                                  : e.target.value,
                            })
                          }
                        />
                      ) : item.componentType === 'select' ? (
                        <Select
                          value={formData && formData[item.id]}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [item.id]: e.target.value,
                            })
                          }
                          label={item.label}
                          options={item.options || []}
                        />
                      ) : null
                    )
                    : null}
                </div>
                <div className="flex gap-2 items-center justify-end p-6 border-t border-solid rounded-b">
                  <Button text={'Add'} onClick={onAdd} />
                  <Button onClick={() => setShow(false)} text={'Close'} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </>
  );
}
