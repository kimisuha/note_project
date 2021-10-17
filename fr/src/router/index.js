import {
    createRouter,
    createWebHistory
} from "vue-router";

const router = [{
    part: "/",
    alias: "/contactbook",
    name: "contactbook",
    component: () => import("../view/contacbook")
},
{
    path: "/contact:id",
    name: "editcontact",
    component: () => import("../view/contactEdit")
}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;