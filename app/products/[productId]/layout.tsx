export default function Layout({
    children,
}: { children: React.ReactNode }) {
    return (
        <main>
            {children}
            <h1>Featured products will be displayed here.</h1>
        </main>
    )
}