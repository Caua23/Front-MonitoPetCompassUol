import axios from "axios";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

export function Modal({
  petId,
  onClose,
}: {
  petId: number;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    cidade: "",
    estado: "",
    pet: petId,
  });

  const [phoneError, setPhoneError] = useState("");
  const api = import.meta.env.VITE_API_URL;
  const ChangeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone || form.phone.trim().length < 10) {
      setPhoneError("Por favor, insira um telefone válido.");
      return;
    } else {
      setPhoneError("");
    }
    const response = await axios.post(
      `http://${api}/form/submit`,
      form
    );
    console.log(response.data);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.8)] z-50 w-full">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        >
          ✖
        </button>
        <h1 className="text-2xl font-bold mb-4 text-center">Adote um pet ❤</h1>
        <form
          onSubmit={Submit}
          className="space-y-4 flex flex-col justify-center items-center"
        >
          <div className="flex flex-col">
            <label className="block text-sm font-medium">Name</label>
            <input
              placeholder="Coloque seu nome"
              type="text"
              name="name"
              value={form.name}
              onChange={ChangeValue}
              className="text-neutral-600 border px-3 py-2 focus:outline-none bg-transparent border-neutral-400  w-[493px] p-2 pl-5 rounded-xl"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              placeholder="Coloque seu email"
              type="email"
              name="email"
              value={form.email}
              onChange={ChangeValue}
              className="text-neutral-600 border px-3 py-2 focus:outline-none bg-transparent border-neutral-400  w-[493px] p-2 pl-5 rounded-xl"
              required
            />
          </div>

          <div className="w-full flex flex-col ml-9">
            <label className="block text-sm font-medium">Phone</label>
            <PhoneInput
              placeholder="Coloque seu telefone"
              country={"br"}
              value={form.phone}
              onChange={(phone) => setForm((prev) => ({ ...prev, phone }))}
              inputClass="text-neutral-600 border px-3 py-2 focus:outline-none bg-transparent border-neutral-400  w-[493px] p-2 pl-5 rounded-xl"
              specialLabel=""
            />
            {phoneError && (
              <span className={`text-red-500 text-xs mt-1 `}>{phoneError}</span>
            )}
          </div>

          <div className="flex flex-col">
            <div>
              <label className="block text-sm font-medium">Cidade</label>
              <input
                placeholder="Coloque sua cidade"
                type="text"
                name="cidade"
                value={form.cidade}
                onChange={ChangeValue}
                className="text-neutral-600  px-3 py-2 focus:outline-none bg-transparent border-neutral-400 border w-[493px] p-2 pl-5 rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Estado</label>
              <input
                placeholder="Coloque seu estado"
                type="text"
                name="estado"
                value={form.estado}
                onChange={ChangeValue}
                className="text-neutral-600  px-3 py-2 focus:outline-none bg-transparent border-neutral-400 border w-[493px] p-2 pl-5 rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                placeholder="Mande uma mensagem"
                name="message"
                value={form.message}
                onChange={ChangeValue}
                className="text-neutral-600  px-3 py-2 focus:outline-none bg-transparent border-neutral-400 border w-[493px] p-2 pl-5 rounded-xl"
                rows={3}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer duration-300 bg-blue-500 text-white py-2 rounded-4xl hover:bg-blue-600"
          >
            Enviar Formulário
          </button>
        </form>
      </div>
    </div>
  );
}
