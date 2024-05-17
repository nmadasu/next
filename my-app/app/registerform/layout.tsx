import "../about.css"
export default function registerFormLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )

}