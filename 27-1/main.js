function Square(a, b, c, d){
    this.a = a;
    this.b = b; 
    this.c = c; 
    this.d = d;
}

Square.prototype.isSquare = function() {
                    
        if(this.a === this.b && this.a === this.c && this.a === this.d){
            console.log('true');
        }
        else {
            console.log('false');
        }

    

}

const square1 = new Square(3, 3, 3, 3);
square1.isSquare(); 