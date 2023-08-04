import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    setValue,
    reset,
  } = useForm<LoginForm>({
    mode: "onChange",
  });
  const onValid = (data: LoginForm) => {
    console.log("im valid bby");
    reset();
  };
  const onInValid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <input
        {...register("username", {
          required: "이름을 입력해주세요.",
          minLength: {
            message: "The username should be longer than 5 chars.",
            value: 5,
          },
        })}
        type="text"
        placeholder="이름"
      />
      {errors.username?.message}
      <input
        {...register("email", {
          required: "이메일을 입력해주세요.",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="이메일"
        // className={`${Boolean(errors.email) ? "border-red-500" : ""}`}
      />
      {errors.email?.message}
      <input
        {...register("password", {
          required: "비밀번호를 입력해주세요.",
          minLength: {
            message: "비밀번호는 8자 이상이어야 합니다.",
            value: 8,
          },
        })}
        type="password"
        placeholder="비밀번호"
        // className={`${Boolean(errors.email) ? "border-red-500" : ""}`}
      />
      <input type="submit" value="Create Account" />
      {errors.errors?.message}
    </form>
  );
}
