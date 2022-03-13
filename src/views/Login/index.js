import React from "react";
import { Form, H1, P, Input, Button, Link, Err } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Digite um email válido !")
      .required("O email é obrigatório !"),
    password: yup.string().required("A senha é obrigatória !"),
  })
  .required();

function Login() {
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
      <H1>Welcome back!</H1>
      <P>Please login to your account.</P>

      <Input placeholder="Email Andress" type="text" {...register("email")} />
      <Err>{errors.email?.message}</Err>

      <Input placeholder="Password" type="password" {...register("password")} />
      <Err>{errors.password?.message}</Err>

      <Button type="submit">LOGIN</Button>
      <Link>REGISTER NOW</Link>
    </Form>
  );
}

export default Login;
