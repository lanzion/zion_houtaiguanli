<template>
    <div class="list">
        <!-- 面包屑导航 -->
        <div class="list_nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>购物商城</el-breadcrumb-item>
                <el-breadcrumb-item>类别管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="list_form">
            <el-form ref="form" :model="form" label-width="80px" label-position="left">
                <el-form-item label="所属类型">
                    <el-select v-model="form.category_id" placeholder="请选择父级">
                        <el-option v-for="item in goodsCategory" :key="item.category_id" :label="item.title" :value="item.category_id">
                            <span>
                                <span v-if="item.class_layer != 1">|-</span>
                                <span>{{item.title}}</span>
                            </span>
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="分类名称">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="序列号">
                    <el-input v-model="form.sort_id"></el-input>
                </el-form-item>
                <el-form-item label="层级">
                    <el-input v-model="form.class_layer"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交保存</el-button>
                    <el-button @click="$router.go(-1)">返回上一级</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      goodsCategory: []
    };
  },
  methods: {
    //   获取分类数据
    getCategory() {
      this.$http.get(this.$api.ctList + "goods").then(res => {
        if (res.data.status == 0) {
          this.goodsCategory = res.data.message;
        }
      });
    },
    // 提交
    onSubmit() {
        console.log(this.form);
        this.form.class_layer=+this.form.class_layer
        this.form.sort_id=+this.form.sort_id
        this.$http.post(this.$api.ctAdd+'goods',this.form).then(res=>{
            if(res.data.status==0){
                this.$alert(res.data.message)
            }else{
                this.$alert(res.data.message)
            }
        })
    }
  },
  created () {
      this.getCategory()
  }
};
</script>

<style scoped lang="less">
.list {
  &_nav {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  &_form {
    //   width: 200px;
    .el-input {
      width: 200px;
    }
  }
}
</style>