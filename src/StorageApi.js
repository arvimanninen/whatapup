class StorageApi {
    getCategoryItemCompleted(itemKey) {
        if(localStorage.getItem(itemKey)) {
            return Boolean(localStorage.getItem(itemKey));
        } else {
            return -1;
        }
    }
    setCategoryItemCompleted(itemKey, valueBoolean) {
        let valueInt = valueBoolean ? 1 : 0;
        localStorage.setItem(valueInt, itemKey);
    }
}
export default StorageApi;