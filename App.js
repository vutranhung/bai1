import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Process(){
  let inputNum=100;
  let input=inputNum;
  let result="";
  if(inputNum==0 || inputNum==1){
    result=inputNum;
  }else{
    for (var i = 2; i <= inputNum; i++) {
        while(inputNum % i == 0) {
           if(result=="")
                  result= i;
           else      
            result=result +" x "+ i;
           inputNum =inputNum/i;
        }
  }
  }
  return(
      <View>
       <Text>Input:{input}</Text>
      <Text>{result}</Text> 
      </View>
    ); 
 }
 

export default function App() {
 let inputNum=20;
 let m = function(inputNum){
       let result=""; 
       if(inputNum==0 || inputNum==1){
          result=inputNum;
       }else{
    for (var i = 2; i <= inputNum; i++) {
        while(inputNum % i == 0) {
           if(result=="")
                  result= i;
           else      
            result=result +" x "+ i;
           inputNum =inputNum/i;
        }
  }
  }
      return result;
    //  return(     
    //   <Text>{result}</Text>      
    //  );
   }

 
   let count=2;

   let lstSoNguyenTo = function(n){
    let result="";
    let max=Math.pow(10,n) ;
    //let m=(int)sqrt(max)
    for(var i=max/10;i<=max;i++){
      if(isSoNguyenTo(i)){
        if(result=="")
            result=i;
        else
          result+=", "+i
      }
    }
    return result;
}

function isSoNguyenTo(n){
   let m = Math.floor(Math.sqrt(n));
    for (i = 2; i <= m; i++) 
    {
        if(n % i == 0) 
            return 0;
    }
    return 1;
}

let inputMobileTrue="0984702383";
let inputMobileFalse="09847023832";
let isMobile = function(inputMobile){
  let result=false;
  let myRe = "^0[0-9]{9}";
  var re = new RegExp(myRe,"g");
   result=  re.test(inputMobile);
   
   return result+"";
}



let inputMobileVNVTTrue="+840984702383"
// +84978333333 +840978333333";
let inputMobileVNVTFalse="+984702383";
let isMobileVNVT = function(inputMobile){
  let result=false;
  let myRe = "(0[0-9]{9}|\\+84[0-9]{9,10})";
  
  var re = new RegExp(myRe,"g");
   result=  re.test(inputMobile);
   
   return result+"";
}



let inputEmailTrue="abc@gmail.com";
let inputEmailFalse="abc.com";
let isEmail = function(inputEmail){
  let result=false;
  var myRe = "^($|[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+)$";
  var re = new RegExp(myRe,"i");
   result=  re.test(inputEmail);
   
   return result+"";
}


let inputPassTrue="abc123A*";
let inputPassFalse="123456abcXY";
let isPass = function(inputPass){
  let result=false;
  let myRe ="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[*&!@#])[A-Za-z0-9*&!@#]{6,}"
  // "[a-z]+[A-Z]+[0-9]+([*&!@#]+){6,}";
  var re = new RegExp(myRe,"g");
   result=  re.test(inputPass);
   
   return result+"";
}


  return (
    <View style={styles.container}>
      <Text>Phân tích 1 số thành các thừa số nguyên tố</Text>   
      <Text>inputNum:{inputNum}</Text>
      <Text>{m(inputNum)}</Text>
      <Text>------------------------------------------</Text>
      <Text>Danh sách số nguyên tố có {count} chữ số</Text>
      <Text>{lstSoNguyenTo(count)}</Text>  
      <Text>-----------------------------------------</Text>  
       <Text>Là số điện thoại có 10 số và bắt đầu bằng số 0</Text>
        <Text>Input:{inputMobileTrue}</Text>
        <Text>Result:{isMobile(inputMobileTrue)}</Text>  
         <Text>Input:{inputMobileFalse}</Text>
          <Text>Result:{isMobile(inputMobileFalse)}</Text> 


      <Text>-----------------------------------------</Text>  
       <Text>Là số điện thoại của Việt Nam và của Viettel.</Text>
       <Text>Chấp nhận trong cả trường hợp +84978333333 hoặc +840978333333</Text>
        <Text>Input:{inputMobileVNVTTrue}</Text>
        <Text>Result:{isMobileVNVT(inputMobileVNVTTrue)}</Text>  
         <Text>Input:{inputMobileVNVTFalse}</Text>
          <Text>Result:{isMobileVNVT(inputMobileVNVTFalse)}</Text>  

           <Text>-----------------------------------------</Text>  
       <Text>Là email</Text>
        <Text>Input:{inputEmailTrue}</Text>
        <Text>Result:{isEmail(inputEmailTrue)}</Text>  
         <Text>Input:{inputEmailFalse}</Text>
          <Text>Result:{isEmail(inputEmailFalse)}</Text>  

  
       <Text>-----------------------------------------</Text>  
       <Text>Là password dủ mạnh</Text>
        <Text>Input:{inputPassTrue}</Text>
        <Text>Result:{isPass(inputPassTrue)}</Text>  
         <Text>Input:{inputPassFalse}</Text>
          <Text>Result:{isPass(inputPassFalse)}</Text>  



    </View>     
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
