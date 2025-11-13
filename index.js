const prompt = require("prompt-sync")();

class player {
    constructor(nama , health, attackPower) {
        this.nama = nama;
        this.health = health;
        this.attackPower = attackPower;
        this.healing = function(){
            this.health += 10 ;
            console.log(`${this.nama} sedang Healing +10 HP. Sisa health ${this.health}`)
        }


        this.attack = function(target){
            target.health -= this.attackPower;
            console.log(`${this.nama} menyerang ${target.nama} sebesar ${this.attackPower}. Sisa health ${target.nama} adalah ${target.health}`);
            if (target.health<=0){
                console.log(target.nama+' meninggal' );
            }
        }
    }
}

class enemy{
    constructor (nama,health,attackPower){
        this.nama = nama;
        this.health = health;
        this.attackPower = attackPower;
        this.attack = function(target){
            target.health -= this.attackPower;
            console.log(`${this.nama} menyerang ${target.nama} sebesar ${this.attackPower}. Sisa health ${target.nama} adalah ${target.health}`);
            if (target.health<=0){
                console.log(target.nama+' meninggal' );
            }
        }

    }
}



let player1 = new player("Jokowi", 100, 10);
let enemy1 = new enemy ("Prabowo",100,30)


function statistik (){
    console.log(`STATISTIK SEMENTARA
        PLAYER => ${player1.nama}
        PLAYER HEALTH => ${player1.health}
        ENEMY => ${enemy1.nama}
        ENEMY HEALTH => ${enemy1.health}`)
}

function menu(){
    let i = 0
    while(i<5){
        console.log(`SELAMAT DATANG DI GAME PUKUL MEMUKUL
                    1.PLAYER PUKUL MUSUH
                    2.PLAYER HEALING
                    3.MUSUH PUKUL PLAYER
                    4.MUSUH HEALING
                    5.LIHAT STATISTIK`
                    
                        );

        let pilih = prompt ("MASUKKAN PILIHAN: ");

        if (pilih == 1){
            player1.attack(enemy1)
        }

        else if (pilih == 2){
            player1.healing()
        }

        else if (pilih == 3){
            enemy1.attack(player1)
        }
        else if (pilih == 4){
            enemy1.healing()
        }

        else if (pilih == 5){
            statistik()
        }

        else{
            console.log("Masukin yang bener jir")
        }
    }
        

}

menu()


