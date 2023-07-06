<script setup>
import { ArrowDown, ArrowUp } from "@element-plus/icons-vue";
const { conditionList, searchCondition } = defineProps(["conditionList", "searchCondition"]);
const emit = defineEmits("handleCondition", "handleOpen")
</script>
<template>
  <div class="condition_box">
    <div class="" v-for="(item, i) in conditionList" v-show="item.list.length !== 0" :key="item.label">
      <div class="condition" :style="{ height: item.isOpen ? 'auto' : '40px' }">
        <p class="condition_label">{{ item.label }}:</p>
        <div class="condition_list">
          <p class="condition_item" v-for="c in item.list" :key="c.id"
            :class="{ selected: c.id === searchCondition[item.searchKey] }"
            @click="emit(`handleCondition`, item.searchKey, c)">
            {{ c.name }}
          </p>
        </div>
        <div class="condition_switch" @click="emit('handleOpen', i, !item.isOpen)">
          <div v-if="!item.isOpen">
            <p class="more">更多</p>
            <el-icon>
              <ArrowDown />
            </el-icon>
          </div>
          <div v-else>
            <p class="more">收起</p>
            <el-icon>
              <ArrowUp />
            </el-icon>
          </div>
        </div>
      </div>
      <div class="divider" v-if="i < conditionList.length-1"></div>

    </div>
  </div>
</template>
<style scoped>
.condition_box {
  width: 100%;
  padding: 0 20px;
  margin-bottom: 30px;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-sizing: border-box;

}

.condition {
  display: flex;
  overflow: hidden;
  margin-bottom: 10px;
  height: 40px;
}

.condition_label {
  width: 120px;
  line-height: 30px;
  padding-left: 10px;
  margin-top: 10px;
  color: #909399;
  font-size: 14px;
}

.condition_list {
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-right: 74px;
}

.condition_switch>div {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 48px;
  height: 30px;
  margin-top: 10px;
  color: #3473e6;
}

.condition_item {
  cursor: pointer;
  line-height: 20px;
  padding: 5px 10px;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 2px;
  color: #303133;
}

.condition_item.selected,
.condition_item:hover {
  color: #fff;
  background-color: #3473e6;
}

.divider {
  width: 100%;
  height: 1px;
  border-top: 1px dashed #dcdfe6;
}
</style>

