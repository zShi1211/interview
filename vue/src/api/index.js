import axios from 'axios'

axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export function getLadderList() {
    return axios.get("api/admin/api/v1/service_type/ladderlist", {
    })
}

export function getTechnicalList() {
    return axios.get("api/api/v1/technical/list", {
    })
}

export function getTableData(searchCondition) {
    return axios.get("api/api/v1/service/list", {
        params: searchCondition
    })
}