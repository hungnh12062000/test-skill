<?php

$array = array();
$flag = false;
$count = 0;

for ($i = 0; $i < 100; $i++) {
     $number_random = mt_rand(1, 1000) / 10;
     $array[] = $number_random;

     if ($array[$i] == is_int($array[$i])) {
          $count += 1;
          echo $array[$i] . " là số nguyên." . '<br/>';
          $flag = true;
     }
}

if ($flag == true) {
     echo 'Có tất cả ' . $count . " số nguyên.";
} else {
     echo 'Không có số nguyên nào.';
}
