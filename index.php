<?php

echo "Hello World";
$greeting = "Hello World";

$_Variable = "amc";
$_variable = "abc";
echo $greeting;

$add = 1+2;
$subtraction = 3-1;
$power = 2** 3;
$mod = 10 % 2;

$firstName = "Joey";
$lastName = "Johnson";

$fullName = "<p> $firstName $lastName </p>";
echo"$fullName \n";

$quote ="\"Books, like Friends should be few but well chosen\" ";
echo $quote;

$fullName = $firstName . $lastName;

$one = 1;
$two = 2;

var_dump($one == $two);

var_dump($one > $two);
var_dump($one < $two);
var_dump($one <= $two);
var_dump($one >= $two);

//If condition

$animal = "cow";

if($animal == "cow"){
    echo "moo....";

}else if ($animal == "dog"){
    echo"woof...";
}
else{
    echo"I am not an animal";
}

//Switch Statement
$food = "apples";
switch($food){
    case "apples";
    echo"Eating an apple";
    break;
    case "oranges";
    echo "eating an orange";
    break;
    default:
    echo "No food. I'm hungry";
    break;
}

//While loop
$num  = 5;
while($num>0){
    echo "While loop $num <br>";
    $num--;
}

//for loop
for($i=0; $i<5; $i++){
    echo "For loop $i <br>";
}

//Array
$fruits = ["Apples", "Oranges", "Berries"];
echo $fruits[2];

$fruits[] = "Pineapple";

var_dump($fruits);  

foreach($fruits as $fruit){
    echo $fruit;
}

$vehicles = [
    'brand' => "Maruti",
    'color' => "Red"
];


//Function
function helloWorld(){
    echo "Hello World";
}

$add = function($a, $b){
    return $a + $b;
};

helloWorld();
echo $add(5, 2);

//Class

echo $vehicles['brand'];
?>