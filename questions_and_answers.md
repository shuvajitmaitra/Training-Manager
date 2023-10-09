<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 
<p> A: {}</p>

<i>Explanation: Here, greetign object value set as an empty object, cause of that when we console log the varriable we can see the empty object</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 
<p> C: "12"</p>

<i>Explanation: Here, A function name is sum and it takes to parameter, and it's return the summation of both parameters, we give first parameter value a number and second parameter value a number but in the form of string and the function try to add them, we know when we try to add two string, first number converted into a string and it will be preform concatenation and result shows "12"  </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 
<p> A: ['🍕', '🍫', '🥑', '🍔']</p>

<i> Explanation: Here, In the first line we declare an array and in second line we declare an object which have single property and his value is zero index number of the array and third line we update the value of the object and the last line we console log the array and the array print out as it is. </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 
<p>B: Hi there, undefined</p>

<i>Explanation: Here, we will get Hi there, undefined because of sayHi function have a parameter and also pass the parameter in the return but no value set for the parameter. when the function call return will find a value but no value set when then the function called  </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 
<p>C: 3</p>

<i>Explanation: when forEach loop apply to the nums array and if num value is truthy count value increase 1. But in the code first value of num is falsy so that the result of the count is 3</i>

</p>
</details>
