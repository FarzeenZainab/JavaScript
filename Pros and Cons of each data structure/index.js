/* 
  We have learned following data structures
    - arrays
    - objects
    - Sets
    - maps
  
  When to use each of them:

  Depends where data can come from
    3 Source of data
      - From the program itself: Data written directly in the source code (e.g status messages)
      - From the UI: data input from the user or data written in DOM (e.g tasks in todo app, forms)
      - From external sources: Data fetched from a web API (e.g. recipe objects)

      we always have collection of data that we need to store somewhere that are data structures

      1st decision: 
        Do we just need to store a simple list of values than we should use and array or set
      
      2nd decision: 
        Do we need key and value pairs then we need an object or a map


    ARRAYS VS SETS
      
      Arrays: 
        - when you need ordered list of values (might contain duplicatesd)
        - use when you need to manipulate data
      
      Sets:
        - Use when you need to work with unique values
        - Use when high performance is really important
        - Use to remove duplicates from an array
      
        
    OBJECTS VS MAPS
      
      Objects:
        - More "traditional" key/value store
        - easier to write and access values with . and []
      
      Maps:
        - better performance
        - keys can have any data type
        - easy to iterate
        - easy to compute size


*/

