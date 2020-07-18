let newdate = new Date()
let initialobj = {
        Months : ["January", "February", "March",
                "April", "May", "June",
                "July", "August", "September",
                "October", "November", "December"],
        PresentMonth:newdate.getMonth(),
        Year:newdate.getFullYear(),
        ActiveDay:newdate.getDate(),
        Number_of_days:new Date(newdate.getFullYear(), newdate.getMonth() + 1, 0).getDate()

}

export default (state = initialobj, action) => {
        switch (action.type) {
                case 'pmonth':
                        console.log("in preivous")
                        return state
                default:
                        return {       
                                ...state,
                                
                        }
        }
}