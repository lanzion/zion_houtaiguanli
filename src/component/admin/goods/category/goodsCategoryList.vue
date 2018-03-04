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
        <!-- 操作按钮 -->
        <section class="list_btns">
            <el-button plain size="mini" icon="el-icon-check" @click="all">全选</el-button>
            <el-button plain size="mini" icon="el-icon-plus" @click="$router.push({name:'gcga'})">新增</el-button>
        </section>
        <!-- 表格 -->
        <el-table ref="multipleTable" border :data="tableData3" tooltip-effect="dark" style="width: 100%">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="编号" width="120">
                <template slot-scope="scope">{{ scope.row.category_id }}</template>
            </el-table-column>
            <el-table-column label="类别名称">
                <template slot-scope="scope">
                    <span>
                        <span v-if="scope.row.class_layer !=1"> &nbsp;&nbsp;|-</span>
                        <span>{{ scope.row.title }}</span>
                    </span>

                </template>
            </el-table-column>
            <el-table-column prop="sort_id" label="序列号" width="120">
            </el-table-column>
            <el-table-column prop="class_layer" label="层级" width="120">
            </el-table-column>
            <el-table-column label="操作" width="120">
                <template slot-scope="scope">
                    <router-link :to="{name:'gcga'}">添加子类</router-link>
                    <router-link :to="{name:'gcge',params:{id:scope.row.category_id}}">修改</router-link>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: []
    };
  },
  methods: {
    //   获取列表数据
    getgoodsCategoryList() {
      this.$http.get(this.$api.ctList + "goods").then(res => {
        // console.log(res);
        if (res.status == 200) {
          // 获取数据成功
          this.tableData3 = res.data.message;
        }
      });
    },
    // 全选功能
    all() {
      document.querySelector(".el-checkbox__original").click();
    },
   
  },
  //页面加载完成执行
  created() {
    this.getgoodsCategoryList();
  }
};
</script>

<style scoped lang="less">
.list {
  &_nav {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  &_btns {
    margin: 20px 0;
  }
  a {
    color: #2a72c5;
  }
}
</style>