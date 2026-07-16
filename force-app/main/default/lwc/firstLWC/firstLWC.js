import { LightningElement, track } from 'lwc';
import Toast from 'lightning/toast';
export default class HelloDemo extends LightningElement {
    // Tracks the variable so the UI updates when it changes
    @track greeting = 'World';

    // Event handler to update the variable with user input
    handleInputChange(event) {
        this.greeting = event.target.value;
         handleShowToast();
    }
     handleShowToast() {
        Toast.show(
            {
                label: 'This is a toast notification',
                message: 'This is the toast message',
                variant: 'info',
                // use default mode
            },
            this,
        );
}
}