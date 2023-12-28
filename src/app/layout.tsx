import { Inter } from 'next/font/google'
import './globals.css';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

export const metadata :Metadata= {
  title:{ 
    default:'Default Title',
    template:'%s | Template Title'
  },
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor:'lightblue',padding:'1rem'}}>Header</header>
        {children}
        <footer style={{backgroundColor:'ghostwhite',padding:'1rem'}}>Footer</footer>
      </body>    
    </html>
  )
}