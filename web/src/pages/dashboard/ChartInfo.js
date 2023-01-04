import {React, useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";



const ChartInfo = () => {

   
    const [cryptValue, setCryptValue] = useState({});
    const [select, setSelect] = useState(0);
    const [favs, setFavs] = useState(["BTC", "DOGE", "ETH", "BNB"])


    useEffect(() => {
        
        const token = localStorage.getItem("jwt");
        axios.get("http://localhost:4000/api/v1/users/me", { headers: { "Authorization": `Bearer ${token}` } })
            .then(function (response) {
                const userInfos = response.data.data.data;
                if (userInfos.favorites.length !== 0)
                    setFavs(userInfos.favorites)
                    
                })
            .catch(function (error) {
                console.log(error)
            })

        axios.get("http://localhost:4000/api/v1/history")
        .then(function (response) {
            /* const temp = response.data.hist */
            setCryptValue(response.data.data.hist);
            /* console.log(response.data.data.hist); */
        })
        .catch(function (error) {
            console.log(error)
        })
    }, []);
    
    const changeSelect = (value) =>{
        setSelect(value);
        console.log('aaa ' + value);
        console.log('coucou');
    };
    
     var y = []
     var x = []

     for (const val in cryptValue){
        var date = new Date(cryptValue[val].date)
        y.push(date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear())
        x.push(Number(cryptValue[val].USDT[favs[select]]))
     };

    
   /* new Date(cryptValue[0].date)
 */
    const data = {
        labels: y,
        datasets: [
            {
                label: "My First dataset",
                /* backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)", */
                data: x
            },
        ],
    };
    return (
        <div className={"left"}>
            <div className={"devise"}>
                <div onclick={()=>changeSelect(0)} >{favs[0]}/EUR</div>
                <div onclick={()=>changeSelect(1)} >{favs[1]}/EUR</div>
                <div onclick={()=>changeSelect(2)} >{favs[2]}/EUR</div>
                <div onclick={()=>changeSelect(3)} >{favs[3]}/EUR</div>
            </div>
            <div className={"chart"}>
                <Line data={data} />
            </div>
    {/*         <div className={"market"}>{x.map((x, idx) => {
                return (
                    <div className={"market-column"}>
                        <div>
                            {market_title[idx]}
                        </div>
                        <div>
                            {x}
                        </div>
                    </div>
                )
            })}
            </div> */}
        </div>
    );
};

export default ChartInfo;