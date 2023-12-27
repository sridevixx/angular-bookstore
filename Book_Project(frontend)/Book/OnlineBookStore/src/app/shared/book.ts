export class Books{
    name!:string;
    id!:string;
    author!:string[];
    publisher!:string;
    price!:number;
    availability!:string;
    shippingtime!:string;
    favorite:boolean = false;
    star :number = 0;
    tags?:string[];
    imageUrl!:string;
    aboutTheBook!:string;
    aboutTheAuthor!:string;
    reviews!:string;
    
    

}