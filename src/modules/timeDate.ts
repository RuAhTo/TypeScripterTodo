const dateContainer: HTMLElement | null = document.querySelector('.date');
const timeContainer: HTMLElement | null = document.querySelector('.time');

function timeShift(){
    let today:Date = new Date();
    let hour:number = today.getHours();
    let minute:number = today.getMinutes();
    let date:number = today.getDate();
    let month:string = today.toLocaleString('default', {month: "long"});
    if (timeContainer && dateContainer){
        timeContainer.innerHTML = `<p><b>${hour}:${minute}<b><p>`
        dateContainer.innerHTML = `${date} ${month}`
    }
}

export {timeShift}