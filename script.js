function cup1(){
    var canvas = document.getElementById("cup1");
    var ctx = canvas.getContext("2d");

    var productImg = new Image();
        productImg.onload = function () {
            var iw = productImg.width;
            var ih = productImg.height;
            console.log("height");
    
            canvas.width = iw;
            canvas.height = ih;
    
            ctx.drawImage(productImg, 0, 0, productImg.width, productImg.height,
                          0, 0, iw, ih);
            loadUpperIMage()
        };
   
    productImg.src = "1.jpg"
    
    
    function loadUpperIMage(){
          var img = new Image();
    
        img.src = "sticker2.jpg"
        img.onload = function()  {

        var iw = img.width;
        var ih = img.height;
        
        var xOffset = 102,
            yOffset = 110; 
        
        var a = 75.0; 
        var b = 10; 
        
        var scaleFactor = iw / (4*a);

        for (var X = 0; X < iw; X+=1) {
          var y = b/a * Math.sqrt(a*a - (X-a)*(X-a)); 
          ctx.drawImage(img, X * scaleFactor, 0, iw/9, ih, X + xOffset, y + yOffset, 1, 174);
        }
    };
    }
   
};
function cup2(){

    var canvas = document.getElementById("cup1");
    var ctx = canvas.getContext("2d");
    var productImg = new Image();
        productImg.onload = function () {
            var iw = productImg.width;
            var ih = productImg.height;
            console.log("height");
    
            canvas.width = iw;
            canvas.height = ih;
    
            ctx.drawImage(productImg, 0, 0, productImg.width, productImg.height,
                          0, 0, iw, ih);
            loadUpperIMage()              
        };
    
    productImg.src = "3.jpg"
    
    function loadUpperIMage(){
          var img = new Image();
        img.src = "sticker2.jpg"

        img.onload = function()  {

        var iw = img.width;
        var ih = img.height;
        
        
        var xOffset = 101, 
            yOffset = 110; 
        
        var a = 75.0; 
        var b = 10; 
        
        var scaleFactor = iw / (4*a);

        for (var X = 0; X < iw; X+=1) {
          var y = b/a * Math.sqrt(a*a - (X-a)*(X-a)); 
          ctx.drawImage(img, X * scaleFactor, 0, iw/3, ih, X + xOffset, y + yOffset, 1, 174);

        }
    };
    }
   
};
function cup3(){
 
    var canvas = document.getElementById("cup1");
    var ctx = canvas.getContext("2d");
    var productImg = new Image();
        productImg.onload = function () {
            var iw = productImg.width;
            var ih = productImg.height;
            console.log("height");
    
            canvas.width = iw;
            canvas.height = ih;
    
            ctx.drawImage(productImg, 0, 0, productImg.width, productImg.height,
                          0, 0, iw, ih);
            loadUpperIMage()              
        };
      productImg.src = "2.jpg"

    
    function loadUpperIMage(){
          var img = new Image();
        img.src = "sticker2.jpg"

        img.onload = function()  {

        var iw = img.width;
        var ih = img.height;
        
         
        
        var xOffset = 102, 
            yOffset = 110; 
        
        var a = 75.0; 
        var b = 10; 
        
        var scaleFactor = iw / (3*a);

        for (var X = 0; X < iw; X+=1) {
          var y = b/a * Math.sqrt(a*a - (X-a)*(X-a)); 
          ctx.drawImage(img, X * scaleFactor, 0,iw/1.5 , ih, X + xOffset, y + yOffset, 1, 174);
        }
    };
    }
};