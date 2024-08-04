export function convertToAmPm(alarmString: any) {
    let [hours, minutes] = alarmString.split(":");
    hours = parseInt(hours);

    let amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours} ${amPm}`;
}