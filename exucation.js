var shop ="sport shop";
console.log("shop:"+shop);
var firstMessage="cricket bat";
var lastMessage=" cricket ball";
var reply=firstMessage+lastMessage;

function getContactName() {
    console.log("Reply:" +reply);
    }
 getContactName();


// ///Global execution context (GEC)

// // Creation Phase 
 
globalExecutionContext: {
    LexicalEnvironment: {
      EnvironmentRecord:  {
         type: "declarative",
          firstname: undefined,
          lastname: undefined,
      }

      outer:"null"
      ThisBinding: "global object or window object"
       },
       VariableEnvironment: {
         EnvironmentRecord:  {
            type: "object",
             fullname: undefined,
             
           }


       outer:"null"
            ThisBinding: "global object or window object"
             },

         }
    
//   // Execution phase

globalExecutionContext: {
    LexicalEnvironment: {
      EnvironmentRecord:  {
         type: "object",
          firstname: 'cricket bat',
          lastname: 'cricket ball',
        
        },
      
        outer:"null"
                  ThisBinding: "global object or window object"
                   },
                   VariableEnvironment: {
                     EnvironmentRecord:  {
                        type: "object",
                        fullname = 'firstname+lastname',
                         
                       }
                  
                       outer:"null"
                     ThisBinding: "global object or window object"
                      }
         
                  }


// ///     Function execution context (FEC)

    // // Creation Phase 

    FunctionExecutionContext: {
        LexicalEnvironment: {
          EnvironmentRecord:  {
             type: "declarative",
              firstmessage: undefined,
              lastmessage: undefined,
            
            }
          
            outer:"Global Execution context"
            ThisBinding: getdata()
             },
             VariableEnvironment: {
               EnvironmentRecord:  {
                  type: "object",
              
                   
                 }
            
                 outer:"Global Execution context"
             ThisBinding: getdata()
              },
 
          }
     

               // // Execution phase 
 
           
         FunctionExecutionContext: {
            LexicalEnvironment: {
              EnvironmentRecord:  {
                 type: "declarative",
                firstmessage: 'cricket bat',
                secondmessage: 'cricket ball',
          
                },
              
              outer:"Global Execution context"
              ThisBinding: getdata()
               },
               VariableEnvironment: {
                 EnvironmentRecord:  {
                    type: "object",
                     
                   }
                 
                 outer:"Global Execution context"
                 ThisBinding: getdata()
                  }
     
              }