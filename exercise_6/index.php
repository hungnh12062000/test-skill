<?php 

$courses = array(
     "HTML" => 1200,  
     "CSS" => 1500,  
     "JS" => 1700,  
     "ReactJS" => 2100,  
     "PHP" => 2200,  
     "Laravel" => 2000,  
     "NodeJS" => 2300,  
     "AngularJS" => 2500
);

//idea 1
$value = max($courses);
$key = array_search($value, $courses); //trả về key
echo "the max value is: " . $value . ", its key is: " . $key;

//idea 2
$maxvalue = 0;
foreach($courses as $key => $value){
     if($value > $maxvalue){
          $maxvalue = $value;
          $maxkey = $key;
     }
}
echo "the max value is: " . $maxvalue . ", its key is: " . $maxkey;
