const a = 1; b = 5; c = 6; 
let solutionA = solutionB = 0;
solutionA= Math.sqrt((b**2)-(4*a*c));
solutionA= (-b+(solutionA))/(2*a)
solutionB= Math.sqrt((b**2)-(4*a*c));
solutionB= (-b-(solutionB))/(2*a)
console.log(solutionA, solutionB);