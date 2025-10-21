import { auth } from "@clerk/nextjs/server";

async function createUserOrFetch() {
  const { getToken } = await auth();
  try {
    const token = await getToken({ template: "convex" });

    const res = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
export default async function DashboardPage() {
  const user = await createUserOrFetch();
  return (
    <>
      Welcome {user.firstName}
    </>
  );
}
