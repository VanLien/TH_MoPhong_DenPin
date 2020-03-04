let Battery=function () {
     this.setEnergy=function (energy) {
            this.energy=energy;
     };
     this.getEnergy=function () {
            return this.energy;
     };
     this.energyReduction=function () {
            if (this.energy>0){
                this.energy--;
            }
     }
};
let FlashLamp=function () {
    this.setBattery=function (battery) {
        this.battery=battery;
    };
    this.getBatteryInfo=function () {
        return this.battery.getEnergy();
    };
    this.light=function () {
        if (this.status){
            alert("SANG");
        } else {
            alert("KhongSang")
        }
    };
    this.turnOn=function () {
        this.status=true;
    };
    this.turnOff=function () {
        this.status=false;
    };
};
let battery=new Battery();
battery.setEnergy(100);
let flashLamp=new FlashLamp();
flashLamp.setBattery(battery);
document.write(flashLamp.getBatteryInfo());
flashLamp.turnOn();
document.write("turn On<br>");
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info"+flashLamp.getBatteryInfo()+"<br>");
document.write("Turn Off<br>");
flashLamp.turnOff();
flashLamp.light();