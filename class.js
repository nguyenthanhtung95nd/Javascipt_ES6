class Holiday {
    constructor(destination, days) {
        this.destination = destination,
        this.days = days
    }

    info() {
        console.log(`${this.destination} will take ${this.days}.`);
    }
}

// sub class
class Expedition extends Holiday {
    constructor(destination, days, gear) {
        super(destination,days);
        this.gear = gear;
    }
    
    info() {
        super.info();
        console.log(`Bring your ${this.gear.join(" and your ")}`);
    }
}

const myTrip = new Expedition("Phu Quoc", 2, ["Giay", "Quan ao"]);
console.log(myTrip.info());