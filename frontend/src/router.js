import { createRouter, createWebHistory } from "vue-router"
import DefaultLayout from "./components/DefaultLayout.vue"
import Home from "./pages/Home.vue"
import MyImage from "./pages/MyImage.vue"
import Notfound from "./pages/Notfound.vue"
import Login from "./pages/Login.vue"
import Signup from "./pages/Signup.vue"
import Profile from "./pages/Profile.vue"
import useUserStore from "./store/user.js"

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
