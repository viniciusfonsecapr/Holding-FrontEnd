import React from "react";
import LoginImg from '../../assets/login1.svg'
import { Form, H1, P, Input, Button, Link, Err,ContainerLoginImage,LoginImage} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
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
    <div>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <H1>Seja bem vindo!</H1>
      <P>Faça Login na sua Conta.</P>

      <Input placeholder="Email Andress" type="text" {...register("email")} />
      <Err>{errors.email?.message}</Err>

      <Input placeholder="Password" type="password" {...register("password")} />
      <Err>{errors.password?.message}</Err>

      <Button type="submit">ACESSAR</Button>
      <Link onClick={() => navigateTo("register")}>REGISTRAR-SE</Link>
    </Form>
    <ContainerLoginImage><LoginImage src={LoginImg}></LoginImage></ContainerLoginImage>
    </div>
  );
}

export default Login;
