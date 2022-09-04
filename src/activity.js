const MONTHS = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

export default class Activity {

    constructor(name, startDate, endDate, duration){
        this._name = name;
        this._startDate = startDate;
        this._endDate = endDate;
        this._duration = duration;
        this._participants = [];
    }

    setName(name){
        this._name = name;
    }

    getName(name) {
        return this._name
    }

    setStartDate(startDate){
        this._startDate = startDate;
    }

    setEndDate(endDate){
        this._endDate = endDate;
    }

    getDuration(duration){
        return this._duration;
    }

    getDays(){
        return (this._endDate - this._startDate) / 86400000;
    }

    getAnnouncement(){
        let firstDay = this._startDate.getDate();
        let firstMonth = MONTHS[this._startDate.getMonth()];
        let firstYear = this._startDate.getYear().toString();
        firstYear = firstYear.substr(1);
        let fechaInicio = firstDay + " de " + firstMonth + " del " + firstYear;

        let secondDay = this._endDate.getDate();
        let secondMonth = MONTHS[this._endDate.getMonth()];
        let secondYear = this._endDate.getYear().toString();
        secondYear = secondYear.substr(1);
        let fechaFinal = secondDay + " de " + secondMonth + " del " + secondYear;

        let texto = "El evento " + this._name + " inicia el " + fechaInicio + " y termina el " + fechaFinal + " y tiene una duración de " + this._duration + " horas"

        return texto;

    }

    addParticipant(name){
        let nuevo = this._participants.push(name);

        return this._participants;
    }

    getNumParticipants(){
        return this._participants.length;
    }
}