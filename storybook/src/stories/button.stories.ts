import { storiesOf } from '@storybook/vue';
import ButtonComponent from '../../../src/components/ButtonComponent';
import Vue from 'vue';

Vue.component('lum-button', ButtonComponent);


storiesOf('Luminis button', module)
    .add('story as a template', () => '<lum-button></lum-button>')
    .add('story as a component', () => ({
        components: { ButtonComponent },
        template: '<lum-button></lum-button>'
    }));