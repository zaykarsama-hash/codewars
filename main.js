
function lcs(x,y) {


  
  return "";
}
  console.log(lcs("abcdef", "abc" ));

  //  console.log();
  //  console.log()

//     [i]   `${}`      .length        

//   console.log()  for (let i = 0; i < .length; i++)

// \n \s+a-zA-Z

// new Array(8+Math.max(...legs))

// let S=[];               .replace(/\s+$/g,"")+((h.at(-1)=="_")?"":" ")

// let space="  ";
// space=space+"  "
// // S.push();
// S.push(space);
// S.push(8);
// space=space.slice(0,space.length-2);
// S.push(space);
// S.push(8);
//   mys.fill(new Array((9*legs.length)+1).fill("Z"))
// console.log(S.join(""));

  

//function brainfuck_to_c(sc){
//   sc=sc.replace(/[^+-<>.,\[\]]/g,"")
//   while(sc.match(/\+\-|\-\+|<>|><|\[\]/g)){
//     sc=sc.replace(/\+\-|\-\+|<>|><|\[\]/g,"")
//   }
//   let count=0;
//   for(let i=0;i<sc.length;i++){
//     if(count<0){
//       return "Error!";
//     }
//     if(sc[i]=="["){
//       count++;
//     }else if(sc[i]=="]"){
//       count--;
//     }
//   }
//   return (count!=0)?"Error!":((sc=="")?"":Trans(sc));
// }
// function Trans(s){
//   let [S, mys, space]=[[], s.match(/\++|\-+|<+|>+|\.|,|\[|\]/g), ""];
//   for (let i = 0; i < mys.length; i++){
//     if(mys[i].includes("+")){ 
//         S.push(`${space}*p += ${mys[i].length};\n`);
//     } else if(mys[i].includes("-")){ 
//         S.push(`${space}*p -= ${mys[i].length};\n`);
//     } else if(mys[i].includes("<")){
//         S.push(`${space}p -= ${mys[i].length};\n`);
//     } else if(mys[i].includes(">")){
//         S.push(`${space}p += ${mys[i].length};\n`);
//     } else if(mys[i].includes(",")){
//         S.push(`${space}*p = getchar();\n`);
//     }else if(mys[i].includes(".")){
//         S.push(`${space}putchar(*p);\n`);
//     } else if(mys[i].includes("[")){
//         S.push(`${space}if (*p) do {\n`);
//         space=space+"  "
//     } else if(mys[i].includes("]")){ 
//         space=space.slice(0,space.length-2);
//         S.push(`${space}} while (*p);\n`);
//     }
//   }
//   return S.join("");
// }

  //  console.log(brainfuck_to_c("+-[]"));

// function solution(nums) {
//   let fr = nums[0];
//   for(let i = 1; i < nums.length; i++){
//     fr = smod(fr,nums[i]);
//   }
//   return fr*nums.length;
// }
// function smod(a,b){
//   return (b==0)?a:smod(b,a%b);
// }


//              + +              \n   + +      +o o+             \n  +o o+    +  u  +      + +   \n +  u  +    + ~ +      +o o+  \n  + ~ +       |       +  u  + \n    |       +-o-+      + ~ +  \n  +-o-+    /| o |\       |    \n_/| o |\__/ +-o-+ \    +-o-+  \n  +-o-+      | |   \__/| o |\_\n   | |       | |       +-o-+  \n   I I       I I        I I   

`
   + +      + +\n  +o o+    +o o+\n +  u  +  +  u  +\n  + ~ +    + ~ +\n    |        |\n  +-o-+    +-o-+\n_/| o |\__/| o |\_\n  +-o-+    +-o-+\n   I I      I I' to equal '   + +   \n  +o o+  \n +  u  + \n  + ~ +  \n    |    \n  +-o-+  \n_/| o |\_\n  +-o-+  \n   I I   '
Completed in 3ms
Multi person tests
expected '             + +\n   + +      +o o+\n  +o o+    +  u  +      + +\n +  u  +    + ~ +      +o o+\n  + ~ +       |       +  u  +\n    |       +-o-+      + ~ +\n  +-o-+    /| o |\       |\n_/| o |\__/ +-o-+ \    +-o-+\n  +-o-+      | |   \__/| o |\_\n   | |       | |       +-o-+\n   I I       I I        I I' to equal '             + +              \n   + +      +o o+             \n  +o o+    +  u  +      + +   \n +  u  +    + ~ +      +o o+  \n  + ~ +       |       +  u  + \n    |       +-o-+      + ~ +  \n  +-o-+    /| o |\       |    \n_/| o |\__/ +-o-+ \    +-o-+  \n  +-o-+      | |   \__/| o |\_\n   | |       | |       +-o-+  \n   I I       I I        I I   '



`
// console.log('   + +      + +   \n  +o o+    +o o+  \n +  u  +  +  u  + \n  + ~ +    + ~ +  \n    |        |    \n  +-o-+    +-o-+  \n_/| o |\__/| o |\_\n  +-o-+    +-o-+  \n   I I      I I   ')

// console.log('   + +   \n  +o o+  \n +  u  + \n  + ~ +  \n    |    \n  +-o-+  \n_/| o |\_\n  +-o-+  \n   I I   ')
