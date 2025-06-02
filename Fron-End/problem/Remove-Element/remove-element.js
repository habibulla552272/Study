

function removeElement(nums,val){
    let k=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[k]=nums[i];
            console.log(nums[k]);
            console.log(nums[i]);
            
            
            k++
        }
    }
    return k;
}
let nums =[2,4,6,4];
let val= 6;
let k= removeElement(nums,val);
console.log(k);
console.log(nums.slice(0,k));

