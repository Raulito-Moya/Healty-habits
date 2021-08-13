import { useForm } from "react-hook-form";






  const useLoginForm = () => {

    const { register, handleSubmit,watch, formState: { errors } }= useForm({
        mode: "onBlur",
      });

      const onSubmit = (data,e) => {console.log(data)};

    return{register, handleSubmit,onSubmit,errors }


  }

  export default useLoginForm