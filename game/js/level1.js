var Level1 = {
    preload: function () {
        this.load.image('fon', 'img/textur/1.jpg');
        this.load.image('car1', 'img/car/Car1.png');
        this.load.image('car2', 'img/car/car2.png');
        this.load.image('car3', 'img/car/car5.png');
        this.load.image('car4', 'img/car/car7.png');
        this.load.image('car5', 'img/car/car8.png');
        this.load.image('start', 'img/textur/start.png');
        this.load.image('coin', 'img/textur/coin.png');
    },
        foon:null,
        money:100,
        btn:null,
        btnLeft:null,
        btnRight:null,
        coin:null,
        car:null,
        num:0,
        cars:null,
    create: function () {
        this.foon=this.add.sprite(0, 0, 'fon');
        this.foon.scale.set(1.22,0.616);
        this.btn=this.add.sprite(1050,690,'start');
        this.btn.scale.set(0.2,0.2);
        this.btn.inputEnabled=true;
        this.btn.events.onInputDown.add(this.str);
        this.coin=this.add.sprite(10,10,'coin');
        this.coin.scale.set(0.4,0.4);
        this.car=this.add.sprite(450,350,'car1');
        this.car.scale.set(5,5);
        this.btnLeft=this.add.sprite(800,370,'start');
        this.btnLeft.scale.set(0.2,0.2);
        this.btnRight=this.add.sprite(370,470,'start');
        this.btnRight.scale.set(0.2,0.2);
        this.btnRight.angle += 180;
        this.btnLeft.inputEnabled=true;
        this.btnRight.inputEnabled=true;
        this.btnLeft.events.onInputDown.add(this.goLeft);
        this.btnRight.events.onInputDown.add(this.goRight);
        this.cars=["car1","car2","car3","car4","car5"];
    },
    goLeft:function() {
        Level1.num++;
        //Level1.car.loadTexture(Level1.cars[Level1.num]);
        if(Level1.num==5){ 
            Level1.num=0;
           Level1.car.loadTexture(Level1.cars[0]);
        }else if(Level1.num==4){
            Level1.car.loadTexture(Level1.cars[4]);
        
        }else if(Level1.num==3){
            Level1.car.loadTexture(Level1.cars[3]);
        }else if(Level1.num==2){
            Level1.car.loadTexture(Level1.cars[2]);
        }else if(Level1.num==1){
            Level1.car.loadTexture(Level1.cars[1]);
        
        }else if(Level1.num<=0){
            Level1.num=0;
        }
         console.log(Level1.num);
    },
    goRight:function() {
         Level1.num--;
        console.log(Level1.num);
        //Level1.car.loadTexture(Level1.cars[Level1.num]);
        if(Level1.num==0){
            Level1.num=4;
           Level1.car.loadTexture(Level1.cars[4]);
        }else if(Level1.num==1){
            Level1.car.loadTexture(Level1.cars[1]);
        }else if(Level1.num==2){
            Level1.car.loadTexture(Level1.cars[2]);
        }else if(Level1.num==3){
            Level1.car.loadTexture(Level1.cars[3]);
        }else if(Level1.num==4){
            Level1.car.loadTexture(Level1.cars[4]);
        }else if(Level1.num==5){
            Level1.num=0;
            
        }
       // console.log(Level1.num)
    },
    str:function() {
        Level1.state.start("lev2")
    },
    update: function () {
          game.physics.arcade.collide(this.car,this.coin,this.killMoney);
    },
    textcollide:function(arc1,arc2){
        
            Level1.coin.remove(arc2)
            
        
       
        
    }
};