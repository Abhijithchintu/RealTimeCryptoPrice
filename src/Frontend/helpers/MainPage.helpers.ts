
const formattedList=(list:Array<any>, stock:string)=>list?.filter(item=>item?.symbol===stock)?.reverse()?.slice(0,20)?.map((item, idx)=>({...item,id:`${item?.timestamp}_${item?.symbol}_${item?._id}_${idx}`})) || [];

function removeDuplicates(arr: Array<any>) {
  const uniqueArray = [];
  const seenObjects = new Set();

  arr.forEach(item => {
      const stringifiedItem = `${item?.symbol}_${item?.timestamp}_${item?.price}`;
      if (!seenObjects.has(stringifiedItem)) {
          seenObjects.add(stringifiedItem);
          uniqueArray.push(item);
      }
  });

  return uniqueArray;
}


const getFormattedList=(list:Array<any>, stock:string)=>{
    const newList=[...removeDuplicates(formattedList(list,stock))];
    return newList;
}


function formatDateTime(timestamp: string) {
    const date = new Date(timestamp);
    
    const dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
  
    return date.toLocaleString('en-US', dateOptions);
  }
  
  
  const COLUMNS = [
    { label: 'Bitcoin', renderCell: (item:any) => item.symbol },
    {
      label: 'Time',
      renderCell: (item:any) =>
        formatDateTime(item.timestamp),
    },
    { label: 'Price', renderCell: (item: any) => item.price },
  ];

  
export {
    getFormattedList, COLUMNS
}