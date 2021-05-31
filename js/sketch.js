      var canvas;
      var gameState=0;
      var form,game;
      var astroJet,astroJetIMG;
      var alien,ufo,boss,fireBall,fireBallIMG,fireBall2IMG;
      var alienGroup,UFOGroup,fireBallGroup2,fireBall2;
      var alienIMG,ufoIMG,bossIMG;
      var bg,bg2,backgroundIMG;
      var out,outIMG;
      var startButton,startButtonIMG;
      var score = 0;

      function preload(){
        backgroundIMG = loadImage("images/galex.jpg");
        alienIMG = loadImage("images/alien.png");
        astroJetIMG = loadImage("images/jet.png");
        ufoIMG = loadImage("images/UFO.png");
        startButtonIMG = loadImage("images/start.png");
        outIMG = loadImage("images/outlook.png");
        fireBallIMG = loadImage("images/fireBall.png");
        fireBall2IMG = loadImage("images/laser.png");
        bossIMG = loadImage("images/boss.png");

      }

      function setup() {
        createCanvas(400,625);
          game = new Game();
          game.setLevel1();
      }

      function draw() {
            background(0);
            drawSprites();
            
           // console.log(gameState);
           //astroJet.colide(bg,bg2)

           
            if(gameState === 0){
              game.start();
            }
            if(gameState === 1){
              game.setLevel1();
              createfireBall2();
            }

            
            if(keyDown("space")){
              createfireBall();
            }
            if(mousePressedOver(startButton)){
              gameState = 1;
              startButton.visible = false;
            }
           // if(fireBallGroup.isTouching(alien)){
            //  alien.destroyEach();
            //  score = 0;
           // }
           
            astroJet.x =World.mouseX;
            
           
        
              
      }
      //spawn the aliens
      function alienSpawn() {
          if(frameCount % 50 === 0){
            var alien = createSprite(0,Math.round(random(200,50)), 20, 20);
            alien.addImage(alienIMG);
            alien.velocityY = -(9+(score/4));
            alien.lifetime = 400;
            alien.scale = 0.5; 
           // alienGroup.add(alien);
          }

      }
      //spawn the UFO
      function UFOSpawn() {
        if(frameCount % 50 === 0){
          var ufo = createSprite(0,Math.round(random(200, 50)), 20,20);
          ufo.addImage(ufoIMG);
          ufo.velocityY = -(9+(score/4));
          ufo.lifetime = 400;
          ufo.scale = 0.5; 
          //UFOGroup.add(ufo);
        }
        
      }
      //spawn the FireBalls
      function createfireBall() {
        if(frameCount % 20 ){
          var fireBall= createSprite(200,400,20, 20);
        fireBall.addImage(fireBallIMG);
        fireBall.y = 400;
        //fireBall.x=astroJet.x;
        fireBall.velocityY = -4 ;
        fireBall.lifetime = 800;
        fireBall.scale = 0.1;
        //fireBallGroup.add(fireBall);

        }
        
        
      }
      function createfireBall2() {
        if(frameCount % 40 === 0){
          var fireBall2= createSprite(200,100,10, 10);
          fireBall2.addImage(fireBall2IMG);
          //fireBall.y = 400;
          fireBall2.x=astroJet.x;
          fireBall2.velocityY = 4 ;
          fireBall2.lifetime = 800;
          fireBall2.scale = 0.1;
         // fireBallGroup2.add(fireBall2);

        }
       
        
      }