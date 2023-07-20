export default function classNamesUtil(...classes:string[]){
    return classes.filter(Boolean).join(" ")
}