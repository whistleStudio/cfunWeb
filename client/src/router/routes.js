const Home = ()=>import("views/home/Home")
const Product = ()=>import("views/product/Product")
const Course = ()=>import("views/course/Course")
const Activity = ()=>import("views/activity/Activity")
const Solution = ()=>import("views/solution/Solution")
const Documents = ()=>import("views/documents/Documents")
const Question = ()=>import("views/support/Question")
const Contact = ()=>import("views/support/Contact")
const Measures = ()=>import("views/support/Measures")

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/course",
    component: Course,
  },
  {
    path: "/activity",
    component: Activity
  },
  {
    path: "/solution",
    component: Solution
  },
  {
    path: "/documents",
    component: Documents
  },
  {
    path: "/support/question",
    component: Question
  },
  {
    path: "/support/contact",
    component: Contact
  },
  {
    name: "measures",
    path: "/support/measures",
    component: Measures
  }
]

export default routes