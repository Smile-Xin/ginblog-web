<template>
  <el-aside width="150px">
    <el-row class="tac">
      <el-menu
        default-active="1"
        router=""
        mode="vertical"
        class="el-menu-vertical-demo"
        background-color="#d3dce6"
        text-color="#282c34"
        active-text-color="#004d40"
      >
        <!-- 第一个标签  仪表盘 -->
        <el-menu-item index="index" route="index">
          <template slot="title">
            <i class="el-icon-pie-chart"></i>
            <span>仪表盘</span>
          </template>
        </el-menu-item>

          <!-- 第一个标签分类  文章管理 -->
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-folder-opened"></i>
            <span>文章管理</span>
          </template>

          <!-- 第二个标签 添加文章-->
          <el-menu-item index="2-1" route="addArticle">
            <i class="el-icon-edit"></i>
            <span>写文章</span>
          </el-menu-item>
          <!-- 第三个标签  文章列表 -->
          <el-menu-item index="2-2" route="artList">
            <i class="el-icon-document-copy"></i>
            <span>文章列表</span>
          </el-menu-item>
        </el-submenu>

        <!-- 第二个大标签（第四个标签） 文章分类 -->
        <el-menu-item index="3" route="cateList">
          <i class="el-icon-menu"></i>
          <span slot="title">文章分类</span>
        </el-menu-item>
        <!-- 第三个大标签（第五个标签） 用户列表  -->
        <el-menu-item index="4" route="userList">
          <i class="el-icon-document"></i>
          <span slot="title">用户列表</span>
        </el-menu-item>
      </el-menu>
    </el-row>
  </el-aside>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";
export default {};
</script>

<style></style>
