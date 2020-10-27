class Solution {

/**
 * @param Integer[] $nums
 * @return Integer[]
 */
function smallerNumbersThanCurrent($nums) {
   $small = array();
    for($i=0;$i<count($nums);$i++){
        $count = 0;
        for($j=0;$j<count($nums);$j++){
            if($nums[$j]<$nums[$i]){
                $count++;
            }
        }
        $small[] = $count;
    }
    return $small;
}
}
