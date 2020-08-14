function Person(name: string) {
    this.name = name;

    this.welcome = function() {
        console.log(`${name} says hi!`);
    }
}

function Engineer(name: string, job: string ) {
    Person.apply(this, arguments);
    this.job = job;

    this.getJob = function() {
        console.log(`${name}'s occupation is ${job}`);
    }
}

const jack = new Engineer('Jack', 'engineer');
jack.welcome();
jack.getJob();
console.log(jack.name);