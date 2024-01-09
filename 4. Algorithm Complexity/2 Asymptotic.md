How to represent complexity ?
Asymptotic notations(3 notations)

1.Big-O Notation(O-notation) - worst case complexity
Big O Notation :- Use to denote complexity(space and time)
2.Omega notation :-(Ω-notation) - Best case complexity
3.Theta Notation :-(θ-notation) - Average case complexity

Big-O Notation(O- notation)

- The worst case complexity of an algo is represented using the Big-O-Notation
- Big-O-Notation describe the complexity of an algo using algebraic terms
-it has 2 imp characterstics :-
    - it is expressed in terms of the input
    - it focuses on the bigger picture without getting caughtt up in the minute details


Big-O Time complexity :-

function summation(n) {
    let sum = 0;
    for(let i = 1; i <=n; i++) {
        sum += i
    }
     return sum;
}

const ans = summation(4)

console.log(ans)

1 + 2 + 3 + 4 = 10

count the number of times a statement executes based on the input size

function summation(n) {             n = 4 time com is dependent on the input size 4+2
    let sum = 0;                    1
    for(let i = 1; i <=n; i++) {
        sum += i                    4
    }
     return sum;                    1
}

const ans = summation(4)

console.log(ans)

Time Complexity :- O(n) - Linear   

- it focuses on the bigger picture without getting caughtt up in the minute details

n + 2           n
n = 100     100 + 2
n= 1000     1000 + 2
.
.
.
.
n=10000000  10000000+2

Big-O-Calcn

function sum(n) {
    return (n * ( n + 1)) / 2;
}

Time Complextiy :- O(1) - constant


2. two nested loop means square(Quadratic)

for(i = 1; i<=n; i++) {
    for(j = 1; j <=i; j++) {
        //some code
    }
}

Time Complextiy :- O(n²) - Quadratic
                3n² + 5n + 1

Space complexity: O(1)


3. three nested loop means cubic

for(i = 1; i<=n; i++) {
    for(j = 1; j <=i; j++) {
        for(k = 1; k <= i; k++) {
        //some code
        }
    }
}

Time complexity :- O(³)

if the input size reduces by half every iteration 
 
-Time Complexity O(logn) - Logarithm


Space complexity :- 
o(1) - constant
O(n) - Linear
O(logn) - Logarithms

look at the photo

Notes :-
        -multiple algo exist for the same problem and there is no one right solution.diff algo works well under diff constrains.
        -the same algo with the same programming lang can be implement in diff way.
        -when writing programs at work, don't lose sight of the big picture, rather than writing cleaver code,writing code that is simple to read and maintain.

-----------------------------------------
    
Asymptotic analysis and notation :-