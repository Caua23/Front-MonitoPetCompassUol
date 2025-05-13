import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { Header } from "../components/Global/Header";
import { CreatePetForm } from "../interface/CreatePetForm";

export function User() {
  const [isModal, setIsModal] = useState(false);
  const [isModalProduct, setIsModalProduct] = useState(false);
  const [form, setForm] = useState<CreatePetForm>({
    name: "",
    breed: "",
    gender: "",
    age: 0,
    size: 0,
    color: "",
    addInformation: "",
    price: 0,
    location: "",
    product: "",
    category: "dog"
  });
  const [files, setFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    multiple: true,
    onDrop: (acceptedFiles) => {
      setFiles((prev) => [...prev, ...acceptedFiles]);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: ["age", "size", "price"].includes(name) ? Number(value) : value,
      [name]: name === "category" ? value.toLowerCase() : value,
    }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      breed: "",
      gender: "",
      age: 0,
      size: 0,
      color: "",
      addInformation: "",
      price: 0,
      location: "",
      product: "",
      category: "dog",
    });
    setFiles([]);
  };

  const submitForm = async (
    e: React.FormEvent<HTMLFormElement>,
    endpoint: string
  ) => {
    e.preventDefault();
    try {
      const api = import.meta.env.VITE_API_URL;
      const formData = new FormData();
      const dataToSend = { ...form };
      if (endpoint.includes("products")) {
        dataToSend.product = form.category;
        delete dataToSend.category;
      } else {  
        delete dataToSend.product;
      }
      Object.entries(dataToSend).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
      files.forEach((file) => {
        formData.append("files", file);
      });
      await axios.post(`http://${api}/${endpoint}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      resetForm();
      setIsModal(false);
      setIsModalProduct(false);
    } catch (error) {
      console.error(error);
    }
  };

  const renderInput = (
    label: string,
    name: keyof CreatePetForm,
    type = "text"
  ) => (
    <div className="flex flex-col gap-2 border rounded-xl p-3">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={form[name] || ""}
        onChange={handleChange}
        required
        className="border rounded-xl p-2 pl-3"
      />
    </div>
  );

  const renderModal = (
    isOpen: boolean,
    onClose: () => void,
    isProduct: boolean
  ) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-[rgb(0,0,0,0.6)] flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl w-[600px] max-h-[90vh] overflow-y-auto">
          <p className="text-xl font-bold mb-4 text-blue-800">
            {isProduct ? "Criar Produto" : "Criar Pet"}
          </p>
          <form
            onSubmit={(e) =>
              submitForm(e, isProduct ? "products/create" : "pet/create")
            }
            className="flex flex-col gap-4"
          >
            {renderInput("Nome", "name")}
            {!isProduct && renderInput("Raça", "breed")}
            {!isProduct && (
              <div className="flex flex-col gap-2 border rounded-xl p-3">
                <label>genero</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                  className="border rounded-xl p-2"
                >
                  <option value="">Selecione</option>
                  <option value="male">Macho</option>
                  <option value="female">Femea</option>
                </select>
              </div>
            )}
            {!isProduct && renderInput("Idade (anos)", "age", "number")}
            {renderInput(
              isProduct ? "Peso (Kg)" : "Tamanho (cm)",
              "size",
              "number"
            )}
            {isProduct && (
              <div className="flex flex-col gap-2 border rounded-xl p-3">
                <label>Categoria</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="border rounded-xl p-2"
                >
                  <option value="food">Food</option>
                  <option value="toy">Toy</option>
                  <option value="costume">Costume</option>
                </select>
              </div>
            )}
            {!isProduct && (
              <>
                <div className="flex flex-col gap-2 border rounded-xl p-3">
                  <label>Categoria</label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                    className="border rounded-xl p-2"
                  >
                    <option value="dog">Cachorro</option>
                    <option value="cat">Gato</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 border rounded-xl p-3">
                  <label>Cor</label>
                  <select
                    name="color"
                    value={form.color}
                    onChange={handleChange}
                    required
                    className="border rounded-xl p-2"
                  >
                    <option>Selecione</option>
                    <option value="red">Red</option>
                    <option value="apricot">Apricot</option>
                    <option value="black">Black</option>
                    <option value="silver">Silver</option>
                    <option value="tan">Tan</option>
                    <option value="white">White</option>
                  </select>
                </div>
              </>
            )}
            {!isProduct && renderInput("Localização", "location")}
            {renderInput("Preço (R$)", "price", "number")}
            {!isProduct && <div className="flex flex-col gap-2 border rounded-xl p-3">
              <label>Informações adicionais</label>
              <textarea
                name="addInformation"
                value={form.addInformation}
                onChange={handleChange}
                className="border rounded-xl p-2 pl-3"
              />
            </div>}
            {isProduct && <div className="flex flex-col gap-2 border rounded-xl p-3">
              <label>Informações adicionais</label>
              <textarea
                name="addInformation"
                value={form.addInformation}
                onChange={handleChange}
                className="border rounded-xl p-2 pl-3"
              />
            </div>}
            <div className="flex flex-col gap-2 border rounded-xl p-3">
              <label>Imagens</label>
              <div
                {...getRootProps()}
                className="border-dashed border-2 rounded-xl p-4 text-center cursor-pointer"
              >
                <input {...getInputProps()} />
                <p>Arraste e solte ou clique para enviar as imagens</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {files.map((file, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="cursor-pointer bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 duration-500"
            >
              {isProduct ? "Criar Produto" : "Criar Pet"}
            </button>
          </form>
          <button
            onClick={onClose}
            className="cursor-pointer mt-4 px-4 py-2 bg-red-500 hover:bg-red-800 text-white rounded-xl w-full duration-500"
          >
            Fechar Modal
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {renderModal(isModalProduct, () => setIsModalProduct(false), true)}
      {renderModal(isModal, () => setIsModal(false), false)}
      <Header IsFixed={true} />
      <main className="flex justify-center items-center h-screen bg-amber-100">
        <div className="bg-white p-4 flex gap-10 rounded-2xl">
          <button
            onClick={() => setIsModal(true)}
            className="cursor-pointer hover:bg-blue-700 duration-500 px-4 py-2 bg-blue-500 text-white rounded-xl"
          >
            Criar Pet
          </button>
          <button
            onClick={() => setIsModalProduct(true)}
            className="cursor-pointer hover:bg-blue-700 duration-500 px-4 py-2 bg-blue-500 text-white rounded-xl"
          >
            Criar Produto
          </button>
        </div>
      </main>
    </>
  );
}
