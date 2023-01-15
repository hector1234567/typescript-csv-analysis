export const stringToDate = (strDate: string): Date => {
    const arr = strDate
        .split('/')
        .map(s => parseInt(s));
    return new Date(arr[2], arr[1]-1, arr[0]);
}