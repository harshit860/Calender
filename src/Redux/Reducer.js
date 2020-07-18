let newdate = new Date()
let initialobj = {
        Months: ["January", "February", "March",
                "April", "May", "June",
                "July", "August", "September",
                "October", "November", "December"],
        PresentMonth: newdate.getMonth(),
        Year: newdate.getFullYear(),
        ActiveDay: newdate.getDate(),
        Number_of_days: new Date(newdate.getFullYear(), newdate.getMonth() + 1, 0).getDate(),
        Days: [],
        Events:JSON.parse(localStorage.getItem('events')) || []
}

export default (state = initialobj, action) => {
        switch (action.type) {
                case "event":
                        console.log(action.val)
                        let events = localStorage.setItem('events',JSON.stringify([...state.Events,action.val]))
                        return {
                                ...state,
                                Events:[...state.Events,action.val]
                        }
                case 'pmonth':
                        let newmonth = state.PresentMonth - 1
                        let newactiveday 
                        if(newmonth != state.PresentMonth)
                        {
                                newactiveday = null
                        }
                        else
                        {
                                newactiveday = newdate.getDate()
                        }
                        
                        let numberdays = new Date(newdate.getFullYear(), newmonth + 1, 0).getDate()
                        // console.log(newmonth, newactiveday, numberdays)
                        let daysarr = []
                        for (let a = 1; a <= numberdays; a++) {
                                daysarr.push(a)
                        }
                        // console.log(daysarr)
                        return {
                                ...state,
                                PresentMonth: newmonth,
                                ActiveDay: null,
                                Number_of_days: numberdays,
                                Days: daysarr
                        }
                        case 'nmonth':
                                let newmonth1 = state.PresentMonth + 1
                                let newactiveday1
                                if(newmonth1 != state.PresentMonth)
                                {
                                        newactiveday1 = null
                                }
                                else
                                {
                                        newactiveday1=newdate.getDate()
                                }
                                let numberdays1 = new Date(newdate.getFullYear(), newmonth1 + 1, 0).getDate()
                                // console.log(newmonth, newactiveday, numberdays)
                                let daysarr1 = []
                                for (let a = 1; a <= numberdays1; a++) {
                                        daysarr1.push(a)
                                }
                                // console.log(daysarr)
                                return {
                                        ...state,
                                        PresentMonth: newmonth1,
                                        ActiveDay: null,
                                        Number_of_days: numberdays1,
                                        Days: daysarr1
                                }
                default:

                        let arr = []
                        for (let a = 1; a <= state.Number_of_days; a++) {
                                arr.push(a)
                        }
                        return {
                                ...state,
                                Days: arr
                        }
        }
}