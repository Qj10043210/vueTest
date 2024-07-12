const app = Vue.createApp({
    data(){
        return{
            url : 'https://google.com',
            books : [
                {title : 'nameabc', author : 'athor1', img:'assets/0100.png', isFav:true},
                {title : 'nameabd', author : 'athor2', img:'assets/0200.png', isFav:true},
                {title : 'nameaddd', author : 'athor3', img:'assets/0300.png', isFav:false},
            ]
        }
    },
    methods : {
        changeFav(e){
            e.isFav = !e.isFav;
        }
    },
    computed : {
        filteredBooks(){
            //return 'ehll'
            return this.books.filter(
                (book)=> book.isFav
            )
        }
    }
})

app.mount('#app')