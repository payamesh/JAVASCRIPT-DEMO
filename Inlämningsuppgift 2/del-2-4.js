let hiss = {
    plan: 0,
    goTo: function(plan) {
        this.plan = plan;
        console.log("hissen åker till plan:  " + plan);


    },
    where: function(plan) {
        console.log("du är på plan: " + this.plan);

    }

};

hiss.goTo(4);
console.log(hiss.plan);
hiss.where();

/* function goTo(plan) {
    hiss.plan = plan;
    console.log("hissen åker till plan:  " + plan);
}
goTo(2); 

function where(plan) {
    console.log("du är på plan: " + plan);
}
where(hiss.plan);*/