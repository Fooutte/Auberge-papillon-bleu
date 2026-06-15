export const metadata = {
  title: 'Auberge Papillon Bleu',
  description: 'Un nouveau refuge entre fleuve et nature',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
