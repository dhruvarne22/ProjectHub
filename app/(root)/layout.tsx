import NavbBar from "../../components/Navbar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (

        <main className="text-3xl">
    <NavbBar/>
            {children}
        </main>
    )
}