class Duck{
    constructor(flying, quacking, xPos,yPos){
        this.flying=flying;
        this.quacking=quacking;
        this.xPos=xPos;
        this.yPos=yPos;
    }
    getFlying(){
        return this.flying;
    }
    setFlying(flying){
        this.flying=flying;
    }
    //getter and setter for all properties

    //methods
    takeOff(){
        this.flying=true;
    }
    land(){
        this.flying=false;
    }
    startQuacking(){
        this.quacking=true;
    }
    stopQuacking(){
        this.quacking=false;
    }
    moveTo(x,y){
        this.xPos=x;
        this.yPos=y;
  
    //     let msg='Duck is '
    //     if(this.flying){
    //         msg+=`flying to ${x},{y}`;
    //     }else{
    //         msg+=`swiming to ${x},,${y}`;
    //     }
    //     if(this.quacking){
    //         msg+='while quacking';
    //     }
    //     console.log(msg);
    }
}
module.exports=Duck;