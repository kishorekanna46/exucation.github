var firstNumber = "25";
var lastNumber = " 75";
var number = parseInt(firstNumber) + parseInt(lastNumber);

var data = {
    message: "Number: " + number
};

function getnumber() {
    console.log(data);
}

getnumber();


//Global Execution Context

//Creation Phase

GEC{
    LEC{
        ER{
           declaration:
               firstNumber:undefined;
               lastNumber:undefined;
        }
        outer:null;
        this:window Object;
    }
    VE{
        ER{
            declaration:
                message:undefined;
        }
    }
}
//Execution Phase

GEC{
    LEC{
        ER{
           declaration:
               firstNumber:"25";
               lastNumber:"75";
        }
        outer:null;
        this:window Object;
    }
    VE{
        ER{
            declaration:
                 message:firstNumber+lastNumber;
        }
    }
}

//Function Execution Context

//Creation Phase

GEC{
    LEC{
        ER{
            declaration:
                 message:undefined;
        }
        outer:GEC;
        this.getMessage;
    }
}

//Execution Phase

GEC{
    LEC{
        ER{
            declaration:
                  message: 100 ;
        }
    }
}