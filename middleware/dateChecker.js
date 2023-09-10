cutoffDates = {
    history: new Date('2010-01-01')

}
const dateCheck = (route,date) => {
    switch(route){
        case 'history':
            return (date >= cutoffDates.history);
    }
}
module.exports  = {dateCheck};