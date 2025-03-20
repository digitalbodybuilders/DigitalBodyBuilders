// import { NextResponse } from "next/server";

// export async function POST() {
//   try {
//     // Clear the cookie to log out the user
//     return NextResponse.json(
//       { message: "Logout successful!" },
//       {
//         status: 200,
//         headers: {
//           "Set-Cookie": `token=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`,
//         },
//       }
//     );
//   } catch (error) {
//     return NextResponse.json({ message: "Logout failed!" }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";

export async function POST() {
  try {
    return NextResponse.json({ message: "Logout successful!" });
  } catch (err) {
    console.error("Logout error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
