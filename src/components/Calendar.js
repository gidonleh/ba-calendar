import {useState, React} from 'react'

export default function Calendar() {

    // const [flag, setFlag] = useState(false);
    const [name, setName] = useState('bla')
    // const show = () => {
    //     if (flag) {
    //         return (
    //             <div>
    //                 name: <input type="text"/>
    //                 tel: <input type="text"/>
    //                 order details: <input type="text"/>
    //                 <button>Add</button>
    //             </div>
    //         )
    //     } 
    // }

    async function getDataFromLambda() {
        return fetch('https://cq8yap8us6.execute-api.eu-central-1.amazonaws.com/default/appointmentsData')
          .then(data => data.json())
    
    
      }
    async function receive() {

        // https://yx8gpzet3h.execute-api.eu-central-1.amazonaws.com/default/appointmentHandler?name=name&date=2021-07-22&phoneNumber=0523456789&comments=Prefer+as+early+in+the+morning+as+possible&jobType=paint+job&email=man%40gmail.com
        // https://cq8yap8us6.execute-api.eu-central-1.amazonaws.com/default/appointmentsData
        let data = await getDataFromLambda();
        setName(data);
    }

    return (
        <div>
            <button onClick={()=>{receive()}}>Press to schedule</button>
            <p>

               {name}
            </p>
        </div>
    )
}
