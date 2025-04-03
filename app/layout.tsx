import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { SocketProvider } from "@/components/providers/socket-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const openSans = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "RuscordX — Российская альтернатива Discord",
    template: "%s | RuscordX"
  },
  description: "Полноценная замена Discord с русскоязычной поддержкой, бесплатными голосовыми каналами и защищенными серверами. Присоединяйтесь к русскоязычному сообществу!",
  keywords: [
    "RuscordX",
    "Дискорд альтернатива",
    "российский дискорд",
    "русский голосовой чат",
    "замена дискорда в России",
    "бесплатный голосовой чат",
    "российские сервера",
    "без блокировок"
  ],
  openGraph: {
    title: "RuscordX — Российская альтернатива Discord",
    description: "Безопасная платформа для общения на русском языке с полным функционалом голосового чата и видеосвязи",
    url: "https://ruscordx.ru",
    siteName: "RuscordX",
    images: [
      {
        url: "https://ruscordx.ru/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RuscordX - Российская коммуникационная платформа",
      }
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RuscordX — Российская альтернатива Discord",
    description: "Полноценная замена Discord для русскоязычного сообщества",
    images: ["https://ruscordx.ru/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ruscordx.ru",
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="ru" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body
          className={cn(openSans.className, "bg-white dark:bg-[#313338]")}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            storageKey="discord-clone-theme"
          >
            <SocketProvider>
              <ModalProvider />
              <QueryProvider>{children}</QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
