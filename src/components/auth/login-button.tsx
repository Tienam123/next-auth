"use client"
import {useRouter} from "next/navigation";

export interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

const LoginButton = ({children, mode = "redirect", asChild}: LoginButtonProps) => {
    const router = useRouter();
    const onClick = () => {
        console.log("On Click");
        router.push('/auth/login');
    }
    if (mode === 'modal') {
        return (
            <span>TODO: Implement Modal</span>
        )
    }
    return (
        <span className="cursor-pointer" onClick={onClick}>
            {children}
        </span>
    );
};


export default LoginButton;