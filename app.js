var bucketList=[]
var listcontainer=document.getElementById("list-container")
function addValues(){
    var value= document.getElementById("input-field").value 
    bucketList.push(value)
    console.log("bucketList")
    displayList()
}
function displayList(){
listcontainer.innerHTML=""


    
for (i=0;i<bucketList.length;i++){
    var li=document.createElement("li")
    li.innerHTML=bucketList[i]+ `<img onclick="remove(`+i+`)" src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png" style="position:relative;left:100px; alt=""></span>`
    listcontainer.append(li)
    li.style.width="250px"
    li.style.height="30px"    
    li.style.border="1px solid black"
    li.style.borderRadius="25px"
    li.style.marginLeft="620px"
    li.style.marginTop="10px"
    li.style.listStyle="none"
    

    

}
}
function reset(){
    bucketList=[]
    displayList()
    alert("Are you sure to remove previous list ?")

}
function remove(i){
    alert(
        bucketList[i] + "-"+
          " congratulation, you completed this task🚀 at " +
          new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          " " +
          new Date().getDate() +
          "/" +
          new Date().getMonth() +
          "/" +
          new Date().getFullYear()
      );
    bucketList.splice(i,1)
    displayList()

}
