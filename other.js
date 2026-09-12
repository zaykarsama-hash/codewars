
function Ecal(n){
  let ar=n.match(/[/+*-]|(\d+)\.(\d+)|(\d+)/g);
  
  let mys=[];
  
  for(let i=ar.length-1;i>=0;i--){
    if(!isNaN(ar[i])){
      if(ar[i-1]=="-"&&isNaN(ar[i-2])){
        mys.push(ar[i]*(-1));
        i--;continue;
      }else{
        mys.push(ar[i]);
        continue;
      }
    }else if(isNaN(ar[i])){
      mys.push(ar[i]);
      continue;
    }
  }
  
  let S=[];
  
  if(mys.includes("*")||mys.includes("/")){
    for(let i=mys.length-1;i>=0;i--){
      if(!isNaN(mys[i])){
        S.push(mys[i])
        continue;
      }else if(isNaN(mys[i])){
        switch (mys[i]) {
          case '*':
            S.push(S.pop()*mys[i-1]);
            i--;
            continue;
            break;
          case '/':
            S.push(S.pop()/mys[i-1]);
            i--;
            continue;
            break;
          default:
            S.push(mys[i])
        }
      }
    }
  }else{
    S=mys.reverse();
  }
  
  if(S.length==1){return S[0]}
  
  let k=1;
  let L=S[0];
  if(isNaN(S[0])){
    k=0;
    L=0;
  }
  
  for(let i=k;i<S.length;i++){
    if(!isNaN(S[i])){
      switch (S[i-1]){
        case "+":
          L=Number(L)+Number(S[i]);
          continue;
          break;
        case '-':
          L=Number(L)+Number((S[i+1]*-1));
          continue;
          break;
      }
    }else if(isNaN(S[i])){
      switch (S[i]){
        case "+":
          L=Number(L)+Number(S[i+1]);
          i++;
          continue;
          break;
        case '-':
          L=Number(L)+Number((S[i+1]*-1));
          i++;
          continue;
          break;
      }
    }
    
  }
  return L;
}

function calc(h){
  h=h.replace(/\s+/g,"");
  
  if(!(h.includes("(")||h.includes(")"))){
    return Number(Ecal(h)) ;
  }
  
  let en= h.length-1;
  let st= 0;
  let o=true;
  
  if(h.includes("(")&&!h.includes(")")){
    return Number(Ecal(h)) ;
  }
  
  for(let i=0;i<h.length;i++){
    if(h[i]==")"){
      en=i;
      for(let j=en-1;j>=0;j--){
        if(h[j]=="("){
          st=j;
          o=false;
          break;
        }
      }
      break;
    } 
  }
  
  let Frs = h.slice(0,st);
  if (o) {
    st--
  }
  let Mid = h.slice(st+1,en);
  let Las =h.slice(en+1);
  // console.log(`Frs: ${Frs} Mid: ${Mid} Las: ${Las}`);
  return calc(`${Frs}${Ecal(Mid)}${Las}`)
  
}

console.log(calc("1+1") )                   // 2
console.log(calc("8/16")        )           // 0.5
console.log(calc("3 -(-1)")        )         // 4
console.log(calc("2 + -2")       )          // 0
console.log(calc("10-(4-9)*5")     )        // 35
console.log(calc("10/2")      )             // 5
console.log(calc("3 * 5")              )    // 15
console.log(calc("-7 * -6 / 3")    )        // 14
console.log(calc("(2 / 2)+ (3* 4.33 - -6)")) // 19.990000000000002
              // 3 / -6 * -7 
              // -7 * -6 / 3