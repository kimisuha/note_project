import { 
    createRouter,
    createWebHistory
 } from "vue-router";

 const router = [{
     part: "/",
     alias: "/contactbook",
     name: "contactbook",
     component: () => import ("../view/contacbook")
 }];

 const router = createRouter({
     history: createWebHistory(),
     routes
 });

 export default router;