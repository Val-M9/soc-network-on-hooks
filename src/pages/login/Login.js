import { useForm } from "react-hook-form";
import { login } from "../../redux/actions/auth";

import style from "./login.module.css";

export default function Login() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => login(formData);

  const error = "Field is required";
  return (
    <form className={style.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.content}>
        <div className={style.item}>
          <label htmlFor="email">Email</label>
          <input className={style.input} {...register("email", { required: true })} type="text" />
          {errors.email && <span className={style.error}>{error}</span>}
        </div>
        <div className={style.item}>
          <label htmlFor="password">Password</label>
          <input
            className={style.input}
            {...register("password", { required: true })}
            type="password"
          />
          {errors.password && <span className={style.error}>{error}</span>}
        </div>
        <div>
          <input type="checkbox" />
          <span>Remember Me</span>
        </div>
        <button className={style.button} type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
