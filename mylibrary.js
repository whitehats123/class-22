function  bounce (object1,object2) {
    if (object1.x-object2.x<=object1.width/2+object2.width/2) {
      object1.velocityX=-object1.velocityX 
      object2.velocityX=-object2.velocityX  
     }
  }