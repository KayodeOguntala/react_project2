export const range = (start, end, step = 1) => {
  let output = [];
 
  if (end === undefined) {
    end = start;
    start=0;
  }
   if ((step > 0 && start > end) || (step < 0 && start < end)) return [];
  for (let i = start; i < end; i += step){
    output.push (i);
  }
  
  return output;
};
