import { ComponentMeta, ComponentStory } from '@storybook/react';
import ReachedItem, {
    ReachedItemProps,
} from '../../../../components/molecules/ReachedItem';

export default {
    title: 'Components/Molecules/ReachedItem',
    component: ReachedItem,
} as ComponentMeta<typeof ReachedItem>;

const Template: ComponentStory<typeof ReachedItem> = (
    args: ReachedItemProps
) => <ReachedItem {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: 'Players Top Up',
    value: '290M+',
};
