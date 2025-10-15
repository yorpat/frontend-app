import { currentUser, auth } from "@clerk/nextjs/server"

export default async function DashboardPage() {
    const user = await currentUser()
    return (
        <>
            Welcome {user?.firstName}
        </>
    )
}