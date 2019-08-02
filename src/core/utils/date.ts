export function GET_DATE_DIFF(inicio: Date, fin: Date): number {
    return fin.getTime() - inicio.getTime();
}

export function GET_YEAR_DIFF(inicio: Date, fin: Date): number {
    const year = new Date(GET_DATE_DIFF(inicio, fin));
    return Math.abs(year.getUTCFullYear() - 1970);
}

export function GET_DAYS_DIFF(inicio: Date, fin: Date): number {
    const day = 1000 * 3600 * 24;
    inicio = new Date(inicio.getTime() - day);
    fin = new Date(fin.getTime() + day);
    const timeDiff = GET_DATE_DIFF(inicio, fin);
    return Math.floor(timeDiff / day);
}
