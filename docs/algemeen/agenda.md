# Agenda

Dit is een overzicht van zaken die moeten vastgelegd worden. Er wordt ook een **benaderende periode** voor dit evenement of deze deadline gegeven en enklele mogelijke data.

| Beschrijving           | Benaderende periode        |                                  Mogelijke data                                   |
| ---------------------- | -------------------------- | :-------------------------------------------------------------------------------: |
| VZW-kuis               | Voor het eerste verhuur    | {{ format(getDays(8, 0).slice(-3).map(d => add(d,-1)).slice(0,2)).join(" of ") }} |
| Ledenwerving           | Voor de eerste chirozondag |                                                                                   |
| Eerste chirozondag     | Begin academiejaar         |                {{ format(getDays(8, 0).slice(-2)).join(" of ") }}                 |
| Dia-avond              | 1e weekend van oktober     |                          {{ format(getDays(9, 0))[0] }}                           |
| Fuif                   | 2e weekend oktober         |                {{ format(getDays(9, 0).map(d => add(d, -1)))[1] }}                |
| Aanvraag ULDK          | Begin november             |           {{ format(getDays(10, 1).filter(d => d.getDate() > 1))[0] }}            |
| Mosselsouper           | 3e weekend van november    |                          {{ format(getDays(10, 6))[2] }}                          |
| Spaghettiavond         | Eind februari, begin maart |      {{ format(getDays(1, 6).map(d => add(d, 14)).slice(-3)).join(" of ") }}      |
| KerelsBBQ              |
| Deadline kampboekje    |
| Deadline kampprogramma |
| Kamp                   | Begin Augustus             |                                   {{ kamp() }}                                    |


<script setup>
function add(date, i){
    date.setDate(date.getDate() + i);
    return date;
}
function format (days){
    return days.map(d => d.toLocaleString("nl-be", {month: "numeric", day: "numeric"}))
}

function getDays(month, day) {
    // month: 0-11, day 0-6 = sun-sat
    var year = getYear(month);
    var d = new Date(year, month),
        days = [];

    // Get the first day in the month
    while (d.getDay() !== day) {
        d.setDate(d.getDate() + 1);
    }

    // Get all the other days in the month
    while (d.getMonth() === month) {
        days.push(new Date(d.getTime()));
        d.setDate(d.getDate() + 7);
    }

    return days
}

function getYear(month){
    var now = new Date();
    var year = now.getFullYear() + (month < 8 ? 1 : 0) - (now.getMonth() < 7 ? 1 : 0);
    return year;
}

function kamp(){
    var opties = ["5/8 tot 15/8"];
    if (getDays(7, 0)[0].getDate() > 5) opties.push(format([getDays(7, 0)[0], add(getDays(7, 0)[0], 10)]).join(" tot "));
    return opties.join(" of ");
}
</script>

