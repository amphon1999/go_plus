export interface apiProduct {
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

}
