/**
 * Collections
 */

import { getData, getCookie } from './utils';

class Collections {

    constructor() {
        this.objectIDs = [];
        this.savedItems = [];
        this.loading = false;
        this.hasErorr = false;
    };

    init(url, start, limit = 1, page) {
        this.loading = true;

        if(page === 'gallery') {
            let savedItemsIds = getCookie('objectIDs');
            savedItemsIds ? savedItemsIds = JSON.parse(savedItemsIds) : savedItemsIds = [];
            this.loading = false;
            return new Promise(function(resolve, reject){
                resolve(savedItemsIds);
            })
        }

        let galleryObjects = getData(url).then(objects => {
            this.loading = false;

            if(!objects.objectIDs) {
                this.hasErorr = true;
                return;
            }

            return this.objectIDs = objects?.objectIDs.slice(start, start+limit);

        });

        return galleryObjects;
    };

    getItemDetails(url, objectID) {
        let galleryItem = getData(`${url}/${objectID}`).then(item => {
            return item;
        });

        return galleryItem;
    }

};

export default Collections;
