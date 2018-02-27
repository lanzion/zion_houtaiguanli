<template>
    <div>
        {{val}}
        <!-- 根组件路由占位, 将来通过url来控制页面的展示 -->
        <router-view></router-view>
        <!-- <el-switch
            v-model="nian"
            active-text="去年"
            inactive-text="今年">
        </el-switch> -->
    </div>
</template>

<script>
export default {
  data() {
    return {
        val:'vue',
        //  nian: true
    };
  }
};
</script>

<style scoped>

</style>


