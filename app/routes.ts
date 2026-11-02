import { type RouteConfig, index,prefix,layout,route } from "@react-router/dev/routes";
export default [
    layout("./routes/layout/layout.user.tsx", [
        index("./shop/shop.tsx"),
        ...prefix("authentication", [
            route("login","./login/login.tsx"),
            route("register","./register/register.tsx"),
        ])
    ]),
] satisfies RouteConfig;    