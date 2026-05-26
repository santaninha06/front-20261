import { useForm } from "react-hook-form";

function RequerimentoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function salvar(data) {
    console.log(data);

    reset();
  }

  return (
    <div>
      <h1>Meus Requerimentos</h1>

      <h2>Novo Requerimento</h2>

      <form onSubmit={handleSubmit(salvar)}>
        <div>
          <label>Tipo de Requerimento</label>
          <br />

          <select
            {...register("tipo", {
              required: "Tipo é obrigatório",
            })}
          >
            <option value="">Selecione um tipo...</option>
            <option value="declaracao">Revisão de Menção</option>
            <option value="historico">Dispensa de disciplina</option>
            <option value="segunda-via">Trancamento de matrícula</option>
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
            rows="5"
            cols="60"
            {...register("descricao", {
              required: "Descrição é obrigatório",
              minLength: {
                value: 10,
                message:
                  "Descrição deve ter no mínimo 10 caracteres",
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
          <label>Data do Requerimento</label>
          <br />

          <input
            type="date"
            defaultValue={new Date().toISOString().split("T")[0]}
            {...register("data")}
          />
        </div>

        <br />

        <button type="button">Cancelar</button>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default RequerimentoForm;