const formatDate = (dateString: string) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    // @ts-ignore
    const formattedDate = new Date(dateString).toLocaleDateString('tr-TR', options);
    return formattedDate;
  };

  export default formatDate