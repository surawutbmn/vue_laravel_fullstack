import { createRouter, createWebHistory } from "vue-router"
import DefaultLayout from "./src/components/DefaultLayout.vue"
import Home from "./src/pages/Home.vue"
import MyImage from "./src/pages/MyImage.vue"
import Notfound from "./src/pages/Notfound.vue"
import Login from "./src/pages/Login.vue"
import Signup from "./src/pages/Signup.vue"
import Profile from "./src/pages/Profile.vue"

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "/", name: "Home", component: Home },
      { path: "/images", name: "MyImages", component: MyImage },
      { path: "/profile", name: "Profile", component: Profile },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Notfound",
    component: Notfound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
