import { Modal, Form, Input } from "antd";
import { Dispatch, SetStateAction } from "react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onCreate: (values: any) => void;
}

const AddProductModal = ({ open, setOpen, onCreate }: Props) => {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    onCreate(values);
    form.resetFields();
    setOpen(false);
  };

  return (
    <Modal
      title="Yangi mahsulot qo'shish"
      open={open}
      onOk={() => form.submit()}
      onCancel={() => setOpen(false)}
      okText="Qo'shish"
      cancelText="Bekor qilish"
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="title"
          label="Sarlavha"
          rules={[{ required: true, message: "Tittle kiriting" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Narxi"
          rules={[{ required: true, message: "Narx kiriting" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="color"
          label="Rangi"
          rules={[{ required: true, message: "Rang kiriting" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProductModal;
