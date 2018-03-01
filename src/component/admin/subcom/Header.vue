<template>
    <div class="header">
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                您好，{{uname}}
                <i class="el-icon-arrow-down el-icon--right"></i>
                功能
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">修改密码</el-dropdown-item>
                <el-dropdown-item command="b">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
  data() {
    return {
      uname: localStorage.getItem("uname")
    };
  },

  methods: {
    logout() {
      this.$http.get(this.$api.logout).then(res => {
        console.log(res);
        if (res.data.status == 0) {
          this.$router.push({ name: "login" });
        } else {
          this.$alert(res.data.message);
        }
      });
    },
    handleCommand(command) {
      if (command == "b") {
        //   console.log(111);
        this.logout();
      }
    }
  }
};
</script>

<style scoped lang='less'>
.header {
  text-align: right;
  // background: #267cb7;
}
</style>