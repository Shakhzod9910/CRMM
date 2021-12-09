let coursesList = document.querySelector('.coursesList')
let coursesTemplate = document.querySelector('#coursesTemplate').content
let lists = document.querySelector('.coursesList')
let outbtn = document.querySelector(".out")
let loader = document.querySelector('.loadingWrapper')


window.addEventListener('load',function(){
    loader.style.display = 'none';
})


const Render = (array,list)=>{
    array.forEach(tracher => {
       let teacherItem = coursesTemplate.cloneNode(true)
       
       let CoursName = teacherItem.querySelector('.CoursName')
       let Courscost = teacherItem.querySelector('.cost')
       CoursName.textContent = tracher.course_name
       Courscost.textContent = '$'+ tracher.course_cost
       let teachers = teacherItem.querySelector('.teachers')
       list.appendChild(teacherItem)
        let modal = document.querySelector('.modal')
       
        teachers.addEventListener("click" , (evt)=>{
            evt.preventDefault()
             modal.classList.add('active')
             let teacherlist = document.querySelector('.teachersname')
             teacherlist.innerHTML = null
             
             console.log(tracher.course_name)
        
             outbtn.addEventListener('click' , (evt)=>{
                 evt.preventDefault();
                 modal.classList.remove("active")
        
        
              



                
        
             })
             
             tracher.teacher_name.forEach(ism=>{
                const newHeader = document.createElement('li')
                newHeader.setAttribute('class', 'names')
                

                 newHeader.textContent = ism
                 console.log(ism)
                 teacherlist.appendChild(newHeader)
                //  console.log(ism)
           
                
            })
            
        })
        
      

    });
}

Render(courses,lists)



