export const timestampToDate = (timestamp) => {
    const fullDate = new Date(timestamp);
    console.log(fullDate);
    const year = fullDate.getFullYear();
    const month = (fullDate.getMonth() + 1).toString().padStart(2, "0");
    const day = fullDate.getDate().toString().padStart(2, "0");
    const returnData = `${month}/${day}/${year}`;
    return returnData;
};
