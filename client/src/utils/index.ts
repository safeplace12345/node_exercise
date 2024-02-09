export const checkActivityTime = (date: Date) => {
    var date1 = new Date();
    var date2 = new Date(date);

    var diff = date2.getTime() - date1.getTime();

    var msec = diff;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    return Math.abs(hh)
}