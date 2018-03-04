<template>
  <div class="list">
    <!-- 面包屑导航 -->
    <div class="list_nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>购物商城</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 操作 -->
    <section class="list_btns">
      <el-button plain size="mini" icon="el-icon-check" @click="all">全选</el-button>
      <el-button plain size="mini" icon="el-icon-plus" @click="$router.push({name:'gcta'})">新增</el-button>
      <el-button plain size="mini" icon="el-icon-delete" @click="del">删除</el-button>
      <div class="list_btns_right">
        <el-input placeholder="请输入内容" suffix-icon="el-icon-search" size="mini" v-model="apiQuery.searchvalue" @blur="searchGoodsList">
        </el-input>
      </div>
    </section>
    <!-- 内容 -->
    <section>
      <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" border style="width: 100%" @selection-change="change">
        <!-- 多选框 -->
        <el-table-column type="selection" width="55">
        </el-table-column>
        <!--  商品数据列表: prop属性为列表数据里的字段名称  template：可以放入任意HTML结构 -->
        <el-table-column label="标题">
          <template slot-scope="scope">
            <el-tooltip placement="right">
              <div slot="content"><img :src="scope.row.imgurl" :alt="scope.row.title" width="200"></div>
              <router-link style="color: #2a72c5;" :to="{name:'gcte',params:{id:scope.row.id}}">{{scope.row.title}}</router-link>
            </el-tooltip>

          </template>
        </el-table-column>
        <el-table-column prop="categoryname" label="所属类别" width="100">
        </el-table-column>
        <el-table-column prop="stock_quantity" label="库存" width="80">
        </el-table-column>
        <el-table-column prop="market_price" label="市场价" width="80">
        </el-table-column>
        <el-table-column prop="sell_price" label="销售价" width="80">
        </el-table-column>
        <el-table-column label="属性" width="120">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="轮播图" placement="bottom-start">
              <span :class="['el-icon-picture','goods_iocn',scope.row.is_slide==1?'active':'']"></span>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="置顶" placement="bottom-start">
              <span :class="['el-icon-upload active','goods_iocn',scope.row.is_top==1?'active':'']"></span>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="推荐" placement="bottom-start">
              <span :class="['el-icon-star-on','goods_iocn',scope.row.is_hot==1?'active':'']"></span>
            </el-tooltip>

          </template>
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <router-link style="color: #2a72c5;" :to="{name:'gcte',params:{id:scope.row.id}}">修改</router-link>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <!-- 分页 -->
    <div class="list_page">
      <el-pagination :total="apiQuery.total" :current-page="apiQuery.pageIndex" :page-sizes="[6, 12, 24, 48]" :page-size="apiQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange">
      </el-pagination>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      searchVal: "",
      apiQuery: {
        pageIndex: 1,
        pageSize: 6,
        searchvalue: "",
        total: 0
      },
      tableData3: [],
      delIDS: []
    };
  },
  methods: {
    //   搜索事件
    searchGoodsList() {
      this.getGoodsList();
    },
    // 获取列表
    getGoodsList() {
      let api = `${this.$api.gsList}?pageIndex=${
        this.apiQuery.pageIndex
      }&pageSize=${this.apiQuery.pageSize}&searchvalue=${
        this.apiQuery.searchvalue
      }`;
      this.$http.get(api).then(res => {
        if (res.data.status == 0) {
          this.tableData3 = res.data.message;
          this.apiQuery.total = res.data.totalcount;
        }
      });
    },
    // 全选
    all(){
      document.querySelector('.el-checkbox__original').click();
    },
    // 删除方法
    del() {
      this.$confirm("此操作将删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let ids = this.delIDS.map(v => v.id); // 提取所有被选商品的id
          this.$http.get(this.$api.gsDel + ids).then(res => {
            // 删除成功后重新获取数据进行渲染
            if (res.data.status == 0) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.getGoodsList();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    change(val) {
      this.delIDS = val;
    },
    // 页面容纳条数
    handleSizeChange(size) {
      this.apiQuery.pageSize = size;
      this.getGoodsList();
    },
    // 当前页
    handleCurrentChange(currentPage) {
      this.apiQuery.pageIndex = currentPage;
      this.getGoodsList();
    }
  },
  //   页面加载完成会执行的方法
  created() {
    this.getGoodsList();
  }
};
</script>

<style scoped lang='less'>
.list {
  padding-bottom: 20px;
  &_nav {
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
  }
  &_btns {
    margin: 20px 0;
    &_right {
      width: 200px;
      float: right;
    }
  }
  &_page {
    position: absolute;
    bottom: 0;
    background: #fff;
  }
  .goods_iocn{
    font-size: 18px;
    // color: red;
  }
  .goods_iocn.active{
    color: #000;
    font-weight: 900;
  }
}
</style>