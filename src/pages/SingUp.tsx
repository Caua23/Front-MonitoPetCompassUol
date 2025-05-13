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
  const [error , setError] = useState("")
  const api = import.meta.env.VITE_API_URL;
  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      
      setError("As senhas não são iguais")
      
      return;
    }

    try {
      const response = await axios.post(`http://${api}/user/auth/signUp`, {
        email,
        password,
        name,
      });

      console.log(response.data);

      navigate(`${response.data.redirect}`); 
    } catch (error) {
      console.error(error);
      setError("Erro ao cadastrar usuário");
    }
  };

  return (
    <main className="w-screen h-screen bg-[#f7d7a1]">
      <img src={logo} width={150} height={150} className="cursor-pointer fixed m-5" onClick={() => navigate("/")} alt="Logo da aplicação" />

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
             {error && <p className="text-red-500 mb-2">{error}</p>}
            <button
              type="submit"
              className="cursor-pointer w-52 border-none rounded-2xl bg-[#003459] text-white p-2 focus:outline-none"
            >
              Cadastrar
            </button>
          </form>
          <p>Clique aqui para fazer <a className="text-[#003459]" href="/auth/login">Login</a></p>
        </div>
      </section>
    </main>
  );
}
