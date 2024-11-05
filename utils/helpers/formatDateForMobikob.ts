function convertDateFormatForMobikob(originalDateStr: any) {
    // Create a Date object from the original date string
    const originalDate = new Date(originalDateStr);
  
    // Use the Date methods to get the components (year, month, day, etc.)
    const year = originalDate.getUTCFullYear();
    const month = String(originalDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(originalDate.getUTCDate()).padStart(2, '0');
    const hours = String(originalDate.getUTCHours()).padStart(2, '0');
    const minutes = String(originalDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(originalDate.getUTCSeconds()).padStart(2, '0');
  
    // Create the new formatted date string
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
  
    return formattedDate;
  }
  
export default convertDateFormatForMobikob