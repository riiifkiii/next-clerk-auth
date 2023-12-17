# Belajar [Clerk](https://clerk.com) untuk _User Authentications_ di [NextJS](https://nextjs.org)

## Getting Started

1. Install NextJS

```bash
npx create-next-app@latest
```

2. Buat akun [Clerk](https://clerk.com) terlebih dahulu dan masuk ke halaman dashboard
3. Pada menu `Home`, pilih framework dan klik `Continue in docs`
4. Setelah di direct ke halaman `Clerk Docs`, kita akan menemukan perintah untuk melakukan instalasi [Clerk](https://clerk.com)

```bash
npm install @clerk/nextjs
```

5. Setelah terinstall, masukkan/tambahkan dua baris `Clerk Key` yang diberikan ke `.env.local` file
6. Wrap aplikasimu dengan `<ClerkProvider>` Component

```javascript
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
```

7. Buat file `middleware.js` dan letakkan di direktori `src/` jika kita menggunakan direktori tersebut, dan letakkan di direktori `root` jia kita tidak menggunakannya. Copy dan pastekan code berikut :

```javascript
import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware

export default authMiddleware({});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

8. Jika sudah selesai, silahkan buka `localhost:3000`.
9. Jika kita ingin menambahkan menu user di website kita, kita bisa nembahakan component `<UserButton />`

```javascript
import { UserButton } from "@clerk/nextjs";

export default function Home() {
	return (
		<main className="h-screen flex items-center justify-center">
			<UserButton />
		</main>
	);
}
```

<br>
<br>

_Dokumentasi ini dibuat pada Desember 2023_
