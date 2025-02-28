"use client";

import { useRef, useState } from "react";
import { RiLoginCircleFill } from "react-icons/ri";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import * as interfaces from "@/types/interfaces";
import { ContactSchema } from "@/components/Form/types/types";
import { FormFieldComponent } from "./FormField/FormFieldComponent";
import { TextAreaComponent } from "./TextArea/TextAreaComponent";

export function FormComponent() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<interfaces.ContactFormProps>({
    resolver: zodResolver(ContactSchema),
  });

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = () => {
    setLoading(true);
    setError(false);
    setSuccess(false);

    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current!,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setLoading(false);
            setSuccess(true);
            reset();
          },
          () => {
            setLoading(false);
            setError(true);
          }
        );
  };

  const onSubmit: SubmitHandler<interfaces.ContactFormProps> = () =>
    sendEmail();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg flex flex-col gap-2"
      ref={form}
    >
      <FormFieldComponent
        type="text"
        name="name"
        placeholder="Your name"
        register={register}
        error={errors.name}
      />

      <FormFieldComponent
        type="email"
        placeholder="Your email"
        name="email"
        register={register}
        error={errors.email}
      />

      <TextAreaComponent
        name="message"
        placeholder="Your message"
        register={register}
        error={errors.message}
      />
      {error && (
        <span className="font-sans font-bold text-red-500">
          Error on sending message, please try again.
        </span>
      )}

      {success && (
        <span className="font-sans font-bold text-green-500">
          Message sent.
        </span>
      )}

      <button
        type="submit"
        className="ml-auto flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-color-five px-4 py-4 dark:bg-color-seven xl:mt-4 xl:bg-color-five 2xl:mt-8"
      >
        {loading ? (
          <>
            <p className="font-alt">Sending</p>
            <svg
              width="100"
              height="100"
              className="h-5 w-5 animate-spin rounded-full border-4 border-dotted border-white"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="green"
                stroke-width="4"
                fill="yellow"
              />
            </svg>
          </>
        ) : (
          <>
            <p className="font-alt">Send message</p>
            <RiLoginCircleFill size={24} />
          </>
        )}
      </button>
    </form>
  );
}
