import { useState } from "react";
import { useNavigate } from "react-router";
import logo from "../assets/logo.png";
import axios from "axios";

export function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const error = document.getElementById("error");
  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      if (error) {
        error.innerText = "As senhas não coincidem";
      }

      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/user/auth/signUp", {
        email,
        password,
        name,
      });

      console.log(response.data);
      alert("Usuário cadastrado com sucesso!");

      navigate("/"); 
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar usuário");
    }
  };

  return (
    <main className="w-screen h-screen bg-[#f7d7a1]">
      <img src={logo} width={150} height={150} className="fixed m-5" alt="Logo da aplicação" />

      <section className="w-full h-screen flex flex-col items-center justify-center">
        <div>
          <h1 className="text-3xl font-extrabold mb-2 text-[#003459]">Criar conta</h1>
          <p className="mb-4 ml-2 text-gray-700">Faça seu cadastro</p>

          <form className="flex flex-col" onSubmit={formSubmit}>
            <p id="error" className="text-red-500 "></p>
            <label htmlFor="name" className="sr-only">Nome</label>
            <input
              id="name"
              name="name"
              className="mb-2 w-52 border-none rounded-2xl bg-white p-2 pl-5 focus:outline-none"
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              className="mb-2 w-52 border-none rounded-2xl bg-white p-2 pl-5 focus:outline-none"
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="sr-only">Senha</label>
            <input
              id="password"
              name="password"
              className="mb-2 w-52 border-none rounded-2xl bg-white p-2 pl-5 focus:outline-none"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="confirmPassword" className="sr-only">Confirmação de senha</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              className="mb-2 w-52 border-none rounded-2xl bg-white p-2 pl-5 focus:outline-none"
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-52 border-none rounded-2xl bg-[#003459] text-white p-2 focus:outline-none"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
