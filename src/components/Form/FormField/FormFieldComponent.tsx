import * as interfaces from "@/types/interfaces";

export function FormFieldComponent({
  name,
  register,
  type,
  error,
  placeholder,
}: interfaces.FormFieldProps) {
  return (
    <>
      <input
        type={type}
        {...register(name, { required: true })}
        className={
          error
            ? "h-14 rounded-lg border-2 border-rose-500 p-4 font-sans text-color-five placeholder:text-color-tree dark:bg-color-seven dark:text-color-eight dark:placeholder:text-color-eight dark:lg:bg-color-five"
            : "h-14 rounded-lg p-4 font-sans text-color-five placeholder:text-color-tree dark:bg-color-seven dark:text-color-eight dark:placeholder:text-color-eight dark:lg:bg-color-five"
        }
        placeholder={placeholder}
      />
      {error && (
        <span className="font-sans font-bold text-red-500">
          {error.message}
        </span>
      )}
    </>
  );
}
