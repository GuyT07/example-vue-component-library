import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    // All component options are allowed in here
    template: '<button @click="onClick">Click!</button>',
})
export default class ButtonComponent extends Vue {
    // Initial data can be declared as instance properties
    public message: string = 'Hello!';

    // Component methods can be declared as instance methods
    private onClick(): void {
        window.alert(this.message);
    }
}
