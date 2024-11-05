const stripHTML = (html: any) => {
   
        let doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
     
}

export default stripHTML