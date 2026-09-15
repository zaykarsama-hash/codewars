
function lcs(str1,str2) {
  let res=/\ /g;
  console.log(res.test(str1));

  return "he";
}
  console.log(lcs("abcdef", "acf"));

  //  console.log();
  //  console.log()

//     [i]   `${}`      .length        

//   console.log()  for (let i = 0; i < .length; i++)

// \n \s+a-zA-Z

// new Array(8+Math.max(...legs))

// let S=[];               .replace(/\s+$/g,"")+((h.at(-1)=="_")?"":" ")

// let space="  ";   sgp_e3cb05880bc40429_bb37241116143ef308432ddd1616bffd1881cc6c
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
