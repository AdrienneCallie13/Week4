var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        seen: true,
        groceries: [
            { name: 'Bread' },
            { name: 'Milk' },
            { name: 'Butter' },
            { name: 'Snacks' },
        ]
    }
})

new Vue({
    el: '#app',
    data: {
        isNinja: true
    }
});
