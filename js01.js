console.log("load up successfully")

const app = Vue.createApp({
    //data , function ---.
    //template : '<h2>I am template in js</h2>', //overrun on html,
    data(){
        return{
            title : 'use return() to indicate data<br> as you see it show pure text',
            data2 : 123,
            data3 : 23
        }
    },
    methods : {
        decreaseFunc(){
            // data2 --
            this.data2--;
        },
        changetitle(title){
            this.title = title
        }
    }
})

app.mount('#app')

const app2 = Vue.createApp({
    data(){
        return{
            showTF : true
        }
    },
    methods:{
        changeTF(){
            this.showTF = !this.showTF
        }
    }
})

app2.mount('#app2')