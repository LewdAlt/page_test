const baseUrl = '/page_test/'

const app = new Vue({
    el: '#app',
    data: {
        items: [],
        categories: ['all'],
        chosenCategory: 'all'
    },
    computed: {
        shownItems: function() {
            return this.items.filter(x => this.chosenCategory === 'all' || x.category === this.chosenCategory);
        }
    },
    methods: {
        populateItems: async function() {
            let url = baseUrl + 'index.json'
            let items = await fetch(url).then(x => x.json());
            for (let item of items) {
                let data = await fetch(baseUrl + item).then(x => x.json());
                this.items.push(data);
                if(!this.categories.includes(data.category)){
                    this.categories.push(data.category);
                }
                console.log(data);
            }
        }
    },
    created() {
        this.populateItems();
    }
})