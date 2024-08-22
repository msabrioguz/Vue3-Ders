function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      winner: null,
      playerHealth: 100,
      computerHealth: 100,
      currentRound: 0,
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.computerHealth <= 0) {
        // draw
        this.winner = "draw";
      } else if (value <= 0) {
        // computer won
        this.winner = "computer";
      }
    },
    computerHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // draw
        this.winner = "draw";
      } else if (value <= 0) {
        // player won
        this.winner = "player";
      }
    },
  },
  computed: {
    computerHealthBarStyle(){
      if(this.computerHealth < 0){
        return {width: '0%'}
      }else{
        return {width: this.computerHealth + '%'}
      }
    },
    playerHealthBarStyle(){
      if(this.playerHealth < 0){
        return {width: '0%'}
      }else{
        return {width: this.playerHealth + '%'}
      }
    }
  },
  methods: {
    attackToComputer() {
      this.currentRound++;
      const attackValue = getRandomValue(7, 15);
      this.computerHealth -= attackValue;
      this.attackToPlayer();
    },
    attackToPlayer() {
      const attackValue = getRandomValue(10, 20);
      this.playerHealth -= attackValue;
    },
    specialAttackToComputer() {
      this.currentRound++;
      const attackValue = getRandomValue(15, 30);
      this.computerHealth -= attackValue;
      this.attackToPlayer();
    },
    HealMe(){
      this.currentRound++;
      const healValue = getRandomValue(15, 25);
      if(this.playerHealth + healValue > 100){
        this.playerHealth = 100
      }else{
        this.playerHealth += healValue
      }
      this.attackToPlayer();
      
    },
    possibleSpecialAttack(){
      return this.currentRound %4 !== 0
    },
    restartGame(){
      this.winner = null
      this.playerHealth = 100
      this.computerHealth = 100
      this.currentRound = 0
    }
  },
});

app.mount("#frontEnd");
