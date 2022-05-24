
  const popup=()=>{
  let popup_flag = 0
  let popup_target
  let popup_pop
    if (popup_flag === 0) {
      popup_flag = 1
      popup_target = document.querySelector("#cv")
      console.log(popup_target)
      popup_pop = document.createElement("ul")

      popup_pop.style.top = "300px"; popup_pop.style.left = "0px"; popup_pop.style.width = "70px";
      popup_pop.style.borderRadius = "5px"

      const link1 = document.createElement('li')
      link1.style.listStyle = "none"
      link1.style.marginTop = "5px"
      link1.style.borderRadius = "5px"
      const a1 = document.createElement('a')
      link1.appendChild(a1)
      a1.style.color = "black"
      a1.style.textDecoration = "none"
      a1.innerText = "複製連結"
      a1.href="#"
      link1.onmouseenter = (e)=>{
        e.target.style.backgroundColor = "black"
        a1.style.color = "white"
      }
      link1.onmouseleave = (e)=>{
        e.target.style.backgroundColor = "white"
        a1.style.color = "black"
      }

      const link2 = document.createElement('li')
      link2.style.listStyle = "none"
      link2.style.borderRadius = "5px"
      const a2 = document.createElement('a')
      link2.appendChild(a2)
      a2.style.color = "black"
      a2.style.textDecoration = "none"
      a2.innerText = "分享FB"
      a2.href="#"
      link2.onmouseenter = (e)=>{
        a2.style.color = "white"
        e.target.style.backgroundColor = "black"
      }
      link2.onmouseleave = (e)=>{
        a2.style.color = "black"
        e.target.style.backgroundColor = "white"
      }

      const link3 = document.createElement('li')
      link3.style.listStyle = "none"
      link3.style.borderRadius = "5px"
      const a3 = document.createElement('a')
      link3.appendChild(a3)
      a3.style.color = "black"
      a3.style.textDecoration = "none"
      a3.innerText = "分享Line"
      a3.href="#"
      link3.onmouseenter = (e)=>{
        a3.style.color = "white"
        e.target.style.backgroundColor = "black"
      }
      link3.onmouseleave = (e)=>{
        a3.style.color = "black"
        e.target.style.backgroundColor = "white"
      }

      console.log(popup_pop)
      popup_pop.appendChild(link1)
      popup_pop.appendChild(link2)
      popup_pop.appendChild(link3)

      popup_target.appendChild(popup_pop)
      popup_flag = 2
    }
    else if(popup_flag === 1){
      popup_flag = 2
      popup_pop.style.visibility = "visible"
    }
    else if (popup_flag === 2){
      popup_pop.style.visibility = "hidden"
      popup_flag = 1
    }

  }

export default popup