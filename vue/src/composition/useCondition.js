import { ref, reactive, watchEffect, computed } from 'vue';
import { getLadderList, getTechnicalList } from "@/api"
import origin from "@/data/origin"
import province from "@/data/province"
export default function () {
    const conditionList = reactive([
        {
            label: "服务类型",
            list: [],
            searchKey: "serviceTypeId",
            isOpen: false
        },
        {
            label: "二级菜单",
            list: [],
            searchKey: "serviceTypeId2",
            isOpen: false
        },
        {
            label: "技术领域",
            list: [],
            searchKey: "technicalId",
            isOpen: false
        },
        {
            ...origin,
            list: addInfinity(origin.list),
            searchKey: "dataOrigin",
            isOpen: false
        },
        {
            ...province,
            list: addInfinity(province.list),
            searchKey: "province",
            isOpen: false
        },

    ])

    const searchCondition = reactive({
        pageNum: 1,
        pageSize: 10,
        keywords: "",
        serviceTypeId: "",
        serviceTypeId2: "",
        technicalId: "",
        province: "",
        dataOrigin: "",
        logicStatus: 1
    })

    watchEffect(async () => {
        const ladder = await getLadderList()
        const technical = await getTechnicalList()
        conditionList[0].list = addInfinity(ladder.data);
        conditionList[2].list = addInfinity(technical.data.list);
    })

    function handleCondition(k, v) {
        searchCondition[k] = v.id;
        if (k === "serviceTypeId") {
            if (v.id !== "") {
                conditionList[1].list = v.children;
            } else {
                conditionList[1].list = [];
                searchCondition.serviceTypeId2 = '';
            }
        }
    }

    function handleOpen(i, v) {
        conditionList[i].isOpen = v;
    }

    return {
        conditionList,
        searchCondition,
        handleCondition,
        handleOpen
    }
}

function addInfinity(arr) {
    return [{ id: "", name: "不限" }, ...arr]
}