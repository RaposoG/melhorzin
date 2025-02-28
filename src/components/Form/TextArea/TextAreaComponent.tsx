import * as interfaces from "@/types/interfaces";

export function TextAreaComponent({
  name,
  register,
  error,
  placeholder,
}: interfaces.FormFieldProps) {
  return (
    <>
      <textarea
        {...register(name, { required: true })}
        className={
          error
            ? "max-h-[330px] min-h-[330px] rounded-lg border-2 border-rose-500 p-4 font-sans text-color-five dark:bg-color-seven dark:text-color-eight dark:placeholder:text-color-eight dark:lg:bg-color-five"
            : "max-h-[330px] min-h-[330px] rounded-lg p-4 font-sans  text-color-five dark:bg-color-seven dark:text-color-eight dark:placeholder:text-color-eight dark:lg:bg-color-five"
        }
        placeholder={placeholder}
      ></textarea>
      {error && (
        <span className="font-sans font-bold text-red-500">
          {error.message}
        </span>
      )}
    </>
  );
}
