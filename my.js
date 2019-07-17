const DEFAULT_CHANEL = 0;
const DEFAUL_VOLUME = 20;
const REMOTE_CHANEL = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let Tivi = function () {
    this.chanel = DEFAULT_CHANEL;
    this.volume = DEFAUL_VOLUME;
    this.status = true;
    this.remote = null;

    this.getCurrentChanel = function () {
        return this.chanel;
    };
    this.currentVolume = function () {
        return this.volume;
    };

    this.setChanel = function (chanel) {
        this.chanel = chanel;
    };
    this.increaseVolume = function () {
        this.volume++;
    };
    this.decreaseVolume = function () {
        this.volume--;
    };
    this.connectToRemote = function (remote) {
        this.remote = remote;
    }
};

let Remote = function () {
    this.chanel = REMOTE_CHANEL;

    this.changeChanel = function (chanel) {
        for (let i = 0; i < this.chanel.length; i++) {
            if (chanel === this.chanel[i]) {
                tivi.setChanel(this.chanel[i]);
            }
        }
    };

    this.increaseVolume = function () {
        tivi.increaseVolume();
    };
    this.decreaseVolume = function () {
        tivi.decreaseVolume();
    };


};

let tivi = new Tivi(DEFAULT_CHANEL, DEFAUL_VOLUME, true);
let remote = new Remote();

tivi.connectToRemote(remote);
console.log(tivi.remote);
console.log("Current Chanel: " + tivi.getCurrentChanel());
console.log('Current Volume: ' + tivi.currentVolume());

tivi.remote.changeChanel(7);
tivi.remote.decreaseVolume();

console.log("Current chanel after remote Chanel: " + tivi.getCurrentChanel());
console.log("Current Volume after remote change: " + tivi.currentVolume());
