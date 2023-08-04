import Input from "@/components/input";
import useMutation from "@/libs/client/useMutation";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useState } from "react";
// import { cls } from "@/libs/client/utils"; 

interface EnterForm {
  email?: string;
  password?: string;
}

function cls(...classnames: string[]) {
  return classnames.join(" ");
}
const Enter: NextPage = () => {
  const [enter, { loading, data, error }] = useMutation("/api/users/enter");
  const { register, handleSubmit, reset } = useForm<EnterForm>();
  const[method, setMethod] = useState<"email" | "phone">("email");
  const onValid = (validForm: EnterForm) => {
    if (loading) return;
    enter(validForm);
  };
  
  console.log(data);
  
  return (
    <div className="mt-16 px-4">
      <h2 className="text-center text-4xl font-extrabold">내 손안의 슈퍼맨</h2>
      <div className="mt-12">
        <div className="flex flex-col items-center">
          <h5 className="text-md font-medium text-gray-500">
            내 손 안에서 슈퍼맨을 만나보세요
          </h5>
        </div>
        <form
          onSubmit={handleSubmit(onValid)}
          className="mt-8 flex flex-col space-y-4"
        >
          <div className="mt-1">
            <Input
              register={register("email", { required: true })}
              name="email"
              label="이메일 주소"
              type="email"
              kind="text"
              placeholder="이메일을 입력해주세요."
              required
            />
          </div>
          <div className="mt-1">
            <Input
              register={register("password", { required: true })}
              name="password"
              label="비밀번호"
              type="password"
              kind="text"
              placeholder="비밀번호를 입력해주세요."
              required
            />
          </div>
          <button className="text- mt-5 rounded-md border border-transparent bg-black px-4 py-2 font-medium text-white shadow-sm hover:bg-[#050708]/80 focus:outline-none focus:ring-2 focus:ring-[#050708] focus:ring-offset-2 ">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};
export default Enter;
