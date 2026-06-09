import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function RequerimentoForm({ onSubmit }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const salvar = async (dados) => {
    await onSubmit(dados);

    reset();

    alert("Requerimento enviado com sucesso!");
  };

  return (
    <div className="page">
      <h1 className="page-title">
        Meus Requerimentos
      </h1>

      <div className="card">
        <div className="card-header">
          Novo Requerimento
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit(salvar)}>
            <div>
              <label>
                Tipo de Requerimento
              </label>

              <br />

              <select
                {...register("tipo", {
                  required:
                    "Tipo é obrigatório",
                })}
              >
                <option value="">
                  Selecione um tipo...
                </option>

                <option value="Revisão de Menção">
                  Revisão de Menção
                </option>

                <option value="Dispensa de Disciplina">
                  Dispensa de Disciplina
                </option>

                <option value="Trancamento de Matrícula">
                  Trancamento de Matrícula
                </option>
              </select>

              {errors.tipo && (
                <p style={{ color: "red" }}>
                  {errors.tipo.message}
                </p>
              )}
            </div>

            <br />

            <div>
              <label>Descrição</label>

              <br />

              <textarea
                rows="8"
                cols="70"
                {...register("descricao", {
                  required:
                    "Descrição é obrigatória",

                  minLength: {
                    value: 10,
                    message:
                      "A descrição deve possuir no mínimo 10 caracteres",
                  },
                })}
              />

              {errors.descricao && (
                <p style={{ color: "red" }}>
                  {errors.descricao.message}
                </p>
              )}
            </div>

            <br />

            <div>
              <label>
                Data do Requerimento
              </label>

              <br />

              <input
                type="date"
                defaultValue={
                  new Date()
                    .toISOString()
                    .split("T")[0]
                }
                {...register("data")}
              />
            </div>

            <br />

            <button
              type="button"
              onClick={() =>
                navigate("/requerimentos")
              }
            >
              Cancelar
            </button>

            {" "}

            <button type="submit">
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequerimentoForm;