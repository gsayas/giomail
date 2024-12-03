import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=mark_email_unread",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <Meta/>
      <Links/>

    {/*  workaround for remix + react hydration issue
         https://github.com/remix-run/remix/issues/4822  */}
      <script
          dangerouslySetInnerHTML={{
            __html: `
              const observerConfig = {
                childList: true,
                subtree: true,
                attributes: true,
                attributeOldValue: true,
                characterData: true,
                characterDataOldValue: true,
              };
              window.hydration_observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                  switch (mutation.type) {
                    case 'childList': {
                      window.hydration_observer.disconnect();
                      mutation.addedNodes.forEach((node) => {
                        try {
                        mutation.target.removeChild(node);
                        } catch (e) {
                          console.error(e);
                        }
                      });
                      window.hydration_observer.observe(document, observerConfig);
                      break;
                    }
                    case 'attributes': {
                      mutation.target.removeAttribute(mutation.attributeName);
                      break;
                    }
                  }
                });
                
              });
              window.addEventListener('DOMContentLoaded', () => {
                window.hydration_observer.observe(document, observerConfig);
              });
            `,
          }}
      />
    </head>
    <body>
    {children}
    <ScrollRestoration/>
    <Scripts/>
    </body>
    </html>
  );
}

export default function App() {
  return <Outlet/>;
}
