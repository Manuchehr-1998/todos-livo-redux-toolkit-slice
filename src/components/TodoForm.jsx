import { Button } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function TodoForm({ onSubmit, title,}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSave = (data) => {
    onSubmit(data);
  };
  

  useEffect(() => {
    setValue("title", title);
  }, [setValue, title]);

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit(onSave)} className="w-full max-w-sm">
        <div className="mb-4">
          <input
            {...register("title", {
              required: "Заполните это поле",
              minLength: {
                value: 7,
                message: "Минимум 7 символов",
              },
            })}
            className="block w-full px-2 py-1 leading-tight border border-gray-400 rounded appearance-none focus:outline-none focus:border-blue-500"
            placeholder="Title Todo"
          />
          {errors.title && <p className="text-[red]">{errors.title.message}</p>}
        </div>
        <div className="flex items-center justify-center">
          <Button
            variant="contained"
            className="px-4 py-2 font-bold animate__animated animate__slideInDown"
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
