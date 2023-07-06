import { reactive, watchEffect, computed } from 'vue'
import { getTableData } from "../api"
export default function (searchCondition) {
    const companyData = reactive({
        total: 0,
        dataList: []
    })
    watchEffect(async () => {
        const res = await getTableData(searchCondition)
        companyData.dataList = res.data.list;
        companyData.total = res.data.total;
    })
    
    return {
        companyData,
    }
}