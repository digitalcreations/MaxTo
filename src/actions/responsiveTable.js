export function responsiveTable(node) {
    
    const headers = [...node.querySelectorAll('thead th')]
        .map(n => n.innerText);
    console.log(headers);
    
    headers.forEach((h, i) => {
       [...node.querySelectorAll(`tbody tr > :nth-child(${i+1})`)]
            .forEach(e => e.setAttribute('data-title', h));
    });

    return {
        destroy() {}
    };
}