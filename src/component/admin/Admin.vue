<template>
  <div class="admin">
    <el-container>

      <!-- 左侧 -->
      <el-aside width=''>
        <!-- 左侧导航, 公共部分 -->
        <app-aside></app-aside>
      </el-aside>

      <!-- 右侧 -->
      <el-container>
        <!-- 右侧头部, 公共部分 -->
        <el-header>
          <app-header></app-header>
        </el-header>

        <!-- 右侧主体, 变化部分, 将来要通过子路由控制 -->
        <el-main>
          <app-main></app-main>
        </el-main>

      </el-container>

    </el-container>

  </div>
</template>

<script>
import Header from "./subcom/Header.vue";
import Aside from "./subcom/Aside.vue";
import Main from "./subcom/Main.vue";

export default {
  // 注册子组件
  components: {
    appHeader: Header,
    appAside: Aside,
    appMain: Main
  }
};
</script>

<style scoped lang="less">
.admin {
  height: 100%;
  color: #333;
  .el-header {
    line-height: 60px;
    background: #eee;
  }
  .el-container {
    height: 100%;
  }
  .main{
    position: relative;
  }
}
</style>