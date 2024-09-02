import {auth, signOut} from "@/auth";

const SettingsPage = async () => {
    const isLoggedIn = await auth();
    return (
        <>
        Settings Page
            {JSON.stringify(isLoggedIn)}
            <form action={async () => {
                "use server"
                await signOut()
            }}>
                <button type="submit">SignOut</button>
            </form>
        </>
    );
};
export default SettingsPage