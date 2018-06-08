class StorageApi {
    getCategoryItemData(itemKey) {
        if(localStorage.getItem(itemKey)) {
            let itemCompleted = Boolean(localStorage.getItem(itemKey));
            return localStorage.getItem(itemKey);
        }
    }
    setCategoryItemData(itemKey, value) {
        localStorage.setItem(itemKey, JSON.stringify(value));
    }
}