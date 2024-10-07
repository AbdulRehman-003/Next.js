
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h1>user layout</h1>
        {children}
    </>
  );
}
