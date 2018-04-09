export class IClient {
    Id: number;
    Name: string;
    Gender: string;
    Country: string;
    City: string;
}

export class Client implements IClient{
    Id: number = 0;
    Name: string = "";
    Gender: string = "m";
    Country: string = "";
    City: string = "";
    Password: string=""
}
