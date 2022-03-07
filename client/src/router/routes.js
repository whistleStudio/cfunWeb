const Home = ()=>import("views/home/Home")

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  }
]

export default routes