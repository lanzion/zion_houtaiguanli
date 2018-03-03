<template>
  <div class="aside">
    <div class="toggle">
      <el-button @click="toggle">
        <i :class="isIcon"></i>
      </el-button>

    </div>

    <el-menu  class="el-menu-vertical-demo " background-color='#267cb7' unique-opened  :collapse="isCollapse" text-color="#fff">

      <el-submenu v-for="item in menu" :key="item.title" :index="item.title">

        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">{{ item.title }}</span>
        </template>

        <el-menu-item-group class="menu_list" v-for="subItem in item.submenu" :key="subItem.text" :index="subItem.text">
          <router-link :to="subItem.path">
            <i class="el-icon-document"></i>
            <span>{{ subItem.text }}</span>
          </router-link>
        </el-menu-item-group>

      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isIcon: "el-icon-d-arrow-left",
      isCollapse: false,
      menu: [
        {
          title: "学员问题",
          submenu: [
            { text: "内容管理", path: "/" },
            { text: "类别管理", path: "/" },
            { text: "评论管理", path: "/" }
          ]
        },
        {
          title: "前端技术",
          submenu: [
            { text: "内容管理", path: "/" },
            { text: "类别管理", path: "/" },
            { text: "评论管理", path: "/" }
          ]
        },
        {
          title: "难点答疑",
          submenu: [
            { text: "内容管理", path: "/" },
            { text: "类别管理", path: "/" },
            { text: "评论管理", path: "/" }
          ]
        },
        {
          title: "资源下载",
          submenu: [
            { text: "内容管理", path: "/" },
            { text: "类别管理", path: "/" },
            { text: "评论管理", path: "/" }
          ]
        },
        {
          title: "商品管理",
          submenu: [
            { text: "内容管理", path: "/admin/goods/content/list" },
            { text: "类别管理", path: "/admin/goods/category/list" },
            { text: "评论管理", path: "/admin/goods/comment/list" }
          ]
        },
        {
          title: "订单管理",
          submenu: [{ text: "订单列表", path: "/" }]
        }
      ]
    };
  },
  methods: {
    toggle() {
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse) {
        this.isIcon = "el-icon-d-arrow-right";
      } else {
        this.isIcon = "el-icon-d-arrow-left";
      }
    },
   
  }
};
</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.aside {
  overflow: hidden;
  height: 100%;
  min-height: 500px;
  i {
    color: #fff !important;
  }

  .el-menu-vertical-demo {
    height: 100%;
  }

}
.menu_list {
  text-align: center;
  a {
    color: #fff;
    text-decoration: none;
  }
}
.toggle {
  height: 60px;
  background: #267cb7;
  text-align: right;
  .el-button {
    background: #267cb7;
    font-size: 26px;
    border: none;
  }
}
</style>