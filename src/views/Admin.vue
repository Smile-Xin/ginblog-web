<template>
  <el-container>

    <el-header>
      <Header></Header>
    </el-header>

    <el-container>
      <Nav></Nav>
      <el-main><router-view></router-view></el-main>
    </el-container>

    <el-footer><Footer></Footer></el-footer>

  </el-container>
</template>

<script>
import Footer from '@/components/admin/Footer'
import Header from '@/components/admin/Header'
import router from '@/router'
import Nav from '@/components/admin/Nav.vue'
export default {

  components:{Footer, Nav, Header},
 

}
</script>

<style scope>
.blog{
  width: 150px;
  /* background-color: #626973; */

}

 body > .el-container {
    height: 100%;
    /* margin-bottom: 40px; */
  }
 
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 200px;
  }
  



  .el-header {
    background-color: #B3C0D1;
  }

   
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>