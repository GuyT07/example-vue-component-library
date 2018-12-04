import Vue from 'vue';
import Component from 'vue-class-component';
import {Prop} from 'vue-property-decorator';

@Component({
    template: '<button @click="onClick">Click!</button>',
})
export default class ButtonComponent extends Vue {
    // Initial data can be declared as instance properties
    @Prop({default: 'Hello World'})
    public message!: string;

    // Component methods can be declared as instance methods
    private onClick(): void {
        window.alert(this.message);
    }
}
