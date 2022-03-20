export class User{
 email : string ; 
 firstname : string ; 
 lastname : string ; 
matricule : number;
password?:string;



    constructor(email ?: string , firstname ?: string , lastname ?: string , matricule ?: number ){
        this.email=email ||'';
        this.firstname=firstname||'';
        this.lastname=lastname||'';
        this.matricule=matricule || 0;
      
    }
    

    
}