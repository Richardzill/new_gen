var agent_container = document.querySelectorAll('.card-container')
var agent_detail = document.querySelectorAll('.agent-detail')
const map_arr = []
for(let x=0; x<agent_container.length; x++){
  map_arr.push(x)
}
var agent_map = (arr1, arr2, arr3)=>arr1.map((i)=>{
  arr2[i].addEventListener('mouseover',()=>{
    arr3[i].style.transform = 'translateY(0px)'
  })
  arr2[i].addEventListener('mouseout',()=>{
    arr3[i].style.transform = 'translateY(75px)'
  })
})

agent_map(map_arr, agent_container, agent_detail)