<template>
    <div class="login">
        <section>
            <!-- model用来设置表单所有字段, rules用来设置表单校验规则的(可省略, 但是如果需要表单校验功能, 必须写)  -->
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <!-- label用来设置表单提示文字, prop用来指定当前表单代表的字段名(可省略, 但是如果需要表单校验与重置功能, 必须写) -->
                <el-form-item label="用户名" prop="uname">
                    <!-- v-model双向数据绑定, 需要绑定data里的数据, 将来要把这些数据提交给后端 -->
                    <el-input type="text" v-model="ruleForm2.uname" auto-complete="off" ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="upwd">
                    <el-input type="password" v-model="ruleForm2.upwd" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>

</template>

<script>
export default {
  data() {
    // var validatePass2 = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("请再次输入密码"));
    //   } else if (value !== this.ruleForm2.pass) {
    //     callback(new Error("两次输入密码不一致!"));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      ruleForm2: {
        uname: "admin",
        upwd: "123456"
      },
      rules2: {
        uname: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        upwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
        // post请求的第二个参数是发送的数据, 这里直接把data里的表单对象传过去
        this.$http.post(this.$api.login,this.ruleForm2).then((res)=>{
            if(res.data.status==0){
                this.$alert('登录成功','提示',{
                    callback:()=>{
                        localStorage.setItem('uname',res.data.message.uname)
                        // 登录成功，页面跳转
                        this.$router.push({path:this.$route.query.next || "/admin"})
                    }
                })
            }else{
                this.$alert(res.data.message)
            }
        })
        // console.log(this.ruleForm2);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        } else {
          this.$alert('账号或密码不合格!','提示')
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped lang="less">
.login {
  background: aqua;
  height: 100%;
  section {
    padding: 60px;
    width: 400px;
    height: 200px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid #fff;
  }
}
</style>