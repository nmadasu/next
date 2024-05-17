// import Image from "next/image";
// import Link from 'next/link'
// export default function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <div>
//         <Link href='/blog'>
//           Blog
//         </Link>
//       </div>
//       <div>
//         <Link href='/about'>
//          About
//         </Link>
//       </div>
//       <div>
//         <Link href='/demo/first'>
//          Example on nested loop
//         </Link>
//       </div>
//     </div>
//   );
// }
"use client"
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import type { AppProps } from 'next/app';

const theme = createTheme();
function page({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {/* <Component {...pageProps}/> */}
    </ThemeProvider>
  )
}

export default page

// function page({ Component, pageProps }: AppProps) {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }

// export default page;
