<template>
       <div class="detail">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>购物商城</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 表单 -->
        <el-form ref="form" :model="form" label-width="80px" class="detail_form" label-position="left">
            <el-form-item label="内容标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="副标题">
                <el-input v-model="form.sub_title"></el-input>
            </el-form-item>
            <el-form-item label="所属类型">
                <el-select v-model="form.category_id" placeholder="请选择类型">
                    <el-option v-for="item in goodsCategory" :key="item.category_id" :label="item.title" :value="item.category_id">
                        <span>
                            <span v-if="item.class_layer != 1">|-</span>
                            <span>{{item.title}}</span>
                        </span>
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否发布">
                <el-switch v-model="form.status"></el-switch>
            </el-form-item>
            <el-form-item label="推荐类型">
                <el-switch v-model="form.is_slide" active-text="轮播图"></el-switch>
                <el-switch v-model="form.is_top" active-text="置顶"></el-switch>
                <el-switch v-model="form.is_hot" active-text="推荐"></el-switch>
            </el-form-item>
            <!-- 文件上传 -->
            <el-form-item label="上传封面">
                <el-upload class="upload-demo" action="http://localhost:8899/admin/article/uploadimg"  
                :file-list="form.imgList" 
                list-type="picture"
                :on-success="uploadImg">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="上传附件">
                <el-upload class="upload-demo" action="http://localhost:8899/admin/article/uploadimg"  :file-list="form.fileList" :on-success="uploadFile">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="商品货号">
                <el-input v-model="form.goods_no"></el-input>
            </el-form-item>
            <el-form-item label="库存数量">
                <el-input v-model="form.stock_quantity"></el-input>
            </el-form-item>
            <el-form-item label="市场价格">
                <el-input v-model="form.market_price"></el-input>
            </el-form-item>
            <el-form-item label="销售价格">
                <el-input v-model="form.sell_price"></el-input>
            </el-form-item>
            <el-form-item label="内容摘要">
                <el-input type="textarea" v-model="form.zhaiyao"></el-input>
            </el-form-item>
            <el-form-item label="详细内容" prop="content">
                <quill-editor v-model="form.content"></quill-editor>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button @click="$router.go(-1)">返回上一级</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                form:[]
            }
        }
    }
</script>

<style scoped lang="less">
.detail {
  &_form {
    margin-top: 20px;
  }
}
</style>