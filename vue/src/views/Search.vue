<script setup>
import Nav from "@/components/Nav.vue";
import ConditionSelect from "@/components/ConditionSelect.vue";
import { Search } from "@element-plus/icons-vue";
import useCondition from "@/composition/useCondition";
import useTable from "../composition/useTable";
import { ref } from 'vue'
const { conditionList, searchCondition, handleCondition, handleOpen } = useCondition();
const { companyData } = useTable(searchCondition);
const keywords = ref('')

</script>
<template>
  <Nav />
  <div class="search_wrapper">
    <div class="search_main">
      <!-- 搜索框 -->
      <div class="panel_header">
        <div class="title_box">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAVCAYAAABc6S4mAAAABHNCSVQICAgIfAhkiAAAAUhJREFUOE/tlL9Kw1AYxc9JCyIodLKLID5Bi6MI/kFdipgOtmP7JtY3SUd1aKR1UdEO4ijtE4jgUqeCgghJjyRaiMQ0qVJcmuly8/vOuTn3y0ckeMyGMjPpQUVE1cMpWO+OUbeL7MeVcxRQasoE3ApJ8ydOkk0jZR0XeBalEzI4OFeeGlQgVElk4k7ovZfQB2GJRv20wE6wxjcIRkAgn0Q0ihHQCUbIcsuxAe7/RTTSzIuw3HI1CfGhZugOSk23RuLwK9ujk71UzVuPux8yuO4pR8C8un8rPvWcnN+OjvvIgR58M4PLSqeWRu0vZtPd7ZXZhgB7K8uuzw6dbp7ldY51cfuCy7vXX6W2szqH3bV5T7W6ucD61CAU4zSi2M7634gm/qMNv3/ckRDFfxsVQSg26ISABH+O8VNc6wA3EtYmxNQW2Z74uP4A+kAQbn8IYmUAAAAASUVORK5CYII="
            style="margin-right: 16px" />
          <p class="header_label">资源大厅</p>
        </div>
        <div class="search_box">
          <el-input placeholder="请输入资源名称或用户名搜索" v-model="keywords">
            <template #append>
              <el-button :icon="Search" type="primary" @click="() => {
                searchCondition.keywords = keywords
              }">搜索</el-button>
            </template>
          </el-input>
        </div>
      </div>
      <!-- 分类 -->
      <div class="panel_tabs">
        <div class="tabs_item active">服务</div>
        <div class="tabs_item">需求</div>
        <div class="tabs_item">科创资源</div>
      </div>
      <!-- 条件选择 -->
      <div class="condition_wrapper">
        <ConditionSelect :conditionList="conditionList" :searchCondition="searchCondition"
          @handleCondition="handleCondition" @handleOpen="handleOpen" />
      </div>
      <!-- 表格 -->
      <div class="table_wrapper">
        <el-table :data="companyData.dataList" style="width: 100%">
          <el-table-column label="服务名称" width="295">
            <template #default="scope">
              <div>
                <p>
                  {{ scope.row.title }}
                </p>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="发布用户" width="370">
            <template #default="scope">
              <div class="companyName">
                <img
                  :src="scope.row.avatarUrl ? scope.row.avatarUrl : 'https://test.nttcc.com.cn/_nuxt/img/default_avatar.442622a.png'"
                  alt="" class="avatar">
                <p>
                  {{ scope.row.orgName }}
                </p>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="服务类型" width="204">
            <template #default="scope">
              <p style="font-weight: 100;">
                {{ scope.row.serviceTypeName }}
              </p>
            </template>
          </el-table-column>
          <el-table-column label="成功成交数" width="134">
            <template #default="scope">
              <p style="color:#f1b221">
                {{ scope.row.totalDeal }}
              </p>
            </template>
          </el-table-column>
          <el-table-column label="信用评价" width="134">
            <template #default="scope">
              <p style="color:#3473e6">
                {{ scope.row.avgScore }}
              </p>
            </template>
          </el-table-column>
        </el-table>

      </div>
      <!-- 分页控件 -->
      <div class="pagination">
        <el-pagination v-model:current-page="searchCondition.pageNum" v-model:page-size="searchCondition.pageSize"
          layout="prev, pager, next, jumper" :total="companyData.total" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.search_wrapper {
  background-color: #f6f7f8;
  padding: 30px 0;
  width: 100%;
}

.search_main {
  padding: 30px;
  background: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  overflow: auto;
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
}

.panel_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
}

.title_box {
  display: flex;
  height: 22px;
  align-items: center;
}

.search_box {
  width: 540px;
  height: 40px;
}

.search_box .el-input-group {
  height: 100%;
}

.panel_tabs {
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 30px;
  margin-bottom: 10px;
  background: #f7f8f9;
  border-radius: 4px;
  box-sizing: border-box;
}

.panel_tabs .tabs_item {
  position: relative;
  cursor: pointer;
  line-height: 20px;
  padding: 14px 6px;
  color: #303133;
  font-size: 14px;
  font-weight: 700;
}

.panel_tabs .tabs_item:not(:last-child) {
  margin-right: 120px;
}

.panel_tabs .tabs_item.active {
  color: #3473e6;
}

.panel_tabs .tabs_item::after {
  position: absolute;
  content: "";
  left: 50%;
  bottom: 8px;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: #3473e6;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.panel_tabs .tabs_item.active::after,
.panel_tabs .tabs_item:hover::after {
  width: 100%;
}

.condition_wrapper {
  width: 100%;
}

.table_wrapper {
  font-weight: 700;
}

.avatar {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 20px;
}

.companyName {
  display: flex;
  align-items: center;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
