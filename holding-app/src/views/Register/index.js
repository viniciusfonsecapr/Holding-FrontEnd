import React from "react";
import { Form, H1, P, Input, Button, Link, Err } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório !"),
    email: yup
      .string()
      .email("Digite um email válido !")
      .required("O email é obrigatório !"),
    password: yup
      .string()
      .min(6, "A senha dever conter pelo menos 6 caracteres !")
      .required("A senha é obrigatória !"),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha é obrigatória !")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais !"),
  })
  .required();

function Register() {
  const navigate = useNavigate();

  function navigateTo(url) {
    navigate(`/${url}`);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(userData) {
    console.log(userData);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <H1>Bem Vindo!</H1>
      <P>Faça seu registro.</P>

      <Input placeholder="Full Name" type="text" {...register("name")} />
      <Err>{errors.name?.message}</Err>

      <Input placeholder="Email Andress" type="text" {...register("email")} />
      <Err>{errors.email?.message}</Err>

      <Input placeholder="Password" type="password" {...register("password")} />
      <Err>{errors.password?.message}</Err>

      <Input
        placeholder="Confirm password"
        type="password"
        {...register("password")}
      />
      <Err>{errors.confirmPassword?.message}</Err>

      <Button type="submit">REGISTRAR</Button>
      <Link onClick={() => navigateTo("")}>Já tem conta? </Link>
    </Form>
  );
}

export default Register;
