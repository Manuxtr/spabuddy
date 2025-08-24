export const formatTimestampToDate=(date)=>{
    const day=date.toLocaleDateString("us",{day:"numeric"});
    const month=date.toLocaleDateString("us",{month:"short"});
    const year=date.getFullyear();
    const formattedDate=`${day} ${month} ${year}`;
    console.log(formattedDate)
    return(
        formattedDate
    )
}
