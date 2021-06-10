
const isIntersecting = (entry)=>{
    return entry.isIntersecting
}

const accion = (entry)=>{
    const nodo = entry.target;
    nodo.src = nodo.dataset.src
    observer.unobserve(nodo)
}

const observer = new IntersectionObserver((entries)=>{
    entries
        .filter(isIntersecting)
        .forEach(accion)
})

export const registerImg = (img) =>{
    observer.observe(img) 
}
