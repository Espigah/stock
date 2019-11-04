export default (promiseList) => {
    console.log("[awating]", promiseList.length);
    return new Promise((resolve, reject) => {
        let hasSuccess = false;
        let resultList = [];
        promiseList.map((promise) => {
            promise.then(success).catch(error)
        })


        function success(data) {
            hasSuccess = true;
            add(data);
            return data;
        }

        function error(data) {
            add(data)
            return Promise.reject(data);
        }

        function add(data) {
            resultList.push(data)
            complete();
        }

        function complete() {
            console.log("[awating]", resultList, ",", promiseList);
            if (resultList.length !== promiseList.length) {
                return
            }

            hasSuccess ? resolve(resultList) : reject(resultList);
        }
    })



}