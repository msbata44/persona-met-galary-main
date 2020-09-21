/**
 * Personal Gallery
 */

import { getCookie, setCookie } from './utils';

class PersonalGallery {
    constructor(){
        count: 0
        this.counterElm = document.querySelector('#savedCounter');
        this.saveBtn = document.querySelector('.btnSave');
    }

    init(gridContainer){
        const existingIDs = this.parseSavedIDs();

        this.counterElm.innerText = existingIDs.length;
        this.toggleSaveBtn();

        gridContainer.addEventListener('click', (e) => {
            if(e.target.classList.contains('btnSave')) {
                this.saveItems(e.target);
            }
        });
    }

    parseSavedIDs() {
        let existingIDs = getCookie('objectIDs');
        existingIDs ? existingIDs = JSON.parse(existingIDs) : existingIDs = [];
        return existingIDs;
    }

    toggleSaveBtn() {
        const existingIDs = this.parseSavedIDs();
        if(existingIDs.length < 5) {
            return false;
        }

        const styles = document.createElement('style');
        styles.setAttribute('id', 'btnSaveToggle');
        styles.innerHTML = `.btnSave{display:none}`;

        if(existingIDs.length >= 5) {
            document.head.appendChild(styles);
        } else {
            document.head.removeChild(styles);
        }
    }

    saveItems(item) {
        const existingIDs = this.parseSavedIDs();
        const objectID = item?.dataset.objectid;

        existingIDs.push(objectID);

        setCookie('objectIDs', JSON.stringify(existingIDs))
        this.counterElm.innerText = existingIDs.length;
        this.toggleSaveBtn();
    }
}

export default PersonalGallery;
