export interface GoDatum {
    id:         string;
    Brand:      string;
    ItemCode:   string;
    ItemCodeNew:string;
    ItemName:   string;
    Model:      string;
    RetailPrice:string;
}

export enum Brand {
    Chevrolet = "CHEVROLET",
    Isuzu = "ISUZU",
    Toyota = "TOYOTA",
    ACD = "ACDELCO",
    ACD2 = "ACDELCO",
}