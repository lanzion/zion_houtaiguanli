import GoodsContentList from "../component/admin/goods/content/GoodsContentList.vue";
import GoodsContentAdd from "../component/admin/goods/content/GoodsContentAdd.vue";
import GoodsContentEdit from "../component/admin/goods/content/GoodsContentEdit.vue";
import goodsCategoryList from "../component/admin/goods/category/goodsCategoryList.vue";
import goodsCategoryAdd from "../component/admin/goods/category/goodsCategoryAdd.vue";
import goodsCategoryEdit from "../component/admin/goods/category/goodsCategoryEdit.vue";
import GoodsCommentList from "../component/admin/goods/comment/GoodsCommentList.vue";
import GoodsCommentEdit from "../component/admin/goods/comment/GoodsCommentEdit.vue";


module.exports = [
    // 商品管理
    { name: "gctl", path: "goods/content/list", component: GoodsContentList },
    { name: "gcta", path: "goods/content/add", component: GoodsContentAdd },
    { name: "gcte", path: "goods/content/edit/:id", component: GoodsContentEdit },

    // 商品分类管理
    { name: "gcgl", path: "goods/category/list", component: goodsCategoryList },
    { name: "gcga", path: "goods/category/add", component: goodsCategoryAdd },
    { name: "gcge", path: "goods/category/edit/:id", component: goodsCategoryEdit },

    // 商品评论管理
    { name: "gcml", path: "goods/comment/list", component: GoodsCommentList },
    { name: "gcme", path: "goods/comment/edit", component: GoodsCommentEdit },
];