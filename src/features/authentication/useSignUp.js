import { useMutation } from "@tanstack/react-query";
import { SignUp as SignUpApi} from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp(){
    const{mutate:SignUp,isLoading}=useMutation({
        mutationFn:SignUpApi,
        onSuccess:(user)=>{
            console.log(user);
            toast.success("Account successfully created! please verfiy the new account from the user's")
        },
        onError:(err)=>{
              console.error("⚠️ Signup failed:", err);

            toast.error('faild')
            
        }
    })
    return {SignUp,isLoading}
}