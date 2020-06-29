let arrX=[]
let arrY=[]
let arrZ=[]
const bolls=25
const minSize=1
const maxSize=8
let randomN=0


function setup(){
    createCanvas(500, 500, WEBGL)
    background("gray")
    // frameRate(1)
    for(i=0;i<bolls;i++){
        arrX.push(random(-50,50))
        arrY.push(random(-50,50))  
        arrZ.push(random(-50,50))      
    }

}
function draw(){
    background("gray");
    smooth()

    noFill()
    rotateX(radians(frameCount))
    rotateY(radians(frameCount))
    rotateZ(radians(frameCount))
    // stroke(255, 10)


    orbitControl(10);
    // normalMaterial()
    torus(100,50)

    for(i=0;i<bolls;i++){
        push()
        // noStroke()
        // normalMaterial()
        translate(arrX[i], arrY[i], arrZ[i])
        rotateX(radians(frameCount))
        rotateY(radians(frameCount))
        rotateZ(radians(frameCount))
        // box()
        normalMaterial()
        push()
        translate(25,25,25)
        sphere(5)
        pop()
        push()
        translate(25,-25,25)
        sphere(5)
        pop()
        push()
        translate(-25,25,25)
        sphere(5)
        pop()
        push()
        translate(25,25,-25)
        sphere(5)
        pop()
        push()
        translate(-25,-25,25)
        sphere(5)
        pop()
        push()
        translate(-25,25,-25)
        sphere(5)
        pop()
        push()
        translate(-25,-25,-25)
        sphere(5)
        pop()
        push()
        translate(25,-25,-25)
        sphere(5)
        pop()
        // normalMaterial()
        fill("white")

        // sphere(10)
       
        pop()
    }
    if(randomN>1000){
        randomN=1
    }
    randomN+=1


   
    
    
    
}
