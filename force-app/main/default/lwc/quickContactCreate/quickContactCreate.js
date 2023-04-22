import { LightningElement, wire, api } from 'lwc';
import QuickCreate from '@salesforce/apex/CreateContact.QuickCreate';
import { createReplicatedDataset } from 'lightning/analyticsWaveApi';

export default class QucikContactCreate extends LightningElement {

    FirstName = "";
    LastName = " ";
    ContactId = " ";

    CreateContact(event){
        const inputBox = this.template.querySelectorAll("lightning-input");
        console.log('Entered Method');
        inputBox.forEach(function(element) {
            if(element.name == "FirstName")
            {
                this.FirstName = element.value;
            }
            else if(element.name == "LastName")
            {
                this.LastName = element.value;
            }
        }
        );
        console.log(this.FirstName);
        console.log(this.LastName); 
    }
}