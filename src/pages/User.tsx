import { useState } from "react"
import { Header } from "../components/Global/Header"
import axios from "axios"
import { CreatePetForm } from "../interface/CreatePetForm"



export function User() {
  const [isModal, setIsModal] = useState(false)

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
    category: "dog",
  })

  const [file, setFile] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: name === "age" || name === "size" || name === "price" ? Number(value) : value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const api = import.meta.env.VITE_API_URL
      const formData = new FormData()

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, String(value))
      })

      if (file) {
        formData.append('files', file)
      }

      await axios.post(`http://${api}/pet/create`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      setIsModal(false)
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
        category: "dog",
      })
      setFile(null)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {isModal && (
        <div className="fixed inset-0 bg-[rgb(0,0,0,0.6)] flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[600px] max-h-[90vh] overflow-y-auto">
            <p className="text-xl font-bold mb-4 text-blue-800">Criar Pet</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <div className="flex flex-col gap-2 border rounded-xl p-3">
              <label>Nome do pet</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="border rounded-xl p-2 pl-3"
                />
                <label>Raça do pet</label>
                <input
                  type="text"
                  name="breed"
                  placeholder="Raça"
                  value={form.breed}
                  onChange={handleChange}
                  required
                  className="border rounded-xl p-2 pl-3"
                />
                <label>Selecione o gênero do pet</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                  className="border rounded-xl p-2"
                >
                  <option value="">Selecione o gênero</option>
                  <option value="male">Macho</option>
                  <option value="female">Fêmea</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 border rounded-xl p-3">
                <label>Idade (anos)</label>
                <input
                  type="number"
                  name="age"
                  placeholder="Ex: 2 vira 2 anos"
                  value={form.age ? form.age : ''}
                  onChange={handleChange}
                  required
                  className="border rounded-xl p-2 pl-3"
                />
                <label>Tamanho (cm)</label>
                <input
                  type="number"
                  name="size"
                  placeholder="Ex: 10.5 vira 10,5 cm"
                  value={form.size ? form.size : ''}
                  onChange={handleChange}
                  required
                  className="border rounded-xl p-2 pl-3"
                />
              </div>

              <div className="flex flex-col gap-2 border rounded-xl p-3">
                <label>Cor do Pet</label>
                <select
                  name="color"
                  value={form.color}
                  onChange={handleChange}
                  required
                  className="border rounded-xl p-2"
                >
                  <option value="">Selecione a cor</option>
                  <option value="red">Red</option>
                  <option value="apricot">Apricot</option>
                  <option value="black">Black</option>
                  <option value="silver">Silver</option>
                  <option value="tan">Tan</option>
                  <option value="white">White</option>
                </select>

                <label>Categoria</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="border rounded-xl p-2 "
                >
                  <option value="dog">Cachorro</option>
                  <option value="cat">Gato</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 border rounded-xl p-3">
              <label>Localização</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Localização"
                  value={form.location}
                  onChange={handleChange}
                  required
                  className="border rounded-xl p-2 pl-3"
                />
                <label>Preço (R$)</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Ex: 2000 vira 2.000,00"
                  value={form.price ? form.price : ''}
                  onChange={handleChange}
                  required
                  className="border rounded-xl p-2 pl-3"
                />
                <label>Informações adicionais</label>
                <textarea
                  name="addInformation"
                  placeholder="Informações adicionais"
                  value={form.addInformation}
                  onChange={handleChange}
                  className="border rounded-xl p-2 pl-3"
                />
              </div>

              <div className="flex flex-col gap-2 border rounded-xl p-3">
                <label>Imagem do Pet</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="border rounded-xl p-2 pl-3"
                />
              </div>

              <button
                type="submit"
                className="bg-green-500 cursor-pointer text-white py-2 rounded-xl duration-300 hover:bg-green-600"
              >
                Criar Pet
              </button>
            </form>

            <button
              onClick={() => setIsModal(false)}
              className="mt-4 px-4 py-2 cursor-pointer bg-red-500 hover:bg-red-700 duration-300 text-white rounded-xl w-full"
            >
              Fechar Modal
            </button>
          </div>
        </div>
      )}

      <Header IsFixed={true} />
      <main className="flex justify-center items-center h-screen bg-amber-100">
        <div className="bg-white rounded-xl-2xl p-4 items-center justify-center">
          <button
            onClick={() => setIsModal(!isModal)}
            className="px-4 cursor-pointer py-2 bg-blue-500 text-white rounded-xl"
          >
            Abrir Modal
          </button>
        </div>
      </main>
    </>
  )
}
