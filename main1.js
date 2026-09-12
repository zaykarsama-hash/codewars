



console.log()

console.log()

//      ${}
//console.log()    [i]     eval(n)



//console.log()   let i=0;i< .length;i++


/*

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
  
  if(h.includes("(")||!(h.includes(")"))){
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
   
  return calc(`${Frs}${Ecal(Mid)}${Las}`)
  
}

console.log(calc("1+1") )                   // 2
console.log(calc("8/16")        )           // 0.5
console.log(calc("3 -(-1)")        )         // 4
console.log(calc("2 + -2")       )          // 0
console.log(calc("10- (4 - 9) * 5 ")     )   // 35
console.log(calc("10/2")      )             // 5
console.log(calc("3 * 5")              )    // 15
console.log(calc("-7 * -6 / 3")    )        // 14
console.log(calc("(2 / 2)+ (3* 4.33 - -6)")) // 19.990000000000002
              // 3 / -6 * -7 
              // -7 * -6 / 3
              
              
function temps(v0, slope, dTot) {
  let t=0;
  let d=0;
  let v=v0;
  let watts=225;
  let DELTA_T = (1/60)
  let DRAG = 60.0 * 0.3 / 3.6;
  let G_THRUST = 60 * 3.6 * 3.6;
  let GRAVITY_ACC = 9.81 * 3.6 * 60.0;
  let MASS = 80;
  
  let thrust =  null;
  let gravity =  null;
  let drag =  null;
  let gamma =  null;
  
  while(d<dTot){
    
    thrust =(v>0&&watts>0)?((G_THRUST * watts )/(Math.abs(v)*MASS)):0;
    gravity=-(GRAVITY_ACC * Math.sin(Math.atan(slope/100)));
    drag = -(DRAG * Math.abs(v) * Math.abs(v) / MASS) 
    let gam =thrust+gravity+drag;
    
    gamma=(Math.abs(gam)<1e-5) ? 0 : gam ;
    
    v += gamma*(1/60);
    t += (1/60);
    d +=((v*(1/60))/60);
    watts -= 0.5*(1/60);
    
    if (v - 3.0 <= 1e-2) {return -1};
  }
  return Math.round(t);
}



*/


//for(let i=0;i<4;i++){
  // for(let j=0;j<10;j++){
    //   console.log(r()) }}

//console.log(Number("h"))

//console.log("50"-10)

//console.log()
//328
//14


//String.prototype.tr=function(){return this.capitalize()==this?this.capitalize():this}


//function showRandomQuestion() {
//  const randomIndex = Math.floor(Math.random() * questions.length);
//  const questionElement = document.getElementById("question");
//  questionElement.textContent = questions[randomIndex];}

//};function iuy(){

// function r(n,x){return Math.floor((Math.random()*(x-n+1))+n);};for(let i=0;i<1;i++){console.log(r(1,13));};