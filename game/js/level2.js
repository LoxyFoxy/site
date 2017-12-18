var Level2 = {
    preload: function () {
        this.load.image('fon', 'img/textur/1.jpg');
        this.load.image('car1', 'img/car/Car1.png');
        this.load.image('car2', 'img/car/car2.png');
        this.load.image('car3', 'img/car/car5.png');
        this.load.image('car4', 'img/car/car7.png');
        this.load.image('car5', 'img/car/car8.png');
        this.load.image('car6', 'img/car/car10.png');
        this.load.image('road', 'img/textur/2.jpg');
        this.load.image('start', 'img/textur/start.png');
        this.load.image('coin', 'img/textur/coin.png');
    },
    roud: null,
    rouds: null,
    num: 0,
    car: null,
    carpos:null,
    carposup:null,
    carposdown:null,
    coin:null,
    count:null,
    countY:null,
    btnLeft: null,
    btnRight: null,
    btnUp: null,
    btnDown: null,
    text: null,
    velocity:0,
    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0, 0, 400000, 800);
        for (var i = 0; i < 400; i++) {
            this.count+= 1024;
            this.roud = this.add.sprite(this.count, -10, 'road');
            this.roud.angle= 90;
            this.roud.scale.set(0.8, 1);
        }
        this.countY=      [60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,  60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220,420,596,60,220];
        this.coin = game.add.group();
        this.coin.enableBody=true;
        for (var i = 0; i <this.countY.length; i++) {
            this.num += 1024;
            var a =this.coin.create(this.num, this.countY[i], 'coin');
      
            a.scale.set(0.3, 0.3);
        }
        this.car = game.add.sprite(10, 596, 'car6');
        this.car.scale.setTo(4, 4);
        game.physics.arcade.enable(this.car);  
        
        this.btnLeft = this.add.sprite(200, 670, 'start');
        this.btnLeft.scale.set(0.2, 0.2);
//        this.btnRight = this.add.sprite(120, 770, 'start');
//        this.btnRight.scale.set(0.2, 0.2);
//        this.btnRight.angle += 180;
        this.btnLeft.inputEnabled = true;
//        this.btnRight.inputEnabled = true;
        this.btnLeft.events.onInputDown.add(this.goLeft);
//        this.btnRight.events.onInputDown.add(this.goRight);
//        this.btnRight.fixedToCamera = true;
        this.btnLeft.fixedToCamera = true;
        this.carpos=[50,220,410,596]
        this.carposup=[220,410,596]
        this.carposdown=[410,220,50]
        this.btnUp = this.add.sprite(300, 100, 'start');
        this.btnUp.scale.set(0.2, 0.2);
        this.btnUp.angle += 270;
        this.btnDown = this.add.sprite(400, 700, 'start');
        this.btnDown.scale.set(0.2, 0.2);
        this.btnDown.angle += 90;
        this.btnUp.inputEnabled = true;
        this.btnDown.inputEnabled = true;
        this.btnUp.events.onInputDown.add(this.goUp);
        this.btnDown.events.onInputDown.add(this.goDown);
        this.btnDown.fixedToCamera = true;
        this.btnUp.fixedToCamera = true;
        game.camera.follow(this.car);
    
        
    },
    goLeft: function () {
        if(Level2.velocity==0){
            Level2.velocity=300;
            Level2.car.body.velocity.x= 800;
        }
    },
    goUp: function () {
        for(var i=0;i<3;i++){ 
            if(Level2.car.position.y==Level2.carposup[i]&&Level2.car.position.y==596){
                Level2.car.position.y=410;
            }else if(Level2.car.position.y==Level2.carposup[i]&&Level2.car.position.y==410){
                Level2.car.position.y=220;
            }else if(Level2.car.position.y==Level2.carposup[i]&&Level2.car.position.y==220){
                Level2.car.position.y=50;
            }
        }
    },
    goDown: function () {
        for(var i=0;i<3;i++){ 
            if(Level2.car.position.y==Level2.carposdown[i]&&Level2.car.position.y==50){
                Level2.car.position.y=220;
            }else if(Level2.car.position.y==Level2.carposdown[i]&&Level2.car.position.y==220){
                Level2.car.position.y=410;
            }else if(Level2.car.position.y==Level2.carposdown[i]&&Level2.car.position.y==410){
                Level2.car.position.y=596;
            }
        }
    },
    update: function () {
        game.physics.arcade.overlap(this.car,this.coin,this.killMoney);
    },
    killMoney:function(arc1,arc2){
        
          arc2.kill()
        
       
        
    }
};
