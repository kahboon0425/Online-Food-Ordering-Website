export class Food{
    // !: means mandatory
    // ?: means optional
    // id:number = 0;  set as default value;
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    favorite:boolean = false;
    stars:number = 0;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
}