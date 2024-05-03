let databaseHTML = `
Databases are systems that store and organize large amounts of data <br/>
Model in real world can be compared in DB as relation/Table <br/>
And model data stored in table as records/rows, each record contains fields/columns <br/>
`;

let sqlHTML = `Structured Query Language <br/>
SQL is the language used to communicate with DB <br/>
`;

let syntaxHTML = `
Conditions use comparison operators to compare the columns with values <br/>
Multiple conditions can join with logical operators <br/>
`;

let comparisonOperatorsHTML = `
= equal to
!= <> not equal to
> greater than
>= greater than or equal to
< less than
<= less than or equal to

`;

let logicalOperatorsHTML = `
And - both should be true                       <br/>
Or - either of the one should be true           <br/>
Not - opposite of the condition                 <br/>
between and - match the value in between values <br/>
in - to check a value in a list of values       <br/>
like - to check the column against a pattern    <br/>
&emsp; % - any sequence of characters           <br/>
&emsp; _ - for single character                 <br/>
ilike - to check the column against a pattern (case insensitive)   <br/>
`;

let aggregateFunctionsHTML = `
These are to take multiple inputs and returns single output <br/>
avg() - returns average value <br/>
count() - returns number of values <br/>
max() - returns maximum value <br/>
min() - returns minimum value <br/>
sum() - returns sum of values <br/>
These functions we will apply in select clause or having clause <br/>
`;


//Create

//Read
let selectHTML = `
Select clause to select the columns                                                                         <br/>
select column from table;                                   - One column                                    <br/>
select col1, col2 from table;                               - two columns                                   <br/>
select * from table;                                        - all columns                                   <br/>
select distinct(column1, column2) from table;               - get distinct values of column/columns         <br/>
select count(*) from table;                                 - number of rows present in table               <br/>
<br/>
From clause to specify the tables and joins
<br/>
Where clause to specify conditions on columns to filter results                                             <br/>
select * from table                                                                                         <br/>
where column > 100 and column1 != 'test';                                                                   <br/>
<br/>
order by clause to sort the results based on a column specified/ asc by default                             <br/>
select * from table order by first_name asc/desc;                                                           <br/>
<br/>
limit clause to limit the rows returned from db                                                             <br/>
select * from table limit 10;                                                                               <br/>
<br/>
group by clause to partition the data based on a column/columns                                             <br/>
select col1, sum(col2) from table group by col1;                                                            <br/>
having will put condition on aggregate function of group by                                                 <br/>
select col1, sum(col2) from table group by col1 having sum(col2) > 500;                                     <br/>
<br/>
as clause is used to give alias to a column or aggregate function                                           <br/>
select column as c1, count(*) as cnt from table;                                                            <br/>
<br/>
Inner Join <br/>

`;

//update

//delete