
function pattern(legs){
  let [mys,lr,C,o,L] = [[],[],legs.toSorted(),true,(8+Math.max(...legs))];
  for (let i = legs.length-1; i >= 0 ; i--){
    switch (o) {
      case true:
        lr.push(C[i]);
        break;
      default:
        lr.unshift(C[i]);
        break;
    }
    o=(o==true)?false:true;
  }
  class form{
    constructor(l,c=0,p=0){
      let body =["   + +   ","  +o o+  "," +  u  + ","  + ~ +  ","    |    ","  +-o-+  ","_/| o |  ","  +-o-+  "]
      for (let i = 0; i < l-1; i++) {
        body.push("   | |   ")
      };body.push("   I I   ");
      let s=Math.abs(l-c)
      if ((l==c)||(l < c)) {
        body[6]=body[6].split("");
        body[6][7]="";
        body[6][8]="\_";
        body[6]=body[6].join("");
      }else if ((c)&&(l > c)) {
        for (let i = 0; i < body.length; i++) {
          body[i]+=" ".repeat(s);
        };
        
        {let i = 1
        for (; i < s+1; i++) {
          body[5+i]=body[5+i].split("");
          body[5+i][6+i]="";
          body[5+i][7+i]="\ ";
          body[5+i]=body[5+i].join("");
        }
        body[5+i]=body[5+i].split("");
        body[5+i][6+i]="";
        body[5+i][7+i]="\_";
        body[5+i]=body[5+i].join("");
        };
      }else if(!c){
        body[6]=body[6].split("");
        body[6][7]="";
        body[6][8]="\\_";
        body[6]=body[6].join("");
      }
      let s2=Math.abs(l-p)
      if((p)&&(p<l)){
        for (let i = 0; i < body.length; i++) {
          body[i]=" ".repeat(s2)+body[i];
        };
        body[6]=body[6].split("");
        body[6][s2]=" ";
        body[6]=body[6].join("");
        {let i=1;
        for (; i < s2; i++){
          body[6+i]=body[6+i].split("");
          body[6+i][s2]="/";
          body[6+i]=body[6+i].join("");
        }
        body[6+i]=body[6+i].split("");
        body[6+i][0]="_";
        body[6+i][1]="/";
        body[6+i]=body[6+i].join("");
        }
      }

      while(body.length!=L){
        body.unshift(" ".repeat(body[3].length))
      }
      this.body=body;
    }
  }

  {mys.push((new form(lr[0],lr[1])).body);
  let i = 1;
  for (; i < lr.length-1; i++) {
    mys.push((new form(lr[i],lr[i+1],lr[i-1])).body);
  }mys.push((new form(lr[i],0,lr[i-1])).body)}

  let S=[];

  for (let i = 0; i < L; i++) {
    let h="";
    for (let j = 0; j < mys.length; j++) {
      h+=mys[j][i];
    }
    h=h.replace(/\s+$/g,"")
    S.push(h)
  }

  return S.join("\n");
}

  console.log(pattern([1,2,3]));

  //  console.log();
  //  console.log()

//     [i]   `${}`      .length        

//   console.log()  for (let i = 0; i < .length; i++)

// \n \s+a-zA-Z

// new Array(8+Math.max(...legs))

// let S=[];

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






