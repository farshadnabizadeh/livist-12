function formatDateWithSlashes(inputDateString: any): string {
    const inputDate = new Date(inputDateString);
    
    const day = String(inputDate.getDate()).padStart(2, '0');
    const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1
    const year = String(inputDate.getFullYear());
  
    return `${day}/${month}/${year}`;
  }

  export default formatDateWithSlashes
  
  // Example usage:
//   const inputDateString = 'Thu Sep 30 1999 00:00:00 GMT-0700 (Pacific Daylight Time)';
//   const formattedDate = formatDate(inputDateString);
//   console.log(formattedDate); // Output: "30/09/1999"
  