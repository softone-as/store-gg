import { ComponentMeta, ComponentStory } from '@storybook/react';
import StepItem, {
    StepItemProps,
} from '../../../../components/molecules/StepItem';

export default {
    title: 'Components/Molecules/StepItem',
    component: StepItem,
} as ComponentMeta<typeof StepItem>;

const Template: ComponentStory<typeof StepItem> = (args: StepItemProps) => (
    <StepItem {...args} />
);

export const Default = Template.bind({});

Default.args = {
    title: '1. Start',
    icon: 'step1',
    desc1: 'tes',
    desc2: 'tes',
};
