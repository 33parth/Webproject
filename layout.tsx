import "./globals.css"; import Navbar from "../components/Navbar"; import Footer from "../components/Footer";
export const metadata = { title: "Artistly", description: "Discover and book top talent across India", };
export default function RootLayout({ children, }: { children: React.ReactNode; }) { return ( <html lang="en" className="dark"> <body className="bg-gray-950 text-white min-h-screen flex flex-col"> <Navbar /> <main className="flex-grow px-4 sm:px-6 md:px-10 pt-10 pb-20 bg-gradient-to-b from-gray-950 to-black"> {children} </main> <Footer /> </body> </html> ); }
