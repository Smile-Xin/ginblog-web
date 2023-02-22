import VueRouter from "vue-router";
import Vue from "vue";
import Admin from "../views/Admin.vue";
import Login from "../views/Login.vue";

// 管理页面组件
import Index from "../components/admin/Index.vue";
import AddArticle from "@/components/article/AddArticle";
import ArticleList from "@/components/article/ArticleList";
import CateList from "@/components/category/CateList";
import UserList from "@/components/user/UserList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    children: [
      { path: "index", component: Index },
      { path: "addArticle", component: AddArticle },
      { path: "artList", component: ArticleList },
      { path: "cateList", component: CateList },
      { path: "userList", component: UserList },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const token = window.sessionStorage.getItem("token");
  if (to.name === "login"){
    return next();
  }else{
    if(!token){
      next({ name: "login" });
    }else{
      next();
    }
  } 
});

export default router;
