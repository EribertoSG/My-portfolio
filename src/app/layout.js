import '@/styles/base.css'
import styles from '@/styles/main.module.css'
import Navigation from '@/components/organisms/Navigation/Navigation'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const poppins = Poppins({ weight: ['400', '700', '800'], subsets: ['latin'] })

export const metadata = {
  title: 'Eriberto-SG',
  description:
    'Tu aliado en el mundo digital. Como programador frontend, transformo tus ideas en experiencias web atractivas y funcionales, convirtiendo lo complejo en sencillo. Pasión, creatividad y compromiso son mi sello de garantía.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={poppins.className}>
        <Navigation />
        <main className={styles.main}>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
