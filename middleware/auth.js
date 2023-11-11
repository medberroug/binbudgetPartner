export default function ({ app, route, redirect }) {
    if (route.path !== '/') {
        if (!app.$localController('get', { key: "authData" })) {
            return redirect('/');
        } else {
            console.log(app.$localController('get', { key: "authData" }));
        }
    } if (route.path === '/') {
        if (app.$localController('get', { key: "authData" })) {
            return redirect('/app');
        }
    }

}