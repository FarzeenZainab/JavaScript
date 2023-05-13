// We will learn how JS actually gets executed in the call stack

/*
    The first thing that happens after the code is executed in the browser is Compilation, that
    means the engine will interprit the JS in to the machine language

    After the compilation a so called global execution context is created in which only the
    top level code gets executed.

    Top level code means the code that is not present inside any FUNCTION. Which makes sense 
    becuase to execute a function we first need to call it

     example: 
        ___________________________________________       
        |   
        |   const name = 'Jonas'; --> top level code (decleared and executed)
        |   
        |   const first = () => { 
        |      let a = 1;
        |      const b = second();
        |      a = a + b;
        |      return a;
        |   };
        |
        |   function second(){
        |        var c = 2;
        |        return c;
        | 
        |   }
        |
            here we have two funtion, these functions are also declared so they can be called
            later. The code inside the function is not the top level code because it is inside
            a function, this code will only be executed when the function is called
*/


/* ------------------------- Executioon  context --------------------------------*/
/**
 * What is execution context?
 * It is an environment in which a piece of JS is executed. It stores all the necessary 
 * infomation for some code to be executed
 * 
 *  
 * What is inside execution context?
 * The first thing that is inside any variable context is a so-called
 * variabe environment. In this environment all of our variable and function declaration are 
 * stored, there is also an special argument object. The argument object is consists of all
 * the parameters/arguments we pass in a function or in a method that the current execution
 * context blongs to.
 * 
 * Each function and method has a separate execution context
 * 
 * The Second thing that is present in an execution context is the scope chain.
 * As a function can access some variables that are declared outside of the function, a scope chain
 * contains the references of those variables declared outside of that function.
 * 
 * Scope chain keeps track of the refernces that is wjy it is a part of each execution context of a 
 * program.
 *
 * The Third thing that an execution context consist of is the "this" keyword.
 * 
 * Important Point: Execution context belonging to an arrow function doesnot have an argument object and
 * the "this" keyword
 * 
 * 
 *      ___________________________________________       
        |   
        |   const name = 'Jonas'; --> top level code (decleared and executed) GLOBAL EXEC. CONTEXT
        |   
        |   const first = () => { --> top level code declared GLOBAL EXEC. CONTEXT
        |      let a = 1;                           --> first() execution context
        |      const b = second(7,8);                      -- a
        |      a = a + b;                                  -- need to run secon() 
        |      return a; 
        |   };
        |
        |   function second(x,y){ --> top level code declared GLOBAL EXEC. CONTEXT
        |        var c = x/y;                          --> second() execution context
        |        return c;                                 -- c
        |   }                                              -- argument object x, y 
        | 
        |   const x ==  second(7,9);
 * 
 * 
 * 
 *  Now we have all the execution context that an engine need. The question is in which order will these execution
 *  execute?
 * 
 *  This is where the Call Stack comes in to the scene.
 *  
 *  Call Stack + Memory Heap = JS engine
 * 
 *  What is a Call Stack?
 *  It is a place where execution context gets executed in an order to keep track of the overall
 *  program execution
 *  
 *  Call stack notes are in the udemy notes section. Read them, they are important
 * 
 */