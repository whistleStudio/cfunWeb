const Home = res => require(["views/home/Home"],res)
const Product = res => require(["views/product/Product"],res)
const Course = res => require(["views/course/Course"],res)
const Activity = res => require(["views/activity/Activity"],res)
const Solution = res => require(["views/solution/Solution"],res)
const Documents = res => require(["views/documents/Documents"],res)
const Question = res => require(["views/support/Question"],res)
const Contact = res => require(["views/support/Contact"],res)
const Measures = res => require(["views/support/Measures"],res)
const Creative = res => require(["views/creative/Creative"], res)


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
  },
  {
    name: "creative",
    path: "/creative",
    component: Creative
  }
]

export default routes