import "../globals.css";
import { Providers } from "@/redux/store/providers";

export default function LoginLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
