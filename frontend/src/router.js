import { createRouter, createWebHistory } from "vue-router"
import DefaultLayout from "./components/layouts/DefaultLayout.vue"
import Home from "./pages/Home.vue"
import MyImage from "./pages/MyImage.vue"
import Notfound from "./pages/Notfound.vue"
import Login from "./pages/auth/Login.vue"
import Signup from "./pages/auth/Signup.vue"
import Profile from "./pages/Profile.vue"
import useUserStore from "./store/user.js"
import ForgotPassword from "./pages/auth/ForgotPassword.vue"

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "/", name: "Home", component: Home },
      { path: "/images", name: "MyImages", component: MyImage },
      { path: "/profile", name: "Profile", component: Profile },
    ],
    beforeEnter: async (to, from, next) => {
      try {
        const userStore = useUserStore()
        await userStore.fetchUser()
        next()
      } catch (error) {
        next({ name: "Login" }) // Cancel navigation if data fetching fails
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
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
