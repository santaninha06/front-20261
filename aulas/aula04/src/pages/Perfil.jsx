import { useParams } from "react-router";
import { useForm } from "react-hook-form";

function Perfil() {
  const { id } = useParams();

  const { register, handleSubmit } = useForm();

  const onSalvar = (data) => {
    console.log(data);
  };

  const validadores = {
    nome: {
      required: "Nome é obrigatório",
      minLength: {
        value: 3,
        message: "Nome deve conter pelo menos 3 caracteres",
      },
    },

    email: {
      required: "Email é obrigatório",
    },

    nascimento: {
        validate: (value) =>
          Date.parse(value) <= Date.now() || "Data inválida",
      },

    telefone: {
      minLength: {
        value: 8,
        message: "Telefone inválido",
      },
      pattern:{value:/^\(?[1-9]{2}\)? ?9[0-9]{4}-?[0-9]{4}$/,},
    },
  };

  return (
    <>
      <h1>Perfil do usuario {id}</h1>

      <form onSubmit={handleSubmit(onSalvar)}>
        <div>
          <label htmlFor="nome">Nome</label>

          <input
            type="text"
            id="nome"
            {...register("nome", validadores.nome)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            {...register("email", validadores.email)}
          />
        </div>

        <div>
          <label htmlFor="nascimento">Data de nascimento</label>

          <input
            type="date"
            id="nascimento"
            {...register("nascimento", validadores.nascimento)}
          />
        </div>

        <div>
          <label htmlFor="telefone">Telefone</label>

          <input
            type="tel"
            id="telefone"
            {...register("telefone", validadores.telefone)}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Perfil;