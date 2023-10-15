import './globals.css'
import 'tailwindcss/tailwind.css'
import NavBar from './components/NavBar/NavBar'
import AuthContext from './context/AuthContext'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head />
            <body className="text-black">
                <main className="bg-gray-100 min-h-screen w-screen">
                    <AuthContext>
                        <main className="max-w-screen-2xl m-auto bg-white">
                            <NavBar />
                            {children}
                        </main>
                    </AuthContext>

                </main>
            </body>
        </html>
    )
}
