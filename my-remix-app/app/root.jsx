import {

  LiveReload,

  Outlet,
  Links,

} from '@remix-run/react';
import globalStylesUrl from '~/styles/global.css';
export let links = () => {
  return [
    { rel: 'stylesheet', href: globalStylesUrl },
  ];
};
export default function App({children}) {
  return (
    <html lang="en">
    <head>
      <Links />
    </head>
      <body>
        <Outlet />

        <LiveReload />
        {children}
      </body>
    </html>
  );
}
