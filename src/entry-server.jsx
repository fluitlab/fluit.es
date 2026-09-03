import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { AppShell } from './App';

export const render = (path) =>
    renderToString(
        <StaticRouter location={path}>
            <AppShell />
        </StaticRouter>
    );
