const baseUrl = '/page_test/'

const app = new Vue({
    el: '#app',
    data: {
        items: []
    },
    methods: {
        populateItems: async function() {
            let url = baseUrl + 'index.json'
            let items = await fetch(url).then(x => x.json());
            for (let item of items) {
                let data = await fetch(baseUrl + item).then(x => x.json());
                this.items.push(data);
                console.log(data);
            }
        }
    },
    created() {
        this.populateItems();
    }
})