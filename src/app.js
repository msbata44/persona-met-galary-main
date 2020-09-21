import './scss/styles.scss';

import Collection from './js/collection';
import PersonalGallery from './js/personal';

let gridContainer = null;
const loader = document.querySelector('#loader');
const alert = document.querySelector('#alert');

const resource = 'https://collectionapi.metmuseum.org/public/collection/v1/objects'

const App = (page) => {

    const MetGallery = new Collection();

    loader.setAttribute('style', 'display:block');
    gridContainer.setAttribute('style', 'display:none');

    /**
     * Master Gallery init,
     * Get 25 items from Met Museum API
     */
    MetGallery.init(resource, 2500, 25, page).then(items => {

        let loading = MetGallery.loading;
        let error = MetGallery.hasErorr;

        if(error) {
            alert.setAttribute('style', 'display:block');
            loader.setAttribute('style', 'display:none');
            gridContainer.setAttribute('style', 'display:none');
            return;
        }

        if(loading) {
            loader.setAttribute('style', 'display:block');
            gridContainer.setAttribute('style', 'display:none');
        } else {
            loader.setAttribute('style', 'display:none');
            gridContainer.setAttribute('style', 'display:grid');
        }

        const galleryObjectIds = items;

        /**
         * Get gallery item details
         */
        galleryObjectIds.forEach(item => {

            MetGallery.getItemDetails(resource, item).then(gallery => {
                const listItem = `<li class="met-gallery-item">
                    <figure class="met-gallery-pic">
                        <img src="${gallery.primaryImageSmall !== "" ? gallery.primaryImageSmall : `./images/placeholder.png` }" alt="${gallery.title}">
                        <button type="button" data-objectId="${gallery.objectID}" class="met-gallery-save btnSave">Add to gallery</button>
                    </figure>
                    <h3 class="met-gallery-title">${gallery.title}</h3>
                    <div class="met-gallery-info">
                        <span class="have-icon have-icon-artist met-gallery-artist">${gallery.artistDisplayName !== "" ? gallery.artistDisplayName : "Artist info not available"}</span>
                        <a href="${gallery.objectURL}" class="have-icon have-icon-view met-gallery-view" target="_blank" rel="noopener noreferrer">view</a>
                    </div>
                </li>`;

                gridContainer.innerHTML += listItem;
            });

        });

    });
}


document.addEventListener('DOMContentLoaded', function () {
    const page = window?.__MetPage__;

    switch (page) {
        case 'home':
            gridContainer = document.querySelector('#collection');
            break;

        case 'gallery':
            gridContainer = document.querySelector('#savedItems');
            break;

        default:
            break;

    }

    App(page);

    const MyPersonalGallery = new PersonalGallery();
    MyPersonalGallery.init(gridContainer);

});
