//Array və string metodlarından istifadə edərək array-imizdə promptdan gələn dəyərin neçə ədəd
//olduğunu tapan script yazın. Məsələn promptdan "a" dəyəri gəlirsə tərkibində 

let deyer=prompt("deyer daxil et")
let check =0;
let myArr=["alma"]             //daxilinde a olan her hansi bir text
let newArr=arr.toString()     //stringe cevirdi
for (let i=0; i<newArr.length;i++){
    if(deyer===newArr[i]){
        check++
    }
}
console.log(check);
