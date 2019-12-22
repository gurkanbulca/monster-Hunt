new Vue({
    el: "#app",
    data: {
        playerHp: 100,
        monsterHp: 100,
        gameIsOn: false,
        logs : []
    },
    methods: {
        startGame: function () {
            this.gameIsOn = true;
            this.playerHp = 100;
            this.monsterHp = 100;
            this.logs=[];
        },
        attack: function () {
            let playerDamage = Math.round(Math.random() * 7) + 5;
            let monsterDamage = Math.round(Math.random() * 7) + 5;
            this.monsterHp -= playerDamage;
            if (!this.isOver()) {
                this.playerHp -= monsterDamage;
                this.isOver();
                this.log(playerDamage,monsterDamage,false);
            }
            else{
                this.log(playerDamage,0,false);
            }
            

        },
        specialAttack: function () {
            let playerDamage = Math.round(Math.random() * 7) + 7;
            let monsterDamage = Math.round(Math.random() * 7) + 5;
            this.monsterHp -= playerDamage;
            if (!this.isOver()) {
                this.playerHp -= monsterDamage;
                this.isOver();
                this.log(playerDamage,monsterDamage,false);
            }
            else{
                this.log(playerDamage,0,false);
            }
        },
        heal: function () {
            let heal = Math.round(Math.random() * 7) + 7;
            let monsterDamage = Math.round(Math.random() * 7) + 5;
            this.playerHp += heal;
            this.playerHp>100 ? this.playerHp=100 : this.playerHp;
            if (!this.isOver()) {
                this.playerHp -= monsterDamage;
                this.isOver();
                this.log(heal,monsterDamage,true);
            }
            else{
                
            }
            
        },
        giveUp: function () {
            alert("Kaybettin!");
            this.gameIsOn = false;

        },
        isOver: function () {
            flag = false;
            if (this.playerHp <= 0) {
                this.playerHp = 0;
                alert("Kaybettin!");
                flag = true;
            }
            else if (this.monsterHp <= 0) {
                this.monsterHp = 0;
                alert("Kazandın!");
                flag = true;
            }
            if (flag) {
                this.gameIsOn = false;
                
            }
            return flag;
        },
        log : function(playerDamage,monsterDamage,isHeal){
            this.logs.push({playerDamage:playerDamage,monsterDamage:monsterDamage,isHeal:isHeal})
        }
    }
})