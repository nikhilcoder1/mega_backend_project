import {serve} from 'bun';

serve({
    fetch(request) {
        const url = new URL(request.url);
        if (url.pathname === '/') {
            return new Response('Hello, Bun!', {
                status: 200,
                headers: {'Content-Type': 'text/plain'},
            });
        } else if (url.pathname === '/about') {  
            return new Response('About Page Bun', {
                status: 200,
                headers: {'Content-Type': 'text/plain'},
            });
        } else {
            return new Response('Not Found', {
                status: 404,
                headers: {'Content-Type': 'text/plain'},
            });
        }
    },
    port: 3000,
    hostname: '127.0.0.1' 
});