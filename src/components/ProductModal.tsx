// ProductModal.tsx
import { Modal, Form, Input } from "antd";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onCreate: (values: any) => void;
  initialValues?: any;
}

const AddProductModal = ({ open, setOpen, onCreate, initialValues }: Props) => {
  const [form] = Form.useForm();

useEffect(() => {
  if (open && initialValues) {
    form.setFieldsValue(initialValues);
  }
}, [open, initialValues, form]);


  const handleFinish = (values: any) => {
    onCreate(values);
    form.resetFields();
    setOpen(false);
  };

  return (
    <Modal
      title="Mahsulotni tahrirlash"
      open={open}
      onOk={() => form.submit()}
      onCancel={() => setOpen(false)}
      okText="Saqlash"
      cancelText="Bekor qilish"
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="title"
          label="Sarlavha"
          rules={[{ required: true, message: "Sarlavhani kiriting" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Narxi"
          rules={[{ required: true, message: "Narxni kiriting" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="color"
          label="Rangi"
          rules={[{ required: true, message: "Rangni kiriting" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProductModal;
